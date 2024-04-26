import { CiFaceSmile } from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";
import { CiMusicNote1 } from "react-icons/ci";
import { CiMedal } from "react-icons/ci";
import { GoThumbsup } from "react-icons/go";
import { IoGameControllerOutline } from "react-icons/io5";
import { PiCrownSimple } from "react-icons/pi";
import { CiDumbbell } from "react-icons/ci";
import { IoCarSportOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { CiHeadphones } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";
import { SiVelog } from "react-icons/si";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";


export const headerMenus = [
    {
        title: "정명식",
        icon: <CiFaceSmile />,
        src: "/"
    },
    {
        title: "인기 영상",
        icon: <CiMedal />,
        src: "/popular"
    },
    {
        title: "추천 영상",
        icon: <GoThumbsup />,
        src: "/today"
    },
    {
        title: "추천 스트리머",
        icon: <PiCrownSimple />,
        src: "/streamer"
    },
    {
        title: "IT 개발",
        icon: <RiComputerLine />,
        src: "/it"
    },
    {
        title: "K-pop",
        icon: <CiMusicNote1 />,
        src: "/kpop"
    },
    {
        title: "Hip-Hop",
        icon: <GiMoneyStack />,
        src: "/hiphop"
    },
    {
        title: "EDM",
        icon: <CiHeadphones />,
        src: "/edm"
    },
    {
        title: "게임",
        icon: <IoGameControllerOutline />,
        src: "/game"
    },
    {
        title: "운동",
        icon: <CiDumbbell />,
        src: "/sport"
    },
    {
        title: "Car",
        icon: <IoCarSportOutline />,
        src: "/car"
    },
];

export const searchKeyword = [
    {
        title: "Playlist",
        src: "/search/Playlist"
    },
    {
        title: "HTML",
        src: "/search/html"
    },
    {
        title: "CSS",
        src: "/search/css"
    },
    {
        title: "JavaScript",
        src: "/search/javascript"
    },
    {
        title: "React.js",
        src: "/search/react.js"
    },
    {
        title: "Vue.js",
        src: "/search/vue.js"
    },
    {
        title: "Next.js",
        src: "/search/next.js"
    },
    {
        title: "Node.js",
        src: "/search/node.js"
    },
    {
        title: "SQL",
        src: "/search/sql"
    },
    {
        title: "portfolio",
        src: "/search/React Portfolio"
    },
    {
        title: "music",
        src: "/search/NewJeans"
    }
];

export const snsLink = [
    {
        title: "Github",
        url: "https://github.com/jmsyaya",
        icon: <AiFillGithub />
    },
    {
        title: "Youtube",
        // url: "https://www.youtube.com/",
        icon: <AiFillYoutube />
    },
    {
        title: "Velog",
        url: "https://velog.io/@jmsyaya",
        icon: <SiVelog />
    },
    {
        title: "Instagram",
        url: "https://www.instagram.com/s_soezz",
        icon: <AiOutlineInstagram />
    },
]
