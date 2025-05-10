import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './styles.css';
import jec from '../../assets/education/jec.png';
import school from '../../assets/education/model school.jpg';
import mortarboard from '../../assets/education/model school.jpg';

const Education = () => {
  const educationData = [
    {
      id: 1,
      institution: "Jabalpur Engineering College, Jabalpur",
      course: "B. Tech - Computer Science",
      period: "2020 - 2024",
      score: "CGPA - 7.0/10",
      icon: jec,
      titleColor: "text-green-600",
      subtitleColor: "text-red-500"
    },
    {
      id: 2,
      institution: "Govt. Model School, Amarwara",
      course: "Higher Secondary School(10+2)",
      period: "2019 - 2020",
      score: "Percentage - 75.4%",
      icon: mortarboard,
      titleColor: "text-green-600",
      subtitleColor: "text-red-500"
    },
    {
      id: 3,
      institution: "Govt. Model School, Amarwara",
      course: "High School Education",
      period: "2017 - 2018",
      score: "Percentage - 83.8%",
      icon: school,
      titleColor: "text-green-600",
      subtitleColor: "text-red-500"
    }
  ];

  return (
    <section className="educationSection" id="education">
      <div className="educationHeader">
        <h2 style={{ color: '#23ce6b' }}>Education</h2>
      </div>

      <VerticalTimeline animate={true} lineColor={'#23ce6b'}>
        {educationData.map((edu) => (
          <VerticalTimelineElement
            key={edu.id}
            className="vertical-timeline-element--work"
            contentStyle={{ color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
            icon={<img src={edu.icon} alt={edu.institution} />}
            iconClassName="timelineIcon"
          >
          <div className="flex flex-col gap-2">
            <h1 className={`text-4xl timelineTitle ${edu.titleColor}`}>
              {edu.institution}
            </h1>
            <h3 className={`text-3xl timelineSubtitle ${edu.subtitleColor}`}>
              {edu.course}
            </h3>
            <h3 className="text-2xl timelinePeriod">{edu.period}</h3>
            <h3 className="text-2xl timelineScore">{edu.score}</h3>
          </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Education;