import Head from 'next/head';

type Favicons = {
  rel: string;
  href: string;
  sizes?: string;
  type?: string;
}


const defaultMeta = {
  title: "Forweb - Boutique Web Design And Development shop",
  siteName: "Forweb - Boutique Web Design And Development shop",
  description: 
  'סוכנות עיצוב ופיתוח אתרים חדשנית. מנויים חודשיים, מחירים קבועים, ללא התחייבות. עבודה מקצועית מובטחת',
  url: "https://forweb.co.il",
  type: 'website',
  robots: 'follow, index',
  image: '',
}

type SeoProps = {
  date?: string;
  templateTitle?: string;
} & Partial<typeof defaultMeta>;

const favicons: Array<Favicons> = [
  {
    rel: 'apple-touch-icon',
    sizes: '57x57',
    href: '/favicon/apple-touch-icon.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '60x60',
    href: '/favicon/apple-touch-icon.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    sizes: '32x32',
    type: 'image/png',
    href: '/favicon/favicon-32x32.png',
  },
  {
    rel: 'icon',
    sizes: '16x16',
    type: 'image/png',
    href: '/favicon/favicon-16x16.png',
  },
  {
    rel: 'android-chrome',
    sizes: '192x192',
    href: '/favicon/android-chrome-192x192x.png',
  },
  {
    rel: 'android-chrome',
    sizes: '512x512',
    href: '/favicon/android-chrome-512x512.png',
  },
]

export default function Seo(props?: SeoProps) {

  const meta = {
    ...defaultMeta,
    ...props
  }

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="author" property='article:author' content="Forweb Technologies" />
      <meta name="robots" content={meta.robots} />
      <meta name="description" content={meta.description} />
      <meta property='og:url' content={meta.url} />
      <meta name="image" property='og:image' content="https://forweb.co.il/images/hero.png" />

      <meta name="facebook:site" content="Forweb" />
      <meta name="facebook:type" content={meta.type} />
      <meta name="facebook:description" content={meta.description} />

      { favicons.map(icon => <link key={icon.href} {...icon} /> )}

    </Head>
  )
}


