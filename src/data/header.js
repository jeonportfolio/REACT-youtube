import { CiBaseball } from "react-icons/ci";
import { CiCoins1 } from "react-icons/ci";
import { CiBoxes } from "react-icons/ci";
import { CiBullhorn } from "react-icons/ci";
import { CiCoffeeCup } from "react-icons/ci";
import { CiDumbbell } from "react-icons/ci";
import { CiFries } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { SiNaver } from "react-icons/si";
import { AiOutlineInstagram } from "react-icons/ai";

export const headerMenus = [
    {
        title: "홈",
        icon: <CiBaseball />,
        src: "/"
    },
    {
        title: "추천 영상",
        icon: <CiMoneyBill />,
        src: "/today"
    },
    {
        title: "추천 관련 강의 채널",
        icon: <CiCoins1 />,
        src: "/developer"
    },
    {
        title: "웹디자인기능사",
        icon: <CiBoxes />,
        src: "/webd"
    },
    {
        title: "컴퓨터활용능력2급",
        icon: <CiBullhorn />,
        src: "/website"
    },
    {
        title: "SQLD",
        icon: <CiCoffeeCup />,
        src: "/gsap"
    },
    {
        title: "AWS 강의",
        icon: <CiDumbbell />,
        src: "/port"
    },
    {
        title: "음악",
        icon: <CiFries />,
        src: "/youtube"
    },
];

export const searchKeyword = [
    {
        title: "SQLD",
        src: "/search/sqld"
    },
    {
        title: "컴퓨터활용능력",
        src: "/search/컴퓨터활용능력"
    },
    {
        title: "웹디자인기능사",
        src: "/search/웹디자인기능사"
    },
    {
        title: "API",
        src: "/search/API"
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
        title: "Node.js",
        src: "/search/node.js"
    },
    {
        title: "소스놀이터",
        src: "/search/소스놀이터"
    },
    {
        title: "SQL",
        src: "/search/sql"
    },
    {
        title: "ASMR",
        src: "/search/asmr"
    },
    {
        title: "동기부여",
        src: "/search/동기부여"
    }
];

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/jeonportfolio/REACT-youtube",
        icon: <AiFillGithub />
    },
    {
        title: "naver",
        url: "https://blog.naver.com/turtleweb",
        icon: <SiNaver/> 
    },
    {
        title: "codepen",
        url: "/",
        icon: <AiOutlineCodepen />
    },
    {
        title: "instagram",
        url: "/",
        icon: <AiOutlineInstagram />
    },
]
