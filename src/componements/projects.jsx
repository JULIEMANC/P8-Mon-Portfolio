import React, { useState } from "react";
import data from "../data.json";
import { HashLink } from "react-router-hash-link";
import Modal from "./modals";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (  
    <div>
  <h2 className="titleProject">MES PROJETS</h2>
    <section id="projects" className="blockProjects">

      {data.projects.map((project, i) => (
        <article className="cardBlocItem" key={i}>
          <HashLink
            className="card"
            to={`#projects`}
            onClick={() => openModal(project)}
            >
            <img
              className="picturesProjects"
              src={`../assets/images/${project.pictures[0]}`}
              key={i}
              alt="imgData"
            />
            <h3>{project.title}</h3>
            <div className="tags">{project.tags}</div>
          </HashLink>
        </article>
      ))}
      {selectedProject && (
        <Modal project={selectedProject} onClose={closeModal} />
      )}
    </section>
    </div>
  );
};

export default Projects;