import { degreesData } from "@/lib/resumeData";
import Icon from "./Icon";
import { PiStudent } from "react-icons/pi";
import { FaBookReader } from "react-icons/fa";
function EducationCard() {
  return (
    <div className="p-4 mt-10 scroll-mt-20" id="education">
      <div className="px-2 py-5 rounded-md shadow-md shadow-neutral-600/90">
        <h2 className="p-4 mb-10 text-2xl font-black text-center rounded-md shadow-md shadow-neutral-700 title-green sm:text-3xl">Education</h2>
        <div className="flex flex-col gap-5 p-2 pb-6 md:flex-row justify-evenly">
          <div className="self-center p-10 bg-gray-400 rounded-full">
            <FaBookReader className="md:h-[180px] md:w-[180px]" fill="black" size={150}/>
          </div>
          <div className="grid gap-5">
            {
            degreesData.map((item,id) => (
              <div className="flex items-center gap-6 p-3 rounded-md shadow-md shadow-neutral-600/90" key={id}>
                <div className="">
                  <Icon>
                    <PiStudent fill="black" size={60}/>
                  </Icon>
                </div>
                <div className="grid w-full max-w-md gap-1">
                  <h3 className="text-sm text-center rounded-md title-green">{item.year}</h3>
                  <p className="mb-1 text-xs sm:text-sm">{item.degree}</p>
                  <p className="text-xs text-indigo-400 sm:uppercase sm:tracking-widest">{item.university}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducationCard;