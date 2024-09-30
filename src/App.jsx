import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {

  return (
    <>
      {/* Sessão Principal */}
      <Router>
        <div className="w-full min-h-screen bg-black">
          <Home />
        </div>
      </Router>
    </>
  )
}

export default App
