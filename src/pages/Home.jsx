import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import VideoSlider from '../components/video/VideoSlider'
import { webdText } from '../data/webd'
import { websiteText } from '../data/website'
import { gsapText } from '../data/gsap'
import { portfolioText } from '../data/portfolio'
import { youtubeText } from '../data/youtube'

import { todayText } from '../data/today'





const Home = () => {
    return (
        <Main 
            title = "MY STUDY 유튜브"
            description="각종 자기개발 유튜브 영상 보기 REACT 사이트">
            
            <Today videos={todayText} id="today" />
            <VideoSlider videos={webdText} title="😮 웹디자인기능사 필기 포토샵 실기 영상" id="webd" />
            <VideoSlider videos={websiteText} title="😛 컴퓨터활용능력 2급 실기 영상" id="website" />
            <VideoSlider videos={gsapText} title="🤓 SQLD 자격증 독학 영상" id="gsap" />
            <VideoSlider videos={portfolioText} title="🤗 AWS 강의" id="portfolio" />
            <VideoSlider videos={youtubeText} title="😱 나만의 음악목록" id="youtube" />
            

        </Main>
    )
}

export default Home
