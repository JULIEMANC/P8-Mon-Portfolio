import data from "../data.json";
import fixture from "../data.json";
const Skills = () => {
  return (
    <>
    <div className="propos2">
        <h2 className="title1">À PROPOS DE MOI :</h2>
        <div className="block">
          {/* <img
            className="PhotoCode"
            src="../assets/images/code.webp"
            alt="code React vu de près"
          /> */}
          <p className="texte1">{fixture.about.description}</p>
       </div> 
    </div>
    
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
      <div key={i} className="logoContainer" data-tooltip={`${skills.name}`}>
      <img className="logoSkills" src={`../assets/logo/${skills.file}`} alt={`imgData-${i}`} />
      </div>

      ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
