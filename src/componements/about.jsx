import React from "react";
import fixture from "../data.json";
// import ButtonContact from '../componement/Contact';

const About = () => {
  return (
    <>
      <section className="propos" id="about">
        <h1 className="nom">MANCINO JULIE</h1>
        <h2 className="metier"> DEVELOPPEUR WEB FRONT-END</h2>
        <p>Façonnons ensemble votre vision numérique.</p>
        <div className="buttons" >
          <a className="contact1" href="/Contact" target="_blank">
            <button className="contact">Contactez-moi</button>
          </a>
          <a
            className="github"
            href="https://github.com/dashboard"
            target="_blank"
            rel="noreferrer">
            <button className="git">Github</button>
          </a>
        </div>

        {/* <img
          className="PhotoMoi"
          src="../assets/images/moi.jpeg"
          alt="moi de près "
        /> */}
      </section>

      <section className="block2">
        {/* <img
          className="PhotoCode"
          src="../assets/images/code.webp"
          alt="code React vu de près"
        /> */}
        <h2 className="title1">A propos</h2>
        <p className="texte1">{fixture.about.description}</p>
      </section>
    </>
  );
};

export default About;
