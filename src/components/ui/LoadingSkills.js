import { FaRegImage } from "react-icons/fa6";

function LoadingSkills() {
  const skillsData = [1,1,1,1,1,1,1]
  return (
    <div id="skills" className="px-2 py-10 my-10 shadow-md shadow-neutral-700">
      <h2 className="p-4 mx-2 mb-10 text-2xl font-black text-center shadow-md shadow-neutral-700 title-green sm:text-3xl">
      Skills
      </h2>
      <div className="flex w-full my-12 overflow-hidden">
        {skillsData.map((skill, id) => (
          <div className="w-36  h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group hover:scale-[1.15] cursor-pointer "
            key={id}>
            <div className="flex flex-col items-center justify-center gap-3 p-6 overflow-x-hidden transition-all duration-700 border shadow-sm animate-pulse border-neutral-700 shadow-neutral-500 group-hover:border-sky-500">
              <FaRegImage className="w-10 h-10 rounded-lg" />
              <p className="text-sm text-white sm:text-lg">
                Loading
              </p>
            </div>
          </div>
        ))}
      </div>
  </div>
);
};

export default LoadingSkills;