import type { NextPage } from 'next';
import Image from 'next/image';

import FAQ from '@/components/FAQ';
import Form from '@/components/form/Form';
import Hero from '@/components/Hero';
import Layout from '@/components/layout/Layout';
import Portoflio from '@/components/portfolio/Portfolio';
import PricingSection from '@/components/pricing/PricingSection';
import ProcessSection from '@/components/process/ProcessSection';
import Seo from '@/components/Seo';
import ServicesSection from '@/components/services/ServicesSection';
// import Narrow from '../icons/Narrow';

const Home: NextPage = () => {
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

          <div className="md:grid md:grid-cols-3 pt-16 sm:flex sm:flex-col max-w-5xl mx-auto mb-12">

            <div className="bg-unique1 unique1-shadow rounded-lg flex flex-col max-w-sm text-gray-100 p-4 md:p-10 md:mx-4 md:my-0 my-4 mx-auto">
            <h3 className="text-white">אנחנו מבינים עניין</h3>
            <p className="max-w-sm pt-3">
            יש לנו ניסיון בטכנולוגיות המתקדמות בתחום ואנחנו מקפידים להשתמש בטכנולוגיות המתאימות לצרכים שלכם, ולא רק לפי מה שטרנדי.
            </p>
            </div>

            <div className="bg-unique2 unique2-shadow rounded-lg flex flex-col max-w-sm text-gray-100 p-4 md:p-10 md:mx-4 md:my-0 mx-auto my-4">
            <h3 className=''>שירות בגובה העיניים</h3>
            <p className="max-w-sm pt-3">
            אתם עסק קטן. אנחנו עסק קטן. 
  אנחנו לא טובים מכם, אולי נלמד מכם ויתרה מכך, אנו נשמח לייעץ, לסייע ולהעשיר בידע כל לקוח שמביע עניין וסקרנות.
  אנחנו מלווים אתכם בכל שלב בתהליך.
            </p>
            </div>

            <div className="bg-unique3 unique3-shadow rounded-lg flex flex-col max-w-sm text-gray-100 p-4 md:p-10 md:mx-4 md:my-0 mx-auto my-4">
            <h3 className=''>אתם מרוויחים</h3>
            <p className="max-w-sm pt-3">
            תכל׳ס? אנחנו רוצים שתרוויחו!
  מחיר שפוי בתמורה לעבודה איכותית.
  תמיד תוכלו למצוא זול יותר, 
  אבל אנחנו מאוד תחרותיים ומשאירים לכם מספיק מרחב לנשימה ול..רווחים.

            </p>
            </div>

          </div>

          <h2 className='text-center font-bold text-3xl pb-8'>עובדים עם מיטב הטכנולוגיות המתקדמות</h2>

          <div className="flex justify-center gap-28 pb-12">
            <Image src="/tech/figma-icon.svg"   width={42} height={42} alt="Figma Icon" />
            <Image src="/tech/react-icon.svg"   width={42} height={42} alt="React Icon" />
            <Image src="/tech/next-icon.svg"    width={42} height={42} alt="Nextjs Icon" />
            <Image src="/tech/wordpress-icon.svg" width={42} height={42} alt='WordPress Icon' />
            <Image src="/tech/webflow-icon.svg" width={42} height={42} alt="Webflow Icon" />
          </div>

        </div>


      </section>

      <ServicesSection />
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