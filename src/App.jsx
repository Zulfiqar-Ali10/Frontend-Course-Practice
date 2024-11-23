import React, { useState } from 'react';
import './App.css';
import Banner from './Compoents/Banner';
import Cards from './Compoents/Card';
import Slider from './Compoents/Slider';
import Footer from './Compoents/Footer';
import Header from './Compoents/Header';
import WeatherApp from './Compoents/WeatherApp';




function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
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
