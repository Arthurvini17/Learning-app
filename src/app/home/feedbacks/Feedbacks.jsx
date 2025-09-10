'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules'
import 'swiper/css';
import "swiper/css/scrollbar";
import CardsUsers from './components/CardsUsers';

export default function Feedbacks() {

    const CardsUsersData = [
        {
            feedback: "Courses was fantastic! It is Master platform for those looking to start a new career, or need a refresher.",
            imageSrc: "/images/theressa.jpg",
            name: "Jacob Jones",
            role: "Student, National University",
            alt: "user1"
        },
        {
            feedback: "Courses was fantastic! It is Master platform for those looking to start a new career, or need a refresher.",
            imageSrc: "/images/theressa.jpg",
            name: "Jacob Jones",
            role: "Student, National University",
            alt: "user2"
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