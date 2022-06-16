import Image from "next/image";
import React from "react";

import clsxm from "@/lib/clsxm";
import { NavbarData } from "@/lib/siteData";

function HamburgerMenu() {
  const [open, setOpen] = React.useState(false);
  const [height, setHeight] = React.useState('0px');

  // const contentSpace = React.useRef(document.createElement("div"))

  const contentSpace = React.useRef<HTMLDivElement>(null);

  const clickHandler = () => {
    setOpen(!open);
    if (contentSpace == undefined || contentSpace.current == undefined) {
      return;
    }
    setHeight( open ? '0px' : `${contentSpace.current.scrollHeight * 10}px`);
  } 

  return (
    <div className="">
      <div 
        onClick={clickHandler}
        className="space-y-2">
        <span className="block w-8 h-0.5 bg-gray-600"></span>
        <span className="block w-8 h-0.5 bg-gray-600"></span>
        <span className="block w-5 h-0.5 bg-gray-600"></span>
      </div>
      <div 
        ref={contentSpace} 
        style={{ maxHeight: `${height}` }}
        className={clsxm(
          "absolute w-screen bg-gray-700 opacity-0 z-10 space-y-4 right-0 left-0 mt-4",
          "transition-all duration-700 opacity-100",
          "flex flex-col justify-evenly"
      )}>
        {
          NavbarData.links.map(item => (
            <NavbarItem key={item.label} cx="my-4 text-white hover:text-gray-100 hover:underline decoration-orange-300" href={item.href}>{item.label}</NavbarItem>
          ))
        }
      </div>
    </div>
  )
}



function NavbarItem({children, href, cx}: {cx?: string, href: string, children: React.ReactNode}) {
  return (
    <a href={href} className={clsxm(
      'text-gray-600 p-5 mx-10 text-xl font-bold',
      'hover:text-gray-900',
      [
        // Add Custom styles if included 
        cx && cx
      ]
    )}>
      {children}
    </a>
  )
}


export default function Header({ layoutVariation = 'old'}) {

  const originalVariation = () => (
    NavbarData.links.map((item, i) => {
      return i === 1
        ? (
          <nav key={item.label}>
            <NavbarItem href={item.href}>{item.label}</NavbarItem>
            <div className="logo mt-12">
              <Image 
                className="mx-8 pt-5 align-bottom"
                width={90} 
                height={70} 
                src="/logo-vertical.png" alt="forweb logo" />
            </div>
          </nav>
        )
        : <NavbarItem key={item.label} href={item.href}>{item.label}</NavbarItem>
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
    <header className='navbar sm:justify-between grid md:justify-center h-32'>
        <div className='hidden md:flex lg:max-w-5xl items-center'>
        {
          layoutVariation === 'new' &&
            newVariation() || originalVariation()
        }
      </div>
      <div className="md:hidden flex justify-between mx-4 items-center -mt-10">
        <HamburgerMenu/>
        <div className="logo -ml-16">
          <Image 
            className="align-middle"
            width={315} 
            height={200} 
            src="/logo.png" alt="forweb logo" />
          </div>
      </div>
    </header>
  );
}
