import { experiencesData } from "@/lib/resumeData";
function  Experience() {
  return (
    <div className="shadow-md shadow-neutral-700 py-10 ">
      <h2 className="shadow-md shadow-neutral-700 mb-10 title-green text-2xl text-center font-black mx-2 p-4 sm:text-3xl">Experiences</h2>

      <div className="grid gap-8 md:flex">
        {
        experiencesData.map((item,id) => {
          return (
          <div key={id} className="shadow shadow-neutral-700 py-10 px-2 grid gap-2">
            <p className="text-pink-600 px-1 text-semibold text-xs">{item.date}</p>
            <p className="text-sky-600 px-1 text-semibold text-xs">{item.company}</p>
            <h3 className="shadow-md shadow-neutral-700 mb-10 title-green text-sm text-center font-black mx-2 p-4 sm:text-xl">{item.title}</h3>
            <p className="text-sm sm:text-lg px-2">{item.desciption}</p>
            <p className="mt-4 text-sm font-bold title-blue px-2 sm:text-md">{id === 0 ? "Technologies: " : "Subjects: "}{item.technologies}</p>
          </div>)
        })
        }
      </div>
      
    </div>
  )
}

export default  Experience;