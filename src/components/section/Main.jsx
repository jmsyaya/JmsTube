import React from 'react'

import Header from './Header'
import Footer from './Footer'


const Main = (props) => {
    return (
        <>
            <Header />
            <main id="main" role="main">
                {props.children}  
            </main>
            <Footer />
        </>
    )
}

export default Main

// props.children으로 App.js 안에 각 자식 페이지들 데이터 받아오기. 