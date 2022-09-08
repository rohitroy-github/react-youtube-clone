import axios from 'axios'; 

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  // method: 'GET',
  url: BASE_URL,
  params: {
    // q: 'music',
    // part: 'snippet,id',
    // regionCode: 'US',
    maxResults: '50',
    order: 'date'
  },
  headers: {    
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

  // Functional to make API call along with a dynamic URL from any component of the React app
  export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
  };