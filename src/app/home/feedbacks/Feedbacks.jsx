'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules'
import 'swiper/css';
import "swiper/css/scrollbar";
import CardsUsers from './components/CardsUsers';

export default function Feedbacks() {

    const CardsUsersData = [
        {
            feedback: "The course exceeded my expectations! Clear explanations and very practical examples.",
            imageSrc: "/images/student-.png",
            name: "Lucas Andrade",
            role: "Software Engineer, Tech Solutions",
            alt: "user1"
        },
        {
            feedback: "I learned a lot in a short time. The platform is perfect for building real skills.",
            imageSrc: "/images/student1.jpg",
            name: "Rafael Costa",
            role: "Data Analyst, Global Insights",
            alt: "user2"
        },
        {
            feedback: "Great experience! The content is well structured and easy to follow.",
            imageSrc: "/images/student.jpg",
            name: "Gabriel Martins",
            role: "Front-End Developer, Creative Studio",
            alt: "user3"
        }
    ]


    return (
        <div>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                modules={[Scrollbar]}
                scrollbar={{ draggable: true }}
            >
                {CardsUsersData.map((card, index) => (
                    <SwiperSlide className='md:w-full md:flex md:items-center md:justify-center' key={index}>
                        <CardsUsers
                            feedback={card.feedback}
                            imageSrc={card.imageSrc}
                            name={card.name}
                            role={card.role}
                            alt={card.alt}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}