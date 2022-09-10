import {useState} from "react";
// import './App.css';
import Messages from "./Messages";


function App() {
const [show, setshow] = useState(false);
  return (
    <div className="app">
        {show?<Messages/>:null}
        <button onClick={()=>setshow(!show)} >click me</button>
    </div>
  );
}

export default App;
