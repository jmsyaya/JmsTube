import React, { useState } from 'react'


import Logo from '../header/Logo'
import Menu from '../header/Menu'
import Sns from '../header/Sns'


const Header = () => {
    const [ isMenuActive, setIsMenuActive] = useState(false);

    const toggleMenu = () => {      // 토글 메뉴
        setIsMenuActive(!isMenuActive);
    }

    return (
        <header id='header' role='banner' className={isMenuActive ? 'active' : ''}>
            <Logo toggleMenu={toggleMenu} /> 
            <Menu />
            <Sns />
        </header>
    )
}

export default Header

// rel='noopener noreferrer' : 개인정보 및 웹 페이지 보안