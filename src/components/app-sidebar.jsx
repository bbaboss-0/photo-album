import * as React from "react"
import {
  AudioWaveform,
   LayoutDashboard,
  BookOpen,
  Handshake,
  Command,
  GalleryVerticalEnd,
  Images,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    
    
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
 
  ],
  navMain: [
    {
      title: "Dashbord",
      url: "#",
      icon:  LayoutDashboard,
      isActive: true,
      // items: [
        // {
        //   title: "History",
        //   url: "#",
        // }
      
      // ],
    },
    {
      title: "Friends",
      url: "#",
      icon: Handshake,
      items: [
        {
          title: "Friend List",
          url: "#",
        },
        {
          title: "Friend Request",
          url: "#",
        },
        {
          title: "Discover",
          url: "#",
        },
      ],
    },
   
    {
      title: "Stashes",
      url: "#",
      icon: Images,
      items: [
        // {
        //   title: "General",
        //   url: "#",
        // },
       
      ],
    }, 
     {
      title: "Document",
      url: "/document",
      icon: BookOpen,
      // items: [
      //   {
      //     title: "Introduction",
      //     url: "#",
      //   },
      // ],
    },
  ],
  // projects: [
  //   {
  //     name: "Design Engineering",
  //     url: "#",
  //     icon: Frame,
  //   },
 
  // ],
}

export function AppSidebar({
  ...props
}) {
  return (
    (<Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>)
  );
}
