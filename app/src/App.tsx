import React, { useEffect, useState} from 'react';
import './App.css';
import useUser from "./hooks/useUser";
import {loginWithGoogle, logOut} from "./firebase/utils";

function App() {
  const user = useUser();

  return (
    <div className="App">
      {!user 
        ? <button onClick={loginWithGoogle}>login</button>
        : <button onClick={logOut}>logout</button>
      }
      
    </div>
  );
}

export default App;
