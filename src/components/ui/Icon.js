import React from 'react'

function Icon({children}) {
  return (
    <div className="hover:bg-[#16f2b3] bg-gray-400 rounded-full p-2 hover:scale-110 transition-all duration-1000">
      {children}
    </div>
  )
}

export default Icon