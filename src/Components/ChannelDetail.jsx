//Personal Channel Profile Page 
//Bug > channel card is noit displaying

import React from 'react'; 

import { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom'; 
import { Box } from '@mui/material'; 

import { Videos } from '../Components';
import { fetchFromAPI } from '../Utilities/fetchFromAPI';

const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null); 
  const [videos, setVideos] = useState([]); 
  const { id } = useParams(); 

  useEffect(() => { 

    fetchFromAPI(`channels?part="smippet&id=${id}`)
    .then((data) => setChannelDetail(data?.item[0]));
    
    fetchFromAPI(`search?channelId=${id}&part="snippet&order=date`)
    .then((data) => setVideos(data?.items));

  }, [id])

  return (
    <Box>
      <Box>
      <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />

        <ChannelDetail channeDetail={channelDetail} marginTop="-110px" /> 
      </Box>

      <Box display='flex' p="2">
        <Box sx={{ mr:{ sm: '100px'}}} />
          <Videos videos={ videos } />
      </Box>
    </Box>
  )
}

export default ChannelDetail