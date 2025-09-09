import Image from "next/image";

export default function Partners() {
    return (
        <div className="flex flex-row  items-center   justify-evenly p-4">
            <p className="text-xl">
                <span className="text-green-600 font-bold text-3xl">250+</span> <br /> Collaborations
            </p>

            <Image
                src="/images/cdnlogo.com_duolingo-black.svg"
                width={100}
                height={100}
                alt="Duolingo Logo"
            />


            <Image
                src="/images/cdnlogo.com_gmail.svg"
                width={100}
                height={100}
                alt="iFood Logo"
            />
            <Image
                src="/images/cdnlogo.com_ifood.svg"
                width={100}
                height={100}
                alt="iFood Logo"
            />


            <Image
                src="/images/cdnlogo.com_burgkng2.svg"
                width={100}
                height={100}
                alt="iFood Logo"
            />





        </div>
    );

}   
