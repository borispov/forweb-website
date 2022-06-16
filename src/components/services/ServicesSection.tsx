import ServicesGrid from "@/components/services/ServicesGrid";
import { AnimationOnScroll } from 'react-animation-on-scroll'


export default function ServicesSection() {
  return (
    <div className="noise-bg bg-[linear-gradient(180deg, rgba(255, 182, 175, 0) 0%, #FFFFFF 100%)] 
      px-6 lg:px-40 xl:px-80 pb-32 relative lg:pt-40 pt-4">

        <div className="animate__animated animate__fadeInUp lg:scrib lg:scrib__menu lg:bg-[url('/scribs/menu.png')]"></div>
        <h1 className="text-5xl pt-20 max-w-md text-center">
          מה אנחנו מגישים?
        </h1>
        {/* Add The Icons Here */}
        <ServicesGrid />
    </div>
  )
}