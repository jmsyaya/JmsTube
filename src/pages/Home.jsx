import React from 'react'
import Main from '../components/section/Main'
// import Popular from '../components/contents/Popular'
import Today from '../components/contents/Today'
import Streamer from '../components/contents/Streamer'
import VideoSlider from '../components/video/VideoSlider'

import { itText } from '../data/IT'
import { kpopText } from '../data/kpop'
import { hiphopText } from '../data/hiphop'
import { edmText } from '../data/edm'
import { gameText } from '../data/game'
import { sportText } from '../data/sport'
import { carText } from '../data/car'
import { StreamerText } from '../data/streamer'
import { todayText } from '../data/today'

const Home = () => {
    return (
        <Main 
            title = "정명식 유튜브"
            description="정명식 유튜버 사이트에 오신 것을 환영합니다."
        >
            <Today videos={todayText} id='today' />
            <Streamer videos={StreamerText} title='👫 추천 스트리머를 소개합니다.' id='streamer' />
            <VideoSlider videos={itText} title='💻 IT개발 영상은 이걸로!' id='it' />
            <VideoSlider videos={kpopText} title='🎵 오늘 하루 K-pop 어떠세요?' id='kpop' />
            <VideoSlider videos={hiphopText} title='💵 달고 달디단 밤양갱 갱 갱 Hip-hop 듣자!' id='hiphop' />
            <VideoSlider videos={edmText} title='🎧 오늘 밤 강남? 홍대? 방구석 클럽 드가자!!' id='edm' />
            <VideoSlider videos={gameText} title='🕹️ 게임만 하고나면 시간이 순-삭.. 재밌는걸?' id='game' />
            <VideoSlider videos={sportText} title='🏋️‍♂️ 회원님. 오늘 풀업 10sets, 렛풀다운 10sets, 바벨로우 10sets, 데드리프트 10sets 가능하시죠~?' id='sport' />
            <VideoSlider videos={carText} title='🚗 남자의 심금을 울리는 자동차.. "야, 타!"' id='car' />
        </Main>
    )
}

export default Home