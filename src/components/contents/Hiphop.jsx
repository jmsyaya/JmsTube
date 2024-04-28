import React from 'react'
import { hiphopText } from '../../data/hiphop'
import { Link } from 'react-router-dom'


const Hiphop = () => {
    return (
        <section id='hiphop'>
            <h2>💵 달고 달디단 밤양갱 갱 갱 Hip-hop 듣자!</h2>
            <div className="video__inner">
                {hiphopText.map((video, key) => (
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

export default Hiphop