import { projectsData } from "@/lib/resumeData";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import Icon from "./Icon";

function ProjectCard() {
  return (
    <div className="my-10">
      <h2 className="py-4 mb-10 text-2xl font-black text-center rounded-md shadow-md shadow-neutral-600/90 title-green sm:text-3xl">Side Projects</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {
        projectsData.map((item,id) => {
          return (
          <div key={id} className="gap-2 px-3 py-5 transition-transform duration-1000 shadow-md shadow-neutral-600/90 rounded-2xl hover:scale-100 hover:shadow-sky-800 hover: md:scale-95">
            <Link href={item.url} target="_blank" className="block rounded-full w-max animate-pulse">
              <Icon>
                <FaExternalLinkAlt size={15} fill="black" />
              </Icon>
            </Link>
            <h3 className="p-2 mt-5 mb-10 text-sm font-black text-center rounded-md shadow-md shadow-inherit title-green sm:text-xl">{item.title}</h3>
            <p className="text-sm sm:text-base">{item.desciption}</p>
            <p className="mt-5 text-sm text-indigo-400 sm:text-base">Technologies: {item.technologies}</p>
          </div>)
        })
        }
      </div>
      
    </div>
  )
}

export default ProjectCard