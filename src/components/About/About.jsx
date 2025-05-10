import React from 'react';
import './styles.css';
import RamkumarDehariya from "../../assets/photo.jpg";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import mongodbIcon from "../../assets/mongodb-icon-1.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import tailwindIcon from "../../assets/tailwind.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() { 
  return (
    <section className="about-section" id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={200}>
          <p>
            Hi there! I'm Ramkumar Dehariya, a skilled MERN stack developer with expertise in React.js, Node.js, MongoDB and Express.js.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={200} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            I specialize in crafting dynamic web applications with seamless user experiences.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={200} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            Let's collaborate to bring your projects to life!
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={170}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={180}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={190}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>


          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={130}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>

          
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={160}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={140}>
              <img src={mongodbIcon} alt="mongoDb" />
            </ScrollAnimation>
          </div>

          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={190}>
              <img src={boostrapIcon} alt="Bootstrap" />
            </ScrollAnimation>
          </div> */}

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={190}>
              <img src={tailwindIcon} alt="Tailwind" />
            </ScrollAnimation>
          </div>
        </div>
      </div>

      <div className="about-image p-20 -mt-40">
        <ScrollAnimation animateIn="fadeInRight" delay={200}>
          <img className='RamkumarImage' src={RamkumarDehariya} alt="Ramkumar Dehariya" />
        </ScrollAnimation>
      </div>
    </section>
  );
}