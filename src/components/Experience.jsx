import React, { useEffect, useState } from 'react';
import { getAllExperienceApi } from '../service/allAPI';

function Experience() {
    const [experience, setExperience] = useState([])

    //function to get all experience
    const getAllExperience = async () => {
        const result = await getAllExperienceApi()
        setExperience(result.data)
    }
    useEffect(() => {
        getAllExperience()
    }, [])

    return (
        <div className="container mx-auto lg:px-lg-padding xl:px-xl-padding" id='experience'>

            <h2 className="text-4xl py-20 font-roboto bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                EXPERIENCE
            </h2>
            <div className="grid xl:px-24 gap-8 md:grid-cols-2 lg:grid-cols-2">
                {experience?.length > 0 ?
                    experience.map((data) => (
                        <div className="bg-gray-800 p-6 shadow-lg border-2.5 border-gradient">
                            <h3 className="text-xl font-semibold font-roboto text-white">{data.jobRole}</h3>
                            <p className="text-purple-400 font-raleway flex"><p className='hover:text-purple-700 hover:cursor-pointer'>{data.companyName}</p> / {data.location}</p>
                            <p className="text-white mt-2 text-sm font-roboto">
                                {data.discription}
                            </p>
                            {/* <a
                                href={data.cirtificateURL}
                                className='text-gray-400 hover:text-white font-roboto text-sm'
                            >
                                Certificate <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a> */}
                        </div>
                    ))
                    : <p>No data avilable</p>
                }
            </div>

            <h2 className="text-4xl pt-20 font-roboto bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500" id='education'>
                EDUCATION
            </h2>
            <div className="mt-8 xl:px-24">
                <div className="bg-gray-800 p-6 shadow-lg border-2.5 border-gradient">
                    <h3 className="text-xl font-semibold font-roboto text-white">BSc Computer Science</h3>
                    <p className="text-purple-400 font-raleway">Kannur University / 2020 - 2023</p>
                    <a href='https://drive.google.com/file/d/1jDQLp7XB4qf5HNXxKT5zzUfuX0qMGIGG/view?usp=drive_link' target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mt-2 font-roboto text-sm">Certificate <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Experience;
