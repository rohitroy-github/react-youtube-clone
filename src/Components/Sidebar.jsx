// Sidebar Component

import React from 'react'

// Importing Stack wrapper from MUI
import { Stack } from '@mui/material'; 

// Importing categories object from Utilities
import { categories } from '../Utilities/constants';

const Sidebar = () => {
  return (
    <Stack direction="row" 
    sx={{ overflowY: "auto", height: { sx: 'auto', md: '95%' }, flexDirection: {md: 'column'}, }}>
        {categories.map((category) => ( 
            <button className='category-btn'
            style={{ 
                background: category.name === selectedCategory && '#FC1503', color: 'white'
            }} 
            key={category.name}
            > 
                <span>{category.icon}</span>
                <span>{category.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default Sidebar