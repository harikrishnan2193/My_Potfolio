import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { detilsApi } from '../service/allAPI';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [persData, setPersData] = useState([])

    //function to get detils
    const getDetils = async () => {
        const result = await detilsApi()
        setPersData(result.data)
    }
    useEffect(() => {
        getDetils()
    }, [])

    return (
        <div className="bg-custom-background">
            <div className="container py-8 mx-auto lg:px-lg-padding xl:px-xl-padding">
                <nav className="flex flex-col sm:flex-row items-center justify-between py-3 px-8 border border-gray-500 rounded-2xl space-y-4 sm:space-y-0">
                    <h1 className="sm:text-lg font-semibold font-roboto text-white text-center sm:text-left text-2xl">{persData?.length > 0 ? persData[0].name : "Loading..."}</h1>

                    <div className="hidden text-white xl:flex flex-col sm:flex-row space-x-0 sm:space-x-8 space-y-2 sm:space-y-0">
                        <Link to='services'><a className="hover:text-blue-400 hover:cursor-pointer">SERVICES</a></Link>
                        <Link to='skills-section'><a className="hover:text-blue-400 hover:cursor-pointer">SKILLS</a></Link>
                        <Link to='potfolio'><a className="hover:text-blue-400 hover:cursor-pointer">PROJECTS</a></Link>
                    </div>

                    <div className="hidden xl:flex space-x-4 text-2xl">
                        <a href={`https://wa.me/${persData?.length > 0 ? persData[0].whatsapp : '9495312193'}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                        <a href={`https://t.me/${persData?.length > 0 ? persData[0].telegram_id : 'hari_krishnank'}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <i className="fab fa-telegram"></i>
                        </a>
                        <a href={`https://${persData?.length > 0 ? persData[0].linkedin_id : 'www.linkedin.com/in/harikrishnan-k-9747792a2'}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
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
                        <Link to='potfolio'><a onClick={() => setIsMenuOpen(false)} className="hover:text-blue-400">Projects</a></Link>
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
