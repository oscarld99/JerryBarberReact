import React, { useState } from 'react';
import { Appointment } from '../types/Appointment';

interface AppointmentFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (appointment: Omit<Appointment, 'id'>) => void;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    time: '',
    barber: '',
    client: '',
    service: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ time: '', barber: '', client: '', service: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!isOpen) return null;

  return (
    <>
      <div id="appointmentForm" className="modal" style={{ display: 'block' }}>
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <h2>New Appointment</h2>
          <form id="newAppointmentForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="time">Time:</label>
              <input 
                type="time" 
                id="time" 
                name="time" 
                value={formData.time}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="barber">Barber:</label>
              <select 
                id="barber" 
                name="barber" 
                value={formData.barber}
                onChange={handleChange}
                required
              >
                <option value="">Select Barber</option>
                <option value="Yancha">Yancha</option>
                <option value="Elvis">Elvis</option>
                <option value="El Sayayin">El Sayayin</option>
                <option value="Picolo Daimacu">Picolo Daimacu</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="client">Client:</label>
              <input 
                type="text" 
                id="client" 
                name="client" 
                value={formData.client}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="service">Service:</label>
              <input 
                type="text" 
                id="service" 
                name="service" 
                value={formData.service}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="button-container">
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
      </div>
      <div id="modalOverlay" onClick={onClose}></div>
    </>
  );
};

export default AppointmentForm; 