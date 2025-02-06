import React, { useEffect, useState } from 'react'
import { allProjectApi } from '../service/allAPI'
import { BASE_URL } from '../service/baseURL'

function Projects() {
  const [allProject, setAllProject] = useState()

  //get all project 
  const getAllProject = async () => {
    const result = await allProjectApi()
    setAllProject(result.data)
  }
  useEffect(() => {
    getAllProject()
  }, [])


  return (
    <>
      <div
        className='container mx-auto lg:px-lg-padding xl:px-xl-padding relative' id='potfolio'
      >
        <h2 className='text-4xl py-20 font-roboto bg-clip-text text-transparent text-start bg-gradient-to-r from-blue-400 to-purple-500'>
          PROJECTS
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* card */}
          {allProject?.length > 0 ? (
            allProject?.map((project) => (
              <div className="group relative bg-gradient-to-tl from-gray-800 to-black border-gradient overflow-hidden shadow-lg transition-all duration-300 mb-10">
                <img
                  src={`${BASE_URL}/uploads/${project.projectImage}`}
                  alt="Project Image"
                  className="w-full h-60 transition-transform duration-300 group-hover:translate-y-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-gray-800 to-black p-4 flex flex-col justify-center items-center transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-3 right-3 text-3xl text-gray-400 hover:text-gray-200"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  )}

                  <h3 className="text-white text-center text-sm font-roboto">{project.discription}</h3>
                  <p className="text-gray-400 text-sm font-raleway">Tech: {project.technology}</p>
                </div>

                <div className="absolute bottom-2 w-full text-center">
                  {project.hostLink && (
                    <a
                      href={project.hostLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-800 font-roboto text-lg"
                    >
                      {project.projectName} <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>Projects are loading..</p>
          )}

        </div>
      </div>
    </>
  )
}

export default Projects