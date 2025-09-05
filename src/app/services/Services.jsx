import CardsServices from "./components/CardsServices";
import { PiDesktopTower } from "react-icons/pi";
import { LiaDesktopSolid } from "react-icons/lia";
import { ImStatsDots } from "react-icons/im";

export default function Services() {
    const services = [
        {
            title: "Interaction Design",
            icon: PiDesktopTower,
            description: "Creating engaging and interactive learning experiences."
        },
        {
            title: "UX Design Course",
            icon: LiaDesktopSolid,
            description: "Classes in development that cover the most recent advancements in web.."
        },
        {
            title: "User Interface Design",
            icon: ImStatsDots,
            description: "User Interface Design courses that cover the most recent  trends."
        }
    ];

    return (
        <section className="p-4 sm:p-6 md:p-10 lg:p-20">
            <div className="flex flex-col items-center justify-center text-center mb-6">
                <p className="text-[#20B486] font-semibold text-base sm:text-lg md:text-xl">
                    Our Services
                </p>
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold max-w-xl">
                    Fostering a playful & engaging learning environment
                </h1>
            </div>

            <div className="flex flex-wrap justify-around gap-6 mt-6 sm:mt-8">
                {services.map((service, index) => (
                    <CardsServices
                        key={index}
                        title={service.title}
                        icon={service.icon}
                        description={service.description}
                    />
                ))}
            </div>
        </section>
    );
}
