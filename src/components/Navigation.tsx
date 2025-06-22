import React, { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlePageChange = (page: string) => {
    onPageChange(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <h2>Jerry McWay</h2>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Desktop menu */}
        <ul className="nav-menu desktop">
          <li className={currentPage === 'inicio' ? 'active' : ''}>
            <button onClick={() => handlePageChange('inicio')}>Home</button>
          </li>
          <li className={currentPage === 'reservas' ? 'active' : ''}>
            <button onClick={() => handlePageChange('reservas')}>Reservations</button>
          </li>
          <li className={currentPage === 'servicios' ? 'active' : ''}>
            <button onClick={() => handlePageChange('servicios')}>Services</button>
          </li>
          <li className={currentPage === 'ubicaciones' ? 'active' : ''}>
            <button onClick={() => handlePageChange('ubicaciones')}>Locations</button>
          </li>
        </ul>

        {/* Mobile menu */}
        <ul className={`nav-menu mobile ${isMenuOpen ? 'active' : ''}`}>
          <li className={currentPage === 'inicio' ? 'active' : ''}>
            <button onClick={() => handlePageChange('inicio')}>Home</button>
          </li>
          <li className={currentPage === 'reservas' ? 'active' : ''}>
            <button onClick={() => handlePageChange('reservas')}>Reservations</button>
          </li>
          <li className={currentPage === 'servicios' ? 'active' : ''}>
            <button onClick={() => handlePageChange('servicios')}>Services</button>
          </li>
          <li className={currentPage === 'ubicaciones' ? 'active' : ''}>
            <button onClick={() => handlePageChange('ubicaciones')}>Locations</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation; 