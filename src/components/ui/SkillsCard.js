
import { skillsData } from "@/lib/resumeData";
import { skillsImage } from "@/lib/skillsImage";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function SkillsCard() {
  return (
    <div id="skills" className="my-10 shadow-md shadow-neutral-700 py-10 px-2">
      <h2 className="shadow-md shadow-neutral-700 mb-10 title-green text-2xl text-center font-black mx-2 p-4 sm:text-3xl">
      Skills
      </h2>
    <div className="w-full my-12">
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
          <div className="h-full w-full rounded-lg border border-neutral-700  shadow-sm shadow-neutral-500 group-hover:border-sky-500 transition-all duration-700">
            <div className="flex flex-col items-center justify-center gap-3 p-6">
              <div className="h-8 sm:h-10">
                <Image
                  src={skillsImage(skill)?.src}
                  alt={skill}
                  width={40}
                  height={40}
                  className="h-full w-auto rounded-lg"
                />
              </div>
              <p className="text-white text-sm sm:text-lg">
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