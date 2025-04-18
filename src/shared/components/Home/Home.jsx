import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaRegCircleDot } from "react-icons/fa6";
import { LuClock8, LuLockOpen } from "react-icons/lu";
import { BsArrowUpRight } from "react-icons/bs";
import { FiUpload } from "react-icons/fi";
import { PiRocketLaunchLight } from "react-icons/pi";
import check from '/assets/images/check.png';
import { MdOutlineRateReview } from "react-icons/md";



export default function Home({ firstRow, secondRow, thirdRow }) {
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
                        <h2 className="text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl">
                            International Journal of Cognitive and Behavioral Sciences
                        </h2>
                        <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify  ">
                            is a peer-reviewed platform dedicated to the exploration and advancement of knowledge in the fields of cognition, psychology, and behavioral science. The journal publishes high-quality empirical research, theoretical frameworks, and critical reviews that shed light on the complex interplay between thought, emotion, and behavior. With an interdisciplinary approach, it aims to connect researchers, clinicians, and scholars across neuroscience, artificial intelligence, education, and mental health, fostering innovation and insight into human and animal behavior.
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
            <h2 className="mt-8 lg:-mt-4 text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl mb-2">About the Journal</h2>
            <div className="flex flex-col gap-5">
                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                    It is Committed to fostering a deeper understanding of the mind and behavior, the journal serves as a global platform for interdisciplinary scholarship, welcoming contributions that explore mental processes, human behavior, and their practical applications. IJCBS supports scientific rigor, theoretical innovation, and cross-disciplinary dialogue to advance knowledge and inform practice in both research and clinical settings.
                </p>
                <div className="flex flex-col gap-4">
                    {[
                        "Maintains high academic standards through a double-blind peer review process.",
                        "Emphasizes real-world relevance in clinical, educational, technological, and organizational contexts.",
                        "Covers topics across cognitive science, psychology, neuroscience, behavioral economics, and artificial intelligence.",
                    ].map((point, index) => (
                        <div key={index} className="flex gap-1">
                            <img src={check} alt="poinicon" className="w-6 h-6" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">{point}</p>
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={() => navigate('/aboutus')} className="bg-[#FF0B55] text-white px-4 py-3 cursor-pointer mt-5">
                <div className="flex justify-between gap-2 items-center">
                    Read More
                    <BsArrowUpRight />
                </div>
            </button>


            <h2 className="mt-8 text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl mb-2">Aim and Scope</h2>
            <div className="flex flex-col gap-5">
                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                    The journal provides a platform for scholars and practitioners to explore how cognitive processes influence behavior across various contexts—including clinical, social, technological, and educational domains.
                </p>
                <div className="flex flex-col gap-3">
                    {[
                        "Research on memory, attention, language, perception, learning, and decision-making.",
                        "Studies on behavioral patterns, habits, social behavior, and behavioral interventions.",
                        "Contributions addressing mental health, therapy, behavior modification, and educational psychology."
                    ].map((point, index) => (
                        <div key={index} className="flex gap-1">
                            <img src={check} alt="poinicon" className="w-6 h-6" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">{point}</p>
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={() => navigate('/aimscope')} className="bg-[#FF0B55] text-white px-4 py-3 cursor-pointer mt-5">
                <div className="flex justify-between gap-2 items-center">
                    Read More
                    <BsArrowUpRight />
                </div>
            </button>



            <h2 className="mt-8 text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl mb-7">Journal Overviews</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="relative ">
                    <div className="absolute bg-[#FF0B55] w-30 h-[calc(100%+20px)] -top-[10px] -left-[10px]"></div>
                    <div className="bg-white border-2 border-[#FF0B55] relative h-full ">
                        <div className="flex flex-row gap-3 items-center p-6">
                            <div className="lg:block hidden">  <LuLockOpen className="text-[#FF0B55] text-[70px]" /></div>
                            <div className="flex flex-col gap-2 ">
                                <h2 className="text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl ">Open Access</h2>
                                <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">The International Journal of Cognitive and Behavioral Sciences is committed to the principles of open access publishing. All articles published in the journal are freely accessible online without any subscription or access fees. This ensures that research is available to a global audience, promoting greater visibility, increased citations, and the rapid dissemination of knowledge across academic, clinical, and public communities.</p>
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
                                <h2 className="text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl  text-end">Peer Review</h2>
                                <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">The International Journal of Cognitive and Behavioral Sciences follows a rigorous double-blind peer review process to ensure the highest standards of academic integrity and research quality. Each submitted manuscript is evaluated anonymously by at least two independent experts in the relevant field. Reviewers assess the originality, methodological soundness, clarity, and significance of the research.</p>
                            </div>
                            <div className="lg:block hidden">
                                <MdOutlineRateReview className="text-[#FF0B55] text-[70px] text-end" />
                            </div>
                        </div>
                        <div className="absolute left-0 top-0  flex justify-center items-center bg-[#FF0B55]  px-3 py-3 text-3xl rounded-br-full text-white font-semibold ">02</div>
                    </div>
                </div>

            </div>


            <h2 className="mt-12 text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl mb-4">The Journal covers the following areas</h2>
            <div className=" mx-auto bg-[#FF0B55] ">
                <div className="bg-white rounded-tr-[110px] rounded-bl-[110px] px-10 py-10 border-2 border-[#FF0B55] ">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-8">
                        {/* Column 1 */}
                        <div className="space-y-3">
                            {firstRow.map((keyword, index) => (
                                <div key={index} className="flex items-center p-3 rounded-lg">
                                    <div className="p-2 rounded-md">
                                        <FaRegCircleDot className="h-4 w-4 text-[#FF0B55]" />
                                    </div>
                                    <span className="ml-3 text-gray-700">{keyword}</span>
                                </div>
                            ))}
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-3">
                            {secondRow.map((keyword, index) => (
                                <div key={index} className="flex items-center   p-3  ">
                                    <div className="p-2 rounded-md">
                                        <FaRegCircleDot className="h-4 w-4 text-[#FF0B55]" />
                                    </div>
                                    <span className="ml-3 text-gray-700">{keyword}</span>
                                </div>
                            ))}
                        </div>

                        {/* Column 3 */}
                        <div className="space-y-3">
                            {thirdRow.map((keyword, index) => (
                                <div key={index} className="flex items-center  p-3 ">
                                    <div className="p-2 rounded-md">
                                        <FaRegCircleDot className="h-4 w-4 text-[#FF0B55]" />
                                    </div>
                                    <span className="ml-3 text-gray-700">{keyword}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>



            {/*Last*/}
            <div className="bg-[#FF0B55] mt-8">
                <div className="bg-white rounded-tr-[110px] rounded-bl-[110px] px-10 py-8 border-2 border-[#FF0B55] ">
                    <h2 className="text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl mb-4 text-center">Journal Announcement</h2>
                    <div className="text-center ">
                        <p className="text-gray-900 mb-4   lg:px-0  text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        We publish original research articles, review papers, case studies, and technical notes in the fields of cognitive science, psychology, and behavioral neuroscience. The journal highlights emerging trends, innovative research methodologies, and real-world applications related to human cognition, behavior, and mental health. IJCBS is committed to a rigorous yet efficient peer-review process, typically completing reviews within two weeks of submission. Once accepted, manuscripts are promptly published online, ensuring swift and wide dissemination of high-impact scholarly work.
                        </p>
                        <div className="text-center">
                            <p className="poppins-medium  text-sm lg:text-base">
                                The last date for manuscript submission for the next issue is {launchDate}
                            </p>
                        </div>
                        <p className=" mt-4 px-4 lg:px-0">
                            With Warm Regards, <br />
                            <span className="poppins-semibold text-gray-900">Editor-in-Chief </span><br />
                            <span className="poppins-bold text-[#FF0B55]">IJCBS</span>
                        </p>
                    </div>
                </div>

            </div>

        </>
    );
}
