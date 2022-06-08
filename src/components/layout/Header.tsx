import Image from "next/image";
import React from "react";

import clsxm from "@/lib/clsxm";
import { NavbarData } from "@/lib/siteData";


function NavbarItem({children, href}: {href: string, children: React.ReactNode}) {
  return (
    <a href={href} className={clsxm(
      'text-gray-600 p-5 mx-10 text-xl font-bold',
      'hover:text-gray-900',
    )}>
      {children}
    </a>
  )
}


export default function Header({ layoutVariation = 'new'}) {

  const originalVariation = () => (
    NavbarData.links.map((item, i) => {
      return i === 1
        ? (
          <>
            <NavbarItem href={item.href}>{item.label}</NavbarItem>
            <div className="logo mt-12">
              <Image 
                className="mx-8 pt-5 align-bottom"
                width={90} 
                height={70} 
                src="/logo-vertical.png" alt="forweb logo" />
            </div>
          </>
        )
        : <NavbarItem href={item.href}>{item.label}</NavbarItem>
      }
    )
  )

  const newVariation = () => {
    const navbarContent = NavbarData.links.map((item, i) => (
      <NavbarItem key={i} href={item.href}>{item.label}</NavbarItem>
    ))

    return (
      <>
        {navbarContent}
        <Image 
          className="mx-8 pt-5 align-bottom"
          width={90} 
          height={70} 
          src="/logo-vertical.png" alt="forweb logo" />
      </>
    )
  }

  return (
    <header className='navbar grid justify-center h-32'>
      <div className='flex max-w-5xl items-center'>
        {
          layoutVariation === 'old' &&
            newVariation() || originalVariation()
        }
      </div>
    </header>
  );
}
