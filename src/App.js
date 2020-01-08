import React from 'react';
import logo from './logo.svg';
import './App.css';

import '../src/libs/skeleton-css/normalize.css';
import '../src/libs/skeleton-css/skeleton.css';
import Home from './views/Home/Home';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
