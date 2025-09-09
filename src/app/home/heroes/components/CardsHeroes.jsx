import Image from "next/image";

export default function CardsHeroes({
    name,
    role,
    description,
    imageSrc,
    imageHeight,
    imageWidth,
    imageAlt
}) {
    return (
        <div className="md:flex-col md:flex md:items-center md:justify-center md:text-center bg-white shadow rounded-xl md:p-5 md:gap-5 md:h-[400px]">
            <Image src={imageSrc}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
                className=" rounded-full"

            />

            <div className="gap-2 flex flex-col">
                <h1 className="text-2xl">{name}</h1>
                <p className="text-[#22B286]  md:max-w-xs ">{role}</p>
                <p className="text-[#667085] md:text-md md:max-w-xs" >{description}</p>
            </div>
        </div>
    )
}