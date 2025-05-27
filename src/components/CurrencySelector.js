// src/components/CurrencySelector.js
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { SUPPORTED_CURRENCIES } from '../context/AppContext';

function CurrencySelector({ currentCurrency, setCurrentCurrency, currentLang }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Закрываем dropdown при клике вне его
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCurrencyChange = (currency) => {
    setCurrentCurrency(currency);
    setIsOpen(false);
  };

  const currentCurrencyInfo = SUPPORTED_CURRENCIES[currentCurrency];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-pink-500 rounded-md hover:bg-gray-100 transition-colors"
        aria-label="Select Currency"
      >
        <span className="mr-1 font-mono text-sm min-w-[16px]">{currentCurrencyInfo.symbol}</span>
        <span className="mr-1 font-medium">{currentCurrency}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-52 bg-white rounded-md shadow-lg border border-gray-200 z-50">
          <div className="py-1 max-h-64 overflow-y-auto">
            {Object.entries(SUPPORTED_CURRENCIES).map(([code, info]) => (
              <button
                key={code}
                onClick={() => handleCurrencyChange(code)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                  currentCurrency === code
                    ? 'bg-pink-50 text-pink-600 font-medium'
                    : 'text-gray-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="font-mono mr-3 min-w-[20px] text-center">{info.symbol}</span>
                    <span className="font-medium mr-2">{code}</span>
                  </div>
                  <span className="text-xs text-gray-500 truncate ml-2">
                    {info.name[currentLang]}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CurrencySelector;