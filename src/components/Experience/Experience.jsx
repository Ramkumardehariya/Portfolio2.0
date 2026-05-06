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
          <h1 className="timeline-title">Software Development Engineer</h1>
          <h4 className="timeline-subtitle">Kaptured AI </h4>
          <div className="timeline-date">Oct 2025 - Jan 2026</div>
          <ol className="timeline-list">
            <li className="list-item">• Developed scalable web applications using TypeScript, Next.js, React.js, and Supabase with 30+ REST APIs and optimized databases.</li>
            <li className="list-item">• Implemented dashboards, CRUD operations, PDF reports, bug fixes, and 20+ Python automation scripts improving backend workflow efficiency.</li>
          </ol>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'white', color: 'black', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
          contentArrowStyle={{ borderRight: '7px solid white' }}
          
          iconStyle={{ background: 'white' }}
          icon={<img src={erp} alt="Ayattih Education" className="timeline-icon" />}
        >
          <h1 className="timeline-title">Quality Analyst</h1>
          <h4 className="timeline-subtitle">Unibots</h4>
          <div className="timeline-date">May 2026 - Present</div>
          <ol className="timeline-list">
            <li className="list-item">• Performed functional and API testing of web applications, ensuring reliability, performance, seamless user experience, and accurate system behavior.</li>
            <li className="list-item">• Collaborated with developers to debug issues, validate REST APIs using Postman, and improve backend workflows and application quality.</li>
          </ol>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'white', color: 'black', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
          contentArrowStyle={{ borderRight: '7px solid white' }}
          iconStyle={{ background: 'white' }}
          icon={<img src={hal} alt="HAL" className="timeline-icon" />}
        >
          <h1 className="timeline-title green-text">Quality Assurance Testing</h1>
          <h4 className="timeline-subtitle">BridgeLabz Solutions Private Limited</h4>
          <div className="timeline-date">August 2024 - Feb 2025</div>
          <ol className="timeline-list">
            <li className="list-item">• Completed six months of Quality Assurance training with hands-on experience in Core Java, automation scripting, API, and database testing.</li>
            <li className="list-item">• Performed manual, API, database, and mobile testing, fixed 20+ bugs, optimized assets, and improved application maintainability.</li>
          </ol>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'white', color: 'black', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
          contentArrowStyle={{ borderRight: '7px solid white' }}
          iconStyle={{ background: 'white' }}
          icon={<img src={railway} alt="Indian Railways" className="timeline-icon" />}
        >
          <h1 className="timeline-title green-text">MERN Full stack Course</h1>
          <h4 className="timeline-subtitle">Code help</h4>
          <div className="timeline-date">Aug 2023 - Nov 2023</div>
          <ol className="timeline-list">
            <li className="list-item">• Completed MERN Stack training with hands-on experience in MongoDB, Express.js, React.js, Node.js, REST APIs, and full-stack development.</li>
            <li className="list-item">• Built responsive full-stack applications, implemented authentication, CRUD operations, API integration, and optimized frontend and backend performance.</li>
          </ol>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Experience;