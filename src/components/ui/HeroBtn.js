'use client';
import Link from "next/link";

function HeroBtn({children,text,url}) {
  return (
    // hover:opacity-85 inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-gray-100 bg-blue-500/80 rounded-3xl h-[60px] sm:w-1/2 sm:mx-auto sm:min-w-max
    <Link href={url} className="inline-flex items-center justify-center p-4 font-sans font-semibold min-w-max  shadow-lg rounded-3xl w-full md:w-1/2 lg:w-4/5 hover:opacity-75 transition-opacity duration-500 gap-3 bg-blue-500/75 text-neutral-300/90">
        <span className="text-inherit">{text}</span>
        {children}
    </Link>
  )
}

export default HeroBtn