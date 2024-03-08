"use client"

import { CreateForm, FormModal, Stats } from '@/components/dashboard'
import { Separator } from '@/components/ui'

export default function Home() {
    return (
        <>
            <Stats />
            <Separator className='my-6' />
            <h2 className='text-3xl font-semibold'>Mis Formularios</h2>
            <Separator className='my-6' />
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <FormModal />
            </div>
        </>
    )
}
