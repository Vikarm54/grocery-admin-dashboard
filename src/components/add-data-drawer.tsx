"use client"
import * as React from "react"
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerClose,
} from "@/components/ui/drawer"
import { useIsMobile } from "@/hooks/use-mobile"

const AddDataDrawer = ({
    isOpen,
    toggleDrawer,
    title,
    children,
}: {
    isOpen: boolean,
    toggleDrawer: VoidFunction,
    title?: string,
    children?: React.ReactNode
}) => {
    const isMobile = useIsMobile();
    return (
        <Drawer direction={isMobile ? "bottom" : "right"} open={isOpen} onOpenChange={toggleDrawer}>
            <DrawerContent className="max-w-lg w-full">
                <DrawerHeader>
                    <DrawerTitle>{title}</DrawerTitle>
                    <DrawerClose asChild>
                        <button
                            className="ml-auto rounded px-2 py-1 text-sm bg-gray-100 hover:bg-gray-200"
                            aria-label="Close"
                        >
                            Close
                        </button>
                    </DrawerClose>
                </DrawerHeader>
                <div className="p-6 pt-0">{children}</div>
            </DrawerContent>
        </Drawer>
    )
}

export default AddDataDrawer;