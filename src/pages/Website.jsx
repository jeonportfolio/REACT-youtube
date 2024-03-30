import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCard from '../components/video/VideoCard'
import { websiteText } from '../data/website'



const Website = () => {

    const [loading, setLoding] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoding(false);
        }, 300)
    },[]);

    const websitePageClass = loading ? 'isLoading' : 'isLoaded';


    return (
        <Main 
            title = "웹표준 사이트"
            description="웹표준 사이트 튜토리얼 강의입니다.">
            
            <section id='websitePage' className={websitePageClass}>
                <h2>😛 웹사이트</h2>
                <div className='video__inner'>
                    <VideoCard videos={websiteText} />
                </div>
            </section>
        </Main>
    )
}

export default Website
