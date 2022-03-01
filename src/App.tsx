
import './App.css';
import { Dashboard, Home, VaccineForm, UserLayouts, LoginForm } from './pages';
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { RootState } from "./app/store";
import { useSelector } from "react-redux"

function PrivateOutlet() {

  const isLogged = useSelector(
    (state: RootState) => state.manager.isLogged
  );

  return isLogged ? <Outlet /> : <Navigate to="/auth" />;
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
        <Route index element={<Dashboard />} />
      </Route>

    </Routes >
  );
}

export default App;
