// import * as React from "react"
// import { GalleryVerticalEnd } from "lucide-react" 
// import '../style/Appsidebar.css';


// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarMenuSub,
//   SidebarMenuSubButton,
//   SidebarMenuSubItem,
// } from "@/components/ui/sidebar"

// const data = {
//   navMain: [
//     {
//       title: "Dashbord",
//       items: [
//         {
//           title: "Friend",
//         },
//         {
//           title: "Project Structure",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Building Your Application",
//       url: "#",
//       items: [
//         {
//           title: "Routing",
//           url: "#",
//         },
//         {
//           title: "Data Fetching",
//           url: "#",
//           isActive: true,
//         },
//         {
//           title: "Rendering",
//           url: "#",
//         },
//         {
//           title: "Caching",
//           url: "#",
//         },
//         {
//           title: "Styling",
//           url: "#",
//         },
//         {
//           title: "Optimizing",
//           url: "#",
//         },
//         {
//           title: "Configuring",
//           url: "#",
//         },
//         {
//           title: "Testing",
//           url: "#",
//         },
//         {
//           title: "Authentication",
//           url: "#",
//         },
//         {
//           title: "Deploying",
//           url: "#",
//         },
//         {
//           title: "Upgrading",
//           url: "#",
//         },
//         {
//           title: "Examples",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "API Reference",
//       url: "#",
//       items: [
//         {
//           title: "Components",
//           url: "#",
//         },
//         {
//           title: "File Conventions",
//           url: "#",
//         },
//         {
//           title: "Functions",
//           url: "#",
//         },
//         {
//           title: "next.config.js Options",
//           url: "#",
//         },
//         {
//           title: "CLI",
//           url: "#",
//         },
//         {
//           title: "Edge Runtime",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Architecture",
//       url: "#",
//       items: [
//         {
//           title: "Accessibility",
//           url: "#",
//         },
//         {
//           title: "Fast Refresh",
//           url: "#",
//         },
//         {
//           title: "Next.js Compiler",
//           url: "#",
//         },
//         {
//           title: "Supported Browsers",
//           url: "#",
//         },
//         {
//           title: "Turbopack",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Community",
//       url: "#",
//       items: [
//         {
//           title: "Contribution Guide",
//           url: "#",
//         },
//       ],
//     },
//   ],
// }

// export function AppSidebar({
//   ...props
// }) {
//   return (
//     (<Sidebar variant="floating" {...props} className=''>
//       <SidebarHeader className=''>
//         <h1>ttgyhujikolp<h1/>
//         <SidebarMenu>
//           <SidebarMenuItem className=''>
//             <SidebarMenuButton size="lg" asChild>
//               <a href="#">
//                 <div
//                   className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
//                   <GalleryVerticalEnd className="size-4" />
//                 </div>
//                 <div className="flex flex-col gap-0.5 leading-none">
//                   <span className="font-semibold doc">Documentation</span>
//                   <span className="">v1.0.0</span>
//                 </div>
//               </a>
//             </SidebarMenuButton>
//           </SidebarMenuItem>
//         </SidebarMenu>
//       </SidebarHeader>
//       <SidebarContent>
//         <SidebarGroup>
//           <SidebarMenu className="">
//             {data.navMain.map((item) => (
//               <SidebarMenuItem key={item.title}>
//                 <SidebarMenuButton asChild>
//                   <a href={item.url} className="font-medium no-underline">
//                     {item.title}
//                   </a>
//                 </SidebarMenuButton>
//                 {item.items?.length ? (
//                   <SidebarMenuSub className="ml-0 border-l-0 px-1.5 list-none">
//                     {item.items.map((item) => (
//                       <SidebarMenuSubItem key={item.title}>
//                         <SidebarMenuSubButton asChild isActive={item.isActive}>
//                           <a href={item.url} className="no-underline text-dark">{item.title}</a>
//                         </SidebarMenuSubButton>
//                       </SidebarMenuSubItem>
//                     ))}
//                   </SidebarMenuSub>
//                 ) : null}
//               </SidebarMenuItem>
//             ))}
//           </SidebarMenu>
//         </SidebarGroup>
//       </SidebarContent>
//     </Sidebar>)
//   );
// }
