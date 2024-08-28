import React, { ReactNode } from 'react'
import Logo from '@/components/Logo'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { UserButton } from '@clerk/nextjs'

function layout({children}:{children: ReactNode}) {
  return (
    <div className='flex  flex-grow mx-auto'>
      {children}
    </div>
    
  )
}

export default layout
