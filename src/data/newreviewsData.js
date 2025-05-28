// src/data/reviewsData.js

// Function to get reviews by tour ID
export const getReviewsByTourId = (tourId) => {
  return reviewsData.filter(review => review.tourId === tourId);
};

// Function to get general reviews (not tied to specific tour)
export const getGeneralReviews = () => {
  return reviewsData.filter(review => review.tourId === null);
};

// Function to get featured reviews (for homepage)
export const getFeaturedReviews = () => {
  return reviewsData.filter(review => review.featured);
};

// Function to calculate average rating for tour
export const getAverageRatingForTour = (tourId) => {
  const reviews = getReviewsByTourId(tourId);
  if (reviews.length === 0) return 0;

  const sum = reviews.reduce((total, review) => total + review.rating, 0);
  return (sum / reviews.length).toFixed(1);
};

// Function to get all reviews
export const getAllReviews = () => {
  return [...reviewsData];
};

export const reviewsData = [
  {
    id: 1,
    author: {
      name: 'Елена Михайлова',
      image: 'https://source.unsplash.com/featured/?woman,portrait',
      location: {
        ru: 'Москва, Россия',
        en: 'Moscow, Russia',
        ja: 'モスクワ、ロシア'
      }
    },
    tourId: 'through-all-japan',
    date: '2024-10-15',
    rating: 5,
    text: {
      ru: 'Невероятное путешествие! За 3 недели увидели всю Японию от тропиков до снегов. Каждый регион уникален. Особенно поразила Окинава с её королевской историей и Хоккайдо с невероятной природой. Гиды в каждом регионе были потрясающими!',
      en: 'Incredible journey! In 3 weeks we saw all of Japan from tropics to snow. Each region is unique. Especially impressed by Okinawa with its royal history and Hokkaido with incredible nature. Guides in each region were amazing!',
      ja: '信じられない旅でした！3週間で日本全体を熱帯から雪まで見ました。各地域がユニークです。特に王室の歴史を持つ沖縄と信じられない自然の北海道に感動しました。各地域のガイドは素晴らしかったです！'
    },
    featured: true
  },
  {
    id: 2,
    author: {
      name: 'Дмитрий Петров',
      image: 'https://source.unsplash.com/featured/?man,portrait',
      location: {
        ru: 'Санкт-Петербург, Россия',
        en: 'St. Petersburg, Russia',
        ja: 'サンクトペテルブルク、ロシア'
      }
    },
    tourId: 'through-all-japan',
    date: '2024-09-22',
    rating: 5,
    text: {
      ru: 'Тур для настоящих любителей Японии. Много переездов, но впечатления того стоят. Организация на высоте - все четко по расписанию. JR Pass очень удобен для таких длинных маршрутов. Рекомендую тем, кто хочет увидеть максимум за одну поездку.',
      en: 'Tour for true Japan lovers. Lots of transfers, but the impressions are worth it. Organization is top-notch - everything is clearly on schedule. JR Pass is very convenient for such long routes. Recommend to those who want to see the maximum in one trip.',
      ja: '真の日本愛好家のためのツアー。多くの移動がありますが、印象はそれに値します。組織は一流で、すべてがスケジュール通りです。JRパスはこのような長いルートに非常に便利です。一回の旅行で最大限を見たい人にお勧めします。'
    },
    featured: true
  }
];