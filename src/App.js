import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Converter from './Components/Converter'

function App() {
  return (
    <div className="App">
      <Header />
      <Converter />
      <Footer/>
    </div>
  );
}

export default App;
