import React from 'react';
import './App.css';
import Homepage from './components/Homepage'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
        <div>
          <Homepage />
        </div>
      </BrowserRouter>
  );
}

export default App;
