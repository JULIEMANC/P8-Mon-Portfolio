import React from "react";
import { Link } from "react-router-dom";
import fixture from "../fixture.json";

const Projects= ({logement})=>{
    const {title, logo, cover } = fixture ;
return(
    <article className="card-bloc-item">
        <Link className="card" to={``}>
          <div className="card-title">
            <h2>{title}</h2>
          </div>
          <img
            className="photocard"
            src={cover}
            alt={title}
          /> 
          
         </Link> 
      </article>
)

};

export default Projects;