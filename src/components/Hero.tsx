import * as React from 'react';

import Link from 'next/link';

import { AnimationOnScroll } from 'react-animation-on-scroll';

import { HeroSectionData } from '@/lib/siteData';

import FaceDivider from '@/icons/FaceDivider';
import PinkFloydTriangleIcon from '@/icons/PinkFloydTriangleIcon';
import UpRightArrowIcon from '@/icons/UpRightArrowIcon';


function Hero() {
  return (
    <div className="pt-6 lg:pt-48 md:pt-32 text-center noise-bg pb-12 relative">
      <h1 className="lg:text-7xl sm:text-4xl">
        <span className='thick-underline'>{HeroSectionData.title}</span>
      </h1>
      <h4 className="lg:text-2xl sm:text-2xl max-w-xl mx-auto pt-6">{HeroSectionData.subtitle}</h4>
      <div className="pt-12">
        <Link href="#contact-form">
          <button className="mx-auto flex justify-between gap-5 flex-row-reverse items-center hover:-translate-y-1 hover:shadow-lg primary-button text-black text-4xl rounded-full shadow-md hover:shadow-lg hover:bg-primary-400 transition-all">
            {HeroSectionData.cta_text}
            <UpRightArrowIcon className="" />
          </button>
        </Link>
      </div>

      <PinkFloydTriangleIcon className="animate__animated animate__fadeInUp absolute right-40 -bottom-20 w-32 z-10" />
      <FaceDivider className="mx-auto pt-12 mt-6 animate__animated animate__fadeInDown animate__once" />
    </div>
  )
}


export default Hero;
