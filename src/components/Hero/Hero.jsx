import React from "react";
import { BrowserRouter } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import { NavHashLink } from "react-router-hash-link";
import "./styles.css";
import Illustration from "../../assets/illustration.svg";
import linkedin from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github.svg';
import whatsapp from '../../assets/whatsapp.svg';
import instagramIcon from '../../assets/instagram.svg';
import mail from '../../assets/mail.png';
import Hello from '../../assets/Hello.gif';
import telegram from '../../assets/telegram.svg';

export function Hero() { 
  return (
    <section id="home" className="hero-container">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p className="hello-text">
            Hello <img src={Hello} alt="Hello" className="hello-icon"/>, I'm
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={200}>
          <h1 className="hero-name">Ramkumar Dehariya</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={400}>
          <h3 className="hero-title">Full Stack Developer</h3>
        </ScrollAnimation>

        <br />

        <ScrollAnimation animateIn="fadeInUp" delay={800}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="hero-button">Contact</NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="fadeInUp" delay={1000}>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/ramkumar-dehariya-16a242218/" target="_blank" rel="noreferrer">
              <img src={linkedin} alt="Linkedin" className="social-icon" />
            </a>
            <a href="https://github.com/Ramkumardehariya" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" className="social-icon" />
            </a>
            <a href="mailto:ramkumardehariya26@gmail.com" target="_blank" rel="noreferrer">
              <img src={mail} alt="Email" className="social-icon" />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=%2B917489629277&text=Hello+Ramkumar" target="_blank" rel="noreferrer">
              <img src={whatsapp} alt="Whatsapp" className="social-icon" />
            </a>
            <a href="mailto:ramkumardehariya26@gmail.com" target="_blank" rel="noreferrer">
              <img src={telegram} alt="Telegram" className="social-icon" />
            </a>
            <a href="https://www.instagram.com/rammehramehra/?next=%2F" target="_blank" rel="noreferrer">
              <img src={instagramIcon} alt="Instagram" className="social-icon" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
     
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1000}>
          <img src={Illustration} alt="Illustration" className="illustration-img" />
        </ScrollAnimation>
      </div>
    </section>
  );
}