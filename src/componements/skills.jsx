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
      </section>
    </>
  );
};

export default Competences;
