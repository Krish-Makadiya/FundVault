import Image from "next/image";
import React from "react";

const page = async({ params }) => {
    const {username} = await params;

    return (
        <div className="w-screen text-white">
            <div>
                <div className="relative">
                    <Image
                        src="/coverImage.jpg"
                        width={2000}
                        height={2000}
                        className="w-screen h-[350px] object-cover"
                        alt="Cover Image"
                    />
                    <div className="absolute right-[44vw] bottom-[-120px]">
                        <Image
                            src="/profileImage.jpg"
                            width={200}
                            height={200}
                            className="object-cover rounded-[20px]"
                            alt="Cover Image"
                        />
                    </div>
                </div>
                <div className="w-[80vw] mx-auto flex flex-col items-center gap-2 mt-36">
                    <p className="text-[30px] font-bold">{username}</p>
                    <p className="text-[18px]">
                        Creating pixel-art game assets
                    </p>
                    <div className="flex mt-2 text-[gray] gap-16">
                        <p>200 funds</p>
                        <p>$1,021</p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto flex justify-between items-center my-10">
                <div className="w-[48%] h-[360px] p-9 flex flex-col gap-5 rounded-lg overflow-hidden">
                    <p className="text-[28px]">Recent Contributions!</p>
                    <div className="flex flex-col gap-[14px]">
                        <div className="flex items-center gap-2">
                            <Image src="/panda.png" width={30} height={30} alt="pandaImage"/>
                            <p>Alice contributed $30: Thanks for your work!!!</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image src="/panda.png" width={30} height={30} alt="pandaImage"/>
                            <p>Alice contributed $30: Thanks for your work!!!</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image src="/panda.png" width={30} height={30} alt="pandaImage"/>
                            <p>Alice contributed $30: Thanks for your work!!!</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image src="/panda.png" width={30} height={30} alt="pandaImage"/>
                            <p>Alice contributed $30: Thanks for your work!!!</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image src="/panda.png" width={30} height={30} alt="pandaImage"/>
                            <p>Alice contributed $30: Thanks for your work!!!</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image src="/panda.png" width={30} height={30} alt="pandaImage"/>
                            <p>Alice contributed $30: Thanks for your work!!!</p>
                        </div>
                    </div>
                </div>

                <div className="w-1 h-40 bg-[#ffb703]"></div>

                <div className="w-[48%] h-[360px] p-9 flex flex-col gap-5 rounded-lg">
                    <p className="text-[28px]">Help a Creator!</p>
                    <form action="">
                        <div className="flex flex-col gap-5">
                            <input
                                type="text"
                                placeholder="Enter Name"
                                className="text-[black] px-3 py-2 rounded-sm"
                            />
                            <input
                                type="text"
                                placeholder="Enter Message"
                                className="text-[black] px-3 py-2 rounded-sm"
                            />
                            <input
                                type="number"
                                placeholder="Enter Amount"
                                className="text-[black] px-3 py-2 rounded-sm"
                            />
                            <div className="flex justify-between items-center">
                                <div className="flex gap-4">
                                    <p className="px-3 py-2 rounded-sm text-gray-400 cursor-pointer">$10</p>
                                    <p className="px-3 py-2 rounded-sm text-gray-400 cursor-pointer">$20</p>
                                    <p className="px-3 py-2 rounded-sm text-gray-400 cursor-pointer">$50</p>
                                </div>
                                <button className="px-20 py-3 bg-blue-600 rounded-md">Pay</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default page;
