"use client";

import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './styles.css';
import hal from '../../assets/experience/hal.png';
import erp from '../../assets/experience/erp.png';
import railway from '../../assets/experience/railway.png';
import settyl from '../../assets/experience/settyl.png';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-header">
        <h2 className="experience-title">Internships & Experience</h2>
      </div>

      <VerticalTimeline animate={true} lineColor={'#23ce6b'}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'white', color: 'black', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
          contentArrowStyle={{ borderRight: '7px solid white' }}
          
          iconStyle={{ background: 'white' }}
          icon={<img src={settyl} alt="Settyl" className="timeline-icon" />}
        >
          <h1 className="timeline-title">Full Stack Engineer Training</h1>
          <h4 className="timeline-subtitle">BrideLabz Solution Private Limited, Bengaluru</h4>
          <div className="timeline-date">23 Aug 2024 - 28 Feb 2025</div>
          <ol className="timeline-list">
            <li className="list-item"> Completed hands-on MERN Stack training, built full-stack apps with CRUD, auth, REST APIs, Git, and GitHub collaboration.</li>
            <li className="list-item">Worked on real-time projects in Agile teams, solved coding challenges, did code reviews, and deployed using Vercel, Netlify.</li>
          </ol>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'white', color: 'black', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
          contentArrowStyle={{ borderRight: '7px solid white' }}
          
          iconStyle={{ background: 'white' }}
          icon={<img src={erp} alt="Ayattih Education" className="timeline-icon" />}
        >
          <h1 className="timeline-title">Full Stack Developer Course</h1>
          <h4 className="timeline-subtitle">Code help</h4>
          <div className="timeline-date">01 Aug 2023 - 08 Feb 2024</div>
          <ol className="timeline-list">
            <li className="list-item">Completed MERN Stack course from CodeHelp, gaining hands-on experience in MongoDB, Express.js, React.js, and Node.js through real-world projects.</li>
            <li className="list-item">Built full-stack applications with authentication, CRUD operations, and RESTful APIs, enhancing my frontend and backend development skills.</li>
          </ol>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'white', color: 'black', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
          contentArrowStyle={{ borderRight: '7px solid white' }}
          iconStyle={{ background: 'white' }}
          icon={<img src={hal} alt="HAL" className="timeline-icon" />}
        >
          <h1 className="timeline-title green-text">Web Developer Intern</h1>
          <h4 className="timeline-subtitle">Intern Pe </h4>
          <div className="timeline-date">February 2024 - Present</div>
          <ol className="timeline-list">
            <li className="list-item">Designed and developed the Resolver, a Township Complaint Management System, using ReactJS and Firebase technologies</li>
            <li className="list-item">Utilized Firebase to implement chat functionality, allowing residents to communicate and resolve issues effectively</li>
          </ol>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'white', color: 'black', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
          contentArrowStyle={{ borderRight: '7px solid white' }}
          iconStyle={{ background: 'white' }}
          icon={<img src={railway} alt="Indian Railways" className="timeline-icon" />}
        >
          <h1 className="timeline-title green-text">Computer Science Trainee</h1>
          <h4 className="timeline-subtitle">West Central Railway, Jabalpur</h4>
          <div className="timeline-date">May 2022 - June 2022</div>
          <ol className="timeline-list">
            <li className="list-item">Completed an 8-week online training on Web Development (HTML, CSS, Bootstrap, DBMS, PHP, JS, React)</li>
            <li className="list-item">Worked alongside with the staff in the Telephone Exchange department</li>
          </ol>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Experience;