import '../../src/index.css';
import React, { useEffect, useState, useRef } from 'react';
import { allSkillsApi } from '../service/allAPI';

function Skills() {
    const [isVisible, setIsVisible] = useState(false);
    const [allSkills, setAllSkills] = useState([]);
    const skillsRef = useRef(null);

    // function to get all skills
    const getAllSkills = async () => {
        try {
            const result = await allSkillsApi();
            // console.log(result.data);
            setAllSkills(result.data);
        } catch (error) {
            console.error("Error fetching skills:", error);
        }
    };

    function PercentageLoader({ percentage }) {
        const [currentPercentage, setCurrentPercentage] = useState(0);

        useEffect(() => {
            setCurrentPercentage(0);
            const duration = 2000;
            const stepTime = Math.ceil(duration / percentage);
            let current = 0;
            let timeout;

            const increment = () => {
                if (current < percentage) {
                    current += 1;
                    setCurrentPercentage(current);
                    timeout = setTimeout(increment, stepTime);
                }
            };

            increment();

            return () => clearTimeout(timeout);
        }, [percentage]);

        return (
            <div className="absolute text-white text-3xl font-bold pt-20">
                {currentPercentage}%
            </div>
        );
    }

    useEffect(() => {
        getAllSkills(); // function call

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 } // trigger when 10% visible
        );

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => {
            if (skillsRef.current) {
                observer.unobserve(skillsRef.current);
            }
        };
    }, []);

    return (
        <div ref={skillsRef} id="skills-section" className="container mx-auto lg:px-lg-padding xl:px-xl-padding relative">
            <h2 className="text-4xl pt-20 font-roboto bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                SKILLS
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-6">
                {allSkills.length > 0 ? (
                    allSkills.map((skill) => (
                        <div key={skill.name} className="w-full sm:w-1/3 lg:w-1/5 text-center">
                            <div className="relative w-36 h-56 mx-auto flex items-center justify-center bg-black border-2 border-blue-300 rounded-full">
                                <div className="absolute inset-0 flex items-start justify-center pt-5">
                                    <img src={skill.icon} alt={skill.name} className="w-16 h-16 rounded-full" />
                                </div>
                                {isVisible && <PercentageLoader key={skill.name} percentage={skill.percentage} />}
                            </div>
                            <div className="text-white font-raleway mt-4">{skill.name}</div>
                        </div>
                    ))
                ) : (
                    <p>Skills loading..</p>
                )}
            </div>
        </div>
    );
}

export default Skills;
