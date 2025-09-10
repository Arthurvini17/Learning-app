import Image from "next/image";

export default function Partners() {
    return (
        <div className=" p-4">


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
