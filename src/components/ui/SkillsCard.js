
import { skillsData } from "@/lib/resumeData";
import { skillsImage } from "@/lib/skillsImage";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function SkillsCard() {
  return (
    <div id="skills" className="p-4 mt-10 mb-20 scroll-mt-20">
      <h2 className="p-4 mx-2 mb-10 text-2xl font-black text-center rounded-md shadow-md shadow-neutral-600/90 title-green sm:text-3xl">
      Skills
      </h2>
    <div className="w-full my-20 rounded-3xl border-x-sky-900 border-x-4">
      <Marquee
        gradient={false}
        speed={80}
        pauseOnHover={true}
        pauseOnClick={true}
        delay={0}
        play={true}
        direction="left"
      >
      {skillsData.map((skill, id) => (
        <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group hover:scale-[1.15] cursor-pointer"
          key={id}>
          <div className="w-full h-full transition-all duration-700 shadow-md rounded-xl shadow-neutral-600/90 group-hover:shadow-sky-800">
            <div className="flex flex-col items-center justify-center gap-3 p-6">
              <div className="h-8 sm:h-10">
                <Image
                  src={skillsImage(skill)?.src}
                  alt={skill}
                  width={40}
                  height={40}
                  className="w-auto h-full rounded-lg"
                />
              </div>
              <p className="text-sm sm:text-lg">
                {skill}
              </p>
            </div>
          </div>
        </div>
      ))}
      </Marquee>
    </div>
  </div>
);
};

export default SkillsCard;