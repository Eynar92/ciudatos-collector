'use client'

import { Button, Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui"
import { EyeOpenIcon } from "@radix-ui/react-icons"





export const PreviewDialogBtn = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <Button variant='outline' className="text-sm gap-2">
                    <EyeOpenIcon className="h-4 w-4" />
                    Vista previa
                </Button>
            </DialogTrigger>
            <DialogContent className="h-screen w-screen max-h-screen max-w-full flex flex-col flex-grow p-0 gap-0">
                <div className="px-4 py-2 border-b">
                    <p className="text-lg font-bold text-muted-foreground">Vista Previa</p>
                    <p className="text-sm text-muted-foreground">De esta manera los usuarios podrán ver el formulario</p>
                </div>
                <div className="flex flex-col bg-accent flex-grow items-center justify-center p-4 bg-[url(/assets/img/paper.svg)] dark:bg-[url(/assets/img/paper-dark.svg)]">
                    <div className="flex flex-col flex-grow gap-4 max-w-[620px] bg-background h-full w-full rounded-2xl p-8 overflow-y-auto">
                        // TODO We need to show the form elements, we don't have it
                    </div>
                </div>

            </DialogContent>
        </Dialog>
    )
}
