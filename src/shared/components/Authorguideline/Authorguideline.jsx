import React from 'react'
import check from '/assets/images/check.png';
import { PiTreeStructureLight } from 'react-icons/pi';
import { BsJournalMedical } from 'react-icons/bs';


export default function Authorguideline() {


    return (
        <>
            {/* welcome section */}

            <div className=" mx-auto bg-[#FF0B55] ">
                <div className="bg-white rounded-tr-[110px] rounded-bl-[110px] px-10 py-10 border-2 border-[#FF0B55] ">
                    <div className="flex flex-col gap-4 ">
                        <p className='text-[#FF0B55] font-medium border-2 rounded-full  p-1 max-w-40 text-center'>Author Guidelines</p>
                        <h2 className="text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl">
                        Publication Guidelines for Authors
                        </h2>
                        <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify  ">
                        The International Journal of Cognitive and Behavioral Sciences invites authors to submit original, unpublished research, reviews, and case studies related to cognitive and behavioral sciences. Submissions must be in English, formatted in Microsoft Word, and follow the APA 7th Edition citation style. Manuscripts should include a title, abstract (150-250 words), keywords, introduction, methods, results, discussion, and references. Figures and tables must be included at the end, properly numbered with captions.
                        </p>
                    </div>

                </div>
            </div>

            {/*Featured Topics*/}
            <h2 className="mt-8 text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl mb-2">Manuscript Preparation</h2>
            <div className="flex flex-col gap-5">
                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                Authors must ensure that their manuscripts are well-organized and formatted according to the journal's guidelines. Manuscripts should follow a clear structure to ensure easy navigation and readability. Proper formatting helps streamline the review and publication process.
                </p>
                <div className="flex flex-col gap-4">
                    {[
                        "Manuscripts must be in Microsoft Word format.",
                        "Use 12-point Times New Roman font and double spacing.",
                        "References must be formatted according to the APA 7th Edition style.",
                        "Ensure that figures and tables are placed at the end of the document.",
                    ].map((point, index) => (
                        <div key={index} className="flex gap-1">
                            <img src={check} alt="poinicon" className="w-6 h-6" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">{point}</p>
                        </div>
                    ))}
                </div>
            </div>

            <h2 className="mt-8 text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl mb-2">Figures and Tables</h2>
            <div className="flex flex-col gap-5">
                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                Figures and tables are crucial for illustrating key findings in research. IJCBS requires that all figures and tables be submitted with clear captions and properly formatted for ease of understanding. High-quality images are encouraged for better publication outcomes.
                </p>
                <div className="flex flex-col gap-3">
                    {[
                        "Refer to each figure and table in the main text.",
                        "Ensure high-resolution images for better clarity and readability.",
                        "Figures and tables should be placed at the end of the manuscript.",
                        "Each figure or table should have a concise caption describing its content.",
                    ].map((point, index) => (
                        <div key={index} className="flex gap-1">
                            <img src={check} alt="poinicon" className="w-6 h-6" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">{point}</p>
                        </div>
                    ))}
                </div>
            </div>


            <h2 className="mt-8 text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl mb-2">Submission Process</h2>
            <div className="flex flex-col gap-5">
                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                Authors should submit their manuscripts through the journal’s online submission system. The submission must be accompanied by a cover letter confirming the originality of the work, its non-submission elsewhere, and its adherence to the journal’s ethical standards.
                </p>
                <div className="flex flex-col gap-3">
                    {[
                        "A cover letter must be included with each submission.",
                        "The journal does not accept simultaneous submissions to other journals.",
                        "The cover letter should confirm the manuscript’s originality and ethical compliance.",
                        "Authors should ensure that the manuscript is complete and free of errors before submission.",
                    ].map((point, index) => (
                        <div key={index} className="flex gap-1">
                            <img src={check} alt="poinicon" className="w-6 h-6" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">{point}</p>
                        </div>
                    ))}
                </div>
            </div>


            <h2 className="mt-8 text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl mb-7">Manuscript Submission</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
                <div className="relative ">
                    <div className="absolute bg-[#FF0B55] w-30 h-[calc(100%+20px)] -top-[10px] -left-[10px]"></div>
                    <div className="bg-white border-2 border-[#FF0B55] relative h-full">
                        <div className="flex flex-row gap-3 items-center p-6">
                            <div className="lg:block hidden">  <PiTreeStructureLight  className="text-[#FF0B55] text-[70px]" /></div>
                            <div className="flex flex-col gap-2 ">
                                <h2 className="text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl ">Structure </h2>
                                <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Authors must adhere to the specified structure and formatting to ensure their manuscripts are clear, consistent, and suitable for review. The manuscript should be structured as follows: Title, Abstract (150-250 words), Keywords (4-6), Introduction, Methodology, Results, Discussion, Conclusion, and References.</p>
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
                                <h2 className="text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl  text-end">Standards </h2>
                                <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">It is essential that all submitted manuscripts comply with ethical standards in research. Studies involving human participants or animals must include a statement of ethical approval from the relevant board or committee. Informed consent must be obtained and clearly documented for human studies.</p>
                            </div>
                            <div className="lg:block hidden">
                                <BsJournalMedical  className="text-[#FF0B55] text-[70px] text-end" />
                            </div>
                        </div>
                        <div className="absolute left-0 top-0  flex justify-center items-center bg-[#FF0B55]  px-3 py-3 text-3xl rounded-br-full text-white font-semibold ">02</div>
                    </div>
                </div>

            </div>
        </>
    )
}
