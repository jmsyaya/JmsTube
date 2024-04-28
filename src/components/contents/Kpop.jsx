import React from 'react'
import { kpopText } from '../../data/kpop'
import { Link } from 'react-router-dom'


const Kpop = () => {
    return (
        <section id='kpop'>
            <h2>🎵 오늘 하루 K-pop 어떠세요?</h2>
            <div className="video__inner">
                {kpopText.map((video, key) => (
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

export default Kpop