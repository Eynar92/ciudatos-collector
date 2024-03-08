"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui"

const formSchema = z.object({
    title: z.string().min(5, {
        message: "El nombre debe contener al menos 5 carácteres.",
    }),
    description: z.string().min(10, {
        message: "La descripción debe contener al menos 10 carácteres.",
    }),
})

export function CreateForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem className="space-y-4">
                            <FormLabel>Nombre</FormLabel>
                            <div className="space-y-2">
                                <FormControl>
                                    <Input placeholder="Recolección de datos..." {...field} />
                                </FormControl>
                                <FormDescription>
                                    El nombre nos ayuda a identificar el formulario.
                                </FormDescription>
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem className="space-y-4">
                            <FormLabel>Descripción</FormLabel>
                            <div className="space-y-2">
                                <FormControl>
                                    <Textarea rows={5} placeholder="Este formulario nos ayuda para la recolección..." {...field} />
                                </FormControl>
                                <FormDescription>
                                    Con la descripción podemos saber de que trata el formulario de una mejor manera.
                                </FormDescription>
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    className="w-full"
                >Crear formulario</Button>
            </form>
        </Form>
    )
}
