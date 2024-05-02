import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';


const Streamer = ({ videos, title, id }) => {
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 400);
    }, []);

    const streamerClass = loading ? 'is-loading' : 'is-loaded';

    return (
        <section id={id} className={streamerClass}>
            <h2>{title}</h2>
            <div className="streamer__inner">
            <Swiper         //Autoplay 및 slide 기능
                    slidesPerView={4}
                    spaceBetween={15}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{          // 반응형 처리
                        640: {
                            slidesPerView: 5,
                            spaceBetween: 15,
                        },
                        768: {
                            slidesPerView: 6,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 7,
                            spaceBetween: 20,
                        },
                        1240: {
                            slidesPerView: 8,
                            spaceBetween: 20,
                        },
                        1640: {
                            slidesPerView: 9,
                            spaceBetween: 20,
                        },
                        2000: {
                            slidesPerView: 10,
                            spaceBetween: 20,
                        },
                    }}
                    modules={[Navigation, Autoplay]}
                    className='mySwiper'
                >
                    {videos.map((streamer, key) => (
                        <SwiperSlide key={key}>
                            <div className="streamer">
                                <div className="streamer__img play__icon">
                                    <Link to={`/channel/${streamer.channelId}`}>
                                        <img src={streamer.img} alt={streamer.name} />
                                    </Link>
                                </div>
                                <div className="streamer__info">
                                <Link to={`/channel/${streamer.channelId}`}>
                                    {streamer.name}
                                </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Streamer