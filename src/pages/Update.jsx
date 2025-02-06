import React, { useEffect, useState } from 'react'
import { addProjectAPI } from '../service/allAPI';

function Update() {

  const [projectDetils, setProjectDetils] = useState({
    projectName: "",
    discription: "",
    technology: "",
    githubLink: "",
    hostLink: "",
    projectImage: ""
  })

  const [imgPreview, setImgPreview] = useState("")
  // console.log(imgPreview);

  const [token, setToken] = useState("")
  // console.log(token);

  //function for submit project
  const handleProjectSubmit = async (e) => {
    if (!token) {
      alert('Not authorized to upload')
    }
    e.preventDefault()
    const { projectName, discription, technology, githubLink, hostLink, projectImage } = projectDetils

    if (!projectName || !discription || !technology || !githubLink || !hostLink || !projectImage) {
      alert('Plese fill all the fillds')
    }
    else {
      //reqBody
      const reqBody = new FormData()
      reqBody.append('projectName', projectName)
      reqBody.append('discription', discription)
      reqBody.append('technology', technology)
      reqBody.append('githubLink', githubLink)
      reqBody.append('hostLink', hostLink)
      reqBody.append('projectImage', projectImage)

      //reqHeader
      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }

        const result = await addProjectAPI(reqBody, reqHeader)
        // console.log(result);
        if (result.status === 200) {
          alert('Project added succesfully')
          setProjectDetils({ projectName: "", discription: "", technology: "", githubLink: "", hostLink: "", setImgPreview: "" })
        }
        else {
          alert(result.response.data);
        }
      }
    }

  }

  useEffect(() => {
    if (projectDetils.projectImage) {
      setImgPreview(URL.createObjectURL(projectDetils.projectImage))
    }
  }, [projectDetils.projectImage])

  //get token from session and store to state
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
    }
  }, [])

  return (
    <>
      <div className='bg-custom-background mx-auto lg:px-lg-padding xl:px-xl-padding relative h-screen'>
        <div className='text-white flex justify-center items-center pt-10 px-4'>
          <div className='flex flex-col md:flex-row bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full md:w-3/4'>

            <div className='w-full md:w-1/2 px-8 py-3'>
              <h2 className='text-xl font-bold text-center my-2'>Add Project</h2>
              <form>
                <div className='mb-2'>
                  <label className='block text-sm font-medium'>Project Name</label>
                  <input onChange={(e) => setProjectDetils({ ...projectDetils, projectName: e.target.value })} value={projectDetils.projectName}
                    type='text'
                    className='w-full text-black px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    placeholder='Enter project name'
                    required
                  />
                </div>
                <div className='mb-2'>
                  <label className='block text-sm font-medium'>Project Description</label>
                  <input onChange={(e) => setProjectDetils({ ...projectDetils, discription: e.target.value })} value={projectDetils.discription}
                    className='w-full text-black px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    placeholder='Enter project description'
                    required
                  />
                </div>
                <div className='mb-2'>
                  <label className='block text-sm font-medium'>Technology Used</label>
                  <input onChange={(e) => setProjectDetils({ ...projectDetils, technology: e.target.value })} value={projectDetils.technology}
                    type='text'
                    className='w-full text-black px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    placeholder='Enter technologies'
                    required
                  />
                </div>
                <div className='mb-2'>
                  <label className='block text-sm font-medium'>GitHub Link</label>
                  <input onChange={(e) => setProjectDetils({ ...projectDetils, githubLink: e.target.value })} value={projectDetils.githubLink}
                    type='url'
                    className='w-full text-black px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    placeholder='Enter GitHub link'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium'>Hosted Link</label>
                  <input onChange={(e) => setProjectDetils({ ...projectDetils, hostLink: e.target.value })} value={projectDetils.hostLink}
                    type='url'
                    className='w-full text-black px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    placeholder='Enter hosted link'
                    required
                  />
                </div>
                <button onClick={handleProjectSubmit}
                  type='submit'
                  className='w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition'
                >
                  Submit
                </button>
              </form>
            </div>

            {/* image upload */}
            <div className='w-full md:w-1/2 bg-blue-500 flex justify-center items-center p-4'>
              <label htmlFor='upload'>
                <input id='upload' type="file" onChange={(e) => setProjectDetils({ ...projectDetils, projectImage: e.target.files[0] })} style={{ display: 'none' }} />
                <img
                  src={imgPreview ? imgPreview : "https://cdn-icons-png.flaticon.com/512/1004/1004733.png"}
                  alt='Project Illustration'
                  className='w-auto'
                />
              </label>
            </div>
          </div>
        </div>

        <div className='text-white flex justify-center mt-10'><a href="/">back to portfolio <i className="fa-solid fa-arrow-right"></i></a></div>

      </div>

    </>
  )
}

export default Update