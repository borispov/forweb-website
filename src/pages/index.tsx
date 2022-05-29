import type { NextPage } from 'next'
import Head from 'next/head'

import Hero from '@/components/Hero'
import Header from '@/components/layout/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Forweb - Boutique Web Design & Development</title>
        <meta name="description" content="Your place for all things web. Design, Development, and Marketing for Small Businesses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />

      <section className="pt-42 mx-12 mx-w-3xl bg">
        <h4 className="texl-3xl ">למה אנחנו</h4>
        <h2 className="texl-5xl ">ובמה אנחנו שונים מכל השאר?</h2>

        <div className="grid max-w-screen-lg grid-cols-2">
          <div className="rounded-sm flex ">
           <h3 className=''></h3>
           <p className="max-w-sm"></p>

          </div>
          <div className="rounded-sm flex ">
           <h3 className=''></h3>
           <p className="max-w-sm"></p>
          </div>

          <div className="rounded-sm flex ">
           <h3 className=''></h3>
           <p className="max-w-sm"></p>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Home
