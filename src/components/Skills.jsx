import '../../src/index.css';
import React, { useEffect, useState } from 'react';

function Skills() {
    const [isVisible, setIsVisible] = useState(false);

    function PercentageLoader({ percentage }) {
        const [currentPercentage, setCurrentPercentage] = useState(0);
    
        useEffect(() => {
            setCurrentPercentage(0); // reset to 0 before starting
            const duration = 2000;
            const stepTime = Math.ceil(duration / percentage);
            let current = 0;
    
            const increment = () => {
                current += 1;
                setCurrentPercentage(current);
                if (current < percentage) {
                    setTimeout(increment, stepTime);
                }
            };
    
            increment();
        }, [percentage]);
    
        return (
            <div className="absolute text-white text-3xl font-bold pt-20">
                {currentPercentage}%
            </div>
        );
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.1 } // trigger when 10% of the section is visible
        );

        const section = document.querySelector('#skills-section');

        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);

    const skills = [
        { name: 'Figma', percentage: 85, icon: 'https://cdn.sanity.io/images/599r6htc/regionalized/5094051dac77593d0f0978bdcbabaf79e5bb855c-1080x1080.png?w=540&h=540&q=75&fit=max&auto=format' },
        { name: 'WaveFlow', percentage: 70, icon: 'https://images.seeklogo.com/logo-png/35/1/tailwind-css-logo-png_seeklogo-354675.png' },
        { name: 'WordPress', percentage: 90, icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/768px-WordPress_blue_logo.svg.png' },
        { name: 'Photoshop', percentage: 95, icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png' },
        { name: 'Illustrator', percentage: 75, icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/768px-Adobe_Illustrator_CC_icon.svg.png' },
    ];

    return (
        <div id="skills-section" className="container mx-auto xl:px-16 relative">
            <h2 className="text-4xl pt-20 font-roboto bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                SKILLS
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-6">
                {skills.map((skill) => (
                    <div key={skill.name} className="w-full sm:w-1/3 lg:w-1/5 text-center">
                        <div className="relative w-36 h-56 mx-auto flex items-center justify-center bg-black border-2 border-blue-300 rounded-full">
                            <div className="absolute inset-0 flex items-start justify-center pt-5">
                                <img src={skill.icon} alt={skill.name} className="w-16 h-16 rounded-full" />
                            </div>
                            {isVisible && <PercentageLoader key={isVisible ? skill.name : `hidden-${skill.name}`} percentage={skill.percentage} />}
                        </div>
                        <div className="text-white font-raleway mt-4">{skill.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
