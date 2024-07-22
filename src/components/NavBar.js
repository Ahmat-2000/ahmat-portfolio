'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from "@/images/moi.png";
import { Twirl as Hamburger } from 'hamburger-react';
import { links } from '@/lib/utils';

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
    <nav className="border-b mb-4 border-blue-900/95 shadow-sm shadow-blue-900 rounded-lg p-2 sticky flex items-center justify-between top-0 container mx-auto bg-inherit">
        <div className="flex items-center gap-1 py-1">
            <Link href="">
                <Image className="rounded-3xl" width={40} src={logo} alt="logo" />
            </Link>
            <Link href="">
                <span className="antialiased font-semibold text-neutral-300 text-2xl">Ahmat</span>
            </Link>
        </div>

        <ul className={`${!isOpenMenu ? "hidden" : "flex"} flex-col justify-around items-center absolute top-0 py-8 right-0 min-h-96 bg-slate-950/95 rounded-2xl w-2/4
        md:flex md:flex-row md:justify-evenly md:p-3 md:bg-inherit md:min-h-max md:w-2/3`}>
        {   links.map((item, index) =>
                (<li key={index} className={`${activeLink === item.url && "text-sky-400/95"}  w-2/4 py-1 text-center rounded-xl outline text-xl md:text-lg md:outline-none md:rounded-none`}>
                    <Link
                        onClick={() => hideMenu(item.url)}
                        className="block md:inline hover:text-2xl"
                        href={item.url}>
                        {item.text}
                    </Link>
                </li>))
        }
        </ul>
        <div className="md:hidden absolute top-1 right-1">
            <Hamburger toggled={isOpenMenu} toggle={setIsOpenMenu} />
        </div>

    </nav>
    );
}

export default NavBar;