import React from 'react';

function Experience() {
    return (
        <div className="container mx-auto xl:px-16 py-10" id='experience'>

            <h2 className="text-4xl pt-20 font-roboto bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                EXPERIENCE
            </h2>
            <div className="grid xl:px-24 gap-8 md:grid-cols-2 lg:grid-cols-2 mt-8">
                <div className="bg-gray-800 p-6 shadow-lg border-2.5 border-gradient">
                    <h3 className="text-xl font-semibold font-roboto text-white">WordPress Designer & WordPress Developer</h3>
                    <p className="text-purple-400 font-raleway">Caliteam / Jan 2024 - April 2024</p>
                    <p className="text-white mt-2 font-roboto">
                        I designed and developed caliteam.org, a WordPress site showcasing my expertise in front-end development, visual design, and UX, using Elementor to create a visually captivating, responsive, and engaging website.
                    </p>
                </div>
                <div className="bg-gray-800 p-6 shadow-lg border-2.5 border-gradient">
                    <h3 className="text-xl font-semibold font-roboto text-white">WordPress Designer & WordPress Developer</h3>
                    <p className="text-purple-400 font-raleway">Caliteam / Jan 2024 - April 2024</p>
                    <p className="text-white mt-2 font-roboto">
                        I designed and developed caliteam.org, a WordPress site showcasing my expertise in front-end development, visual design, and UX, using Elementor to create a visually captivating, responsive, and engaging website.
                    </p>
                </div>
            </div>

            <h2 className="text-4xl pt-20 font-roboto bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500" id='education'>
                EDUCATION
            </h2>
            <div className="mt-8 xl:px-24">
                <div className="bg-gray-800 p-6 shadow-lg border-2.5 border-gradient">
                    <h3 className="text-xl font-semibold font-roboto text-white">BS. Information Technology</h3>
                    <p className="text-purple-400 font-raleway">University of Sindh / 2017 - 2021</p>
                    <p className="text-white mt-2 font-raleway">3.25/4.00 CGPA</p>
                </div>
            </div>
        </div>
    );
}

export default Experience;
