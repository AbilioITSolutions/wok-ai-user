import './App.css';
import AccountSettings from './Pages/AccountSetting';
import Bookings from './Pages/Bookings';
import MyBilling from './Pages/Profile/MyBilling';
import Profile from './Pages/Profile/Profile';
import SettingsPage from './Pages/Profile/Settingss';
// import PageRoutes from './Routes/PageRoutes';

function App() {
  return (
    <div>
      <Profile/>
      <MyBilling/>
      <Bookings/>
      <SettingsPage/>
      <AccountSettings/>
      {/* <PageRoutes/> */}
    
      
    </div>
       
   
  );
}

export default App;
