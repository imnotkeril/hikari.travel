// src/pages/MainComponent.js
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useNavigation } from '../hooks/useNavigation';
import { Header, Footer, ErrorBoundary } from '../components';
import {
  HomePage,
  ToursPage,
  ServicesPage,
  AboutPage,
  ContactPage,
  LoginPage,
  AdminPage,
  BookingPage,
  BookingConfirmationPage,
  TourDetailsPage
} from '../pages';
import { useAppContext } from '../context/AppContext';

// Основной компонент приложения
function MainComponent() {
  const {
    currentLang,
    setCurrentLang,
    currentCurrency,
    setCurrentCurrency,
    selectedTour,
    setSelectedTour,
    selectedService,
    setSelectedService,
    bookingData,
    isLoggedIn,
    userData,
    handleLogin,
    handleLogout,
    saveBooking
  } = useAppContext();

  const location = useLocation();
  const { navigateTo } = useNavigation();

  // Загрузка предпочтительного языка из localStorage при монтировании
  useEffect(() => {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
      setCurrentLang(savedLang);
    }
  }, [setCurrentLang]);

  // Функция для бронирования тура
  const bookTour = (tour) => {
    console.log('bookTour called with:', tour);
    setSelectedTour(tour);
    setSelectedService(null); // Очищаем выбранную услугу
    navigateTo("booking");
  };

  // Функция для бронирования услуги
  const bookService = (serviceData) => {
    console.log('bookService called with:', serviceData);

    // Создаем объект услуги с выбранными опциями
    const serviceWithSelections = {
      ...serviceData.service,
      selectedOption: serviceData.selectedOption,
      selectedExtras: serviceData.selectedExtras,
      totalPrice: serviceData.totalPrice,
      currentLang: serviceData.currentLang,
      currency: serviceData.currency
    };

    console.log('Service with selections:', serviceWithSelections);

    setSelectedService(serviceWithSelections);
    setSelectedTour(null); // Очищаем выбранный тур
    navigateTo("booking");
  };

  // Функция для просмотра деталей тура с сохранением ID в URL
  const viewTourDetails = (tour) => {
    console.log('viewTourDetails called with:', tour);
    setSelectedTour(tour);
    navigateTo('tour', tour.id);
  };

  // Обертка для navigateTo, которая правильно обрабатывает якоря
  const handleNavigateTo = (page, anchor = null) => {
    if (anchor) {
      navigateTo(page, anchor);
    } else {
      navigateTo(page);
    }
  };

  return (
    <ErrorBoundary>
      <div className="app-container">
        {location.pathname !== '/login' && location.pathname !== '/admin' && (
          <Header
            currentLang={currentLang}
            setCurrentLang={setCurrentLang}
            navigateTo={handleNavigateTo}
          />
        )}

        <ErrorBoundary>
          <Routes>
            <Route path="/" element={
              <HomePage
                currentLang={currentLang}
                setCurrentLang={setCurrentLang}
                navigateTo={handleNavigateTo}
                bookTour={bookTour}
                setSelectedTour={setSelectedTour}
                viewTourDetails={viewTourDetails}
              />
            } />
            <Route path="/tours" element={
              <ToursPage
                currentLang={currentLang}
                setCurrentLang={setCurrentLang}
                navigateTo={handleNavigateTo}
                bookTour={bookTour}
                setSelectedTour={setSelectedTour}
                viewTourDetails={viewTourDetails}
              />
            } />
            <Route path="/services" element={
              <ServicesPage
                currentLang={currentLang}
                setCurrentLang={setCurrentLang}
                navigateTo={handleNavigateTo}
                bookService={bookService}
              />
            } />
            <Route path="/tour/:tourId?" element={
              <TourDetailsPage
                currentLang={currentLang}
                setCurrentLang={setCurrentLang}
                navigateTo={handleNavigateTo}
                bookTour={bookTour}
              />
            } />
            <Route path="/booking" element={
              <BookingPage
                currentLang={currentLang}
                setCurrentLang={setCurrentLang}
                navigateTo={handleNavigateTo}
                tour={selectedTour}
                service={selectedService}
                saveBooking={saveBooking}
              />
            } />
            <Route path="/booking-confirmation" element={
              <BookingConfirmationPage
                currentLang={currentLang}
                setCurrentLang={setCurrentLang}
                navigateTo={handleNavigateTo}
                bookingData={bookingData}
              />
            } />
            <Route path="/about" element={
              <AboutPage
                currentLang={currentLang}
                setCurrentLang={setCurrentLang}
                navigateTo={handleNavigateTo}
              />
            } />
            <Route path="/contact" element={
              <ContactPage
                currentLang={currentLang}
                setCurrentLang={setCurrentLang}
                navigateTo={handleNavigateTo}
              />
            } />
            <Route path="/login" element={
              <LoginPage
                currentLang={currentLang}
                setCurrentLang={setCurrentLang}
                navigateTo={handleNavigateTo}
                handleLogin={handleLogin}
              />
            } />
            <Route path="/admin" element={
              <AdminPage
                currentLang={currentLang}
                setCurrentLang={setCurrentLang}
                navigateTo={handleNavigateTo}
                userData={userData}
                handleLogout={handleLogout}
                isLoggedIn={isLoggedIn}
              />
            } />
          </Routes>
        </ErrorBoundary>

        {location.pathname !== '/login' && location.pathname !== '/admin' && (
          <Footer currentLang={currentLang} navigateTo={handleNavigateTo} />
        )}
      </div>
    </ErrorBoundary>
  );
}

export default MainComponent;