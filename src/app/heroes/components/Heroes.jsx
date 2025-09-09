import CardsHeroes from "./CardsHeroes";

export default function Heroes() {

    const CardsHeroesData = [
        {
            imageSrc: "/images/theressa.jpg",
            name: "Theresa Webb",
            role: "Application Support Analyst Lead",
            description: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
            imageAlt: "User image",
            imageWidth: 100,
            imageHeight: 50,
        },
        {
            imageSrc: "/images/courtney.jpg",
            name: "Courtney Henry",
            role: "Director, Undergraduate Analytics and Planning",
            description: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
            imageAlt: "User image",
            imageWidth: 100,
            imageHeight: 50,
        },
        {
            imageSrc: "/images/albert-flores.jpg",
            name: "Albert Flores",
            role: "Career Educator",
            description: "Former PM for Linear, Lambda School, and On Deck.",
            imageAlt: "User image",
            imageWidth: 100,
            imageHeight: 50,
        },
        {
            imageSrc: "/images/marvin.jpg",
            name: "Marvin McKinney",
            role: "Co-op & Internships Program & Operations Manager",
            description: "Former frontend dev for Linear, Coinbase, and Postscript.",
            imageAlt: "User image",
            imageWidth: 100,
            imageHeight: 50,
        }
    ]
    return (
        <div className="p-20">
            <div className="md:items-center md:flex md:flex-col mb-10 gap-4">
                <p className="text-2xl text-[#22B286] font-black ">Tutors </p>
                <h1 className="text-4xl font-semibold">Meet the Heroes</h1>
                <p className="text-[#667085] text-center ">On Weekend UX, instructors from all over the world instruct millions of students. <br /> We offer the knowledge and abilities.</p>

            </div>
            <div className="md:flex-row md:flex md:items-center md:justify-center md:gap-10">
                {CardsHeroesData.map((card, index) =>
                    <CardsHeroes
                        key={index}
                        imageAlt={card.imageAlt}
                        imageSrc={card.imageSrc}
                        imageWidth={card.imageWidth}
                        imageHeight={card.imageHeight}
                        name={card.name}
                        description={card.description}
                        role={card.role}
                    />
                )}

            </div>
        </div >
    )
}