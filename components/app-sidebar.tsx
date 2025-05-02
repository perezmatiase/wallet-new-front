"use client"

import * as React from "react"
import Link from 'next/link'
import {
  IconDashboard,
  IconListDetails,
  IconReport,
  IconSettings,
  IconUsers,
  IconUserSquare,
} from "@tabler/icons-react"
import { ChartCandlestick, UserRoundPen, HandCoins, BanknoteArrowUp, RssIcon } from 'lucide-react';

import { NavAdvancedTools } from "@/components/nav-advanced-tools"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
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
import { GalleryVerticalEnd } from "lucide-react"

const data = {
  user: {
    name: "shadcn",
    email: "perezmatiase@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Portafolios",
      url: "/portfolios",
      icon: ChartCandlestick,
    },
    {
      title: "Objetivos",
      url: "/goals",
      icon: IconListDetails,
    },
    {
      title: "Profesionales",
      url: "/professionals",
      icon: IconUsers,
    }
  ],
  navSecondary: [
    {
      title: "Configuración",
      url: "/settings",
      icon: IconSettings,
    },
    {
      title: "Contacto",
      url: "/contact",
      icon: UserRoundPen,
    }
  ],
  advancedTools: [
    {
      name: "Salud Financiera",
      url: "#",
      icon: IconUserSquare,
    },
    {
      name: "Rendimientos",
      url: "#",
      icon: HandCoins,
    },
    {
      name: "Dividendos",
      url: "#",
      icon: BanknoteArrowUp,
    },
    {
      name: "Alertas",
      url: "#",
      icon: IconReport,
    },
    {
      name: "Noticias",
      url: "#",
      icon: RssIcon,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>

      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Fintrack</span>
                  <span className="">Licencia Básica</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavAdvancedTools items={data.advancedTools} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
