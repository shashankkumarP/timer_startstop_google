import logo from './logo.svg';
import './App.css';
import { Timer } from './components/Timer';
import { Stopwatch } from './components/Stopwatch';
import React,{useState,useRef} from 'react';
import styles from "./components/timer.module.css"


function App() {

  let [tog,setTog] = useState(false);
  return (
    <div  >
      <div className="App">
        <h1 onClick={()=>{setTog(false);console.log(tog)}}>Timer</h1>
        <h1 onClick={()=>{setTog(true);console.log(tog)}}>Stopwatch</h1>
      </div>
      <div className={styles.timer}>{tog ? <Stopwatch/>: <Timer/>}</div>
      
      
    </div>
  );
}

export default App;
