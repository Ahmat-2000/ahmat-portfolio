import { experiencesData } from "@/lib/resumeData";
function  Experience() {
  return (
    <div className="my-5">
      <h2 className="p-4 mb-10 text-2xl font-black text-center rounded-md shadow-md shadow-gray-600/90 title-green sm:text-3xl">Experiences</h2>

      <div className="grid gap-5 md:flex">
        {
        experiencesData.map((item,id) => {
          return (
          <div key={id} className="flex flex-col gap-2 px-3 py-10 transition-transform duration-1000 shadow-md shadow-gray-600/90 rounded-2xl hover:scale-100 hover:shadow-sky-800 hover: md:scale-95">
            <p className="text-xs tracking-widest text-pink-600 uppercase sm:text-sm">{item.date}</p>
            <p className="text-xs tracking-widest uppercase text-sky-600 text-semibold sm:text-sm">{item.company}</p>
            <h3 className="p-2 mb-10 text-sm font-black text-center rounded-md shadow-md shadow-inherit title-green sm:text-xl">{item.title}</h3>
            <p className="text-sm sm:text-base">{item.desciption}</p>
            <p className="mt-4 text-sm text-indigo-400 sm:text-base">{id === 0 ? "Technologies: " : "Subjects: "}{item.technologies}</p>
          </div>)
        })
        }
      </div>
      
    </div>
  )
}

export default  Experience;