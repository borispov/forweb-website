// import ServicesGrid from "@/components/services/ServicesGrid";


const state = [
  {
    title: 'שלב אפיון וגילוי',
    subtitle: 'מיפוי צרכי העסק',
    description: 'בשלב זה אנו עורכים פגישה לאיסוף נתונים והבנתם ותכנון התכנית'
  },
  {
    title: 'שלב אפיון וגילוי',
    subtitle: 'מיפוי צרכי העסק',
    description: 'בשלב זה אנו עורכים פגישה לאיסוף נתונים והבנתם ותכנון התכנית'
  },
]

interface ProcessItem {
  title: string;
  subtitle: string;
  description: string;
  icon?: string;
}

export function ProcessItem<ProcessItem>(item) {
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

export function Processes(items:ProcessItem[]) {
  return ( {
    items.map(item => (<ProcessItem item={item} key={item.stepNumber} />))
  })
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
    </div>
    <Processes items={state}/>
  )
}
