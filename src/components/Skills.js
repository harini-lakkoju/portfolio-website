import React, { useEffect } from 'react';

const Skills = () => {
  useEffect(() => {
    const skillItems = document.querySelectorAll('.skill-item');

    skillItems.forEach(skill => {
      const handleMouseEnter = () => {
        skill.style.color = '#1e1d1d';
        skill.style.transform = 'scale(1.2)';
        skill.style.transition = 'all 0.3s ease';
      };

      const handleMouseLeave = () => {
        skill.style.color = 'white';
        skill.style.transform = 'scale(1)';
      };

      skill.addEventListener('mouseenter', handleMouseEnter);
      skill.addEventListener('mouseleave', handleMouseLeave);

  
      return () => {
        skill.removeEventListener('mouseenter', handleMouseEnter);
        skill.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, []); 

  return (
    <section className="container my-5" id="skill-section">
      <div className="row align-items-center justify-content-center">
        <div className="col-md-8 text-center">
          <h2>Skills</h2>
          <ul className="list-inline">
            <li className="list-inline-item skill-item">HTML5</li>
            <li className="list-inline-item skill-item">CSS</li>
            <li className="list-inline-item skill-item">JavaScript</li>
            <li className="list-inline-item skill-item">Bootstrap</li>
            <li className="list-inline-item skill-item">ReactJS</li>
            <li className="list-inline-item skill-item">Node.js</li>
            <li className="list-inline-item skill-item">API</li>
            <li className="list-inline-item skill-item">SQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
