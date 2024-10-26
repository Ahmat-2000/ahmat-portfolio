import { projectsData } from "@/lib/resumeData";
import Link from "next/link";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import Icon from "./Icon";
import { userData } from "@/lib/utils";

function ProjectCard() {
  return (
    <div className="my-10">
      <h2 className="py-4 mb-10 text-2xl font-black text-center rounded-md shadow-md shadow-neutral-600/90 title-green sm:text-3xl">Side Projects</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projectsData.map((item, id) => (
          <div key={id} className="gap-2 px-3 py-5 shadow-md shadow-neutral-600/90 rounded-2xl hover:shadow-sky-800">
            
            {/* External Link */}
            <Link href={item.url} target="_blank" className="block transition-transform rounded-full w-max animate-pulse hover:rotate-12">
              <Icon>
                <FaExternalLinkAlt size={15} fill="black" />
              </Icon>
            </Link>
            
            {/* Title */}
            <h3 className="p-2 mt-5 mb-5 text-lg font-bold text-center rounded-md shadow-md title-green sm:text-xl ">{item.title}</h3>

            {/* Project Image */}
            <Link href={item.url} target="_blank" className="cursor-pointer">
              <div className="md:w-[90%] md:mx-auto">
                <Image 
                  src={item.image || userData.image} // fallback image
                  alt={`${item.title} screenshot`} 
                  className="rounded-lg sm:h-60 sm:w-[90%] sm:mx-auto md:w-full"
                />
              </div>
            </Link>

            {/* Description and Technologies */}
            <div className="flex flex-col pt-5 mt-5 border-t">
              <p className="text-sm sm:text-base">{item.description}</p>
              <p className="mt-5 text-sm text-indigo-400 sm:text-base">Technologies: {item.technologies}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
