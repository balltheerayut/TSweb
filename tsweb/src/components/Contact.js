import React, { useState, useContext } from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { ThemeContext } from "../ThemeContext"; // ใช้ context เพื่อดึง darkMode

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name, "Email:", email);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "65vh" }}>
      <Typography variant="h2" sx={{ mb: 2 }}>
        Contact Me
      </Typography>

      <IconButton sx={{ backgroundColor: darkMode ? "#555" : "#000066", color: "#fff", padding: "16px", borderRadius: "50%", mb: 2 }}>
        <EmailIcon fontSize="large" />
      </IconButton>

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
          onClick={handleSubmit}
          sx={{
            width: "300px",
            backgroundColor: darkMode ? "#555" : "#000066",
            color: "#fff",
            "&:hover": {
              backgroundColor: darkMode ? "#444" : "#000099"
            }
          }}
        >
          Send Message
        </Button>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <IconButton
          href="https://www.instagram.com/b.3rayut/"
          target="_blank"
          sx={{
            backgroundColor: "#000066",
            color: "#fff",
            padding: "12px",
            borderRadius: "50%",
            "&:hover": { backgroundColor: "#333" }
          }}
        >
          <InstagramIcon fontSize="large" />
        </IconButton>

        <IconButton
          href="https://www.facebook.com/Ballcraft.kung/"
          target="_blank"
          sx={{
            backgroundColor: "#3b5998",
            color: "#fff",
            padding: "12px",
            borderRadius: "50%",
            "&:hover": { backgroundColor: "#333" }
          }}
        >
          <FacebookIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Contact;
