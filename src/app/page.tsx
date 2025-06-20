"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { DataTable } from "@/components/data-table"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { useState } from "react"
import AddDataDrawer from "@/components/add-data-drawer"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { deleteCookie, getCookie } from "cookies-next"
import { TableSkeleton } from "@/components/table-skeleton"
import { sideBardata } from "./data"
import { type Icon } from "@tabler/icons-react"

interface dataType {
  id: number,
  header: string,
  status: string,
  target: string,
  limit: string,
}
export interface SidebarMenuType {
  title: string,
  url: string,
  icon: Icon | undefined,
  data: dataType[],
}

export default function Page() {
  const router = useRouter()

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<dataType[]>(sideBardata.navMain[0].data)
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)
  const [selectedMenu, setSelectedMenu] = useState(sideBardata.navMain[0].title)


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const token = getCookie("auth_token");
    if (!token) {
      router.push("/login")
    } else if (typeof token === "string") {
      const userCredentials = JSON.parse(token);
      if (userCredentials.email !== process.env.NEXT_PUBLIC_ADMIN_USERNAME || userCredentials.password !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
        console.log("In here ===", process.env.NEXT_PUBLIC_ADMIN_USERNAME, process.env.NEXT_PUBLIC_ADMIN_PASSWORD)
        console.log("userCredentials ===", userCredentials)
        deleteCookie("auth-token")
        router.push("/login")
      }
    }
  }, [router])

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" selectedMenu={selectedMenu} sideBardata={sideBardata} onChange={(menu: SidebarMenuType) => {
        setSelectedMenu(menu.title)
        setData(menu.data)
      }} />
      <SidebarInset>
        <SiteHeader selectedMenu={selectedMenu} openDrawer={() => setOpenDrawer(true)} />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              {loading ? (
                <TableSkeleton rows={12} cols={5} />
              ) : (
                <DataTable data={data} />
              )}
            </div>
          </div>
        </div>
        <AddDataDrawer
          isOpen={openDrawer}
          toggleDrawer={() => setOpenDrawer((prev) => !prev)}
          title="Drawer Title"
        />
      </SidebarInset>
    </SidebarProvider>
  )
}
