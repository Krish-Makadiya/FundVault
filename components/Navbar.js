"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const { data: session } = useSession();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="w-[100%] text-[#f4f3ee] flex flex-col items-end">
            <div className="md:w-[80%] w-full mx-auto flex justify-between items-center py-4 px-8">
                <div>
                    <Link
                        href="/"
                        className="text-lg font-bold flex items-center gap-2 transition-all duration-200 ease-in-out hover:scale-105">
                        <Image
                            src="/coin.png"
                            width={40}
                            height={40}
                            alt="Picture of the author"
                        />
                        <p>
                            Fund <span className="text-[#ffb703]">Vault</span>
                        </p>
                    </Link>
                </div>

                <div
                    className="md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}>
                    <div className="space-y-2 cursor-pointer">
                        <span className="block w-8 h-[3px] bg-[#f4f3ee]"></span>
                        <span className="block w-6 h-[3px] bg-[#f4f3ee]"></span>
                        <span className="block w-8 h-[3px] bg-[#f4f3ee]"></span>
                    </div>
                </div>

                <div className="hidden md:flex gap-5">
                    <Link
                        href="/about"
                        className="ml-4 relative after:content-[''] after:absolute after:left-0 after:-bottom-[2px] after:h-[2.5px] after:w-2 after:bg-[#ffb703] after:transition-all after:duration-300 duration-200 hover:after:w-full hover:scale-110">
                        About
                    </Link>
                    <Link
                        href="https://github.com/Krish-Makadiya/FundVault"
                        className="ml-4 relative after:content-[''] after:absolute after:left-0 after:-bottom-[2px] after:h-[2.5px] after:w-2 after:bg-[#ffb703] after:transition-all after:duration-300 duration-200 hover:after:w-full hover:scale-110">
                        Github
                    </Link>
                </div>
                <div className="hidden md:flex gap-5 items-center">
                    {!session && (
                        <Link
                            href="/login"
                            className="ml-4 relative after:content-[''] after:absolute after:left-0 after:-bottom-[2px] after:h-[2.5px] after:w-2 after:bg-[#ffb703] after:transition-all after:duration-300 duration-200 hover:after:w-full hover:scale-110">
                            Register
                        </Link>
                    )}
                    {!session && (
                        <Link
                            href="/login"
                            className="px-5 py-2 border border-[#ffb703]  text-[#ffb703]  rounded transition-all duration-200 hover:bg-[#ffb703]  hover:text-[#0e0e0e] hover:scale-110">
                            Login
                        </Link>
                    )}
                    {session && (
                        <Link
                            href={`/dashboard/${session.user.username}`}
                            className="ml-4 relative after:content-[''] after:absolute after:left-0 after:-bottom-[2px] after:h-[2.5px] after:w-2 after:bg-[#ffb703] after:transition-all after:duration-300 duration-200 hover:after:w-full hover:scale-110">
                            Dashboard
                        </Link>
                    )}
                    {session && (
                        <Link href="/settings">
                            <Image
                                src="/settings.png"
                                width={30}
                                height={30}
                                alt="setting"
                                className="transition-all duration-200 ease-in-out hover:scale-110"
                            />
                        </Link>
                    )}
                    {session && (
                        <button
                            className="px-5 py-2 border border-[#ffb703]  text-[#ffb703]  rounded transition-all duration-200 hover:bg-[#ffb703]  hover:text-[#0e0e0e] hover:scale-110"
                            onClick={() => {
                                signOut();
                            }}>
                            Logout
                        </button>
                    )}
                </div>
            </div>

            <div
                ref={menuRef}
                className={`fixed top-16 right-5 md:hidden bg-[#000000] text-[#f4f3ee] flex flex-col gap-2 items-center py-4 px-20 rounded-[8px] transition-all duration-[500ms] ease-in-out ${
                    menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}>
                <Link
                    href="/about"
                    className="py-2 text-lg w-full text-center hover:bg-[#1a1a1a]">
                    About
                </Link>
                <Link
                    href="/projects"
                    className="py-2 text-lg w-full text-center hover:bg-[#1a1a1a]">
                    Projects
                </Link>
                <div className="h-[1px] w-40 bg-[#ffb703]"></div>
                {!session && (
                    <Link
                        href="/signup"
                        className="ml-4 relative after:content-[''] after:absolute after:left-0 after:-bottom-[2px] after:h-[2.5px] after:w-2 after:bg-[#ffb703] after:transition-all after:duration-300 duration-200 hover:after:w-full hover:scale-110">
                        Register
                    </Link>
                )}
                {!session && (
                    <Link
                        href="/login"
                        className="px-5 py-2 border border-[#ffb703]  text-[#ffb703]  rounded transition-all duration-200 hover:bg-[#ffb703]  hover:text-[#0e0e0e] hover:scale-110">
                        Login
                    </Link>
                )}
                {session && (
                    <Link
                        href="/dashboard"
                        className="ml-4 relative after:content-[''] after:absolute after:left-0 after:-bottom-[2px] after:h-[2.5px] after:w-2 after:bg-[#ffb703] after:transition-all after:duration-300 duration-200 hover:after:w-full hover:scale-110">
                        Dashboard
                    </Link>
                )}
                {session && (
                    <button
                        className="px-5 py-2 border border-[#ffb703]  text-[#ffb703]  rounded transition-all duration-200 hover:bg-[#ffb703]  hover:text-[#0e0e0e] hover:scale-110"
                        onClick={() => {
                            signOut();
                        }}>
                        Logout
                    </button>
                )}
            </div>
        </nav>
    );
}
