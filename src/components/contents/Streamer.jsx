import React from 'react'

import { StreamerText } from '../../data/streamer'
import { Link } from 'react-router-dom'

const Streamer = () => {
    return (
        <section id='streamer'>
            <h2>👫 추천 스트리머를 소개합니다.</h2>
            <div className="streamer__inner overflow">
                {StreamerText.map((streamer, key) => (
                    <div className="streamer" key={key}>
                        <div className="streamer__img play__icon">
                            <Link to={`/channel/${streamer.channelId}`}>
                                <img src={streamer.img} alt={streamer.name} />
                            </Link>
                        </div>
                        <div className="streamer__info">
                        <Link to={`/channel/${streamer.channelId}`}>
                            {streamer.name}
                        </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Streamer