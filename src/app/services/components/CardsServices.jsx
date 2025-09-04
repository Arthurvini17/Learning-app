export default function CardsServices({ title, icon: Icon, description }) {
    return (
        <div className="w-full max-w-sm cursor-pointer px-2 sm:px-0">
            <div className="group bg-white hover:bg-[#4AC8AE] transition shadow text-black py-6 px-4 sm:py-10 sm:px-7 rounded-lg gap-2 flex flex-col">
                <p className="flex items-center gap-2 text-base sm:text-lg font-semibold group-hover:text-white">
                    {Icon && <Icon size={24} />} {title}
                </p>
                <p className="mt-2 text-sm opacity-90 group-hover:text-white">{description}</p>
                <p className="text-[#4AC8AE] group-hover:text-white">Learn More</p>
            </div>
        </div>
    );
}
