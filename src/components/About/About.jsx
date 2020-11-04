import React from 'react';

import SkillList from '../shared/Skill/SkillList';
import Button from '../shared/Button/Button';
import profileData from '../../fixtures/profile.json';

import './About.scss';

const { name, image, description, skills, emailUrl, resumeUrl } = profileData;

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__heading">
        <img src="/img/AboutHeadingImage.svg" alt="AboutHeadingImage" />
      </div>
      <div className="about__image">
        <img src={image} alt="ShinDaimon" />
      </div>
      <div className="about__description">
        <h1>{name}</h1>
        <p>{description}</p>
        <div className="about__skill">
          <h2>Skills</h2>
          <SkillList skills={skills} />
        </div>
        <div className="about__button">
          <Button to={resumeUrl}>Resume</Button>
          <Button to={emailUrl}>Email</Button>
        </div>
      </div>
    </section>
  );
};

export default About;
