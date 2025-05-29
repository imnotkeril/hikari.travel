// src/components/TourCard.js
import React from 'react';
import { Calendar, Users, MapPin, Star } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { tourTypes, tourLabels } from '../data/toursData';

const TourCard = ({ tour, bookTour, viewTourDetails, translations, currentLang }) => {
  const { convertPrice, formatPrice, currentCurrency } = useAppContext();

  console.log("TourCard rendering:", tour.id);

  // Получаем нужные переводы в зависимости от текущего языка
  let t = {};

  try {
    // Если передается полный объект translations
    t = {
      days: translations[currentLang].featuredTours?.days || translations[currentLang].days || "days",
      people: translations[currentLang].featuredTours?.people || translations[currentLang].people || "people",
      bookNow: translations[currentLang].featuredTours?.bookNow || translations[currentLang].bookNow || "Book Now",
      viewDetails: translations[currentLang].viewDetails || "View Details",
      reviews: translations[currentLang].testimonials?.title?.toLowerCase() || translations[currentLang].reviews || "reviews",
      from: translations[currentLang].from || "from",
      groupFrom: translations[currentLang].groupFrom || "группа от",
      groupTo: translations[currentLang].groupTo || "до",
      popular: translations[currentLang].popular || "Популярное"
    };
  } catch (error) {
    console.log("Translation parsing error:", error);
    // Если передается только объект переводов для конкретного компонента
    t = {
      days: translations.days || "days",
      people: translations.people || "people",
      bookNow: translations.bookNow || "Book Now",
      viewDetails: translations.viewDetails || "View Details",
      reviews: translations.reviews || "reviews",
      from: translations.from || "from",
      groupFrom: translations.groupFrom || "группа от",
      groupTo: translations.groupTo || "до",
      popular: translations.popular || "Популярное"
    };
  }

  // Подготовка локализованных данных о туре
  const localizedTour = () => {
    return {
      ...tour,
      title: tour.title?.[currentLang] || "Tour",
      description: tour.description?.[currentLang] || "",
      routeDescription: tour.routeDescription?.[currentLang] || "",
      seasonDescription: tour.seasonDescription?.[currentLang] || "",
      // Добавляем текущий язык
      currentLang: currentLang
    };
  };

  const handleBookTour = () => {
    bookTour(localizedTour());
  };

  const handleTourDetails = () => {
    if (viewTourDetails) {
      viewTourDetails(localizedTour());
    } else {
      bookTour(localizedTour());
    }
  };

  // Функция для обработки клика на карточку
  const handleCardClick = (e) => {
    // Проверяем, что клик был не по кнопкам
    if (!e.target.closest('button')) {
      handleTourDetails();
    }
  };

  // Формируем URL изображения
  const imageUrl = tour.image || `https://source.unsplash.com/featured/?japan,${tour.id}`;

  const rating = tour.rating || 4.8;
  const reviewCount = tour.reviewCount || 24;

  // Конвертируем цену в выбранную валюту
  const convertedPrice = convertPrice(tour.price, 'USD', currentCurrency);
  const formattedPrice = formatPrice(convertedPrice, currentCurrency);

  // Получаем названия типов для отображения
  const getTypeNames = () => {
    if (!tour.types || !Array.isArray(tour.types)) return [];

    return tour.types.map(typeId => {
      const typeObj = tourTypes.find(t => t.id === typeId);
      return typeObj ? typeObj.title[currentLang] : typeId;
    });
  };

  const typeNames = getTypeNames();

  console.log('Tour types:', tour.types, 'Type names:', typeNames); // Для отладки

  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
      onClick={handleCardClick}
    >
      <div
        className="relative h-60 bg-gray-200 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute top-4 right-4 bg-white py-1 px-3 rounded-full text-pink-500 font-bold">
          {t.from} {formattedPrice}
        </div>

        {/* Популярное слева внизу как было */}
        {tour.popular && (
          <div className="absolute bottom-4 left-4">
            <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
              {tourLabels.popular[currentLang]}
            </span>
          </div>
        )}

        {/* Типы туров справа внизу */}
        {typeNames.length > 0 && (
          <div className="absolute bottom-4 right-4">
            <div className="flex flex-wrap gap-1 justify-end">
              {typeNames.map((typeName, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded-full bg-white bg-opacity-90 text-gray-700 text-xs"
                >
                  {typeName}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{tour.title?.[currentLang] || "Tour"}</h3>

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

        {/* Описание тура */}
        {tour.description && tour.description[currentLang] && (
          <p className="text-gray-600 mb-4 line-clamp-3">{tour.description[currentLang]}</p>
        )}

        <div className="flex items-center mb-2">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="ml-1 text-gray-700">{rating}</span>
          </div>
          <span className="mx-2 text-gray-400">•</span>
          <span className="text-gray-600">{reviewCount} {t.reviews}</span>
        </div>
        <div className="flex justify-between mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{tour.duration} {t.days}</span>
          </div>
          {/* Показываем размер группы вместо типов */}
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-1" />
            <span className="text-sm">
              {currentLang === 'ru' ? 'Группа' : currentLang === 'ja' ? 'グループ' : 'Group'} {tour.groupSizeMin || 8}-{tour.groupSizeMax || 15} {t.people}
            </span>
          </div>
        </div>

        <div className="flex space-x-2">
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
            {t.viewDetails}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;