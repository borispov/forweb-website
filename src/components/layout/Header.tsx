import Image from "next/image";
import React from "react";

import clsxm from "@/lib/clsxm";
import { NavbarData } from "@/lib/siteData";

function HamburgerMenu({ clickHandler, cx }: { clickHandler: React.MouseEventHandler, cx: string}) {

  return (
    <div>
      <div 
        onClick={clickHandler}        
        className={cx}>
          <svg viewBox="0 0 100 80" width="30" height="30">
            <rect width="95" height="10" rx="8"></rect>
            <rect y="30" width="85" height="10" rx="8"></rect>
            <rect y="60" width="100" height="10" rx="8"></rect>
          </svg>
        {/* <span className="block w-10 h-[3px] bg-gray-500"></span>
        <span className="block w-8 h-[3px] bg-gray-500"></span>
        <span className="block w-6 h-[3px] bg-gray-500"></span> */}
      </div>

      {/* <div 
        ref={contentSpace} 
        style={{ maxHeight: `${height}` }}
        className={clsxm(
          "hidden absolute w-screen bg-gray-700 opacity-0 z-10 space-y-4 right-0 left-0 mt-4",
          "transition-all duration-700 opacity-100",
          "flex flex-col justify-evenly shadow-2xl"
      )}>
        {
          NavbarData.links.map(item => (
            <NavbarItem onClickHandler={clickHandler} key={item.label} cx="my-4 text-white hover:text-gray-100 hover:underline decoration-orange-300" href={item.href}>{item.label}</NavbarItem>
          ))
        }
      </div> */}
    </div>
  )
}



function NavbarItem({onClickHandler, children, href, cx}: {onClickHandler?: React.MouseEventHandler ,cx?: string, href: string, children: React.ReactNode}) {
  return (
    <a 
      onClick={onClickHandler}
      href={href} 
      className={clsxm(
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


export default function Header() {

  const [open, setOpen] = React.useState(false);

  const clickHandler = () => {
    setOpen(!open);
  } 

  const originalVariation = () => (
    NavbarData.links.map((item, i) => {
      return i === 1
        ? (
          <nav key={item.label} className="contents">
            <NavbarItem href={item.href}>{item.label}</NavbarItem>
            <div className="logo mt-12">
              <Image 
                className="mx-8 pt-5 align-bottom"
                width={90} 
                height={70} 
                priority
                src="/logo-vertical.png" alt="forweb logo" />
            </div>
          </nav>
        )
        : <NavbarItem key={item.label} href={item.href}>{item.label}</NavbarItem>
      }
    )
  )

  return (
    <header className='navbar sm:justify-between lg:grid lg:justify-center lg:h-32 lg:my-0'>
        {/* This is Desktop view */}
        <div className='hidden lg:flex lg:max-w-5xl items-center'>
          { originalVariation() }
        </div>

      {/* This Is Mobile  */}
      <nav className="
        flex 
        flex-wrap 
        items-center 
        justify-between 
        w-full py-4 lg:py-0 px-4 text-lg text-gray-700 bg-transparent">
        <HamburgerMenu clickHandler={clickHandler} cx="block lg:hidden cursor-pointer" />
        <div className="lg:hidden">
          <Image 
            className="align-middle"
            width={120} 
            height={35} 
            priority
            src="/logo.png" alt="forweb logo" />
          </div>
      </nav>
        <div 
          className={clsxm(
            'lg:hidden',
            'duration-300 overflow-hidden transition-max-height max-h-0 hover:transition-max-height hover:duration-200',
            [ !open && 'hidden' || 'animate-fadeIn max-h-72' ],
            "w-full md:flex md:items-center md:w-auto"
        )}>
          <ul className="text-base text-gray-700 pt-4 md:flex md:justify-between md:pt-0 pb-4">
            {
              NavbarData.links.map(item => (
                <li key={item.label} className="py-2">
                  <NavbarItem onClickHandler={clickHandler} cx="md:p-4 py-2 block hover:text-bg-primary-200 hover:underline" href={item.href}>{item.label}</NavbarItem>
                </li>
              ))
            }
          </ul>
        </div>
    </header>
  );
}
