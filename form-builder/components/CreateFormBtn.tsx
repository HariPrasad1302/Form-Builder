"use client"

import React from 'react'

import { 
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from './ui/dialog';
import {BsFileEarmarkPlus} from 'react-icons/bs';
import {ImSpinner2} from 'react-icons/im';
import { Button } from './ui/button';
import { 
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from './ui/form';
import {zodResolver} from "@hookform/resolvers/zod"
import * as z from "zod";
import { useForm } from 'react-hook-form';

const formSchema =  z.object({
    name: z.string().min(4),
    description: z.string().optional(),
})

function CreateFormBtn() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    });
    
  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button>Create new form</Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    Create Form
                </DialogTitle>
                <DialogDescription>
                    Create a new form to start collecting responses
                </DialogDescription>
            </DialogHeader>
            
        </DialogContent>
    </Dialog>
  )
}

export default CreateFormBtn
