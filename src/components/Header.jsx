import React, { useState } from 'react';
import { Link } from 'react-scroll';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="bg-custom-background">
            <div className="py-8 container mx-auto xl:px-16">
                <nav className="flex flex-col sm:flex-row items-center justify-between py-4 px-8 mx-auto max-w-6xl border border-gray-500 rounded-2xl space-y-4 sm:space-y-0">
                    <h1 className="text-lg font-semibold font-roboto text-white text-center sm:text-left">HARIKRISHNAN K</h1>

                    <div className="hidden text-white xl:flex flex-col sm:flex-row space-x-0 sm:space-x-8 space-y-2 sm:space-y-0">
                        <Link to='services'><a className="hover:text-blue-400 hover:cursor-pointer">SERVICES</a></Link>
                        <Link to='skills-section'><a className="hover:text-blue-400 hover:cursor-pointer">SKILLS</a></Link>
                        <Link to='potfolio'><a className="hover:text-blue-400 hover:cursor-pointer">PROJECTS</a></Link>
                    </div>

                    {/* <div className="button-bg hidden xl:flex items-center justify-center space-x-2 hover:cursor-pointer">
                        <span>Resume</span>
                        <i className="fas fa-download"></i>
                    </div> */}

                    <div className="hidden xl:flex space-x-4 text-2xl">
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-telegram"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="xl:hidden text-white text-3xl"
                    >
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </nav>

                <div
                    className={`fixed top-0 right-0 w-3/4 sm:w-1/3 h-full bg-custom-background transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        } z-50`}
                >
                    <div className="p-5">
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="text-white text-3xl"
                        >
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                    <nav className="flex flex-col items-start space-y-10 p-5 text-white">
                        <Link to='services'><a onClick={() => setIsMenuOpen(false)} className="hover:text-blue-400">My Services</a></Link>
                        <Link to='skills-section'><a onClick={() => setIsMenuOpen(false)} className="hover:text-blue-400">Skills</a></Link>
                        <Link to='potfolio'><a onClick={() => setIsMenuOpen(false)} className="hover:text-blue-400">Potfolio</a></Link>
                        <Link to='experience'><a onClick={() => setIsMenuOpen(false)} className="hover:text-blue-400">Experience</a></Link>
                        <Link to='education'><a onClick={() => setIsMenuOpen(false)} className="hover:text-blue-400">Education</a></Link>
                        <Link to='contact'><a onClick={() => setIsMenuOpen(false)} className="hover:text-blue-400">Contact</a></Link>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;
