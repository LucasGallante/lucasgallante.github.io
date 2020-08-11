import React from 'react';
import Header from "./components/Header";

import './styles.css'
import About from "./components/About";

function App() {
  return (
      <div className="app">
        <Header />
        <About />
      </div>
  );
}

export default App;
