import React, { useState, useEffect } from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'

import { kpopText } from '../data/kpop'

const Kpop = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 300);
    }, []);

    const kpopPageClass = loading ? 'is-loading' : 'is-loaded';

    return (
        <Main
            title = "🎵 K-pop"
            description="K-pop 영상입니다."
        >
            <section id='kpopPage' className={kpopPageClass}>
                <h2>🎵 오늘 하루 K-pop 어떠세요?</h2>
                <div className="video__inner card">
                    <VideoCard videos={kpopText} />
                </div>
            </section>
        </Main>
    )
}

export default Kpop