import React,{useContext} from 'react'

import { data} from "./index";

function Messages() {
  const First = useContext(data);
  return (

    <>
     <h1>{First}</h1>
     </>
  )
}

export default Messages