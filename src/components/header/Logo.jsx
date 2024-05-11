import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillYoutube } from "react-icons/ai";

const Logo = ({ toggleMenu }) => {
    return (
    <h1 className='header__logo'>
            <Link to='/'>
                <em aria-hidden='true' onClick={toggleMenu}>
                    <em2 aria-hidden='true' onClick={toggleMenu}><AiFillYoutube/></em2>
                </em>   
                <span>MyeongSik<br/>Youtube</span>
            </Link>
            </h1>
    )
}

export default Logo