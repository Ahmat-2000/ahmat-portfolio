'use client';
import Link from "next/link";

function HeroBtn({children,text,url}) {
  return (
    <Link href={url} className="inline-flex items-center justify-center p-2 font-sans font-semibold outline-blue-500 min-w-max  shadow-lg outline rounded-full w-full md:w-1/2 lg:w-4/5 hover:opacity-75 gap-3 bg-blue-900 text-neutral-300">
        <span className=" text-inherit">{text}</span>
        {children}
    </Link>
  )
}

export default HeroBtn