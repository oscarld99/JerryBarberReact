import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="banner">
      <div className="overlay"></div>
      <div className="image-border left">
        <img className="img" src="/henry.jpg" alt="Background Image" />
      </div>
      <h1>Jerry McWay Barber Shop</h1>
      <div className="image-border right">
        <img className="img" src="/henry.jpg" alt="Background Image" />
      </div>
    </header>
  );
};

export default Header; 