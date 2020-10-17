import React from "react";
import "./Hobby.css";

function Hobby({ title, description, img_url }) {
  return (
    <div className="hobby">
      <img src={img_url} alt={`${title} logo`} title={title} loading="lazy" />
      <h4>{title}</h4>
      <div className="hobby_desc">
        {description.map((e, index) => (
          <div key={index}>{e}</div>
        ))}
      </div>
    </div>
  );
}

export default Hobby;
