import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Main from '../components/section/Main'
import VideoSearch from '../components/video/VideoSearch'
import { fetchFromAPI } from '../utils/api'

const Search = () => {
    const {searchId} = useParams();
    const [ videos, setVideos ] = useState([]);
    const [ nextPageToken, setNextPageToken ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        setVideos([]);
        fetchVideos(searchId);
        setLoading(true);
    }, [searchId]);

    const fetchVideos = (query, pageToken = '') => {
        fetchFromAPI(`search?part=snippet&q=${query}&pageToken=${pageToken}`) //query에는 searchId의 값이 들어간다. 
            .then((data) => {
                setNextPageToken(data.nextPageToken);//콘솔창에 보면 nextpageToken이 있는데 이 토큰값을 입력하면 다음 데이터 볼 수 있다.
                setVideos((preVideos) => [...preVideos, ...data.items]);
                setLoading(false); //데이터를 아직 받고 있으니까 false임
            })
            .catch((error) => {
                console.log('Error fetching data', error);
                setLoading(false);
            })
    }

    const handleLoadMore = () => {
        if(nextPageToken){
            fetchVideos(searchId, nextPageToken);
        }
    }

    const searchPageClass = loading ? 'isLoding': 'isLoaded';

    return (
        <Main 
            title = "유튜브 검색"
            description="유튜브 검색 결과 페이지입니다.">
                    <section id='searchPage' className={ searchPageClass }>
                        <div className="video__inner search">
                           <VideoSearch videos={videos}/>
                        </div>
                        <div className='video__more'>
                            {nextPageToken && (
                                <button onClick={handleLoadMore}>더보기++</button>
                            )}
                        </div>
                    </section>
        </Main>
    )
}

export default Search
