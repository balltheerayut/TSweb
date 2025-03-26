import React from "react";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Welcome to My Website!
      </Typography>
    </Box>
  );
};

export default Home;
