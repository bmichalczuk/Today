import React, {useContext, useEffect, useState} from 'react';
import './App.css';
import {loginWithGoogle, logOut} from "./firebase/utils";
import Dashboard from "./components/Dashboard";
import LandingPage from "./components/LandingPage/LandingPage";
import {UserContext} from "./contexts/UserContext";
import {Provider} from "react-redux";
import store from "./redux/store";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ThemeStyles from "./styled-commponents/Theme";

function App() {

  const user = useContext(UserContext);


  return (
    <ThemeStyles>
      <div className="App">
        <header>
        {!user 
            ? <button onClick={loginWithGoogle}>login</button>
            : <button onClick={logOut}>logout</button>
          }
        </header>
        
        <Provider store={store}>
          <Router>
            <Routes>
              <Route  path="/" element={<LandingPage />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Routes>
          

            
          </Router>
          </Provider>
      </div>
    </ThemeStyles>
  );
};

export default App;
