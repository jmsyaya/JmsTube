import axios from "axios";

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
    maxResults: '48',
    },
    headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async(url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}

// Axios는 JavaScript 및 Node.js에서 사용할 수 있는 라이브러리로, HTTP 요청을 간단하게 만들고 처리하는데 도움을 주는 것이 주요 목적입니다. 주로 클라이언트 측 및 서버 측 개발에서 사용됨.
// 간편한 HTTP 요청, 자동 데이터 변환