import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api'

import Main from '../components/section/Main'

import { CiBadgeDollar } from "react-icons/ci";
import { CiMedal } from "react-icons/ci";
import { CiRead } from "react-icons/ci";
import VideoSearch from '../components/video/VideoSearch';

const Channel = () => {
    const { channelId } = useParams();
    const [ channelDetail, setChannelDetail ] = useState();
    const [ channelVideo, setChannelVideo ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ nextPageToken, setNextPageToken ] = useState(null);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                  const data = await fetchFromAPI(`channels?part=snippet&id=${channelId}`);
                  setChannelDetail(data.items[0]);
                  console.log(data.items[0])

                  const videosData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet%2Cid&order=date`);
                  setChannelVideo(videosData?.items);//비디오 데이터가 없을때 오류가 날까봐 ? 넣은거임
                  setNextPageToken(videosData?.nextPageToken);

                 
            } catch(error) {
                  console.log('Error fetching data', error)
            } finally {
                  setLoading(false);
            }
        } 
        //비동기 방식 순서대로 작업 x 순서상관없이 async은 싱크를 맞게 해주는것 await는 작업 완료까지 기다려 주는것 
        fetchResults();
    }, [channelId])

    const loadMorevideos = async () => {
      if(nextPageToken) {
          const videosData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet%2Cid&order=date&pageToken=${nextPageToken}`);
          setChannelVideo(prevVideos => [...prevVideos, ...videosData.items]);
          setNextPageToken(videosData?.nextPageToken);
      }
      //nextToken은 다음 페이지까지 계속적으로 넘길 수 있게 해준다.
    }
    const channelPageClass = loading ? 'isLoading' : 'isLoaded';

return (
  <Main 
      title = "유튜브 채널"
      description="유튜브 채널페이지입니다.">
          <section id='channel' className={channelPageClass}>
                {channelDetail && (   //channelDetail이 있을때만 실행된다.
                    <div className="channel__inner">
                          <div className='channel__header' style={{ backgroundImage: `url(${channelDetail.brandingSettings.image.bannerExternalUrl})` }}>
                            <div className='circle'>
                                <img src={channelDetail.snippet.thumbnails.high.url} alt={channelDetail.snippet.title} />
                            </div>
                        </div>
                        {/* 콘솔창에서 가져오는것 snippet, thumnails 해당정보들이 들어있다. */}
                        <div className='channel__info'>
                            <h3 className='title'>{channelDetail.snippet.title}</h3>
                            <p className='desc'>{channelDetail.snippet.description}</p>
                            <div className='info'>
                                <span><CiBadgeDollar />{channelDetail.statistics.subscriberCount}</span>
                                <span><CiMedal />{channelDetail.statistics.videoCount}</span>
                                <span><CiRead />{channelDetail.statistics.viewCount}</span>
                            </div>
                        </div>
                        <div className="channel__video video__inner search">
                            <VideoSearch videos={channelVideo}/>
                        </div>
                        <div className="channel__more">
                              {nextPageToken && <button onClick={loadMorevideos}>더보기+</button>}
                        </div>
                    </div>
                )}

          </section>
  </Main>
)
}


export default Channel