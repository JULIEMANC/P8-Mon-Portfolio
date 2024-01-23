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
            className="myLogo"
            src="../assets/logo/logoSite.png"
            alt="logo du site"
          />
          <nav>
            <ul>
              <li>
                <a href="#about"data-lang="fr">À propos</a>
              </li>
              <li>
                <a href="#skills" data-lang="fr">Compétences</a>
              </li>
              <li>
                <a href="#projects" data-lang="fr">Projets</a>
              </li>
              <li>
                <a href="#contact" data-lang="fr">Contact</a>
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
        <p className="footerText">Copyright © Julie Mancino</p>
      </footer>
    </div>
  );
};

export default Layout;
