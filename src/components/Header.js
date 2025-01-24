'use client';

import Image from 'next/image';
import { useTypewriter} from 'react-simple-typewriter';
import { IoMdContact, IoMdDownload } from "react-icons/io";

import { userData } from '@/lib/user-english-data';
import SocialMediaLinks from '@/components/ui/SocialMediaLink';
import HeroBtn from './ui/HeroBtn';

// import React, { lazy, Suspense } from 'react'
// import LoadingSkills from './ui/LoadingSkills';

// const LazySkillsCard = lazy(() => import('./ui/SkillsCard'));

function Header() {
  const [text] = useTypewriter({
    words: userData.profession,
    loop: 0
  })

  return (
    <header className="flex flex-col px-4 md:my-16 scroll-mt-24 md:gap-10 lg:gap-20 md:pl-2 sm:py-10 md:py-24 md:flex-row md:justify-between" id="home">
      <Image className="md:hidden mx-auto rounded-full ml-auto w-[270px] sm:w-[320px] sm:mr-0" src={userData.image}  alt={userData.name} />
      <div className="flex flex-col gap-4 md:w-1/2 md:gap-10 md:mb-5 " >
      {/* start of heading */}
        <h1 className="font-semibold text-3xl min-[505px]:text-4xl lg:text-5xl ">Hello,<br className="mb-1 "/> This is
          <span className="text-green-600 ">{` ${userData.name}`}</span>
          <br className="sm:mb-2"/>
          <span className="text-2xl sm:text-3xl">
            <span> I’m a </span>
            <span className="">
              <b className="text-pink-600">{text}</b>
            </span>
          </span>
        </h1>

        <p className="text-sm text-left text-pretty sm:text-base md:text-lg">{userData.descriptionText}</p>
        {/* end of heading */}

        {/* start of social media  */}
        <SocialMediaLinks size="25"/>
        {/* end of social media  */}
        <div className="flex flex-col gap-2 sm:flex-row ">
          <HeroBtn url="#contact" text="CONTACT ME">
            <IoMdContact size={20}/>
          </HeroBtn>
          <HeroBtn url="/api/download-resume" text="DOWNLOAD RESUME">
            <IoMdDownload className="" size={20}/>
          </HeroBtn>
        </div>
      </div>

      {/* Desktop */}
       <div className="relative hidden md:flex md:justify-end md:w-4/5 lg:w-[60%] max-w-[480px]">
        <Image 
        className='absolute rounded-full'
          src={userData.image}
          alt={userData.name}
        />
      </div>
      {/* <Suspense fallback={<LoadingSkills />} >
        <LazySkillsCard />
      </Suspense> */}
    </header>);
}


export default Header;