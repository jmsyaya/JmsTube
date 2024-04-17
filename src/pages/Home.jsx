import React from 'react'
import Main from '../components/section/Main'
import Popular from '../components/contents/Popular'
import Today from '../components/contents/Today'
import Streamer from '../components/contents/Streamer'
import Kpop from '../components/contents/Kpop'
import Hiphop from '../components/contents/Hiphop'
import Game from '../components/contents/Game'


const Home = () => {
    return (
        <Main 
            title = "정명식 유튜브"
            description="정명식 유튜버 사이트에 오신 것을 환영합니다."
        >
            <Popular />
            <Today />
            <Streamer />
            <Kpop />
            <Hiphop />
            <Game />
        </Main>
    )
}

export default Home