"use client";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";

const Dashboard = () => {
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!session) {
            router.push("/login");
        }
    }, []);

    return (
        <div className="h-[100vh] w-[80vw] mx-auto flex justify-center items-center text-white">
            Dashboard
        </div>
    );
};

export default Dashboard;
