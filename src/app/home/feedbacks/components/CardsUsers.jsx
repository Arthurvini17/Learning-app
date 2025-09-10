import Image from "next/image";

export default function CardsUsers({ name, role, feedback, imageSrc, alt }) {
    return (
        <div className="md:flex md:flex-col md:text-center md:items-center gap-5 md:p-20   md:gap-3 p-10 text-center items-center justify-center flex flex-col">
            <div className=" md:max-w-2xl">
                <h1 className="md:text-2xl  md:leading-7">{feedback}</h1>
            </div>
            <div className="md:text-center flex flex-col items-center  md:flex md:flex-col md:items-center md:gap-2">
                <Image src={imageSrc}
                    width={100}
                    height={100}
                    alt={alt}
                    className="rounded-full " />

                <h1>{name}</h1>
                <p className="text-[#667085]">{role}</p>
            </div>

        </div>
    )
}