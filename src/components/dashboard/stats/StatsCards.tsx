'use client'

import { Card, CardContent, CardHeader, CardTitle, Skeleton } from "@/components/ui"
import { DesktopIcon } from "@radix-ui/react-icons"

export const StatsCards = () => {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Visitas totales</CardTitle>
                <DesktopIcon />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">
                    {/*//Todo Implement a "loading" instead "false", to control the Skeleton */}
                    {false && (
                        <Skeleton>
                            <span className="opacity-0">0</span>
                        </Skeleton>
                    )}
                    {true && 89}
                </div>
                <p className="text-xs text-muted-foreground pt-1">Descripción Total de visitas en los formularios.</p>
            </CardContent>
        </Card>
    )
}
