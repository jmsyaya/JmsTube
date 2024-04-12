import React from 'react'

import { CiFaceSmile } from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";
import { CiMusicNote1 } from "react-icons/ci";
import { CiMedal } from "react-icons/ci";
import { GoThumbsup } from "react-icons/go";
import { IoGameControllerOutline } from "react-icons/io5";
import { PiCrownSimple } from "react-icons/pi";

import { AiFillGithub } from "react-icons/ai";
import { SiVelog } from "react-icons/si";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";



const Header = () => {
  return (
        <header id='header' role='banner'>
            <h1 className='header__logo'>
              <a href="/">
                <em aria-hidden='true'><em2 aria-hidden='true'><AiFillYoutube/></em2></em>   
                <span>MyeongSik<br/>Youtube</span>
              </a>
            </h1>
            
            <nav className='header__menu'>
                <ul className='menu'>
                  <li className='active'>
                    <a href='/'><CiFaceSmile />정명식</a>
                  </li>
                  <li>
                    <a href='/popular'><CiMedal />인기 영상</a>
                  </li>
                  <li>
                    <a href='/today'><GoThumbsup />추천 영상</a>
                  </li>
                  <li>
                    <a href='/streamer'><PiCrownSimple />추천 스트리머</a>
                  </li>
                  <li>
                    <a href='/kpop'><CiMusicNote1 />K-pop</a>
                  </li>
                  <li>
                    <a href='/hiphop'><GiMoneyStack />힙합 플레이리스트</a>
                  </li>
                  <li>
                    <a href='/game'><IoGameControllerOutline />게임</a>
                  </li>
                </ul>
                <ul className='keyword'>
                    <li>
                        <a href='/search/webstoryboy'>webstoryboy</a>
                    </li>
                    <li>
                        <a href='/search/html'>HTML</a>
                    </li>
                    <li>
                        <a href='/search/css'>CSS</a>
                    </li>
                    <li>
                        <a href='/search/javascript'>JavaScript</a>
                    </li>
                    <li>
                        <a href='/search/react.js'>React.js</a>
                    </li>
                    <li>
                        <a href='/search/vue.js'>Vue.js</a>
                    </li>
                    <li>
                        <a href='/search/next.js'>Next.js</a>
                    </li>
                    <li>
                        <a href='/search/node.js'>Node.js</a>
                    </li>
                    <li>
                        <a href='/search/sql'>SQL</a>
                    </li>
                    <li>
                        <a href='/search/React Portfolio'>portfolio</a>
                    </li>
                    <li>
                        <a href='/search/NewJeans'>music</a>
                    </li>
                </ul>
                </nav>

            <div className='header__sns'>
                <ul>
                    <li>
                        <a href='https://github.com/jmsyaya' rel='noopener noreferrer'>
                            <AiFillGithub />
                        </a>
                    </li>
                    <li>
                        <a href='/' rel='noopener noreferrer'>
                            <AiFillYoutube />
                        </a>
                    </li>
                    <li>
                        <a href='https://velog.io/@jmsyaya' rel='noopener noreferrer'>
                            <SiVelog />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/s_soezz' rel='noopener noreferrer'>
                            <AiOutlineInstagram />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
  )
}

export default Header

// rel='noopener noreferrer' : 개인정보 및 웹 페이지 보안