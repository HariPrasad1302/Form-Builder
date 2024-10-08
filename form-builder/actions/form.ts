'use server'

import prisma from '@/lib/prisma';
import { formSchema, formSchemaType } from '@/schemas/form';
import { currentUser } from '@clerk/nextjs/server'

class UserNotFoundErr extends Error {
    constructor() {
        super('User not found. Please make sure you are logged in.');
        this.name = 'UserNotFoundErr';
    }
}
export async function GetFormStats(){
    try {
        const user = await currentUser()

        if(!user){
            throw new UserNotFoundErr();
        }

        const stats= await prisma.form.aggregate({
            where:{
                userId: user.id,
            },
            _sum:{
                visits: true,
                submissions: true,
            }
        })

        const visits =  stats._sum.visits || 0;
        const submissions =  stats._sum.submissions || 0;

        let submissionRate = 0;
        let bounceRate = 0;

        if(visits > 0){
            submissionRate = (submissions / visits) * 100;
            bounceRate = 100 - submissionRate;

        }


        return {
            visits,
            submissions,
            submissionRate,
            bounceRate,
        }
        
    } catch (error) {
        console.error('Error in getting data:', error);
        throw error; // Re-throw the error after logging it
    }
    
    


}


export async function CreateForm(data: formSchemaType){
    const validation = formSchema.safeParse(data);
    if(!validation.success){
        throw new Error("form not valid");
    }

    const user= await currentUser();
    if(!user){
        throw new UserNotFoundErr();
    }

    const {name, description} = data;

    const form = await prisma.form.create({
        data:{
            userId: user.id,
            name,
            description
        }
    });


    if(!form){
        throw new Error("something went wrong");
    }

    return form.id;

}


export async function GetForms(){
    const user= await currentUser();
    if(!user){
        throw new UserNotFoundErr();
    }

    return await prisma.form.findMany({
        where:{
            userId: user.id,
        },
        orderBy:{
            createdAt: "asc"
        }
    });
}

export async function GetFormById(id: number){
     try {
        const user = await currentUser();
        if (!user) {
            throw new UserNotFoundErr();
        }

        const form = await prisma.form.findUnique({
            where: {
                userId: user.id,
                id
            }
        });

        if (!form) {
            throw new Error(`Form with id ${id} not found`);
        }

        return form;
    } catch (error) {
        console.error('Error in GetFormById:', error);
        throw error; // Re-throw the error after logging it
    }
}

export async function UpdateFormContent(id: number, jsonContent: string){

    const user = await currentUser();
    if (!user) {
        throw new UserNotFoundErr();
    }

    return await prisma.form.update({
        where:{
            userId: user.id,
            id,
        },
        data:{
            content: jsonContent
        }
    })

}

export async function PublishForm(id: number){
    const user = await currentUser();
    if (!user) {
        throw new UserNotFoundErr();
    }

    return await prisma.form.update({
        data:{
            published: true
        },
        where:{
            userId: user.id,
            id,
        }
    })
}

export async function GetFormContentByUrl(formUrl: string){
    return await prisma.form.update({
        select:{
            content: true,
        },
        data:{
            visits:{
                increment: 1
            }
        },
        where:{
            sharedURL: formUrl
        }
    })
}


export async function SubmitForm (formUrl: string, content: string){
    return await prisma.form.update({
        data:{
            submissions:{
                increment: 1
            },
            FormSubmissions:{
                create:{
                    content
                }
            }
        },
        where:{
            sharedURL: formUrl,
            published: true
        }

    })
}

export async function GetFormWithSubmissions(id: number){
    const user = await currentUser();
    if (!user) {
        throw new UserNotFoundErr();
    }

    return await prisma.form.findUnique({
        where:{
            userId: user.id,
            id
        },
        include:{
            FormSubmissions:true
        }
    })
}