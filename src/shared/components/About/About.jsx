import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { LuClock8, LuLockOpen } from "react-icons/lu";
import { BsArrowUpRight, BsJournalCheck } from "react-icons/bs";
import { FiUpload } from "react-icons/fi";
import { PiRocketLaunchLight } from "react-icons/pi";
import check from '/assets/images/check.png';
import { FaBookReader } from 'react-icons/fa';


export default function About() {
    const navigate = useNavigate();

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
                    <p className='text-[#FF0B55] font-medium border-2 rounded-full  p-1 max-w-25 text-center'>About us</p>
                       
                        <h2 className="text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl">
                            International Journal of Cognitive and Behavioral Sciences
                        </h2>
                        <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify  ">
                            The International Journal of Cognitive and Behavioral Sciences is a peer-reviewed, open-access academic journal dedicated to the advancement of research in cognitive science, psychology, and behavioral studies. Our mission is to foster interdisciplinary dialogue and disseminate high-quality research that deepens the understanding of human cognition, emotion, and behavior across diverse contexts.
                        </p>
                        <div className="text-start mb-10">
                            <a href="" target="_blank" rel="noopener noreferrer">
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
            <h2 className="mt-8 lg:-mt-4 text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl mb-2">Mission</h2>
            <div className="flex flex-col gap-5">
                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                    Our mission at IJCBS is to contribute to the advancement of cognitive and behavioral sciences by supporting research that informs practice, shapes policy, and drives innovation in mental health and human development. We seek to bridge gaps between academic research and real-world application.
                </p>
                <div className="flex flex-col gap-4">
                    {[
                        "Promote high-quality, ethically conducted research.",
                        "Support the global research community with open access.",
                        "Encourage interdisciplinary collaborations and innovations.",
                        "Translate scientific discoveries into meaningful outcomes.",
                    ].map((point, index) => (
                        <div key={index} className="flex gap-1">
                            <img src={check} alt="poinicon" className="w-6 h-6" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">{point}</p>
                        </div>
                    ))}
                </div>
            </div>

            <h2 className="mt-8 text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl mb-2">Publication Focus</h2>
            <div className="flex flex-col gap-5">
                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                    IJCBS publishes a wide range of scholarly work, including original research articles, systematic reviews, case studies, and technical papers. The journal emphasizes studies with strong theoretical foundations, novel methodologies, and practical relevance in areas such as learning, memory, behavior, emotion, and psychological well-being.
                </p>
                <div className="flex flex-col gap-3">
                    {[
                        "Supports interdisciplinary and cross-sectoral research initiatives.",
                        "Emphasizes innovation, scientific rigor, and real-world impact.",
                        "Welcomes applied studies with clinical or educational relevance.",
                        "Publishes in areas like cognitive processes, behavioral analysis, and mental health."
                    ].map((point, index) => (
                        <div key={index} className="flex gap-1">
                            <img src={check} alt="poinicon" className="w-6 h-6" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">{point}</p>
                        </div>
                    ))}
                </div>
            </div>


            <h2 className="mt-8 text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl mb-7">Journal Features</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="relative ">
                    <div className="absolute bg-[#FF0B55] w-30 h-[calc(100%+20px)] -top-[10px] -left-[10px]"></div>
                    <div className="bg-white border-2 border-[#FF0B55] relative h-full">
                        <div className="flex flex-row gap-3 items-center p-6">
                            <div className="lg:block hidden">  <FaBookReader  className="text-[#FF0B55] text-[70px]" /></div>
                            <div className="flex flex-col gap-2 ">
                                <h2 className="text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl ">Readership</h2>
                                <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">With authors, reviewers, and readers from across the globe, IJCBS promotes diverse cultural perspectives and fosters international research collaboration. The journal values cross-border academic engagement and welcomes manuscripts that explore global challenges in psychology and neuroscience.</p>
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
                                <h2 className="text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl  text-end">Relevance</h2>
                                <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">In addition to theoretical and experimental research, IJCBS encourages studies that offer practical implications in clinical psychology, educational practices, organizational behavior, and cognitive rehabilitation—helping to bridge the gap between science and practice.</p>
                            </div>
                            <div className="lg:block hidden">
                                <BsJournalCheck  className="text-[#FF0B55] text-[70px] text-end" />
                            </div>
                        </div>
                        <div className="absolute left-0 top-0  flex justify-center items-center bg-[#FF0B55]  px-3 py-3 text-3xl rounded-br-full text-white font-semibold ">02</div>
                    </div>
                </div>

            </div>



            {/*Last*/}
            <div className="bg-[#FF0B55] mt-8">
                <div className="bg-white rounded-tr-[110px] rounded-bl-[110px] px-10 py-8 border-2 border-[#FF0B55] ">
                    <h2 className="text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl mb-4 text-center">Submission Guidelines</h2>
                    <div className="text-center ">
                        <p className="text-gray-900 mb-4   lg:px-0  text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                            The International Journal of Cognitive and Behavioral Sciences invites original research articles, review papers, case studies, and technical notes in the fields of psychology, neuroscience, and cognitive sciences. Manuscripts should be submitted in MS Word format, structured with an abstract, keywords, main text, references, and any figures or tables. All submissions must follow APA 7th edition referencing and include ethical compliance statements where applicable. The journal follows a double-blind peer review process with an average review time of 2–3 weeks.
                        </p>
                    </div>
                    <div className='text-center'>
                        <button onClick={() => navigate('/authorguidelinespage')} className="bg-[#FF0B55] text-white px-4 py-3 cursor-pointer mt-5">
                            <div className="flex justify-between gap-2 items-center">
                                Submission Guidelines
                                <BsArrowUpRight />
                            </div>
                        </button>

                    </div>

                </div>

            </div>
        </>
    )
}
