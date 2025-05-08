
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Service from './components/Services/Service';
import About from './components/About/About';
import Cars from './components/Cars/Cars';
import Contact from './components/Contact/Contact';


const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Service />
      <About /> 
       <Cars /> 
      <Contact /> 
    </>
  );
};

export default App;

