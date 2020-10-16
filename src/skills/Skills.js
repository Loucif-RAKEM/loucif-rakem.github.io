import React, { useState, useEffect } from "react";
import "./Skills.css";
import CodeIcon from "@material-ui/icons/Code";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function Skills({ skills }) {
  const [animationClass, setanimationClass] = useState("hidden");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1380) {
        setanimationClass("animate__animated animate__bounceInUp");
      }
    });

    return () => window.removeEventListener("scroll");
  }, []);
  return (
    <div className="skills" id="skills">
      <h1>
        My Skills & Tools <CodeIcon className="content_icon" />
      </h1>
      <div className={`content`}>
        <div className="logos">
          {skills.map((skill, index) => (
            <div className={`logo ${animationClass}`} key={index}>
              <img
                src={skill.img_url}
                alt={`${skill.name} logo`}
                title={skill.name}
              />
              <h5>{skill.name}</h5>
              <Box position="relative" display="inline-flex" className="progress">
                <CircularProgress variant="static" value={skill.level}color="secondary"/>
                <Box
                  top={0}
                  left={0}
                  bottom={0}
                  right={0}
                  position="absolute"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography
                    variant="caption"
                    component="div"
                    color="secondary"
                  >{`${Math.round(skill.level)}%`}</Typography>
                </Box>
              </Box>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
