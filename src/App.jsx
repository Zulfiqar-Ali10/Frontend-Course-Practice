import React, { useState } from 'react';
import './App.css';
import Header from './Compoents/Header';
import Banner from './Compoents/Banner';
import Cards from './Compoents/Card';
import Slider from './Compoents/Slider';



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Header />
        <Banner/>
        <Cards/>
       <Slider/>
       
      </div>
    </>
  );
}

export default App;
