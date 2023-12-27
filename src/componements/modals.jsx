import React, { useState } from "react";
// import data from "../data.json";
//import Slides from "./slides";

const Modal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (pictures) => {
    setCurrentImageIndex((prevIndex) =>
    prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = (pictures) => {
    setCurrentImageIndex((prevIndex) =>
    prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        {project.picturesModale.length > 1 && (
          <>
           <button className="prev"onClick={prevImage}>prec</button>
            <img
              className="modal-image"
              src={`../assets/images/${project.picturesModale[currentImageIndex]}`}
              alt="ModalImg"
            />
            <button className="next" onClick={nextImage}>Next</button>
          </>
        )}
        <div className="modal-description">{project.description}</div>
      </div>
    </div>
  );
};

export default Modal;


// import React, { useState } from "react";
// import Slides from "./slides";
// //import data from "../data.json";

// const Modal = ({ project,picturesModale, onClose }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === project.picturesModale.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? project.picturesModale.length - 1 : prevIndex - 1
//     );
//   };
//   const handleModalClick = (e) => {
//     e.stopPropagation();
//   };

//   return (
//     <div className="modal-overlay" onClick={onClose}>
//       <div className="modal-content" onClick={handleModalClick}>
//         {project.picturesModale.length > 1 && (
//           <>
//             <Slides
//               alt="ModalImg"
//               pictures={project.picturesModale}
//               currentIndex={currentImageIndex}
//             />
//             <button onClick={prevImage}>Previous</button>
//             <button onClick={nextImage}>Next</button>
//           </>
//         )}
//         <div className="modal-description">{project.description}</div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
