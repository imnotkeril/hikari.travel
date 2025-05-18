// src/components/TourCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Calendar, Users, MapPin } from 'lucide-react';

const TourCard = ({ tour, bookTour, translations, currentLang }) => {
  console.log("TourCard rendering:", tour.id);
  console.log("Tour image path:", tour.image);

  // Затем проверим существование файла явно
  const imagePath = tour.image || `/images/tours/${tour.id}.jpg`;
  console.log("Using image path:", imagePath);

  // Получаем нужные переводы в зависимости от текущего языка
  const t = {
    days: translations[currentLang].featuredTours.days,
    people: translations[currentLang].featuredTours.people,
    bookNow: translations[currentLang].featuredTours.bookNow,
    reviews: translations[currentLang].testimonials.title.toLowerCase()
  };

  const handleBookTour = () => {
    bookTour(tour);
    navigate('/booking');
  };

  const handleTourDetails = () => {
    bookTour(tour);
    navigate(`/tour/${tour.id}`);
  };

  // Функция для обработки ошибок загрузки изображений
  const handleImageError = (e) => {
    console.error(`Error loading image for tour ${tour.id}`);
    e.target.onerror = null; // Предотвращает бесконечный цикл
    e.target.src = "/images/default-tour.jpg"; // Используем гарантированно существующее запасное изображение
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48">
        <img
          src={tour.image || `/images/tours/${tour.id}.jpg`}
          alt={tour.title[currentLang]}
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
        <div className="absolute top-4 right-4 bg-white py-1 px-3 rounded-full text-pink-500 font-bold">
          ${tour.price}
        </div>

        {/* Отображение тегов */}
        {tour.tags && tour.tags[currentLang] && (
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-1">
            {tour.tags[currentLang].map((tag, index) => (
              <span
                key={index}
                className="bg-pink-500 bg-opacity-80 text-white text-xs px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{tour.title[currentLang]}</h3>

        {/* Отображение маршрутов (локаций) */}
        {tour.route && tour.route[currentLang] && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tour.route[currentLang].slice(0, 3).map((location, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs"
              >
                <MapPin className="w-3 h-3 mr-1" />
                {location}
              </span>
            ))}
            {tour.route[currentLang].length > 3 && (
              <span className="inline-flex items-center px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">
                +{tour.route[currentLang].length - 3}
              </span>
            )}
          </div>
        )}

        <div className="flex items-center mb-2">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="ml-1 text-gray-700">{tour.rating}</span>
          </div>
          <span className="mx-2 text-gray-400">•</span>
          <span className="text-gray-600">{tour.reviewCount} {t.reviews}</span>
        </div>
        <div className="flex justify-between mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{tour.duration} {t.days}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-1" />
            <span>{tour.groupSize} {t.people}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleBookTour}
            className="flex-1 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded"
          >
            {t.bookNow}
          </button>
          <button
            onClick={handleTourDetails}
            className="flex-1 border border-pink-500 text-pink-500 hover:bg-pink-50 font-bold py-2 px-4 rounded"
          >
            {t.viewDetails || "View Details"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;