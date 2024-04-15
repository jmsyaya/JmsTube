import React from 'react'

import { AiFillYoutube } from "react-icons/ai";

const Logo = () => {
    return (
    <h1 className='header__logo'>
            <a href="/">
                <em aria-hidden='true'><em2 aria-hidden='true'><AiFillYoutube/></em2></em>   
                <span>MyeongSik<br/>Youtube</span>
            </a>
            </h1>
    )
}

export default Logo