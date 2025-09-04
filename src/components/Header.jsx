'use client'
import { HiMenu, HiX } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="p-4 border-b border-gray-200 font-semibold">
            <div className="flex items-center justify-between">
                <h1 className="text-xl text-[#49e60c]">Learning +</h1>

                <div className="hidden md:block relative w-64">
                    <CiSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Want to learn?"
                        className="border border-gray-300 rounded pl-8 pr-2 py-1 w-full"
                    />
                </div>

                <nav className="hidden md:flex items-center gap-6">
                    <a href="" className="hover:underline">Home</a>
                    <a href="" className="hover:underline">Courses</a>
                    <a href="" className="hover:underline">Contact Us</a>
                    <button className="text-black p-2 rounded-lg hover:bg-[#20B486] transition">
                        Sign In
                    </button>
                    <button className="bg-[#20B486] text-white p-2 rounded-lg hover:bg-[#1a8f6a] transition">
                        Create free account
                    </button>
                </nav>

                <button
                    className="md:hidden text-3xl text-gray-700"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden mt-4">
                    <ul className="flex flex-col gap-2">
                        <li><a href="" className="hover:underline">Home</a></li>
                        <li><a href="" className="hover:underline">Courses</a></li>
                        <li><a href="" className="hover:underline">Contact Us</a></li>
                        <li>
                            <button className="text-black p-2 rounded-lg hover:bg-[#20B486] transition w-full">
                                Sign In
                            </button>
                        </li>
                        <li>
                            <button className="bg-[#20B486] text-white p-2 rounded-lg hover:bg-[#1a8f6a] transition w-full">
                                Create free account
                            </button>
                        </li>
                        <li className="mt-2">
                            <div className="relative w-full">
                                <CiSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Want to learn?"
                                    className="border border-gray-300 rounded pl-8 pr-2 py-1 w-full"
                                />
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
