import { useState } from 'react';
import './App.css';
import { Header } from './components';
import { Dashboard, Home } from './pages';
import { VaccineForm } from './pages';

function App() {
  const [takeShot, setTakeShot] = useState(false)

  return (
/*     <div className="app min-h-screen">
      <div className=" lg:pb-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <Header setTakeShot={setTakeShot} takeShot={takeShot} />
          {!takeShot ? <Home /> : <VaccineForm setTakeShot={setTakeShot} />}
        </div>
      </div>
    </div> */
    <Dashboard/>
  );
}

export default App;
