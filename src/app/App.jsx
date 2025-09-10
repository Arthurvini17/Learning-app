"use client";
import Image from "next/image";
import { RiSpeakLine } from "react-icons/ri";
import { CiShoppingBasket } from "react-icons/ci";
import { FcIdea } from "react-icons/fc";
import { GiProgression } from "react-icons/gi";
import { MdVideoSettings } from "react-icons/md";
import Partners from "./home/heroSection/components/Partners";
import { Typewriter } from "react-simple-typewriter";

export default function App() {
    return (
        <>
            <section className="md:flex   md:items-center md:py-20 md:justify-evenly flex-col md:flex-row">
                <div className="md:flex md:flex-col flex flex-col gap-2   p-10 md:max-w-xl ">
                    <div className="">
                        <h1 className="font-semibold text-4xl md:text-6xl">
                            Up your <span className="text-[#20B486]">Skills</span> To <br className="md:block hidden" />
                            <span className="text-[#20B486]">Advance</span> Your Career Path
                        </h1>
                    </div>

                    <div className="md:max-w-xl md:text-md max-w-2xl text-[#646464]">
                        <p>
                            <Typewriter
                                words={[
                                    "Learn UI-UX Design skills with weekend UX. The latest online learning system and material that help your knowledge growing."
                                ]}
                                loop={1}
                                cursor
                                cursorStyle="|"
                                typeSpeed={60}
                            />
                        </p>
                    </div>

                    <div className="gap-5 flex self-start mt-2">
                        <button className="bg-[#20B486] text-white p-4 rounded-2xl font-medium cursor-pointer">
                            Get Started
                        </button>
                        <button className="bg-[#EAFFF9] text-[#20B486] rounded-2xl p-4 font-semibold cursor-pointer">
                            Get free trial
                        </button>
                    </div>

                    <div className="md:flex md:items-center items-center flex flex-row  md:text-gray-500 text-md  gap-6 mt-5">
                        <p className="md:inline-flex md:items-center md:gap-x-2 inline-flex items-center gap-2">
                            <RiSpeakLine className="text-green-300 md:block  hidden h-6 w-6" /> Public Speaking
                        </p>
                        <p className="md:inline-flex md:items-center md:gap-x-2 inline-flex items-center gap-2">
                            <CiShoppingBasket className="md:h-6 md:w-6 hidden md:block text-red-500" /> Career-Oriented
                        </p>
                        <p className="md:inline-flex md:items-center md:gap-x-2 inline-flex items-center gap-2">
                            <FcIdea className="md:h-6 md:w-6 hidden md:block " /> Creative Thinking
                        </p>
                    </div>
                </div>

                <div className="md:relative flex flex-row flex-wrap justify-center gap-4 mt-4 md:mt-0">
                    <Image
                        src="/images/young-student.png"
                        width={600}
                        height={400}
                        alt="Hero Image"
                        className="w-full h-auto md:w-[600px] md:h-[400px] md:bg-[#20B486] md:rounded-full"
                    />

                    <div className="bg-white p-2 rounded-lg shadow-lg flex flex-col items-center justify-between gap-2
                     md:absolute md:top-72 md:left-0 md:w-auto">
                        <p>
                            <MdVideoSettings className="text-4xl" />
                        </p>
                        <p className="text-2xl font-bold">2K+</p>
                        <p className="font-light">Video Courses</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center gap-1
                     md:absolute md:top-10 md:right-0 md:w-auto">
                        <p>
                            <GiProgression className="text-4xl text-green-600" />
                        </p>
                        <p className="text-2xl font-bold">5K+</p>
                        <p className="font-light">Online Courses</p>
                    </div>
                </div>



            </section>

            <Partners />


        </>
    );
}