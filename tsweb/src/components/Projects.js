import React from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";

const projects = [
  { title: "Project 1", description: "Description of project 1" },
  { title: "Project 2", description: "Description of project 2" },
];

const Projects = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>My Projects</Typography>
      {projects.map((project, index) => (
        <Card key={index} style={{ marginBottom: "20px" }}>
          <CardContent>
            <Typography variant="h5">{project.title}</Typography>
            <Typography>{project.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Projects;
