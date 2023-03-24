
import './App.css';
import Login from './Pages/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Registration from './Pages/Registration';
import AuthLayout from './Layouts/AuthLayout';
import GuestLayout from './Layouts/GuestLayout';
import React, { useState } from 'react';


function App() {

  return (
    <React.Fragment>
      <Routes>

        <Route element={<AuthLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>

        <Route element={<GuestLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Route>

      </Routes>
    </React.Fragment>

  );
}

export default App;
