import Link from 'next/link';

import { HeroSectionData } from '@/lib/siteData';

import FaceDivider from '@/icons/FaceDivider';
import PinkFloydTriangleIcon from '@/icons/PinkFloydTriangleIcon';
// import UpRightArrowIcon from '@/icons/UpRightArrowIcon';

export default function Hero() {
  return (
    <div className="pt-20 lg:pt-48 md:pt-32 text-center noise-bg pb-12 relative">
      <h1 className="lg:text-7xl text-2xl md:text-4xl font-serif">
        <span className='thick-underline'>{HeroSectionData.title}</span>
      </h1>
      <h4 className="lg:text-2xl text-xl max-w-xl mx-auto pt-6">{HeroSectionData.subtitle_v4}</h4>
      <div className="pt-12">
        <Link href="#pricing">


          <button 
            id="hero-btn"
            className="
            mt-2 primary-button lg:text-3xl lg:primary-button-lg button-hover-sm py-4 bg-[#333] text-primary-300 shadow-sm ">מחירון <span className='pr-2'>&darr;</span></button>

        </Link>
    </div>

      <svg 
        className='absolute overflow-hidden animate__animated animate__fadeIn lg:animate__fadeInLeft -bottom-24 lg:left-20 lg:top-1/2'
        width="91" height="81" viewBox="0 0 91 81" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M88.3 15.2C93.5 26.5 87.3 46.2 70.1 61.1C53 76.1 24.8 86.3 11 76.4C-2.69995 66.4 -1.99995 36.4 6.90005 19.9C15.8 3.4 32.9 0.500002 49.7 0.600002C66.6 0.700002 83.1 3.8 88.3 15.2Z" fill="url(#paint0_linear_182_116)"/>
        <defs>
        <linearGradient id="paint0_linear_182_116" x1="45.2553" y1="0.597549" x2="45.2553" y2="80.3255" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F11BC2"/>
        <stop offset="0.942708" stopColor="#9020E9" stopOpacity="0.74"/>
        </linearGradient>
        </defs>
      </svg> 


      <PinkFloydTriangleIcon className="absolute overflow-hidden animate__animated animate__fadeInLeft lg:animate__fadeInUp right-3/4 -bottom-32 lg:right-40 lg:-bottom-20 w-32 z-10" />
      <FaceDivider className="mx-auto pt-12 mt-6 animate__animated animate__fadeInDown animate__once" />
    </div>
  )
}