import React from 'react'
import { gameText } from '../../data/game'
import { Link } from 'react-router-dom'

const Game = () => {
    return (
        <section id='game'>
            <h2>🕹️ 게임만 하고나면 시간이 순-삭.. 재밌는걸?</h2>
            <div className="video__inner">
                {gameText.map((video, key) => (
                    <div className="video" key={key}>
                        <div className="video__thumb play__icon">
                            <Link to={`/video/${video.videoId}`}>
                                <img src={video.img} alt={video.title} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Game