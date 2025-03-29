import { HomeButton } from '@/components/ui/home-button'
import { ModeToggle } from '@/components/ui/mode-toggle'
import React from 'react'

function Header() {
  return (
    <header className='flex align-center justify-between p-4 shadow-lg sticky top-0 border-b w-full'>
        <HomeButton />
        <ModeToggle />
    </header>
  )
}

export default Header