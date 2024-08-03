import React from 'react'

function FeaturesCard({title,body}) {
  return (
    <div className="sm:hover:shadow-stone-600 transition-transform duration-700 flex flex-col gap-5 shadow shadow-gray-600/90 p-3 rounded-2xl max-w-sm">
        <h3 className="title-green font-semibold rounded-lg shadow-md shadow-inherit text-center text-2xl">{title}</h3>
        <p className="text-sm rounded-md shadow-inherit shadow-md p-2">{body}</p>
    </div>
  )
}

export default FeaturesCard