// src/components/WhyChooseUs.js
import React from 'react';

const WhyChooseUs = ({ translations, currentLang }) => {
  const t = translations[currentLang].whyChooseUs;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">{t.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-pink-500 text-2xl">🗺️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{t.reason1.title}</h3>
            <p className="text-gray-600">{t.reason1.description}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-500 text-2xl">💬</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{t.reason2.title}</h3>
            <p className="text-gray-600">{t.reason2.description}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-500 text-2xl">❤️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{t.reason3.title}</h3>
            <p className="text-gray-600">{t.reason3.description}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-500 text-2xl">👥</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{t.reason4.title}</h3>
            <p className="text-gray-600">{t.reason4.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;