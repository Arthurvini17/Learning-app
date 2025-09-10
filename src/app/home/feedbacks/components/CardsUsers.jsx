import Image from "next/image";

export default function CardsUsers({ name, role, feedback, imageSrc, alt }) {
    return (
        <div className="md:flex md:flex-col md:text-center md:items-center md:p-20 bg-white shadow md:gap-3">
            <div className=" max-w-2xl">
                <h1 className="md:text-2xl  leading-7">{feedback}</h1>
            </div>
            <div className="md:text-center md:flex md:flex-col md:items-center md:gap-2">
                <Image src={imageSrc}
                    width={100}
                    height={100}
                    alt={alt}
                    className="rounded-full" />

                <h1>{name}</h1>
                <p className="text-[#667085]">{role}</p>
            </div>

        </div>
    )
}