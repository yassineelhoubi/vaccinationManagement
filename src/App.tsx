
import './App.css';
import { Dashboard, Home, VaccineForm, UserLayouts, LoginForm } from './pages';
import { Routes, Route } from "react-router-dom";
function App() {

  return (
    <Routes>

      <Route path="/" element={<UserLayouts />} >
        <Route path="" element={<Home />} />
        <Route path="form" element={<VaccineForm />} />
      </Route>

      <Route path="auth" element={<LoginForm />} />

      <Route path="/dash" element={<Dashboard />}>

      </Route>

    </Routes >
  );
}

export default App;
