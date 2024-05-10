import React, { useState, useEffect } from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'

import { carText } from '../data/car'

const Car = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 300)
    }, []);

    const carPageClass = loading ? 'is-loading' : 'is-loaded';

    return (
        <Main
            title = "🚗 자동차"
            description="자동차 영상입니다."
        >
            <section id='carPage' className={carPageClass}>
                <h2>🚗 남자의 심금을 울리는 자동차.. "야, 타!"</h2>
                <div className="video__inner card">
                    <VideoCard videos={carText} />
                </div>
            </section>
        </Main>
    )
}

export default Car