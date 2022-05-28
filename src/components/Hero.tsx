import * as React from 'react';

import { HeroSectionData } from '@/lib/siteData';

function Hero() {
  return (
    <div className="container pt-48">
      <h1 className="text-7xl">{HeroSectionData.title}</h1>
      <h4 className="text-4xl">{HeroSectionData.subtitle}</h4>
      <div className="button__wrapper">
        <button className="py-4 px-12 font-bold text-5xl">
          {HeroSectionData.cta_text}
        </button>
      </div>
    </div>
  )
}


export default Hero;