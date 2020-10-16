import React, { useState, useEffect } from "react";
import "./Project.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import VisibilityIcon from "@material-ui/icons/Visibility";

function Project({ title, description, img, project_url, technologies }) {
  const [animationClass, setanimationClass] = useState("hidden");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 700) {
        setanimationClass("animate__animated animate__bounceInRight");
      }
    });

    return () => window.removeEventListener("scroll");
  }, []);
  return (
    <div className={`project${" " + animationClass}`}>
      <Card className="card">
        <CardActionArea>
          <CardMedia
            component="img"
            alt={img.alt}
            height={img.height}
            image={img.url}
            title={img.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
            <h4>Technologies:</h4>
            <ul className="tech_list">
              {technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
          size="small"
            target="_blank"
            variant="contained"
            color="secondary"
            href={project_url}
            endIcon={<VisibilityIcon/>}
          >
            view project
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Project;
