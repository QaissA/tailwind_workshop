import React from 'react'
import NavButton from './nav-button'
import { Bell, Heart } from 'lucide-react'
import { Avatar, AvatarFallback } from './ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'

const Actions = () => {
    return (
        <div className='flex gap-x-4'>
            <NavButton icon={Heart} />
            <NavButton icon={Bell} />
            <Avatar>
                <AvatarImage></AvatarImage>
                <AvatarFallback className='bg-sky-500/50'></AvatarFallback>
            </Avatar>
        </div>
    )
}

export default Actions