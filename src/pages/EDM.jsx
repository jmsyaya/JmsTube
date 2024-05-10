import React, { useState, useEffect } from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'

import { edmText } from '../data/edm'

const EDM = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 300)
    }, []);

    const edmPageClass = loading ? 'is-loading' : 'is-loaded';

    return (
        <Main
            title = "🎧 EDM"
            description="EDM 영상입니다."
        >
            <section id='edmPage' className={edmPageClass}>
                <h2>🎧 오늘 밤 강남? 홍대? 방구석 클럽 드가자!!</h2>
                <div className="video__inner card">
                    <VideoCard videos={edmText} />
                </div>
            </section>
        </Main>
    )
}

export default EDM