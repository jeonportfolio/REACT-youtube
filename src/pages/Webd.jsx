import React, { useEffect, useState } from 'react'

import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'

import { webdText } from '../data/webd'

const Webd = () => {

    const [loading, setLoding] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoding(false);
        }, 300)
    },[]);

    const webdClass = loading ? 'isLoading' : 'isLoaded';


    return (
        <Main 
            title = "웹디자인 기능사"
            description="웹디자인 기능사 튜토리얼 강의입니다.">
            
                <section id='webPage' className={webdClass}>
                    <h2>웹디자인기능사 실기</h2>
                    <div className="video__inner">
                        <VideoCard videos={webdText} />
                    </div>
                 </section>
        </Main>
    )
}

export default Webd
