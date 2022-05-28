import Image from 'next/image';
import * as React from 'react';

//TODO: Style THe Grid and Grid-items!
//TODO2: Make them responsive!
interface BenefitCard {
  title: string,
  text: string,
  iconPath: string,
}

const benefitsCards:BenefitCard[] = [
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

export default function BenefitsGrid() {
  return (
    <div className="grid">
      {
        benefitsCards.map(benefit => (
          <div className="grid-item" key={benefit.title}>
            <Image src={benefit.iconPath} alt={benefit.title} />
            <h2>{benefit.title}</h2>
            <h4>{benefit.text}</h4>
          </div>
        ))
      }
    </div>
  )
};
