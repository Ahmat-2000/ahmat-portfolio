import React from 'react'

function FeaturesCard({title,body}) {
  return (
    <div className="sm:hover:shadow-stone-600 transition-transform duration-700 flex flex-col gap-5 shadow shadow-gray-600/90 p-3 rounded-2xl">
        <h3 className="title-green font-black rounded-lg shadow-md shadow-inherit text-center text-2xl py-2 sm:text-3xl">{title}</h3>
        <p className="text-sm sm:text-base leading-relaxed p-3">{body}</p>
    </div>
  )
}

export default FeaturesCard