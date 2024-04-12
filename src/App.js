import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Today from './pages/Today'
import Kpop from './pages/Kpop'
import Hiphop from './pages/Hiphop'
import Game from './pages/Game'
import Popolar from './pages/Popolar'
import Streamer from './pages/Streamer'
import Youtube from './pages/Youtube'
import Channel from './pages/Channel'
import Video from './pages/Video'
import Search from './pages/Search'
import Not from './pages/Not'

// 컴포넌트
import Header from './components/section/Header'
import Main from './components/section/Main'
import Footer from './components/section/Footer'


// 페이지 집합
const App = () => {
    return (
        <BrowserRouter>
        <Header/>
        <Main>
            <Routes> 
                <Route path='/' element={<Home/>} />
                <Route path='/today' element={<Today/>} />
                <Route path='/kpop' element={<Kpop/>} />
                <Route path='/hiphop' element={<Hiphop/>} />
                <Route path='/game' element={<Game/>} />
                <Route path='/popular' element={<Popolar/>} />
                <Route path='/streamer' element={<Streamer/>} />
                <Route path='/youtube' element={<Youtube/>} />
                <Route path='/channel/:channelId' element={<Channel/>} />
                <Route path='/video/:videoId' element={<Video/>} />
                <Route path='/search/:searchId' element={<Search/>} />
                <Route path='*' element={<Not/>} />
            </Routes>
        </Main>
        <Footer/>
        </BrowserRouter>
    )
}

export default App