import React, { useState, useEffect } from "react";

const Typing = ({ text, speed = 200, loop = true }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const containerStyle = {
    height: "100px",
    display: "flex",
    alignItems: "center",
  };
  useEffect(() => {
    const typingTimeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayedText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);

          if (currentIndex === text.length - 1) {
            // Commence à effacer
            setIsDeleting(true);
          }
        } else {
          // Enlève un caractère du texte affiché
          setDisplayedText((prevText) => prevText.slice(0, -1));

          if (displayedText === "") {
            // Réinitialise l'index après avoir effacé tout le texte
            setCurrentIndex(0);
            setIsDeleting(false);

            if (!loop) {
              // Arrête le typage lorsque tout le texte a été effacé et la boucle n'est pas activée
              clearTimeout(typingTimeout);
            }
          }
        }
      },
      isDeleting ? speed / 2 : speed
    ); // Délai entre chaque ajout ou suppression de caractère ( millisecondes)

    return () => clearTimeout(typingTimeout);
  }, [currentIndex, text, speed, loop, isDeleting, displayedText]);

  return (
    <div className="typingContainer" style={containerStyle}>
      <h1 className="name">{displayedText}</h1>
    </div>
  );
};

export default Typing;
