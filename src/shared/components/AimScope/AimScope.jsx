import React, { useEffect, useState } from 'react'
import { LuClock8, LuLockOpen, LuUserRoundSearch } from "react-icons/lu";
import { FiUpload } from "react-icons/fi";
import { PiRocketLaunchLight } from "react-icons/pi";
import check from '/assets/images/check.png';
import { RiMentalHealthLine } from 'react-icons/ri';


export default function AimScope() {

    const getNextLaunchDate = () => {
        const now = new Date();
        const currentMonth = now.getMonth(); // 0 = January, 11 = December
        const currentYear = now.getFullYear();

        let nextMonth, nextYear;

        if (currentMonth <= 1) {
            // January or February -> March
            nextMonth = 'March';
            nextYear = currentYear;
        } else if (currentMonth <= 4) {
            // March or April -> June
            nextMonth = 'June';
            nextYear = currentYear;
        } else if (currentMonth <= 7) {
            // May, June, or July -> September
            nextMonth = 'September';
            nextYear = currentYear;
        } else if (currentMonth <= 10) {
            // August, September, or October -> December
            nextMonth = 'December';
            nextYear = currentYear;
        } else {
            // November or December -> March next year
            nextMonth = 'March';
            nextYear = currentYear + 1;
        }

        return `${nextMonth} ${nextYear}`;
    };

    const [launchDate, setLaunchDate] = useState(getNextLaunchDate());

    useEffect(() => {
        const checkMonthChange = () => {
            const newLaunchDate = getNextLaunchDate();
            if (newLaunchDate !== launchDate) {
                setLaunchDate(newLaunchDate);
            }
        };

        // Check every day to detect month changes
        const interval = setInterval(checkMonthChange, 24 * 60 * 60 * 1000);

        // Clean up interval on component unmount
        return () => clearInterval(interval);
    }, [launchDate]);

    return (
        <>
            {/* welcome section */}

            <div className=" mx-auto bg-[#FF0B55] ">
                <div className="bg-white rounded-tr-[110px] rounded-bl-[110px] px-10 py-10 border-2 border-[#FF0B55] ">
                    <div className="flex flex-col gap-4 ">
                        <p className='text-[#FF0B55] font-medium border-2 rounded-full  p-1 max-w-30 text-center'>Aim & Scope</p>
                        <h2 className="text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl">
                            International Journal of Cognitive and Behavioral Sciences
                        </h2>
                        <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify  ">
                        The International Journal of Cognitive and Behavioral Sciences aims to advance the scientific understanding of human cognition, emotion, and behavior through the dissemination of high-quality interdisciplinary research. The journal provides a platform for scholars, clinicians, and researchers to explore the complex interplay between psychological processes and neural mechanisms.
                        </p>
                        <div className="text-start mb-10">
                            <a href="https://www.ijcbs.com/ijcbs/index.php/ijcbs/about/submissions" target="_blank" rel="noopener noreferrer">
                                <button className="bg-[#FF0B55] text-white px-4 py-3   cursor-pointer">
                                    <div className="flex justify-between gap-2 items-center ">
                                        {" "}
                                        Submit Manuscript
                                        <FiUpload />
                                    </div>
                                </button>
                            </a>
                        </div>

                    </div>

                </div>
            </div>
            <div className="lg:block hidden ">
                <div className="border-2 border-[#FF0B55]  flex flex-row justify-between items-center max-w-[40rem] px-5 py-3 mx-auto space-x-20 relative -top-14  bg-white">
                    <div className="flex flex-col   items-center">
                        <PiRocketLaunchLight className="text-[#FF0B55] text-3xl" />
                        <p className="text-xl font-medium">Launch Date</p>
                        <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px]"> {launchDate}</p>
                    </div>
                    <div className="flex flex-col  items-center">
                        <LuClock8 className="text-[#FF0B55] text-3xl" />
                        <p className="text-xl font-medium">Processing Time</p>
                        <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px]">4-6 weeks</p>
                    </div>
                    <div className="flex flex-col  items-center">
                        <LuLockOpen className="text-[#FF0B55] text-3xl" />
                        <p className="text-xl font-medium">Open Access</p>
                        <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px]">Yes</p>
                    </div>

                </div>
            </div>





            {/*Featured Topics*/}
            <h2 className="mt-8 lg:-mt-4 text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl mb-2">Cognitive Science</h2>
            <div className="flex flex-col gap-5">
                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                IJCBS supports research that explores how people think, learn, remember, and solve problems. The journal welcomes new ideas and tools that help us understand mental processes.
                </p>
                <div className="flex flex-col gap-4">
                    {[
                        "Accepts both lab and real-life studies.",
                        "Includes brain models and thinking theories.",
                        "Looks at thinking across age groups and cultures.",
                        "Focus on attention, memory, learning, and decision-making.",
                        "Encourages links between psychology, AI, and neuroscience.",
                    ].map((point, index) => (
                        <div key={index} className="flex gap-1">
                            <img src={check} alt="poinicon" className="w-6 h-6" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">{point}</p>
                        </div>
                    ))}
                </div>
            </div>

            <h2 className="mt-8 text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl mb-2">Behavior</h2>
            <div className="flex flex-col gap-5">
                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                This journal highlights how brain activity shapes human behavior. We welcome work that connects brain science with actions, thoughts, and emotions.
                </p>
                <div className="flex flex-col gap-3">
                    {[
                        "Covers brain diseases and recovery.",
                        "Research on how the brain controls behavior.",
                        "Combines biology, psychology, and behavior.",
                        "Supports studies useful for mental health care.",
                        "Includes brain scans and other tools to study the mind.",
                    ].map((point, index) => (
                        <div key={index} className="flex gap-1">
                            <img src={check} alt="poinicon" className="w-6 h-6" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">{point}</p>
                        </div>
                    ))}
                </div>
            </div>


            <h2 className="mt-8 text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl mb-7">Journal Focus Areas</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
                <div className="relative ">
                    <div className="absolute bg-[#FF0B55] w-30 h-[calc(100%+20px)] -top-[10px] -left-[10px]"></div>
                    <div className="bg-white border-2 border-[#FF0B55] relative h-full">
                        <div className="flex flex-row gap-3 items-center p-6">
                            <div className="lg:block hidden">  <LuUserRoundSearch  className="text-[#FF0B55] text-[70px]" /></div>
                            <div className="flex flex-col gap-2 ">
                                <h2 className="text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl ">Behavioral Research</h2>
                                <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">IJCBS emphasizes groundbreaking research into cognitive processes and human behavior. This focus area invites studies exploring how people think, make decisions, solve problems, and interact with their environment. It also covers how external factors, such as culture, upbringing, and life experiences, shape cognitive and behavioral development.</p>
                            </div>
                        </div>
                        <div className="absolute right-0 top-0 flex justify-center items-center bg-[#FF0B55]  px-3 py-3 text-3xl rounded-bl-full text-white font-semibold ">01</div>
                    </div>
                </div>

                <div className="relative ">
                    <div className="absolute bg-[#FF0B55] w-30 h-[calc(100%+20px)] -top-[10px] -right-[10px]"></div>
                    <div className="bg-white border-2 border-[#FF0B55] relative h-full">
                        <div className="flex flex-row gap-3 items-center p-6">
                            <div className="flex flex-col gap-2 ">
                                <h2 className="text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl  text-end">Mental Health</h2>
                                <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">This focus area highlights research that bridges the gap between neuroscience and mental health, addressing the biological underpinnings of mental health disorders. Studies in this section explore how the brain functions in relation to behavior, emotions, and mental illnesses.</p>
                            </div>
                            <div className="lg:block hidden">
                                <RiMentalHealthLine  className="text-[#FF0B55] text-[70px] text-end" />
                            </div>
                        </div>
                        <div className="absolute left-0 top-0  flex justify-center items-center bg-[#FF0B55]  px-3 py-3 text-3xl rounded-br-full text-white font-semibold ">02</div>
                    </div>
                </div>

            </div>
        </>
    )
}
