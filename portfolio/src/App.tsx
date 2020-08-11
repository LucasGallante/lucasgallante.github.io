import React from 'react';
import Header from "./components/Header";

import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
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
