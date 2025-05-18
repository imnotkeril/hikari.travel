// src/App.js
import React from 'react';
import { AppProvider } from './context/AppContext';
import MainComponent from './pages/MainComponent';

function App() {
  return (
    <AppProvider>
      <MainComponent />
    </AppProvider>
  );
}

export default App;