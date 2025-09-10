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
        <div className="md:flex-col md:flex md:items-center md:justify-center md:text-center items-center flex flex-col p-4 h-full   bg-white shadow rounded-xl md:p-5 md:gap-5 md:h-[400px]   ">
            <Image src={imageSrc}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
                className=" rounded-full w-1/2"
            />

            <div className="gap-4 flex flex-col">
                <h1 className="md:text-2xl self-center">{name}</h1>
                <p className="text-[#22B286] self-center text-center  md:max-w-xs ">{role}</p>
                <p className="text-[#667085] md:text-md md:max-w-xs text-center" >{description}</p>
            </div>
        </div>
    )
}