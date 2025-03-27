import React from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";
import crycatGif from "../assets/crycat.gif"; // นำเข้าไฟล์ crycat.gif
import sound from "../assets/crycat.mp3"; // นำเข้าไฟล์เสียง MP3

const projects = [
  { title: "Web App", url: "https://github.com/balltheerayut/app8-1" },
  { title: "quiz-app", url: "https://github.com/balltheerayut/quiz-app" },
];

const Projects = () => {
  // ฟังก์ชันเล่นเสียง
  const playSound = () => {
    const audio = new Audio(sound);  // สร้างอ็อบเจ็กต์เสียง
    audio.play();  // เล่นเสียง
  };

  return (
    <Container sx={{ marginTop: "8vh" }}>
      <Typography variant="h3" gutterBottom>My Projects</Typography>
      {projects.map((project, index) => (
        <Card key={index} style={{ marginBottom: "20px" }}>
          <CardContent>
            <Typography variant="h5">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  transition: "all 0.3s",
                  display: "inline-block",
                  padding: "5px 10px",
                  borderRadius: "4px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#00bcd4";
                  e.target.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "inherit";
                }}
              >
                {project.title}
              </a>
            </Typography>
            <Typography>{project.description}</Typography>
          </CardContent>
        </Card>
      ))}

      {/* เพิ่ม GIF crycat.gif มุมซ้ายล่าง */}
      <img
        src={crycatGif}
        alt="crycat"
        onClick={playSound} // เมื่อคลิกที่ GIF จะเล่นเสียง
        style={{
          position: "fixed",
          left: "20px",
          bottom: "20px",
          width: "150px",  // ปรับขนาดของ GIF
          height: "150px", // ปรับขนาดของ GIF
          cursor: "pointer",  // เปลี่ยน cursor เป็นมือเมื่อ hover
        }}
      />
    </Container>
  );
};

export default Projects;
