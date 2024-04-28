import React from 'react'
import { edmText } from '../../data/edm'
import { Link } from 'react-router-dom'

const EDM = () => {
    return (
        <section id='edm'>
            <h2>🎧 오늘 밤 강남? 홍대? 클럽 투어 드가자!!</h2>
            <div className="video__inner">
                {edmText.map((video, key) => (
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

export default EDM