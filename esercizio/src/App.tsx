import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details/:IdNews' element={<Details />} />
          </Routes>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
