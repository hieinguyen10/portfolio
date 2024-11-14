import React from 'react';
import './styles/RightSide.css';
import EmbedGlobe from '../data/embedGlobe'
import socialMedia from '../data/socialMedia'

function SocialMediaList() {
  return (
    <ul>
      {socialMedia.map((platform, index) => (
        <li key={index}>
          <a href={platform.url} target="_blank" rel="noopener noreferrer">{platform.icon} {platform.name}</a>
        </li>
      ))}
    </ul>
  );
}

const RightSide = () => {
  return (
    <section className='content-section'>
      <div className='section status'>
        <div className='status-dot'/>
        <p>Available for work</p>
      </div>
      <h1>HIEU NGUYEN</h1>
      <h2>Front-End Development</h2>
      <div className='section buttons'>
        <button className='button download'>Download CV</button>
        <button className='button contactMe'>Contact Me</button>
      </div>
      <h1>About Me</h1>
      <div className='section aboutMe'>
        <div className='wrapper location'>
          <h2>Montreal, Quebec, Canada</h2>
          <EmbedGlobe/>
        </div>
        <div className='wrapper contactInfo'>
          <h2>Connect with me</h2>
          <div className='socialMedia'><SocialMediaList/></div>
        </div>
      </div>
      <div className='skills'>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>C#</li>
          <li>React</li>
          <li>Boostrap</li>
          <li>Python</li>
        </ul>
      </div>
      <div>
        <h1>Projects</h1>
      </div>
    </section>
  )
}

export default RightSide
