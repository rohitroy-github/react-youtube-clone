// Feed Component 
// Conatins={ 
//   LeftSide = Category Panel 
//   RightSide = Video Conatainer/ Video Feed
// }

import React from 'react'

//Importing Hooks
import { useState, UseEffect } from "react";

//Importing MUI Components
import { Box, Stack, Typography } from '@mui/material'; 

//Importing Sidebar Component 
import Sidebar from './Sidebar'; 

const Feed = () => {
  return (
    // Stack will be wrapping the entire feed section both LeftSide and RightSide
    <Stack sx={{ flexDirection: { sx: "column", md: "row" }}}>
      {/* sx=byDefault > coulmn 
      md=mediumDevices > row */}

      <Box sx={{ height: { sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 }}}>
        <Sidebar /> 

      {/* Typography component is used for all kinds of text feilds like <h>,<p> */}
      <Typography classname="copyright"
      variant="body2" sx={{ mt: 1.5, color: '#fff' }}>
        Copyright Text
      </Typography>
      </Box>
    </Stack>
  )
}

export default Feed;