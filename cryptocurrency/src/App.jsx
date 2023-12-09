import React from 'react';
import './App.css'
import { BrowserRouter as Router,Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CurrencyConvert from './pages/CurrencyCovert';
import Header from './components/Header';
function App() {

  return (
    <Router>
      
     <Header/>
      <Routes>
        <Route
          exact
          path="/"
          element={<HomePage />}
        />
        <Route
          exact
          path="/currency"
          element={<CurrencyConvert />}
        />
       
      </Routes>
    </Router>
  )
}

export default App

/* <NavLink
        to="/"

      >
        HomePage
      </NavLink>
      <NavLink
        to="/currency"

      >
        Currency Convrter
      </NavLink>*/