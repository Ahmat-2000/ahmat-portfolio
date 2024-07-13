import React from 'react'
import myImage from '../images/Moi.jpg';

function Header() {
    return (
        <header className="min-h-screen min-w-full" id="home">
            <div className="container">

                <div className="">
                    <span className="subtitle">Welcome to my world</span>
                    <h1 className="title">Hi, I’m <span>Ahmat Mahamat</span><br />
                        <span className="header-caption" id="page-top">
                            {/* <!-- type headline start--> */}
                            <span className="">
                                <span>a </span>
                        {/* <!-- ROTATING TEXT --> */}
                            <span className="">
                            <b className="is-visible">Developer</b>
                            <b className="is-hidden">Pentester</b>
                            <b className="is-hidden">Freelancer.</b>
                            </span>
                        </span>
                        {/* <!-- type headline end --> */}
                        </span>
                    </h1>

                    <div>
                        <p className="description">I am a self-taught programmer and passionate about cybersecurity.</p>
                    </div>
                </div>
                {/* --------- */}
                <div className="">
                    <div className="">
                        <div className="">
                            <span className="title">Follow Me</span>
                            <ul className="social-share">
                                <li className="github"><a href="https://github.com/Ahmat-2000"><i data-feather="github"></i></a>
                                </li>
                                <li className="youtube"><a href="#"><i data-feather="youtube"></i></a>
                                </li>
                                <li className="instagram"><a href="#"><i data-feather="instagram"></i></a>
                                </li>
                                <li className="linkedin"><a href="#"><i data-feather="linkedin"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <span className="title">best skill on</span>
                            <ul className="">
                                <li><img src="../images/icons/icons-08.png" alt="Icons Images for React" /></li>
                                <li><img src="../images/icons/icons-16.png" alt="Icons Images for Django" /></li>
                                <li><img src="../images/icons/kali.png" alt="Icons Images For Docker" /></li>
                                <li><img src="../images/icons/icons-20.png" alt="Icons Images Java" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* --------- */}
                <div className="">
                    <div className="">
                        <div className="">
                            <img src={myImage} alt="Personal Portfolio Images" />
                        </div>
                    </div>
                </div>

            </div>
        </header>
     );
}

export default Header;