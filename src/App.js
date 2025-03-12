import React, { useState } from 'react'
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Database from './Components/Data';
import './App.css';

const App = () => {
  const [currentPage, selectCurrentPage] = useState("home");


  const renderPage = () => {
    switch (currentPage) {
      case "signin":
        return <Signin/>;
      case "signup":
        return <Signup/>;
      case "data":
        return <Database />;
      default: 
      return <Signin />;
    }
  }

  return (
    <div className='App'>
      <div className='button-container'>
        <button onClick={()=>selectCurrentPage("signin")}>Signin</button>
        <button onClick={()=>selectCurrentPage("signup")}>Signup</button>
        <button onClick={()=>selectCurrentPage("data")}>Database</button>
      </div>  
      {renderPage()}
    </div>
  )
}

export default App;