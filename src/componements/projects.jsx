// import data from "../data.json";
// import { HashLink } from "react-router-hash-link";
// import Modal from "./modals";
// import React, { useState } from "react";

// const Projects = ({ projects }) => {
//   const [selectedProject, setSelectedProject] = useState(null);
//   //const { title, pictures } = data;
//   const openModal = (project) => {
//     setSelectedProject(project);
//   };

//   const closeModal = () => {
//     setSelectedProject(null);
//   };

//   return (
//     <section id="projects" className="blockProjects">
//       {data.projects.map((projects, i) => (
//         <article className="card-bloc-item" key={i}>
//           <HashLink className="card" to={`#projects`} onClick={() => openModal(projects)}>
//             <img
//               className="imProjects"
//               src={`../assets/images/${projects.pictures}`}
//               key={i}
//               alt="imgData"
//               />
//               <h2>{projects.title}</h2>
//               <div className="tags">{projects.tags}</div>
//           </HashLink>
//         </article>
//       ))}
//        {selectedProject && (
//         <Modal project={selectedProject} onClose={closeModal} />
//       )}
//     </section>
//   );
//  };

// export default Projects;

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
    <section id="projects" className="blockProjects">
      {data.projects.map((project, i) => (
        <article className="card-bloc-item" key={i}>
          <HashLink
            className="card"
            to={`#projects`}
            onClick={() => openModal(project)}
            >
           
            <img
              className="imProjects"
              src={`../assets/images/${project.pictures[0]}`}
              key={i}
              alt="imgData"
            />
            <h2>{project.title}</h2>
            <div className="tags">{project.tags}</div>
          </HashLink>
        </article>
      ))}
      {selectedProject && (
        <Modal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default Projects;