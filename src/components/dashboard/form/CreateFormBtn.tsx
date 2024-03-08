import { Button } from "@/components/ui"
import { FilePlusIcon } from "@radix-ui/react-icons"


export const CreateFormBtn = () => {
    return (
        <Button
            variant={"outline"}
            className="h-48 w-full flex flex-col items-center justify-center gap-4 group border border-primary/20 hover:cursor-pointer border-dashed"
        >
            <FilePlusIcon className="h-8 w-8 text-muted-foreground group-hover:text-primary" />
            <span className="font-bold text-xl text-muted-foreground group-hover:text-primary">Crear un nuevo formulario</span>
        </Button>
    )
}
