import React from 'react';
import Marquee from "react-fast-marquee";
import './styles.css'; // We'll create this file for the styles
const skillsData = [
    'c',
    'c++',
    'java',
    'python',
    'html',
    'css',
    'javascript',
    'react',
    'nodejs',
    'mongoDB',
    'mysql',
    'ionic',
    'bootstrap',
    'tailwind',
    'figma',
    'git',
]

function Skills() {
    const skillBoxStyle = {
        backgroundColor: 'rgb(33, 33, 33)',
        boxShadow: `rgba(50, 200, 57, 0.3) 0px 0px 12px`
    }
 
    return (
        <div className="skills-section" id="skills">
            <div className="skills">
                <div className="skillsHeader">
                    <h2 style={{color: '#23ce6b'}}>Skills</h2>
                </div>
                <div className="skillsContainer">
                    <div className="skill--scroll">
                        <Marquee 
                            gradient={false} 
                            speed={80} 
                            pauseOnHover={true}
                            pauseOnClick={true} 
                            delay={0}
                            play={true} 
                            direction="left"
                        >
                            {skillsData.map((skill, index) => (
                                <div className="skill--box" key={index} style={skillBoxStyle}>
                                    <img src={require(`../../assets/svg/skills/${skill}.svg`)} alt={skill} />
                                    <h3 style={{color: '#eaeaea', marginTop: '30px', fontFamily: 'monospace'}}>
                                        {skill.toUpperCase()}
                                    </h3>
                                </div>         
                            ))}

                            
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;