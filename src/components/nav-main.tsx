"use client"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { SidebarMenuType } from "@/app/page"

const selectedItemClasses = "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear"

type NavMainProps = {
  items: SidebarMenuType[],
  selectedMenu: string,
  onChange: (menu: SidebarMenuType) => void
}

export function NavMain({
  items,
  selectedMenu,
  onChange
}: NavMainProps) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => (
            <span onClick={() => onChange(item)} key={item.title}>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip={item.title} className={selectedMenu === item.title ? selectedItemClasses : ""}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </span>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
