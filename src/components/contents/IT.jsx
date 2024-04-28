import React from 'react'
import { itText } from '../../data/IT'
import { Link } from 'react-router-dom'

const IT = () => {
    return (
        <section id='it'>
            <h2>💻 IT개발 영상은 이걸로!</h2>
            <div className="video__inner">
                {itText.map((video, key) => (
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

export default IT