import Image from 'next/image';
import Link from 'next/link';
import { IoMdContact, IoMdDownload } from "react-icons/io";

import linkedIn from '@/images/linked.png';
import github from '@/images/github.png';
import myImage from '@/images/moi.png';

function Header() {
  return (
    <header className="flex flex-col gap-4 scroll-mt-24 md:gap-10 px-4 md:px-2 md:py-24 md:flex-row lg:justify-center lg:items-center" id="home">
      <Image className="md:hidden rounded-full ml-auto w-[330px]" src={myImage}  alt="Ahmat picture" />
      <div className="flex flex-col gap-4 md:w-1/2 md:gap-16 md:mb-5 md:ml-0 sm:w-4/5" >
      {/* start of heading */}
        <h1 className="font-bold text-neutral-300 text-4xl md:text-4xl lg:text-6xl ">Hello,<br className="mb-1 "/> This is
          <span className="text-green-600 "> Ahmat</span>
          <br className="sm:mb-2"/>
          <span className="text-2xl sm:text-3xl block lg:ml-2 ">
            <span> I’m a </span>
            <span className="lg:text-4xl">
              <b className="text-pink-500 hidden">Developer</b>
              <b className="text-pink-500 hidden">Pentester</b>
              <b className="text-pink-600">Freelancer</b>.
            </span>
          </span>
        </h1>

        <p className="text-neutral-300 text-md sm:text-xl max-w-md lg:text-2xl">I am a self-taught programmer and passionate about cybersecurity.</p>

        {/* end of heading */}

        {/* start of social media  */}
        <div className="flex gap-2 mb-2">
          <Link href="">
            <Image className="max-[360px]:w-10" src={linkedIn} alt="linkedIn" width={50} />
          </Link>
          <Link href="">
            <Image className="max-[360px]:w-10" src={github} alt="github" width={50}/>
          </Link>
        </div>
        {/* end of social media  */}
        <div className="flex flex-col gap-5 sm:flex-row ">
          <Link href="#contacts" className="inline-flex items-center justify-center p-2 font-sans font-semibold text-neutral-300 outline hover:outline-gray-900 outline-sky-600 hover:bg-sky-600 min-w-max rounded-xl w-full md:w-1/2 lg:w-4/5">
            CONTACT ME <IoMdContact className="ml-3" size={20}/>
          </Link>
          <button  className="inline-flex items-center justify-center p-2 font-sans font-semibold text-neutral-300 outline-pink-600 outline min-w-max rounded-xl hover:bg-pink-500 hover:outline-gray-900 w-full md:w-1/2 lg:w-4/5">
            DOWNLOAD RESUME <IoMdDownload className="ml-3" color="blue" size={20}/>
          </button>
          {/* <DownloadButton url="/moi.pnp" name="moi.png"/> */}
          </div>
      </div>

      <Image className="hidden md:block md:w-1/2 md:rounded-full " src={myImage}  alt="Ahmat picture" />
    </header>);
}


export default Header;