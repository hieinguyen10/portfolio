import React from 'react';
import './styles/InformationSide.css';
import socialMedia from '../data/socialMedia'
import skills from '../data/skills'
import ProjectsGallery from './ProjectsGallery';
import { HiCloudArrowDown } from "react-icons/hi2";
import { HiEnvelope } from "react-icons/hi2";

const SocialMediaList = () => {
  return (
    <ul>
      {socialMedia.map((platform, index) => (
        <li key={index}>
          <a href={platform.url} target="_blank" rel="noopener noreferrer">{platform.icon}<p style={{marginLeft:'20px'}}>{platform.name}</p></a>
        </li>
      ))}
    </ul>
  );
}

const SkillsList = () => {
  return (
    <ul>
      {skills.map((skill, index1) => (
        <li key={index1}>
          {skill.icon} {skill.name}
        </li>
      ))}
    </ul>
  );
}

const InformationSide = () => {
  return (
    <section className='content-section'>
      <div className='section status'>
        <div className='status-dot'/>
        <p>Available for work</p>
      </div>
      <div className='section introduction'>
        <h1>HIEU NGUYEN</h1>
        <h1>Front-End Development</h1>
        <p style={{marginTop:"20px", marginBottom:"50px"}}>I'm passionate about programming and front-end development, and constantly improving my skills to become a versatile full-stack developer while staying curious and committed to growth</p>
      </div>
      <div className='section buttons'>
        <button className='button download'><HiCloudArrowDown />Download CV</button>
        <button className='button contactMe'><HiEnvelope />Contact Me</button>
      </div>
      <h1>About Me</h1>
      <div className='section aboutMe'>
        <div className='wrapper location'>
          <h2>Montreal, Quebec, Canada</h2>
          <div className="embedGlobe">
            <iframe
              src="https://gifer.com/embed/gzZ"
              width="300"
              height="300"
              style={{ pointerEvents: 'none' }}
              frameBorder="0"
              allowFullScreen
              title="GIF"
        />
    </div>
        </div>
        <div className='wrapper contactInfo'>
          <h2>Connect with me</h2>
          <div className='socialMedia'><SocialMediaList/></div>
        </div>
      </div>
      <div className='section skills'>
        <SkillsList/>
      </div>
      <div className='section projects'>
        <ProjectsGallery/>
      </div>
    </section>
  )
}

export default InformationSide
