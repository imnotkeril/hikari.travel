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
import { toursData } from '../data/toursData';
import ExchangeRateWidget from '../components/ExchangeRateWidget';
import TourCard from '../components/TourCard';
import ReviewsSection from '../components/ReviewsSection';

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
  const [selectedDate, setSelectedDate] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTour, setSelectedTour] = useState(null);
  const [relatedTours, setRelatedTours] = useState([]);

  // Эффект для загрузки данных о туре
  useEffect(() => {
    // Здесь в реальном приложении мы бы загружали данные о туре по ID
    // В нашем случае, просто выбираем первый тур или конкретный тур по ID
    let tour;
    if (tourId) {
      tour = toursData.find(t => t.id === tourId);
    }

    if (!tour && toursData.length > 0) {
      tour = toursData[0]; // Выбираем первый тур, если конкретный не найден
    }

    setSelectedTour(tour);

    // Находим похожие туры (того же типа или категории)
    if (tour) {
      const similar = toursData
        .filter(t => t.id !== tour.id && (t.type === tour.type || t.category === tour.category))
        .slice(0, 3);
      setRelatedTours(similar);
    }
  }, [tourId]);

  // Если тур не загружен, показываем загрузку
  if (!selectedTour) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-pink-500 border-opacity-50"></div>
      </div>
    );
  }

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
      selectDate: 'Выберите дату',
      availableDates: 'Доступные даты',
      customerReviews: 'Отзывы клиентов',
      reviewsCount: 'отзывов',
      writeReview: 'Написать отзыв',
      tourHighlights: 'Особенности тура',
      day: 'День',
      tourIncludes: 'В тур включено',
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
      freePlaces: 'свободных мест',
      aboutTour: 'О туре',
      currencyConverter: 'Конвертер валют'
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
      selectDate: 'Select Date',
      availableDates: 'Available Dates',
      customerReviews: 'Customer Reviews',
      reviewsCount: 'reviews',
      writeReview: 'Write a Review',
      tourHighlights: 'Tour Highlights',
      day: 'Day',
      tourIncludes: 'Tour Includes',
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
      freePlaces: 'free places',
      aboutTour: 'About Tour',
      currencyConverter: 'Currency Converter'
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
      selectDate: '日付を選択',
      availableDates: '利用可能な日付',
      customerReviews: 'カスタマーレビュー',
      reviewsCount: 'レビュー',
      writeReview: 'レビューを書く',
      tourHighlights: 'ツアーのハイライト',
      day: '日目',
      tourIncludes: 'ツアーに含まれるもの',
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
      freePlaces: '空き席',
      aboutTour: 'ツアーについて',
      currencyConverter: '通貨コンバーター'
    }
  };

  const t = translations[currentLang];

  // Примерные доступные даты
  const dates = [
    { id: 1, date: '2025-05-15', availablePlaces: 8, price: selectedTour.price },
    { id: 2, date: '2025-05-22', availablePlaces: 5, price: Math.round(selectedTour.price * 1.08) },
    { id: 3, date: '2025-06-05', availablePlaces: 10, price: Math.round(selectedTour.price * 0.92) },
    { id: 4, date: '2025-06-12', availablePlaces: 2, price: Math.round(selectedTour.price * 1.12) },
    { id: 5, date: '2025-06-19', availablePlaces: 7, price: selectedTour.price },
  ];

  // Примерные включенные и исключенные пункты
  const included = ['accommodation', 'transportation', 'guide', 'activities', 'meals'];
  const excluded = ['flights', 'personalExpenses', 'travelInsurance'];

  // Форматирование даты
  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString(
      currentLang === 'ru' ? 'ru-RU' :
      currentLang === 'ja' ? 'ja-JP' :
      'en-US',
      { day: 'numeric', month: 'long', year: 'numeric' }
    );
  };

return (
  <div className="min-h-screen bg-white">
    {/* Tour Details Content */}
    <section className="relative py-16 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/tours/${selectedTour.id}.png)` }}>
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
            <h1 className="text-4xl sm:text-5xl font-bold text-white">{selectedTour.title[currentLang]}</h1>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <div className="flex items-center gap-2">
              {selectedTour.tags && selectedTour.tags[currentLang] && (
                <div className="flex flex-wrap gap-4">
                  {selectedTour.tags[currentLang].map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-white bg-opacity-20 text-white text-sm"
                    >
                      #{tag}
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

            <div className="flex space-x-2 py-3">
              <button
                onClick={() => bookTour(localizeDeep(selectedTour, currentLang))}
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded"
              >
                {t.bookNow}
              </button>
              <button className="border border-pink-500 text-pink-500 hover:bg-pink-50 font-bold py-2 px-4 rounded">
                <Heart className="w-5 h-5" />
              </button>
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
                {selectedTour.itinerary && selectedTour.itinerary.map((day) => (
                  <div key={day.day} className="border-l-4 border-pink-500 pl-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {t.day} {day.day}: {day.title[currentLang]}
                    </h3>
                    <p className="text-gray-700">{day.description[currentLang]}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Included Section */}
            <section id="included" className={`mb-12 ${activeTab !== 'included' ? 'hidden md:block' : ''}`}>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{t.tourIncludes}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{t.included}</h3>
                  <ul className="space-y-2">
                    {included.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 font-bold mr-2">✓</span>
                        <span>{t[item]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{t.excludes}</h3>
                  <ul className="space-y-2">
                    {excluded.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-500 font-bold mr-2">✗</span>
                        <span>{t[item]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Reviews Section */}
            <section id="reviews" className={`mb-12 ${activeTab !== 'reviews' ? 'hidden md:block' : ''}`}>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">{t.customerReviews}</h2>
                <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
                  {t.writeReview}
                </button>
              </div>

              <div className="space-y-6">
                {/* Примерные отзывы */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://source.unsplash.com/featured/?person,woman"
                      alt="Anna Smith"
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="flex items-center">
                        <h3 className="text-lg font-bold text-gray-800 mr-2">Anna Smith</h3>
                        <span className="text-gray-500 text-sm">05.03.2025</span>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < 5 ? 'text-yellow-500' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Превосходный тур! Наш гид был очень знающим и дружелюбным. Маршрут идеально сбалансирован - достаточно времени на основные достопримечательности и при этом есть свободное время для исследования. Рекомендую!
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://source.unsplash.com/featured/?person,man"
                      alt="James Wilson"
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="flex items-center">
                        <h3 className="text-lg font-bold text-gray-800 mr-2">James Wilson</h3>
                        <span className="text-gray-500 text-sm">28.02.2025</span>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < 4 ? 'text-yellow-500' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Отличный опыт! Особенно понравилось размещение и то, как были организованы переезды между городами. Дал 4 звезды, так как в некоторых местах хотелось бы провести больше времени.
                  </p>
                </div>
              </div>
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
                  <span className="text-3xl font-bold text-pink-500">${selectedTour.price}</span>
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
                  <span className="font-bold">{selectedTour.groupSize} {t.people}</span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-5 h-5 mr-2 text-pink-500" />
                    <span>{t.route}</span>
                  </div>
                  <span className="font-bold">{selectedTour.route.length} {t.destinations}</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-gray-800 mb-2">{t.selectDate}</h3>
                <div className="grid grid-cols-2 gap-2">
                  {dates.slice(0, 4).map((date, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedDate(date)}
                      className={`py-2 px-3 rounded-md text-sm ${
                        selectedDate === date
                          ? 'bg-pink-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {formatDate(date.date)}
                    </button>
                  ))}
                </div>
                <button className="w-full text-pink-500 hover:text-pink-600 mt-2">
                  + {dates.length - 4} {t.availableDates}
                </button>
              </div>

              {selectedDate && (
                <div className="border-t border-gray-200 pt-4 mb-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{formatDate(selectedDate.date)}</span>
                      <span className="text-green-600 text-sm">{selectedDate.availablePlaces} {t.freePlaces}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">{t.price}:</span>
                      <span className="font-bold text-pink-500">${selectedDate.price}</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-bold text-gray-800 mb-4">{t.currencyConverter}</h3>
                <ExchangeRateWidget baseCurrency="USD" currentLang={currentLang} />
              </div>

              <button
                onClick={() => {
                  // Используем функцию глубокой локализации для всего объекта тура
                  const localizedTour = localizeDeep(selectedTour, currentLang);

                  // Добавляем информацию о текущем языке
                  localizedTour.currentLang = currentLang;

                  if (selectedDate) {
                    bookTour({...localizedTour, selectedDate});
                  } else {
                    bookTour(localizedTour);
                  }
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