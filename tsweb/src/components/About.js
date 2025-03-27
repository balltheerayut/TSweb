import React from "react";
import { Box, Typography } from "@mui/material";
import myImage from "../assets/B.jpg";  // นำเข้ารูปจากโฟลเดอร์ assets

const About = () => {
  return (
    <Box sx={{ textAlign: "center", mt: 6 }}>
      <Typography variant="h3" sx={{ mb: 3 }}>
        About Me
      </Typography>

      {/* แสดงรูปภาพ */}
      <img
        src={myImage}
        alt="My Profile"
        style={{
          width: "250px", // ปรับขนาดของรูปภาพ
          height: "250px",
          borderRadius: "40px", // ให้มุมของรูปโค้งมน
          objectFit: "cover", // ทำให้รูปมีขนาดพอดี
        }}
      />
    </Box>
  );
};

export default About;
