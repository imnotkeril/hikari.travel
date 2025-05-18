// src/components/HeroBanner.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

const HeroBanner = ({ translations, currentLang }) => {
  const navigate = useNavigate();
  const t = translations[currentLang].hero;

  const handleNavigate = (path) => {
    navigate(`/${path === 'home' ? '' : path}`);
  };

  return (
    <section className="relative py-20 bg-cover bg-center" 
      style={{ backgroundImage: 'url(https://source.unsplash.com/featured/?fujisan,japan)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative container mx-auto px-4 text-center text-white py-20">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t.title}</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">{t.subtitle}</p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button 
            onClick={() => handleNavigate('booking')}
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full"
          >
            {t.bookNow}
          </button>
          <button 
            onClick={() => handleNavigate('tours')}
            className="bg-transparent hover:bg-white hover:text-gray-800 text-white font-bold py-3 px-8 rounded-full border border-white"
          >
            {t.cta}
          </button>
        </div>

        <div className="max-w-3xl mx-auto mt-12">
          <div className="flex flex-col sm:flex-row">
            <div className="relative flex-grow mb-3 sm:mb-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder={t.searchPlaceholder} 
                className="pl-10 pr-4 py-3 w-full rounded-l-md rounded-r-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-800"
              />
            </div>
            <button 
              onClick={() => handleNavigate('tours')}
              className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-6 rounded-md sm:rounded-l-none"
            >
              {t.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;