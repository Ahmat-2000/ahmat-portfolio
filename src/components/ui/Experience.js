import { experiencesData } from "@/lib/resumeData";
function  Experience() {
  return (
    <div className="shadow-md shadow-neutral-700 py-10 px-2">
      <h2 className="shadow-md shadow-neutral-700 mb-10 title-green text-2xl text-center font-black mx-2 p-4 sm:text-3xl">Experiences</h2>

      <div className="grid gap-8 md:flex">
        {
        experiencesData.map((item,id) => {
          return (
          <div key={id} className="shadow shadow-neutral-700 py-10 px-3 flex flex-col gap-2">
            <p className="text-pink-600 text-semibold text-xs sm:text-sm">{item.date}</p>
            <p className="text-sky-600 text-semibold text-xs sm:text-sm">{item.company}</p>
            <h3 className="shadow-md shadow-neutral-700 mb-10 title-green text-sm text-center font-black p-2 sm:text-xl">{item.title}</h3>
            <p className="text-sm sm:text-base">{item.desciption}</p>
            <p className="mt-4 text-sm font-bold title-blue sm:text-base">{id === 0 ? "Technologies: " : "Subjects: "}{item.technologies}</p>
          </div>)
        })
        }
      </div>
      
    </div>
  )
}

export default  Experience;