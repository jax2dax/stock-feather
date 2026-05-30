"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import { cn } from '@/lib/utils'
const Header = () => {
  const pathname = usePathname()
  return (
    <header className="main-container inner flex items-center justify-between ">
      <Link  href="/"> 
      <Image src="/logo.svg" alt="Logo" width={132} height={40} />  </Link>
      <nav className="flex gap-6 ">
        <Link href="/" className={cn('nav-link', {'is-active': pathname=== '/', 'is-home': true})}>home</Link>
        <p>search modal</p>
        <Link href="/coins" className={cn('nav-link', {'is-active': pathname=== '/coins'})}>All coins</Link>
      </nav>
    </header>
  )
}

export default Header
