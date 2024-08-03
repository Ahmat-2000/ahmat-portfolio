'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTypewriter} from 'react-simple-typewriter';
import { IoMdContact, IoMdDownload } from "react-icons/io";

import { userData } from '@/lib/utils';
import SocialMediaLink from '@/components/SocialMediaLink';
import HeroBtn from './HeroBtn';

function Header() {
  const [text] = useTypewriter({
    words: userData.profession,
    loop: 0
  })

  return (
    <header className="flex flex-col gap-4 scroll-mt-24 md:gap-10 px-4 md:px-2 md:py-28 md:flex-row lg:justify-center lg:items-center" id="home">
      <Image className="md:hidden rounded-full ml-auto w-[330px]" src={userData.image}  alt={userData.name} />
      <div className="flex flex-col gap-4 md:w-1/2 md:gap-16 md:mb-5 md:ml-0 sm:w-4/5" >
      {/* start of heading */}
        <h1 className="font-semibold text-neutral-300 text-4xl sm:text-4xl min-[505px]:text-5xl lg:text-6xl ">Hello,<br className="mb-1 "/> This is
          <span className="text-green-600 ">{` ${userData.name}`}</span>
          <br className="sm:mb-2"/>
          <span className="text-3xl block lg:ml-2 ">
            <span> I’m a </span>
            <span className="lg:text-4xl">
              <b className="text-pink-600">{text}</b>
            </span>
          </span>
        </h1>

        <p className="text-neutral-300 text-md sm:text-xl max-w-md lg:text-2xl">{userData.descriptionText}</p>
        {/* end of heading */}

        {/* start of social media  */}
        <SocialMediaLink />
        {/* end of social media  */}
        <div className="flex flex-col gap-5 sm:flex-row ">
          <HeroBtn text="CONTACT ME">
            <IoMdContact size={20}/>
          </HeroBtn>
          <HeroBtn text="DOWNLOAD RESUME">
            <IoMdDownload size={20}/>
          </HeroBtn>
        </div>
      </div>

      <Image className="hidden hover:scale-110 hover:opacity-75 transition-all duration-1000 md:block md:w-1/2 md:rounded-full " src={userData.image}  alt={userData.name} />
    </header>);
}


export default Header;