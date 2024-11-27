import React, { useState } from 'react';
import './App.css';
import Banner from './Compoents/Banner';
import Cards from './Compoents/Card';
import Slider from './Compoents/Slider';
import Footer from './Compoents/Footer';
import Header from './Compoents/Header';
import WeatherApp from './Compoents/WeatherApp';
import { Routes } from 'react-router-dom';
import { Route } from 'lucide-react';




function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Routes>
          <Route />
        </Routes>
        <Header />
        <Banner />
        <Cards />
        <WeatherApp />
        <Slider />
        <Footer />

      </div>
    </>
  );
}

export default App;
