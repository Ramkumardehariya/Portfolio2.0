"use client";

import React from "react";
import "./styles.css"; // Create this CSS module file
import reactIcon from '../../assets/react-icon.svg';
import linkedin from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github.svg';
import whatsapp from '../../assets/whatsapp.svg';
import telegram from '../../assets/telegram.svg';
import instagramIcon from '../../assets/instagram.svg';
import mail from '../../assets/mail.png';

export default function Footer() {
  return (
    <footer className="container">
      <div>
        <p className="creditText">
          Made with ❤️ by <span>Ramkumar Dehariya</span>
          using <img src={reactIcon} alt="React" className="reactIcon" />
        </p>
      </div>

      <div className="socialMedia">
        <a
          href="https://www.linkedin.com/in/ramkumar-dehariya-16a242218/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/Ramkumardehariya"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        
        <a
          href="mailto:ramkumardehariya26@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={mail} alt="Email" />
        </a>

        <a
          href="https://api.whatsapp.com/send/?phone=%2B917489629277&text=Hello+Ramkumar"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>

        <a
          href="mailto:ramkumardehariya26@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="Telegram" />
        </a>

        <a
          href="https://www.instagram.com/rammehramehra/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>

      </div>

    </footer>
  );
}