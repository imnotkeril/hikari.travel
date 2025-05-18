// src/components/Header.js
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

function Header({ currentLang, setCurrentLang, navigateTo }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Переводы для меню
  const translations = {
    ru: {
      menu: {
        home: 'Главная',
        tours: 'Туры',
        about: 'О нас',
        blog: 'Блог',
        contact: 'Контакты'
      },
      bookNow: 'Забронировать'
    },
    en: {
      menu: {
        home: 'Home',
        tours: 'Tours',
        about: 'About',
        blog: 'Blog',
        contact: 'Contact'
      },
      bookNow: 'Book Now'
    },
    ja: {
      menu: {
        home: 'ホーム',
        tours: 'ツアー',
        about: '会社概要',
        blog: 'ブログ',
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

  // Для отладки: вывод в консоль при изменении языка
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
          <nav className="hidden md:flex space-x-10">
            <a href="#" onClick={(e) => handleNavigation('home', e)} className="text-gray-600 hover:text-pink-500 font-medium">{t.menu.home}</a>
            <a href="#" onClick={(e) => handleNavigation('tours', e)} className="text-gray-600 hover:text-pink-500 font-medium">{t.menu.tours}</a>
            <a href="#" onClick={(e) => handleNavigation('about', e)} className="text-gray-600 hover:text-pink-500 font-medium">{t.menu.about}</a>
            <a href="#" onClick={(e) => handleNavigation('blog', e)} className="text-gray-600 hover:text-pink-500 font-medium">{t.menu.blog}</a>
            <a href="#" onClick={(e) => handleNavigation('contact', e)} className="text-gray-600 hover:text-pink-500 font-medium">{t.menu.contact}</a>
          </nav>
          
          <div className="flex items-center">
            {/* Language Selector */}
            <div className="mr-4">
              <LanguageSelector 
                currentLang={currentLang} 
                setCurrentLang={handleLanguageChange}
              />
            </div>
            
            {/* Book Now Button - Desktop */}
            <button 
              onClick={(e) => handleNavigation('booking', e)}
              className="hidden md:block bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded"
            >
              {t.bookNow}
            </button>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden text-gray-600 hover:text-pink-500"
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
            <a href="#" onClick={(e) => handleNavigation('about', e)} className="block py-2 text-gray-600 hover:text-pink-500">{t.menu.about}</a>
            <a href="#" onClick={(e) => handleNavigation('blog', e)} className="block py-2 text-gray-600 hover:text-pink-500">{t.menu.blog}</a>
            <a href="#" onClick={(e) => handleNavigation('contact', e)} className="block py-2 text-gray-600 hover:text-pink-500">{t.menu.contact}</a>
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