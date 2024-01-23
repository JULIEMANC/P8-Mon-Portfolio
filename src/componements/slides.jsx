import React from "react";

const Slides = ({ pictures, currentIndex, onNext, onPrev }) => {
  return (
    <>
      <div className="aroundImage">
        <img
          className="modalImage"
          src={`../assets/images/${pictures[currentIndex]}`}
          alt="ModalImg"
        />
      </div>
      <div className="buttonSlides">
        <button className="prev" onClick={onPrev}>
          <img
            alt="flèche prev"
            className="vector"
            src="/assets/logo/iconLeft.svg"
          />
        </button>
        <button className="next" onClick={onNext}>
          <img
            alt="flèche prev"
            className="vector"
            src="/assets/logo/iconRight.svg"
          />
        </button>
      </div>
    </>
  );
};

export default Slides;
