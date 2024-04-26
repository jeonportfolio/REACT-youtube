import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import VideoSlider from '../components/video/VideoSlider'

import { webdText } from '../data/webd'
import { websiteText } from '../data/website'
import { gsapText } from '../data/gsap'
import { portfolioText } from '../data/portfolio'
import { youtubeText } from '../data/youtube'
import { developerText } from '../data/developer'
import { todayText } from '../data/today'





const Home = () => {
    return (
        <Main 
            title = "JEON's 유튜브"
            description="나만의 유튜브 보기 REACT 사이트">
            
            <Today videos={todayText} id="today" />
            <Developer videos={developerText} title="😪 추천 강의를 소개합니다." id="developer" />
            <VideoSlider videos={webdText} title="😮 웹디자인기능사 필기 포토샵 실기 영상" id="webd" />
            <VideoSlider videos={websiteText} title="😛 컴퓨터활용능력 2급 실기 영상" id="website" />
            <VideoSlider videos={gsapText} title="🤓 SQLD 자격증 독학 영상" id="gsap" />
            <VideoSlider videos={portfolioText} title="🤗 동기부여 영상" id="portfolio" />
            <VideoSlider videos={youtubeText} title="😱 나만의 음악목록" id="youtube" />


        </Main>
    )
}

export default Home
