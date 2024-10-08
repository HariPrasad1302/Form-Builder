"use client"

import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';

function VisitBtn({sharedUrl}:{sharedUrl: string}) {
    const [mounted, setMounted] = useState(false);

    useEffect(() =>{
        setMounted(true);
    },[])

    const shareLink = `${window.location.origin}/submit/${sharedUrl}`;

  return (
    <Button 
        className='w-[200px]'
        onClick={() =>{
            window.open(shareLink, "_blank");
        }}
    >
        Visit  
    </Button>
  )
}

export default VisitBtn