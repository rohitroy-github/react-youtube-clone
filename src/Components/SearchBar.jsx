//Search Bar Component

import React from "react";

//Importing Hooks
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

//Importing some MUI Components
import { Paper, IconButton } from "@mui/material";

//Importing Search Icon
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      {/* Paper component = Basically a <div> with a white background seems like a paper
      pl=paddingLeft
      mr=marginRight
      mr:{sm}=onlyForSmallDevices */}

      <input
        className="search-bar"
        placeholder="Search ..."
        value=""
        onChange={() => {}}
      />

      {/* MUI Icon Button */}
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>

        {/* MUI Search Icon */}
        <Search />
      </IconButton>

    {/* End of Paper component */}
    </Paper>
  );
};

export default SearchBar;
