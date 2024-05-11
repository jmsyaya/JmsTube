import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Main from '../components/section/Main'
import VideoSearch from '../components/video/VideoSearch'
import { fetchFromAPI } from '../utils/api'

const Search = () => {
    const { searchId } = useParams();
    const [ videos, setVideos ] = useState([]);
    const [ nextPageToken, setNextPageToken ] = useState(null);
    const [loading, setLoading] = useState(true);


    // --YoutubeAPI--
    // useEffect(() => {
    //     fetch(
    //         `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${searchId}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
    //     )
    //     .then(response => response.json())
    //     .then(result => {
    //         console.log(result);
    //         setVideos(result.items)
    //     })
    //     .catch(error => console.log(error));
    //     }, [searchId]);

    // --RapidAPI--
    useEffect(() => {
        setVideos([]);
        fetchVideos(searchId);
        setLoading(true);
    }, [searchId]);

    const fetchVideos = (query, pageToken ='') => {
        fetchFromAPI(`search?part=snippet&type=video&q=${query}&pageToken=${pageToken}`)
        .then((data) => {
            setNextPageToken(data.nextPageToken);
            setVideos((preVideos) => [...preVideos, ...data.items]);
            setLoading(false);
        })
        .catch((error) => {
            console.log('Error fetching data', error);
            setLoading(false);
        })
    }

    const handleLoadMore = () => {
        if (nextPageToken) {
            fetchVideos(searchId, nextPageToken);
        }
    };

    const searchPageClass = loading ? 'is-loading' : 'is-loaded';

    return (
        <Main
            title = "🔎 유튜브 검색"
            description="유튜브 검색 결과 페이지입니다."
        >
            <section id='searchPage' className={searchPageClass}>
            <h2>🔎 <em>{searchId}</em> 검색 결과입니다.</h2>
                <div className="video__inner search">
                    <VideoSearch videos={videos} />
                </div>
                <div className='video__more'>
                    {nextPageToken && (
                        <button onClick={handleLoadMore}>더 보기</button>
                    )}
                </div>
            </section>
        </Main>
    )
}

export default Search