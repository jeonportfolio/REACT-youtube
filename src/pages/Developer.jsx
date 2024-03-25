import React from 'react'
import Main from '../components/section/Main'

import {developerText} from '../data/developer'
import { Link } from 'react-router-dom'

const Developer = () => {
    return (
        <Main 
            title = "추천 개발자"
            description="오늘의 추천 개발자 유튜버입니다.">
            
            <section id='developerPage'>
                    <h2>😪추천 채널을 소개합니다!</h2>
                         <div className='developer__inner '> 
                                                {/* 페이지 부분에서는 overflow hidden 지워줘야 개발자 목록 다나온다. */}
                               {developerText.map((developer, key) => (
                                     <div className='developer' key={key}>
                                         <div className="developer__img play__icon">
                                             <Link to={`/channel/${developer.channelId}`}>
                                                 <img src={developer.img} alt={developer.name}/> 
                                             </Link>                             
                                         </div>
                                         <div className="developer__info">
                                              <Link to={`/channel/${developer.channelId}`}>  
                                                  {developer.name}
                                               </Link>
                                         </div>

                                     </div>
                               ))}
                         </div>
            </section>
        </Main>
    )
}

export default Developer
