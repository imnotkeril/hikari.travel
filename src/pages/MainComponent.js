// src/pages/MainComponent.js
import React, { useState, useEffect } from 'react';
import { Header, Footer } from '../components';
import {
  HomePage,
  ToursPage,
  AboutPage,
  ContactPage,
  LoginPage,
  AdminPage,
  BookingPage,
  BookingConfirmationPage,
  BlogPage,
  BlogPostPage,
  TourDetailsPage
} from '../pages';

// Основной компонент приложения
function MainComponent() {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentLang, setCurrentLang] = useState("ru");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [selectedTour, setSelectedTour] = useState(null);
  const [bookingData, setBookingData] = useState(null);
  
  // Загрузка предпочтительного языка из localStorage при монтировании
  useEffect(() => {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
      setCurrentLang(savedLang);
    }
  }, []);
  
  // Функция для обновления языка с сохранением в localStorage
  const updateLanguage = (lang) => {
    console.log('Updating language to:', lang);
    setCurrentLang(lang);
    localStorage.setItem('preferredLanguage', lang);
  };
  
// Переключение между страницами
const navigateTo = (page, anchor) => {
  console.log('Navigating to:', page, anchor ? `with anchor: ${anchor}` : '');
  setCurrentPage(page);
  window.scrollTo(0, 0);

  // Если указан якорь, после загрузки страницы прокрутим к этому элементу
  if (anchor) {
    // Используем setTimeout, чтобы дать время для рендеринга страницы
    setTimeout(() => {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
};

  // Функция для бронирования тура
  const bookTour = (tour) => {
    console.log('Booking tour:', tour);
    setSelectedTour(tour);
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

  // Определение текущего компонента на основе выбранной страницы
  const renderContent = () => {
    const commonProps = {
      currentLang, 
      setCurrentLang: updateLanguage, // Используем обновленную функцию
      navigateTo
    };

    switch(currentPage) {
      case "home":
        return <HomePage {...commonProps} bookTour={bookTour} />;
      case "tours":
        return <ToursPage {...commonProps} bookTour={bookTour} />;
      case "tour":
        return <TourDetailsPage {...commonProps} bookTour={bookTour} tourId={selectedTour?.id} />;
      case "booking":
        return <BookingPage {...commonProps} tour={selectedTour} saveBooking={saveBooking} />;
      case "booking-confirmation":
        return <BookingConfirmationPage {...commonProps} bookingData={bookingData} />;
      case "about":
        return <AboutPage {...commonProps} />;
      case "contact":
        return <ContactPage {...commonProps} />;
      case "login":
        return <LoginPage {...commonProps} handleLogin={handleLogin} />;
      case "admin":
        return <AdminPage 
                 {...commonProps}
                 userData={userData}
                 handleLogout={handleLogout}
                 isLoggedIn={isLoggedIn}
               />;
      case "blog":
        return <BlogPage {...commonProps} />;
      case "blog-post":
        return <BlogPostPage {...commonProps} />;
      default:
        return <HomePage {...commonProps} bookTour={bookTour} />;
    }
  };

  return (
    <div className="app-container">
      {currentPage !== 'login' && currentPage !== 'admin' && (
        <Header 
          currentLang={currentLang} 
          setCurrentLang={updateLanguage} 
          navigateTo={navigateTo} 
        />
      )}
      
      {renderContent()}
      
      {currentPage !== 'login' && currentPage !== 'admin' && (
        <Footer currentLang={currentLang} navigateTo={navigateTo} />
      )}
    </div>
  );
}

export default MainComponent;