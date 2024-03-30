import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCard from '../components/video/VideoCard'
import { youtubeText } from '../data/youtube'


const Youtube = () => {

    const [loading, setLoding] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoding(false);
        }, 300)
    },[]);

    const youtubePageClass = loading ? 'isLoading' : 'isLoaded';


    return (
        <Main 
            title = "유튜브 사이트"
            description="유튜브 사이트 튜토리얼 강의입니다.">
            
            <section id='youtubePage' className={youtubePageClass}>
                <h2>😱</h2>
                <div className='video__inner'>
                    <VideoCard videos={youtubeText} />
                </div>
            </section>
        </Main>
    )
}

export default Youtube
