import Link from 'next/link';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import clsxm from "@/lib/clsxm";

import PriceTag from "@/components/pricing/PriceTag";

import { IPricingItemProps, pricingData_v3 as pricingData } from './pricingData';

// const CALENDLY_URL = 'https://calendly.com/borispov/consult';


function PricingItem({ pkg }: IPricingItemProps ) {

  const { price } = pkg;

  return (
    <div 
      id="pricing"
      className={clsxm(
        'grid-item flex flex-col justify-between basis-1/2',
        'p-8 font-bold',
        'bg-white rounded-sm border-[0px] border-gray-600',
        [
          pkg.isPopular && 'bg-gradient-to-br from-primary-50  to-primary-300 shadow-2xl'
        ]
      )}
    >
      <h3 className="text-black text-2xl">
        {pkg.title}
      </h3>
      <ul className="leading-6 max-w-xs list-disc pt-3 pr-10 mb-8 h-40">
        {
          pkg.features.map((feat, i) => (
            <li key={i} className="list-item mb-2 font-normal text-sm">{feat}</li>
          ))
        }
      </ul>

        <div>
        {
          price.reccuring &&
            <PriceTag 
              prefix={pkg.isManagement ? 'ניהול:' : ''}
              recurring 
              value={price.reccuring} 
              startingAt={pkg.startingAt} 
            />
        }
        {
          price.setup && 
            <PriceTag 
              prefix='הקמה:'
              value={price.setup} 
              startingAt={pkg.startingAt} 
            /> || price.value && <PriceTag
                    value={price.value}
                    startingAt={pkg.startingAt}
                  />
        }

        </div>

      <a 
        href="#contact-form"
        className={clsxm(
        'start-here', 
        'black-button mx-auto w-10/12 py-6 rounded-lg mt-6', 
        'bg-black text-white shadow-sm shadow-gray-300',
        'button-hover-lg',
        )}
        >התחל כאן</a>
      {/* <a href={CALENDLY_URL} className={clsxm(
        'book-here', 
        'font-work mx-auto underline font-light pt-4 tracking-wider',
        'text-black'
        )}
      >Book A Call</a> */}
    </div>
  )
}

export default function PricingSection() {
  return (
    <section className="pricings">

    <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce>
      <svg className="mx-auto" width="373" height="60" viewBox="0 0 373 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 16.9C3.3 13 4.8 9.40003 7.6 6.50003C9.7 4.40003 14.4 4.50003 17 6.90003C20 9.60003 21.5 13.1 20.6 17.2C20.2 19 19.4 20.7 18.5 22.2C16.6 25.5 13.5 26.9 10.3 26.3C6.7 25.6 3.8 22.7 3.2 19.1C3.1 18.4 3.1 17.7 3 16.9Z" fill="#55BBDA"/>
        <path d="M355 49.9C355.3 46 356.8 42.4 359.6 39.5C361.7 37.4 366.4 37.5 369 39.9C372 42.6 373.5 46.1 372.6 50.2C372.2 52 371.4 53.7 370.5 55.2C368.6 58.5 365.5 59.9 362.3 59.3C358.7 58.6 355.8 55.7 355.2 52.1C355.1 51.4 355.1 50.7 355 49.9Z" fill="#EA552B"/>
        <g clipPath="url(#clip0)">
        <path d="M214.8 43.7C213.3 43.4 210.2 42.9 207.2 42.1C200 40 193.4 36.6 187.4 32.1C184 29.5 180.7 26.9 177.3 24.4C173.5 21.6 169.3 19.5 164.8 17.9C157.8 15.4 150.8 16.1 143.8 17.7C137.1 19.2 130.9 22 125.1 25.5C119.2 28.9 113.4 32.5 107.6 35.9C96.7001 42.3 85.3001 47.4 73.0001 50.3C55.1001 54.6 38.4001 50.9 22.8001 41.7C18.8001 39.3 15.7001 36.1 13.6001 31.8C13.2001 30.9 12.4001 29.9 13.5001 29C14.3001 28.4 15.4001 28.7 16.5001 29.8C16.8001 30.1 17.1001 30.5 17.4001 30.9C20.3001 34.8 24.0001 37.6 28.2001 39.8C36.3001 44.1 44.8001 47 53.9001 47.9C61.5001 48.6 68.9001 47.5 76.2001 45.5C86.8001 42.6 96.8001 38.1 106.2 32.4C112.1 28.9 118 25.3 123.9 21.8C130.2 18.2 136.8 15.5 143.8 13.7C156.5 10.6 168 13.1 178.7 20.2C181.9 22.3 184.9 24.7 187.9 27.1C193.9 31.9 200.7 35.2 208 37.6C214.1 39.6 220.1 39.5 226.1 37.1C232.7 34.5 239 31.4 244.8 27.4C250.8 23.2 256.8 19.1 262.5 14.6C272.9 6.5 284.8 2.3 297.6 0.299999C305.3 -0.900002 312.8 0.299999 320 2.9C328.9 6.2 336.6 11.4 342.8 18.7C345.6 22 348.3 25.3 351 28.7C351.6 29.5 352.1 30.5 352.4 31.4C352.8 32.7 351.8 33.7 350.5 33.4C349.7 33.2 348.8 32.8 348.2 32.2C346.8 31 345.4 29.8 344.2 28.4C342.2 26.2 340.4 23.9 338.4 21.7C328 10.3 315.1 4.4 299.5 5C292.8 5.2 286.5 7.3 280.2 9.6C274.9 11.6 270.1 14.3 265.6 17.8C259.9 22.2 254.1 26.5 248.3 30.7C242.3 35.1 235.6 38.4 228.7 41.2C224.8 42.8 220.7 43.7 214.8 43.7Z" fill="black"/>
        <path d="M315.2 24.8998C310.4 25.9998 305.9 26.8998 301.4 27.9998C297.7 28.7998 294.1 29.6998 290.4 30.4998C280.1 32.6998 271 37.3998 262.7 43.5998C259.3 46.0998 256.1 48.8998 252.8 51.5998C251.4 52.6998 250.7 52.8998 250.1 52.1998C249.3 51.0998 249.9 50.1998 250.6 49.3998C251.6 48.2998 252.7 47.1998 253.8 46.1998C264.8 37.0998 276.9 30.2998 291.1 27.5998C297.1 26.4998 303.2 25.3998 309.2 24.3998C311.3 24.0998 313.2 23.7998 315.2 24.8998Z" fill="black"/>
        <path d="M358.9 55.4002C354.7 55.4002 351.1 52.1002 351 48.3002C351 43.4002 354.2 40.0002 358.9 39.9002C363.1 39.8002 366.7 43.1002 366.6 47.1002C366.6 51.4002 364.2 55.3002 358.9 55.4002ZM355.6 45.9002C354.9 48.4002 355.2 49.8002 356.7 51.0002C358 52.0002 359.6 52.0002 360.9 51.0002C362.1 50.1002 362.7 48.2002 362.3 47.0002C361.9 45.9002 360.4 45.1002 358.7 45.3002C357.7 45.3002 356.7 45.6002 355.6 45.9002Z" fill="black"/>
        <path d="M15.6 11.3C15.1 14.1 14.3 17 12.1 19.3C9.90004 21.5 7.30004 21.9 4.40004 20.5C0.800039 18.7 -0.799961 15.3 0.300039 11.4C0.700039 10 1.30004 8.60002 2.00004 7.40002C3.30004 5.40002 5.20004 4.40002 7.60004 4.20002C8.40004 4.20002 9.20004 4.10002 10 4.00002C11.5 3.80002 12.7 4.40002 13.6 5.50002C14.8 7.20002 15.4 9.10002 15.6 11.3ZM8.50004 8.10002C7.00004 8.10002 5.90004 8.70002 5.30004 9.80002C4.80004 10.9 4.30004 12.2 4.10004 13.4C3.80004 15.2 4.60004 16.5 6.40004 17.4C7.60004 18 9.10004 17.6 10.2 16.4C11.3 15.2 11.8 13.7 11.8 12C11.8 10 10 8.20002 8.50004 8.10002Z" fill="black"/>
        </g>
        <defs>
        <clipPath id="clip0">
        <rect width="366.6" height="55.4" fill="white"/>
        </clipPath>
        </defs>
      </svg>
    </AnimationOnScroll>

      <h1 className="text-center text-5xl">חבילות</h1>
      {/* <div 
        className="
          grid gap-1 
          lg:grid-cols-2 grid-cols-[1fr]
          max-w-5xl mx-auto pt-6 items-center justify-center"> */}
          <div className="
            flex md:flex-row flex-col
            justify-items-center justify-center gap-2
            max-w-5xl mx-auto pt-6
          ">
        {
          pricingData.map((pkg, id) => (
            <PricingItem pkg={pkg} key={id} />
          ))
        }
      </div>

      <div className="flex justify-center flex-col items-center pt-12">

        <h2 className="text-center">לא מוצאים חבילה מתאימה? אין בעיה, נתאים לכם!</h2>
        <Link href="#contact-form">
          <button className="mt-6 primary-button button-hover-sm py-4 bg-primary-300 shadow-sm ">התאת חבילה</button>
        </Link>

        <div className="w-4/5 border-b-[1px] pt-16 mx-auto"></div>
      </div>

    </section>
  )
};