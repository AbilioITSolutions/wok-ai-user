import React, { useState } from "react";
import { Box } from "@mui/material";



import SelectADoctor from "./Pages/Profile/SelectADoctor";
import ScheduleTime from "./Pages/Profile/ScheduleTime";
import PatientInfo from "./Pages/Profile/PatientInfo";
import Payment from "./Pages/Profile/Payment";
import Confirmation from "./Pages/Confirmation";


import './App.css';
import Buttons from './Pages/Buttons';
import LayersClinic from './Pages/LayersClinic';


import AccountSettings from './Pages/AccountSetting';
import Bookings from './Pages/Bookings';
import MyBilling from './Pages/Profile/MyBilling';
import Profile from './Pages/Profile/Profile';
import SettingsPage from './Pages/Profile/Settingss';
// import PageRoutes from './Routes/PageRoutes';

import Home from "./Pages/Home/Home"



import Login from "./Pages/Login";
import Register from "./Pages/Register";
import DoctorList from "./Pages/DoctorList";
// import Footer from "./components/Footer";
// import PageRoutes from './Routes/PageRoutes';
import ContactUs from "./Pages/ContactUs/ContactUS";
import AboutUs from "./Pages/AboutUs/AboutUs";
function App() {
  const [activeStep, setActiveStep] = useState(0);

  // const renderPage = () => {
  //   switch (activeStep) {
  //     case 0:
  //       return <SelectADoctor onNext={() => setActiveStep(1)} />;
  //     case 1:
  //       return <ScheduleTime onNext={() => setActiveStep(2)} />;
  //     case 2:
  //       return <PatientInfo onNext={() => setActiveStep(3)} />;
  //     case 3:
  //       return <Payment onNext={() => setActiveStep(4)} />;
  //     case 4:
  //       return <Confirmation />;
  //     default:
  //       return null;
  //   }
  // };

  return (

    <Box sx={{ width: '100%', overflowX: 'hidden', p: 0, m: 0 }}>
      <Home />





      <LayersClinic />
      <Buttons />



      {/* <Dashboard/> */}



      <Profile />
      <MyBilling />
      <Bookings />
      <SettingsPage />
      <AccountSettings />
      {/* <PageRoutes/> */}





    </Box>


    <Box sx={{ width: "100%", overflowX: "hidden", p: 0, m: 0 }}>
      {/* <Home /> */}
      {/* <AboutUs /> */}
      {/* <ContactUs /> */}
      {/* <LayersClinic /> */}
      {/* <Buttons />  */}
      {/* <DoctorList/> */}
      {/* <Dashboard/> */}
      {/* <Profile/>
      <MyBilling/>
      <Bookings/>
      <SettingsPage/>
      <AccountSettings/> */}
      {/* <PageRoutes/> */}
import PageRoutes from "./Routes/PageRoutes";

function App() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Box>
      <PageRoutes />
    </Box>
  );
}

export default App;
