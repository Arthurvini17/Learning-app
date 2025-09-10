import PrimaryText from "./components/PrimaryText";
import CardsPopular from "./components/CardsPopular";

export default function Popularclass() {
    const cardsPopularData = [
        {
            imageSrc: "/images/ilustracao-de-redes-sociais-1060x559.jpg",
            imageAlt: "Hero Image",
            imageWidth: 400,
            imageHeight: 400,
            title: " Design",
            subtitle: "Figma UI UX Design...",
            description: "Use Figma to get a job in UI Design, User Interface, User Experience design..",
            price: "$49",
            user: "/images/user.png",
            name_user: "Alice Johnson"
        },
        {
            imageSrc: "/images/people-working.jpg",
            imageAlt: "Hero Image",
            imageWidth: 406,
            imageHeight: 400,
            title: "Design",
            subtitle: "Learn With Shoaib",
            description: "Design Web Sites and Mobile Apps that Your Users Love and Return to Again..",
            price: "$59",
            user: "/images/user.png",
            name_user: "Bob Smith"
        },
        {
            imageSrc: "/images/interface.png",
            imageAlt: "Hero Image",
            imageWidth: 400,
            imageHeight: 400,
            title: "Digital Marketing",
            subtitle: "Building User Interface...",
            description: "Learn how to apply User Experience (UX) principles to your website designs.",
            price: "$69",
            user: "/images/user.png",
            name_user: "Carol Lee"
        }
    ];

    return (
        <div className=" md:p-20  items-center justify-center flex gap-5 flex-col">
            <div className="">
                <PrimaryText
                    title="Explore Programs"
                    subTitle="Our Most Popular Class"
                    description="Let's join our famous class, the knowledge provided will definitely be useful for you." />
            </div>

            <div className="flex flex-col gap-6   md:flex-row p-20 ">
                {cardsPopularData.map((card, index) => (
                    <CardsPopular
                        key={index}
                        imageSrc={card.imageSrc}
                        imageAlt={card.imageAlt}
                        imageWidth={card.imageWidth}
                        imageHeight={card.imageHeight}
                        subtitle={card.subtitle}
                        title={card.title}
                        description={card.description}
                        price={card.price}
                        user={card.user}
                        name_user={card.name_user}
                    />
                ))}
            </div>
        </div>
    );
}