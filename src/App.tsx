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
  const [text , setText] = useState("there's no text right now !!!!");
  const [color , setColor] = useState<custom>("success");
  const [state , setState] = useState(false);

  const handleClick = () => {
    console.log("clicked on button")
    setText("iriz wa iriz")
    setColor("info");
    setState(true);
    console.log(text+" "+ color);
  }

  return (
    <div className="app min-h-screen">
      <div className=" lg:pb-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div onClick={handleClick}>
            <Btn/>
          </div>
          <CustomizedSnackbar text={text} color={color} state={state} setState={setState}></CustomizedSnackbar>
          <Header setTakeShot={setTakeShot} takeShot={takeShot} />
          {!takeShot ? <Home /> : <Layout />}

        </div>
      </div>
    </div>
  );
}

export default App;
