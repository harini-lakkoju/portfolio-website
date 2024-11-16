import React from 'react';

const Header = () => {
  const handleClick = () => {
    alert('Hello, welcome to my portfolio! :)');
  };

  return (
    <header>
      <h1>Hello, I'm Harini</h1>
      <p>Aspiring React Developer</p>
      <button className="btn btn-primary" onClick={handleClick}>
        Click Me
      </button>
    </header>
  );
};

export default Header;

