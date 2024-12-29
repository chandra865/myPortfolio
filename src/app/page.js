'use client';

import React from 'react';
import MainBody from './components/MainBody';
import AboutMe from './components/AboutMe';
import Project from './components/Project';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Leadership from './components/Leadership';
import Experience from './components/Experience';
import {
	mainBody,
	about,
	repos,
	leadership,
	skills,
	experiences,
  } from './resource.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div id="home">
        <MainBody
          gradient={mainBody.gradientColors}
          title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
          message={mainBody.message}
          icons={mainBody.icons}
        />
      </div>
      <div id="about">
        {about.show && (
          <AboutMe
            heading={about.heading}
            message={about.message}
            link={about.imageLink}
            imgSize={about.imageSize}
            resume={about.resume}
          />
        )}
      </div>
      <div id="experience">
        {experiences.show && <Experience experiences={experiences} />}
      </div>
      <div id="projects">
        {repos.show && (
          <Project
            heading={repos.heading}
            username={repos.gitHubUsername}
            length={repos.reposLength}
            specfic={repos.specificRepos}
          />
        )}
      </div>
      <div id="leadership">
        {leadership.show && (
          <Leadership
            heading={leadership.heading}
            message={leadership.message}
            img={leadership.images}
            imageSize={leadership.imageSize}
          />
        )}
      </div>
      <div id="skills">
        {skills.show && (
          <Skills
            heading={skills.heading}
            hardSkills={skills.hardSkills}
            softSkills={skills.softSkills}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
