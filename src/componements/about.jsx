import React from "react";


const About = () => {
  return (
    <div className="container">
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
      </section> 
      
      <section className="photoMe">
          <img
            className="PhotoMoi"
            src="../assets/images/moi.jpeg"
            alt="moi de près "
          />    
     
       </section> 
      </div>
   
  );
};

export default About;
