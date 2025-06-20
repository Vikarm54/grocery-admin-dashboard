"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { IconShoppingCart } from "@tabler/icons-react"
import { SidebarMenuType } from "@/app/page"

interface SidebarData {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
  navMain: SidebarMenuType[];
}

interface AppSidebarProps {
  sideBardata: SidebarData;
  selectedMenu: string;
  onChange: (menu: SidebarMenuType) => void;
  [key: string]: unknown;
}

export function AppSidebar({
  sideBardata,
  selectedMenu,
  onChange,
  ...props
}: AppSidebarProps) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <span className="flex items-center gap-2">
                <IconShoppingCart className="!size-5" />
                <span className="text-base font-semibold">Grocery Delivery</span>
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain
          items={sideBardata.navMain}
          selectedMenu={selectedMenu}
          onChange={onChange}
        />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={sideBardata.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
