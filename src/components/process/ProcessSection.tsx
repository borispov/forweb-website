import clsxm from "@/lib/clsxm";

import BigSunIcon from "@/icons/BigSunIcon";
import BirdsScribIcon from "@/icons/BirdsScribIcon";
import RedCircleWithLinesIcon from "@/icons/RedCircleWithLinesIcon";
import ThreeLinesIcon from "@/icons/ThreeLinesIcon";
import WormScrib from "@/icons/WormScrib";

const state = [
  {
    title: 'שלב אפיון וגילוי',
    subtitle: 'מיפוי צרכי העסק',
    description: 'בשלב זה אנו עורכים פגישה לאיסוף נתונים והבנתם ותכנון התכנית',
    stepNumber: 1,
  },
  {
    title: 'עיצוב',
    subtitle: 'עיצוב ב- Figma',
    description: 'בשלב זה אנו עורכים פגישה לאיסוף נתונים והבנתם ותכנון התכנית',
    stepNumber: 2,
  },
  {
    title: 'פיתוח',
    subtitle: 'פיתוח ',
    description: 'פיתוח אתר תדמית אורך כשלושה שבועות. פיתוח חנות עד חודשיים.',
    stepNumber: 3,
  },
  {
    title: 'הדרכה ותמיכה',
    subtitle: 'ולא פחות חשוב',
    description: 'מתן הדרכה והסברים מקיפים אודות האתר/המערכת החדשה שלכם.',
    stepNumber: 4,
  },
  {
    title: 'צא לאור!',
    subtitle: '״איך אתר נולד...״ - מזל טוב!',
    description: 'חיבור את האתר ל Domain, בסביבת האחסון הרצויה ומשיקים את האתר בזמן הנוח והמתאים עבורכם.',
    stepNumber: 5,
  },
]

interface IProcessItem {
  title: string;
  subtitle: string;
  description: string;
  icon?: string;
  stepNumber: number;
}

interface ProcessItemProps {
  item: IProcessItem,
  num: number,
  children?: React.ReactNode,
}


// Single Process Item Component
function ProcessItem({ item, num }: ProcessItemProps) {
  return (
    <div className={clsxm(
      "bg-primary-100 max-w-2xl flex border-2 border-black shadow-lg mt-4 rounded-l-xl text-right mb-16",
      "relative",
      [
        num === 2 && 'z-[2]' || 'z-[0]'
      ]
      )}>
      <div className={clsxm(
        "w-1/5 bg-primary-300 flex-col justify-start text-right border-l-4 border-indigo-900",
        [
          num % 2 === 0 
            && 'bg-[#19171c] text-[#faf9f7]'
            || 'bg-primary-300'
        ]
      )}>
        <h1 className="text-8xl pr-2">{num + 1}</h1>
      </div>
      <div className="pt-10 pr-10 pb-8">
        <h2 className="text-black">{item.title}</h2>
        <h3 className="text-gray-500 text-base font-normal">{item.subtitle}</h3>
        <p className="max-w-md">{item.description }</p>
      </div>
    </div>
  )
};

export default function ProcessSection() {
  return (
    <div className="processes relative">
      <BigSunIcon className="absolute right-0 top-1/3" />
      <div className="container text-center pt-24">
        <h1 className="text-4xl">
          לתת לעסק שלך לצמוח עם
          <br/>
          <span className="underline decoration-wavy motion-safe:transition-all motion-safe:duration-200 decoration-slice underline-offset-3 decoration-indigo-900">5 שלבים פשוטים</span>
        </h1>
        <h2 className="text-2xl font-normal">
          קצר, פשוט ויעיל
        </h2>
        <div className="md:w-6/12 sm:w-4/5 mx-auto mt-12 relative">
        <ThreeLinesIcon className="absolute left-0 -top-20" />
        <RedCircleWithLinesIcon className="absolute left-5 top-20 z-0" />
        <WormScrib className="absolute left-1/3 top-1/3 z-[1] pt-2" />
        <BirdsScribIcon className="absolute -bottom-20 -right-20 " />
          { 
            state.map((proc, i) => <ProcessItem item={proc} key={i} num={i}/> )
          }
        </div>

        <h3 className="mt-12 mx-auto">
          וזכרו כי אנו אתכם בכל שלב
        </h3>
      </div>
    </div>
  )
};