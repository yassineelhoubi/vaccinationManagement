import { useState } from 'react';
import './App.css';
import { Dashboard, Home, VaccineForm, UserLayouts } from './pages';
import { Routes, Route } from "react-router-dom";
function App() {

  return (
    <Routes>

      <Route path="/" element={<UserLayouts />} >
        <Route path="" element={<Home />} />
        <Route path="form" element={<VaccineForm />} />
      </Route>
      <Route path="/dash" element={<Dashboard />}>

      </Route>

    </Routes >
  );
}

export default App;
