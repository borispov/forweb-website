import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Form from '@/components/form/Form';
import Hero from '@/components/Hero';
import Layout from '@/components/layout/Layout';
import PricingSection from '@/components/pricing/PricingSection';
import ProcessSection from '@/components/process/ProcessSection';
import ServicesSection from '@/components/services/ServicesSection';

import FAQ from '@/components/FAQ';
import Portoflio from '@/components/portfolio/Portfolio';
import Link from 'next/link';
import Narrow from '../icons/Narrow';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Forweb - Boutique Web Design & Development</title>
        <meta name="description" content="Your place for all things web. Design, Development, and Marketing for Small Businesses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />


      {/* Benefits Section */}
      <section className="mx-4 md:mx-12 text-center relative">
        {/* SCRIBBLE ABSOLUTE  */}
        <Narrow 
          className="animate__animated animate__fadeInLeft animate__once absolute left-1/4 -bottom-24 w-52 lg:left-24 lg:-bottom-24 lg:w-96 lg:h-80 sm:w-32 sm:h-20 z-10" />

        <div className="pt-42 max-w-5xl mx-auto pt-24">
          <h4 className="texl-3xl text-secondary">למה אנחנו</h4>
          <h2 className="text-6xl">ובמה אנחנו שונים מכל השאר?</h2>

          <div className="md:grid md:grid-cols-3 pt-16 sm:flex sm:flex-col max-w-5xl mx-auto">

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

          <div className="max-w-md mx-auto pt-14 pb-32 relative">
            <p className="text-sm max-w-sm text-red-700 mb-4 mx-auto">
              בסופו של דבר, אתם מקבלים אתר/חנות/אפליקציה שעושה בדיוק את מה שהעסק והלקוחות שלכם צריכים.
            </p>
            <Link href="#contact-form">
              <button className="primary-button text-3xl shadow-sm hover:shadow-lg rounded-lg relative">
                בואו לעבוד יחד
                <div className="scrib__btn-left w-6 h-10 bg-[url('/scribs/button-addon-left.svg')] absolute">
                </div>
                <div className="scrib__btn-right w-6 h-10 bg-[url('/scribs/button-addon-right.svg')] absolute">
                </div>
              </button>
            </Link>
          </div>

        </div>

      </section>

      <ServicesSection />
      <ProcessSection />
      <PricingSection />
      
      <div className="flex flex-col items-center pb-24">
        {/* <h1 className="thick-underline text-5xl">חברים מספרים</h1> */}
        <div className="flex flex-col lg:flex-row mt-12 gap-y-8 lg:gap-y-0 mb-24">
          <div className="review__card">
            <Image src="/quotes.png" alt="quotes icon" width={54} height={48} objectFit="contain"/>
            <p className="max-w-sm mt-4 text-base">
            הצטערנו שלא פנינו עוד קודם. השירות, המקצועיות, המענה המהיר ומתן הסבר לכל שאלה וייעוץ - הם מעבר לכל. והכי חשוב - מחיר ותוצאות בשטח.
            </p>
            <h2 className="mt-2">איגור ויבגני, Raw Planet</h2>
          </div>

          {/* <div className="review__card">
            <Image objectFit="contain" src="/quotes.png" alt="quotes icon" width={32} height={32}/>
            <p className="max-w-sm">
            פנינו ל Forweb לצורך שיווק ממומן בגוגל ופייסבוק לעסק חדש שלנו. לא רק שקיבלנו מענה מקצועי והסברים שסייעו לנו להבין רבות אודות שיווק ובכלל, אלא מתן מענה והסברים בעלי ערך בנוגע לנושאים כגון תחזוקת האתר, SEO ומה לא...
            </p>
            <h2>אלמוג ויוסי, Pixel Design</h2>
          </div> */}

        </div>
      </div>


      <h1 className="text-center w-80 mx-auto text-5xl thick-underline">PORTFOLIO</h1>
      <Portoflio />
      <Form />
      <FAQ />
      {/* FOOTER HERE  */}


    </Layout>
  )
}

export default Home
