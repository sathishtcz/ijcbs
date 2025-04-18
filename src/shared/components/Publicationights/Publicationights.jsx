import React from 'react'
import check from '/assets/images/check.png';



export default function Publicationights() {

    return (
        <>
            {/*Publication Rights Policy: */}
            <div className=" mx-auto bg-[#FF0B55] ">
                <div className="bg-white rounded-tr-[110px] rounded-bl-[110px] px-10 py-10 border-2 border-[#FF0B55] ">
                    <div className="flex flex-col gap-4 ">
                        <p className='text-[#FF0B55] font-medium border-2 rounded-full  p-1 max-w-40 text-center'>Publication Ethics</p>
                        <h2 className="text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl">
                        Publication Rights
                        </h2>
                        <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify  ">
                        Authors who publish with the International Journal of Cognitive and Behavioral Sciences retain full copyright of their work and grant the journal a non-exclusive right to publish, distribute, and archive the final version of the manuscript. 
                        </p>
                    </div>

                </div>
            </div>

            {/*Featured Topics*/}
            <h2 className="mt-8 text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl mb-2">Copyright Retention</h2>
            <div className="flex flex-col gap-5">
                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                At IJCBS, authors retain full copyright of their published work. This empowers them to reuse, reproduce, or share their articles in any format with proper citation to the journal.
                </p>
                <div className="flex flex-col gap-4">
                    {[
                        "Authors keep legal ownership of their work.",
                        "Can share their articles on personal or institutional websites.",
                        "Reuse is allowed for academic purposes with attribution.",
                        "Enables adaptation into books or other works.",
                    ].map((point, index) => (
                        <div key={index} className="flex gap-1">
                            <img src={check} alt="poinicon" className="w-6 h-6" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">{point}</p>
                        </div>
                    ))}
                </div>
            </div>

            <h2 className="mt-8 text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl mb-2">Publishing Rights</h2>
            <div className="flex flex-col gap-5">
                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                By submitting to IJCBS, authors grant the journal non-exclusive rights to publish and distribute their work while still retaining the freedom to reuse it in other venues.
                </p>
                <div className="flex flex-col gap-3">
                    {[
                        "Journal receives rights to publish and disseminate the work.",
                        "Authors can submit the same content elsewhere with acknowledgment.",
                        "Encourages broader research visibility.",
                        "No transfer of exclusive rights to the journal.",
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
