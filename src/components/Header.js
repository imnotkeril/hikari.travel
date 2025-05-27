// src/components/Header.js
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import CurrencySelector from './CurrencySelector';
import { useAppContext } from '../context/AppContext';

function Header({ currentLang, setCurrentLang, navigateTo }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentCurrency, setCurrentCurrency } = useAppContext();

  // Переводы для меню
  const translations = {
    ru: {
      menu: {
        home: 'Главная',
        tours: 'Туры',
        services: 'Услуги',
        about: 'О нас',
        contact: 'Контакты'
      },
      bookNow: 'Забронировать'
    },
    en: {
      menu: {
        home: 'Home',
        tours: 'Tours',
        services: 'Services',
        about: 'About',
        contact: 'Contact'
      },
      bookNow: 'Book Now'
    },
    ja: {
      menu: {
        home: 'ホーム',
        tours: 'ツアー',
        services: 'サービス',
        about: '会社概要',
        contact: 'お問い合わせ'
      },
      bookNow: '今すぐ予約'
    }
  };

  const t = translations[currentLang];

  const handleNavigation = (page, event) => {
    if (event) event.preventDefault();
    navigateTo(page);
    setIsMenuOpen(false);
  };

  const handleLanguageChange = (lang) => {
    console.log('Changing language to:', lang);
    setCurrentLang(lang);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#" onClick={(e) => handleNavigation('home', e)} className="flex items-center">
              <img src="/images/logo.png" alt="Hikari Travel" className="h-10 md:h-12 lg:h-14" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" onClick={(e) => handleNavigation('home', e)} className="text-gray-600 hover:text-pink-500 font-medium">{t.menu.home}</a>
            <a href="#" onClick={(e) => handleNavigation('tours', e)} className="text-gray-600 hover:text-pink-500 font-medium">{t.menu.tours}</a>
            <a href="#" onClick={(e) => handleNavigation('services', e)} className="text-gray-600 hover:text-pink-500 font-medium">{t.menu.services}</a>
            <a href="#" onClick={(e) => handleNavigation('about', e)} className="text-gray-600 hover:text-pink-500 font-medium">{t.menu.about}</a>
            <a href="#" onClick={(e) => handleNavigation('contact', e)} className="text-gray-600 hover:text-pink-500 font-medium">{t.menu.contact}</a>
          </nav>

          <div className="flex items-center space-x-2">
            {/* Currency Selector */}
            <div className="hidden md:block">
              <CurrencySelector
                currentCurrency={currentCurrency}
                setCurrentCurrency={setCurrentCurrency}
                currentLang={currentLang}
              />
            </div>

            {/* Language Selector */}
            <div className="hidden md:block">
              <LanguageSelector
                currentLang={currentLang}
                setCurrentLang={handleLanguageChange}
              />
            </div>

            {/* Book Now Button - Desktop */}
            <button
              onClick={(e) => handleNavigation('booking', e)}
              className="hidden md:block bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded ml-2"
            >
              {t.bookNow}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-600 hover:text-pink-500 ml-2"
            >
              {isMenuOpen ? (
                <X className="text-xl" />
              ) : (
                <Menu className="text-xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <a href="#" onClick={(e) => handleNavigation('home', e)} className="block py-2 text-gray-600 hover:text-pink-500">{t.menu.home}</a>
            <a href="#" onClick={(e) => handleNavigation('tours', e)} className="block py-2 text-gray-600 hover:text-pink-500">{t.menu.tours}</a>
            <a href="#" onClick={(e) => handleNavigation('services', e)} className="block py-2 text-gray-600 hover:text-pink-500">{t.menu.services}</a>
            <a href="#" onClick={(e) => handleNavigation('about', e)} className="block py-2 text-gray-600 hover:text-pink-500">{t.menu.about}</a>
            <a href="#" onClick={(e) => handleNavigation('contact', e)} className="block py-2 text-gray-600 hover:text-pink-500">{t.menu.contact}</a>

            {/* Mobile Language and Currency Selectors */}
            <div className="flex items-center justify-between py-3 mt-2 border-t border-gray-200">
              <div className="flex items-center space-x-4">
                <CurrencySelector
                  currentCurrency={currentCurrency}
                  setCurrentCurrency={setCurrentCurrency}
                  currentLang={currentLang}
                />
                <LanguageSelector
                  currentLang={currentLang}
                  setCurrentLang={handleLanguageChange}
                />
              </div>
            </div>

            <button
              onClick={(e) => handleNavigation('booking', e)}
              className="mt-3 w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded"
            >
              {t.bookNow}
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;