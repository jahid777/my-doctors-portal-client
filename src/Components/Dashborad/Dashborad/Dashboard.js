import React, { useContext, useEffect, useState } from "react";
import AppointmentsByDate from "../AppointmentsByDate/AppointmentsByDate";
import Sidebar from "../Sidebar/Sidebar";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {UserContext} from '../../../App';
// import { UserContext } from "../../App";


const containerStyle = {
  backgroundColor: "#F4FDFB",
  height: "100%",
};
const Dashboard = () => {

  
    //server a email tao pathaytesi
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
   

     //select kora date data base theke ane raktsei
    const [appointments, setAppointments] = useState([]);

    const [selectedDate, setSelectedDate] = useState(new Date());



    // console.log(selectedDate);
    const handleDateChange = date => {
        setSelectedDate(date)
    }

     useEffect(()=>{
         //server side a data pathaya abr read krer jonno appointment state a set kortesi...tar por appointment state ta AppointmentBydate namer compont a pathaytesi
         fetch('http://localhost:5000/appointmentsByDate',{
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({date: selectedDate, email: loggedInUser.email})
      })
      .then(res => res.json())
      .then(data => setAppointments(data))
     },[selectedDate])

  return (
    <section>
      <div style={containerStyle} className="container-fluid row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-3" style={{marginLeft:'120px'}}>
          <Calendar onChange={handleDateChange} value={new Date()} />
        </div>
        <div className="col-md-5" style={{marginLeft:'80px'}}>
          <AppointmentsByDate appointments={appointments} selectedDate={selectedDate}></AppointmentsByDate>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
