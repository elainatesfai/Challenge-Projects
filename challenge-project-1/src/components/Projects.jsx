import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/projects.css';

function Projects() {

  const navigate = useNavigate();

  const navigateToTrafficLights = () => {
    navigate('./tls');
  };

  const navigateToQA = () => {
    navigate('/q&a');
  };

  const navigateToTBL = () => {
    navigate('/tbl');
  };
 

  return (
    <div className='ProjectsContainer'>
      <div className='ProjectsTextContainer'>
          <h1>Our Projects</h1>
          <p>We have decomposed this much larger project into three distinct areas. These are:</p>
      </div>
      <div className='ProjectsContent'>

        {/* Traffic Light Project Card */}
        <button className='ProjectCard' onClick={navigateToTrafficLights}>
          <div className='ProjectCardIcon'>
            <i class='fas fa-traffic-light' />
          </div>
          <div className='ProjectCardTitle'>
            Traffic Light System
          </div>
        </button>

        {/* Q&A Project Card */}
        <button className='ProjectCard' onClick={navigateToQA}>
          <div className='ProjectCardIcon'>
            <i class='fas fa-clipboard-question' />
          </div>
          <div className='ProjectCardTitle'>
            Live Q&A
          </div>
        </button>

        {/* Team-based Learning Project Card */}
        <button className='ProjectCard' onClick={navigateToTBL}>
          <div className='ProjectCardIcon'>
            <i class='fas fa-people-group' />
          </div>
          <div className='ProjectCardTitle'>
            Team-based Learning
          </div>
        </button>
        </div>
    </div>
  )
}

export default Projects
