import React, {useContext, useEffect, useState} from 'react';
import './App.css';
import {loginWithGoogle, logOut} from "./firebase/utils";
import Dashboard from "./components/Dashboard";
import LandingPage from "./components/LandingPage/LandingPage";
import {UserContext} from "./contexts/UserContext";
import {Provider} from "react-redux";
import store from "./redux/store";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ThemeStyles from "./styled-components/Theme";
import GlobalStyles from './styled-components/GlobalStyles';
import AppHeader from "./components/AppHeader";
import LoginPage from './components/LoginPage';

function App() {

  const user = useContext(UserContext);


  return (
    <ThemeStyles>
      <GlobalStyles />
      <div className="App">
        <Provider store={store}>
          <Router>
            <AppHeader />
            <Routes>
              <Route  path="/" element={<LandingPage />} />
              <Route path="dashboard" element={<Dashboard />} />
              
              <Route path="login" element={<LoginPage />} />
            </Routes>
          

            
          </Router>
          </Provider>
      </div>
    </ThemeStyles>
  );
};

export default App;
