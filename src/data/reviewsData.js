// src/data/reviewsData.js
export const reviewsData = [
  {
    id: 1,
    author: {
      name: 'Anna Smith',
      image: 'https://source.unsplash.com/featured/?woman,portrait',
      location: {
        ru: 'Москва, Россия',
        en: 'Moscow, Russia',
        ja: 'モスクワ、ロシア'
      }
    },
    tourId: 'classic-tokyo', // ID конкретного тура или null для общих отзывов
    date: '2025-03-05',
    rating: 5,
    text: {
      ru: 'Наш тур был замечательным! Гид знал все скрытые места и помогал с языком. Настоящее погружение в культуру.',
      en: 'Our tour was wonderful! The guide knew all the hidden spots and helped with the language. A true cultural immersion.',
      ja: '私たちのツアーは素晴らしかったです！ガイドは隠れた場所をすべて知っていて、言語を助けてくれました。真の文化的没入体験でした。'
    },
    featured: true // Флаг для отображения на главной странице
  },
  {
    id: 2,
    author: {
      name: 'John Doe',
      image: 'https://source.unsplash.com/featured/?man,portrait',
      location: {
        ru: 'Лондон, Великобритания',
        en: 'London, UK',
        ja: 'ロンドン、イギリス'
      }
    },
    tourId: 'all-japan-golden-ring',
    date: '2025-02-28',
    rating: 5,
    text: {
      ru: 'Потрясающий опыт! Наш гид был очень знающим и показал нам места, которые мы никогда бы не нашли сами.',
      en: 'Exceptional experience! Our guide was knowledgeable and showed us places we would never find on our own.',
      ja: '最高の体験でした！ガイドは知識が豊富で、自分たちだけでは決して見つけられない場所を案内してくれました。'
    },
    featured: true
  },
  {
    id: 3,
    author: {
      name: 'Maria Garcia',
      image: 'https://source.unsplash.com/featured/?woman,portrait,2',
      location: {
        ru: 'Барселона, Испания',
        en: 'Barcelona, Spain',
        ja: 'バルセロナ、スペイン'
      }
    },
    tourId: 'modern-tokyo',
    date: '2025-02-15',
    rating: 4,
    text: {
      ru: 'Прекрасно организованный тур с отличным балансом популярных достопримечательностей и уникальных мест.',
      en: 'Beautifully organized tour with an excellent balance of popular attractions and unique places.',
      ja: '人気のある観光スポットとユニークな場所のバランスが絶妙な、美しく構成されたツアーでした。'
    },
    featured: true
  },
  {
    id: 4,
    author: {
      name: 'Alexander Ivanov',
      image: 'https://source.unsplash.com/featured/?man,portrait,2',
      location: {
        ru: 'Санкт-Петербург, Россия',
        en: 'St. Petersburg, Russia',
        ja: 'サンクトペテルブルク、ロシア'
      }
    },
    tourId: 'rural-japan',
    date: '2025-01-10',
    rating: 5,
    text: {
      ru: 'Все было организовано на высшем уровне. Особенно понравились местные рестораны, о которых знают только жители.',
      en: 'Everything was organized at the highest level. I especially liked the local restaurants that only residents know about.',
      ja: 'すべてが最高レベルで組織されていました。特に地元の人だけが知っているローカルレストランが気に入りました。'
    },
    featured: false
  },
  {
    id: 5,
    author: {
      name: 'Elena Petrova',
      image: 'https://source.unsplash.com/featured/?woman,portrait,3',
      location: {
        ru: 'Киев, Украина',
        en: 'Kiev, Ukraine',
        ja: 'キエフ、ウクライナ'
      }
    },
    tourId: 'culinary-journey',
    date: '2024-12-20',
    rating: 5,
    text: {
      ru: 'Второй раз путешествую с Hikari Travel, и снова все идеально! Теперь рекомендую всем друзьям.',
      en: 'Second time traveling with Hikari Travel, and again everything is perfect! Now I recommend to all friends.',
      ja: 'ひかりトラベルで2回目の旅行、そしてまた完璧です！今は全ての友達に勧めています。'
    },
    featured: false
  },
  {
    id: 6,
    author: {
      name: 'Thomas Brown',
      image: 'https://source.unsplash.com/featured/?man,portrait,3',
      location: {
        ru: 'Берлин, Германия',
        en: 'Berlin, Germany',
        ja: 'ベルリン、ドイツ'
      }
    },
    tourId: 'japan-art-tour',
    date: '2024-12-05',
    rating: 5,
    text: {
      ru: 'Поездка в Японию была мечтой всей жизни, и благодаря Hikari Travel она превзошла все ожидания!',
      en: 'Traveling to Japan was a lifelong dream, and thanks to Hikari Travel, it exceeded all expectations!',
      ja: '日本への旅行は生涯の夢でしたが、ひかりトラベルのおかげで、それは期待をはるかに超えました！'
    },
    featured: false
  },
  {
    id: 7,
    author: {
      name: 'Sophie Laurent',
      image: 'https://source.unsplash.com/featured/?woman,portrait,4',
      location: {
        ru: 'Париж, Франция',
        en: 'Paris, France',
        ja: 'パリ、フランス'
      }
    },
    tourId: 'samurai-path',
    date: '2024-11-20',
    rating: 4,
    text: {
      ru: 'Потрясающие замки и самурайские кварталы. Глубокое погружение в историю Японии с отличными объяснениями гида.',
      en: 'Amazing castles and samurai quarters. Deep immersion in Japanese history with excellent guide explanations.',
      ja: '素晴らしい城と武家屋敷。ガイドの優れた説明による日本の歴史への深い没入。'
    },
    featured: false
  },
  {
    id: 8,
    author: {
      name: 'David Kim',
      image: 'https://source.unsplash.com/featured/?man,portrait,4',
      location: {
        ru: 'Сеул, Южная Корея',
        en: 'Seoul, South Korea',
        ja: 'ソウル、韓国'
      }
    },
    tourId: null, // Общий отзыв, не привязанный к конкретному туру
    date: '2024-11-08',
    rating: 5,
    text: {
      ru: 'Компания превзошла все ожидания! Отличная коммуникация до поездки и безупречный сервис во время тура.',
      en: 'The company exceeded all expectations! Excellent communication before the trip and flawless service during the tour.',
      ja: '会社は期待をすべて超えました！旅行前の優れたコミュニケーションとツアー中の完璧なサービス。'
    },
    featured: false
  },
  {
    id: 9,
    author: {
      name: 'Clara Rodriguez',
      image: 'https://source.unsplash.com/featured/?woman,portrait,5',
      location: {
        ru: 'Мехико, Мексика',
        en: 'Mexico City, Mexico',
        ja: 'メキシコシティ、メキシコ'
      }
    },
    tourId: null,
    date: '2024-10-25',
    rating: 5,
    text: {
      ru: 'Удивительное культурное погружение! Наш гид помог нам открыть для себя настоящую Японию, вдали от туристических троп.',
      en: 'Amazing cultural immersion! Our guide helped us discover the real Japan, away from tourist trails.',
      ja: '驚くべき文化的没入！私たちのガイドは、観光客の道から離れた本物の日本を発見するのを手伝ってくれました。'
    },
    featured: false
  },
  {
    id: 10,
    author: {
      name: 'James Wilson',
      image: 'https://source.unsplash.com/featured/?man,portrait,5',
      location: {
        ru: 'Сидней, Австралия',
        en: 'Sydney, Australia',
        ja: 'シドニー、オーストラリア'
      }
    },
    tourId: 'classic-tokyo',
    date: '2024-10-15',
    rating: 4,
    text: {
      ru: 'Отличный опыт! Особенно понравилось размещение и то, как были организованы переезды между районами Токио.',
      en: 'Great experience! Especially enjoyed the accommodation and how transfers between Tokyo districts were organized.',
      ja: '素晴らしい経験！特に宿泊施設と東京の地区間の移動がどのように組織されていたかが気に入りました。'
    },
    featured: false
  }
];

// Функция для получения отзывов по ID тура
export const getReviewsByTourId = (tourId) => {
  return reviewsData.filter(review => review.tourId === tourId);
};

// Функция для получения общих отзывов (не привязанных к конкретному туру)
export const getGeneralReviews = () => {
  return reviewsData.filter(review => review.tourId === null);
};

// Функция для получения рекомендуемых отзывов (для главной страницы)
export const getFeaturedReviews = () => {
  return reviewsData.filter(review => review.featured);
};

// Функция для вычисления среднего рейтинга для тура
export const getAverageRatingForTour = (tourId) => {
  const reviews = getReviewsByTourId(tourId);
  if (reviews.length === 0) return 0;

  const sum = reviews.reduce((total, review) => total + review.rating, 0);
  return (sum / reviews.length).toFixed(1);
};

// Функция для получения всех отзывов
export const getAllReviews = () => {
  return [...reviewsData];
};