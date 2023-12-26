// import React from "react";

// const Modal = ({ project, onClose }) => {
//   return (
//     <div className="modal-overlay" onClick={onClose}>
//       <div className="modal-content">
//         <img
//           className="modal-image"
//           src={`../assets/images/${project.picturesModale}`}
//           alt="ModalImg"
//         />
//         <div className="modal-description">{project.description}</div>
//       </div>
//     </div>
//   );
// };

// export default Modal;

import React from "react";
//import Projects from "./projects";
import data from "../data.json";

const Modal = ({ project, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
      {project.picturesModale.length > 0 && 
      project.picturesModale.map((image, index) => (
          <img
            className="modal-image"
            src={`../assets/images/${project.picturesModale[0]}`}
            alt="ModalImg"
          />
       ) )}
        <div className="modal-description">{data.description}</div>
      </div>
    </div>
  );
};

export default Modal;

