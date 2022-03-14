
import './App.css';
import { Dashboard, Home, VaccineForm, UserLayouts, LoginForm } from './pages';
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { RootState } from "./app/store";
import { useSelector } from "react-redux"
import { ReadCenters } from './components';
import { useState } from 'react';
import axios from 'axios';

type Props = {
  role: string
}
function PrivateOutlet({ role }: Props) {

  let [isLogged, setIsLogged] = useState<undefined | boolean>()

  let token = useSelector((state: RootState) => state.manager.token);

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  let url = `${process.env.REACT_APP_BASE_URL}api/manager/`
  if (role === "manager") {
    url = url + "isManager"
  }
  else {
    url = url + "isAdmin"
  }

  axios.get(url, config)
    .then((res) => {
      return setIsLogged(res.data.message);
    }).catch((err) => {
      setIsLogged(false);
    }) as any;

  if (isLogged === undefined) return null;
  return isLogged === true ? <Outlet /> : <Navigate to="/auth" />;
}
function Test() {
  return (
    <h1>test</h1>
  )
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
      <Route path="/dash-m" element={<PrivateOutlet role="manager" />} >
        <Route path="" element={<Dashboard />} >
          <Route path="readCenters" element={<ReadCenters />} />
        </Route>
      </Route>

      {/* Admin Routes */}
      <Route path="/dash-a" element={<PrivateOutlet role="admin" />} >
        <Route path="" element={<Dashboard />} >
          <Route path="test" element={<Test />} />
        </Route>
      </Route>

    </Routes >
  );
}

export default App;
