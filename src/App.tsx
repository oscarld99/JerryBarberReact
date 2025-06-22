import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ReservationsPage from './pages/ReservationsPage';
import ServicesPage from './pages/ServicesPage';
import LocationsPage from './pages/LocationsPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('inicio');

  const renderPage = () => {
    switch (currentPage) {
      case 'inicio':
        return <HomePage />;
      case 'reservas':
        return <ReservationsPage />;
      case 'servicios':
        return <ServicesPage />;
      case 'ubicaciones':
        return <LocationsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="App">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
};

export default App; 