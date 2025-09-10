import Image from "next/image";

export default function Partners() {
    return (
        <div className="p-6">
            <p className="text-xl text-center md:text-left mb-6 md:mb-0">
                <span className="text-green-600 font-bold text-3xl">250+</span> <br />
                Collaborations
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-items-center">
                <div>
                    <Image
                        src="/images/cdnlogo.com_duolingo-black.svg"
                        width={100}
                        height={100}
                        alt="Duolingo Logo"
                    />
                </div>

                <div>
                    <Image
                        src="/images/cdnlogo.com_gmail.svg"
                        width={100}
                        height={100}
                        alt="Gmail Logo"
                    />
                </div>

                <div>
                    <Image
                        src="/images/cdnlogo.com_ifood.svg"
                        width={100}
                        height={100}
                        alt="iFood Logo"
                    />
                </div>

                <div>
                    <Image
                        src="/images/cdnlogo.com_burgkng2.svg"
                        width={100}
                        height={100}
                        alt="Burger King Logo"
                    />
                </div>
            </div>
        </div>
    );
}
