/* eslint-disable */
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {

  return (
    <Html>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-THGTG5Z');
            `
          }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Alef:wght@400;700&family=Work+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <meta name="description" content="Web Design | Web Development - The Best In Industry" />
      </Head>
      <body>
          <script 
            dangerouslySetInnerHTML={{
              __html: `
              <!-- Google Tag Manager (noscript) -->
              <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-THGTG5Z"
              height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
              <!-- End Google Tag Manager (noscript) -->
              `
            }}
          />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
};