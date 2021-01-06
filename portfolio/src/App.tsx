import React from 'react';

import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";

import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div className="app">
        <Header />
        <About />
        <Skills />
      </div>
  );
}

export default App;
