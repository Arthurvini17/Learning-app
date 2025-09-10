import Image from "next/image";

export default function CardPopular({
    imageSrc,
    imageAlt,
    imageWidth,
    imageHeight,
    subtitle,
    title,
    description,
    price,
    user,
    name_user,
}) {
    return (
        <div className=" w-xl p-5
            md:shadow-xl hover:cursor-pointer transition-transform duration-300 hover:scale-105  rounded-2xl  max-w-sm mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl ">
            <Image
                src={imageSrc}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
                className="w-full   object-cover   rounded-xl   sm:h-56 md:h-64 p-4 "
            />

            <div className="p-5  flex flex-col gap-2  rounded-2xl shadow ">
                <h1 className=" text-[#1A906B] text-base sm:text-lg md:text-xl font-semibold ">
                    {title}
                </h1>
                <h2 className="self-center text-[#101828] text-sm sm:text-base md:text-2xl font-semibold ">
                    {subtitle}
                </h2>
                <p className=" text-[#667085]  items-center self-start   text-xs sm:text-sm md:text-base ">
                    {description}
                </p>

                <div className="flex items-center gap-2 mt-2 text-center ">
                    <Image
                        src={user}
                        alt={name_user}
                        width={30}
                        height={20}
                        className=" md:w-6 md:h-6 sm:w-10 sm:h-10"
                    />
                    <span className=" sm:text-sm md:text-base">{name_user}</span>
                    <p className="ml-auto text-[#1A906B] font-semibold text-sm md:text-2xl">
                        {price}
                    </p>
                </div>
            </div>
        </div>
    );
}
