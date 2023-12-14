import React from "react";
import fixture from "../fixture.json";
// import ButtonContact from '../componement/Contact';

const About = () => {
  return (
    <>
      <section className="A propos">
        <h1 className="nom">MANCINO JULIE</h1>
        <h2 className="metier"> DEVELOPPEUR WEB FRONT-END</h2>
        <p>Façonnons ensemble votre vision numérique.</p>

        <a className="Contact" href="/Contact" target="_blank">
          <button>Contactez-moi</button>
        </a>

        <a
          className="github"
          href="https://github.com/dashboard"
          target="_blank"
          rel="noreferrer"
        >
          <button>Github</button>
        </a>
        <img
          className="PhotoMoi"
          src="../assets/images/moi.jpeg"
          alt="moi de près "
        />
      </section>

      <section className="Block2">
        <img
          className="PhotoCode"
          src="../assets/images/code.webp"
          alt="code React vu de près"
        />
        <h2 className="title1">A propos</h2>
        <p>{fixture.about.description}</p>
      </section>
    </>
  );
};

export default About;
