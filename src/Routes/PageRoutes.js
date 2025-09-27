import React from 'react'
import { Route, Routes } from 'react-router'
import Dashboard from '../Pages/Dashboard/Dashboard'
import Home from '../Pages/home/Home'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import DoctorList from '../Pages/DoctorList'
import Profile from '../Pages/Profile/Profile'
import MyBilling from '../Pages/Profile/MyBilling'

const PageRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/services' element={<Home />} />
                <Route path='/about-us' element={<Home />} />
                <Route path='/contact-us' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />

                <Route path='/doctor-list' element={<DoctorList />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/my-billing' element={<MyBilling />} />
            </Routes>
        </div>
    )
}

export default PageRoutes
