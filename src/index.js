import ReactDom from "react-dom";
import {createContext  } from "react";
import App from "./App";

const data = createContext();
const Counter = ()=>{

  return(
      <div className="App">
        <data.Provider value={"hey this is sravan. How are you?"}>
        <p>Hello</p>
         <App />
        </data.Provider>
      </div>
  )
}

ReactDom.render(<Counter/>,document.getElementById("root"))
export {data}
export default Counter;