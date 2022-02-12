import React from 'react';
import './style.css';

import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './components/home';
import AddPerson from './components/addPerson';
import EditPerson from './components/editPerson';

export default function App() {
  return (
    <div>
      <Navbar />
      <ToastContainer />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add" element={<AddPerson />} />
        <Route exact path="/edit/:id" element={<EditPerson />} />
      </Routes>
    </div>
  );
}
