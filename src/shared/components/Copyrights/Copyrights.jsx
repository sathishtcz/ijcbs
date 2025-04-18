import React from 'react'
import check from '/assets/images/check.png';
import { FaFileSignature, FaRegCopyright } from 'react-icons/fa';

export default function Copyrights() {

    return (
        <>
            {/*Copyright Declaration: */}
            <div className=" mx-auto bg-[#FF0B55] ">
                <div className="bg-white rounded-tr-[110px] rounded-bl-[110px] px-10 py-10 border-2 border-[#FF0B55] ">
                    <div className="flex flex-col gap-4 ">
                        <p className='text-[#FF0B55] font-medium border-2 rounded-full  p-1 max-w-40 text-center'>Copyright Policy</p>
                        <h2 className="text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl">
                        Copyright and Licensing Information
                        </h2>
                        <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify  ">
                        All authors must agree to transfer the copyright of their submitted manuscript to the International Journal of Cognitive and Behavioral Sciences upon acceptance for publication. This transfer allows IJCBS the exclusive right to reproduce, distribute, and archive the work in all formats and media.
                        </p>
                    </div>

                </div>
            </div>

            {/*Featured Topics*/}
            <h2 className="mt-8 text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl mb-2">Ownership </h2>
            <div className="flex flex-col gap-5">
                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                Upon acceptance, authors agree to transfer copyright of their article to the International Journal of Cognitive and Behavioral Sciences. This enables the journal to distribute, reproduce, and archive the work in any form or medium.
                </p>
                <div className="flex flex-col gap-4">
                    {[
                        "Authors must sign a copyright transfer agreement.",
                        "Protects the work from unauthorized commercial use.",
                        "Enables global access and dissemination of the article.",
                        "The journal holds exclusive publishing and distribution rights.",
                    ].map((point, index) => (
                        <div key={index} className="flex gap-1">
                            <img src={check} alt="poinicon" className="w-6 h-6" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">{point}</p>
                        </div>
                    ))}
                </div>
            </div>

            <h2 className="mt-8 text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl mb-2">Author Rights</h2>
            <div className="flex flex-col gap-5">
                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                While the journal holds copyright, authors retain important rights to use their work for educational, academic, and non-commercial purposes, such as in thesis work, conference presentations, or institutional repositories.
                </p>
                <div className="flex flex-col gap-3">
                    {[
                        "Authors can reuse content in theses or future works.",
                        "Sharing with colleagues or for classroom teaching is allowed.",
                        "Pre- and post-print archiving is permitted with proper citation.",
                        "Reuse must not conflict with the journal’s licensing terms.",
                    ].map((point, index) => (
                        <div key={index} className="flex gap-1">
                            <img src={check} alt="poinicon" className="w-6 h-6" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">{point}</p>
                        </div>
                    ))}
                </div>
            </div>


            <h2 className="mt-8 text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl mb-2">Originality </h2>
            <div className="flex flex-col gap-5">
                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                Authors must confirm that the manuscript is original, unpublished, and not under consideration elsewhere. Any third-party material used must have the necessary permissions and be clearly credited.
                </p>
                <div className="flex flex-col gap-3">
                    {[
                        "Manuscripts must be original and unpublished.",
                        "No simultaneous submission to other journals.",
                        "Proper credit and permission for third-party materials required.",
                        "Authors are responsible for copyright compliance.",
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
                            <div className="lg:block hidden">  <FaRegCopyright  className="text-[#FF0B55] text-[70px]" /></div>
                            <div className="flex flex-col gap-2 ">
                                <h2 className="text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl ">Declaration </h2>
                                <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">I/We, the author(s) of the research paper/article entitled "_____________________", hereby grant permission to publish the above-mentioned work in the International Journal of Cognitive and Behavioral Sciences. By submitting this declaration, the author(s) affirm that they have read and agreed to the terms and conditions of publication as outlined by IJCBS, including the transfer of copyright, assurance of originality, and compliance with ethical standards.</p>
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
                                <h2 className="text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl  text-end">Agreement </h2>
                                <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">This agreement defines the terms and conditions for publishing in the International Journal of Cognitive and Behavioral Sciences. It ensures clarity in the publication process while protecting the rights of the author(s) and the journal. The author(s) retain copyright ownership of their work but grant IJCBS the rights to publish, distribute, and archive the article in all forms and media.</p>
                            </div>
                            <div className="lg:block hidden">
                                <FaFileSignature  className="text-[#FF0B55] text-[70px] text-end" />
                            </div>
                        </div>
                        <div className="absolute left-0 top-0  flex justify-center items-center bg-[#FF0B55]  px-3 py-3 text-3xl rounded-br-full text-white font-semibold ">02</div>
                    </div>
                </div>

            </div>

        </>
    )
}
