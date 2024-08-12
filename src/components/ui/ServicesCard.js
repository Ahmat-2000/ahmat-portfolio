import { servicesData } from "@/lib/servicesData";
import Icon from "./Icon";
import { FaCheck } from "react-icons/fa";
function ServicesCard() {
  return (
    <div className="shadow-md shadow-neutral-700 py-10 px-2">
      <div className="grid gap-8 md:grid-cols-2">
        {
        servicesData.map((item,id) => {
          return (
          <div key={id} className="shadow shadow-neutral-700 py-5 px-3 gap-2">
            <h3 className="shadow-md shadow-neutral-700 mt-5 mb-10 title-green text-sm text-center font-black p-2 sm:text-xl">{item.title}</h3>
            <p>{item.description}</p>
            <ul className="">
              {
                item.stack.map((stackItem,stackId) => {
                  return (
                    <li key={stackId} className="">
                        <div className="inline-block bg-green-900 rounded-full max-w-max p-1">
                          <FaCheck size={15} fill="gray"/>
                        </div>
                        <span className="inline-block p-1 text-center border">{stackItem}</span>
                    </li>
                  )
                })
              }
            </ul>
          </div>)
        })
        }
      </div>
    </div>
  )
}

export default ServicesCard;