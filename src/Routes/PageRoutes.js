import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard/Dashboard'
import Home from '../Pages/home/Home'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import OtpLogin from '../Pages/OtpLogin'
import DoctorList from '../Pages/DoctorList'
import Profile from '../Pages/Profile/Profile'
import ProfileContent from '../Pages/Profile/ProfileContent'
import MyBilling from '../Pages/Profile/MyBilling'
import Services from '../Pages/Services/Services'
import AboutUs from '../Pages/AboutUs/AboutUs'
import ContactUS from '../Pages/ContactUs/ContactUS'
import TermsAndConditions from '../Pages/Terms&conditions'
import PrivacyPolicy from '../Pages/PrivacyPolicy'



import Apointments from '../Pages/Apointments'
import Bookings from '../Pages/Profile/Bookings'
import Remainder from '../Pages/Remainder'
import LayersClinic from '../Pages/LayersClinic'
import BookAppointment from '../Pages/Profile/BookAppointment'
import Schedule from '../Pages/Profile/Schedule'
import PatientInfo from '../Pages/Profile/PatientInfo'
import Confirmation from '../Pages/Profile/Confirmation'
import Payment from '../Pages/Profile/Payment'
import SettingsPage from '../Pages/Profile/Settingss'
import SupportGrid from '../Pages/AccountSetting'
import ProtectedRoute from './ProtectedRoute'
import BookingGuide from '../Pages/BookingGuide'


const PageRoutes = () => {
    return (
        <div>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/services' element={<Services />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/contact-us' element={<ContactUS />} />
                <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
                <Route path='/privacy-policy' element={<PrivacyPolicy />} />


                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/otp-login' element={<OtpLogin />} />

                <Route path='/doctorlist' element={<ProtectedRoute><DoctorList /></ProtectedRoute>} />
                <Route path='/doctorlist/clinic' element={<ProtectedRoute><LayersClinic /></ProtectedRoute>} />

                {/* Protected Routes */}
                <Route path='/dashboard' element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                } />
                <Route path='/profile' element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                }>
                    <Route index element={<ProtectedRoute><ProfileContent /></ProtectedRoute>} />
                    <Route path='billing' element={<ProtectedRoute><MyBilling /></ProtectedRoute>} />
                    <Route path='bookings' element={<ProtectedRoute><Bookings /></ProtectedRoute>} />
                    <Route path='settings' element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
                    <Route path='support' element={<ProtectedRoute><SupportGrid /></ProtectedRoute>} />
                </Route>
                <Route path='/booking-guide' element={<ProtectedRoute><BookingGuide /></ProtectedRoute>} />

                <Route path='/my-billing' element={
                    <ProtectedRoute>
                        <MyBilling />
                    </ProtectedRoute>
                } />
                <Route path='/apointments' element={
                    <ProtectedRoute>
                        <Apointments />
                    </ProtectedRoute>
                } />
                <Route path='/remainder' element={
                    <ProtectedRoute>
                        <Remainder />
                    </ProtectedRoute>
                } />
                <Route path='/doctorlist/clinic/book-appointment' element={
                    <ProtectedRoute>
                        <BookAppointment />
                    </ProtectedRoute>
                } />
                <Route path='/doctorlist/clinic/schedule' element={
                    <ProtectedRoute>
                        <Schedule />
                    </ProtectedRoute>
                } />
                <Route path='/schedule' element={
                    <ProtectedRoute>
                        <Schedule />
                    </ProtectedRoute>
                } />
                <Route path='/doctorlist/clinic/patient-info' element={
                    <ProtectedRoute>
                        <PatientInfo />
                    </ProtectedRoute>
                } />
                <Route path='/doctorlist/clinic/confirmation' element={
                    <ProtectedRoute>
                        <Confirmation />
                    </ProtectedRoute>
                } />
                <Route path='/doctorlist/clinic/payment' element={
                    <ProtectedRoute>
                        <Payment />
                    </ProtectedRoute>
                } />
            </Routes>
        </div>
    )
}

export default PageRoutes
