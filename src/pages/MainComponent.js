// src/pages/MainComponent.js
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useNavigation } from '../hooks/useNavigation';
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
import { useAppContext } from '../context/AppContext';

// Основной компонент приложения
function MainComponent() {
  const {
    currentLang,
    setCurrentLang,
    selectedTour,
    setSelectedTour,
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
    setSelectedTour(tour);
    navigateTo("booking");
  };

  return (
    <div className="app-container">
      {location.pathname !== '/login' && location.pathname !== '/admin' && (
        <Header
          currentLang={currentLang}
          setCurrentLang={setCurrentLang}
          navigateTo={navigateTo}
        />
      )}

      <Routes>
        <Route path="/" element={
          <HomePage
            currentLang={currentLang}
            setCurrentLang={setCurrentLang}
            navigateTo={navigateTo}
            bookTour={bookTour}
          />
        } />
        <Route path="/tours" element={
          <ToursPage
            currentLang={currentLang}
            setCurrentLang={setCurrentLang}
            navigateTo={navigateTo}
            bookTour={bookTour}
          />
        } />
        <Route path="/tour/:tourId?" element={
          <TourDetailsPage
            currentLang={currentLang}
            setCurrentLang={setCurrentLang}
            navigateTo={navigateTo}
            bookTour={bookTour}
          />
        } />
        <Route path="/booking" element={
          <BookingPage
            currentLang={currentLang}
            setCurrentLang={setCurrentLang}
            navigateTo={navigateTo}
            tour={selectedTour}
            saveBooking={saveBooking}
          />
        } />
        <Route path="/booking-confirmation" element={
          <BookingConfirmationPage
            currentLang={currentLang}
            setCurrentLang={setCurrentLang}
            navigateTo={navigateTo}
            bookingData={bookingData}
          />
        } />
        <Route path="/about" element={
          <AboutPage
            currentLang={currentLang}
            setCurrentLang={setCurrentLang}
            navigateTo={navigateTo}
          />
        } />
        <Route path="/contact" element={
          <ContactPage
            currentLang={currentLang}
            setCurrentLang={setCurrentLang}
            navigateTo={navigateTo}
          />
        } />
        <Route path="/login" element={
          <LoginPage
            currentLang={currentLang}
            setCurrentLang={setCurrentLang}
            navigateTo={navigateTo}
            handleLogin={handleLogin}
          />
        } />
        <Route path="/admin" element={
          <AdminPage
            currentLang={currentLang}
            setCurrentLang={setCurrentLang}
            navigateTo={navigateTo}
            userData={userData}
            handleLogout={handleLogout}
            isLoggedIn={isLoggedIn}
          />
        } />
        <Route path="/blog" element={
          <BlogPage
            currentLang={currentLang}
            setCurrentLang={setCurrentLang}
            navigateTo={navigateTo}
          />
        } />
        <Route path="/blog-post" element={
          <BlogPostPage
            currentLang={currentLang}
            setCurrentLang={setCurrentLang}
            navigateTo={navigateTo}
          />
        } />
      </Routes>

      {location.pathname !== '/login' && location.pathname !== '/admin' && (
        <Footer currentLang={currentLang} navigateTo={navigateTo} />
      )}
    </div>
  );
}

export default MainComponent;