import type { NextPage } from 'next'
import Head from 'next/head'

import Hero from '@/components/Hero'
import Header from '@/components/layout/Header'
import Layout from '@/components/layout/Layout'
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

      <Header />
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

        <div className="max-w-md mx-auto pt-14">
          <p className="text-sm max-w-sm text-gray-800">
            בסופו של דבר, אתם מקבלים אתר/חנות/אפליקציה שעושה בדיוק את מה שהעסק והלקוחות שלכם צריכים.
          </p>
          <button className="primary-button text-3xl shadow-sm hover:shadow-lg rounded-lg">
            בואו לעבוד יחד
          </button>
        </div>

      </section>

    <ServicesSection />
    <ProcessSection />

    </Layout>
  )
}

export default Home
