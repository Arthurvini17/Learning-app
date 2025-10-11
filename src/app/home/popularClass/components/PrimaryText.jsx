export default function PrimaryText({ title, subTitle, description }) {
    return (
        <div className="  flex flex-col gap-2 mt-20  p-5 ">
            <h2 className="text-xl font-bold text-[#1A906B] ">{title}</h2>
            <p className=" text-[#101828] font-semibold text-4xl">{subTitle}</p>
            <p className="text-gray-500 mt-2">{description}</p>
        </div>
    );
} 