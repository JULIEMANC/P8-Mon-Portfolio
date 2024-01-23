import React from "react";
import Typing from "./typing";

const About = () => {
  const textToDisplay = "Mancino Julie";

  return (
    <div className="container">
      <section className="about" id="about">
        <div className="blockAbout">
          <Typing text={textToDisplay} />
          <h2 className="job"> DEVELOPPEUR WEB FRONT-END</h2>
          <h3>Façonnons ensemble votre vision numérique.</h3>
          <div className="button">
            <a href="#contact" data-lang="fr">
              <button className="contact">Contactez-moi</button>
            </a>
            <a
              className="github"
              href="https://github.com/dashboard"
              target="_blank"
              rel="noreferrer" data-lang="fr"
            >
              <button className="git">Github</button>
            </a>
          </div>
        </div>
      </section>
      <section className="myPhoto">
        <img
          className="portrait"
          src="../assets/images/moi.webp"
          alt="moi de près "
        />
      </section>
    </div>
  );
};

export default About;
