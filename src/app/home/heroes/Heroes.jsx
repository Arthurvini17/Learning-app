import CardsHeroes from "./components/CardsHeroes"

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
        <div className="">
            <div className="md:items-center md:flex md:flex-col items-center  md:text-center    p-5">
                <p className="md:text-2xl text-xl text-[#22B286] font-black ">Tutors </p>
                <h1 className="md:text-4xl text-3xl  font-semibold">Meet the Heroes</h1>
                <p className="text-[#667085]  ">On Weekend UX, instructors from all over the world instruct millions of students. <br className="md:block hidden" /> We offer the knowledge and abilities.</p>

            </div>
            <div className="md:flex-row md:flex md:items-center flex flex-col gap-5 items-center md:justify-center md:gap-10 p-10">
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