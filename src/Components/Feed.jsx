// Feed Component 
// Conatins={ 
//   LeftSide = Category Panel 
//   RightSide = Video Conatainer/ Video Feed
// }

import React from 'react'

//Importing Hooks
import { useState, useEffect } from "react";

//Importing MUI Components
import { Box, Stack, Typography } from '@mui/material'; 

//Importing Sidebar Component 
import { Sidebar, Videos } from '../Components';

//Importing API call module
import { fetchFromAPI } from '../Utilities/fetchFromAPI';

const Feed = () => {

  // Using UseState to initialize the 'selectedCategory for now
  const [selectedCategory, setSelectedCategory] = useState('New'); 
  const [ videos, setVideos ] = useState([]);

  // Using a UseEffect hook to display api data as soon as the component loads
  useEffect(() => {
    // setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)

    //exctracting data
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    // Stack will be wrapping the entire feed section both LeftSide and RightSide
    <Stack sx={{ flexDirection: { sx: "column", md: "row" }}}>
      {/* sx=byDefault > coulmn 
      md=mediumDevices > row */}

      <Box sx={{ height: { sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 }}}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} /> 

      {/* Typography component is used for all kinds of text feilds like <h>,<p> */}
      <Typography classname="copyright"
      variant="body2" sx={{ mt: 1.5, color: '#fff' }}>
        Copyright Text
      </Typography>
      </Box>

      <Box p={2} sc={{ overflowY: 'auto', height: '90vh', flex: 2}}>
      <Typography variant='h4' fontWeight="bold" mb={2} sx={{ color: 'white' }}> 
        { selectedCategory } <span style={{ color: '#F31503' }}>videos</span>
      </Typography>

      <Videos videos={videos} />
      </Box>

    </Stack>
  )
}

export default Feed;