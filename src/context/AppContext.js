// src/context/AppContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

// Создаем контекст приложения
const AppContext = createContext();

// Поддерживаемые валюты
export const SUPPORTED_CURRENCIES = {
  USD: { symbol: '$', name: { ru: 'Доллар США', en: 'US Dollar', ja: '米ドル' } },
  EUR: { symbol: '€', name: { ru: 'Евро', en: 'Euro', ja: 'ユーロ' } },
  JPY: { symbol: '¥', name: { ru: 'Японская иена', en: 'Japanese Yen', ja: '日本円' } },
  RUB: { symbol: '₽', name: { ru: 'Российский рубль', en: 'Russian Ruble', ja: 'ロシアルーブル' } },
  GBP: { symbol: '£', name: { ru: 'Фунт стерлингов', en: 'British Pound', ja: '英ポンド' } },
  AUD: { symbol: 'A$', name: { ru: 'Австралийский доллар', en: 'Australian Dollar', ja: '豪ドル' } },
  CAD: { symbol: 'C$', name: { ru: 'Канадский доллар', en: 'Canadian Dollar', ja: 'カナダドル' } },
  CNY: { symbol: '¥', name: { ru: 'Китайский юань', en: 'Chinese Yuan', ja: '中国元' } },
  KRW: { symbol: '₩', name: { ru: 'Корейская вона', en: 'Korean Won', ja: '韓国ウォン' } }
};

// Провайдер контекста
export const AppProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentLang, setCurrentLang] = useState("ru");
  const [currentCurrency, setCurrentCurrency] = useState("USD");
  const [exchangeRates, setExchangeRates] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [selectedTour, setSelectedTour] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [bookingData, setBookingData] = useState(null);

  // Загружаем сохраненные настройки при инициализации
  useEffect(() => {
    const savedLang = localStorage.getItem('hikari_language');
    const savedCurrency = localStorage.getItem('hikari_currency');

    if (savedLang && ['ru', 'en', 'ja'].includes(savedLang)) {
      setCurrentLang(savedLang);
    }

    if (savedCurrency && SUPPORTED_CURRENCIES[savedCurrency]) {
      setCurrentCurrency(savedCurrency);
    }
  }, []);

  // Сохраняем настройки в localStorage при изменении
  useEffect(() => {
    localStorage.setItem('hikari_language', currentLang);
  }, [currentLang]);

  useEffect(() => {
    localStorage.setItem('hikari_currency', currentCurrency);
  }, [currentCurrency]);

  // Загружаем курсы валют
  useEffect(() => {
    fetchExchangeRates();
    // Обновляем курсы каждый час
    const interval = setInterval(fetchExchangeRates, 3600000);
    return () => clearInterval(interval);
  }, []);

  // Функция для получения реальных курсов валют
  const fetchExchangeRates = async () => {
    try {
      // Используем бесплатный API для получения реальных курсов
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data && data.rates) {
        // Формируем объект курсов относительно USD
        const rates = {
          USD: 1,
          EUR: data.rates.EUR || 0.85,
          JPY: data.rates.JPY || 110,
          RUB: data.rates.RUB || 75,
          GBP: data.rates.GBP || 0.73,
          AUD: data.rates.AUD || 1.35,
          CAD: data.rates.CAD || 1.25,
          CNY: data.rates.CNY || 6.45,
          KRW: data.rates.KRW || 1180
        };

        setExchangeRates(rates);
        console.log('Exchange rates updated successfully:', rates);
      } else {
        throw new Error('Invalid API response format');
      }
    } catch (error) {
      console.error('Failed to fetch real exchange rates:', error);

      // Используем резервные курсы при ошибке
      const fallbackRates = {
        USD: 1,
        EUR: 0.85,
        JPY: 110,
        RUB: 75,
        GBP: 0.73,
        AUD: 1.35,
        CAD: 1.25,
        CNY: 6.45,
        KRW: 1180
      };

      setExchangeRates(fallbackRates);
      console.log('Using fallback exchange rates due to API error');
    }
  };

  // Функция для конвертации цены
  const convertPrice = (price, fromCurrency = 'USD', toCurrency = null) => {
    const targetCurrency = toCurrency || currentCurrency;

    if (!exchangeRates[fromCurrency] || !exchangeRates[targetCurrency]) {
      console.warn(`Exchange rate not found for ${fromCurrency} or ${targetCurrency}`);
      return price;
    }

    // Конвертируем в USD, затем в целевую валюту
    const usdPrice = price / exchangeRates[fromCurrency];
    const convertedPrice = usdPrice * exchangeRates[targetCurrency];

    return Math.round(convertedPrice);
  };

  // Функция для форматирования цены
  const formatPrice = (price, currency = null) => {
    const targetCurrency = currency || currentCurrency;
    const currencyInfo = SUPPORTED_CURRENCIES[targetCurrency];

    if (!currencyInfo) {
      return `$${price}`;
    }

    // Специальное форматирование для разных валют
    if (targetCurrency === 'JPY' || targetCurrency === 'KRW') {
      return `${currencyInfo.symbol}${Math.round(price).toLocaleString()}`;
    }

    if (targetCurrency === 'RUB') {
      return `${Math.round(price).toLocaleString()} ${currencyInfo.symbol}`;
    }

    return `${currencyInfo.symbol}${price.toLocaleString()}`;
  };

  // Переключение между страницами
  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  // Функция для бронирования тура
  const bookTour = (tour) => {
    setSelectedTour(tour);
    setSelectedService(null);
    navigateTo("booking");
  };

  // Функция для бронирования услуги
  const bookService = (serviceData) => {
    setSelectedService(serviceData);
    setSelectedTour(null);
    navigateTo("booking");
  };

  // Функция для входа в админ-панель
  const handleLogin = (credentials) => {
    if (credentials.username === "admin" && credentials.password === "hikari2025") {
      setIsLoggedIn(true);
      setUserData({ username: credentials.username, role: "admin" });
      navigateTo("admin");
      return true;
    }
    return false;
  };

  // Функция для выхода из системы
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    navigateTo("home");
  };

  // Функция для сохранения данных бронирования
  const saveBooking = (data) => {
    setBookingData(data);
    navigateTo("booking-confirmation");
  };

  // Значение контекста
  const contextValue = {
    currentPage,
    setCurrentPage,
    currentLang,
    setCurrentLang,
    currentCurrency,
    setCurrentCurrency,
    exchangeRates,
    convertPrice,
    formatPrice,
    isLoggedIn,
    setIsLoggedIn,
    userData,
    setUserData,
    selectedTour,
    setSelectedTour,
    selectedService,
    setSelectedService,
    bookingData,
    setBookingData,
    navigateTo,
    bookTour,
    bookService,
    handleLogin,
    handleLogout,
    saveBooking,
    fetchExchangeRates
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

// Хук для использования контекста
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export default AppContext;