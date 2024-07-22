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
    <nav className="nav-bar bg-inherit">
        <div className="flex items-center gap-1">
            <Link href="">
                <Image className="rounded-3xl" width={40} src={logo} alt="logo" />
            </Link>
            <Link href="">
                <span className="antialiased font-semibold text-neutral-300   text-2xl">Ahmat</span>
            </Link>
        </div>

        <ul className={`nav-list ${isOpenMenu ? "mobile-menu" : ""}`} id="nav-list">
            {
            links.map((item, index) =>
                (<li key={index} className={`nav-item ${activeLink === item.url && "text-sky-500/100 "}`} onClick={() => hideMenu(item.url)}>
                    <Link className="nav-link hover:text-xl hover:underline" href={item.url}>
                        {item.text}
                    </Link>
                </li>)
            )
            }
        </ul>
        <div className="menu-btn md:hidden">
            <Hamburger toggled={isOpenMenu} toggle={setIsOpenMenu} />
        </div>

    </nav>
    );
}

export default NavBar;