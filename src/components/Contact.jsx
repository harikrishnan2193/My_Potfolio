import React from 'react';

function Contact() {
    return (
        <div className="container mx-auto xl:px-16 py-10" id='contact'>
            {/* Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
                {/* Left Section */}
                <div>
                    <h2 className="text-4xl font-bold font-roboto bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                        DO YOU HAVE A PROJECT TO DISCUSS?
                    </h2>
                    <h3 className="text-2xl font-semibold text-white mb-4">
                        GET IN TOUCH <span role="img" aria-label="chat"><i class="fa-regular fa-comment-dots"></i></span>
                    </h3>
                    <p className="text-gray-400 mb-3">CONTACT</p>
                    <p className="text-blue-400 mb-4">web.smm.zty@gmail.com</p>
                    <p className="text-gray-400 mb-3">SOCIAL MEDIA</p>
                    <div className="flex space-x-4 text-2xl">
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-telegram"></i>
                        </a>
                    </div>
                </div>

                {/* Right Section */}
                <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">CONTACT FORM</h3>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-400 mb-2">Name</label>
                            <input type="text" className="w-full p-3 bg-gray-900 text-white rounded-2xl" />
                        </div>
                        <div>
                            <label className="block text-gray-400 mb-2">Email</label>
                            <input type="email" className="w-full p-3 bg-gray-900 text-white rounded-2xl" />
                        </div>
                        <div>
                            <label className="block text-gray-400 mb-2">Message</label>
                            <input type="text" className="w-full p-3 bg-gray-900 text-white rounded-2xl"></input>
                        </div>
                        <button className="button-bg mt-6 py-2 text-lg font-medium text-white shadow-lg">
                            SEND
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
