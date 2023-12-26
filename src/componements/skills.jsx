import data from "../data.json";
const Competences = () => {
  return (
    <>
      <div className="button2">
        <section className="frontend" id="compétences">
          <img
            className="circles"
            src="../assets/images/front.webp"
            alt="imgFront"
          />
          <button className="front">Front-end</button>
        </section>

        <div className="line" ></div>

        <section className="backend">
          <img
            className="circles"
            src="../assets/images/back.webp"
            alt="imgFront"
          />
          <button className="back">Back-end</button>
        </section>
      </div>
      <section className="banner1">
        <div className="rec"></div>
        <p className="work">J'ai pu travailler avec : </p>
       
         <div className="map"> 
         {data.skills.map((skills, i) => (
       <img className="logoSkills" src={`../assets/logo/${skills}`} key={i} alt="imgData" />
        ))}
        </div>

        {/* <img className="logoTailwind" src="../assets/logo/tailwind.png" alt="logo Tailwind" />
        <img className="logofigma" src="../assets/logo/figma.webp" alt="logo Figma" />
        <img className="logoCanva" src="../assets/logo/canva.png" alt="logo Canva" />
        <img className="logoHtml" src="../assets/logo/html.png" alt="logo Html" />
        <img className="logoSql" src="../assets/logo/sql.png" alt="logo SQL" />
        <img className="logoSass" src="../assets/logo/sass.png" alt="logo SASS" />
        <img className="logoGit" src="../assets/logo/git.png" alt="logo Git" />
        <img className="logoBash" src="../assets/logo/bash.png" alt="logo Bash" /> */}
      </section>
    </>
  );
};

export default Competences;
