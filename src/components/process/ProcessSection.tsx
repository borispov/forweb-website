// import ServicesGrid from "@/components/services/ServicesGrid";


const state = [
  {
    title: 'שלב אפיון וגילוי',
    subtitle: 'מיפוי צרכי העסק',
    description: 'בשלב זה אנו עורכים פגישה לאיסוף נתונים והבנתם ותכנון התכנית',
    stepNumber: 1,
  },
  {
    title: 'שלב אפיון וגילוי',
    subtitle: 'מיפוי צרכי העסק',
    description: 'בשלב זה אנו עורכים פגישה לאיסוף נתונים והבנתם ותכנון התכנית',
    stepNumber: 2,
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
  children?: React.ReactNode,
}

export function ProcessItem<ProcessItemProps>({ item }) {
  return (
    <div className="bg-primary-300 max-w-2xl flex border-2 border-black shadow-lg">
      <div className="w-1/5 ">
      </div>
      <div className="pt-10 pr-10 pb-8">
        <h2 className="text-black">{item.title}</h2>
        <h3 className="text-gray-600">{item.subtitle}</h3>
        <p>{item.description }</p>
      </div>
    </div>
  )
}

export default function ProcessSection() {
  return (
    <div className="container">
      <h3 className="text-3xl">
        לתת לעסק שלך לצמוח עם
        <br/>
        5 שלבים פשוטים
      </h3>
      <h4 className="text-2xl">
        קצר, פשוט ויעיל
      </h4>
      {
        state.map((element:IProcess, i) => (
          <ProcessItem item={element} key={i} />
        ))
      }
    </div>
  )
}
