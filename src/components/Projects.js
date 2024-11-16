import React from 'react';

const Projects = () => {
  return (
    <section className="projects-section container my-5">
      <h2 style={{ color: "white" }}>Projects</h2>
      <div className="row justify-content-center">
        <div className="col-md-5 m-4">
          <div className="project-description row align-items-center justify-content-center">
            <i className="fas fa-users"></i>
            <h4 className="apply-padding">User Management Database</h4>
            <p>This React User Management System is a fully functional web application designed for managing users in a system. It allows users to add, edit, and delete user details. It uses React Router for navigation, state management for handling data, and integrates with a mock API to manage user data. This project demonstrates my skills in React, CRUD operations, and API integration.</p>
            <a href="https://github.com/harini-lakkoju/User-Management-Dashboard" target="_blank" rel="noopener noreferrer" className="link-padding-top" style={{ color: "white" }}><b>View on GitHub</b></a>
          </div>
        </div>

        <div className="col-md-5 m-4">
          <div className="project-description row align-items-center justify-content-center">
            <i className="fas fa-cloud-sun"></i>
            <h4 className="apply-padding">Weather Application</h4>
            <p>This weather app allows users to get real-time weather information for any city. By entering a city name, the app fetches data from the OpenWeatherMap API and displays key weather details such as temperature, weather conditions, humidity, and wind speed. Built with React, the app features a clean, user-friendly interface that provides an interactive and responsive experience.</p>
            <a href="https://github.com/harini-lakkoju/weather-app" target="_blank" rel="noopener noreferrer" className="link-padding-top m-4" style={{ color: "white" }}><b>View on GitHub</b></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
