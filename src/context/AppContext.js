// src/context/AppContext.js
import React, { createContext, useContext, useState } from 'react';

// Создаем контекст приложения
const AppContext = createContext();

// Провайдер контекста
export const AppProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentLang, setCurrentLang] = useState("ru");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [selectedTour, setSelectedTour] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [bookingData, setBookingData] = useState(null);

  // Переключение между страницами
  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  // Функция для бронирования тура
  const bookTour = (tour) => {
    setSelectedTour(tour);
    setSelectedService(null); // Очищаем выбранную услугу
    navigateTo("booking");
  };

  // Функция для бронирования услуги
  const bookService = (serviceData) => {
    setSelectedService(serviceData);
    setSelectedTour(null); // Очищаем выбранный тур
    navigateTo("booking");
  };

  // Функция для входа в админ-панель
  const handleLogin = (credentials) => {
    // В реальном приложении здесь была бы проверка через API
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
    // В реальном приложении здесь был бы запрос к API для сохранения бронирования
    navigateTo("booking-confirmation");
  };

  // Значение контекста, которое будет доступно компонентам
  const contextValue = {
    currentPage,
    setCurrentPage,
    currentLang,
    setCurrentLang,
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
    saveBooking
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