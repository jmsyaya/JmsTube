import React, { useState, useEffect } from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'

import { gameText } from '../data/game'

const Game = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 300)
    }, []);

    const gamePageClass = loading ? 'is-loading' : 'is-loaded';

    return (
        <Main
            title = "🕹️ 게임"
            description="게임 영상입니다."
        >
            <section id='gamePage' className={gamePageClass}>
                <h2>🕹️ 게임만 하고나면 시간이 순-삭.. 재밌는걸?</h2>
                <div className="video__inner">
                    <VideoCard videos={gameText} />
                </div>
            </section>
        </Main>
    )
}

export default Game