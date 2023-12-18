import React from "react";
import fixture from "../fixture.json";

const Projects= ({logement})=>{
    const {title, logo, cover } = fixture ;
return(
    <article className="card-bloc-item">
        <a className="card" to={``}>
          <div className="card-title">
            <h2>{title}</h2>
          </div>
          <img
            className="photocard"
            src={cover}
            alt={title}
          /> 
          
         </a> 
      </article>
)

};

export default Projects;