import React from "react";

const Slides = ({ pictures, currentIndex, onNext, onPrev }) => {
  return (
    <>
      <button className="prev" onClick={onPrev}>
       <img alt="flèche prev" className="vector" src="/assets/logo/vector.png"/>
      </button>
      <img
        className="modal-image"
        src={`../assets/images/${pictures[currentIndex]}`}
        alt="ModalImg"
      />
      <button className="next" onClick={onNext}>
      <img alt="flèche prev" className="vector" src="/assets/logo/vectorRight.png"/>
      </button>
    </>
  );
};

export default Slides;
