import data from "../data.json";
import fixture from "../data.json";
import { Link } from "react-router-dom";


const Skills = () => {

  return (
    <>
      <div className="aboutMe ">
        <h2 className="titleAbout">À PROPOS DE MOI :</h2>
        <div className="block">
          <p className="textAbout">{fixture.about.description}</p>
        </div>
      </div>
      <section className="bannerSkills">
        <div className="titleSkills">
          <h3 className="workWith ">J'AI TRAVAILLÉ AVEC : </h3>
        </div>
        <div className="logos">
          {data.skills.map((skills, i) => (
            <div
              key={i}
              className="logoContainer"
              data-tooltip={`${skills.name}`}
            >
              <Link to={skills.link} target="_blank">
                <img
                  className="logoSkills"
                  src={`../assets/logo/${skills.file}`}
                  alt={`imgData-${i}`}
                />
              </Link>
            </div>
          ))}
        </div>
      </section>
      <div className="skillsPictures">
        <section className="frontend" id="skills">
          <img
            className="pictures"
            src="../assets/images/front.webp"
            alt="imgFront"
          />
          <button className="front">Front-end</button>
        </section>
        <section className="backend">
          <img
            className="pictures"
            src="../assets/images/back.webp"
            alt="imgFront"
          />
          <button className="back">Back-end</button>
        </section>
      </div>
    </>
  );
};

export default Skills;
