import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';

import Form from '@/components/form/Form';
import Hero from '@/components/Hero'
import Layout from '@/components/layout/Layout'
import PricingSection from '@/components/pricing/PricingSection'
import ProcessSection from '@/components/process/ProcessSection'
import ServicesSection from '@/components/services/ServicesSection'


const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Forweb - Boutique Web Design & Development</title>
        <meta name="description" content="Your place for all things web. Design, Development, and Marketing for Small Businesses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <section className="pt-42 mx-12 mx-w-3xl text-center pt-24">
        <h4 className="texl-3xl text-secondary">למה אנחנו</h4>
        <h2 className="text-6xl">ובמה אנחנו שונים מכל השאר?</h2>

        <div className="md:grid md:grid-cols-3 pt-10 sm:flex sm:flex-col">

          <div className="bg-unique1 unique1-shadow rounded-lg flex flex-col max-w-sm text-gray-100 p-10 mx-4">
           <h3 className="text-white">אנחנו מבינים עניין</h3>
           <p className="max-w-sm pt-3">
           יש לנו ניסיון בטכנולוגיות המתקדמות בתחום ואנחנו מקפידים להשתמש בטכנולוגיות המתאימות לצרכים שלכם, ולא רק לפי מה שטרנדי.
           </p>
          </div>

          <div className="bg-unique2 unique2-shadow rounded-lg flex flex-col max-w-sm text-gray-100 p-10 mx-4">
           <h3 className=''>שירות בגובה העיניים</h3>
           <p className="max-w-sm pt-3">
           אתם עסק קטן. אנחנו עסק קטן. 
אנחנו לא טובים מכם, אולי נלמד מכם ויתרה מכך, אנו נשמח לייעץ, לסייע ולהעשיר בידע כל לקוח שמביע עניין וסקרנות.
אנחנו מלווים אתכם בכל שלב בתהליך.
           </p>
          </div>

          <div className="bg-unique3 unique3-shadow rounded-lg flex flex-col max-w-sm text-gray-100 p-10 mx-4">
           <h3 className=''>אתם מרוויחים</h3>
           <p className="max-w-sm pt-3">
           תכל׳ס? אנחנו רוצים שתרוויחו!
מחיר שפוי בתמורה לעבודה איכותית.
תמיד תוכלו למצוא זול יותר, 
אבל אנחנו מאוד תחרותיים ומשאירים לכם מספיק מרחב לנשימה ול..רווחים.

           </p>
          </div>

        </div>

        <div className="max-w-md mx-auto pt-14 pb-32">
          <p className="text-sm max-w-sm text-red-700">
            בסופו של דבר, אתם מקבלים אתר/חנות/אפליקציה שעושה בדיוק את מה שהעסק והלקוחות שלכם צריכים.
          </p>
          <button className="primary-button text-3xl shadow-sm hover:shadow-lg rounded-lg">
            בואו לעבוד יחד
          </button>
        </div>

      </section>

      <ServicesSection />
      <ProcessSection />
      <PricingSection />
      
      <div className="flex flex-col items-center space-y">
        <h1 className="thick-underline text-5xl">חברים מספרים</h1>
        <div className="flex flex-row mt-12">
          <div className="review__card">
            <Image src="/quotes.png" alt="quotes icon" width='32' height={32} objectFit="contain"/>
            <p className="max-w-sm">
            ״הצטערנו שלא פנינו עוד קודם. השירות, המקצועיות, המענה המהיר ומתן הסבר לכל שאלה וייעוץ - הם מעבר לכל. והכי חשוב - מחיר ותוצאות בשטח.
            </p>
            <h2>איגור ויבגני, Raw Planet</h2>
          </div>
          <div className="review__card">
            <Image objectFit="contain" src="/quotes.png" alt="quotes icon" width={32} height={32}/>
            <p className="max-w-sm">
            פנינו ל Forweb לצורך שיווק ממומן בגוגל ופייסבוק לעסק חדש שלנו. לא רק שקיבלנו מענה מקצועי והסברים שסייעו לנו להבין רבות אודות שיווק ובכלל, אלא מתן מענה והסברים בעלי ערך בנוגע לנושאים כגון תחזוקת האתר, SEO ומה לא...
            </p>
            <h2>אלמוג ויוסי, Pixel Design</h2>
          </div>

        </div>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-5xl thick-underline">PORTFOLIO</h1>

        <div className="flex justify-center px-32">
          <div className="max-w-md py-2 px-4 flex flex-col rounded-xl shadow-2xl bg-white">
          {/* Insert Project Images Here h */}
          <h2 className="text-3xl"></h2>
          <p className='pt-4'></p>
          </div>
          <div className="max-w-md py-2 px-4 flex flex-col rounded-xl shadow-2xl bg-white">

          </div>
          <div className="max-w-md py-2 px-4 flex flex-col rounded-xl shadow-2xl bg-white">

          </div>
          <div className="max-w-md py-2 px-4 flex flex-col rounded-xl shadow-2xl bg-white">

          </div>
          <div className="max-w-md py-2 px-4 flex flex-col rounded-xl shadow-2xl bg-white">

          </div>
        </div>
      </div>


      {/* ADD A FORM HERE!!! */}

<Form />

      {/* FAQ SECTION  */}
      <section className="faq noise-bg">

        <div className="px-8 pt-40 max-w-lg mx-auto cursor-default">
        <h2 className="text-center text-gray-600">שאלות?</h2>
        <h3 className="text-center text-gray-600">אם נותרו לכם שאלות, פנו אלינו!</h3>
          <div className="bg-gray-100 rounded-lg flex justify-between py-4 px-16 shadow-2xl mb-4">
            <p>כמה עיצובים אפשר לבקש?</p>
            <p className="faq-item hidden">כמה עיצובים אפשר לבקש?</p>
            <span>&darr;</span>
          </div>
          <div className="bg-gray-100 rounded-lg flex justify-between py-4 px-16 shadow-2xl mb-4">
            <p>איך מתנהלת התקשורת?</p>
            <p className="faq-item hidden">כמה עיצובים אפשר לבקש?</p>
            <span>&darr;</span>
          </div>
          <div className="bg-gray-100 rounded-lg flex justify-between py-4 px-16 shadow-2xl mb-4">
            <p>מה אם אני לא רואה חבילה מתאימה בשבילי?</p>
            <p className="faq-item hidden">כמה עיצובים אפשר לבקש?</p>
            <span>&darr;</span>
          </div>
          <div className="bg-gray-100 rounded-lg flex justify-between py-4 px-16 shadow-2xl mb-4">
            <p>מדוע אין חבילה עבור אפליקציות Web?</p>
            <p className="faq-item hidden">כמה עיצובים אפשר לבקש?</p>
            <span>&darr;</span>
          </div>
        </div>
      </section>
      {/* FOOTER HERE  */}


    </Layout>
  )
}

export default Home
