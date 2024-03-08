import React from 'react'
import { PreviewDialogBtn } from '..'

export const Navbar = () => {
    return (
        <nav className='flex items-center justify-between gap-3 border-b-2 p-4 shadow-sm'>
            <h2 className='flex gap-2 truncate'>
                <span className='text-muted-foreground'>Fomulario:</span>
                <span>Nombre del formulario</span>
            </h2>
            <div>
                <PreviewDialogBtn />
            </div>
        </nav>
    )
}
