import React from 'react';
import { Calendar, Users, MapPin } from 'lucide-react';

const TourSummary = ({ tour, translations, selectedDate }) => {
  if (!tour) return null;
  
  const { title, image, price, duration, groupSize, locations } = tour;
  const t = translations;
  
  // Format date
  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    const locale = t.langCode || 'en-US';
    return date.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="p-6 md:w-2/3">
          <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="flex items-center text-gray-600">
              <Calendar className="w-5 h-5 mr-2 text-pink-500" />
              <div>
                <div className="text-sm text-gray-500">{t.duration || 'Duration'}</div>
                <div>{duration} {t.days || 'days'}</div>
              </div>
            </div>
            
            <div className="flex items-center text-gray-600">
              <Users className="w-5 h-5 mr-2 text-pink-500" />
              <div>
                <div className="text-sm text-gray-500">{t.groupSize || 'Group Size'}</div>
                <div>{t.upTo || 'up to'} {groupSize} {t.people || 'people'}</div>
              </div>
            </div>
            
            <div className="flex items-center text-gray-600">
              <MapPin className="w-5 h-5 mr-2 text-pink-500" />
              <div>
                <div className="text-sm text-gray-500">{t.destinations || 'Destinations'}</div>
                <div>{locations.join(', ')}</div>
              </div>
            </div>
          </div>
          
          {selectedDate && (
            <div className="mt-3 p-3 bg-gray-50 rounded-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <div className="text-sm text-gray-500">{t.departureDate || 'Departure Date'}</div>
                  <div className="font-medium">{formatDate(selectedDate.date)}</div>
                </div>
                
                <div className="mt-2 md:mt-0">
                  <div className="text-sm text-gray-500">{t.price || 'Price'}</div>
                  <div className="font-bold text-pink-500 text-xl">
                    ${selectedDate.price} <span className="text-sm text-gray-500">{t.perPerson || 'per person'}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TourSummary;