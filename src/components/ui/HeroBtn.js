'use client';
import Link from "next/link";

function HeroBtn({children,text,url}) {
  return (
    <Link href={url} className="inline-flex items-center justify-center w-full gap-3 p-2 font-sans font-semibold transition-opacity duration-700 shadow-lg sm:px-4 min-w-max rounded-xl md:w-1/2 lg:w-4/5 hover:opacity-75 bg-blue-500/75 text-neutral-300/90"
    >
      <span className="text-inherit">{text}</span>
      {children}
    </Link>
  )
}

export default HeroBtn