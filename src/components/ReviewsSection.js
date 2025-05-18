// src/components/ReviewsSection.js
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { getAllReviews, getReviewsByTourId, getFeaturedReviews } from '../data/reviewsData';

// Компонент для отображения отзывов с различными вариантами отображения
const ReviewsSection = ({
  currentLang,
  tourId = null, // ID тура для фильтрации отзывов, если null - показываем все или избранные
  limit = 3, // Количество отзывов на странице
  showControls = true, // Показывать ли элементы управления (слайдер, pagination)
  showRating = true, // Показывать ли рейтинг
  variant = 'slider', // Варианты: 'slider', 'grid', 'list'
  featured = false, // Показывать только избранные отзывы
  className = '',
  showMoreButton = false, // Показывать кнопку "Показать еще"
  onShowMoreClick = null, // Функция обработки клика по кнопке "Показать еще"
  skipFirst = 0, // Пропустить первые N отзывов (полезно для пагинации)
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAll, setShowAll] = useState(false);

  // Получаем нужные переводы в зависимости от варианта использования
  const translations = {
    ru: {
      title: 'Отзывы',
      viewAll: 'Смотреть все отзывы',
      showMore: 'Показать больше',
      hideMore: 'Скрыть',
      writeReview: 'Написать отзыв',
      noReviews: 'Отзывов пока нет',
      beFirst: 'Будьте первым, кто оставит отзыв'
    },
    en: {
      title: 'Reviews',
      viewAll: 'View All Reviews',
      showMore: 'Show More',
      hideMore: 'Hide',
      writeReview: 'Write a Review',
      noReviews: 'No reviews yet',
      beFirst: 'Be the first to leave a review'
    },
    ja: {
      title: 'お客様の声',
      viewAll: 'すべての感想を見る',
      showMore: 'もっと見る',
      hideMore: '隠す',
      writeReview: 'レビューを書く',
      noReviews: 'まだレビューはありません',
      beFirst: '最初のレビューを書いてください'
    }
  };

  const t = translations[currentLang];

  // Получаем отзывы в зависимости от параметров
  let reviews = [];
  if (tourId) {
    reviews = getReviewsByTourId(tourId);
  } else if (featured) {
    reviews = getFeaturedReviews();
  } else {
    reviews = getAllReviews();
  }

  // Сортируем отзывы по дате (сначала новые)
  reviews = [...reviews].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Ограничиваем количество отзывов, если showAll = false
  // Учитываем skipFirst для пропуска первых N отзывов
  const displayedReviews = showAll
    ? reviews.slice(skipFirst)
    : reviews.slice(skipFirst, skipFirst + limit);

  // Обработчик кнопки "Показать еще"
  const handleShowMore = () => {
    if (onShowMoreClick) {
      onShowMoreClick();
    } else {
      setShowAll(!showAll);
    }
  };

  // Функция для форматирования даты
  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString(
      currentLang === 'ru' ? 'ru-RU' :
      currentLang === 'ja' ? 'ja-JP' :
      'en-US',
      { day: 'numeric', month: 'long', year: 'numeric' }
    );
  };

  // Если отзывов нет
  if (reviews.length === 0) {
    return (
      <div className={`bg-white rounded-lg shadow-md p-6 text-center ${className}`}>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{t.noReviews}</h3>
        <p className="text-gray-600 mb-4">{t.beFirst}</p>
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
          {t.writeReview}
        </button>
      </div>
    );
  }

  // Отображение в виде слайдера
  if (variant === 'slider') {
    return (
      <div className={`${className}`}>
        {/* Заголовок и кнопки */}
        {showControls && (
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">{t.title}</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => setCurrentSlide((prev) => (prev === 0 ? displayedReviews.length - 1 : prev - 1))}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-800"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev === displayedReviews.length - 1 ? 0 : prev + 1))}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-800"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Слайдер */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <img
              src={displayedReviews[currentSlide].author.image}
              alt={displayedReviews[currentSlide].author.name}
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <div className="flex items-center">
                <h3 className="text-lg font-bold text-gray-800 mr-2">{displayedReviews[currentSlide].author.name}</h3>
                <span className="text-gray-500 text-sm">{formatDate(displayedReviews[currentSlide].date)}</span>
              </div>
              {showRating && (
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < displayedReviews[currentSlide].rating ? 'text-yellow-500' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
              )}
              <p className="text-gray-500 text-sm">{displayedReviews[currentSlide].author.location[currentLang]}</p>
            </div>
          </div>
          <p className="text-gray-700">"{displayedReviews[currentSlide].text[currentLang]}"</p>

          {/* Индикаторы слайдов */}
          {showControls && displayedReviews.length > 1 && (
            <div className="flex justify-center mt-4 gap-2">
              {displayedReviews.map((_, idx) => (
                <button
                  key={idx}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentSlide ? 'w-8 bg-pink-500' : 'w-2 bg-gray-300'
                  }`}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Кнопка "Показать больше" */}
        {showMoreButton && reviews.length > limit && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleShowMore}
              className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-md"
            >
              {showAll ? t.hideMore : t.showMore}
            </button>
          </div>
        )}
      </div>
    );
  }

  // Отображение в виде сетки
  if (variant === 'grid') {
    return (
      <div className={`${className}`}>
        {showControls && (
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">{t.title}</h2>
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
              {t.writeReview}
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedReviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src={review.author.image}
                  alt={review.author.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{review.author.name}</h3>
                  <p className="text-gray-500 text-sm">{review.author.location[currentLang]}</p>
                  {showRating && (
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <p className="text-gray-700 italic">"{review.text[currentLang]}"</p>
              <p className="text-gray-500 text-sm mt-4 text-right">{formatDate(review.date)}</p>
            </div>
          ))}
        </div>

        {/* Кнопка "Показать больше" */}
        {showMoreButton && reviews.length > limit && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleShowMore}
              className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-md"
            >
              {showAll ? t.hideMore : t.showMore}
            </button>
          </div>
        )}
      </div>
    );
  }

  // Отображение в виде списка
  return (
    <div className={`${className}`}>
      {showControls && (
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">{t.title}</h2>
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
            {t.writeReview}
          </button>
        </div>
      )}

      <div className="space-y-6">
        {displayedReviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img
                src={review.author.image}
                alt={review.author.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <div className="flex items-center">
                  <h3 className="text-lg font-bold text-gray-800 mr-2">{review.author.name}</h3>
                  <span className="text-gray-500 text-sm">{formatDate(review.date)}</span>
                </div>
                {showRating && (
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                )}
                <p className="text-gray-500 text-sm">{review.author.location[currentLang]}</p>
              </div>
            </div>
            <p className="text-gray-700">"{review.text[currentLang]}"</p>
          </div>
        ))}
      </div>

      {/* Кнопка "Показать больше" */}
      {showMoreButton && reviews.length > limit && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleShowMore}
            className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-md"
          >
            {showAll ? t.hideMore : t.showMore}
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewsSection;