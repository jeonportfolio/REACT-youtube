import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'


import { portfolioText } from '../data/portfolio'
import VideoCard from '../components/video/VideoCard'

const Port = () => {

    const [loading, setLoding] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoding(false);
        }, 300)
    },[]);

    const portPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "AWS 사이트"
            description="AWS 강의입니다.">
            
            <section id='portPage' className={portPageClass}>
                    <h2>🤗 AWS 강의영상</h2>
                    <div className="video__inner">
                        <VideoCard videos={portfolioText} />
                    </div>
            </section>
        </Main>
    )
}

export default Port
