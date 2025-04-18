import React from 'react'
import check from '/assets/images/check.png';


export default function Malpractice() {


    return (
        <>
            {/*Malpractice Policy: */}

            <div className=" mx-auto bg-[#FF0B55] ">
                <div className="bg-white rounded-tr-[110px] rounded-bl-[110px] px-10 py-10 border-2 border-[#FF0B55] ">
                    <div className="flex flex-col gap-4 ">
                        <p className='text-[#FF0B55] font-medium border-2 rounded-full  p-1 max-w-45 text-center'>Publication Integrity</p>
                        <h2 className="text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl">
                        Malpractice Policy
                        </h2>
                        <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify  ">
                        The International Journal of Cognitive and Behavioral Sciences strictly adheres to ethical publishing practices and maintains a zero-tolerance stance toward research and publication malpractice. Any form of unethical behavior, including data fabrication, falsification, plagiarism, duplicate submission, and inappropriate authorship credit, is considered serious misconduct.
                        </p>
                    </div>

                </div>
            </div>

            {/*Featured Topics*/}
            <h2 className="mt-8 text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl mb-2">Ethical Commitment</h2>
            <div className="flex flex-col gap-5">
                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                IJCBS is dedicated to promoting a culture of ethical research and responsible publication. We require all contributors—authors, editors, and reviewers—to uphold the highest standards of honesty, integrity, and professionalism.
                </p>
                <div className="flex flex-col gap-4">
                    {[
                        "Encourages a transparent and ethical research environment.",
                        "All parties must follow responsible research and publishing practices.",
                        "Misconduct undermines the credibility of science and the journal.",
                        "Ethical compliance is mandatory at all publication stages.",
                    ].map((point, index) => (
                        <div key={index} className="flex gap-1">
                            <img src={check} alt="poinicon" className="w-6 h-6" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">{point}</p>
                        </div>
                    ))}
                </div>
            </div>

            <h2 className="mt-8 text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl mb-2">Actions</h2>
            <div className="flex flex-col gap-5">
                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                If malpractice is detected, IJCBS takes immediate corrective action. Depending on the severity, measures may include rejection, retraction, author blacklisting, or notification to institutional authorities.
                </p>
                <div className="flex flex-col gap-3">
                    {[
                        "Manuscripts with confirmed malpractice are rejected or retracted.",
                        "Authors may be banned from future submissions.",
                        "Institutions may be informed of severe ethical violations.",
                        "Published articles found unethical post-publication will be withdrawn.",
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
