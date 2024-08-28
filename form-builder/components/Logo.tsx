import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href={"/"} className='font-bold text-3xl bg-gradient-to-r
    from-indigo-400 py-2 to-cyan-400 text-transparent bg-clip-text hover:cursor-pointer'>
        FormiFy
    </Link>
  )
}

export default Logo
