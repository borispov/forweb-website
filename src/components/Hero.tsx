import * as React from 'react';

import { HeroSectionData } from '@/lib/siteData';

function Hero() {
  return (
    <div className="pt-48 text-center">
      <h1 className="lg:text-7xl sm:text-4xl">
        <span className='thick-underline'>{HeroSectionData.title}</span>
      </h1>
      <h4 className="lg:text-2xl sm:text-2xl max-w-xl mx-auto pt-6">{HeroSectionData.subtitle}</h4>
      <div className="button__wrapper pt-12">
        <button className="primary-button text-4xl rounded-full shadow-md hover:shadow-lg hover:bg-primary-400 transition-all">
          {HeroSectionData.cta_text}
        </button>
      </div>
    </div>
  )
}


export default Hero;
