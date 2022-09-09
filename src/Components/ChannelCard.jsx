import React from "react";

import { Box, CardContent, CardMedia, Typography } from "@mui/material";

import { CheckCircle } from "@mui/icons-material";

import { Link } from "react-router-dom";

import { demoProfilePicture } from "../Utilities/constants";

const ChannelCard = ({ channelDetail, marginTop }) => (
  <Box
    sx={{
      boxShadow: "none",
      borderRadius: "20px",
      display: "flex",
      width: { xs: "366px", md: "320px" },
      alignItems: "center",
      margin: "auto",
      height: "326px",
      marginTop
    }}
  >
    <Link to={`/chennel/${channelDetail?.id?.channelId}`}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <CardMedia
          image={
            channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture
          }
          alt={channelDetail?.snippet?.title}
          sx={{
            borderRadius: "50%",
            height: "180px",
            width: "180px",
            mb: 2,
            border: "1px solid #e3e3e3",
          }}
        />
        <Typography variant="h6">
          {channelDetail?.snippet?.title}
          <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
          {/* If subscibers exist then print them in the profile page */}
          {parseInt(
            channelDetail?.statistics?.subsciberCount
          ).toLocaleString()}{" "}
          Subscibers
        </Typography>
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;
