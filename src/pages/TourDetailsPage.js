// src/pages/TourDetailsPage.js
import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Users,
  Star,
  MapPin,
  Clock,
  DollarSign,
  Heart,
  ChevronRight,
  Hash,
  Sun,
  Moon,
  Utensils,
  Plane,
  Camera,
  Check,
  X,
  Plus,
  Minus,
  ArrowLeft
} from 'lucide-react';
import { toursData, tourTypes } from '../data/toursData';
import TourCard from '../components/TourCard';
import ReviewsSection from '../components/ReviewsSection';
import { useAppContext } from '../context/AppContext';

// Функция для безопасного получения локализованного значения
const getLocalizedValue = (value, lang) => {
  if (!value) return '';
  if (typeof value === 'string') return value;
  if (typeof value === 'object' && value[lang]) return value[lang];
  return '';
};

// Функция для глубокой локализации многоязычных объектов
const localizeDeep = (obj, currentLang) => {
  if (!obj) return obj;

  // Если это примитив, возвращаем его как есть
  if (typeof obj !== 'object') return obj;

  // Если это массив, локализуем каждый элемент
  if (Array.isArray(obj)) {
    return obj.map(item => localizeDeep(item, currentLang));
  }

  // Проверяем, является ли объект многоязычным
  if (obj.ru && obj.en && obj.ja) {
    return obj[currentLang];
  }

  // Для обычных объектов локализуем все свойства
  const result = {};
  for (const key in obj) {
    result[key] = localizeDeep(obj[key], currentLang);
  }

  return result;
};

function TourDetailsPage({ currentLang, setCurrentLang, navigateTo, bookTour, tourId }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTour, setSelectedTour] = useState(null);
  const [relatedTours, setRelatedTours] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showFullItinerary, setShowFullItinerary] = useState(false);
  const { convertPrice, formatPrice, currentCurrency, selectedTour: contextSelectedTour } = useAppContext();

  // Эффект для загрузки данных о туре
  // Эффект для загрузки данных о туре
  useEffect(() => {
    let tour = null;

    // Если у нас есть selectedTour из контекста, используем его
    if (contextSelectedTour) {
      tour = contextSelectedTour;
    } else if (tourId) {
      // Ищем по tourId в URL
      tour = toursData.find(t => t.id === tourId);
    } else {
      // Если нет tourId, берем первый тур как fallback
      tour = toursData[0];
    }

    // Если тур найден, устанавливаем его
    if (tour) {
      setSelectedTour(tour);
    }
  }, [tourId, contextSelectedTour]); // БЕЗ selectedTour в зависимостях!

  // ОТДЕЛЬНЫЙ useEffect для похожих туров
  // ОТДЕЛЬНЫЙ useEffect для похожих туров
  useEffect(() => {
    if (selectedTour) {
      console.log('Finding similar tours for:', selectedTour.id);
      console.log('Current tour category:', selectedTour.category);
      console.log('Current tour types:', selectedTour.types);

      // Сначала ищем по категории (исключая текущий тур)
      let similarByCategory = toursData.filter(t =>
        t.id !== selectedTour.id &&
        t.category === selectedTour.category
      );

      // Потом ищем по типам (исключая уже найденные и текущий тур)
      let similarByTypes = toursData.filter(t =>
        t.id !== selectedTour.id &&
        !similarByCategory.some(s => s.id === t.id) &&
        t.types && selectedTour.types &&
        t.types.some(type => selectedTour.types.includes(type))
      );

      // Объединяем результаты
      let similar = [...similarByCategory, ...similarByTypes];

      // Если все еще мало, добавляем случайные туры
      if (similar.length < 3) {
        const remaining = toursData.filter(t =>
          t.id !== selectedTour.id &&
          !similar.some(s => s.id === t.id)
        );
        similar = [...similar, ...remaining];
      }

      // Берем только первые 3
      similar = similar.slice(0, 3);

      console.log('Similar tours found:', similar.map(t => ({ id: t.id, category: t.category, types: t.types })));
      setRelatedTours(similar);
    }
  }, [selectedTour]);

  // Переводы
  const translations = {
    ru: {
      backToTours: 'Назад к турам',
      overview: 'Обзор',
      itinerary: 'Маршрут',
      included: 'Включено',
      reviews: 'Отзывы',
      practical: 'Практическая информация',
      bookNow: 'Забронировать',
      addToWishlist: 'Добавить в избранное',
      duration: 'Длительность',
      days: 'дней',
      groupSize: 'Размер группы',
      people: 'человек',
      language: 'Язык',
      tourPrice: 'Стоимость тура',
      from: 'от',
      perPerson: 'за человека',
      startingFrom: 'Начало от',
      customerReviews: 'Отзывы клиентов',
      reviewsCount: 'отзывов',
      writeReview: 'Написать отзыв',
      tourHighlights: 'Особенности тура',
      day: 'День',
      tourIncludes: 'В тур включено',
      additionalOptions: 'Дополнительные опции',
      accommodation: 'Проживание',
      meals: 'Питание',
      transportation: 'Транспорт',
      guide: 'Гид',
      activities: 'Мероприятия',
      excludes: 'В тур не включено',
      flights: 'Авиаперелеты',
      personalExpenses: 'Личные расходы',
      travelInsurance: 'Страховка',
      relatedTours: 'Похожие туры',
      route: 'Маршрут',
      seasonInfo: 'Сезонная информация',
      tags: 'Теги',
      destinationInfo: 'Информация о направлениях',
      viewDetails: 'Подробнее',
      showMore: 'Показать больше',
      readMore: 'Читать далее',
      readLess: 'Свернуть',
      aboutTour: 'О туре',
      price: 'Цена',
      totalPrice: 'Общая стоимость',
      basePrice: 'Базовая цена',
      options: 'Опции',
      selectOptions: 'Выберите дополнительные опции',
      physicalLevel: 'Физическая подготовка',
      bestSeasons: 'Лучшие сезоны',
      languages: 'Языки гидов',
      showMore: 'Показать больше',
      showLess: 'Показать меньше',
      climateFeatures: 'Климатические особенности',
      packingList: 'Что взять с собой',
      tourDuration: 'Продолжительность',
      groupSizeInfo: 'Размер группы',
      destinations: 'направлений',
      popular: 'популярное'
    },
    en: {
      backToTours: 'Back to Tours',
      overview: 'Overview',
      itinerary: 'Itinerary',
      included: 'Included',
      reviews: 'Reviews',
      practical: 'Practical Info',
      bookNow: 'Book Now',
      addToWishlist: 'Add to Wishlist',
      duration: 'Duration',
      days: 'days',
      groupSize: 'Group Size',
      people: 'people',
      language: 'Language',
      tourPrice: 'Tour Price',
      from: 'from',
      perPerson: 'per person',
      startingFrom: 'Starting from',
      customerReviews: 'Customer Reviews',
      reviewsCount: 'reviews',
      writeReview: 'Write a Review',
      tourHighlights: 'Tour Highlights',
      day: 'Day',
      tourIncludes: 'Tour Includes',
      additionalOptions: 'Additional Options',
      accommodation: 'Accommodation',
      meals: 'Meals',
      transportation: 'Transportation',
      guide: 'Guide',
      activities: 'Activities',
      excludes: 'Excludes',
      flights: 'Flights',
      personalExpenses: 'Personal Expenses',
      travelInsurance: 'Travel Insurance',
      relatedTours: 'Related Tours',
      route: 'Route',
      seasonInfo: 'Seasonal Information',
      tags: 'Tags',
      destinationInfo: 'Destination Information',
      viewDetails: 'View Details',
      showMore: 'Show More',
      readMore: 'Read More',
      readLess: 'Read Less',
      aboutTour: 'About Tour',
      price: 'Price',
      totalPrice: 'Total Price',
      basePrice: 'Base Price',
      options: 'Options',
      selectOptions: 'Select additional options',
      physicalLevel: 'Physical Level',
      bestSeasons: 'Best Seasons',
      languages: 'Guide Languages',
      showMore: 'Show More',
      showLess: 'Show Less',
      climateFeatures: 'Climate Features',
      packingList: 'What to Bring',
      tourDuration: 'Duration',
      groupSizeInfo: 'Group Size',
      destinations: 'destinations',
      popular: 'popular'
    },
    ja: {
      backToTours: 'ツアー一覧に戻る',
      overview: '概要',
      itinerary: '旅程',
      included: '含まれるもの',
      reviews: 'レビュー',
      practical: '実用情報',
      bookNow: '今すぐ予約',
      addToWishlist: 'お気に入りに追加',
      duration: '期間',
      days: '日間',
      groupSize: 'グループサイズ',
      people: '人',
      language: '言語',
      tourPrice: 'ツアー価格',
      from: 'から',
      perPerson: '1人あたり',
      startingFrom: '開始価格',
      customerReviews: 'カスタマーレビュー',
      reviewsCount: 'レビュー',
      writeReview: 'レビューを書く',
      tourHighlights: 'ツアーのハイライト',
      day: '日目',
      tourIncludes: 'ツアーに含まれるもの',
      additionalOptions: '追加オプション',
      accommodation: '宿泊施設',
      meals: '食事',
      transportation: '交通機関',
      guide: 'ガイド',
      activities: 'アクティビティ',
      excludes: '含まれないもの',
      flights: '航空券',
      personalExpenses: '個人的な支出',
      travelInsurance: '旅行保険',
      relatedTours: '関連ツアー',
      route: 'ルート',
      seasonInfo: '季節情報',
      tags: 'タグ',
      destinationInfo: '目的地情報',
      viewDetails: '詳細を見る',
      showMore: 'もっと見る',
      readMore: '続きを読む',
      readLess: '折りたたむ',
      aboutTour: 'ツアーについて',
      price: '価格',
      totalPrice: '総額',
      basePrice: '基本料金',
      options: 'オプション',
      selectOptions: '追加オプションを選択',
      physicalLevel: '体力レベル',
      bestSeasons: 'ベストシーズン',
      languages: 'ガイドの言語',
      showMore: 'もっと見る',
      showLess: '少なく表示',
      climateFeatures: '気候の特徴',
      packingList: '持参するもの',
      tourDuration: '期間',
      groupSizeInfo: 'グループサイズ',
      destinations: '目的地',
      popular: '人気'
    }
  };

  const t = translations[currentLang];

  // Получаем названия типов для отображения
  const getTypeNames = () => {
    if (!selectedTour.types || !Array.isArray(selectedTour.types)) return [];

    return selectedTour.types.map(typeId => {
      const typeObj = tourTypes.find(t => t.id === typeId);
      return typeObj ? typeObj.title[currentLang] : typeId;
    });
  };

  // Конвертируем основную цену тура
  // Если тур не загружен, показываем загрузку
    if (!selectedTour) {
      return (
        <div className="min-h-screen flex justify-center items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-pink-500 border-opacity-50"></div>
        </div>
      );
    }

    // Конвертируем основную цену тура
    const convertedPrice = convertPrice(selectedTour.price, 'USD', currentCurrency);
    const formattedPrice = formatPrice(convertedPrice, currentCurrency);

    // Расчет общей стоимости с опциями
    const calculateTotalPrice = () => {
      let total = selectedTour.price;
      selectedOptions.forEach(option => {
        total += option.price;
      });
      const convertedTotal = convertPrice(total, 'USD', currentCurrency);
      return formatPrice(convertedTotal, currentCurrency);
    };

    // Обработчик выбора дополнительных опций
    const handleOptionToggle = (option) => {
      setSelectedOptions(prev => {
        const exists = prev.find(o => o.name[currentLang] === option.name[currentLang]);
        if (exists) {
          return prev.filter(o => o.name[currentLang] !== option.name[currentLang]);
        } else {
          return [...prev, option];
        }
      });
    };


return (
  <div className="min-h-screen bg-white">
    {/* Tour Details Content */}
    <section className="relative py-16 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${selectedTour.image})` }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <button
              onClick={() => navigateTo('tours')}
              className="text-white bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-md mb-4 inline-flex items-center"
            >
              <ArrowLeft className="mr-2" />
              {t.backToTours}
            </button>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              {selectedTour && selectedTour.title ?
                (typeof selectedTour.title === 'string' ? selectedTour.title : selectedTour.title[currentLang])
                : 'Загрузка...'}
            </h1>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <div className="flex items-center gap-2">
              {selectedTour.popular && (
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-pink-500 text-white text-sm font-medium">
                  {t.popular}
                </span>
              )}
              {getTypeNames().length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {getTypeNames().map((typeName, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-white bg-opacity-20 text-white text-sm"
                    >
                      {typeName}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          {selectedTour.route[currentLang] && selectedTour.route[currentLang].map((location, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full bg-white bg-opacity-20 text-white text-sm"
            >
              <MapPin className="w-4 h-4 mr-1" />
              {location}
            </span>
          ))}
        </div>
      </div>
    </section>

      {/* Navigation and Booking Panel */}
      <section className="sticky top-16 z-40 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <nav className="flex overflow-x-auto py-4 space-x-6">
              <a
                href="#overview"
                onClick={() => setActiveTab('overview')}
                className={`${activeTab === 'overview' ? 'text-pink-500' : 'text-gray-600 hover:text-pink-500'} font-medium whitespace-nowrap`}
              >
                {t.overview}
              </a>
              <a
                href="#itinerary"
                onClick={() => setActiveTab('itinerary')}
                className={`${activeTab === 'itinerary' ? 'text-pink-500' : 'text-gray-600 hover:text-pink-500'} font-medium whitespace-nowrap`}
              >
                {t.itinerary}
              </a>
              <a
                href="#included"
                onClick={() => setActiveTab('included')}
                className={`${activeTab === 'included' ? 'text-pink-500' : 'text-gray-600 hover:text-pink-500'} font-medium whitespace-nowrap`}
              >
                {t.included}
              </a>
              <a
                href="#reviews"
                onClick={() => setActiveTab('reviews')}
                className={`${activeTab === 'reviews' ? 'text-pink-500' : 'text-gray-600 hover:text-pink-500'} font-medium whitespace-nowrap`}
              >
                {t.reviews}
              </a>
              <a
                href="#practical"
                onClick={() => setActiveTab('practical')}
                className={`${activeTab === 'practical' ? 'text-pink-500' : 'text-gray-600 hover:text-pink-500'} font-medium whitespace-nowrap`}
              >
                {t.practical}
              </a>
            </nav>

            <div className="py-3">
              {/* Название уже есть в hero секции выше */}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Overview Section */}
            <section id="overview" className={`mb-12 ${activeTab !== 'overview' ? 'hidden md:block' : ''}`}>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{t.overview}</h2>
              <p className="text-gray-700 mb-6">{selectedTour.description[currentLang]}</p>

              {/* Route Description */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{t.route}</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex flex-wrap mb-3">
                      {selectedTour.route[currentLang].map((location, idx) => (
                        <React.Fragment key={idx}>
                          <span className="font-medium">{location}</span>
                          {idx < selectedTour.route[currentLang].length - 1 && (
                            <ChevronRight className="mx-2" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  <p className="text-gray-600">
                    {selectedTour.routeDescription && selectedTour.routeDescription[currentLang]}
                  </p>
                </div>
              </div>

              {/* Seasonal Information */}
              {selectedTour.seasonDescription && (
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{t.seasonInfo}</h3>
                  <div className="bg-gray-50 p-4 rounded-lg flex gap-4 items-center">
                    {selectedTour.seasons.includes('spring') && <Sun className="text-pink-500" />}
                    {selectedTour.seasons.includes('summer') && <Sun className="text-yellow-500" />}
                    {selectedTour.seasons.includes('autumn') && <Sun className="text-orange-500" />}
                    {selectedTour.seasons.includes('winter') && <Moon className="text-blue-500" />}
                    <p className="text-gray-600">{selectedTour.seasonDescription[currentLang]}</p>
                  </div>
                </div>
              )}

              <h3 className="text-xl font-bold text-gray-800 mb-4">{t.tourHighlights}</h3>
              <ul className="space-y-2">
                {selectedTour.highlights && selectedTour.highlights[currentLang].map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-pink-500 font-bold mr-2">✓</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Itinerary Section */}
            <section id="itinerary" className={`mb-12 ${activeTab !== 'itinerary' ? 'hidden md:block' : ''}`}>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{t.itinerary}</h2>
              <div className="space-y-6">
                {selectedTour.itinerary && selectedTour.itinerary
                  .slice(0, showFullItinerary ? selectedTour.itinerary.length : 7)
                  .map((day) => (
                  <div key={day.day} className="border-l-4 border-pink-500 pl-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {t.day} {day.day}: {day.title[currentLang]}
                    </h3>
                    <p className="text-gray-700">{day.description[currentLang]}</p>
                  </div>
                ))}

                {/* Кнопка "Показать больше дней" если маршрут длинный */}
                {selectedTour.itinerary && selectedTour.itinerary.length > 7 && (
                  <div className="flex justify-center mt-6">
                    <button
                      onClick={() => setShowFullItinerary(!showFullItinerary)}
                      className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-md"
                    >
                      {showFullItinerary
                        ? `${t.showLess} (${selectedTour.itinerary.length - 7} ${t.days})`
                        : `${t.showMore} (${selectedTour.itinerary.length - 7} ${t.days})`
                      }
                    </button>
                  </div>
                )}
              </div>
            </section>

            {/* Included Section */}
            <section id="included" className={`mb-12 ${activeTab !== 'included' ? 'hidden md:block' : ''}`}>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{t.tourIncludes}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{t.included}</h3>
                  <ul className="space-y-2">
                    {selectedTour.included[currentLang].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 font-bold mr-2">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{t.excludes}</h3>
                  <ul className="space-y-2">
                    {selectedTour.excluded[currentLang].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-500 font-bold mr-2">✗</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Additional Options */}
              {selectedTour.additionalOptions && selectedTour.additionalOptions.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{t.additionalOptions}</h3>
                  <div className="space-y-3">
                    {selectedTour.additionalOptions.map((option, index) => {
                      const convertedOptionPrice = convertPrice(option.price, 'USD', currentCurrency);
                      const formattedOptionPrice = formatPrice(convertedOptionPrice, currentCurrency);

                      return (
                        <label key={index} className="flex items-start justify-between cursor-pointer p-4 border rounded-lg hover:bg-gray-50">
                          <div className="flex items-start">
                            <input
                              type="checkbox"
                              checked={selectedOptions.some(o => o.name[currentLang] === option.name[currentLang])}
                              onChange={() => handleOptionToggle(option)}
                              className="mt-1 mr-3 text-pink-500"
                            />
                            <div>
                              <div className="font-medium text-gray-800">{option.name[currentLang]}</div>
                              <div className="text-sm text-gray-600">{option.description[currentLang]}</div>
                            </div>
                          </div>
                          <div className="text-pink-600 font-bold">
                            +{formattedOptionPrice}
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>
              )}
            </section>

            {/* Reviews Section */}
            <section id="reviews" className={`mb-12 ${activeTab !== 'reviews' ? 'hidden md:block' : ''}`}>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">{t.customerReviews}</h2>
                <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
                  {t.writeReview}
                </button>
              </div>

              <ReviewsSection
                currentLang={currentLang}
                tourId={selectedTour.id}
                variant="list"
                showControls={false}
                limit={3}
                showMoreButton={true}
              />
            </section>

            {/* Practical Info Section */}
            <section id="practical" className={`mb-12 ${activeTab !== 'practical' ? 'hidden md:block' : ''}`}>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{t.practical}</h2>

              {selectedTour.practicalInfo && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">{t.tourDuration}</h4>
                    <p className="text-gray-600">{selectedTour.practicalInfo.duration[currentLang]}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">{t.groupSizeInfo}</h4>
                    <p className="text-gray-600">{selectedTour.practicalInfo.groupSize[currentLang]}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">{t.physicalLevel}</h4>
                    <p className="text-gray-600">{selectedTour.practicalInfo.physicalLevel[currentLang]}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">{t.bestSeasons}</h4>
                    <p className="text-gray-600">{selectedTour.practicalInfo.bestSeasons[currentLang]}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">{t.languages}</h4>
                    <p className="text-gray-600">{selectedTour.practicalInfo.languages[currentLang]}</p>
                  </div>
                </div>
              )}

              {/* Климатические особенности */}
              {selectedTour.climateInfo && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{t.climateFeatures}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedTour.climateInfo.map((climate, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-800 mb-2">{climate.region[currentLang]}</h4>
                        <p className="text-gray-600">{climate.climate[currentLang]}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Что взять с собой */}
              {selectedTour.packingList && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{t.packingList}</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedTour.packingList[currentLang].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-pink-500 font-bold mr-2">•</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

            {/* Related Tours */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{t.relatedTours}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedTours.map(tour => (
                  <TourCard
                    key={tour.id}
                    tour={tour}
                    bookTour={bookTour}
                    viewTourDetails={(localizedTour) => {
                      // Переход на страницу детального просмотра тура
                      bookTour(localizedTour);
                      navigateTo('tour');
                    }}
                    translations={translations}
                    currentLang={currentLang}
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-32">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{t.tourPrice}</h3>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-pink-500">{formattedPrice}</span>
                  <span className="ml-2 text-gray-600">{t.perPerson}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center text-gray-700">
                    <Calendar className="w-5 h-5 mr-2 text-pink-500" />
                    <span>{t.duration}</span>
                  </div>
                  <span className="font-bold">{selectedTour.duration} {t.days}</span>
                </div>

                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center text-gray-700">
                    <Users className="w-5 h-5 mr-2 text-pink-500" />
                    <span>{t.groupSize}</span>
                  </div>
                  <span className="font-bold">{selectedTour.groupSizeMin || 8}-{selectedTour.groupSizeMax || 15} {t.people}</span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-5 h-5 mr-2 text-pink-500" />
                    <span>{t.route}</span>
                  </div>
                  <span className="font-bold">{selectedTour.route[currentLang].length} {t.destinations}</span>
                </div>
              </div>

              {/* Selected Options Display */}
              {selectedOptions.length > 0 && (
                <div className="border-t border-gray-200 pt-4 mb-4">
                  <h3 className="font-bold text-gray-800 mb-2">{t.options}</h3>
                  <div className="space-y-2">
                    {selectedOptions.map((option, index) => {
                      const convertedOptionPrice = convertPrice(option.price, 'USD', currentCurrency);
                      const formattedOptionPrice = formatPrice(convertedOptionPrice, currentCurrency);

                      return (
                        <div key={index} className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">{option.name[currentLang]}</span>
                          <span className="font-medium text-pink-600">+{formattedOptionPrice}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Total Price */}
              {selectedOptions.length > 0 && (
                <div className="border-t border-gray-200 pt-4 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-800">{t.totalPrice}:</span>
                    <span className="text-2xl font-bold text-pink-600">{calculateTotalPrice()}</span>
                  </div>
                </div>
              )}

              <button
                onClick={() => {
                  // Передаем оригинальный тур с дополнительными данными
                  const tourWithOptions = {
                    ...selectedTour,
                    currentLang: currentLang,
                    selectedOptions: selectedOptions
                  };

                  bookTour(tourWithOptions);
                }}
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-4 rounded mt-6"
              >
                {t.bookNow}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourDetailsPage;