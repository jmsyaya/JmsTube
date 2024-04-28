import React from 'react'
import Main from '../components/section/Main'

import { StreamerText } from '../data/streamer'
import { Link } from 'react-router-dom'

const Streamer = () => {
    return (
        <Main
            title = "👑 추천 스트리머"
            description="추천 스트리머 페이지입니다."
        >
            <section id='streamerPage'>
                <h2>👫 추천 스트리머를 소개합니다.</h2>
                <div className="streamer__inner">
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
        </Main>
    )
}

export default Streamer