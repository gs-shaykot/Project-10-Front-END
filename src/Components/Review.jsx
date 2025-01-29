import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/autoplay';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Typewriter } from 'react-simple-typewriter';
import { Zoom } from "react-awesome-reveal";
import { ThemeContext } from "../Provider/ThemeProvider";

const ReviewSlider = () => {
    const reviews = [
        {
            id: 1,
            img: "https://i.ibb.co/nkSvHfw/boy1.png",
            name: "John Doe",
            review:
                "The service exceeded all my expectations! Everything was handled professionally and efficiently, making the entire process smooth and enjoyable. I will definitely recommend this to others.",
        },
        {
            id: 2,
            img: "https://i.ibb.co/qjrMBmf/r4.jpg",
            name: "Jane Smith",
            review:
                "From start to finish, my experience was exceptional. The team was attentive and friendly, ensuring all my concerns were addressed. A truly remarkable and unforgettable service!",
        },
        {
            id: 3,
            img: "https://i.ibb.co/yQ6HV8R/r2.jpg",
            name: "Alice Brown",
            review:
                "I cannot praise this enough. The customer support went above and beyond, responding quickly and resolving my issues in record time. Highly satisfied with their service!",
        },
        {
            id: 4,
            img: "https://i.ibb.co/4JT6XJL/r3.jpg",
            name: "Mark Henry",
            review:
                "This was a wonderful experience. Their commitment to excellence and attention to detail really impressed me. Everything was seamless, and I’ll definitely be returning in the future!",
        },
        {
            id: 5,
            img: "https://i.ibb.co/105gv6j/r1.jpg",
            name: "Ray Mysterio",
            review:
                "A game-changer for anyone seeking quality and reliability! The staff were accommodating and skilled, making sure everything was perfect. I’m beyond happy with the entire experience.",
        },
    ];

    const { theme } = useContext(ThemeContext)
    return (
        <div className={`w-full ${theme==="light"? '': 'text-white'}`}>
            <div className="container mx-auto pb-2">
                <div className="w-11/12 md:w-auto max-w-7xl mx-auto my-10">
                    <Zoom>
                        <h2 className='text-center pb-6 font-bebas text-4xl md:text-5xl font-semibold underline'>Customer Reviews</h2>
                    </Zoom>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        modules={[Navigation, Pagination, Autoplay]}
                        className="custom-swiper !py-5"
                        id="review_slider"
                    >
                        {reviews.map((review) => (
                            <SwiperSlide
                                className="bg-gray-100 rounded-lg shadow-md p-6"
                                key={review.id}
                            >
                                <div className="flex flex-col gap-4 items-center text-center">
                                    <img
                                        className="w-16 h-16 rounded-full"
                                        src={review.img}
                                        alt={review.name}
                                    />
                                    <p className="text-gray-600 italic">"{review.review}"</p>
                                    <div className="text-lg font-semibold text-black">
                                        <Typewriter typeSpeed={25} deleteSpeed={25} cursor={true} words={[review.name]} loop={false} />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default ReviewSlider;
