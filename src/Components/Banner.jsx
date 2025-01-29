import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';
// import 'swiper/css/autoplay';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    return (
        <div>
            <Swiper
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                modules={[Navigation, Pagination, Autoplay]}
                className="mySwiper w-full h-[540px] md:h-[560px] p-7"
            >
                {/* First Slide */}
                <SwiperSlide className='w-full h-full bg-[url("https://i.ibb.co/6vnbXnK/1-min.png")] bg-no-repeat bg-cover bg-center'>
                    <div className='w-full h-full bg-[rgba(0,0,0,0.85)] text-white flex flex-col justify-center items-center md:items-start'>
                        <div className="flex flex-col items-center md:items-start md:ml-96 w-11/12 md:w-auto">
                            <h5><span className="text-secondary">--------</span> Crowd Funding</h5>
                            <div className='text-3xl md:text-6xl py-4 font-bebas h-24'>
                                <Typewriter typeSpeed={25} deleteSpeed={25} cursor={true} words={['Help Build a Better Future']} loop={false} />
                            </div>
                            <p className='text-sm'>Join us in creating sustainable communities with your generous donation to our cause.</p>
                            <div className='flex gap-2 py-4'>
                                <Link to='/allCamp' className='btn bg-primary border-0 text-white hover:text-black'>Explore More</Link>
                                <Link to='/allCamp' className='btn border-secondary bg-transparent hover:bg-secondary hover:text-black text-white'>Donate Now</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='w-full h-full bg-[url("https://i.ibb.co/rGC8r9P/2-min.png")] bg-no-repeat bg-cover bg-center'>
                    <div className='w-full h-full bg-[rgba(0,0,0,0.85)] text-white flex flex-col justify-center items-center md:items-start'>
                        <div className="flex flex-col items-center md:items-start md:ml-96 w-11/12 md:w-auto">
                            <h5><span className="text-secondary">--------</span> Crowd Funding</h5>
                            <h1 className='text-3xl md:text-6xl py-4 font-bebas'>Support Small Businesses</h1>
                            <p className='text-sm'>Your donation can empower small entrepreneurs to grow and succeed in their local communities.</p>
                            <div className='flex gap-2 py-4'>
                                <Link to='/allCamp' className='btn bg-primary border-0 text-white hover:text-black'>Explore More</Link>
                                <Link to='/allCamp' className='btn border-secondary bg-transparent hover:bg-secondary hover:text-black text-white'>Donate Now</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                 
                <SwiperSlide className='w-full h-full bg-[url("https://i.ibb.co/tK5454D/3-min.png")] bg-no-repeat bg-cover bg-center'>
                    <div className='w-full h-full bg-[rgba(0,0,0,0.85)] text-white flex flex-col justify-center items-center md:items-start'>
                        <div className="flex flex-col items-center md:items-start md:ml-96 w-11/12 md:w-auto">
                            <h5><span className="text-secondary">--------</span> Crowd Funding</h5>
                            <h1 className='text-3xl md:text-6xl py-4 font-bebas'>Disaster Relief Assistance</h1>
                            <p className='text-sm'>Provide essential aid and support to those affected by natural disasters with your kind donation.</p>
                            <div className='flex gap-2 py-4'>
                                <Link to='/allCamp' className='btn bg-primary border-0 text-white hover:text-black'>Explore More</Link>
                                <Link to='/allCamp' className='btn border-secondary bg-transparent hover:bg-secondary hover:text-black text-white'>Donate Now</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
