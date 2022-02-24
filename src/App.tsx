import { AlertColor } from '@mui/material';
import { useState } from 'react';
import './App.css';
import { Header } from './components';
import { Btn } from './components';
import { CustomizedSnackbar } from './components';
import { Home } from './pages';
import { Layout } from './pages';

type custom = AlertColor | 'danger'

function App() {
  const [takeShot, setTakeShot] = useState(false)

  return (
    <div className="app min-h-screen">
      <div className=" lg:pb-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <Header setTakeShot={setTakeShot} takeShot={takeShot} />
          {!takeShot ? <Home /> : <Layout setTakeShot={setTakeShot} />}

        </div>
      </div>
    </div>
  );
}

export default App;
