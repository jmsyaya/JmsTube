import React, { useState, useEffect } from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'

import { itText } from '../data/IT'

const IT = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 300);
    }, []);

    const itPageClass = loading ? 'is-loading' : 'is-loaded';

    return (
        <Main
            title = "💻 IT-Development"
            description="IT 개발 영상입니다."
        >
            <section id='itPage' className={itPageClass}>
                <h2>💻 IT개발 영상은 이걸로!</h2>
                <div className="video__inner">
                    <VideoCard videos={itText} />
                </div>
            </section>
        </Main>
    )
}

export default IT