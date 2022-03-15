
import './App.css';
import { Dashboard, Home, VaccineForm, UserLayouts, LoginForm, NotFound } from './pages';
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

  let ManagerToken = useSelector((state: RootState) => state.manager.token);
  let adminToken = useSelector((state: RootState) => state.admin.token);
  let token: string | undefined = ""

  let url = `${process.env.REACT_APP_BASE_URL}api/`
  if (role === "manager") {
    url = url + "manager/isManager";
    token = ManagerToken;
  }
  else {
    url = url + "admin/isAdmin";
    token = adminToken;
  }
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

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
      <Route path="auth/:actor" element={<LoginForm />} />

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
      {/* 404 Not Found Page */}
      <Route path="*" element={<NotFound />} />
    </Routes >
  );
}

export default App;
