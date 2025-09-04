import Image from "next/image";
import { CiSearch } from "react-icons/ci";


export default function Header() {
    return (
        <header className="p-4 border-b-gray-200 flex items-center justify-between font-semibold">
            <div className="">
                <h1 className="text-xl text-[#49e60c]">Learning +</h1>
            </div>

            <nav>
                <ul className="flex gap-6 items-center">

                    <li className="relative">
                        <CiSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Want to learn?"
                            className="border border-gray-300 rounded pl-8 pr-2 py-1 w-full"
                        />
                    </li>

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
                        <button className=" text-black p-2 rounded-lg hover:bg-[#20B486] transition cursor-pointer  ">
                            Sign In
                        </button>
                    </li>



                    <li>
                        <button className="bg-[#20B486] text-white p-4 rounded-lg hover:bg-[#1a8f6a] transition cursor-pointer  ">
                            Create free acount
                        </button>
                    </li>
                </ul>
            </nav>
        </header >
    )
}