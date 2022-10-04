import React from 'react';
import './App.css';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/search' element={<SearchPage />} />
          {/* Search page (results) */}
          <Route path='/' element={<Home />} />
            {/* Home page (search on) */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
