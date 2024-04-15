import React from 'react'


import Logo from '../header/Logo'
import Menu from '../header/Menu'
import Sns from '../header/Sns'


const Header = () => {
    return (
        <header id='header' role='banner'>
            <Logo /> 
            <Menu />
            <Sns />
        </header>
    )
}

export default Header

// rel='noopener noreferrer' : 개인정보 및 웹 페이지 보안
// map() 함수 사용
// useLocation() 사용