

import Note from "./components/Note.jsx";
import Mainpage from "./components/Mainpage.jsx";
import {  Route, Routes } from "react-router-dom";
import './App.css'

function App() {
  
  return (
    
    <>
      
        <Routes>
          <Route path="/" Component={Mainpage}></Route>
          <Route path="/create" Component={Note}></Route>
        </Routes>
  
      
      

   
    

    </>
  )
}

export default App
