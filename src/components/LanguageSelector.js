// src/components/LanguageSelector.js
import React from 'react';

function LanguageSelector({ currentLang, setCurrentLang }) {
  return (
    <div className="flex space-x-2">
      <button 
        onClick={() => setCurrentLang('ru')} 
        className={`px-2 py-1 rounded ${currentLang === 'ru' ? 'bg-pink-100 text-pink-500' : ''}`}
      >
        RU
      </button>
      <button 
        onClick={() => setCurrentLang('en')} 
        className={`px-2 py-1 rounded ${currentLang === 'en' ? 'bg-pink-100 text-pink-500' : ''}`}
      >
        EN
      </button>
      <button 
        onClick={() => setCurrentLang('ja')} 
        className={`px-2 py-1 rounded ${currentLang === 'ja' ? 'bg-pink-100 text-pink-500' : ''}`}
      >
        JA
      </button>
    </div>
  );
}

export default LanguageSelector;