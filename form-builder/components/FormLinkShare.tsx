"use client"

import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ImShare } from 'react-icons/im';
import { toast } from './ui/use-toast';

function FormLinkShare({sharedUrl}:{sharedUrl: string}) {
    const [mounted, setMounted] = useState(false);

    useEffect(() =>{
        setMounted(true);
    },[])

    const shareLink = `${window.location.origin}/submit/${sharedUrl}`;

  return (
    <div className="flex flex-gorw gap-4 items-center">
        <Input value={shareLink} readOnly/>
        <Button 
            className='w-[200px]'
            onClick={() =>{
                navigator.clipboard.writeText(shareLink)
                toast({
                    title: "Copied",
                    description: "Link copied to clipboard",
                })
            }}
        >
            <ImShare className='mr-2 h-4 w-4' />
            Share Link
        </Button>
    </div>
  )
}

export default FormLinkShare;