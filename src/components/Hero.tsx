import Link from 'next/link';


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
      <h4 className="lg:text-2xl sm:text-2xl max-w-xl mx-auto pt-6">{HeroSectionData.subtitle_v2}</h4>
      <div className="pt-12">
        <Link href="#contact-form">
          <button className="
          px-20 lg:py-6 py-4 bg-black flex justify-between gap-5 flex-row-reverse items-center mx-auto 
          text-white text-2xl lg:text-4xl font-work font-bold rounded-full shadow-md border-black border-[1px]
          duration-500 hover:shadow-lg hover:bg-white hover:text-black hover:border-black transition-all">
            {HeroSectionData.cta_text}
            <UpRightArrowIcon className=""/>
          </button>
        </Link>
      </div>

      <svg 
        className='absolute animate__animated animate__fadeInRight lg:animate__fadeInLeft left-60 -bottom-24 lg:left-20 lg:top-1/2'
        width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M138.3 92.2C143.5 103.5 137.3 123.2 120.1 138.1C103 153.1 74.8 163.3 61 153.4C47.3 143.4 48 113.4 56.9 96.9C65.8 80.4 82.9 77.5 99.7 77.6C116.6 77.7 133.1 80.8 138.3 92.2Z" fill="url(#paint0_linear_69_10)"/>
        <defs>
        <linearGradient id="paint0_linear_69_10" x1="95.2553" y1="77.5975" x2="95.2553" y2="157.326" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F11BC2"/>
        <stop offset="0.942708" stopColor="#9020E9" stopOpacity="0.74"/>
        </linearGradient>
        </defs>
      </svg>


      <PinkFloydTriangleIcon className="animate__animated animate__fadeInLeft lg:animate__fadeInUp absolute right-3/4 -bottom-32 lg:right-40 lg:-bottom-20 w-32 z-10" />
      <FaceDivider className="mx-auto pt-12 mt-6 animate__animated animate__fadeInDown animate__once" />
    </div>
  )
}


export default Hero;
