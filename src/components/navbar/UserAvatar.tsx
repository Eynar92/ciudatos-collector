"use client"

import { Avatar, AvatarFallback, AvatarImage } from '../ui'

export const UserAvatar = () => {
    return (
        <Avatar className="h-[50px] w-[50px]">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}
