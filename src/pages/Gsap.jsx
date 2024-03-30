import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCard from '../components/video/VideoCard'
import { gsapText } from '../data/gsap'

const Gsap = () => {

    const [loading, setLoding] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoding(false);
        }, 300)
    },[]);

    const gsapPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "GSAP 사이트"
            description="GSAP 사이트 튜토리얼 강의입니다.">
            
            <section id='webPage' className={gsapPageClass}>
                    <h2>🤓 GSAP 패럴랙스</h2>
                    <div className="video__inner">
                        <VideoCard videos={gsapText} />
                    </div>
                 </section>
        </Main>
    )
}

export default Gsap
