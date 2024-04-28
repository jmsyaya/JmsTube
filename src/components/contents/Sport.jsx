import React from 'react'
import { sportText } from '../../data/sport'
import { Link } from 'react-router-dom'

const Sport = () => {
    return (
        <section id='sport'>
            <h2>🏋️‍♂️ 회원님. 오늘 풀업 10sets, 렛풀다운 10sets, 바벨로우 10sets, 데드리프트 10sets 가능하시죠~? </h2>
            <div className="video__inner">
                {sportText.map((video, key) => (
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

export default Sport