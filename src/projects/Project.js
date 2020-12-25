import React from "react";
import "./Project.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

function Project({ lang, title, description, img, project_url, technologies }) {
  return (
    <div className="project">
      <Card className="card">
        <CardActionArea>
          <CardMedia
            component="img"
            alt={img.alt}
            height={img.height}
            image={img.url}
            title={img.title}
            loading="lazy"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{
                color: "#21333b",
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: "bold",
                fontSize: "1.2rem",
              }}
            >
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
            <h4
              style={{
                display: "flex",
                alignItems: "center",
                color: "#21333b",
                fontFamily: "'Quicksand', sans-serif",
              }}
            >
              <span role="img" aria-label="lightening emoji">
                ⚡{"  "}
              </span>
              Tech Stack
            </h4>
            <ul className="tech_list">
              {technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {project_url === "#" ? (
            <Button
              size="small"
              target="_blank"
              variant="contained"
              href={project_url}
              endIcon={<ArrowForwardIcon />}
              disabled
            >
              {lang === "fr" ? "voir projet" : "view projet"}
            </Button>
          ) : (
            <Button
              size="small"
              target="_blank"
              variant="contained"
              href={project_url}
              endIcon={<ArrowForwardIcon />}
            >
              {lang === "fr" ? "voir projet" : "view projet"}
            </Button>
          )}
        </CardActions>
      </Card>
    </div>
  );
}

export default Project;
