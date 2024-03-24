import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import Webd from '../components/contents/Webd'
import Website from '../components/contents/Website'
import Gsap from '../components/contents/Gsap'
import Portfolio from '../components/contents/Portfolio'
import Youtube from '../components/contents/Youtube'



const Home = () => {
  return (
     <Main 
        title="Jeon's 유튜브" 
        description="자신이 원하는 영상만 골라보는 사이트입니다."
     >
            <Today />
            <Developer />
            <Webd />
            <Website/>
            <Gsap />
            <Portfolio/>
            <Youtube/>

     </Main>
  )
}

export default Home