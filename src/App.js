import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/section/Main'

const Home = lazy(() => import('./pages/Home'));
const Today = lazy(() => import('./pages/Today'));
const Kpop = lazy(() => import('./pages/Kpop'));
const Hiphop = lazy(() => import('./pages/Hiphop'));
const Game = lazy(() => import('./pages/Game'));
const Popular = lazy(() => import('./pages/Popular'));
const Streamer = lazy(() => import('./pages/Streamer'));
const Youtube = lazy(() => import('./pages/Youtube'));
const Channel = lazy(() => import('./pages/Channel'));
const Video = lazy(() => import('./pages/Video'));
const Search = lazy(() => import('./pages/Search'));
const Not = lazy(() => import('./pages/Not'));


// 페이지 집합
const App = () => {
    return (
        <BrowserRouter>
        <Suspense fallback={<Main/>}>
            <Routes> 
                <Route path='/' element={<Home/>} />
                <Route path='/today' element={<Today/>} />
                <Route path='/kpop' element={<Kpop/>} />
                <Route path='/hiphop' element={<Hiphop/>} />
                <Route path='/game' element={<Game/>} />
                <Route path='/popular' element={<Popular/>} />
                <Route path='/streamer' element={<Streamer/>} />
                <Route path='/youtube' element={<Youtube/>} />
                <Route path='/channel/:channelId' element={<Channel/>} />
                <Route path='/video/:videoId' element={<Video/>} />
                <Route path='/search/:searchId' element={<Search/>} />
                <Route path='*' element={<Not/>} />
            </Routes>
        </Suspense>
        </BrowserRouter>
    )
}

export default App

// React.Suspense는 React에서 비동기적으로 데이터나 컴포넌트를 불러오는 과정에서 대기 상태를 처리하기 위한 컴포넌트
// lazy() 함수는 코드 스플리팅을 위해 사용되며, 비동기적으로 컴포넌트를 로드
// fallback 속성은 Suspense 컴포넌트에서 로딩 중에 표시할 컴포넌트를 지정