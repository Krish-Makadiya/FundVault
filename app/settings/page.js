"use client";
import React, { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import LoadingPage from "@/components/LoadingPage";
import PageNotFound from "@/components/PageNotFound";
import { fetchUserFormData, updateUser } from "@/actions/userActions";

const Settings = () => {
    const { data: session, status } = useSession();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        username: "",
        description: "",
        razorpayId: "",
        razorpaySecret: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await fetchUserFormData(session.user.username);
    
                setFormData((prevData) => ({
                    ...prevData,
                    name: userData.name || "", 
                    email: userData.email || "",
                    username: userData.username || "",
                    description: userData.description || "",
                    razorpayId: userData.razorpayId || "",
                    razorpaySecret: userData.razorpaySecret || "",
                }));
            } catch (e) {
                console.log("ERROR: ", e);
            }
        };
    
        fetchData();
    }, [session]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        updateUser(formData)
            .then(async (result) => {

                const updatedSession = await signIn("github", {
                    redirect: "false", // Avoid full page reload
                    session: {
                        ...session,
                        user: { ...session.user, ...formData },
                    },
                });

                if (updatedSession?.error) {
                    console.error(
                        "Failed to update session: ",
                        updatedSession.error
                    );
                } else {
                    console.log("Session updated successfully!");
                }
            })
            .catch((e) => {
                console.log("ERROR: ", e);
            });
    };

    if (status === "loading") {
        return <LoadingPage />;
    }

    if (!session) {
        return <PageNotFound />;
    }

    return (
        <div className="h-[90vh] w-[40vw] mx-auto flex flex-col justify-center gap-8 text-white">
            <p className="text-[40px] text-center">Settings</p>
            <form
                className="w-full flex flex-col gap-8 items-center"
                onSubmit={handleSubmit}>
                <div className="w-full flex flex-col gap-6">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter name"
                        className="text-[white] px-3 py-3 rounded-sm bg-[#212234] placeholder:text-[gray]"
                    />
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                        className="text-[white] px-3 py-3 rounded-sm bg-[#212234] placeholder:text-[gray]"
                        disabled
                    />
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Enter username"
                        className="text-[white] px-3 py-3 rounded-sm bg-[#212234] placeholder:text-[gray]"
                        disabled
                    />
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Enter description"
                        className="text-[white] px-3 py-3 rounded-sm bg-[#212234] placeholder:text-[gray]"
                    />
                    <input
                        type="text"
                        name="razorpayId"
                        value={formData.razorpayId}
                        onChange={handleChange}
                        placeholder="Enter Razorpay ID"
                        className="text-[white] px-3 py-3 rounded-sm bg-[#212234] placeholder:text-[gray]"
                    />
                    <input
                        type="text"
                        name="razorpaySecret"
                        value={formData.razorpaySecret}
                        onChange={handleChange}
                        placeholder="Enter Razorpay Secret"
                        className="text-[white] px-3 py-3 rounded-sm bg-[#212234] placeholder:text-[gray]"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="px-7 py-3 border border-[#ffb703]  text-[#ffb703]  rounded transition-all duration-200 hover:bg-[#ffb703]  hover:text-[#0e0e0e] hover:scale-110">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Settings;
