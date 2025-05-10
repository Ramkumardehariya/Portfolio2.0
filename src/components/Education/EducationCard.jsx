import React from 'react';
import styles from './Education.module.css';

const EducationCard = ({ id, institution, course, startYear, endYear, score }) => {
  return (
    <div className={styles.educationCard} key={id}>
      <div className={styles.cardIcon}>
        {/* Icon would go here */}
      </div>
      <div className={styles.cardDetails}>
        <h6 className={styles.cardPeriod}>{startYear}-{endYear}</h6>
        <h4 className={styles.cardCourse}>{course}</h4>
        <h5 className={styles.cardInstitution}>{institution}</h5>
        {score && <p className={styles.cardScore}>{score}</p>}
      </div>
    </div>
  );
};

export default EducationCard;