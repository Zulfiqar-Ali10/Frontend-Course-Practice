import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Compoents/Home';
import Cards from './Compoents/Card';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/cards"  element={<Cards/>} />
        </Routes>
       

      </div>
    </>
  );
}

export default App;
