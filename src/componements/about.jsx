import React from "react";
import fixture from "../data.json";

const About = () => {
  return (
    <>
      <section className="propos" id="about">
        <div className="proposBlock">
          <h1 className="nom">MANCINO JULIE</h1>
          <h2 className="metier"> DEVELOPPEUR WEB FRONT-END</h2>
          <p>Façonnons ensemble votre vision numérique.</p>
          <div className="button">
            <a href="#contact">
              {/* <a className="contact1" href="/Contact" target="_blank"> */}
              <button className="contact">Contactez-moi</button>
            </a>
            <a
              className="github"
              href="https://github.com/dashboard"
              target="_blank"
              rel="noreferrer"
            >
              <button className="git">Github</button>
            </a>
          </div>
        </div>
        <div className="photoMe">
          <img
            className="PhotoMoi"
            src="../assets/images/moi.jpeg"
            alt="moi de près "
          />
        </div>
      </section>
      <section className="block2">
        <h2 className="title1">À propos de moi :</h2>
        <div className="block">
          <img
            className="PhotoCode"
            src="../assets/images/code.webp"
            alt="code React vu de près"
          />
          <p className="texte1">{fixture.about.description}</p>
        </div>
      </section>
    </>
  );
};

export default About;
