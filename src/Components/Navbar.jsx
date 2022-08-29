//Navbar component

//Stack is implemented as a row for the Navbar
import { Stack } from '@mui/material'; 

//Link Component for smooth transition of pages 
import { Link } from 'react-router-dom'; 

//Importing Logo from Utilities
import { logo } from '../Utilities/constants';

//Importing SearchBar 
import SearchBar from './SearchBar'; 

import React from 'react';

const Navbar = () => ( 
  <Stack direction="row" alignItems="center" p={2} sx = {{ position :'stciky', background: '#000', top: 0, justifyContent: 'space-between' }}>
    {/* MUI notes > 
    p = padding 
    sx = iniline CSS styling */} 

    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
     
  </Stack>
)

export default Navbar