import { useState } from 'react';

import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  const [toggle, setToggle] = useState(false);

  function handleClick() {
    setToggle((prevToggle) => !prevToggle);
  }

  return (
    <div>
      {toggle === false ? <Login onClick={handleClick} /> : <Signup onClick={handleClick} />}
    </div>
  );
}

export default App;
