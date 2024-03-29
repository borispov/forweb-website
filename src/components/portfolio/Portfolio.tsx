import gsap from "gsap";
import Image from "next/image";
import React from 'react'; 

import clsxm from "@/lib/clsxm";

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
    projectName: "Alegra & Lion Cafe",
    typeOfWork: "Web Design",
    imagePath: "/images/alegra.jpg"
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
    projectName: "Forcard",
    typeOfWork: "Startup, Web Design & Development",
    imagePath: "/images/forcard.jpg"
  },
]

export default function Portoflio() {

  const el = React.useRef();

  // TODO: Let's see how GSAP handles my portfolio
  React.useEffect(() => {
    const q = gsap.utils.selector(el);
    setTimeout(() => {
      gsap.to(q('.even'), { y: 50})
      gsap.to(q('.odd'), { y: -25})
    }, 1000)
  }, [])

  return (
    <div id="work" className="space-x mt-8 mb-24">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 md:gap-8">
         {
          portfolioData.map((project, i) => (
              <div 
                key={project.projectName}
                className={clsxm(
                  'project-item rounded-lg shadow-2xl w-auto lg:max-w-md max-w-screen-sm mx-4 transition-all',
                  'hover:shadow-primary-200',
                  [
                    i % 2 === 0 && 'even' || 'odd'
                  ],
                )}
                >
                  <Image 
                    className="rounded-lg"
                    src={project.imagePath} 
                    alt={project.projectName} 
                    priority
                    width={487} 
                    height={300} 
                    layout='intrinsic'
                  />
                <div className="mt-4 p-6 text-center">
                  <h3 className="text-xl text-gray-700">{project.projectName}</h3>
                  <h4 className="text-lg text-gray-600 font-normal">{project.typeOfWork}</h4>
                </div>
              </div>

          ))
        }
      </div>
    </div>
  )
}