// src/components/Loading.js
import React from 'react';

const Loading = ({
  message = 'loading...',
  size = 'medium',
  variant = 'spinner',
  fullScreen = false,
  className = ''
}) => {

  // Размеры для разных вариантов
  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return {
          spinner: 'h-8 w-8',
          gif: 'h-12 w-12',
          text: 'text-sm'
        };
      case 'large':
        return {
          spinner: 'h-24 w-24',
          gif: 'h-32 w-32',
          text: 'text-xl'
        };
      case 'medium':
      default:
        return {
          spinner: 'h-16 w-16',
          gif: 'h-20 w-20',
          text: 'text-base'
        };
    }
  };

  const sizeClasses = getSizeClasses();

  // Контейнер для полноэкранного режима
  const containerClasses = fullScreen
    ? 'fixed inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-center z-50'
    : 'flex flex-col items-center justify-center p-8';

  // Рендер спиннера
  const renderSpinner = () => (
    <div className={`animate-spin rounded-full border-t-4 border-pink-500 border-opacity-50 ${sizeClasses.spinner}`}></div>
  );

  // Рендер гифки (путь к файлу гифки)
  const renderGif = () => (
    <img
      src="/images/loading.gif"
      alt="Loading..."
      className={`${sizeClasses.gif} object-contain`}
    />
  );

  // Рендер японского стиля загрузки (сакура)
  const renderJapanese = () => (
    <div className="relative">
      <div className={`animate-spin rounded-full border-t-4 border-pink-400 border-opacity-50 ${sizeClasses.spinner}`}></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-pink-500 text-2xl animate-pulse">🌸</span>
      </div>
    </div>
  );

  // Рендер dots загрузки
  const renderDots = () => (
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce"></div>
      <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
      <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
    </div>
  );

  // Выбор варианта загрузки
  const renderLoader = () => {
    switch (variant) {
      case 'gif':
        return renderGif();
      case 'japanese':
        return renderJapanese();
      case 'dots':
        return renderDots();
      case 'spinner':
      default:
        return renderSpinner();
    }
  };

  return (
    <div className={`${containerClasses} ${className}`}>
      {renderLoader()}
      {message && (
        <p className={`mt-4 text-gray-600 ${sizeClasses.text} text-center`}>
          {message}
        </p>
      )}
    </div>
  );
};

// Компонент для inline загрузки (например, в кнопках)
export const InlineLoading = ({ size = 'small', className = '' }) => (
  <div className={`inline-flex items-center ${className}`}>
    <div className={`animate-spin rounded-full border-t-2 border-pink-500 border-opacity-50 ${
      size === 'small' ? 'h-4 w-4' : 'h-6 w-6'
    }`}></div>
  </div>
);

// Компонент для загрузки страницы
export const PageLoading = ({ message = 'loading page...' }) => (
  <Loading
    message={message}
    size="large"
    variant="japanese"
    fullScreen={true}
  />
);

// Компонент для загрузки контента
export const ContentLoading = ({ message = 'loading...' }) => (
  <Loading
    message={message}
    size="medium"
    variant="spinner"
    className="py-12"
  />
);

export default Loading;