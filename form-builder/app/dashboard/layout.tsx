import Logo from '@/components/Logo'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React, { ReactNode } from 'react'

function Layout({children}:{children: ReactNode}) {
  return (
    <div className='flex flex-col min-h-screen min-w-full
    bg-background max-h-screen'>
        <nav className='flex justify-between items-center border-b border-border
        h-[60px] px-4 py-2'>
            <Logo />
            <div className='flex gap-4 items-center'>
                {/* <ThemeSwitcher /> */}
                <SignedIn>
                  {/* Mount the UserButton component */}
                  <UserButton />
                </SignedIn>
      <SignedOut>
        <SignInButton>
          <button className="bg-gradient-to-r from-blue-500 to-yellow-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-600">
            Sign In
          </button>
        </SignInButton>
      </SignedOut>
            </div>
        </nav>
        <main className='flex w-full flex-grow'>{children}</main>
    </div>
  )
}

export default Layout
