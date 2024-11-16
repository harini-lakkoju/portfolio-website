import React from 'react';

const About = () => {
  return (
    <section className="container my-5" id="main-section">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src="https://img.freepik.com/free-photo/portrait-business-woman-working-laptop_1303-9727.jpg" 
               alt="woman img" className="img-fluid rounded shadow-sm" />
        </div>
        <div className="col-md-6">
          <h2>About Me</h2>
          <p style={{ fontSize: '18px' }}>“I am an aspiring  <b>React Developer</b> with a strong foundation in JavaScript, passionate about creating engaging, responsive, and user-friendly web applications. My in-depth understanding of JavaScript enhances my ability to build dynamic, interactive interfaces using React. Although I am early in my career, I am committed to continually refining my skills and staying up-to-date with the latest frontend technologies. I am eager to contribute my knowledge and enthusiasm to a team, taking on real-world challenges and building high-quality solutions.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
