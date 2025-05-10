import React from 'react';
import './styles.css';
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export default function Contact() {
  return (
    <div className='contact-section' id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:pureshwargonekar7@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:pureshwargonekar7@gmail.com">pureshwargonekar7@gmail.com</a>
        </div>
        <div>
          <a href="tel:+919770809324"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919770809324">(+91) 9770809324</a>
        </div>  
      </div>
      <Form></Form>
    </div>
  );
}