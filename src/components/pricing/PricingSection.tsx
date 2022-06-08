import clsxm from "@/lib/clsxm";

import PriceTag from "@/components/pricing/PriceTag";

import { IPricingItemProps, pricingData } from './pricingData';



function PricingItem({ pkg }: IPricingItemProps ) {

  const { price } = pkg;

  return (
    <div 
      className={clsxm(
        'grid-item flex flex-col justify-between',
        'p-8 font-bold',
        'bg-white rounded-sm',
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

      <a className={clsxm(
        'black-button mx-auto w-10/12 py-6 rounded-lg mt-6', 
        'bg-black text-white shadow-sm shadow-gray-300',
        'button-hover-lg'
        )}
        href="#contact">התחל כאן</a>
      <a href="" className={clsxm(
        'font-work mx-auto underline font-light pt-4 tracking-wider',
        'text-black'
        )}
      >Book A Call</a>
    </div>
  )
}

export default function PricingSection() {
  return (
    <section className="pricings">
      <h1 className="text-center text-5xl">חבילות</h1>
      <div className="grid gap-1 max-w-5xl mx-auto pt-6 grid-cols-3">
        {
          pricingData.map((pkg, id) => (
            <PricingItem pkg={pkg} key={id} />
          ))
        }
      </div>

      <div className="flex justify-center flex-col items-center pt-12">
        <h2 className="">לא מוצאים חבילה מתאימה? אין בעיה, נתאים לכם!</h2>
        <button className="mt-4 primary-button button-hover-sm pt-4 bg-primary-300 shadow-sm ">התאת חבילה</button>
      </div>

    </section>
  )
};