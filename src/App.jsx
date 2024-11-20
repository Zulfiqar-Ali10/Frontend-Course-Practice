import React, { useState } from 'react';
import './App.css';
import Header from './Compoents/Header';
import Banner from './Compoents/Banner';
import Cards from './Compoents/Card';



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Header />
        <Banner/>
        <Cards/>
        <h2 className='m-auto text-center mt-5 text-blue-600 text-5xl bg-blue-300 pt-5 pb-5 rounded w-[400px]'>
          Hello World!
        </h2>
       
      </div>
    </>
  );
}

export default App;
