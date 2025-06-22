import React from 'react';
import { Appointment } from '../types/Appointment';

interface AppointmentsTableProps {
  appointments: Appointment[];
}

const AppointmentsTable: React.FC<AppointmentsTableProps> = ({ appointments }) => {
  return (
    <div className="table-container">
      <table id="appointments">
        <thead>
          <tr>
            <th>Time</th>
            <th>Barber</th>
            <th>Client</th>
            <th>Service</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.time}</td>
              <td>{appointment.barber}</td>
              <td>{appointment.client}</td>
              <td>{appointment.service}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsTable; 