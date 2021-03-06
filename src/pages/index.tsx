import { gsap } from 'gsap'
import type { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';

import FAQ from '@/components/FAQ';
import Form from '@/components/form/Form';
import Hero from '@/components/Hero';
import Layout from '@/components/layout/Layout';
import Portoflio from '@/components/portfolio/Portfolio';
import PricingSection from '@/components/pricing/PricingSection';
import ProcessSection from '@/components/process/ProcessSection';
import Seo from '@/components/Seo';
// import ServicesSection from '@/components/services/ServicesSection';
// import Narrow from '../icons/Narrow';

const Home: NextPage = () => {

  React.useEffect(() => {
    gsap.from('#benefit-1', { x: 1250 });
    gsap.to('#benefit-1', { x: 0 });
    // gsap.from('#benefit-3', { x: -1250 });
    // gsap.to('#benefit-3', { x: 0 });
  }, [])

  return (
    <Layout>
      <Seo />

      <Hero />

      {/* Benefits Section */}
      <section className="mx-4 md:mx-12 text-center relative">
        {/* SCRIBBLE ABSOLUTE  */}
        {/* <Narrow 
          className="animate__animated animate__fadeInLeft animate__once absolute left-1/4 -bottom-24 w-52 lg:left-24 lg:-bottom-24 lg:w-96 lg:h-80 sm:w-32 sm:h-20 z-10" /> */}

        <div className="pt-42 max-w-5xl mx-auto pt-24">
          <h4 className="texl-3xl text-secondary">למה אנחנו</h4>
          <h2 className="text-6xl">ובמה אנחנו שונים מכל השאר?</h2>

          <div id="benefits" className="md:grid md:grid-cols-3 pt-16 sm:flex sm:flex-col max-w-5xl mx-auto mb-12 overflow-x-hidden px-3">

            <div id="benefit-1" className="bg-unique3 unique3-shadow 
              rounded-lg flex flex-col max-w-sm text-gray-100 p-4
              md:p-10 md:mx-4 md:my-0 my-4 mx-auto">

            {/* OLD  */}
            {/* <h3 className="text-gray-600 text-xl">אנחנו מבינים עניין</h3> */}
            {/* NEW  */}
            <h3 className="text-xl">מומחים בתחומינו</h3>

            {/* OLD  */}
            {/* <p className="max-w-sm pt-3 text-gray-700">
            יש לנו ניסיון בטכנולוגיות המתקדמות בתחום ואנחנו מקפידים להשתמש בטכנולוגיות המתאימות לצרכים שלכם, ולא רק לפי מה שטרנדי.
            </p> */}

            {/* NEW */}
              <p className="max-w-sm pt-1 text-lg">
              משתמשים בטכנולוגיות ובכלים הנכונים לעסק שלך
              </p>

            </div>

            <div className="bg-unique2 unique2-shadow rounded-lg flex flex-col max-w-sm text-gray-100 p-4 md:p-10 md:mx-4 md:my-0 mx-auto my-4">
              <h3 className='text-xl'>שירות בגובה העיניים</h3>
            {/* OLD */}
              {/* <p className="max-w-sm pt-3">
              אתם עסק קטן. אנחנו עסק קטן. 
    אנחנו לא טובים מכם, אולי נלמד מכם ויתרה מכך, אנו נשמח לייעץ, לסייע ולהעשיר בידע כל לקוח שמביע עניין וסקרנות.
    אנחנו מלווים אתכם בכל שלב בתהליך.
              </p> */}
            {/* NEW */}
              <p className="max-w-sm pt-1 text-lg">
                ההצלחה שלכם היא ההצלחה שלנו, אנחנו נעשה הכל כדי שתהיו מרוצים
              </p>
            </div>

            <div id="benefit-3" className="bg-unique3 unique3-shadow rounded-lg flex flex-col max-w-sm text-gray-100 p-4 md:p-10 md:mx-4 md:my-0 mx-auto my-4">
              <h3 className='text-xl'>שברנו את השוק</h3>
              {/* OLD */}
              {/* <p className="max-w-sm pt-3">
              תכל׳ס? אנחנו רוצים שתרוויחו!
    מחיר שפוי בתמורה לעבודה איכותית.
    תמיד תוכלו למצוא זול יותר, 
    אבל אנחנו מאוד תחרותיים ומשאירים לכם מספיק מרחב לנשימה ול..רווחים.

              </p> */}
              {/* NEW */}
              <p className="max-w-sm pt-1 text-lg">
                אין מחירים כאלו עם איכות כזו.
              </p>
            </div>

          </div>

          <h2 className='text-center font-bold text-3xl pb-8'>עובדים עם מיטב הטכנולוגיות המתקדמות</h2>

          <div className="flex justify-center gap-12 md:gap-28 pb-12">
            <Image src="/tech/figma-icon.svg"   width={42} height={42} alt="Figma Icon" />
            <Image src="/tech/react-icon.svg"   width={42} height={42} alt="React Icon" />
            <Image src="/tech/next-icon.svg"    width={42} height={42} alt="Nextjs Icon" />
            <Image src="/tech/wordpress-icon.svg" width={42} height={42} alt='WordPress Icon' />
            <Image src="/tech/webflow-icon.svg" width={42} height={42} alt="Webflow Icon" />
          </div>

        </div>


      </section>

      {/* <ServicesSection /> */}
      <ProcessSection />
      <PricingSection />

      <h1 className="text-center w-80 mx-auto text-4xl lg:text-6xl thick-underline">PORTFOLIO</h1>
      <Portoflio />
      <Form />
      <FAQ />

    </Layout>
  )
}

export default Home