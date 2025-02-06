import React from 'react'
import Header from '../components/Header'
import Services from '../components/Services'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import resume from '../assets/Harikrishnan_Resume.pdf'
import image from '../images/image blur.jpg'

function Home() {
    return (
        <>
            <div className="bg-custom-background">
                <Header />
                <div className="container mx-auto lg:px-lg-padding xl:px-xl-padding">
                    <div className="flex flex-col lg:flex-row xl:flex-row sm:pt-12 items-center justify-start text-white">
                        <div className="text-left xl:w-3/5">
                            <h1 className="text-6xl font-roboto bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">FULL STACK DEVELOPER</h1>
                            <p className="mt-4 text-xl font-raleway">
                                I am Hari - <span className="text-blue-400">web-developer</span> with a passion for creating beautiful and responsive websites.
                            </p>
                            <a
                                href={resume}
                                download="Harikrishnan_Resume.pdf"
                                className="button-bg mt-6 px-6 py-3 text-lg font-medium text-white shadow-lg text-center inline-block"
                            >
                                DOWNLOAD RESUME
                            </a>

                        </div>
                        <div className="mt-12 xl:w-2/5 lg:ms-14 xl:ms-24">
                            <img src={image} alt="no image" className="rounded-full shadow-lg filter grayscale hover:grayscale-0" />
                        </div>
                    </div>
                </div>
                <hr className='border-t-2 border-gray-100 w-full mt-12' />
                <Services />
                <hr className="border-t-2 border-gray-100 w-full mt-14" />
                <Skills />
                <hr className="border-t-2 border-gray-100 w-full mt-12" />
                <Projects />
                <hr className="border-t-2 border-gray-100 w-full mt-8" />
                <Experience />
                <hr className="border-t-2 border-gray-100 w-full mt-8" />
                <Contact />

            </div>
        </>
    )
}

export default Home