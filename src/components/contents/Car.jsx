import React from 'react'
import { carText } from '../../data/car'
import { Link } from 'react-router-dom'

const Car = () => {
    return (
        <section id='car'>
        <h2>🚗 남자의 심금을 울리는 자동차.. "야, 타!"</h2>
        <div className="video__inner">
            {carText.map((video, key) => (
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

export default Car