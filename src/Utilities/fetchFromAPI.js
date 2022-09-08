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
    'X-RapidAPI-Key': '7fa39a4af8mshe87007e05df66ebp1107d1jsn61517b52b797',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

  // Functional to make API call along with a dynamic URL from any component of the React app
  export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
  };