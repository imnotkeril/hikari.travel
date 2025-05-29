// src/pages/ServicesPage.js
import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  Filter,
  X,
  ChevronDown,
  Star
} from 'lucide-react';
import { servicesData, serviceCategories, serviceTypes } from '../data/servicesData';
import ServiceCard from '../components/ServiceCard';

function ServicesPage({ currentLang, setCurrentLang, navigateTo, bookService }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeType, setActiveType] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [sortOption, setSortOption] = useState('recommended');
  const [displayLimit, setDisplayLimit] = useState(12);

  // Переводы
  const translations = {
    ru: {
      menu: {
        home: 'Главная',
        tours: 'Туры',
        services: 'Услуги',
        about: 'О нас',
        blog: 'Блог',
        contact: 'Контакты'
      },
      allServices: 'Все услуги',
      findPerfectService: 'Найдите идеальную услугу для вашего путешествия в Японию',
      searchPlaceholder: 'Поиск услуг...',
      filter: 'Фильтр',
      sortBy: 'Сортировать по',
      categories: 'Категории услуг',
      types: 'Типы услуг',
      allTypes: 'Все типы',
      price: 'Цена',
      applyFilter: 'Применить фильтры',
      resetFilter: 'Сбросить фильтры',
      sortOptions: {
        recommended: 'Рекомендуемые',
        priceAsc: 'Цена (по возрастанию)',
        priceDesc: 'Цена (по убыванию)',
        popularityDesc: 'Популярность',
        nameAsc: 'По алфавиту'
      },
      noServicesFound: 'Услуги не найдены. Пожалуйста, измените параметры поиска.',
      showMore: 'Показать больше',
      clearFilters: 'Очистить фильтры',
      results: 'результатов',
      showing: 'Показано',
      of: 'из',
      servicesAvailable: 'доступных услуг',
      popularServices: 'Популярные',
      featuredCategories: 'Основные категории'
    },
    en: {
      menu: {
        home: 'Home',
        tours: 'Tours',
        services: 'Services',
        about: 'About',
        blog: 'Blog',
        contact: 'Contact'
      },
      allServices: 'All Services',
      findPerfectService: 'Find the perfect service for your Japan trip',
      searchPlaceholder: 'Search services...',
      filter: 'Filter',
      sortBy: 'Sort by',
      categories: 'Service Categories',
      types: 'Service Types',
      allTypes: 'All Types',
      price: 'Price',
      applyFilter: 'Apply Filters',
      resetFilter: 'Reset Filters',
      sortOptions: {
        recommended: 'Recommended',
        priceAsc: 'Price (low to high)',
        priceDesc: 'Price (high to low)',
        popularityDesc: 'Popularity',
        nameAsc: 'Alphabetical'
      },
      noServicesFound: 'No services found. Please adjust your search parameters.',
      showMore: 'Show More',
      clearFilters: 'Clear Filters',
      results: 'results',
      showing: 'Showing',
      of: 'of',
      servicesAvailable: 'services available',
      popularServices: 'Popular',
      featuredCategories: 'Featured Categories'
    },
    ja: {
      menu: {
        home: 'ホーム',
        tours: 'ツアー',
        services: 'サービス',
        about: '会社概要',
        blog: 'ブログ',
        contact: 'お問い合わせ'
      },
      allServices: 'すべてのサービス',
      findPerfectService: '日本旅行に最適なサービスを見つけましょう',
      searchPlaceholder: 'サービスを検索...',
      filter: 'フィルター',
      sortBy: '並び替え',
      categories: 'サービスカテゴリー',
      types: 'サービスタイプ',
      allTypes: 'すべてのタイプ',
      price: '価格',
      applyFilter: 'フィルターを適用',
      resetFilter: 'フィルターをリセット',
      sortOptions: {
        recommended: 'おすすめ',
        priceAsc: '価格（低い順）',
        priceDesc: '価格（高い順）',
        popularityDesc: '人気',
        nameAsc: 'アルファベット順'
      },
      noServicesFound: 'サービスが見つかりません。検索条件を調整してください。',
      showMore: 'もっと見る',
      clearFilters: 'フィルターをクリア',
      results: '結果',
      showing: '表示中',
      of: '/',
      servicesAvailable: 'サービス利用可能',
      popularServices: '人気',
      featuredCategories: '主要カテゴリー'
    }
  };

  const t = translations[currentLang];

  // Сброс лимита при изменении фильтров
  useEffect(() => {
    setDisplayLimit(12);
  }, [activeCategory, activeType, priceRange, searchTerm, sortOption]);

  // Сортировка услуг
  const sortServices = (services, option) => {
    switch (option) {
      case 'priceAsc':
        return [...services].sort((a, b) => a.price - b.price);
      case 'priceDesc':
        return [...services].sort((a, b) => b.price - a.price);
      case 'popularityDesc':
        return [...services].sort((a, b) => {
          const aIsPopular = a.type === 'popular' ? 1 : 0;
          const bIsPopular = b.type === 'popular' ? 1 : 0;
          return bIsPopular - aIsPopular;
        });
      case 'nameAsc':
        return [...services].sort((a, b) =>
          a.title[currentLang].localeCompare(b.title[currentLang])
        );
      default: // 'recommended'
        return services;
    }
  };

  // Фильтрация услуг
  const filteredServices = useMemo(() => {
    let filtered = [...servicesData];

    // Фильтр по категории
    if (activeCategory !== 'all') {
      filtered = filtered.filter(service => service.category === activeCategory);
    }

    // Фильтр по типу
    if (activeType !== 'all') {
      filtered = filtered.filter(service => service.type === activeType);
    }

    // Фильтр по цене
    filtered = filtered.filter(service =>
      service.price >= priceRange[0] && service.price <= priceRange[1]
    );

    // Фильтр по поисковому запросу
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(service =>
        service.title[currentLang].toLowerCase().includes(term) ||
        service.description[currentLang].toLowerCase().includes(term) ||
        service.shortDescription[currentLang].toLowerCase().includes(term) ||
        (service.tags[currentLang] && service.tags[currentLang].some(tag =>
          tag.toLowerCase().includes(term)))
      );
    }

    // Сортировка
    return sortServices(filtered, sortOption);
  }, [activeCategory, activeType, priceRange, searchTerm, sortOption, currentLang]);

  // Обработчик поиска
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Обработчик сброса фильтров
  const handleResetFilters = () => {
    setActiveCategory('all');
    setActiveType('all');
    setSearchTerm('');
    setPriceRange([0, 50000]);
    setSortOption('recommended');
  };

  // Получение названия категории
  const getCategoryTitle = (categoryId) => {
    if (categoryId === 'all') return t.allServices;
    const category = serviceCategories.find(cat => cat.id === categoryId);
    return category ? category.title[currentLang] : '';
  };

  // Получение названия типа
  const getTypeTitle = (typeId) => {
    if (typeId === 'all') return t.allTypes;
    const type = serviceTypes.find(t => t.id === typeId);
    return type ? type.title[currentLang] : '';
  };

  // Информация об активных фильтрах
  const activeFilters = useMemo(() => {
    const filters = [];

    if (activeCategory !== 'all') {
      filters.push({ type: 'category', value: getCategoryTitle(activeCategory) });
    }

    if (activeType !== 'all') {
      filters.push({ type: 'type', value: getTypeTitle(activeType) });
    }

    if (priceRange[0] > 0 || priceRange[1] < 50000) {
      filters.push({ type: 'price', value: `¥${priceRange[0]} - ¥${priceRange[1]}` });
    }

    return filters;
  }, [activeCategory, activeType, priceRange, currentLang]);

  // Обработчик бронирования услуги
  const handleBookService = (serviceData) => {
    // Передаем данные о выбранной услуге в родительский компонент
    if (bookService) {
      bookService(serviceData);
    } else {
      // Если функция не передана, переходим на страницу бронирования
      navigateTo('booking');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center flex"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/hero/services.webp)',
          height: '60vh'
        }}
      >
        <div className="container mx-auto px-4 flex flex-col justify-center h-full">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">{t.allServices}</h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">{t.findPerfectService}</p>

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
                    onClick={() => setActiveType(activeType === 'popular' ? 'all' : 'popular')}
                    className={`flex items-center justify-center px-6 py-3 rounded-md font-medium transition-colors ${
                      activeType === 'popular'
                        ? 'bg-pink-500 text-white'
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <Star className={`w-5 h-5 mr-2 ${activeType === 'popular' ? 'text-white' : 'text-pink-500'}`} />
                    {t.popularServices}
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
        <div className="bg-gray-100 py-4">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Категории */}
              <div>
                <h3 className="font-bold text-gray-700 mb-2">{t.categories}</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setActiveCategory('all')}
                    className={`block w-full text-left px-3 py-2 rounded ${
                      activeCategory === 'all'
                        ? 'bg-pink-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {t.allServices}
                  </button>
                  {serviceCategories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`block w-full text-left px-3 py-2 rounded ${
                        activeCategory === category.id
                          ? 'bg-pink-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category.icon} {category.title[currentLang]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Сортировка */}
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
                  <option value="popularityDesc">{t.sortOptions.popularityDesc}</option>
                  <option value="nameAsc">{t.sortOptions.nameAsc}</option>
                </select>
              </div>

              {/* Цена */}
              <div>
                <h3 className="font-bold text-gray-700 mb-2">{t.price}</h3>
                <div className="px-2">
                  <input
                    type="range"
                    min="0"
                    max="50000"
                    step="1000"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>¥{priceRange[0].toLocaleString()}</span>
                    <span>¥{priceRange[1].toLocaleString()}</span>
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

      {/* Featured Categories Section */}
      {!searchTerm && activeCategory === 'all' && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">{t.featuredCategories}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {serviceCategories.slice(0, 5).map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <div className="font-medium text-gray-800">{category.title[currentLang]}</div>
                  <div className="text-sm text-gray-500 mt-1">
                    {servicesData.filter(s => s.category === category.id).length} {t.servicesAvailable}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Results info */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-sm text-gray-500">
              {t.showing} {Math.min(filteredServices.length, displayLimit)} {t.of} {filteredServices.length} {t.results}
            </div>
          </div>

          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.slice(0, displayLimit).map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  currentLang={currentLang}
                  onBook={handleBookService}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-lg text-gray-600 mb-4">{t.noServicesFound}</p>
              <button
                onClick={handleResetFilters}
                className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-md"
              >
                {t.resetFilter}
              </button>
            </div>
          )}

          {/* Show More Button */}
          {filteredServices.length > displayLimit && (
            <div className="text-center mt-12">
              <button
                onClick={() => setDisplayLimit(prev => prev + 12)}
                className="px-8 py-3 border border-pink-500 text-pink-500 hover:bg-pink-50 font-medium rounded-md"
              >
                {t.showMore} ({filteredServices.length - displayLimit} {t.results})
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;