import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import moviesImg from "./movies app.png";
import { Link } from "@mui/material";

const projects = [
  {
    name: "Movies App",
    image: moviesImg,
    content:
      "Watch, Add, Delete and Edit movies of your own collection with this app.",
    link: "https://jeevr-movies.netlify.app/movies",
  },
];

export function ProjectsCard() {
  return (
    <div className="projects-card" style={{ marginBottom: "40px" }}>
      <h3>Projects</h3>
      <br />

      {projects.map((proj) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="186"
              image={proj.image}
              alt="movies app"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {proj.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {proj.content}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link
              className="link"
              href={proj.link}
              sx={{ color: "#7b7e81", textDecoration: "none" }}
            >
              Read more
            </Link>
            <ChevronRightIcon fontSize="inherit" />
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
