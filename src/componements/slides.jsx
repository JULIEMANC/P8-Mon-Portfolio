// import React from "react";

// const Slides = ({ alt, pictures, currentIndex, nextSlide, prevSlide }) => {
//   return (
//     <div className="slider">
//       {pictures?.length > 1 && (
//         <>
//           <button
//             className="prev carouselButton"
//             onClick={(e) => {
//               e.stopPropagation();
//               prevSlide();
//             }}
//           >
//             {/* Ajoutez votre icône ou texte pour le bouton "Previous" */}
//           </button>
//           <div className="photo-number">
//             {`${currentIndex + 1}/${pictures.length}`}
//           </div>
//           <button
//             className="next carouselButton"
//             onClick={(e) => {
//               e.stopPropagation();
//               nextSlide();
//             }}
//           >
//             {/* Ajoutez votre icône ou texte pour le bouton "Next" */}
//           </button>
//         </>
//       )}
//       {pictures?.map((picture, index) => (
//         <div
//           className="carouselContent"
//           key={index}
//           style={{ display: index === currentIndex ? "block" : "none" }}
//         >
//           <img className="slides" src={picture} alt={alt} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Slides;
