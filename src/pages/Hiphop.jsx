import React, { useState, useEffect } from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'

import { hiphopText } from '../data/hiphop'

const Hiphop = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 300)
    }, []);

    const hiphopPageClass = loading ? 'is-loading' : 'is-loaded';

    return (
        <Main
            title = "💵 Hip-Hop"
            description="Hip-Hop 영상입니다."
        >
            <section id='hiphopPage' className={hiphopPageClass}>
                <h2>💵 달고 달디단 밤양갱 갱 갱 Hip-hop 듣자!</h2>
                <div className="video__inner">
                    <VideoCard videos={hiphopText} />
                </div>
            </section>
        </Main>
    )
}

export default Hiphop