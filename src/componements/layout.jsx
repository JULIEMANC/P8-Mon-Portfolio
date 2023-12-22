import React from "react";
import About from '../componements/about';
import Projects from '../componements/projects';
import Competences from '../componements/skills';
import Contact from '../componements/contact';


const Layout = ({ children }) => {
  return (
    <div className="body">
      <header>
        <div className="banner">
        <img
          className="logoGithub"
          src="../assets/logo/git1.png"
          alt="logo github" 
        />
        <nav>
          <ul>
            <li><a href="#about">À propos</a>
            </li>
            <li><a href="#compétences">Compétences</a>
              
            </li>
            <li><a href="#projet">Projets</a>
        
            </li>
            <li><a href="#Contact">Contact</a>
        
            </li>
          </ul>
        </nav>
        </div>
      </header>
      <main> 
        <About/>
        <Competences/>
        <Projects/>
    
        {children}
        </main>
           
      <footer>    
        <Contact/>
        <p className="footerletter">Copyright © julie mancino</p>
      </footer>
    </div>
  );
};

export default Layout;