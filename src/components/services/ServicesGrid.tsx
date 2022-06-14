import * as React from 'react';

import RainDropsIcon from "../../icons/RainDropsIcon";
import StarsIcon from "../../icons/StarsIcon";
import clsxm from "../../lib/clsxm";

//TODO: Style THe Grid and Grid-items!
//TODO2: Make them responsive!
interface BenefitCard {
  title: string,
  text: string,
  iconPath?: string,
}

const servicesCards:BenefitCard[] = [
  {
    title: "עיצוב",
    text: "תהליך עיצוב UI/UX בהתאם לחזון, ערכי המותג והאישיות שלכם. תהליך עיצוב ייחודי שנמשך עד לשביעות רצונכם",
    iconPath: "",
  },
  {
    title: "אתר תדמית",
    text: "עיצוב ופיתוח אתר תדמית התואם את החזון והערכים של העסק שלכם. אנו נעזור לכם לדייק ולאפיין את האתר המושלם.",
    iconPath: "",
  },
  {
    title: "חנות אינטרנטית",
    text: "הקמת חנות מסחר אלקטרונית איכותית, מהירה וממירה. חיבור לסליקה ותוספים חיוניים",
    iconPath: "",
  },
  {
    title: "Web Apps",
    text: "פיתוח אפליקציה לעסק. מערכת זימון תורים, ניהול, נתונים ועוד",
    iconPath: "",
  },
  {
    title: "שיווק ממומן",
    text: "להפוך את העסק שלכם לעסק אמיתי שמזרים הכנסות ורווחים באמצעות שיווק ממומן.",
    iconPath: "",
  }

  
]


const easyServices = [
  ['אפיון וייעוץ', 'מותאמים לעסק'],
  ['עיצוב', 'בהתאם לקוי העסק המותג והאישיות'],
  ['אתרים', 'שמרגישים כמו בית'],
  ['חנויות e-commerce', 'יפות ומוכרות'],
  ['אפליקציות Web', 'בטכנולוגיות מתקדמות'],
  ['שיווק', 'עם תוצאות!'],
  ['מודעות דיגיטליות', 'שלא משאירות אף עין אדישה'],
  ['אימייל מרקטינג', 'כי פשוט פרייאר מי שלא מנצל את זה'],
]

export default function ServicesGrid() {

  const oldVar = false;

  return (
    <div className="pb-12 p-6 xl:mr-0 md:mr-12 pr-10 mt-16 bg-primary-300 rounded-lg w-full md:w-3/5 xl:w-4/5">
      <RainDropsIcon className="opacity-75 md:visible invisible absolute md:right-8 xl:right-28 bottom-1/2"/>
      <StarsIcon className="absolute right-8 bottom-4 lg:right-28 lg:bottom-20 lg:opacity-25"/>
      {
        oldVar && servicesCards.map((benefit) => (
          <div 
          className={clsxm(
            `bg-gradient-to-b from-primary-100 via-primary-400/15 to-primary-100 rounded-lg max-w-sm p-8`,
          )}
            key={benefit.title}>
            {/* <Image src={benefit.iconPath} alt={benefit.title} /> */}
            <h4>{benefit.title}</h4>
            <p>{benefit.text}</p>
          </div>
        )) || easyServices.map((service, i) => {
          return (
            <div key={i} className="text-lg leading-loose">
              <strong>{service[0] + ' '}</strong>
              <span className="text-lg font-normal">
                {service[1]}
              </span>
            </div>
          )
        })
      }
    </div>
  )
};
