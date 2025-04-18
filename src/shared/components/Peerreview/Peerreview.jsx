import React  from 'react'
import check from '/assets/images/check.png';
import { MdOutlineAssessment } from "react-icons/md";
import { VscOpenPreview } from 'react-icons/vsc';

export default function Peerreview() {

    return (
        <>
            {/*Peer Review Process: */}
            <div className=" mx-auto bg-[#FF0B55] ">
                <div className="bg-white rounded-tr-[110px] rounded-bl-[110px] px-10 py-10 border-2 border-[#FF0B55] ">
                    <div className="flex flex-col gap-4 ">
                        <p className='text-[#FF0B55] font-medium border-2 rounded-full  p-1 max-w-45 text-center'>Publication Process</p>
                        <h2 className="text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl">
                            Peer Review & Publication Guidelines
                        </h2>
                        <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify  ">
                            All manuscripts submitted to the International Journal of Cognitive and Behavioral Sciences undergo a rigorous double-blind peer review process to ensure the highest standards of academic quality and integrity. Each submission is first evaluated by the editorial board for relevance, originality, and adherence to journal guidelines. Suitable manuscripts are then reviewed by at least two independent experts in the relevant field.
                        </p>
                    </div>

                </div>
            </div>

            {/*Featured Topics*/}
            <h2 className="mt-8 text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl mb-2">Double-Blind Peer Review </h2>
            <div className="flex flex-col gap-5">
                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                    IJCBS follows a double-blind peer review process, where both reviewers and authors remain anonymous to ensure objectivity and unbiased evaluation of the research work.
                </p>
                <div className="flex flex-col gap-4">
                    {[
                        "Reviewer and author identities are kept confidential.",
                        "Reviews are based solely on content quality and contribution.",
                        "Reviewers provide detailed comments and suggestions.",
                        "Ensures fair and professional assessment.",
                    ].map((point, index) => (
                        <div key={index} className="flex gap-1">
                            <img src={check} alt="poinicon" className="w-6 h-6" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">{point}</p>
                        </div>
                    ))}
                </div>
            </div>

            <h2 className="mt-8 text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl mb-2">Initial Editorial Screening</h2>
            <div className="flex flex-col gap-5">
                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                    Every manuscript submitted to IJCBS first undergoes an internal screening by the editorial team. This step ensures that the submission meets the journal’s scope, formatting, and ethical guidelines before proceeding to peer review.
                </p>
                <div className="flex flex-col gap-3">
                    {[
                        "Manuscripts are checked for relevance to cognitive and behavioral sciences.",
                        "Formatting and citation style are reviewed.",
                        "Plagiarism screening is conducted using reliable software.",
                        "Papers not meeting the criteria are returned to authors promptly.",
                    ].map((point, index) => (
                        <div key={index} className="flex gap-1">
                            <img src={check} alt="poinicon" className="w-6 h-6" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">{point}</p>
                        </div>
                    ))}
                </div>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12">
                <div className="relative ">
                    <div className="absolute bg-[#FF0B55] w-30 h-[calc(100%+20px)] -top-[10px] -left-[10px]"></div>
                    <div className="bg-white border-2 border-[#FF0B55] relative h-full">
                        <div className="flex flex-row gap-3 items-center p-6">
                            <div className="lg:block hidden">  <MdOutlineAssessment  className="text-[#FF0B55] text-[70px]" /></div>
                            <div className="flex flex-col gap-2 ">
                                <h2 className="text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl ">Editorial Assessment </h2>
                                <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">All submitted manuscripts to IJCBS first undergo an internal editorial review. This initial step is to ensure the submission aligns with the journal’s aims and scope, adheres to formatting guidelines, and passes a plagiarism check. Only those meeting the basic criteria are forwarded for external peer review.</p>
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
                                <h2 className="text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl  text-end">Double-Blind Review </h2>
                                <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">IJCBS employs a double-blind peer review system to ensure fairness and objectivity. In this process, both the authors’ and reviewers’ identities are kept anonymous. Each manuscript is reviewed by at least two independent experts who assess the work for originality, and clarity.</p>
                            </div>
                            <div className="lg:block hidden">
                                <VscOpenPreview  className="text-[#FF0B55] text-[70px] text-end" />
                            </div>
                        </div>
                        <div className="absolute left-0 top-0  flex justify-center items-center bg-[#FF0B55]  px-3 py-3 text-3xl rounded-br-full text-white font-semibold ">02</div>
                    </div>
                </div>

            </div>

        </>
    )
}
