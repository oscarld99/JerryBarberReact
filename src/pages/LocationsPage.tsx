import React, { useState } from 'react';

interface Location {
  id: number;
  name: string;
  address: string;
  email: string;
  phone: string;
  coordinates: { lat: number; lng: number };
}

const LocationsPage: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const locations: Location[] = [
    {
      id: 1,
      name: 'Bikini Bottom',
      address: '123 Conch St, Bikini Bottom, Ocean',
      email: 'bikini.bottom@jerrymcway.com',
      phone: '+1 (555) 123-4567',
      coordinates: { lat: 10.9685, lng: -74.7813 }
    },
    {
      id: 2,
      name: 'Evergreen Terrace',
      address: '742 Evergreen Terrace, Springfield',
      email: 'springfield@jerrymcway.com',
      phone: '+1 (555) 234-5678',
      coordinates: { lat: 10.9685, lng: -74.7813 }
    },
    {
      id: 3,
      name: 'Santo Domingo de Guzmán',
      address: 'Main St #89-12, Barranquilla',
      email: 'barranquilla@jerrymcway.com',
      phone: '+57 300 345 6789',
      coordinates: { lat: 10.9685, lng: -74.7813 }
    }
  ];

  return (
    <div className="locations-page">
      <div className="locations-hero">
        <h1>Our Locations</h1>
        <p>Find the branch nearest to you</p>
      </div>

      <div className="locations-container">
        <div className="map-section">
          <div className="map-placeholder">
            <div className="map-content">
              <h3>Interactive Map</h3>
              <p>Click on the markers to see the details</p>
              <div className="map-markers">
                {locations.map((location) => (
                  <button
                    key={location.id}
                    className={`map-marker ${selectedLocation?.id === location.id ? 'active' : ''}`}
                    onClick={() => setSelectedLocation(location)}
                  >
                    📍 {location.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="locations-list">
          <h2>Branches</h2>
          {locations.map((location) => (
            <div
              key={location.id}
              className={`location-card ${selectedLocation?.id === location.id ? 'active' : ''}`}
              onClick={() => setSelectedLocation(location)}
            >
              <div className="location-header">
                <h3>{location.name}</h3>
                <span className="location-status">Open</span>
              </div>
              <div className="location-details">
                <p><strong>Address:</strong> {location.address}</p>
                <p><strong>Phone:</strong> {location.phone}</p>
                <p><strong>Email:</strong> {location.email}</p>
              </div>
              <button className="view-details-btn">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedLocation && (
        <div className="location-modal">
          <div className="modal-content">
            <button 
              className="close-modal"
              onClick={() => setSelectedLocation(null)}
            >
              ×
            </button>
            <div className="location-info">
              <h2>{selectedLocation.name}</h2>
              <div className="info-grid">
                <div className="info-item">
                  <h4>📍 Address</h4>
                  <p>{selectedLocation.address}</p>
                </div>
                <div className="info-item">
                  <h4>📞 Phone</h4>
                  <p>{selectedLocation.phone}</p>
                </div>
                <div className="info-item">
                  <h4>✉️ Email</h4>
                  <p>{selectedLocation.email}</p>
                </div>
                <div className="info-item">
                  <h4>🕒 Hours</h4>
                  <p>Monday - Saturday: 8:00 AM - 8:00 PM<br/>
                  Sunday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="action-buttons">
                <button className="call-button">Call</button>
                <button className="email-button">Send Email</button>
                <button className="directions-button">Get Directions</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationsPage; 