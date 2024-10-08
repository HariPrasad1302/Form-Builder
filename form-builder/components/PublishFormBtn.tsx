import React, { startTransition, useTransition } from 'react'
import { Button } from './ui/button'
import { MdOutlinePublish } from 'react-icons/md'
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './ui/alert-dialog'
import { FaIcons, FaSpinner } from 'react-icons/fa'
import { toast } from './ui/use-toast'
import { PublishForm } from '@/actions/form'
import { useRouter } from 'next/navigation'

function PublishFormBtn({id} : {id: number}) {
  const router = useRouter();
  const [loading, startTransition] =useTransition();

  async function publishForm(){
    try {
      await PublishForm(id);
      toast({
        title: "Success",
        description: "Your form now available for public"
      });
      router.refresh();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong"
      })
    }
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
      <Button className='gap-2 text-white bg-gradient-to-r from-indigo-400 to-cyan-400'>
        <MdOutlinePublish className='h-4 w-4'/>
        Publish
    </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>
          Are you absolutely sure?
        </AlertDialogTitle>
        <AlertDialogHeader>
          <AlertDialogDescription>
            This action cannot be undone. After publishing you will not be able to edit this form.
            <br /> <br/>
            <span className='text-md'>
              By publishing this form you will make it available to the public and you will be 
              able to collect submissions.
            </span>
          </AlertDialogDescription>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
            className='' 
            disabled={loading} 
            onClick={(e) => {
              e.preventDefault();
              startTransition(publishForm);
            }}
            >
              Proceed {loading && <FaSpinner className='animate-spin' />}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default PublishFormBtn
