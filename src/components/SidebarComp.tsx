'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo1 from '/public/assets/logo1.png'
import { cn } from '@/lib/utils'
import { LayoutDashboard,ViewIcon,FormInput } from 'lucide-react'
import {usePathname} from 'next/navigation'

const SidebarComp = () => {
  const routes = [
    {
      label:"Dashboard",
      href:"/",
      icon:LayoutDashboard,
      color:"text-sky-500"
    },
    {
      label:"Data Entry",
      href:"/Details",
      icon:FormInput,
      color:"text-violet-500"
    },
    {
      label:"View",
      href:"/View",
      icon:ViewIcon,
      color:"text-pink-700"
    },
  ]
  const pathname = usePathname();
  return (
    <div className='space-y-4 h-full py-4 flex flex-col bg-[#111827] text-white'>
      <div className='px-3 py-2 flex-1'>
        <Link href="/dashboard" className='flex items-center pl-3 mb-14'>
            <div className='relative w-full h-32 mr-4'>
             <Image 
             fill
             alt='Logo'
             src={logo1}
             />
            </div>
        </Link>
       <div>
        {
          routes.map((route)=>(
        <Link
         href={route.href}
         key={route.href}
         className={cn('text-sm group flex p-3 w-full justify-start  font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition',
         route.href === pathname ? 'text-white bg-white/10'  : 'text-zinc-400'  
         )}>
          <div className='flex items-center'>
          <route.icon className={cn('h-6 w-6 mr-3',route.color)}/>
          </div>
          <p className='text-lg'>{route.label}</p>
        </Link>
          ))
        }
       </div>
      </div>
    </div>
  )
}

export default SidebarComp
