import React from "react";
import About from "../componements/about";
import Projects from "../componements/projects";
import Competences from "../componements/skills";
import Contact from "../componements/contact";

const Layout = ({ children }) => {
  return (
    <div className="body">
      <img src="../assets/images/background.webp" alt="" className="background"/>
      <header>
        <div className="banner">
          <img
            className="logoSite"
            src="../assets/logo/logoSite.png"
            alt="logo du site"
          />
          <nav>
            <ul>
              <li>
                <a href="#about">À propos</a>
              </li>
              <li>
                <a href="#compétences">Compétences</a>
              </li>
              <li>
                <a href="#projects">Projets</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <About />
        <Competences />
        <Projects/>
        {children}
      </main>

      <footer>
        <Contact />
        <p className="footerletter">Copyright © Julie Mancino</p>
      </footer>
    </div>
  );
};

export default Layout;
