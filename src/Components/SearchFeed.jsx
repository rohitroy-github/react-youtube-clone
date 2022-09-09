//Search Bar

import React from "react";

//Importing Hooks
import { useState, useEffect } from "react";

//Importing MUI Components
import { Box, Typography } from "@mui/material";

//Importing Sidebar Component
import { Videos } from "../Components";

//Importing API call module
import { fetchFromAPI } from "../Utilities/fetchFromAPI";

import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);

  const { searchTerm } = useParams();

  // Using a UseEffect hook to display api data as soon as the component loads
  useEffect(() => {
    // setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      //exctracting data
      .then((data) => setVideos(data.items));
  }, [searchTerm]);

  return (
    <Box p={2} sc={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search results for {searchTerm} <span style={{ color: "#F31503" }}>videos</span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
