import { servicesData } from "@/lib/servicesData";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";
function ServicesCard() {
  return (
    <div className="shadow-md shadow-neutral-700 p-2">
      <div className="grid gap-8 md:grid-cols-2">
        {
        servicesData.map((item,id) => {
          return (
          <div key={id} className="shadow shadow-neutral-700 py-5 px-3 flex flex-col justify-between gap-2">
            <div>
              <h3 className="shadow-md shadow-neutral-700 mt-5 mb-10 title-green text-sm text-center font-black p-2 sm:text-xl">{item.title}</h3>
              <p className="text-sm md:text-base">{item.description}</p>
              <ul className="my-5">
                {
                  item.stack.map((stackItem,stackId) => {
                    return (
                      <li key={stackId} className="flex items-center gap-2 my-2">
                          <div className=" bg-green-900 rounded-full max-w-max p-1">
                            <FaCheck size={10} fill="gray"/>
                          </div>
                          <span className="text-center text-xs sm:text-sm md:text-base">{stackItem}</span>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            {
              item?.contact 
              ? <Link className="block text-sm text-center font-semibold max-w-max mx-auto bg-pink-800 px-5 p-2 rounded-lg text-neutral-400" href="#contact">{item.price}</Link>
              : <p className="text-sm text-center font-semibold max-w-max  mx-auto px-5 py-2 rounded-lg opacity-85 text-green-500 shadow-md shadow-neutral-700">{item.price}</p>
            }
          </div>)
        })
        }
      </div>
    </div>
  )
}

export default ServicesCard;