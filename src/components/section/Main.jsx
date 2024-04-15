import React from 'react'

import Header from './Header'
import Footer from './Footer'
import { Helmet, HelmetProvider } from 'react-helmet-async'


const Main = (props) => {
    return (
        <HelmetProvider>
            <Helmet 
                titleTemplate="%s | Jms YouTube"        // 페이지 타이틀의 템플릿을 설정/ %s는 나중에 실제 타이틀로 대체
                defaultTitle="Jms YouTube"       // 기본 타이틀을 설정. 페이지 타이틀이 없는 경우 사용
                defer={false}      // true로 설정하면 렌더링 전까지 <Helmet> 컴포넌트가 기다림.
            >
                {props.title && <title>{props.title}</title>}
                <meta name="description" content={props.description} />
            </Helmet>

            <Header />
            <main id="main" role="main">
                {props.children}  
            </main>
            <Footer />

        </HelmetProvider>
    )
}

export default Main

// props.children으로 App.js 안에 각 자식 페이지들 데이터 받아오기. 
// SEO는 "Search Engine Optimization"의 약어로, 검색 엔진 최적화를 의미 