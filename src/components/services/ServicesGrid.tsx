import * as React from 'react';

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

export default function ServicesGrid() {

  return (
    <div className="grid gap-2 grid-cols-2">
      {
        servicesCards.map((benefit) => (
          <div 
          className={clsxm(
            `bg-gradient-to-b from-primary-100 via-primary-400/15 to-primary-100 rounded-lg max-w-sm p-8`,
          )}
            key={benefit.title}>
            {/* <Image src={benefit.iconPath} alt={benefit.title} /> */}
            <h4>{benefit.title}</h4>
            <p>{benefit.text}</p>
          </div>
        ))
      }
    </div>
  )
};
