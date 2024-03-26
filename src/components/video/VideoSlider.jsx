import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';


//today와 developer를 제외한 다섯개가 반복적인 코딩이기 때문에 재활용 하기위해 만들어준 페이지
const VideoSlider = ({ id, title, videos }) => {

    //로딩에 관한 것 loading은 변수 setloding은 작동했을때 나타나는 값 우선 true로 설정해주고 useEffect에서 
    //0.5초 뒤에 false처리 해준다 -> 0,5초 후에 isLoaded로 바뀜 

    const[loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        },500)
    },[]);

    const videoClass = loading ? 'isLoading' : "isLoaded";

    
    return (
        <section id={id} className={videoClass}>
            <h2>{title}</h2>
            <div className='video__slider'>
                <Swiper 
                        slidesPerView={1}
                        spaceBetween={20}
                        navigation={true} 
                        modules={[Navigation]} 
                        className={`mySwiper-${id}`}
                        breakpoints={{
                            
                            640:{
                                slidesPerView:2,
                                spaceBetween:20
                            },

                            768:{
                                slidesPerView:3,
                                spaceBetween:20
                            },
                            
                            1024:{
                                slidesPerView:4,
                                spaceBetween:20
                            },
                            
                            1600:{
                                slidesPerView:4,
                                spaceBetween:20
                            }
                        }}
                >
                        {videos.map((video, key) => (
                            <SwiperSlide key={key}>
                                <div className="video" key={key}>
                                    <div className="video__thumb play__icon">
                                        <Link to={`/video/${video.videoId}`}>
                                            <img src={video.img} alt={video.title} />
                                        </Link>
                                    </div>
                                </div>
                             </SwiperSlide>   
                        ))}
                </Swiper>
            </div>
        </section>
    )
}

export default VideoSlider