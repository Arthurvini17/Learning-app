import Image from "next/image";
import { CiSearch } from "react-icons/ci";

export default function Header() {
    return (
        <header className="p-4 border-b-gray-200 font-semibold">
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
                <div className="flex justify-center md:justify-start">
                    <h1 className="text-xl text-[#49e60c]">Learning +</h1>
                </div>

                <div className="order-3 md:order-none flex justify-center md:justify-center">
                    <div className="relative w-full max-w-xs">
                        <CiSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Want to learn?"
                            className="border border-gray-300 rounded pl-8 pr-2 py-1 w-full"
                        />
                    </div>
                </div>

                <nav className="order-2 md:order-none">
                    <ul className="flex flex-col md:flex-row gap-2 md:gap-6 items-center justify-center">
                        <li>
                            <a href="" className="hover:underline">Home</a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">Courses</a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">Contact Us</a>
                        </li>
                        <li>
                            <button className="text-black p-2 rounded-lg hover:bg-[#20B486] transition cursor-pointer w-full md:w-auto">
                                Sign In
                            </button>
                        </li>
                        <li>
                            <button className="bg-[#20B486] text-white p-4 rounded-lg hover:bg-[#1a8f6a] transition cursor-pointer w-full md:w-auto">
                                Create free acount
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}