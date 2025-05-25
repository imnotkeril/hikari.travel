// src/components/ServiceCard.js
import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Clock,
  DollarSign,
  Star,
  Check,
  Calendar,
  Users,
  Info
} from 'lucide-react';

const ServiceCard = ({ service, currentLang, onBook, className = '' }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState(service.options ? service.options[0] : null);
  const [selectedExtras, setSelectedExtras] = useState([]);

  // Переводы
  const translations = {
    ru: {
      from: 'от',
      perDay: 'в день',
      fixed: 'фиксированная цена',
      perHour: 'в час',
      duration: 'Длительность',
      includes: 'Включено',
      options: 'Варианты',
      extras: 'Дополнительно',
      bookNow: 'Забронировать',
      viewDetails: 'Подробнее',
      hideDetails: 'Скрыть',
      selectOption: 'Выберите вариант',
      totalPrice: 'Общая стоимость',
      bookingInfo: 'Информация о бронировании',
      popular: 'Популярное',
      seasonal: 'Сезонное',
      new: 'Новое'
    },
    en: {
      from: 'from',
      perDay: 'per day',
      fixed: 'fixed price',
      perHour: 'per hour',
      duration: 'Duration',
      includes: 'Includes',
      options: 'Options',
      extras: 'Extras',
      bookNow: 'Book Now',
      viewDetails: 'View Details',
      hideDetails: 'Hide Details',
      selectOption: 'Select option',
      totalPrice: 'Total price',
      bookingInfo: 'Booking information',
      popular: 'Popular',
      seasonal: 'Seasonal',
      new: 'New'
    },
    ja: {
      from: 'から',
      perDay: '1日あたり',
      fixed: '固定料金',
      perHour: '1時間あたり',
      duration: '所要時間',
      includes: '含まれるもの',
      options: 'オプション',
      extras: '追加',
      bookNow: '今すぐ予約',
      viewDetails: '詳細を見る',
      hideDetails: '詳細を隠す',
      selectOption: 'オプションを選択',
      totalPrice: '総額',
      bookingInfo: '予約情報',
      popular: '人気',
      seasonal: '季節限定',
      new: '新着'
    }
  };

  const t = translations[currentLang];

  // Форматирование цены
  const formatPrice = (price, currency = 'JPY') => {
    if (currency === 'JPY') {
      return `¥${price.toLocaleString()}`;
    }
    return `${price}`;
  };

  // Получение отображаемой цены
  const getDisplayPrice = () => {
    if (selectedOption) {
      return formatPrice(selectedOption.price, service.currency);
    }
    return formatPrice(service.price, service.currency);
  };

  // Получение текста типа цены
  const getPriceTypeText = () => {
    switch (service.priceType) {
      case 'from':
        return t.from;
      case 'per_day':
        return t.perDay;
      case 'per_hour':
        return t.perHour;
      case 'fixed':
        return '';
      default:
        return t.from;
    }
  };

  // Вычисление общей стоимости с дополнительными услугами
  const calculateTotalPrice = () => {
    const basePrice = selectedOption ? selectedOption.price : service.price;
    const extrasPrice = selectedExtras.reduce((total, extra) => total + extra.price, 0);
    return basePrice + extrasPrice;
  };

  // Обработчик выбора дополнительных услуг
  const handleExtraToggle = (extra) => {
    setSelectedExtras(prev => {
      const exists = prev.find(e => e.name[currentLang] === extra.name[currentLang]);
      if (exists) {
        return prev.filter(e => e.name[currentLang] !== extra.name[currentLang]);
      } else {
        return [...prev, extra];
      }
    });
  };

  // Обработчик бронирования
  const handleBook = () => {
    const bookingData = {
      service: service,
      selectedOption: selectedOption,
      selectedExtras: selectedExtras,
      totalPrice: calculateTotalPrice(),
      currentLang: currentLang
    };
    onBook(bookingData);
  };

  // Получение бейджа для типа услуги
  const getTypeBadge = () => {
    if (service.type === 'popular') {
      return <span className="absolute top-2 left-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">{t.popular}</span>;
    }
    if (service.type === 'seasonal') {
      return <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">{t.seasonal}</span>;
    }
    return null;
  };

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg ${className}`}>
      {/* Изображение и бейдж */}
      <div className="relative h-48 bg-gray-200 bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }}>
        {getTypeBadge()}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm">
          {getPriceTypeText()} {getDisplayPrice()}
        </div>
      </div>

      {/* Основная информация */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
          {service.title[currentLang]}
        </h3>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {service.shortDescription[currentLang]}
        </p>

        {/* Теги */}
        {service.tags && service.tags[currentLang] && (
          <div className="flex flex-wrap gap-1 mb-3">
            {service.tags[currentLang].slice(0, 3).map((tag, index) => (
              <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Краткая информация */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          {service.duration && (
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>{service.duration}</span>
            </div>
          )}
          <div className="flex items-center">
            <DollarSign className="w-4 h-4 mr-1" />
            <span>{service.currency}</span>
          </div>
        </div>

        {/* Кнопки действий */}
        <div className="flex space-x-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex-1 border border-pink-500 text-pink-500 hover:bg-pink-50 font-medium py-2 px-4 rounded text-sm"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-4 h-4 inline mr-1" />
                {t.hideDetails}
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 inline mr-1" />
                {t.viewDetails}
              </>
            )}
          </button>
          <button
            onClick={handleBook}
            className="flex-1 bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded text-sm"
          >
            {t.bookNow}
          </button>
        </div>
      </div>

      {/* Развернутая информация */}
      {isExpanded && (
        <div className="border-t border-gray-200 p-4 bg-gray-50">
          {/* Подробное описание */}
          <div className="mb-4">
            <p className="text-gray-700 text-sm leading-relaxed">
              {service.description[currentLang]}
            </p>
          </div>

          {/* Что включено */}
          {service.includes && (
            <div className="mb-4">
              <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                <Check className="w-4 h-4 mr-1 text-green-500" />
                {t.includes}
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {service.includes[currentLang].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Варианты услуг */}
          {service.options && service.options.length > 0 && (
            <div className="mb-4">
              <h4 className="font-medium text-gray-800 mb-2">{t.options}</h4>
              <div className="space-y-2">
                {service.options.map((option, index) => (
                  <label key={index} className="flex items-start cursor-pointer">
                    <input
                      type="radio"
                      name={`service-${service.id}-option`}
                      checked={selectedOption === option}
                      onChange={() => setSelectedOption(option)}
                      className="mt-1 mr-3 text-pink-500"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-medium text-sm">{option.name[currentLang]}</div>
                          <div className="text-xs text-gray-500">{option.description[currentLang]}</div>
                        </div>
                        <div className="text-sm font-medium text-pink-600">
                          {formatPrice(option.price, service.currency)}
                        </div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Дополнительные услуги */}
          {service.extras && service.extras.length > 0 && (
            <div className="mb-4">
              <h4 className="font-medium text-gray-800 mb-2">{t.extras}</h4>
              <div className="space-y-2">
                {service.extras.map((extra, index) => (
                  <label key={index} className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedExtras.some(e => e.name[currentLang] === extra.name[currentLang])}
                        onChange={() => handleExtraToggle(extra)}
                        className="mr-3 text-pink-500"
                      />
                      <span className="text-sm">{extra.name[currentLang]}</span>
                    </div>
                    <span className="text-sm font-medium text-pink-600">
                      +{formatPrice(extra.price, service.currency)}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Информация о бронировании */}
          {service.bookingInfo && (
            <div className="mb-4">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded">
                <div className="flex items-start">
                  <Info className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-blue-800 text-sm mb-1">{t.bookingInfo}</h4>
                    <p className="text-blue-700 text-xs">{service.bookingInfo[currentLang]}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Общая стоимость */}
          {(selectedExtras.length > 0 || selectedOption) && (
            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800">{t.totalPrice}:</span>
                <span className="text-lg font-bold text-pink-600">
                  {formatPrice(calculateTotalPrice(), service.currency)}
                </span>
              </div>
            </div>
          )}

          {/* Финальная кнопка бронирования */}
          <div className="mt-4">
            <button
              onClick={handleBook}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-4 rounded"
            >
              {t.bookNow} - {formatPrice(calculateTotalPrice(), service.currency)}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;