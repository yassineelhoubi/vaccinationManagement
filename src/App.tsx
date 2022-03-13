
import './App.css';
import { Dashboard, Home, VaccineForm, UserLayouts, LoginForm } from './pages';
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { RootState } from "./app/store";
import { useSelector } from "react-redux"
import { ReadCenters } from './components';
import { useState } from 'react';
import axios from 'axios';

function PrivateOutlet() {

  let [isLogged, setIsLogged] = useState<undefined | boolean>()
  
  let token = useSelector((state: RootState) => state.manager.token);

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  axios.get(`${process.env.REACT_APP_BASE_URL}api/manager/isManager`, config)
    .then((res) => {
      return setIsLogged(res.data.message);
    }).catch((err) => {
      setIsLogged(false);
    }) as any;

  if (isLogged === undefined) return null;
  return isLogged === true ? <Outlet /> : <Navigate to="/auth" />;
}
function App() {


  return (

    <Routes>
      {/* user Routes */}
      <Route path="/" element={<UserLayouts />} >
        <Route path="" element={<Home />} />
        <Route path="form" element={<VaccineForm />} />
      </Route>

      {/* login */}
      <Route path="auth" element={<LoginForm />} />

      {/* Manager Routes */}
      <Route path="/dash" element={<PrivateOutlet />} >
        <Route path="" element={<Dashboard />} >
          <Route path="readCenters" element={<ReadCenters />} />
        </Route>
      </Route>
    </Routes >
  );
}

export default App;
