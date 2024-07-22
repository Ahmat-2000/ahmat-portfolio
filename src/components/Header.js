import Image from 'next/image';
import Link from 'next/link';
import { IoMdContact, IoMdDownload } from "react-icons/io";

import linkedIn from '@/images/linked.png';
import github from '@/images/github.png';
import myImage from '@/images/moi.png';


/*
    320px — 480px: Mobile devices
    481px — 768px: iPads, Tablets
    769px — 1024px: Small screens, laptops
    1025px — 1200px: Desktops, large screens
    1201px and more —  Extra large screens, TV
*/
function Header() {
  return (
    <header className="container flex flex-col mx-auto scroll-mt-32 p-4" id="home">
      <div className="mb-8">
        <Image className="rounded-3xl aspect-auto w-full object-contain" src={myImage}  alt="Ahmat picture" />
      </div>
      {/* start of heading */}
      <div className="">
        <h1 className="font-bold text-neutral-300 text-2xl">Hello,<br/>This is
          <span className="text-green-600 "> Ahmat</span>
          <span className="">
            <br />
            <span>I’m a </span>
            <span className="">
              <b className="text-pink-500 hidden">Developer</b>
              <b className="text-pink-500 hidden">Pentester</b>
              <b className="text-pink-600">Freelancer</b>.
            </span>
          </span>
        </h1>

        <div>
          <p className="my-5 text-neutral-300">I am a self-taught programmer and passionate about cybersecurity.</p>
        </div>
        {/* end of heading */}

        {/* start of social media  */}
        <div className="flex  gap-2">
          <Link href="">
            <Image className="max-[360px]:w-10" src={linkedIn} alt="linkedIn" width={50} />
          </Link>
          <Link href="">
            <Image className="max-[360px]:w-10" src={github} alt="github" width={50}/>
          </Link>
        </div>
        <div className="flex flex-wrap mt-6 gap-4">
            <Link href="#contacts" className="inline-flex items-center justify-center p-2 font-sans font-semibold text-neutral-300 outline hover:outline-gray-900 outline-sky-600 hover:bg-sky-600 min-w-max rounded-xl text-sm">
              CONTACT ME <IoMdContact className="ml-1" size={20}/>
            </Link>
            <button  className="inline-flex items-center justify-center p-2 font-sans font-semibold text-neutral-300 outline-pink-600 outline min-w-max rounded-xl text-sm hover:bg-pink-500 hover:outline-gray-900">
              DOWNLOAD RESUME <IoMdDownload className="ml-1" color="blue" size={20}/>
            </button>
            {/* <DownloadButton url="/moi.pnp" name="moi.png"/> */}
        </div>
        {/* end of social media  */}
      </div>
    </header>);
}


export default Header;