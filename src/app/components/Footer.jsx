export default function Footer() {
    return (
        <footer className="bg-[#101828]">
            <div className="grid grid-cols-3 gap-6 p-6 items-center text-center  md:flex md:items-start md:justify-around md:p-10">

                <div className="w-full">
                    <h1 className="text-[#EAECF0] md:text-xl">Learning + </h1>
                    <p className="text-[#EAECF0] text-xs">
                        Top learning experiences that create more <br /> talent in the world.
                    </p>
                </div>

                <div>
                    <h3 className="text-[#98A2B3] font-semibold mb-2">Product</h3>
                    <ul className="text-gray-400 space-y-1 ">
                        <li><a href="#" className="hover:text-white transition">Overview</a></li>
                        <li><a href="#" className="hover:text-white transition">Features</a></li>
                        <li><a href="#" className="hover:text-white transition">Solutions</a></li>
                        <li><a href="#" className="hover:text-white transition">Tutorials</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-[#98A2B3] font-semibold mb-2">Company</h3>
                    <ul className="text-gray-400 space-y-1">
                        <li><a href="#" className="hover:text-white transition">About us</a></li>
                        <li><a href="#" className="hover:text-white transition">Careers</a></li>
                        <li><a href="#" className="hover:text-white transition">Press</a></li>
                        <li><a href="#" className="hover:text-white transition">News</a></li>
                    </ul>
                </div>

                <div className="">
                    <h3 className="text-[#98A2B3] font-semibold mb-2">Social</h3>
                    <ul className="text-gray-400 space-y-1">
                        <li><a href="#" className="hover:text-white transition">Twitter</a></li>
                        <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
                        <li><a href="#" className="hover:text-white transition">GitHub</a></li>
                        <li><a href="#" className="hover:text-white transition">Dribbble</a></li>
                    </ul>
                </div>

                <div className=" ">
                    <h3 className="text-[#98A2B3] font-semibold mb-2">Legal</h3>
                    <ul className="text-gray-400 space-y-1">
                        <li><a href="#" className="hover:text-white transition">Terms</a></li>
                        <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                        <li><a href="#" className="hover:text-white transition">Cookies</a></li>
                        <li><a href="#" className="hover:text-white transition">Contact</a></li>
                    </ul>
                </div>
            </div>

            <h1 className="text-[#98A2B3] text-center py-4">
                © 2022 Ed-Circle. All rights reserved.
            </h1>
        </footer>
    );
}
