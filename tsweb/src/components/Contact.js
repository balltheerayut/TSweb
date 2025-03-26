import React, { useState } from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";  // ไอคอน Instagram
import FacebookIcon from "@mui/icons-material/Facebook";    // ไอคอน Facebook

const Contact = () => {
  // สร้าง state สำหรับเก็บข้อมูลที่กรอกในฟอร์ม
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // ที่นี่สามารถนำข้อมูลไปใช้งาน เช่น ส่งข้อมูลไปยังเซิร์ฟเวอร์
    console.log("Name:", name, "Email:", email);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Contact Me
      </Typography>

      {/* ฟอร์มติดต่อ */}
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, mb: 3 }}>
        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ width: "300px" }}
        />
        <TextField
          label="Your Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ width: "300px" }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ width: "300px" }}
        >
          Send Message
        </Button>
      </Box>

      {/* ใช้ Flexbox จัดตำแหน่งไอคอนข้างๆ กัน */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        {/* Instagram Link */}
        <IconButton
          href="https://www.instagram.com/b.3rayut/"
          target="_blank"
          sx={{
            backgroundColor: "#000066", 
            color: "#fff", 
            padding: "12px", 
            borderRadius: "50%", 
            "&:hover": {
              backgroundColor: "#333"
            }
          }}
        >
          <InstagramIcon fontSize="large" />
        </IconButton>

        {/* Facebook Link */}
        <IconButton
          href="https://www.facebook.com/Ballcraft.kung/"
          target="_blank"
          sx={{
            backgroundColor: "#3b5998", // สีพื้นหลังของ Facebook
            color: "#fff", 
            padding: "12px", 
            borderRadius: "50%", 
            "&:hover": {
              backgroundColor: "#333"
            }
          }}
        >
          <FacebookIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Contact;
