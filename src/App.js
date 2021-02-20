import React, { createContext, useContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Appointment from "./Components/Appointment/Appointment/Appointment";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/Login/privateRoute";
import Dashboard from "./Components/Dashborad/Dashborad/Dashboard";
import AllPatients from "./Components/AllPatients/AllPatients";
import AddDoctor from "./Components/Dashborad/AddDoctor/AddDoctor";


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <PrivateRoute path="/appointment">
          <Appointment></Appointment>
        </PrivateRoute>

        <Route path="/allPatients">
          <AllPatients></AllPatients>
        </Route>

        <PrivateRoute path="/dashboard/appointment">
          <Dashboard></Dashboard>
        </PrivateRoute>

        <Route path="/addDoctor">
          <AddDoctor></AddDoctor>
        </Route>

        <Route path="/login">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
