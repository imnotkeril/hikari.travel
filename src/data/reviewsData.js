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
  },
  {
    id: 3,
    author: {
      name: 'Татьяна Романова',
      image: 'https://source.unsplash.com/featured/?woman,portrait,travel',
      location: {
        ru: 'Екатеринбург, Россия',
        en: 'Yekaterinburg, Russia',
        ja: 'エカテリンブルク、ロシア'
      }
    },
    tourId: 'classic-kanto-tour',
    date: '2024-11-08',
    rating: 5,
    text: {
      ru: 'Отличное сочетание города и природы! Токио поразил контрастами, а Хаконэ с видом на Фудзи - просто сказка. Онсены - это отдельное удовольствие. Особенно запомнился рёкан в Хаконэ и традиционные ужины. Гид прекрасно знал историю каждого места.',
      en: 'Excellent combination of city and nature! Tokyo amazed with contrasts, and Hakone with Fuji view is simply a fairy tale. Onsen are a separate pleasure. The ryokan in Hakone and traditional dinners were especially memorable. The guide knew the history of each place perfectly.',
      ja: '都市と自然の素晴らしい組み合わせ！東京はコントラストで驚かされ、富士山の眺めがある箱根はまさにおとぎ話のようです。温泉は別の楽しみです。特に箱根の旅館と伝統的な夕食が印象的でした。ガイドは各場所の歴史を完璧に知っていました。'
    },
    featured: true
  },
  {
    id: 4,
    author: {
      name: 'Максим Васильев',
      image: 'https://source.unsplash.com/featured/?man,portrait,businessman',
      location: {
        ru: 'Новосибирск, Россия',
        en: 'Novosibirsk, Russia',
        ja: 'ノボシビルスク、ロシア'
      }
    },
    tourId: 'classic-kanto-tour',
    date: '2024-10-25',
    rating: 5,
    text: {
      ru: 'Идеальный тур для первого знакомства с Японией. Все самое важное в регионе Канто. Гид отлично знал историю каждого места. Особенно понравились Камакура с Большим Буддой и поездка на Romance Car в Хаконэ. Фудзи показалась во всей красе!',
      en: 'Perfect tour for first acquaintance with Japan. All the most important things in Kanto region. Guide excellently knew the history of each place. Especially liked Kamakura with Great Buddha and Romance Car trip to Hakone. Fuji appeared in all its glory!',
      ja: '日本との最初の出会いに最適なツアー。関東地方のすべての重要なもの。ガイドは各場所の歴史を完璧に知っていました。特に大仏のある鎌倉とロマンスカーでの箱根への旅行が気に入りました。富士山が全ての栄光の中で現れました！'
    },
    featured: false
  },
  {
    id: 5,
    author: {
      name: 'Анна Сидорова',
      image: 'https://source.unsplash.com/featured/?woman,portrait,happy',
      location: {
        ru: 'Краснодар, Россия',
        en: 'Krasnodar, Russia',
        ja: 'クラスノダール、ロシア'
      }
    },
    tourId: 'classic-kanto-tour',
    date: '2024-10-12',
    rating: 4,
    text: {
      ru: 'Прекрасный маршрут! 12 дней пролетели незаметно. Токио впечатлил размахом, Никко - природой и храмами, а Йокохама удивила современностью. Единственное - хотелось бы больше времени в каждом месте, но понимаю, что тогда тур был бы слишком долгим.',
      en: 'Wonderful route! 12 days flew by unnoticed. Tokyo impressed with its scale, Nikko with nature and temples, and Yokohama surprised with modernity. The only thing - I would like more time in each place, but I understand that then the tour would be too long.',
      ja: '素晴らしいルート！12日間があっという間に過ぎました。東京はその規模で印象的で、日光は自然と寺院で、横浜は現代性で驚かされました。唯一のことは、各場所でもっと時間が欲しかったことですが、そうするとツアーが長すぎることを理解しています。'
    },
    featured: false
  },
  {
    id: 6,
    author: {
      name: 'Игорь Петров',
      image: 'https://source.unsplash.com/featured/?man,portrait,glasses',
      location: {
        ru: 'Нижний Новгород, Россия',
        en: 'Nizhny Novgorod, Russia',
        ja: 'ニジニ・ノヴゴロド、ロシア'
      }
    },
    tourId: 'classic-kanto-tour',
    date: '2024-09-28',
    rating: 5,
    text: {
      ru: 'Отличная организация! JR Pass очень удобен для таких поездок. Впечатлили онсены в Хаконэ - никогда не думал, что горячие источники могут быть настолько расслабляющими. Вид на Фудзи из рёкана был потрясающим, особенно на рассвете.',
      en: 'Excellent organization! JR Pass is very convenient for such trips. Impressed by onsen in Hakone - never thought hot springs could be so relaxing. The view of Fuji from ryokan was amazing, especially at dawn.',
      ja: '素晴らしい組織！JRパスはそのような旅行にとても便利です。箱根の温泉に感動しました - 温泉がこれほどリラックスできるとは思いませんでした。旅館からの富士山の眺めは素晴らしく、特に夜明けに。'
    },
    featured: false
  }
];