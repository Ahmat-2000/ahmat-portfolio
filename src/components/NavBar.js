'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Twirl as Hamburger } from 'hamburger-react';
import { links, userData } from '@/lib/user-english-data';

function NavBar() {
    const [activeLink, setActiveLink] = useState("#home");
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const hideMenu = (url) => {
        setActiveLink(url);
        if(isOpenMenu){
            setIsOpenMenu((isOpen) => !isOpen);
        }
    };
    return (
    <nav className="border-b mb-4 border-blue-900/95 shadow-sm shadow-blue-900 rounded-lg py-2 sticky flex items-center justify-between top-0 z-10 container mx-auto bg-inherit max-w-[1280px] xl:mx-auto">
        <div className="flex items-center gap-1 py-1 pl-2 transition-opacity duration-1000 hover:opacity-75">
            <Link href="">
                <Image className="rounded-3xl" width={40} src={userData.logo} alt="logo" />
            </Link>
            <Link href="">
                <span className="text-2xl antialiased font-bold text-neutral-300">{userData.name}</span>
            </Link>
        </div>

        <ul className={`${!isOpenMenu ? "hidden" : "flex"} flex-col justify-between items-center gap-4 absolute top-0 py-8 right-0 min-h-[420px] bg-gray-600 rounded-2xl w-full sm:w-[70%]
        md:flex md:flex-row md:justify-between md:p-3 md:pr-4 md:bg-inherit md:min-h-max`}>
        {   links.map((item, index) =>
                (<li key={index} className={`${activeLink === item.url && "title-blue"} font-bold w-1/2 md:w-auto py-1 text-center shadow-2xl shadow-black rounded-xl outline outline-gray-800 text-xl md:shadow-none md:text-lg md:outline-none md:rounded-none`}>
                    <Link
                        onClick={() => hideMenu(item.url)}
                        className="block md:inline hover:opacity-55"
                        href={item.url}>
                        {item.text}
                    </Link>
                </li>))
        }
        </ul>
        <div className="absolute transition-opacity duration-700 md:hidden hover:opacity-55 top-1 right-1">
            <Hamburger toggled={isOpenMenu} toggle={setIsOpenMenu} />
        </div>

    </nav>
    );
}

export default NavBar;