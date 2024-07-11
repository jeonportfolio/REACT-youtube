import React from 'react'

import { gsapText } from '../../data/gsap'
import { Link } from 'react-router-dom'

const Gsap = () => {
    return (
        <section id='gsap'>
            <h2>🤓 SQLD 이론 및 기출문제 해설영상!</h2>
            <div className='video__inner'>
                {gsapText.map((video, key) => (
                    <div className="video" key={key}>
                        <div className="video__thumb play__icon">
                            <Link to={`/video/${video.videoId}`}>
                                <img src={video.img} alt={video.title} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Gsap
