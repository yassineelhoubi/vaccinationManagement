
import './App.css';
import { Dashboard, Home, VaccineForm, UserLayouts, LoginForm } from './pages';
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { RootState } from "./app/store";
import { useSelector } from "react-redux"

function PrivateOutlet() {
  const isLooged = useSelector(
    (state: RootState) => state.manager.isLogged
  );

  // setTimeout(() =>{auth = false;},3000)
  console.log(isLooged);

  // auth = true;
  return isLooged ? <Outlet /> : <Navigate to="/auth" />;
}
function App() {


  return (

    <Routes>

      <Route path="/" element={<UserLayouts />} >
        <Route path="" element={<Home />} />
        <Route path="form" element={<VaccineForm />} />
      </Route>

      <Route path="auth" element={<LoginForm />} />

      <Route path="/dash" element={<PrivateOutlet />} >
        <Route index element={<Dashboard />} />

      </Route>

    </Routes >
  );
}

export default App;
