import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

import Login from './pages/login/login';
import Home from './pages/home/home';

import { AuthProvider } from './context/auth';

const AppRoutes = () => {

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route exact path='/SignIn' element={<Login/>} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes;