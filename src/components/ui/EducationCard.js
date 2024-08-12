import { degreesData } from "@/lib/resumeData";
import Icon from "./Icon";
import { PiStudent } from "react-icons/pi";
import { FaBookReader } from "react-icons/fa";
function EducationCard() {
  return (
    <div className="shadow-md shadow-neutral-700 py-10 px-2">
      <h2 className="shadow-md shadow-neutral-700 mb-10 title-green text-2xl text-center font-black mx-2 p-4 sm:text-3xl">Education</h2>
      <div className="flex flex-col md:flex-row justify-evenly gap-5 p-2 pb-6">
        <div className="self-center bg-gray-400 p-10 rounded-full">
          <FaBookReader className="md:h-[180px] md:w-[180px]" fill="black" size={150}/>
        </div>
        <div className="grid gap-5">
          {
          degreesData.map((item,id) => (
            <div className="flex items-center gap-6 shadow-md shadow-neutral-700 p-3" key={id}>
              <div className="">
                <Icon>
                  <PiStudent fill="black" size={60}/>
                </Icon>
              </div>
              <div className="w-full max-w-md grid gap-1 font-semibold">
                <h3 className="title-green text-sm text-center">{item.year}</h3>
                <p className="text-xs sm:text-sm font-bold">{item.degree}</p>
                <p className="text-xs text-pink-500">{item.university}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EducationCard;