import Image from 'next/image'
import React from 'react'

export function LanguageCard({image, name, description}: {image: string, name: string, description: string}) {
  return (
    <div className='fade-up w-full min-h-max space-y-4 p-5 bg-secondary'>
        
        <Image src={image} alt={name} width={100} height={100} className='w-28 h-auto' />
        <h2 className='text-2xl font-bold'>{name}</h2>
        <p className='text-lg'>{description}</p>
    </div>
  )
}