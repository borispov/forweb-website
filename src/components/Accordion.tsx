import React, { useState, useRef } from 'react';
import clsxm from '@/lib/clsxm';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export default function Accordion ({ title, children }: AccordionProps) {

  const [active, setActive] = useState(false);
  const [height, setHeight] = useState('0px');
  // TODO: Add a Chevron icon and use Rotate className
  const [rotate, setRotate] = useState('transform duration-700 ease');

  const contentSpace = useRef<HTMLDivElement>(null);

  function toggleAccordion() {
    setActive((prevState) => !prevState)
    // @ts-ignore
    setHeight( active ? '0px' : `${contentSpace.current?.scrollHeight * 2}px`);
    setRotate(active ? 'transform duration-700 ease' : 'transform duration-700 ease rotate-180')
  }

  return (
    <div 
      onClick={toggleAccordion}
      className="bg-gray-100 rounded-lg flex flex-col justify-between py-4 px-16 shadow-2xl mb-4
        transition-all duration-500 ease-in-out">
      <div className="flex justify-between">
        <p className="font-normal text-lg">{title}</p>
        <span className={rotate}>&darr;</span>
      </div>
      <p 
        ref={contentSpace}
        style={{ maxHeight: `${height}`}}
        className={clsxm(
          'overflow-auto transition-all duration-700 ease-in-out text-sm', 
          [ active && 'my-4 leading-7 ' ]
          )} 
      >{children}</p>
    </div>
  )
}