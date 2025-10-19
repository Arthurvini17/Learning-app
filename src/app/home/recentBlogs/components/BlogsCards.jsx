import Image from "next/image";

export default function BlogCard() {
    return (
        <div className="">
            <h1 className="text-2xl font-semibold mt-5 px-5">Our Recent blogs</h1>

            <div className="md:grid md:grid-cols-2 gap-10 flex flex-col md:grid-rows-2  md:gap-6  p-10 ">

                <div className="bg-white shadow rounded-lg overflow-hidden w-full md:col-span-1 flex-col h-full p-2">
                    <Image
                        src="/images/img-recents1.jpg"
                        width={1000}
                        height={1000}
                        alt="people working"
                        className="w-full h-56 object-cover"
                    />
                    <div className="p-4 flex flex-col flex-grow">
                        <p className="text-sm text-[#20B486]">September 24, 2017</p>
                        <h2 className="font-semibold text-xl text-[#101828] mt-1">
                            Three Pillars of User Delight
                        </h2>
                        <p className="text-sm text-[#667085] mt-2 flex-grow">
                            Delight can be experienced viscerally, behaviourally, and reflectively. A great design is ...
                        </p>
                        <div className="flex gap-2 mt-3">
                            <span className="text-xs px-2 py-1 bg-pink-100 rounded text-[#C11574]">Research</span>
                            <span className="text-xs px-2 py-1 bg-blue-100 rounded text-[#026AA2]">UI UX</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white shadow rounded-lg overflow-hidden  p-2">
                    <Image
                        src="/images/img-recents2.jpg"
                        width={1000}
                        height={1000}
                        alt="people working"
                        className="w-full h-56 object-cover"
                    />
                    <div className="p-4 flex flex-col  ">
                        <p className="text-sm text-[#20B486]">November 16, 2014</p>
                        <h2 className="font-semibold text-xl text-[#101828] mt-1">
                            Agile Development Projects and Usability
                        </h2>
                        <p className="text-sm text-[#667085] mt-2 flex-grow">
                            Agile methods aim to overcome usability barriers in traditional development, but post new threats to user experience quality.
                        </p>
                        <div className="flex flex-row gap-2 max-w-5xl mt-3">
                            <span className="text-xs px-2 py-1 bg-yellow-100/50  rounded text-[#FF9B26]">Programming</span>
                            <span className="text-xs px-2 py-1 bg-pink-100 rounded text-[#C11574]">Research</span>
                            <span className=" md:block hidden text-xs px-2 py-1 bg-blue-100 rounded">Developments</span>
                        </div>
                    </div>
                </div>


                <div className="bg-white shadow rounded-lg overflow-hidden flex flex-col h-full 
                md:col-span-2 md:max-w-4xl md:mx-auto md:p-2">
                    <Image
                        src="/images/img-recents3.webp"
                        width={2000}
                        height={2000}
                        alt="people working"
                        className="w-full h-72 object-cover"
                    />
                    <div className="p-4 flex flex-col">
                        <p className="text-sm text-[#20B486]">November 16, 2014</p>
                        <h2 className="font-semibold text-xl text-[#101828] mt-1">
                            UX Mapping Methods
                        </h2>
                        <p className="text-sm text-[#667085] mt-2 flex-grow">
                            Visual-design principles can be applied consistently throughout the process of creating a polished UX map...
                        </p>
                        <div className="flex gap-2 mt-3">
                            <span className="text-xs px-2 py-1 bg-pink-100 rounded text-[#C11574]">Research</span>
                            <span className="text-xs px-2 py-1 bg-blue-100 rounded text-[#026AA2]">UI Design</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
