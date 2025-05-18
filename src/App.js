// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import MainComponent from './pages/MainComponent';

function App() {
  return (
    <Router>
      <AppProvider>
        <MainComponent />
      </AppProvider>
    </Router>
  );
}

export default App;