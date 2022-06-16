import Image from "next/image";
import { AnimationOnScroll } from 'react-animation-on-scroll';

interface Project {
  projectName: string;
  typeOfWork: string;
  imagePath: string;
}

const portfolioData: Project[] = [
  {
    projectName: "Raw Planet",
    typeOfWork: "E-Commerce, Design, Marketing",
    imagePath: "/images/raw.png",
  },
  {
    projectName: "uFit",
    typeOfWork: "Web Design, Web Development",
    imagePath: "/images/gym.png"
  },
  {
    projectName: "Dyn.",
    typeOfWork: "Web Design, Crypto Niche",
    imagePath: "/images/dyn.png"
  },
  {
    projectName: "Adi Oren",
    typeOfWork: "Web Design, Freelance Photographer",
    imagePath: "/images/oren.png"
  },
  {
    projectName: "OverGrown",
    typeOfWork: "Web Design, Real Estate Niche",
    imagePath: "/images/over.png"
  },
  {
    projectName: "Beauty Salon App",
    typeOfWork: "Web & Mobile Design Concepts",
    imagePath: "/images/salon_app.png"
  },
]

export default function Portoflio() {
  return (
    <div id="work" className="space-x mt-8 mb-24">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 md:gap-8">
         {
          portfolioData.map(project => (
              <div 
                key={project.projectName}
                className="
                  transition-all hover:shadow-primary-200
                  project-item rounded-lg shadow-2xl w-auto lg:max-w-md max-w-screen-sm mx-4"
                >
                <AnimationOnScroll animateOnce animateIn="animate__fadeInUp">
                {/* <div className="w-16 h-16 bg-primrary-300 rounded-lg"> */}
                  <Image 
                    className="rounded-lg"
                    src={project.imagePath} 
                    alt={project.projectName} 
                    width={487} 
                    height={300} 
                    // layout='responsive'
                  />
                {/* </div> */}
                <div className="mt-4 p-6 text-center">
                  <h3 className="text-xl text-gray-700">{project.projectName}</h3>
                  <h4 className="text-lg text-gray-600 font-normal">{project.typeOfWork}</h4>
                </div>
                </AnimationOnScroll>


              </div>

          ))
        }
      </div>
    </div>
  )
}