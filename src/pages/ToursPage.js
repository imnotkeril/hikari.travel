// src/pages/ToursPage.js
import React, { useState, useEffect, useMemo } from 'react';
import {
  Search,
  Filter,
  Calendar,
  Users,
  Star,
  ChevronDown,
  MapPin,
  X
} from 'lucide-react';
import { toursData, tourCategories, tourTypes } from '../data/toursData';
import TourCard from '../components/TourCard';

function ToursPage({ currentLang, setCurrentLang, navigateTo, bookTour }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeType, setActiveType] = useState('all');
  const [showPopularOnly, setShowPopularOnly] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [durationRange, setDurationRange] = useState([1, 25]);
  const [sortOption, setSortOption] = useState('recommended');

  // Переводы
  const translations = {
    ru: {
      menu: {
        home: 'Главная',
        tours: 'Туры',
        about: 'О нас',
        blog: 'Блог',
        contact: 'Контакты'
      },
      allTours: 'Все туры',
      findYourPerfectTour: 'Найдите свой идеальный тур в Японии',
      searchPlaceholder: 'Поиск туров...',
      filter: 'Фильтр',
      sortBy: 'Сортировать по',
      categories: 'Категории туров',
      types: 'Типы туров',
      allTypes: 'Все типы',
      duration: 'Длительность',
      days: 'дней',
      price: 'Цена',
      groupSize: 'Размер группы',
      people: 'человек',
      date: 'Дата',
      location: 'Местоположение',
      applyFilter: 'Применить фильтры',
      resetFilter: 'Сбросить фильтры',
      sortOptions: {
        recommended: 'Рекомендуемые',
        priceAsc: 'Цена (по возрастанию)',
        priceDesc: 'Цена (по убыванию)',
        durationAsc: 'Длительность (по возрастанию)',
        durationDesc: 'Длительность (по убыванию)',
        popularityDesc: 'Популярность'
      },
      noToursFound: 'Туры не найдены. Пожалуйста, измените параметры поиска.',
      showMore: 'Показать больше',
      bookNow: 'Забронировать',
      viewDetails: 'Подробнее',
      reviews: 'отзывов',
      from: 'от',
      destinations: 'Направления',
      tags: 'Теги',
      route: 'Маршрут',
      clearFilters: 'Очистить фильтры',
      popularOnly: 'Популярные',
      showPopular: 'Показать популярные'
    },
    en: {
      menu: {
        home: 'Home',
        tours: 'Tours',
        about: 'About',
        blog: 'Blog',
        contact: 'Contact'
      },
      allTours: 'All Tours',
      findYourPerfectTour: 'Find Your Perfect Tour in Japan',
      searchPlaceholder: 'Search tours...',
      filter: 'Filter',
      sortBy: 'Sort by',
      categories: 'Tour Categories',
      types: 'Tour Types',
      allTypes: 'All Types',
      duration: 'Duration',
      days: 'days',
      price: 'Price',
      groupSize: 'Group Size',
      people: 'people',
      date: 'Date',
      location: 'Location',
      applyFilter: 'Apply Filters',
      resetFilter: 'Reset Filters',
      sortOptions: {
        recommended: 'Recommended',
        priceAsc: 'Price (low to high)',
        priceDesc: 'Price (high to low)',
        durationAsc: 'Duration (short to long)',
        durationDesc: 'Duration (long to short)',
        popularityDesc: 'Popularity'
      },
      noToursFound: 'No tours found. Please adjust your search parameters.',
      showMore: 'Show More',
      bookNow: 'Book Now',
      viewDetails: 'View Details',
      reviews: 'reviews',
      from: 'from',
      destinations: 'Destinations',
      tags: 'Tags',
      route: 'Route',
      clearFilters: 'Clear Filters',
      popularOnly: 'Popular',
      showPopular: 'Show popular'
    },
    ja: {
      menu: {
        home: 'ホーム',
        tours: 'ツアー',
        about: '会社概要',
        blog: 'ブログ',
        contact: 'お問い合わせ'
      },
      allTours: 'すべてのツアー',
      findYourPerfectTour: '日本での理想的なツアーを見つけましょう',
      searchPlaceholder: 'ツアーを検索...',
      filter: 'フィルター',
      sortBy: '並び替え',
      categories: 'ツアーカテゴリー',
      types: 'ツアータイプ',
      allTypes: 'すべてのタイプ',
      duration: '期間',
      days: '日間',
      price: '価格',
      groupSize: 'グループサイズ',
      people: '人',
      date: '日付',
      location: '場所',
      applyFilter: 'フィルターを適用',
      resetFilter: 'フィルターをリセット',
      sortOptions: {
        recommended: 'おすすめ',
        priceAsc: '価格（低い順）',
        priceDesc: '価格（高い順）',
        durationAsc: '期間（短い順）',
        durationDesc: '期間（長い順）',
        popularityDesc: '人気'
      },
      noToursFound: 'ツアーが見つかりません。検索条件を調整してください。',
      showMore: 'もっと見る',
      bookNow: '今すぐ予約',
      viewDetails: '詳細を見る',
      reviews: 'レビュー',
      from: 'から',
      destinations: '目的地',
      tags: 'タグ',
      route: 'ルート',
      clearFilters: 'フィルターをクリア',
      popularOnly: '人気',
      showPopular: '人気を表示'
    }
  };

  const t = translations[currentLang];

  // Сортировка туров
  const sortTours = (tours, option) => {
    switch (option) {
      case 'priceAsc':
        return [...tours].sort((a, b) => a.price - b.price);
      case 'priceDesc':
        return [...tours].sort((a, b) => b.price - a.price);
      case 'durationAsc':
        return [...tours].sort((a, b) => a.duration - b.duration);
      case 'durationDesc':
        return [...tours].sort((a, b) => b.duration - a.duration);
      case 'popularityDesc':
        // Сортировка по популярности (используем поле popular)
        return [...tours].sort((a, b) => {
          if (a.popular && !b.popular) return -1;
          if (!a.popular && b.popular) return 1;
          return 0;
        });
      default: // 'recommended'
        return tours;
    }
  };

  // Фильтрация туров по всем параметрам
  const filteredTours = useMemo(() => {
    let filtered = [...toursData];

    // Фильтр только популярные
    if (showPopularOnly) {
      filtered = filtered.filter(tour => tour.popular === true);
    }

    // Фильтр по категории
    if (activeCategory !== 'all') {
      filtered = filtered.filter(tour => tour.category === activeCategory);
    }

    // Фильтр по типу
    if (activeType !== 'all') {
      filtered = filtered.filter(tour => tour.types && tour.types.includes(activeType));
    }

    // Фильтр по цене
    filtered = filtered.filter(tour => tour.price >= priceRange[0] && tour.price <= priceRange[1]);

    // Фильтр по длительности
    filtered = filtered.filter(tour => tour.duration >= durationRange[0] && tour.duration <= durationRange[1]);

    // Фильтр по поисковому запросу
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(tour =>
        tour.title[currentLang].toLowerCase().includes(term) ||
        tour.description[currentLang].toLowerCase().includes(term) ||
        (tour.route[currentLang] && tour.route[currentLang].some(location =>
          location.toLowerCase().includes(term))) ||
        (tour.types && tour.types.some(type =>
          type.toLowerCase().includes(term)))
      );
    }

    // Сортировка
    return sortTours(filtered, sortOption);
  }, [activeCategory, activeType, showPopularOnly, priceRange, durationRange, searchTerm, sortOption, currentLang]);

  // Обработчик изменения поискового запроса
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Обработчик сброса фильтров
  const handleResetFilters = () => {
    setActiveCategory('all');
    setActiveType('all');
    setShowPopularOnly(false);
    setSearchTerm('');
    setPriceRange([0, 10000]);
    setDurationRange([1, 25]);
    setSortOption('recommended');
  };

  const getCategoryTitle = (categoryId) => {
    if (categoryId === 'all') return t.allTours;
    const category = tourCategories.find(cat => cat.id === categoryId);
    return category ? category.title[currentLang] : '';
  };

  const getTypeTitle = (typeId) => {
    if (typeId === 'all') return t.allTypes;
    const type = tourTypes.find(t => t.id === typeId);
    return type ? type.title[currentLang] : '';
  };

  // Информация об активных фильтрах
  const activeFilters = useMemo(() => {
    const filters = [];

    if (showPopularOnly) {
      filters.push({ type: 'popular', value: t.popularOnly });
    }

    if (activeCategory !== 'all') {
      filters.push({ type: 'category', value: getCategoryTitle(activeCategory) });
    }

    if (activeType !== 'all') {
      filters.push({ type: 'type', value: getTypeTitle(activeType) });
    }

    if (priceRange[0] > 0 || priceRange[1] < 10000) {
      filters.push({ type: 'price', value: `$${priceRange[0]} - $${priceRange[1]}` });
    }

    if (durationRange[0] > 1 || durationRange[1] < 25) {
      filters.push({ type: 'duration', value: `${durationRange[0]}-${durationRange[1]} ${t.days}` });
    }

    return filters;
  }, [activeCategory, activeType, showPopularOnly, priceRange, durationRange, currentLang]);

  return (
    <div className="min-h-screen bg-white">

        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center flex"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/hero/tours.png',
            height: '60vh'
          }}
        >
          <div className="container mx-auto px-4 flex flex-col justify-center h-full">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">{t.allTours}</h1>
              <p className="text-xl text-white mb-8 max-w-3xl mx-auto">{t.findYourPerfectTour}</p>

              <div className="max-w-3xl mx-auto">
                {/* Поисковая строка и кнопки */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder={t.searchPlaceholder}
                      value={searchTerm}
                      onChange={handleSearchChange}
                      className="pl-10 pr-4 py-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setShowPopularOnly(!showPopularOnly)}
                      className={`flex items-center justify-center px-6 py-3 rounded-md font-medium transition-colors ${
                        showPopularOnly
                          ? 'bg-pink-500 text-white'
                          : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <Star className={`w-5 h-5 mr-2 ${showPopularOnly ? 'text-white' : 'text-pink-500'}`} />
                      {t.popularOnly}
                    </button>
                    <button
                      onClick={() => setIsFilterOpen(!isFilterOpen)}
                      className="flex items-center justify-center bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-6 rounded-md"
                    >
                      <Filter className="w-5 h-5 mr-2" />
                      {t.filter}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <div className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-gray-700 font-medium">{t.filter}:</span>
              {activeFilters.map((filter, index) => (
                <span key={index} className="bg-white px-3 py-1 rounded-full text-sm flex items-center">
                  {filter.value}
                  <button className="ml-2 text-gray-400 hover:text-gray-600">
                    <X size={14} />
                  </button>
                </span>
              ))}
              <button
                onClick={handleResetFilters}
                className="text-pink-500 hover:text-pink-600 text-sm ml-2"
              >
                {t.clearFilters}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Filter Panel */}
      {isFilterOpen && (
        <section className="bg-white py-6 shadow-md">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <h3 className="font-bold text-gray-700 mb-2">{t.categories}</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setActiveCategory('all')}
                    className={`block w-full text-left px-3 py-2 rounded ${activeCategory === 'all' ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  >
                    {t.allTours}
                  </button>
                  {tourCategories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`block w-full text-left px-3 py-2 rounded ${activeCategory === category.id ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                    >
                      {category.title[currentLang]}
                    </button>
                  ))}
                </div>

                <h3 className="font-bold text-gray-700 mb-2 mt-6">{t.types}</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setActiveType('all')}
                    className={`block w-full text-left px-3 py-2 rounded ${activeType === 'all' ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  >
                    {t.allTypes}
                  </button>
                  {tourTypes.map(type => (
                    <button
                      key={type.id}
                      onClick={() => setActiveType(type.id)}
                      className={`block w-full text-left px-3 py-2 rounded ${activeType === type.id ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                    >
                      {type.title[currentLang]}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-700 mb-2">{t.sortBy}</h3>
                <select
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="recommended">{t.sortOptions.recommended}</option>
                  <option value="priceAsc">{t.sortOptions.priceAsc}</option>
                  <option value="priceDesc">{t.sortOptions.priceDesc}</option>
                  <option value="durationAsc">{t.sortOptions.durationAsc}</option>
                  <option value="durationDesc">{t.sortOptions.durationDesc}</option>
                  <option value="popularityDesc">{t.sortOptions.popularityDesc}</option>
                </select>
              </div>

              <div>
                <h3 className="font-bold text-gray-700 mb-2">{t.duration}</h3>
                <div className="px-2">
                  <input
                    type="range"
                    min="1"
                    max="25"
                    step="1"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    value={durationRange[1]}
                    onChange={(e) => setDurationRange([durationRange[0], parseInt(e.target.value)])}
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>{durationRange[0]} {t.days}</span>
                    <span>{durationRange[1]} {t.days}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-700 mb-2">{t.price}</h3>
                <div className="px-2">
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="100"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-6 space-x-4">
              <button
                onClick={handleResetFilters}
                className="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 text-gray-700"
              >
                {t.resetFilter}
              </button>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-md"
              >
                {t.applyFilter}
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Tours Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredTours.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTours.map((tour) => (
                <TourCard
                  key={tour.id}
                  tour={tour}
                  bookTour={(localizedTour) => {
                    bookTour(localizedTour);
                  }}
                  viewTourDetails={(localizedTour) => {
                    bookTour(localizedTour);
                    navigateTo('tour');
                  }}
                  translations={translations}
                  currentLang={currentLang}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-lg text-gray-600">{t.noToursFound}</p>
              <button
                onClick={handleResetFilters}
                className="mt-4 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-md"
              >
                {t.resetFilter}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default ToursPage;