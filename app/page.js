import Image from "next/image";

export default function Home() {
    return (
        <div className="text-white">
            <div className="md:h-[90vh] h-[80vh] md:w-[60vw] w-[80vw] mx-auto flex flex-col justify-center items-center gap-10">
                <p className="md:text-[50px] text-[40px] font-[900] text-center">
                    Empowering Ideas, Fueling Innovation: Fund Dreams, Build
                    Futures!
                </p>

                <div className="flex flex-col items-center gap-5">
                    <p className="text-[16px] text-center">
                        "Empowering ideas by providing the funding they need to
                        grow, innovate, and shape the future."
                    </p>
                    <button className="px-5 py-3 flex items-center gap-2 border border-[#ffb703]  text-[#ffb703]  rounded transition-all duration-200 hover:bg-[#ffb703]  hover:text-[#001219] hover:scale-110">
                        <p>Start Now</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            width="26"
                            height="26">
                            <path d="M9.293 4.293a1 1 0 011.414 0L16.414 10H4a1 1 0 100 2h12.414l-5.707 5.707a1 1 0 001.414 1.414l7-7a1 1 0 000-1.414l-7-7a1 1 0 00-1.414 0z" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="md:h-[100vh] h-[130vh] md:w-[60vw] w-[90vw] mx-auto flex flex-col items-center gap-20">
                <div className="flex flex-col items-center">
                    <p className="md:text-[40px] text-[32px] text-center">Why Join the Community?</p>
                    <div className="w-[80px] h-[1px] bg-[#ffb703]"></div>
                </div>

                <div className="w-full flex md:flex-row flex-col justify-between md:gap-[60px] gap-16">
                    <div className="flex justify-between flex-col gap-16">
                        <div className="flex flex-col items-center gap-5">
                            <Image
                                src="/strategic-consulting.gif"
                                width={100}
                                height={100}
                                alt="Fund"
                                className="rounded-full"
                                unoptimized
                            />
                            <div className="flex flex-col justify-center items-center gap-1">
                                <p className="text-[18px] font-[600]">
                                    Fans Help
                                </p>
                                <p className="text-[14px]">
                                    Get ideas and support from your fans.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-5">
                            <Image
                                src="/piggy-bank.gif"
                                width={100}
                                height={100}
                                alt="Fund"
                                className="rounded-full"
                                unoptimized
                            />
                            <div className="flex flex-col justify-center items-center gap-1">
                                <p className="text-[18px] font-[600]">
                                    Get Funding
                                </p>
                                <p className="text-[14px]">
                                    Showcase projects to attract funding.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between md:gap-20 gap-16">
                        <div className="flex flex-col items-center gap-5">
                            <Image
                                src="/teamwork.gif"
                                width={100}
                                height={100}
                                alt="Fund"
                                className="rounded-full"
                                unoptimized
                            />
                            <div className="flex flex-col justify-center items-center gap-1">
                                <p className="text-[18px] font-[600]">
                                    Collaboration
                                </p>
                                <p className="text-[14px]">
                                    Work with others to innovate and create.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-5">
                            <Image
                                src="/trophy.gif"
                                width={100}
                                height={100}
                                alt="Fund"
                                className="rounded-full"
                                unoptimized
                            />
                            <div className="flex flex-col justify-center items-center gap-1">
                                <p className="text-[18px] font-[600]">
                                    Grow Together
                                </p>
                                <p className="text-[14px]">
                                    Support each other’s growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:h-[80vh] h-[130vh] w-[80vw] mx-auto flex flex-col items-center gap-20">
                <div className="flex flex-col items-center">
                    <p className="md:text-[40px] text-[32px] text-center">Success Stories</p>
                    <div className="w-[80px] h-[1px] bg-[#ffb703]"></div>
                </div>

                <div className="flex justify-between items-center md:flex-row flex-col gap-20">
                    <div className="md:w-[30%] w-[90%] text-center flex flex-col items-center gap-5">
                        <div className="flex flex-col items-center gap-5">
                            <div className="flex">
                                <Image
                                    src="/star.png"
                                    width={35}
                                    height={35}
                                    alt="Fund"
                                    className="rounded-full"
                                />
                                <Image
                                    src="/star.png"
                                    width={35}
                                    height={35}
                                    alt="Fund"
                                    className="rounded-full"
                                />
                                <Image
                                    src="/star.png"
                                    width={35}
                                    height={35}
                                    alt="Fund"
                                    className="rounded-full"
                                />
                                <Image
                                    src="/star.png"
                                    width={35}
                                    height={35}
                                    alt="Fund"
                                    className="rounded-full"
                                />
                                <Image
                                    src="/star.png"
                                    width={35}
                                    height={35}
                                    alt="Fund"
                                    className="rounded-full"
                                />
                            </div>
                            <div className="w-[80px] h-[2px] bg-[#ffb7033d]"></div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <p className="text-[20px] font-[600]">
                                From Hobbyist to Full-Time Creator
                            </p>
                            <p>
                                Mark, a digital artist, shared his portfolio
                                using our platform and gained a massive
                                following. Within six months, he secured a
                                steady stream of commissions and transitioned
                                into a full-time creative career.
                            </p>
                        </div>
                    </div>
                    <div className="md:w-[30%] w-[90%] text-center flex flex-col items-center gap-5">
                        <div className="flex flex-col items-center gap-5">
                            <div className="flex">
                                <Image
                                    src="/star.png"
                                    width={35}
                                    height={35}
                                    alt="Fund"
                                    className="rounded-full"
                                />
                                <Image
                                    src="/star.png"
                                    width={35}
                                    height={35}
                                    alt="Fund"
                                    className="rounded-full"
                                />
                                <Image
                                    src="/star.png"
                                    width={35}
                                    height={35}
                                    alt="Fund"
                                    className="rounded-full"
                                />
                                <Image
                                    src="/star.png"
                                    width={35}
                                    height={35}
                                    alt="Fund"
                                    className="rounded-full"
                                />
                                <Image
                                    src="/star.png"
                                    width={35}
                                    height={35}
                                    alt="Fund"
                                    className="rounded-full"
                                />
                            </div>
                            <div className="w-[80px] h-[2px] bg-[#ffb7033d]"></div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <p className="text-[20px] font-[600]">
                                Musician Crowdfunds Album Release
                            </p>
                            <p>
                                Liam, an indie musician, shared his fundraising
                                campaign on the platform. With help from fans,
                                he raised $15,000 to produce and release his
                                debut album, which has now crossed 1 million
                                streams!
                            </p>
                        </div>
                    </div>
                    <div className="md:w-[30%] w-[90%] text-center flex flex-col items-center gap-5">
                        <div className="flex flex-col items-center gap-5">
                            <div className="flex">
                                <Image
                                    src="/star.png"
                                    width={35}
                                    height={35}
                                    alt="Fund"
                                    className="rounded-full"
                                />
                                <Image
                                    src="/star.png"
                                    width={35}
                                    height={35}
                                    alt="Fund"
                                    className="rounded-full"
                                />
                                <Image
                                    src="/star.png"
                                    width={35}
                                    height={35}
                                    alt="Fund"
                                    className="rounded-full"
                                />
                                <Image
                                    src="/star.png"
                                    width={35}
                                    height={35}
                                    alt="Fund"
                                    className="rounded-full"
                                />
                                <Image
                                    src="/star.png"
                                    width={35}
                                    height={35}
                                    alt="Fund"
                                    className="rounded-full"
                                />
                            </div>
                            <div className="w-[80px] h-[2px] bg-[#ffb7033d]"></div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <p className="text-[20px] font-[600]">
                                Nonprofit Reaches New Heights
                            </p>
                            <p>
                                A small nonprofit focused on mental health used
                                our platform to centralize their resources and
                                fundraising links. They not only doubled their
                                donations but also partnered with mental health
                                advocates worldwide.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:h-[80vh] h-[90vh] md:w-[60vw] w-[90vw] mx-auto flex flex-col items-center gap-20">
                <div className="flex flex-col items-center">
                    <p className="text-[40px]">Contact Us</p>
                    <div className="w-[80px] h-[1px] bg-[#ffb703]"></div>
                </div>

                <div className="flex md:gap-10 gap-16 md:flex-row flex-col">
                    <div className="w-[100%] flex gap-10">
                        <div className="flex flex-col gap-5">
                            <p className="text-[36px]">Get in Touch</p>
                            <div className="flex flex-col gap-3">
                                <p>
                                    Email, call, or complete the form to learn
                                    how FundVault can solve your messaging problem.
                                </p>
                                <div>
                                    <p>info@fundvault.io</p>
                                    <p>321-221-231</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[100%] flex flex-col gap-5">
                        <p className="text-[18px]">
                            We’d Love to Hear From You!
                        </p>
                        <form
                            action=""
                            className="flex flex-col gap-5 items-center">
                            <div className="w-full flex justify-between">
                                <input
                                    type="text"
                                    placeholder="First name"
                                    required
                                    className="w-[48%] px-3 py-2 rounded-sm text-black"
                                />
                                <input
                                    type="text"
                                    placeholder="Last name"
                                    required
                                    className="w-[48%] px-3 py-2 rounded-sm text-black"
                                />
                            </div>
                            <input
                                type="email"
                                name=""
                                id=""
                                placeholder="Your email"
                                required
                                className="w-full px-3 py-2 rounded-sm text-black"
                            />
                            <textarea
                                name=""
                                id=""
                                placeholder="How can we help?"
                                rows={5}
                                required
                                className="w-full px-3 py-2 rounded-sm text-black"
                            />

                            <button className="px-5 py-3 flex items-center gap-2 border border-[#ffb703]  text-[#ffb703]  rounded transition-all duration-200 hover:bg-[#ffb703]  hover:text-[#001219] hover:scale-110">
                                <p>Submit</p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    width="26"
                                    height="26">
                                    <path d="M9.293 4.293a1 1 0 011.414 0L16.414 10H4a1 1 0 100 2h12.414l-5.707 5.707a1 1 0 001.414 1.414l7-7a1 1 0 000-1.414l-7-7a1 1 0 00-1.414 0z" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
