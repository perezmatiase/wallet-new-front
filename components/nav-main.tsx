"use client"

import { type Icon } from "@tabler/icons-react"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: Icon
  }[]
}) {
  const pathname = usePathname()
  const isActive = (url: string) => pathname === url

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              {/*<SidebarMenuButton tooltip={item.title}></SidebarMenuButton> TO DO -> FIX THIS */}
              <SidebarMenuButton asChild>
                <Link
                  href={item.url}
                  className={`group relative flex items-center gap-2 rounded-md px-2 py-1 transition-colors ${isActive(item.url)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                    }`}
                >
                  {item.icon && <item.icon className="size-4" />}
                  <span className="truncate">{item.title}</span>

                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
