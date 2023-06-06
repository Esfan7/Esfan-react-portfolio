import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";



function App() {

  const [screen, setScreen] = useState("home");
  return (
    <div className="App">
      {screen === "home" && <Portfolio setScreen={setScreen}/>}
      {screen === "about" && <About  setScreen={setScreen}/>}
      {screen === "contact" && <Contact  setScreen={setScreen}/>}
      {screen === "portfolio" && <Portfolio  setScreen={setScreen}/>}
      {screen === "resume" && <Resume  setScreen={setScreen}/>}
    </div>
  );
}

export default App;
