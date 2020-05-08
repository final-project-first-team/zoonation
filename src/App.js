import React from 'react';
import './App.css';

import AppBar from "./components/homepage/AppBar";
import Body from "./components/homepage/Body";
import Footer from "./components/homepage/Footer";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
