import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Compoents/Home';
import ServicesPage from './Pages/ServicesPage';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/servicespage"  element={<ServicesPage/>} />
        </Routes>
       

      </div>
    </>
  );
}

export default App;
