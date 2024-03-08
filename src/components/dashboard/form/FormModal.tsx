import { Dialog, DialogHeader, DialogContent, DialogDescription, DialogTitle, DialogTrigger, Separator } from "@/components/ui"
import { CreateForm, CreateFormBtn } from ".."

export const FormModal = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <CreateFormBtn />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader className="space-y-4">
                    <DialogTitle>Crear formulario</DialogTitle>
                    <DialogDescription>
                        Crear un nuevo formulario para comenzar a recoletar información.
                    </DialogDescription>
                </DialogHeader>
                <Separator />
                <CreateForm />
            </DialogContent>
        </Dialog>
    )
}
