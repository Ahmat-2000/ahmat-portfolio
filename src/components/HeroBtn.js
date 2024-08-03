'use client';
import Link from "next/link";

function HeroBtn({children,text}) {
  return (
    <Link href="#contact" className="inline-flex items-center justify-center p-2 font-sans font-semibold text-blue-400 outline-blue-800 min-w-max  shadow-lg outline-double rounded-full w-full md:w-1/2 lg:w-4/5 hover:opacity-95 gap-3 hover:outline-none hover:bg-blue-900 hover:text-neutral-300">
        <span className=" text-inherit">{text}</span>
        {children}
    </Link>
  )
}

export default HeroBtn