import { HomeButton } from '@/components/ui/home-button'
import { ModeToggle } from '@/components/ui/mode-toggle'
import clsx from 'clsx'
import React from 'react'

function Header({className}:{className?:string}) {
  return (
    <header className={clsx('flex items-center justify-between p-4 sticky top-0 border-b w-full bg-secondary z-50', className)}>
        <HomeButton />
        <ModeToggle />
    </header>
  )
}

export default Header