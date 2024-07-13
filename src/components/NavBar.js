'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from "@/images/Moi.jpg";
import { Twirl as Hamburger } from 'hamburger-react';

function NavBar() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const hideMenu = () => {
        if(isOpenMenu){
            setIsOpenMenu((isOpen) => !isOpen);
        }
    }
    return (
    <nav className="nav-bar">
        <div id="logo">
            <Link href="">
                <Image width={40} height={40} src={logo} alt="logo" />
            </Link>
            <Link href=""><span>Ahmat</span></Link>
        </div>

        <ul className={`nav-list ${isOpenMenu ? "mobile-menu" : ""}`} id="nav-list">
            <li className="nav-item" onClick={hideMenu}><Link className="nav-link active" href="#home">Home</Link></li>
            <li className="nav-item" onClick={hideMenu}><Link className="nav-link " href="#features">Features</Link></li>
            <li className="nav-item" onClick={hideMenu}><Link className="nav-link " href="#resume">Resume</Link></li>
            <li className="nav-item" onClick={hideMenu}><Link className="nav-link " href="#pricing">Pricing</Link></li>
            <li className="nav-item" onClick={hideMenu}><Link className="nav-link " href="#contacts">Contact</Link></li>
        </ul>

        <div className="menu-btn">
            <Hamburger toggled={isOpenMenu} toggle={setIsOpenMenu} />
        </div>

    </nav>
    );
}

export default NavBar;