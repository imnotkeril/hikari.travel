// src/components/FeatureTour.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Star, Calendar, Users } from 'lucide-react';
import TourCard from './TourCard';

const FeatureTour = ({ translations, currentLang, tours, bookTour }) => {
  const navigate = useNavigate();
  const t = translations[currentLang].featuredTours;

  const handleNavigate = (path) => {
    navigate(`/${path === 'home' ? '' : path}`);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">{t.title}</h2>
          <a 
            onClick={() => handleNavigate('tours')} 
            className="text-pink-500 hover:text-pink-600 flex items-center cursor-pointer"
          >
            {t.viewAll}
            <ArrowRight className="ml-1 w-4 h-4" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} bookTour={bookTour} translations={translations} currentLang={currentLang} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureTour;