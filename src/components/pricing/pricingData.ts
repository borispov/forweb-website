export interface IPriceType {
  prefix?: string;
  recurring?: boolean;
  value: number | string | null;
  startingAt: boolean;
  isManagement?: boolean;
}
export interface IPrice {
  reccuring: number | null,
  setup: number | null,
  fees: string | null,
  value?: number | string | null;
}

export interface IPackageItem {
  title: string;
  subtitle?: string;
  features: string[];
  price: IPrice;
  startingAt: boolean;
  isManagement: boolean;
  isPopular?: boolean;
}

export interface IPricingItemProps {
  pkg: IPackageItem;
  children?: React.ReactNode;
}

export const pricingDatav2 = [
  {
    title: 'עיצוב',
    subtitle: 'שירותי עיצוב...',
    features: [
      'בקשות עיצוב ללא הגבלה',
      'תיקונים ללא הגבלה',
      'עיצוב אתר או דף נחיתה ב-Figma',
      'לוגו/כרטיסי ביקור/מודעות לדיגיטל/רולאפים ועוד...',
      'בקשה אחת בו זמנית, עד 4 ימים לסיום עבודה על בקשה',
    ],
    price: {
      value: null,
      reccuring: 1999,
      setup: null,
      fees: null,
    },
    startingAt: false,
    isManagement: false,
    isPopular: false,
  },
  {
    title: 'פיתוח + אחסון',
    subtitle: 'הכי קל להתחיל ככה...',
    features: [
      'אתר תדמית לכל עסק',
      'כולל אחסון האתר',
      'עדכונים ועריכה על-פי בקשה',
      'שירות וזמינות לכל שאלה'
    ],
    price: {
      value: null,
      recurring: 550,
      setup: null,
      fees: null,
    },
    startingAt: false,
    isManagement: false,
    isPopular: true,
  },
  {
    title: 'עיצוב ופיתוח אתר',
    features: [
      'הכל מחבילת העיצוב',
      'פיתוח ב WordPress/Webflow',
      'פיתוח עם HTML/CSS/JS מאפס',
      'חיבור לאחסון ודומיין',
    ],
    price: {
      value: null,
      reccuring: 2950,
      setup: null,
      fees: null,
    },
    startingAt: false,
    isManagement: false,
    isPopular: false,
  },

]

export const pricingData = [
  {
    title: 'Design',
    subtitle: 'שירותי עיצוב...',
    features: [
      'בקשות עיצוב ללא הגבלה',
      'תיקונים ללא הגבלה',
      'עיצוב אתר או דף נחיתה ב-Figma',
      'לוגו/ כרטיסי ביקור',
      'מודעות דיגיטל',
    ],
    price: {
      value: null,
      reccuring: 1699,
      setup: null,
      fees: null,
    },
    startingAt: false,
    isManagement: false,
  },
  {
    title: 'Web + Design',
    features: [
      'הכל מחבילת העיצוב',
      'פיתוח ב- WordPress',
      'פיתוח ב- Webflow',
      'חיבור לדומיין ואחסון, הדרכה לפני מסירה',
    ],
    price: {
      value: null,
      reccuring: 2299,
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
      'פיתוח ב Shopify/WooCommerce',
      'חיבור דומיין, אחסון וסליקה',
      'הדרכה ותמיכה מלאה על שימוש בפלטפורמה',
    ],
    price: {
      value: 6999,
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



export const pricingData_v3 = [
  {
    title: 'אתר תדמית',
    features: [
      'עיצוב ייחודי ופיתוח מותאם לחזון העסקי ולקהל היעד. ניתן גם להשתמש בתבניות קיימות',
      'חיבור האתר לאחסון וכתובת דומיין',
      'פיתוח ב- WordPress או בקוד מאפס',
      'שימוש בטכנולוגיות הנכונות ביותר לפרויקט שלכם',
      'אפשרות לכתיבת התוכן לאתר',
    ],
    price: {
      value: "2,500",
      reccuring: null,
      setup: null,
      fees: null,
    },
    startingAt: true,
    isManagement: false,
  },
  {
    title: 'אתר מסחר',
    features: [
      'חנות אינטרנטית',
      'עיצוב מאפס או שימוש בתבנית תואמת עסק',
      'Shopify/WooCommerce',
      'חיבור לאחסון, דומיין ושירותי סליקה',
      'אינטגרציה לדיוור אלקטרוני',
    ],
    price: {
      value: "8,000",
      reccuring: null,
      setup: null,
      fees: null,
    },
    startingAt: true,
    isManagement: false,

  }

]
