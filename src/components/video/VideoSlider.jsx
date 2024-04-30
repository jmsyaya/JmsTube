import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const VideoSlider = ({ id, title, videos }) => {
    const [loading, setLoading] = useState(true);       // const [변수값, 동작하는 함수값], Loading에 true 값이 저장됨.

    useEffect(() => {                                   // useEffect로 인해서 0.5초 뒤에 setLoading에 false 값이 들어감. 그래서 Loading 이 False가 됨.
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, []);

    const videoClass = loading ? 'is-loading' : 'is-loaded';

    return (
        <section id={id} className={videoClass}>
                <h2>{title}</h2>
                <div className="video__slider">
                    <Swiper     // 슬라이더 설정
                        slidesPerView={1}   // 한 슬라이드에 보여줄 갯수
                        spaceBetween={20}   // 슬라이드 사이 여백
                        navigation={true} 
                        modules={[Navigation]} 
                        className={`mySwiper-${id}`}
                        breakpoints={{              // 반응형 설정
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            1600: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            }
                        }}
                    >
                        {videos.map((video, key) => (
                            <SwiperSlide key={key}>
                            <div className="video">
                                <div className="video__thumb play__icon">
                                    <Link to={`/video/${video.videoId}`}>
                                        <img src={video.img} alt={video.title} />
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

export default VideoSlider