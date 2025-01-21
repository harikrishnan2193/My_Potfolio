import React from 'react'

function Projects() {
  return (
    <>
    <div
      className='container mx-auto xl:px-16 relative' id='potfolio'
    >
      <h2 className='text-4xl py-20 font-roboto bg-clip-text text-transparent text-start bg-gradient-to-r from-blue-400 to-purple-500'>
        PROJECTS
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {/* card */}
        <div className='group relative bg-gradient-to-tl from-gray-800 to-black rounded-2xl border-2 border-blue-300 overflow-hidden shadow-lg transition-all duration-300 mb-10'>
          <img
            src='https://t3.ftcdn.net/jpg/05/71/06/76/360_F_571067620_JS5T5TkDtu3gf8Wqm78KoJRF1vobPvo6.jpg'
            alt='Project Image'
            className='w-full h-60 object-cover transition-transform duration-300 group-hover:translate-y-full'
          />
          <div className='absolute inset-0 bg-gradient-to-tl from-gray-800 to-black p-4 flex flex-col justify-center items-center transition-transform duration-300 transform translate-y-full group-hover:translate-y-0'>
            <h3 className='text-white text-lg  font-roboto'>Project discription</h3>
            <p className='text-gray-400 font-raleway'>HTML, CSS, JS</p>
          </div>
          <div className='absolute bottom-2 w-full text-center'>
            <a
              href='#'
              className='text-blue-600 hover:text-blue-800 font-roboto text-lg'
            >
              Project Name <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
        <div className='group relative bg-gradient-to-tl from-gray-800 to-black rounded-2xl border-2 border-blue-300 overflow-hidden shadow-lg transition-all duration-300 mb-10'>
          <img
            src='https://t3.ftcdn.net/jpg/05/71/06/76/360_F_571067620_JS5T5TkDtu3gf8Wqm78KoJRF1vobPvo6.jpg'
            alt='Project Image'
            className='w-full h-60 object-cover transition-transform duration-300 group-hover:translate-y-full'
          />
          <div className='absolute inset-0 bg-gradient-to-tl from-gray-800 to-black p-4 flex flex-col justify-center items-center transition-transform duration-300 transform translate-y-full group-hover:translate-y-0'>
            <h3 className='text-white text-lg  font-roboto'>Project discription</h3>
            <p className='text-gray-400 font-raleway'>HTML, CSS, JS</p>
          </div>
          <div className='absolute bottom-2 w-full text-center'>
            <a
              href='#'
              className='text-blue-600 hover:text-blue-800 font-roboto text-lg'
            >
              Project Name <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
        <div className='group relative bg-gradient-to-tl from-gray-800 to-black rounded-2xl border-2 border-blue-300 overflow-hidden shadow-lg transition-all duration-300 mb-10'>
          <img
            src='https://t3.ftcdn.net/jpg/05/71/06/76/360_F_571067620_JS5T5TkDtu3gf8Wqm78KoJRF1vobPvo6.jpg'
            alt='Project Image'
            className='w-full h-60 object-cover transition-transform duration-300 group-hover:translate-y-full'
          />
          <div className='absolute inset-0 bg-gradient-to-tl from-gray-800 to-black p-4 flex flex-col justify-center items-center transition-transform duration-300 transform translate-y-full group-hover:translate-y-0'>
            <h3 className='text-white text-lg  font-roboto'>Project discription</h3>
            <p className='text-gray-400 font-raleway'>HTML, CSS, JS</p>
          </div>
          <div className='absolute bottom-2 w-full text-center'>
            <a
              href='#'
              className='text-blue-600 hover:text-blue-800 font-roboto text-lg'
            >
              Project Name <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
        <div className='group relative bg-gradient-to-tl from-gray-800 to-black rounded-2xl border-2 border-blue-300 overflow-hidden shadow-lg transition-all duration-300 mb-10'>
          <img
            src='https://t3.ftcdn.net/jpg/05/71/06/76/360_F_571067620_JS5T5TkDtu3gf8Wqm78KoJRF1vobPvo6.jpg'
            alt='Project Image'
            className='w-full h-60 object-cover transition-transform duration-300 group-hover:translate-y-full'
          />
          <div className='absolute inset-0 bg-gradient-to-tl from-gray-800 to-black p-4 flex flex-col justify-center items-center transition-transform duration-300 transform translate-y-full group-hover:translate-y-0'>
            <h3 className='text-white text-lg  font-roboto'>Project discription</h3>
            <p className='text-gray-400 font-raleway'>HTML, CSS, JS</p>
          </div>
          <div className='absolute bottom-2 w-full text-center'>
            <a
              href='#'
              className='text-blue-600 hover:text-blue-800 font-roboto text-lg'
            >
              Project Name <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
        
        
      </div>
    </div>
    </>
  )
}

export default Projects