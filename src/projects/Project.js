import React from "react";
import "./Project.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ListAltIcon from '@material-ui/icons/ListAlt';

function Project({ title, description, img, project_url, technologies }) {

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
            <Typography gutterBottom variant="h5" component="h2" style={{color:"#311368", fontFamily: "'Quicksand', sans-serif"
}}>
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
            <h4 style={{display: "flex", alignItems:"center", color:"#311368", fontFamily: "'Quicksand', sans-serif"}}><ListAltIcon fontSize="small" style={{marginRight: "5px", color:"#311368"}}/>Tech Stack</h4> 
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
            href={project_url}
            endIcon={<VisibilityIcon />}
          >
            view project
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Project;
