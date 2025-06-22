import React, { useState } from 'react';
import AppointmentForm from '../components/AppointmentForm';
import AppointmentsTable from '../components/AppointmentsTable';
import { Appointment } from '../types/Appointment';

const ReservationsPage: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: 1,
      time: '09:00 AM',
      barber: 'El Sayayin',
      client: 'Pablo Escobar',
      service: 'Cerquillos'
    },
    {
      id: 2,
      time: '11:00 AM',
      barber: 'El Sayayin',
      client: 'Diomedez',
      service: 'Corte y barba'
    },
    {
      id: 3,
      time: '11:00 AM',
      barber: 'Picolo Daimacu',
      client: 'Ichigo',
      service: 'Cerquillos'
    },
    {
      id: 4,
      time: '10:00 AM',
      barber: 'Elvis',
      client: 'Sailor Moon',
      service: 'El Daddy Yankee'
    },
    {
      id: 5,
      time: '01:00 PM',
      barber: 'Elvis',
      client: 'Ichigo',
      service: 'Honguito'
    },
    {
      id: 6,
      time: '18:45 PM',
      barber: 'Yancha',
      client: 'oscar lora',
      service: 'el siete'
    }
  ]);

  const handleAddAppointment = (newAppointment: Omit<Appointment, 'id'>) => {
    const appointment: Appointment = {
      ...newAppointment,
      id: Date.now()
    };
    setAppointments([...appointments, appointment]);
    setIsFormOpen(false);
  };

  return (
    <div className="reservations-page">
      <div className="reservations-hero">
        <h1>Reservation Management</h1>
        <p>Manage your appointments and schedule new reservations</p>
      </div>

      <div className="reservations-container">
        <div className="reservations-header">
          <div className="stats-section">
            <div className="stat-card">
              <h3>Total Appointments</h3>
              <span className="stat-number">{appointments.length}</span>
            </div>
            <div className="stat-card">
              <h3>Today</h3>
              <span className="stat-number">
                {appointments.filter(apt => apt.time.includes('AM') || apt.time.includes('PM')).length}
              </span>
            </div>
            <div className="stat-card">
              <h3>Upcoming</h3>
              <span className="stat-number">
                {appointments.filter(apt => apt.time.includes('PM')).length}
              </span>
            </div>
          </div>
          
          <button 
            className="new-reservation-btn"
            onClick={() => setIsFormOpen(true)}
          >
            <span>+</span>
            New Reservation
          </button>
        </div>

        <div className="table-section">
          <div className="table-header">
            <h2>Scheduled Appointments</h2>
            <div className="table-actions">
              <input 
                type="text" 
                placeholder="Search appointment..." 
                className="search-input"
              />
              <select className="filter-select">
                <option value="">All Barbers</option>
                <option value="Yancha">Yancha</option>
                <option value="Elvis">Elvis</option>
                <option value="El Sayayin">El Sayayin</option>
                <option value="Picolo Daimacu">Picolo Daimacu</option>
              </select>
            </div>
          </div>

          <AppointmentsTable appointments={appointments} />
        </div>
      </div>

      <AppointmentForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleAddAppointment}
      />
    </div>
  );
};

export default ReservationsPage; 