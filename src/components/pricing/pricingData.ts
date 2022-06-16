export interface IPriceType {
  prefix?: string;
  recurring?: boolean;
  value: number;
  startingAt: boolean;
  isManagement?: boolean;
}
export interface IPrice {
  reccuring: number | null,
  setup: number | null,
  fees: string | null,
  value?: number;
}

export interface IPackageItem {
  title: string;
  subtitle?: string;
  features: string[];
  price: IPrice;
  startingAt: boolean;
  isManagement: boolean;
}

export interface IPricingItemProps {
  pkg: IPackageItem;
  children?: React.ReactNode;
}

export const pricingData = [
  {
    title: 'Design',
    subtitle: 'שירותי עיצוב...',
    features: [
      'בקשות עיצוב ללא הגבלה',
      'תיקונים ללא הגבלה',
      'עיצוב דפי נחיתה/אתרי תדמית',
      'לוגו/ כרטיסי ביקור',
      'מודעות דיגיטל',
    ],
    price: {
      value: null,
      reccuring: 899,
      setup: null,
      fees: null,
    },
    startingAt: false,
    isManagement: false,
  },
  {
    title: 'אתר תדמית',
    features: [
      'עיצוב אתר ב- Figma',
      'פיתוח ב- Webflow או WordPress',
      'חיבור לדומיין ואחסון',
      'הדרכה ותמיכה לפני מסירה ללקוח',
    ],
    price: {
      value: null,
      reccuring: 1399,
      setup: null,
      fees: null,
    },
    startingAt: false,
    isManagement: false,
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
      value: 5999,
      reccuring: null,
      setup: null,
      fees: null,
    },
    startingAt: true,
    isManagement: false,
  },
  // {
  //   title: 'Google Ads',
  //   features: [
  //     'אפיון עסק וקביעת יעדים',
  //     'חקר מתחרים ומילות מפתח',
  //     'הקמת קמפיין כולל תוכן',
  //     'חיבור הקמפיין לאתר עם Google Tags',
  //     'ניתור נתונים וביצועים'
  //   ],
  //   price: {
  //     reccuring: 650,
  //     setup: 799,
  //     fees: '15%',
  //   },
  //   startingAt: true,
  //   isManagement: true,
  // },
  // {
  //   title: 'Facebook Ads',
  //   features: [
  //     'אפיון עסק וקביעת יעדים',
  //     'חקר מתחרים ומודעותיהם',
  //     'הקמת קמפיין פייסבוק וקהלים',
  //     'חיבור Pixel',
  //     'עיצוב ויצירת מודעות',
  //     'מעקב וניתור אחר ביצועים'
  //   ],
  //   price: {
  //     reccuring: 650,
  //     setup: 999,
  //     fees: '15%',
  //   },
  //   startingAt: true,
  //   isManagement: true,
  // },
  // {
  //   title: 'Email Marketing',
  //   features: [
  //     'חיבור מערכת דיוור לאתר',
  //     'ייבוא אנשי קשר קיימים',
  //     'יצירת אוטומציות ותוכן',
  //     'יצירת עד 4 מיילים בחודש',
  //     'ניתור ודיווח ביצועים',
  //   ],
  //   price: {
  //     reccuring: 550,
  //     setup: 2250,
  //     fees: null,
  //   },
  //   startingAt: false,
  //   isManagement: true,
  // },
]