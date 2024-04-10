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
            title = "컴퓨터활용능력 2급"
            description="컴퓨터활용능력 2급 강의입니다.">
            
            <section id='websitePage' className={websitePageClass}>
                <h2>😛 컴퓨터활용능력 2급</h2>
                <div className='video__inner'>
                    <VideoCard videos={websiteText} />
                </div>
            </section>
        </Main>
    )
}

export default Website
