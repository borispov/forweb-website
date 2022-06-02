const pricingData = [
  {
    title: 'Email Marketing',
    features: [
      'חיבור מערכת דיוור לאתר',
      'ניתור ודיווח ביצועי הקמפיין',
      'ניתור ודיווח ביצועי הקמפיין',
      'ניתור ודיווח ביצועי הקמפיין',
      'ניתור ודיווח ביצועי הקמפיין',
    ],
    price: {
      reccuring: 550,
      setup: 2250,
      fees: null,
    },
    startingAt: false,
  },
  {
    title: 'אתר תדמית',
    features: [
      'עיצוב ב- Figma',
      'פיתוח אתר והטמעת העיצוב',
      'חיבור ל- Domain ואחסון',
      'הדרכה ותמיכה מקיפה לפני מסירה ללקוח',
    ],
    price: {
      reccuring: 1350,
      setup: 2250,
      fees: null,
    },
    startingAt: true,
  },
  {
    title: 'חנות אינטרנטית',
    features: [
      'עיצוב חנות ומותג',
      'פיתוח ב wooCommerce או Shopify',
      'חיבור דומיין, אחסון וסליקה',
      'הדרכה ותמיכה מלאה על שימוש בפלטפורמה',
    ],
    price: {
      reccuring: null,
      setup: 5999,
      fees: null,
    },
    startingAt: true,
  },
  {
    title: 'חבילת תחזוקה',
    features: [
      'אופטימיזציות לאתר',
      'אוטומציות תחזוקה וגיבויים',
      'עריכה ושינוי תכנים באתר',
      'בדיקת שגרתיות',
      'עדכון תוספים וערכת נושא אחת לשבועיים'
    ],
    price: {
      reccuring: 650,
      setup: null,
      fees: null,
    },
    startingAt: true,
  },
  {
    title: 'Google Ads',
    features: [
      'אפיון עסק וקביעת יעדים',
      'חקר מתחרים ומילות מפתח',
      'הקמת קמפיין כולל תוכן',
      'חיבור הקמפיין לאתר עם Google Tags',
      'ניתור נתונים וביצועים'
    ],
    price: {
      reccuring: 650,
      setup: 799,
      fees: '15%',
    },
    startingAt: true,
  },
  {
    title: 'Facebook Ads',
    features: [
      'אפיון עסק וקביעת יעדים',
      'חקר מתחרים ומודעותיהם',
      'הקמת קמפיין פייסבוק וקהלים',
      'חיבור Pixel',
      'עיצוב ויצירת מודעות',
      'מעקב וניתור אחר ביצועים'
    ],
    price: {
      reccuring: 650,
      setup: 999,
      fees: '15%',
    },
    startingAt: true,
  },
];

interface Price {
  reccuring: number | null,
  setup: number | null,
  fees: string | null,
}

interface IPackageItem {
  title: string,
  features: string[],
  price: Price,
  startingAt: boolean,
}

interface PricingItemProps {
  package: IPackageItem;
  children?: React.ReactNode;
}

function PricingItem({ package }: PricingItemProps ) {
  return (
    <div className="grid-item p-8 font-bold">
      <h3 className="text-black text-2xl">
        {package.title}
      </h3>
      <ul>
        {
          package.features.map(feat => (
            <li key={}
          ))
        }
      </ul>
    </div>
  )
}

export default PricingSection() {
  return (
    <section className="space-top">
      <h1 className="">חבילות</h1>
      <div className="pricing-grid grid">
      </div>
    </section>
  )
};