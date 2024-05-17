import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './components/search';
import User from './components/user';
import './styles/index.css'; 

function App() {
  return (
    <Router>
      <div className="app">
        <div className="search-container">
          <Search />
        </div>
        <Routes>
          <Route path="/user/:username" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
