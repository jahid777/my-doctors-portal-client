import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentsByDate = ({appointments,selectedDate}) => {
    // console.log(appointments);
    return (
        <div>
        <h2 className="text-brand text-center">Appointments</h2>
        <p style={{textAlign:'center'}}>{selectedDate.toDateString()}</p>
        {
            appointments.length ?
             <AppointmentShortList appointments={appointments} selectedDate={selectedDate}></AppointmentShortList>
            :
            <div className="p-5">
                <h4 className="lead text-center">No Appointments for this Date</h4>
            </div>
        }
    </div>
    );
};

export default AppointmentsByDate;