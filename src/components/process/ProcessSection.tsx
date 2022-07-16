import { AnimationOnScroll } from 'react-animation-on-scroll';

import clsxm from "@/lib/clsxm";

import BigSunIcon from "@/icons/BigSunIcon";
import BirdsScribIcon from "@/icons/BirdsScribIcon";
import RedCircleWithLinesIcon from "@/icons/RedCircleWithLinesIcon";
import ThreeLinesIcon from "@/icons/ThreeLinesIcon";
import WormScrib from "@/icons/WormScrib";

const state = [
  {
    title: 'אפיון והכנה',
    subtitle: 'מיפוי צרכי העסק',
    // description: 'פגישת ייעוץ ואיסוף מידע ותכנון תכנית העבודה',
    description: 'אנו נשאל אתכם שאלות על העסק ונבקשכם להעביר לנו קבצי מדיה ותוכן להכנת האתר',
    stepNumber: 1,
  },
  {
    title: 'עיצוב ופיתוח',
    subtitle: 'עיצוב ב- Figma, פיתוח ב- Webflow',
    // description: 'עיצוב ופיתוח בהתאם לשלב הראשון. פיתוח מקצועי איכותי וזריז',
    description: 'אחרי שאספנו את כל המידע הנחוץ, עוברים לעיצוב האתר ומיד לאחר מכן פיתוח והטמעת העיצוב',
    stepNumber: 2,
  },
  {
    title: 'ליטוש אחרון',
    subtitle: 'טאץ׳ אחרון ו...',
    description: 'חיבור לאחסון, חיבור לדומיין והדרכה על איך אתם מתנהלים מעכשיו...',
    stepNumber: 3,
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
    <div 
      id="process"
      className={clsxm(
      "bg-primary-100 max-w-screen-sm mx-4 lg:max-w-2xl flex border-2 border-black shadow-lg mt-4 rounded-l-xl text-right mb-16",
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
        <h2 className="text-black mb-2 text-3xl">{item.title}</h2>
        {/* <h3 className="text-gray-500 text-base font-normal">{item.subtitle}</h3> */}
        <p className="max-w-md text-lg">{item.description }</p>
      </div>
    </div>
  )
};

export default function ProcessSection() {
  return (
    <div className="processes relative pb-12">
      <BigSunIcon className="absolute right-0 top-1/3 w-40 lg:w-auto" />
      <div className="container text-center pt-24">
        <h1 className="text-4xl text-[#333] mb-4">
          מאפס לאתר מוכן ב
          <br/>
          3 שלבים פשוטים
        </h1>
        <h2 className="text-[18px] font-bold text-[#333333CF]">
          קצר, פשוט ויעיל
        </h2>
        <div className="md:w-6/12 sm:w-4/5 mx-auto mt-12 relative">
        <AnimationOnScroll animateOnce animateIn="animate__fadeInLeft">
          <ThreeLinesIcon className="absolute left-0 -top-20" />
        </AnimationOnScroll>

        <AnimationOnScroll animateOnce animateIn="animate__fadeInUp animate__delay-1s">
          <RedCircleWithLinesIcon className="absolute left-5 top-20 z-0" />
        </AnimationOnScroll>

        <AnimationOnScroll animateOnce>
          <WormScrib className="animate__backInDown absolute left-1/3 top-1/3 z-[1] pt-2" />
        </AnimationOnScroll>

        <BirdsScribIcon className="animate__animated animate__fadeIn absolute -bottom-20 right-0" />
          { 
            state.map((proc, i) => <ProcessItem item={proc} key={i} num={i}/> )
          }
        </div>

        <h2 className="mt-4">ההצלחה שלכם היא ההצלחה שלנו</h2>
      </div>
    </div>
  )
};