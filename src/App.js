import './App.css';
import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Routes } from 'react-router-dom'
import Landingpage from './Pages/landingpage';
import Book from './Components/book';
import Card from './Components/card';
import Travellerlogin from './Pages/travellerlogin';


function App() {

  return (
    <div > 
    <Router>
      <Routes>
      <Route exact path="/"  element={<Travellerlogin/>}/>

      </Routes>
    </Router>                 
    
    </div>
  );
}

export default App;