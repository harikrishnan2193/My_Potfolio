import React from 'react'
import Header from '../components/Header'
import Services from '../components/Services'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Contact from '../components/Contact'

function Home() {
    return (
        <>
            <div className="bg-custom-background">
                <Header />
                <div class="container mx-auto xl:px-16">
                    <div class="flex flex-col xl:flex-row sm:pt-12 items-center justify-start text-white">
                        <div class="text-left xl:w-3/5">
                        <h1 class="text-6xl font-roboto bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">FULL STACK DEVELOPER</h1>
                            <p class="mt-4 text-xl font-raleway">
                                I am Hari - <span class="text-blue-400">web-developer</span> with a passion for creating beautiful and responsive websites.
                            </p>
                            <button class="button-bg mt-6 px-6 py-3 text-lg font-medium text-white shadow-lg">
                                DOWNLOAD RESUME
                            </button>
                        </div>
                        <div class="mt-12 xl:w-2/5 xl:ms-28">
                            <img src="https://w7.pngwing.com/pngs/328/627/png-transparent-overcoat-fashion-male-model-zara-model-thumbnail.png" alt="Tatiana" class="rounded-full shadow-lg" />
                        </div>
                    </div>
                </div>
                <hr className='border-t-2 border-gray-100 w-full mt-8' />
                <Services/>
                <hr className="border-t-2 border-gray-100 w-full mt-8" />
                <Skills/>
                <hr className="border-t-2 border-gray-100 w-full mt-8" />
                <Projects/>
                <hr className="border-t-2 border-gray-100 w-full mt-8" />
                <Experience/>
                <hr className="border-t-2 border-gray-100 w-full mt-8" />
                <Contact/>

            </div>
        </>
    )
}

export default Home