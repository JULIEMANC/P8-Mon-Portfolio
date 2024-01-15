import React, { useState } from "react";
import Slides from "./slides";
import {Link} from 'react-router-dom';

const Modal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.picturesModale.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.picturesModale.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {project.picturesModale.length > 1 && (
         
         <Slides
            pictures={project.picturesModale}
            currentIndex={currentImageIndex}
            onNext={nextImage}
            onPrev={prevImage}
          />
        )}
        <div className="titleDescr">{project.title}</div>
        <div className="modal-description">{project.description}</div>
        <Link to="https://github.com/dashboard">
        <img className="linkGit" src="../assets/logo/git.png" alt="githubPictures"/> 
        </Link>
      </div>
    </div>
  );
};

export default Modal;
