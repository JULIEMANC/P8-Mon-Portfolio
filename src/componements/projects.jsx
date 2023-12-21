import React from "react";
import fixture from "../data.json";
import {HashLink} from 'react-router-hash-link';

const Projects= ({project})=> {
    const {title, cover } = fixture ;
return(
    <article className="card-bloc-item">
        <HashLink className="card" to={``}>
          <div className="card-title">
            <h2>{title}</h2>
          </div>
          <img
            className="photocard"
            src={cover}
            alt={title}
          /> 
          
         </HashLink > 
      </article>
)

};

export default Projects;