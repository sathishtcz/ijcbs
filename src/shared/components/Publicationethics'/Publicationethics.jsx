import React, { useEffect, useState } from 'react'
import check from '/assets/images/check.png';
import { MdOutlineRateReview } from "react-icons/md";
import { BsJournal } from 'react-icons/bs';

export default function Publicationethics() {

    return (

        <>
            {/*Publication Ethics: */}
            <div className=" mx-auto bg-[#FF0B55] ">
                <div className="bg-white rounded-tr-[110px] rounded-bl-[110px] px-10 py-10 border-2 border-[#FF0B55] ">
                    <div className="flex flex-col gap-4 ">
                        <p className='text-[#FF0B55] font-medium border-2 rounded-full  p-1 max-w-50 text-center'>Publication Standards</p>
                        <h2 className="text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl">
                            Publication Ethics
                        </h2>
                        <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify  ">
                        The International Journal of Cognitive and Behavioral Sciences is committed to upholding the highest standards of ethical publishing. We expect all parties involved in the publication process—authors, reviewers, editors, and publishers—to adhere strictly to ethical practices. Authors must ensure their work is original, properly cited, and free from plagiarism or data fabrication.
                        </p>
                    </div>

                </div>
            </div>

            {/*Featured Topics*/}
            <h2 className="mt-8 text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl mb-2">Author Responsibilities</h2>
            <div className="flex flex-col gap-5">
                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                Authors submitting to IJCBS are expected to maintain the highest standards of research integrity. Their work must be original, ethically conducted, and properly cited. Misrepresentation or plagiarism is strictly prohibited.
                </p>
                <div className="flex flex-col gap-4">
                    {[
                        "Submit only original, unpublished work.",
                        "Properly cite all sources and references.",
                        "Declare conflicts of interest transparently.",
                        "Avoid plagiarism, data fabrication, or manipulation.",
                    ].map((point, index) => (
                        <div key={index} className="flex gap-1">
                            <img src={check} alt="poinicon" className="w-6 h-6" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">{point}</p>
                        </div>
                    ))}
                </div>
            </div>

            <h2 className="mt-8 text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl mb-2">Reviewer Ethics</h2>
            <div className="flex flex-col gap-5">
                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                Peer reviewers play a crucial role in maintaining the journal’s quality. They must evaluate manuscripts fairly, provide constructive feedback, and respect confidentiality throughout the process.
                </p>
                <div className="flex flex-col gap-3">
                    {[
                        "Provide objective, unbiased evaluations.",
                        "Maintain confidentiality of manuscripts.",
                        "Disclose any potential conflicts of interest.",
                        "Avoid personal criticism or unprofessional remarks.",
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
                            <div className="lg:block hidden">  <BsJournal  className="text-[#FF0B55] text-[70px]" /></div>
                            <div className="flex flex-col gap-2 ">
                                <h2 className="text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl ">Integrity</h2>
                                <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Editors at IJCBS ensure an impartial and transparent editorial process. They are responsible for upholding ethical publishing practices and making fair, evidence-based decisions on submissions.</p>
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
                                <h2 className="text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl  text-end">Ethical Oversight</h2>
                                <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">The journal maintains ongoing ethical oversight throughout its publication cycle. This includes ensuring informed consent, ethical approvals, and responsible data management across all submissions.</p>
                            </div>
                            <div className="lg:block hidden">
                                <MdOutlineRateReview className="text-[#FF0B55] text-[70px] text-end" />
                            </div>
                        </div>
                        <div className="absolute left-0 top-0  flex justify-center items-center bg-[#FF0B55]  px-3 py-3 text-3xl rounded-br-full text-white font-semibold ">02</div>
                    </div>
                </div>

            </div>
        </>
    )
}
