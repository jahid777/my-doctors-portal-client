import React from "react";
import chair from '../../image/chair.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange}) => {
  return (
    <main style={{ height: "600px" }} className="row d-flex align-items-center">
      <div className="col-md-4 offset-md-1 mb-5">
        <h1 style={{ color: " #3e465a" }}>
           Appointment
        </h1>
        <Calendar
        onChange={handleDateChange}
        value={new Date()}
      />
      </div>

      <div className="col-md-6">
        <img src={chair} className=" img-fluid" alt="" />
      </div>
    </main>
  );
};

export default AppointmentHeader;
