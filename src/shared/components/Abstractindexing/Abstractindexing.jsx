import React from 'react'
import check from '/assets/images/check.png';
import { AiOutlineGlobal } from 'react-icons/ai';
import { FiUserCheck } from 'react-icons/fi';


export default function Abstractindexing() {

    return (
        <>
            {/*Abstracting and Indexing: */}
            <div className=" mx-auto bg-[#FF0B55] ">
                <div className="bg-white rounded-tr-[110px] rounded-bl-[110px] px-10 py-10 border-2 border-[#FF0B55] ">
                    <div className="flex flex-col gap-4 ">
                        <p className='text-[#FF0B55] font-medium border-2 rounded-full  p-1 max-w-40 text-center'>Journal Visibility</p>
                        <h2 className="text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl">
                            Abstracting & Indexing
                        </h2>
                        <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify  ">
                        The International Journal of Cognitive and Behavioral Sciences  is committed to broad dissemination and accessibility of published research. To enhance visibility and academic reach, the journal is in the process of being indexed in renowned abstracting and indexing databases. This ensures that published articles are discoverable by researchers, institutions, and professionals worldwide. Inclusion in these platforms also supports the credibility and scholarly impact of the work published in IJCBS.
                        </p>
                    </div>

                </div>
            </div>

            {/*Featured Topics*/}
            <h2 className="mt-8 text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl mb-2">Database Coverage</h2>
            <div className="flex flex-col gap-5">
                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                IJCBS strives to be indexed in a wide range of reputable databases and indexing platforms to ensure broad visibility and accessibility of its published articles. These platforms increase the discoverability of the journal's content and provide greater academic exposure to authors.
                </p>
                <div className="flex flex-col gap-4">
                    {[
                        "Manuscripts are indexed in global databases.",
                        "Coverage includes both general and subject-specific databases.",
                        "Indexed content is easily searchable by researchers.",
                        "Inclusion in major academic platforms boosts citation potential.",
                    ].map((point, index) => (
                        <div key={index} className="flex gap-1">
                            <img src={check} alt="poinicon" className="w-6 h-6" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">{point}</p>
                        </div>
                    ))}
                </div>
            </div>

            <h2 className="mt-8 text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl mb-2">Visibility and Impact</h2>
            <div className="flex flex-col gap-5">
                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                By being indexed in major academic databases, IJCBS ensures that research published in the journal reaches a global audience, thus enhancing the academic impact of each article. This increased visibility helps to establish the journal's position as a credible source of scholarly work.
                </p>
                <div className="flex flex-col gap-3">
                    {[
                        "Indexed articles are easily found by researchers worldwide.",
                        "Indexing boosts the journal’s reputation in the scientific community.",
                        "Research published in IJCBS has broader academic outreach.",
                        "Enhanced discoverability helps the journal stay relevant in its field.",
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
                            <div className="lg:block hidden">  <AiOutlineGlobal  className="text-[#FF0B55] text-[70px]" /></div>
                            <div className="flex flex-col gap-2 ">
                                <h2 className="text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl ">Global Reach</h2>
                                <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">The inclusion of IJCBS in international abstracting and indexing services allows it to connect with a global network of researchers, educators, and practitioners. This global reach supports the exchange of ideas and research across borders.</p>
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
                                <h2 className="text-[#FF0B55] namdhinggo-bold lg:text-4xl text-2xl  text-end">Author Benefits</h2>
                                <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Being indexed in high-profile databases not only benefits the journal but also provides authors with greater exposure for their work. Indexed articles are more likely to be cited, which increases the overall impact and recognition of the author's research.</p>
                            </div>
                            <div className="lg:block hidden">
                                <FiUserCheck  className="text-[#FF0B55] text-[70px] text-end" />
                            </div>
                        </div>
                        <div className="absolute left-0 top-0  flex justify-center items-center bg-[#FF0B55]  px-3 py-3 text-3xl rounded-br-full text-white font-semibold ">02</div>
                    </div>
                </div>

            </div>
        </>
    )
}
