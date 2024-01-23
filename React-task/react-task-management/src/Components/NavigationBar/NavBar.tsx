import React, { useState } from 'react';
import { IoLogoChrome } from "react-icons/io";
import { IoMenu, IoCloseCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

// import { Link } from 'react-scroll';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const NavBar = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(true);


    const sections = ['home', 'about', 'contact'];

    const handleNavigateToHome = () => {
        const homeSection = document.getElementById('home');

        if (homeSection) {
            const position = homeSection.offsetTop - 80;
            scroll.scrollTo(position, {
                smooth: true,
                duration: 500,
            });

            // Optionally close the mobile menu if it's open
            setOpen(false);
        }
    };

    return (
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
                <div onClick={handleNavigateToHome} className="font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800">
                    <span className="text-3xl text-indigo-600 mr-1 pt-2">
                        <IoLogoChrome />
                    </span>
                    Designer
                </div>
                <div onClick={() => setOpen(!open)}
                    className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
                    {open ? (
                        <IoMenu />
                    ) : (
                        <IoCloseCircleOutline />
                    )
                    }

                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0
                 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${!open ? "top-20 opacity-100" : "top-[-490]"} md:opacity-100 opacity-0`}>
                    {sections.map((section) => (
                        <li key={section} className="md:ml-8 text-xl md:my-0 my-7">
                            <ScrollLink
                                to={section}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer"
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </ScrollLink>
                        </li>
                    ))}
                    <button className="bg-indigo-600 text-white font-[poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500"
                        onClick={() => navigate('auth')}
                    >
                        SignIn
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default NavBar