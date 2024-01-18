import React from "react";
import Typing from "./typing" ;

const About = () => {
  const textToDisplay="Mancino Julie";

  return (
    <div className="container">
      <section className="about" id="about">
        <div className="blockAbout">
         <Typing text={textToDisplay} />
         
          <h2 className="job"> DEVELOPPEUR WEB FRONT-END</h2>
          <h3>Façonnons ensemble votre vision numérique.</h3>
          {/* <p className="where">Ou me trouver ?</p> */}
          <div className="button">
            <a href="#contact">
              <button className="contact">Contactez-moi</button>
              {/* <img
                src="../assets/logo/mail.png"
                alt="email "
                className="logomail"
              /> */}
            </a>
            <a
              className="github"
              href="https://github.com/dashboard"
              target="_blank"
              rel="noreferrer"
            >
              {/* <img
                src="../assets/logo/github.png"
                alt="github "
                className="logoGithub"
              /> */}
              <button className="git">Github</button>
            </a>
            <a
              className="likedin"
              href="https://www.linkedin.com/in/julie-mancino/"
            >
              {/* <img
                src="../assets/logo/likedin.png"
                alt="likedin "
                className="logoLikedin"
              /> */}
            </a>
          </div>
        </div>
      </section>

      <section className="myPhoto">
        <img
          className="portrait"
          src="../assets/images/moi.jpeg"
          alt="moi de près "
        />
      </section>
    </div>
  );
};

export default About;
