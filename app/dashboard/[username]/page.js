"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { fetchUser, fetchPayments, addPayment } from "@/actions/userActions";
import LoadingPage from "@/components/LoadingPage";
import PageNotFound from "@/components/PageNotFound";
import Footer from "@/components/Footer";
import { redirect } from "next/navigation";
// import payments from "razorpay/dist/types/payments";

const page = ({ params }) => {
    const { data: session, status, update } = useSession(); // Add `status` to track session loading state
    const [currUser, setCurrUser] = useState({});
    const [allPayments, setAllPayments] = useState([]);

    const [paymentForm, setPaymentForm] = useState({
        username: "",
        message: "",
        amount: "",
    });

    useEffect(() => {
        if (status === "authenticated" && session?.user?.username) {
            getData();
            getPaymentsData();
        }
    }, [session, status]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPaymentForm({
            ...paymentForm,
            [name]: value,
        });
    };

    const handlePredefinedAmount = (amount) => {
        setPaymentForm({
            ...paymentForm,
            amount: amount,
        });
    };

    const getData = () => {
        fetchUser(session?.user?.username)
            .then((currUserData) => {
                setCurrUser(currUserData);
            })
            .catch((error) => {
                console.error("Error fetching user data: ", error);
            });
    };

    const getPaymentsData = () => {
        fetchPayments(session?.user?.username)
            .then((payments) => {
                setAllPayments(payments);
            })
            .catch((error) => {
                console.error("Error fetching payment data: ", error);
            });
    };

    const paymentSubmitHandler = async (e) => {
        e.preventDefault();

        addPayment(session?.user?.username, paymentForm)
            .then((res) => {
                console.log("RESULT: ", res);
            })
            .catch((error) => {
                console.error("Error fetching payment data: ", error);
            });
    };

    if (status === "loading") {
        return <LoadingPage />;
    }

    if (!session) {
        return redirect('/login');
    }

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
                    <p className="text-[30px] font-bold">{currUser.name}</p>
                    <p className="text-[18px]">{currUser.description}</p>
                    <div className="flex mt-2 text-[gray] gap-16">
                        <p>Total Fundings: {allPayments.length}</p>
                        <p>
                            Total Funds: $
                            {allPayments.reduce(
                                (acc, curr) => acc + curr.amount,
                                0
                            )}
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto flex justify-between items-center my-10">
                <div className="w-[48%] h-[360px] p-9 flex flex-col gap-5 rounded-lg overflow-hidden">
                    <p className="text-[28px]">Recent Contributions!</p>
                    <div className="flex flex-col gap-[14px]">
                        {allPayments.map((payment, idx) => {
                            return (
                                <div
                                    key={idx}
                                    className="flex items-center gap-2">
                                    <Image
                                        src="/panda.png"
                                        width={30}
                                        height={30}
                                        alt="pandaImage"
                                    />
                                    <p>
                                        {payment.name} donated ${payment.amount}
                                        : {payment.message}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="w-1 h-40 bg-[#ffb703]"></div>

                <div className="w-[48%] h-[360px] p-9 flex flex-col gap-5 rounded-lg">
                    <p className="text-[28px]">Help a Creator!</p>
                    <form action="">
                        <div className="flex flex-col gap-5">
                            <input
                                type="text"
                                placeholder="Enter Username"
                                className="text-[white] px-3 py-2 rounded-sm bg-[#212234] placeholder:text-[gray]"
                                name="username"
                                value={paymentForm.username} // Bind state to input
                                onChange={handleInputChange} // Update state on change
                            />
                            <input
                                type="text"
                                placeholder="Enter Message"
                                className="text-[white] px-3 py-2 rounded-sm bg-[#212234] placeholder:text-[gray]"
                                name="message"
                                value={paymentForm.message} // Bind state to input
                                onChange={handleInputChange} // Update state on change
                            />
                            <input
                                type="number"
                                placeholder="Enter Amount"
                                className="text-[white] px-3 py-2 rounded-sm bg-[#212234] placeholder:text-[gray]"
                                name="amount"
                                value={paymentForm.amount} // Bind state to input
                                onChange={handleInputChange} // Update state on change
                            />
                            <div className="flex justify-between items-center">
                                <div className="flex gap-4">
                                    <p
                                        className="px-3 py-2 rounded-sm text-gray-400 cursor-pointer"
                                        onClick={() =>
                                            handlePredefinedAmount(10)
                                        } // Set predefined amount
                                    >
                                        $10
                                    </p>
                                    <p
                                        className="px-3 py-2 rounded-sm text-gray-400 cursor-pointer"
                                        onClick={() =>
                                            handlePredefinedAmount(20)
                                        } // Set predefined amount
                                    >
                                        $20
                                    </p>
                                    <p
                                        className="px-3 py-2 rounded-sm text-gray-400 cursor-pointer"
                                        onClick={() =>
                                            handlePredefinedAmount(50)
                                        } // Set predefined amount
                                    >
                                        $50
                                    </p>
                                </div>
                                <button
                                    className="px-20 py-3 bg-blue-600 rounded-md"
                                    onClick={(e) => {
                                        paymentSubmitHandler(e);
                                    }}>
                                    Pay
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default page;
