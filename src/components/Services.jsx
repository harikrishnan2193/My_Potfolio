import React, { useEffect } from 'react';
import '../../src/index.css';

function Services() {
    useEffect(() => {
        const cards = document.querySelectorAll('.card-content'); // select all cards

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1, // trigger when 10% of the element is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const span = entry.target.querySelector('span');
                    span.style.width = '0%';
                    span.style.transition = '0.5s';
            
                    const cardText = entry.target.querySelector('.card-text');
                    cardText.style.transform = 'translateY(0)';
                    cardText.style.opacity = '1';
                    cardText.style.transition = 'transform 0.4s, opacity 2s'; // increased opacity transition time for appearing
                } else {
                    // reset styles when the card is out of view
                    const span = entry.target.querySelector('span');
                    span.style.width = '100%';
            
                    const cardText = entry.target.querySelector('.card-text');
                    cardText.style.transform = 'translateY(100px)';
                    cardText.style.opacity = '0';
                    cardText.style.transition = 'transform 0.4s, opacity 0.1s'; // reduced opacity transition time for sudden disappearance
                }
            });
            
        }, observerOptions);

        cards.forEach((card) => observer.observe(card)); // observe all cards

        // cleanup on unmount
        return () => {
            cards.forEach((card) => observer.unobserve(card));
        };
    }, []);

    return (
        <>
            <div className="container mx-auto xl:px-16 relative" id='services'>
                <h2 className="text-4xl pt-20 font-roboto bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                    MY SERVICES
                </h2>

                <div className="relative">
                    {/* vertical line */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full border-l-2 border-white z-10"></div>

                    {/* card 1 */}
                    <div className="flex justify-start mt-20">
                        <div className="card-content bg-gradient-to-tl from-gray-800 to-black p-6 shadow-lg border border-blue-500 text-white xl:w-3/5 z-20 relative">
                            <span></span>
                            <div className="card-text">
                                <div className="flex items-center mb-4">
                                    <div className="text-blue-400 text-4xl">&#128221;</div>
                                    {/* <img src={image} alt='no image' className="w-16 h-16 rounded " /> */}
                                    <h3 className="ml-4 text-2xl font-roboto">Website Development</h3>
                                </div>
                                <p className="text-lg font-raleway">
                                    I can design your website from scratch. I create modern, simple, and user-friendly designs that match your brand and goals.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* card 2 */}
                    <div className="flex justify-end mt-20">
                        <div className="card-content bg-gradient-to-tl from-gray-800 to-black p-6 shadow-lg border border-blue-500 text-white xl:w-3/5 z-20 relative">
                            <span></span>
                            <div className="card-text">
                                <div className="flex items-center mb-4">
                                    <div className="text-blue-400 text-4xl">&#128221;</div>
                                    <h3 className="ml-4 text-2xl font-roboto">App Development</h3>
                                </div>
                                <p className="text-lg font-raleway">
                                    I build mobile apps with modern features, optimized for performance and user experience.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* card 3 */}
                    <div className="flex justify-start mt-20">
                        <div className="card-content bg-gradient-to-tl from-gray-800 to-black p-6 shadow-lg border border-blue-500 text-white xl:w-3/5 z-20 relative">
                            <span></span>
                            <div className="card-text">
                                <div className="flex items-center mb-4">
                                    <div className="text-blue-400 text-4xl">&#128221;</div>
                                    <h3 className="ml-4 text-2xl font-roboto">Website Development</h3>
                                </div>
                                <p className="text-lg font-raleway">
                                    I can design your website from scratch. I create modern, simple, and user-friendly designs that match your brand and goals.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* card 4 */}
                    <div className="flex justify-end mt-20">
                        <div className="card-content bg-gradient-to-tl from-gray-800 to-black p-6 shadow-lg border border-blue-500 text-white xl:w-3/5 z-20 relative">
                            <span></span>
                            <div className="card-text">
                                <div className="flex items-center mb-4">
                                    <div className="text-blue-400 text-4xl">&#128221;</div>
                                    <h3 className="ml-4 text-2xl font-roboto">App Development</h3>
                                </div>
                                <p className="text-lg font-raleway">
                                    I build mobile apps with modern features, optimized for performance and user experience.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Services;
