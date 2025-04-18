import React from 'react'
import check from '/assets/images/check.png';


export default function Correction() {


    return (
        <>
            {/*correction Policy: */}
            <div className=" mx-auto bg-[#FF0B55] ">
                <div className="bg-white rounded-tr-[110px] rounded-bl-[110px] px-10 py-10 border-2 border-[#FF0B55] ">
                    <div className="flex flex-col gap-4 ">
                        <p className='text-[#FF0B55] font-medium border-2 rounded-full  p-1 max-w-45 text-center'>Publication Integrity</p>
                        <h2 className="text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl">
                        Correction Policy
                        </h2>
                        <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify  ">
                        The International Journal of Cognitive and Behavioral Sciences is committed to maintaining the accuracy and integrity of the scholarly record. If a significant error or omission is discovered in a published article—whether by the authors, editors, or readers—IJCBS will issue a formal correction. Corrections are published promptly and clearly linked to the original article to ensure transparency.
                        </p>
                    </div>

                </div>
            </div>

            {/*Featured Topics*/}
            <h2 className="mt-8 text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl mb-2">Purpose of Corrections</h2>
            <div className="flex flex-col gap-5">
                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                The purpose of our correction policy is to ensure the accuracy and credibility of the scientific record. Corrections are made to address honest mistakes or inconsistencies that may affect the understanding or integrity of the published work.
                </p>
                <div className="flex flex-col gap-4">
                    {[
                        "Maintains trust in the scholarly publishing process.",
                        "Clarifies information that may lead to misinterpretation.",
                        "Corrects inaccuracies while preserving the scientific record.",
                        "Acknowledges human error in a transparent manner.",
                    ].map((point, index) => (
                        <div key={index} className="flex gap-1">
                            <img src={check} alt="poinicon" className="w-6 h-6" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">{point}</p>
                        </div>
                    ))}
                </div>
            </div>

            <h2 className="mt-8 text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl mb-2">Correction Process</h2>
            <div className="flex flex-col gap-5">
                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                Once a correction is deemed necessary, IJCBS ensures that it is published quickly and clearly. The correction notice is linked to the original article and includes the reason, nature, and date of the change.
                </p>
                <div className="flex flex-col gap-3">
                    {[
                        "A unique DOI is assigned to correction notices.",
                        "Corrections are listed in the journal's online archive.",
                        "Original articles remain accessible with a correction tag.",
                        "Changes are communicated to indexing platforms.",
                    ].map((point, index) => (
                        <div key={index} className="flex gap-1">
                            <img src={check} alt="poinicon" className="w-6 h-6" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">{point}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
