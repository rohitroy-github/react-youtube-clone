// Sidebar Component

import React from "react";

// Importing Stack wrapper from MUI
import { Stack } from "@mui/material";

// Importing categories object from Utilities
import { categories } from "../Utilities/constants";

// const selectedCategory = "New";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"

          // using the UseState to update the names once a category is clicked
          onClick={() => setSelectedCategory(category.name)}

          style={{
            background: category.name === selectedCategory && "#FC1503",
            color: "white",
            // if button is selected > #FC1503 else > white color
          }}
          key={category.name}
        >
          <span
            style={{
              // Conditional styling
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              // Conditional styling
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
