//Search Bar Component

import React from "react";

//Importing Hooks
import { useNavigate } from "react-router-dom";
import { useState } from "react";

//Importing some MUI Components
import { Paper, IconButton } from "@mui/material";

//Importing Search Icon
import { Search } from "@mui/icons-material";

const SearchBar = () => {

  //SearchTerm modification
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate(); 

  //Submit function
  const handleSubmit = (e) => { 

    //Preventing defalut reload feature
    e.preventDefault(); 

    //if SearchTerm available ? 
    if(searchTerm){ 
      navigate(`/search/${searchTerm}`); 

      // Setting seachTerm feild to empty string after search
      setSearchTerm('');
    }
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
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
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
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
