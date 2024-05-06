import React, { useState, useEffect } from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'

import { sportText } from '../data/sport'

const Sport = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 300)
    }, []);

    const sportPageClass = loading ? 'is-loading' : 'is-loaded';

    return (
        <Main
            title = "🏋️‍♂️ 스포츠 영상"
            description="스포츠 영상입니다."
        >
            <section id='sportPage' className={sportPageClass}>
                <h2>🏋️‍♂️ 회원님. 오늘 풀업 10sets, 렛풀다운 10sets, 바벨로우 10sets, 데드리프트 10sets 가능하시죠~?</h2>
                <div className="video__inner">
                    <VideoCard videos={sportText} />
                </div>
            </section>
        </Main>
    )
}

export default Sport