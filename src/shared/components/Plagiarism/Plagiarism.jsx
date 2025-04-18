import React from 'react'
import check from '/assets/images/check.png';

export default function Plagiarism() {


    return (
        <>
            {/*Plagiarism Policy: */}
            <div className=" mx-auto bg-[#FF0B55] ">
                <div className="bg-white rounded-tr-[110px] rounded-bl-[110px] px-10 py-10 border-2 border-[#FF0B55] ">
                    <div className="flex flex-col gap-4 ">
                        <p className='text-[#FF0B55] font-medium border-2 rounded-full  p-1 max-w-45 text-center'>Academic Integrity</p>
                        <h2 className="text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl">
                            Plagiarism Policy
                        </h2>
                        <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify  ">
                        The International Journal of Cognitive and Behavioral Sciences is committed to upholding the highest standards of academic integrity. We do not tolerate plagiarism in any form. All submitted manuscripts undergo thorough plagiarism checks using industry-standard tools. Any work found to contain plagiarized content, including improper citations or unoriginal research, will be rejected immediately.
                        </p>
                    </div>

                </div>
            </div>

            {/*Featured Topics*/}
            <h2 className="mt-8 text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl mb-2">Academic Integrity</h2>
            <div className="flex flex-col gap-5">
                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                At IJCBS, we are committed to maintaining the highest standards of academic integrity and ethical research practices. We take plagiarism seriously and enforce strict policies to ensure that all published work is original and properly credited.
                </p>
                <div className="flex flex-col gap-4">
                    {[
                        "Plagiarism is strictly prohibited and will result in manuscript rejection.",
                        "Authors must ensure their work is original and properly referenced.",
                        "Manuscripts undergo plagiarism detection using industry-standard tools.",
                        "IJCBS promotes ethical research practices and academic honesty.",
                    ].map((point, index) => (
                        <div key={index} className="flex gap-1">
                            <img src={check} alt="poinicon" className="w-6 h-6" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">{point}</p>
                        </div>
                    ))}
                </div>
            </div>

            <h2 className="mt-8 text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl mb-2">Types of Plagiarism</h2>
            <div className="flex flex-col gap-5">
                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                IJCBS recognizes several forms of plagiarism, including direct copying, self-plagiarism, and improper paraphrasing. We encourage authors to familiarize themselves with these types to avoid unintentional violations.
                </p>
                <div className="flex flex-col gap-3">
                    {[
                        "Direct copying of text from other sources without proper citation is prohibited.",
                        "Self-plagiarism, or reusing previously published work without acknowledgment, is not allowed.",
                        "Paraphrasing without proper attribution is also considered plagiarism.",
                        "Plagiarism extends to data and ideas, not just text.",
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
