import React from 'react'
import check from '/assets/images/check.png';
import { MdContentCopy, MdOutlinePublish } from "react-icons/md";



export default function Articleprocessing() {


    return (
        <>
            {/*Article Processing: */}
            <div className=" mx-auto bg-[#FF0B55] ">
                <div className="bg-white rounded-tr-[110px] rounded-bl-[110px] px-10 py-10 border-2 border-[#FF0B55] ">
                    <div className="flex flex-col gap-4 ">
                        <p className='text-[#FF0B55] font-medium border-2 rounded-full  p-1 max-w-45 text-center'>Publication Process</p>
                        <h2 className="text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl">
                            Article Publication Process
                        </h2>
                        <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify  ">
                        The International Journal of Cognitive and Behavioral Sciences is dedicated to maintaining an efficient and transparent article processing system. Upon submission, all manuscripts undergo a thorough editorial review to ensure they meet the journal’s standards. Accepted articles are processed swiftly, with necessary revisions, copyediting, and typesetting conducted to prepare them for publication.
                        </p>
                    </div>

                </div>
            </div>

            {/*Featured Topics*/}
            <h2 className="mt-8 text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl mb-2">Initial Review</h2>
            <div className="flex flex-col gap-5">
                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                Once a manuscript is submitted, it undergoes an initial review by the editorial team to ensure it fits within the scope of the journal and meets our basic submission guidelines. Manuscripts that meet these criteria are forwarded for peer review.
                </p>
                <div className="flex flex-col gap-4">
                    {[
                        "Manuscripts must adhere to submission guidelines.",
                        "The initial review determines manuscript suitability for the journal.",
                        "Authors are notified if their paper is accepted for peer review.",
                        "Papers that do not meet criteria may be rejected early.",
                    ].map((point, index) => (
                        <div key={index} className="flex gap-1">
                            <img src={check} alt="poinicon" className="w-6 h-6" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">{point}</p>
                        </div>
                    ))}
                </div>
            </div>

            <h2 className="mt-8 text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl mb-2">Final Decision</h2>
            <div className="flex flex-col gap-5">
                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                After peer review, authors may be asked to revise their manuscript based on the reviewers’ comments. The revised manuscript is re-evaluated to determine if it meets the journal's quality standards for publication.
                </p>
                <div className="flex flex-col gap-3">
                    {[
                        "Authors must address reviewer comments and make necessary revisions.",
                        "The revised manuscript is resubmitted for another round of review, if required.",
                        "The editor makes a final decision to accept, reject, or request further revisions.",
                        "Clear communication is maintained throughout the revision process.",
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
                            <div className="lg:block hidden">  <MdContentCopy  className="text-[#FF0B55] text-[70px]" /></div>
                            <div className="flex flex-col gap-2 ">
                                <h2 className="text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl ">Copyediting </h2>
                                <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Once a manuscript is accepted, it undergoes professional copyediting to ensure clarity, consistency, and grammatical accuracy. The article is then typeset to prepare it for online publication and inclusion in the final journal issue.</p>
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
                                <h2 className="text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl  text-end">Publication </h2>
                                <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Once the final manuscript is approved, it is published online ahead of print, ensuring rapid dissemination of research. The article is also indexed and made available in various databases to maximize its reach and academic impact.</p>
                            </div>
                            <div className="lg:block hidden">
                                <MdOutlinePublish  className="text-[#FF0B55] text-[70px] text-end" />
                            </div>
                        </div>
                        <div className="absolute left-0 top-0  flex justify-center items-center bg-[#FF0B55]  px-3 py-3 text-3xl rounded-br-full text-white font-semibold ">02</div>
                    </div>
                </div>

            </div>
        </>
    )
}
