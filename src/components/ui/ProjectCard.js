import { projectsData } from "@/lib/resumeData";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import Icon from "./Icon";

function ProjectCard() {
  return (
    <div className="shadow-md shadow-neutral-700 py-10 px-2">
      <h2 className="shadow-md shadow-neutral-700 mb-10 title-green text-2xl text-center font-black mx-2 p-4 sm:text-3xl">Side Projects</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {
        projectsData.map((item,id) => {
          return (
          <div key={id} className="shadow shadow-neutral-700 py-5 px-3 gap-2">
            <Link href={item.url} className="w-max block rounded-full animate-pulse">
              <Icon>
                <FaExternalLinkAlt size={15} fill="black" />
              </Icon>
            </Link>
            <h3 className="shadow-md shadow-neutral-700 mt-5 mb-10 title-green text-sm text-center font-black p-2 sm:text-xl">{item.title}</h3>
            <p className="text-sm sm:text-base">{item.desciption}</p>
            <p className="mt-4 text-sm font-semibold text-pink-500 sm:text-base">Technologies: {item.technologies}</p>
          </div>)
        })
        }
      </div>
      
    </div>
  )
}

export default ProjectCard