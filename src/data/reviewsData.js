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
      name: 'Elena',
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
      name: 'Dmitry',
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
      name: 'Tatiana',
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
      name: 'Maxim',
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
      name: 'Anna',
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
      name: 'Igor',
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
  },
  {
    id: 7,
    author: {
      name: 'Alexandra',
      image: 'https://source.unsplash.com/featured/?woman,portrait,smile',
      location: {
        ru: 'Санкт-Петербург, Россия',
        en: 'Saint Petersburg, Russia',
        ja: 'サンクトペテルブルク、ロシア'
      }
    },
    tourId: 'classic-kansai-tour',
    date: '2024-11-15',
    rating: 5,
    text: {
      ru: 'Идеальное знакомство с Кансаем! Особенно понравились Киото и онсен в Ариме. Еда в Осаке просто потрясающая! Золотой павильон на рассвете - незабываемое зрелище. Онсен Арима действительно расслабляет после насыщенных дней экскурсий.',
      en: 'Perfect introduction to Kansai! Especially loved Kyoto and Arima onsen. Food in Osaka is simply amazing! Golden Pavilion at dawn is an unforgettable sight. Arima onsen really relaxes after busy excursion days.',
      ja: '関西への完璧な紹介！特に京都と有馬温泉が気に入りました。大阪の食事は本当に素晴らしいです！夜明けの金閣寺は忘れられない光景です。有馬温泉は忙しい観光の後に本当にリラックスできます。'
    },
    featured: true
  },
  {
    id: 8,
    author: {
      name: 'Pavel',
      image: 'https://source.unsplash.com/featured/?man,portrait,beard',
      location: {
        ru: 'Казань, Россия',
        en: 'Kazan, Russia',
        ja: 'カザン、ロシア'
      }
    },
    tourId: 'classic-kansai-tour',
    date: '2024-11-15',
    rating: 5,
    text: {
      ru: 'Очень насыщенный тур, но не утомительный. Гид прекрасно рассказывал об истории каждого места. Обязательно вернемся! Замок Химэдзи произвел сильное впечатление, а говядина вагю в Кобе превзошла все ожидания.',
      en: 'Very rich tour, but not tiring. Guide excellently told about the history of each place. We will definitely return! Himeji Castle made a strong impression, and wagyu beef in Kobe exceeded all expectations.',
      ja: 'とても充実したツアーでしたが、疲れませんでした。ガイドは各場所の歴史について素晴らしく話してくれました。必ず戻ってきます！姫路城は強い印象を与え、神戸の和牛はすべての期待を上回りました。'
    },
    featured: false
  },
  {
    id: 9,
    author: {
      name: 'Irina',
      image: 'https://source.unsplash.com/featured/?woman,portrait,travel',
      location: {
        ru: 'Казань, Россия',
        en: 'Kazan, Russia',
        ja: 'カザン、ロシア'
      }
    },
    tourId: 'classic-kansai-tour',
    date: '2024-11-15',
    rating: 5,
    text: {
      ru: 'Путешествовали с мужем - остались в полном восторге! Киото просто волшебный, особенно бамбуковая роща и философская тропа. Онсен в Ариме стал настоящим открытием. Теперь понимаем, почему японцы так любят горячие источники.',
      en: 'Traveled with my husband - were completely delighted! Kyoto is simply magical, especially the bamboo grove and philosopher\'s path. Arima onsen was a real discovery. Now we understand why Japanese love hot springs so much.',
      ja: '夫と一緒に旅行しました - 完全に喜んでいました！京都は本当に魔法的で、特に竹林と哲学の道。有馬温泉は本当の発見でした。今、日本人がなぜ温泉をそんなに愛するのか理解しています。'
    },
    featured: false
  },
  {
    id: 10,
    author: {
      name: 'Dmitry',
      image: 'https://source.unsplash.com/featured/?man,portrait,casual',
      location: {
        ru: 'Челябинск, Россия',
        en: 'Chelyabinsk, Russia',
        ja: 'チェリャビンスク、ロシア'
      }
    },
    tourId: 'classic-kansai-tour',
    date: '2024-10-30',
    rating: 4,
    text: {
      ru: 'Отличный баланс между культурой и отдыхом. Нара с оленями - это что-то особенное, дети были в восторге! Аманохасидатэ действительно один из самых красивых видов Японии. Единственное - хотелось бы больше времени в Киото, но понимаю, что программа и так насыщенная.',
      en: 'Excellent balance between culture and relaxation. Nara with deer is something special, children were delighted! Amanohashidate is truly one of Japan\'s most beautiful views. The only thing - would like more time in Kyoto, but understand the program is already packed.',
      ja: '文化とリラクゼーションの素晴らしいバランス。鹿がいる奈良は特別で、子供たちは大喜びでした！天橋立は本当に日本で最も美しい景色の一つです。唯一のことは、京都でもっと時間が欲しかったですが、プログラムがすでに詰まっていることを理解しています。'
    },
    featured: false
  },
  {
    id: 11,
    author: {
      name: 'Elena',
      image: 'https://source.unsplash.com/featured/?woman,portrait,professional',
      location: {
        ru: 'Воронеж, Россия',
        en: 'Voronezh, Russia',
        ja: 'ヴォロネジ、ロシア'
      }
    },
    tourId: 'classic-kansai-tour',
    date: '2024-10-18',
    rating: 5,
    text: {
      ru: 'Фантастический тур! Особенно впечатлил мастер-класс по такояки в Осаке и чайная церемония в Киото. Рёкан в Ариме с кайсэки - это высший пилотаж японского гостеприимства. Каждый день был наполнен новыми открытиями.',
      en: 'Fantastic tour! Especially impressed by takoyaki masterclass in Osaka and tea ceremony in Kyoto. Ryokan in Arima with kaiseki is the highest level of Japanese hospitality. Every day was filled with new discoveries.',
      ja: '素晴らしいツアー！特に大阪でのたこ焼き教室と京都での茶道に感動しました。懐石料理がある有馬の旅館は日本のおもてなしの最高レベルです。毎日新しい発見に満ちていました。'
    },
    featured: false
  },
  {
    id: 12,
    author: {
      name: 'Anna',
      image: 'https://source.unsplash.com/featured/?woman,portrait,travel',
      location: {
        ru: 'Москва, Россия',
        en: 'Moscow, Russia',
        ja: 'モスクワ、ロシア'
      }
    },
    tourId: 'golden-ring-japan-tour',
    date: '2024-11-22',
    rating: 5,
    text: {
      ru: 'Потрясающий тур! Увидели всю Японию за 12 дней. Особенно понравились Киото и онсен в Никко. Золотой павильон на рассвете - это что-то невероятное! Гид был очень знающим и терпеливым с нашими многочисленными вопросами.',
      en: 'Amazing tour! Saw all of Japan in 12 days. Especially loved Kyoto and onsen in Nikko. Golden Pavilion at dawn is something incredible! Guide was very knowledgeable and patient with our numerous questions.',
      ja: '素晴らしいツアーでした！12日間で日本全体を見ました。特に京都と日光の温泉が気に入りました。夜明けの金閣寺は信じられないものでした！ガイドはとても知識が豊富で、私たちの多くの質問に辛抱強く答えてくれました。'
    },
    featured: true
  },
  {
    id: 13,
    author: {
      name: 'Michael',
      image: 'https://source.unsplash.com/featured/?man,portrait,businessman',
      location: {
        ru: 'Санкт-Петербург, Россия',
        en: 'Saint Petersburg, Russia',
        ja: 'サンクトペテルブルク、ロシア'
      }
    },
    tourId: 'golden-ring-japan-tour',
    date: '2024-11-22',
    rating: 5,
    text: {
      ru: 'Отличная организация, гид знал множество интересных фактов. Рекомендую для первого знакомства с Японией. Мемориал мира в Хиросиме произвел очень сильное впечатление. Святилище на Миядзиме во время прилива - незабываемо!',
      en: 'Excellent organization, guide knew many interesting facts. Recommend for first acquaintance with Japan. Peace Memorial in Hiroshima made a very strong impression. Shrine on Miyajima during high tide - unforgettable!',
      ja: '素晴らしい組織、ガイドは多くの興味深い事実を知っていました。日本との最初の出会いにお勧めします。広島の平和記念館は非常に強い印象を与えました。満潮時の宮島の神社 - 忘れられません！'
    },
    featured: false
  },
  {
    id: 14,
    author: {
      name: 'Catherine',
      image: 'https://source.unsplash.com/featured/?woman,portrait,smile',
      location: {
        ru: 'Нижний Новгород, Россия',
        en: 'Nizhny Novgorod, Russia',
        ja: 'ニジニ・ノヴゴロド、ロシア'
      }
    },
    tourId: 'golden-ring-japan-tour',
    date: '2024-11-10',
    rating: 4,
    text: {
      ru: 'Очень насыщенная программа! Каждый день новые впечатления. Особенно запомнились олени в Наре - они такие дружелюбные! Синкансен тоже впечатлил своей скоростью. Единственное - хотелось бы больше свободного времени для шоппинга.',
      en: 'Very rich program! New impressions every day. Especially memorable were the deer in Nara - they are so friendly! Shinkansen also impressed with its speed. The only thing - would like more free time for shopping.',
      ja: 'とても充実したプログラムでした！毎日新しい印象。特に奈良の鹿が印象的でした - とても親しみやすいです！新幹線もその速さで印象的でした。唯一のことは、ショッピングのためのより多くの自由時間が欲しかったことです。'
    },
    featured: false
  },
  {
    id: 15,
    author: {
      name: 'Alexey',
      image: 'https://source.unsplash.com/featured/?man,portrait,casual',
      location: {
        ru: 'Екатеринбург, Россия',
        en: 'Yekaterinburg, Russia',
        ja: 'エカテリンブルク、ロシア'
      }
    },
    tourId: 'golden-ring-japan-tour',
    date: '2024-10-28',
    rating: 5,
    text: {
      ru: 'Идеальный маршрут для понимания Японии! От современного Токио до священных храмов Киото. Онсен в Никко был особенно расслабляющим после долгих дней ходьбы. JR Pass очень удобен для таких поездок между городами.',
      en: 'Perfect route for understanding Japan! From modern Tokyo to sacred temples of Kyoto. Onsen in Nikko was especially relaxing after long walking days. JR Pass is very convenient for such trips between cities.',
      ja: '日本を理解するための完璧なルート！現代的な東京から京都の神聖な寺院まで。日光の温泉は長い歩行の日の後に特にリラックスできました。JRパスはこのような都市間の旅行にとても便利です。'
    },
    featured: false
  },
  {
    id: 16,
    author: {
      name: 'Olga',
      image: 'https://source.unsplash.com/featured/?woman,portrait,professional',
      location: {
        ru: 'Казань, Россия',
        en: 'Kazan, Russia',
        ja: 'カザン、ロシア'
      }
    },
    tourId: 'golden-ring-japan-tour',
    date: '2024-10-15',
    rating: 4,
    text: {
      ru: 'Замечательный тур с хорошим балансом культуры и истории. Философская тропа в Киото особенно понравилась - очень умиротворяющая. Еда в Осаке была фантастической! Гид помогал с переводом меню, что очень ценно.',
      en: 'Wonderful tour with good balance of culture and history. Philosopher\'s Path in Kyoto was especially liked - very peaceful. Food in Osaka was fantastic! Guide helped with menu translation, which is very valuable.',
      ja: '文化と歴史の良いバランスのある素晴らしいツアー。京都の哲学の道が特に気に入りました - とても平和です。大阪の食事は素晴らしかったです！ガイドがメニューの翻訳を手伝ってくれたのはとても価値がありました。'
    },
    featured: false
  },
  {
    id: 17,
    author: {
      name: 'Olga',
      image: 'https://source.unsplash.com/featured/?woman,portrait,chef',
      location: {
        ru: 'Москва, Россия',
        en: 'Moscow, Russia',
        ja: 'モスクワ、ロシア'
      }
    },
    tourId: 'culinary-journey-japan',
    date: '2024-12-01',
    rating: 5,
    text: {
      ru: 'Невероятное погружение в японскую кухню! Научились готовить суши, попробовали настоящее вагю. Каждый день новые вкусы! Мастер-класс по окономияки в Осаке был особенно веселым. Привезла домой целый чемодан специй и соусов.',
      en: 'Incredible immersion into Japanese cuisine! Learned to make sushi, tried real wagyu. New flavors every day! Okonomiyaki masterclass in Osaka was especially fun. Brought home a whole suitcase of spices and sauces.',
      ja: '日本料理への信じられない没入！寿司の作り方を学び、本物の和牛を試しました。毎日新しい味！大阪でのお好み焼きマスタークラスは特に楽しかったです。香辛料とソースのスーツケース一杯を持ち帰りました。'
    },
    featured: true
  },
  {
    id: 18,
    author: {
      name: 'Igor',
      image: 'https://source.unsplash.com/featured/?man,portrait,food',
      location: {
        ru: 'Санкт-Петербург, Россия',
        en: 'Saint Petersburg, Russia',
        ja: 'サンクトペテルブルク、ロシア'
      }
    },
    tourId: 'culinary-journey-japan',
    date: '2024-12-01',
    rating: 5,
    text: {
      ru: 'Идеальный тур для фудистов. Гид знал лучшие места, куда туристы обычно не попадают. Привезли столько специй и рецептов! Ресторан с Мишлен звездой в Токио превзошел все ожидания. Теперь готовлю суши дома!',
      en: 'Perfect tour for foodies. Guide knew the best places where tourists usually don\'t go. Brought so many spices and recipes! Michelin starred restaurant in Tokyo exceeded all expectations. Now I make sushi at home!',
      ja: 'フード愛好家にとって完璧なツアー。ガイドは観光客が通常行かない最高の場所を知っていました。たくさんの香辛料とレシピを持ち帰りました！東京のミシュラン星付きレストランはすべての期待を上回りました。今は家で寿司を作っています！'
    },
    featured: true
  },
  {
    id: 19,
    author: {
      name: 'Marina',
      image: 'https://source.unsplash.com/featured/?woman,portrait,cooking',
      location: {
        ru: 'Казань, Россия',
        en: 'Kazan, Russia',
        ja: 'カザン、ロシア'
      }
    },
    tourId: 'culinary-journey-japan',
    date: '2024-11-18',
    rating: 4,
    text: {
      ru: 'Фантастическое кулинарное приключение! Чайная церемония в Киото была медитативной, а рынок Куромон в Осаке - просто рай для гурманов. Вагю в Кобе растаяло во рту. Единственное - хотелось бы больше времени на каждом рынке.',
      en: 'Fantastic culinary adventure! Tea ceremony in Kyoto was meditative, and Kuromon market in Osaka is just heaven for gourmets. Wagyu in Kobe melted in my mouth. The only thing - would like more time at each market.',
      ja: '素晴らしい料理の冒険！京都での茶道は瞑想的で、大阪の黒門市場はグルメにとってまさに天国です。神戸の和牛は口の中で溶けました。唯一のことは、各市場でもっと時間が欲しかったことです。'
    },
    featured: false
  },
  {
    id: 20,
    author: {
      name: 'Andrey',
      image: 'https://source.unsplash.com/featured/?man,portrait,restaurant',
      location: {
        ru: 'Новосибирск, Россия',
        en: 'Novosibirsk, Russia',
        ja: 'ノボシビルスク、ロシア'
      }
    },
    tourId: 'culinary-journey-japan',
    date: '2024-11-05',
    rating: 5,
    text: {
      ru: 'Как повар по профессии, был скептически настроен, но тур превзошел ожидания! Техники приготовления суши, которым нас учили, кардинально отличаются от европейских. Дегустация саке открыла новые горизонты. Обязательно вернусь за новыми знаниями!',
      en: 'As a professional chef, I was skeptical, but the tour exceeded expectations! Sushi preparation techniques we were taught are radically different from European ones. Sake tasting opened new horizons. Will definitely return for new knowledge!',
      ja: 'プロのシェフとして懐疑的でしたが、ツアーは期待を上回りました！教えられた寿司の調理技術はヨーロッパのものとは根本的に異なります。日本酒の試飲は新しい地平を開きました。新しい知識のために必ず戻ってきます！'
    },
    featured: false
  },
  {
    id: 21,
    author: {
      name: 'Svetlana',
      image: 'https://source.unsplash.com/featured/?woman,portrait,happy',
      location: {
        ru: 'Ростов-на-Дону, Россия',
        en: 'Rostov-on-Don, Russia',
        ja: 'ロストフ・ナ・ドヌ、ロシア'
      }
    },
    tourId: 'culinary-journey-japan',
    date: '2024-10-22',
    rating: 5,
    text: {
      ru: 'Гастрономический рай! Каждый прием пищи был открытием. Особенно понравился мастер-класс по такояки - такие веселые шарики! Кайсэки в Киото - это искусство на тарелке. Гид-кулинар объяснял не только рецепты, но и философию японской кухни.',
      en: 'Gastronomic paradise! Every meal was a discovery. Especially liked takoyaki masterclass - such fun balls! Kaiseki in Kyoto is art on a plate. Culinary guide explained not only recipes but also Japanese cuisine philosophy.',
      ja: 'グルメの楽園！すべての食事が発見でした。特にたこ焼きマスタークラスが気に入りました - とても楽しいボールです！京都の懐石は皿の上の芸術です。料理ガイドはレシピだけでなく日本料理の哲学も説明してくれました。'
    },
    featured: false
  },
  {
    id: 22,
    author: {
      name: 'Maria',
      image: 'https://source.unsplash.com/featured/?woman,portrait,art',
      location: {
        ru: 'Санкт-Петербург, Россия',
        en: 'Saint Petersburg, Russia',
        ja: 'サンクトペテルブルク、ロシア'
      }
    },
    tourId: 'japan-art-lovers-tour',
    date: '2024-12-05',
    rating: 5,
    text: {
      ru: 'Потрясающее путешествие в мир японского искусства! Остров Наосима - это что-то невероятное. Мастер-классы в Киото запомнятся навсегда. Особенно впечатлила "Желтая тыква" Кусамы и цифровое искусство teamLab - абсолютно фантастично!',
      en: 'Amazing journey into the world of Japanese art! Naoshima island is something incredible. Kyoto masterclasses will be remembered forever. Especially impressed by Kusama\'s "Yellow Pumpkin" and teamLab digital art - absolutely fantastic!',
      ja: '日本美術の世界への素晴らしい旅！直島は信じられないものです。京都のマスタークラスは永遠に記憶に残るでしょう。特に草間の「黄かぼちゃ」とチームラボのデジタルアートに感動 - 絶対に素晴らしい！'
    },
    featured: true
  },
  {
    id: 23,
    author: {
      name: 'Andrey',
      image: 'https://source.unsplash.com/featured/?man,portrait,artist',
      location: {
        ru: 'Москва, Россия',
        en: 'Moscow, Russia',
        ja: 'モスクワ、ロシア'
      }
    },
    tourId: 'japan-art-lovers-tour',
    date: '2024-12-05',
    rating: 5,
    text: {
      ru: 'Идеальный баланс традиций и современности. Гид-искусствовед открыл нам глаза на многие вещи. Теперь по-другому смотрю на японское искусство. Архитектурный тур по зданиям Тадао Андо был особенно впечатляющим.',
      en: 'Perfect balance of tradition and modernity. Art historian guide opened our eyes to many things. Now I look at Japanese art differently. Architectural tour of Tadao Ando buildings was especially impressive.',
      ja: '伝統と現代性の完璧なバランス。美術史ガイドが多くのことに目を開かせてくれました。今は日本美術を違った目で見ています。安藤忠雄の建物の建築ツアーは特に印象的でした。'
    },
    featured: true
  },
  {
    id: 24,
    author: {
      name: 'Elena',
      image: 'https://source.unsplash.com/featured/?woman,portrait,gallery',
      location: {
        ru: 'Екатеринбург, Россия',
        en: 'Yekaterinburg, Russia',
        ja: 'エカテリンブルク、ロシア'
      }
    },
    tourId: 'japan-art-lovers-tour',
    date: '2024-11-28',
    rating: 4,
    text: {
      ru: 'Прекрасный тур для тех, кто серьезно интересуется искусством. Маленькая группа позволила подробно изучить каждый объект. Мастер-класс по каллиграфии сёдо был медитативным. Единственное - хотелось бы больше времени в каждом музее.',
      en: 'Wonderful tour for those seriously interested in art. Small group allowed detailed study of each object. Shodo calligraphy masterclass was meditative. The only thing - would like more time in each museum.',
      ja: '芸術に真剣に興味がある人のための素晴らしいツアー。小さなグループで各対象を詳細に研究できました。書道マスタークラスは瞑想的でした。唯一のことは、各博物館でもっと時間が欲しかったことです。'
    },
    featured: false
  },
  {
    id: 25,
    author: {
      name: 'Nikolay',
      image: 'https://source.unsplash.com/featured/?man,portrait,museum',
      location: {
        ru: 'Новосибирск, Россия',
        en: 'Novosibirsk, Russia',
        ja: 'ノボシビルスク、ロシア'
      }
    },
    tourId: 'japan-art-lovers-tour',
    date: '2024-11-15',
    rating: 5,
    text: {
      ru: 'Фантастический опыт! Как искусствовед, был поражен глубиной знаний гида. Острова Тэсима и Инудзима произвели неизгладимое впечатление. Проект восстановления островов через искусство - гениальная идея. Привез домой керамику, сделанную своими руками.',
      en: 'Fantastic experience! As an art historian, I was amazed by the guide\'s depth of knowledge. Teshima and Inujima islands made an indelible impression. Island restoration project through art is a brilliant idea. Brought home ceramics made with my own hands.',
              ja: '素晴らしい体験！美術史家として、ガイドの知識の深さに驚きました。豊島と犬島は消えない印象を残しました。芸術を通じた島の復興プロジェクトは素晴らしいアイデアです。自分の手で作った陶器を持ち帰りました。'
    },
    featured: false
  },
  {
    id: 26,
    author: {
      name: 'Tatiana',
      image: 'https://source.unsplash.com/featured/?woman,portrait,creative',
      location: {
        ru: 'Казань, Россия',
        en: 'Kazan, Russia',
        ja: 'カザン、ロシア'
      }
    },
    tourId: 'japan-art-lovers-tour',
    date: '2024-11-02',
    rating: 5,
    text: {
      ru: 'Невероятное погружение в японскую эстетику! Сад камней Рёан-дзи открыл для меня философию дзен. Встреча с мастером кимоно и демонстрация техники юдзэн была завораживающей. Каждый день был полон художественных открытий. Спасибо за организацию!',
      en: 'Incredible immersion into Japanese aesthetics! Ryoan-ji rock garden opened zen philosophy for me. Meeting with kimono master and yuzen technique demonstration was mesmerizing. Every day was full of artistic discoveries. Thank you for the organization!',
      ja: '日本の美学への信じられない没入！龍安寺の石庭が私に禅の哲学を開いてくれました。着物師匠との出会いと友禅技術の実演は魅惑的でした。毎日が芸術的発見に満ちていました。組織してくれてありがとう！'
    },
    featured: false
  },
  {
    id: 27,
    author: {
      name: 'Denis',
      image: 'https://source.unsplash.com/featured/?man,portrait,history',
      location: {
        ru: 'Москва, Россия',
        en: 'Moscow, Russia',
        ja: 'モスクワ、ロシア'
      }
    },
    tourId: 'samurai-path-tour',
    date: '2024-12-08',
    rating: 5,
    text: {
      ru: 'Невероятное погружение в историю! Замки потрясающие, особенно Химэдзи. Гид-историк рассказывал так, что самураи казались живыми. Демонстрация кэндо в Химэдзи была впечатляющей. Почувствовал дух бусидо!',
      en: 'Incredible immersion into history! Castles are amazing, especially Himeji. Historian guide told stories so vividly that samurai seemed alive. Kendo demonstration in Himeji was impressive. Felt the spirit of bushido!',
      ja: '歴史への信じられない没入！城は素晴らしく、特に姫路。歴史家ガイドは武士が生きているかのように生き生きと語ってくれました。姫路での剣道実演は印象的でした。武士道の精神を感じました！'
    },
    featured: true
  },
  {
    id: 28,
    author: {
      name: 'Svetlana',
      image: 'https://source.unsplash.com/featured/?woman,portrait,culture',
      location: {
        ru: 'Санкт-Петербург, Россия',
        en: 'Saint Petersburg, Russia',
        ja: 'サンクトペテルブルク、ロシア'
      }
    },
    tourId: 'samurai-path-tour',
    date: '2024-12-08',
    rating: 5,
    text: {
      ru: 'Очень познавательный тур. Понял философию самураев, увидел настоящие мечи и доспехи. Канадзава - город-музей под открытым небом. Самурайский квартал Нагамати словно перенес в прошлое. Мастер-класс по изготовлению цубы запомнится надолго!',
      en: 'Very educational tour. Understood samurai philosophy, saw real swords and armor. Kanazawa is an open-air museum city. Nagamachi samurai quarter transported me to the past. Tsuba making masterclass will be remembered for long!',
      ja: 'とても教育的なツアー。武士の哲学を理解し、本物の刀と鎧を見ました。金沢は野外博物館都市です。長町武家屋敷跡は過去にタイムスリップさせてくれました。鍔作りマスタークラスは長く記憶に残るでしょう！'
    },
    featured: true
  },
  {
    id: 29,
    author: {
      name: 'Alexander',
      image: 'https://source.unsplash.com/featured/?man,portrait,warrior',
      location: {
        ru: 'Екатеринбург, Россия',
        en: 'Yekaterinburg, Russia',
        ja: 'エカテリンブルク、ロシア'
      }
    },
    tourId: 'samurai-path-tour',
    date: '2024-11-25',
    rating: 4,
    text: {
      ru: 'Отличный исторический тур! Замок Мацумото впечатлил своей архитектурой. История Сайго Такамори в Кумамото была особенно интересной. Единственное - хотелось бы больше практических занятий боевыми искусствами, но понимаю, что это не основная цель тура.',
      en: 'Excellent historical tour! Matsumoto Castle impressed with its architecture. Saigo Takamori story in Kumamoto was especially interesting. The only thing - would like more practical martial arts training, but understand it\'s not the main tour purpose.',
      ja: '素晴らしい歴史ツアー！松本城はその建築で印象的でした。熊本での西郷隆盛の話は特に興味深かったです。唯一のことは、もっと実践的な武術訓練が欲しかったですが、それがツアーの主目的ではないことを理解しています。'
    },
    featured: false
  },
  {
    id: 31,
    author: {
      name: 'Michael',
      image: 'https://source.unsplash.com/featured/?man,portrait,sword',
      location: {
        ru: 'Новосибирск, Россия',
        en: 'Novosibirsk, Russia',
        ja: 'ノボシビルスク、ロシア'
      }
    },
    tourId: 'samurai-path-tour',
    date: '2024-10-30',
    rating: 5,
    text: {
      ru: 'Как любитель истории, остался в полном восторге! Каждый замок рассказывал свою уникальную историю. Восстановление замка Кумамото после землетрясения показало, как японцы чтят свое наследие. Фотосессия в самурайских доспехах стала изюминкой поездки!',
      en: 'As a history lover, I was completely delighted! Each castle told its unique story. Kumamoto Castle restoration after earthquake showed how Japanese honor their heritage. Photo session in samurai armor became trip highlight!',
      ja: '歴史愛好家として、完全に喜んでいました！各城がその独特な物語を語ってくれました。地震後の熊本城の復興は、日本人がいかに遺産を大切にするかを示しました。武士の鎧での写真撮影が旅行のハイライトになりました！'
    },
    featured: false
  },
  {
    id: 30,
    author: {
      name: 'Irina',
      image: 'https://source.unsplash.com/featured/?woman,portrait,traditional',
      location: {
        ru: 'Казань, Россия',
        en: 'Kazan, Russia',
        ja: 'カザン、ロシア'
      }
    },
    tourId: 'samurai-path-tour',
    date: '2024-11-12',
    rating: 5,
    text: {
      ru: 'Путешествие в историю Японии получилось очень глубоким. Особенно понравились музеи самурайского оружия - какая красота и мастерство! Сад Кэнрокуэн в Канадзаве оказался не менее впечатляющим, чем замки. Чайная церемония в самурайском доме была волшебной.',
      en: 'Journey into Japan\'s history turned out very deep. Especially liked samurai weapon museums - such beauty and craftsmanship! Kenroku-en garden in Kanazawa was no less impressive than castles. Tea ceremony in samurai house was magical.',
      ja: '日本の歴史への旅はとても深いものになりました。特に武士の武器博物館が気に入りました - なんという美しさと職人技！金沢の兼六園は城に劣らず印象的でした。武家屋敷での茶道は魔法的でした。'
    },
    featured: false
  },
  {
    id: 32,
    author: {
      name: 'Anna',
      image: 'https://source.unsplash.com/featured/?woman,portrait,tokyo',
      location: {
        ru: 'Москва, Россия',
        en: 'Moscow, Russia',
        ja: 'モスクワ、ロシア'
      }
    },
    tourId: 'classic-tokyo-tour',
    date: '2024-12-10',
    rating: 5,
    text: {
      ru: 'Отличный короткий тур для знакомства с Токио! За 4 дня успели увидеть и традиционную, и современную стороны города. Перекресток Сибуя впечатлил масштабами, а храм Сэнсо-дзи погрузил в традиционную атмосферу. Гид был очень профессиональным!',
      en: 'Excellent short tour for getting to know Tokyo! In 4 days we managed to see both traditional and modern sides of the city. Shibuya crossing impressed with its scale, and Senso-ji temple immersed us in traditional atmosphere. Guide was very professional!',
      ja: '東京を知るための素晴らしい短いツアー！4日間で都市の伝統的な面と現代的な面の両方を見ることができました。渋谷交差点はその規模で印象的で、浅草寺は伝統的な雰囲気に浸らせてくれました。ガイドはとてもプロフェッショナルでした！'
    },
    featured: true
  },
  {
    id: 33,
    author: {
      name: 'Sergey',
      image: 'https://source.unsplash.com/featured/?man,portrait,business',
      location: {
        ru: 'Санкт-Петербург, Россия',
        en: 'Saint Petersburg, Russia',
        ja: 'サンクトペテルブルク、ロシア'
      }
    },
    tourId: 'classic-tokyo-tour',
    date: '2024-12-10',
    rating: 5,
    text: {
      ru: 'Идеально для первого визита. Гид показал не только туристические места, но и рассказал о жизни токийцев. Очень насыщенно! Особенно понравился парк Уэно во время цветения сакуры. Синдзюку поразил своей энергетикой.',
      en: 'Perfect for first visit. Guide showed not only tourist places but also told about Tokyo residents\' life. Very intensive! Especially liked Ueno Park during cherry blossom season. Shinjuku amazed with its energy.',
      ja: '初回訪問に最適。ガイドは観光地だけでなく、東京住民の生活についても話してくれました。とても充実していました！特に桜のシーズンの上野公園が気に入りました。新宿はそのエネルギーで驚かせました。'
    },
    featured: true
  },
  {
    id: 34,
    author: {
      name: 'Elena',
      image: 'https://source.unsplash.com/featured/?woman,portrait,smile',
      location: {
        ru: 'Екатеринбург, Россия',
        en: 'Yekaterinburg, Russia',
        ja: 'エカテリンブルク、ロシア'
      }
    },
    tourId: 'classic-tokyo-tour',
    date: '2024-11-28',
    rating: 4,
    text: {
      ru: 'Хороший обзорный тур! Успели посмотреть основные достопримечательности. Харадзюку и Омотэсандо показали, насколько разнообразен Токио. Единственное - хотелось бы больше времени для шоппинга в Гинзе, но понимаю, что программа и так насыщенная.',
      en: 'Good overview tour! Managed to see main attractions. Harajuku and Omotesando showed how diverse Tokyo is. The only thing - would like more time for shopping in Ginza, but understand the program is already packed.',
      ja: '良い概観ツアー！主要な観光地を見ることができました。原宿と表参道は東京がいかに多様かを示してくれました。唯一のことは、銀座でのショッピングにもっと時間が欲しかったですが、プログラムがすでに詰まっていることを理解しています。'
    },
    featured: false
  },
  {
    id: 35,
    author: {
      name: 'Dmitry',
      image: 'https://source.unsplash.com/featured/?man,portrait,casual',
      location: {
        ru: 'Казань, Россия',
        en: 'Kazan, Russia',
        ja: 'カザン、ロシア'
      }
    },
    tourId: 'classic-tokyo-tour',
    date: '2024-11-15',
    rating: 5,
    text: {
      ru: 'Отличное соотношение цена-качество! За небольшие деньги получили полноценное представление о Токио. Обзорная площадка в правительственном здании была неожиданно впечатляющей. Ужины в традиционных ресторанах очень понравились.',
      en: 'Excellent price-quality ratio! For small money got full impression of Tokyo. Observation deck in government building was unexpectedly impressive. Dinners at traditional restaurants were very enjoyable.',
      ja: '優れた価格対品質比！少ないお金で東京の完全な印象を得ました。都庁の展望台は予想外に印象的でした。伝統的なレストランでの夕食はとても楽しかったです。'
    },
    featured: false
  },
  {
    id: 36,
    author: {
      name: 'Olga',
      image: 'https://source.unsplash.com/featured/?woman,portrait,travel',
      location: {
        ru: 'Новосибирск, Россия',
        en: 'Novosibirsk, Russia',
        ja: 'ノボシビルスク、ロシア'
      }
    },
    tourId: 'classic-tokyo-tour',
    date: '2024-11-02',
    rating: 5,
    text: {
      ru: 'Компактный и информативный тур! Каждый день был наполнен новыми впечатлениями. Tokyo Metro Pass очень удобен. Карточка с японскими фразами помогла в общении. Роппонги вечером показал другую сторону Токио. Рекомендую всем!',
      en: 'Compact and informative tour! Every day was filled with new impressions. Tokyo Metro Pass is very convenient. Japanese phrases card helped in communication. Roppongi in evening showed another side of Tokyo. Recommend to everyone!',
      ja: 'コンパクトで情報豊富なツアー！毎日新しい印象に満ちていました。東京メトロパスはとても便利です。日本語フレーズカードはコミュニケーションに役立ちました。夜の六本木は東京の別の側面を見せてくれました。皆さんにお勧めします！'
    },
    featured: false
  },
  {
    id: 37,
    author: {
      name: 'Elena',
      image: 'https://source.unsplash.com/featured/?woman,portrait,nature',
      location: {
        ru: 'Москва, Россия',
        en: 'Moscow, Russia',
        ja: 'モスクワ、ロシア'
      }
    },
    tourId: 'mount-fuji-day-tour',
    date: '2024-12-12',
    rating: 5,
    text: {
      ru: 'Отличный однодневный тур! Повезло с погодой - Фудзи была видна во всей красе. Деревня Осино Хаккай очень атмосферная. Вода из источников действительно кристально чистая! Обед с видом на гору был незабываемым.',
      en: 'Excellent day tour! Lucky with weather - Fuji was visible in all its glory. Oshino Hakkai village is very atmospheric. Spring water is truly crystal clear! Lunch with mountain view was unforgettable.',
      ja: '素晴らしい日帰りツアー！天気に恵まれ、富士山がその全ての栄光の中で見えました。忍野八海村はとても雰囲気があります。湧き水は本当に澄んでいます！山の眺めでのランチは忘れられませんでした。'
    },
    featured: true
  },
  {
    id: 38,
    author: {
      name: 'Dmitry',
      image: 'https://source.unsplash.com/featured/?man,portrait,mountain',
      location: {
        ru: 'Санкт-Петербург, Россия',
        en: 'Saint Petersburg, Russia',
        ja: 'サンクトペテルブルク、ロシア'
      }
    },
    tourId: 'mount-fuji-day-tour',
    date: '2024-12-12',
    rating: 5,
    text: {
      ru: 'Даже несмотря на облачность, впечатления потрясающие. Гид интересно рассказывал о легендах Фудзи. Рекомендую! 5-я станция произвела сильное впечатление. Канатная дорога стоила каждой йены - виды фантастические!',
      en: 'Even despite cloudiness, impressions are amazing. Guide told interesting stories about Fuji legends. Recommend! 5th station made strong impression. Cable car was worth every yen - views are fantastic!',
      ja: '曇りにもかかわらず、印象は素晴らしいものでした。ガイドは富士山の伝説について興味深い話をしてくれました。お勧めします！5合目は強い印象を与えました。ロープウェイは一円の価値がありました - 眺めは素晴らしいです！'
    },
    featured: true
  },
  {
    id: 39,
    author: {
      name: 'Marina',
      image: 'https://source.unsplash.com/featured/?woman,portrait,lake',
      location: {
        ru: 'Екатеринбург, Россия',
        en: 'Yekaterinburg, Russia',
        ja: 'エカテリンブルク、ロシア'
      }
    },
    tourId: 'mount-fuji-day-tour',
    date: '2024-11-30',
    rating: 4,
    text: {
      ru: 'Хороший тур за небольшие деньги! Озеро Кавагутико особенно красивое. Жаль, что не удалось увидеть отражение Фудзи в воде из-за ветра, но сама гора впечатлила. Деревня с традиционными домами очень колоритная.',
      en: 'Good tour for small money! Lake Kawaguchi is especially beautiful. Pity couldn\'t see Fuji reflection in water due to wind, but mountain itself impressed. Village with traditional houses is very colorful.',
      ja: '少ないお金で良いツアー！河口湖は特に美しいです。風のために水に映る富士山を見ることができなかったのは残念ですが、山自体は印象的でした。伝統的な家屋がある村はとてもカラフルです。'
    },
    featured: false
  },
  {
    id: 40,
    author: {
      name: 'Alexey',
      image: 'https://source.unsplash.com/featured/?man,portrait,photographer',
      location: {
        ru: 'Казань, Россия',
        en: 'Kazan, Russia',
        ja: 'カザン、ロシア'
      }
    },
    tourId: 'mount-fuji-day-tour',
    date: '2024-11-18',
    rating: 5,
    text: {
      ru: 'Как фотограф, остался доволен количеством локаций для съемки. Особенно понравилась 5-я станция - виды оттуда потрясающие! Гид дал много полезных советов о лучших ракурсах. Автобус комфортный, время в пути пролетело незаметно.',
      en: 'As photographer, was satisfied with number of shooting locations. Especially liked 5th station - views from there are amazing! Guide gave many useful tips about best angles. Bus is comfortable, travel time flew by unnoticed.',
      ja: '写真家として、撮影場所の数に満足しました。特に5合目が気に入りました - そこからの眺めは素晴らしいです！ガイドは最高のアングルについて多くの有用なアドバイスをくれました。バスは快適で、移動時間はあっという間に過ぎました。'
    },
    featured: false
  },
  {
    id: 41,
    author: {
      name: 'Tatiana',
      image: 'https://source.unsplash.com/featured/?woman,portrait,traditional',
      location: {
        ru: 'Новосибирск, Россия',
        en: 'Novosibirsk, Russia',
        ja: 'ノボシビルスク、ロシア'
      }
    },
    tourId: 'mount-fuji-day-tour',
    date: '2024-11-05',
    rating: 4,
    text: {
      ru: 'Прекрасный день у священной горы! Источники в Осино Хаккай действительно особенные - вода такая чистая и вкусная. Сувенирные магазины с символикой Фудзи порадовали разнообразием. Единственное - хотелось бы больше времени на каждой остановке.',
      en: 'Wonderful day at sacred mountain! Springs in Oshino Hakkai are truly special - water is so clean and tasty. Souvenir shops with Fuji symbols pleased with variety. The only thing - would like more time at each stop.',
      ja: '神聖な山での素晴らしい一日！忍野八海の湧き水は本当に特別です - 水がとてもきれいで美味しいです。富士山のシンボルがあるお土産店は品揃えで喜ばせてくれました。唯一のことは、各停留所でもっと時間が欲しかったことです。'
    },
    featured: false
  },
  {
    id: 42,
    author: {
      name: 'Alexey',
      image: 'https://source.unsplash.com/featured/?man,portrait,anime',
      location: {
        ru: 'Москва, Россия',
        en: 'Moscow, Russia',
        ja: 'モスクワ、ロシア'
      }
    },
    tourId: 'otaku-tokyo-tour',
    date: '2024-12-15',
    rating: 5,
    text: {
      ru: 'Мечта любого отаку! Гид знал абсолютно все места, даже скрытые магазинчики. Накупил манги на целое состояние! Особенно впечатлил Накано Бродвей - там можно провести целый день. Мейд-кафе было незабываемым опытом.',
      en: 'Every otaku\'s dream! Guide knew absolutely all places, even hidden shops. Bought manga for a fortune! Especially impressed by Nakano Broadway - you can spend whole day there. Maid cafe was unforgettable experience.',
      ja: 'すべてのオタクの夢！ガイドは隠れた店でさえ、絶対にすべての場所を知っていました。大金でマンガを買いました！特に中野ブロードウェイに感動 - そこで一日中過ごせます。メイドカフェは忘れられない体験でした。'
    },
    featured: true
  },
  {
    id: 43,
    author: {
      name: 'Olga',
      image: 'https://source.unsplash.com/featured/?woman,portrait,cosplay',
      location: {
        ru: 'Санкт-Петербург, Россия',
        en: 'Saint Petersburg, Russia',
        ja: 'サンクトペテルブルク、ロシア'
      }
    },
    tourId: 'otaku-tokyo-tour',
    date: '2024-12-15',
    rating: 5,
    text: {
      ru: 'Даже не будучи большим фанатом аниме, было очень интересно погрузиться в эту культуру. Мейд-кафе - незабываемый опыт! Икэбукуро порадовал разнообразием косплей-магазинов. Гид объяснял все очень доступно.',
      en: 'Even without being big anime fan, it was very interesting to dive into this culture. Maid cafe - unforgettable experience! Ikebukuro pleased with variety of cosplay shops. Guide explained everything very clearly.',
      ja: 'アニメの大ファンではなくても、この文化に飛び込むのはとても興味深かったです。メイドカフェ - 忘れられない体験！池袋はコスプレショップの多様性で喜ばせてくれました。ガイドはすべてをとても分かりやすく説明してくれました。'
    },
    featured: true
  },
  {
    id: 44,
    author: {
      name: 'Dmitry',
      image: 'https://source.unsplash.com/featured/?man,portrait,gamer',
      location: {
        ru: 'Екатеринбург, Россия',
        en: 'Yekaterinburg, Russia',
        ja: 'エカテリンブルク、ロシア'
      }
    },
    tourId: 'otaku-tokyo-tour',
    date: '2024-12-03',
    rating: 4,
    text: {
      ru: 'Отличный тур для погружения в отаку-культуру! Акихабара впечатлила масштабами. Мастер-класс по рисованию манги был очень познавательным. Единственное - хотелось бы больше времени в каждом районе, но понимаю, что программа итак насыщенная.',
      en: 'Excellent tour for immersion in otaku culture! Akihabara impressed with its scale. Manga drawing masterclass was very educational. The only thing - would like more time in each district, but understand program is already packed.',
      ja: 'オタク文化に没入するための素晴らしいツアー！秋葉原はその規模で印象的でした。マンガ描画マスタークラスはとても教育的でした。唯一のことは、各地区でもっと時間が欲しかったですが、プログラムがすでに詰まっていることを理解しています。'
    },
    featured: false
  },
  {
    id: 45,
    author: {
      name: 'Anna',
      image: 'https://source.unsplash.com/featured/?woman,portrait,manga',
      location: {
        ru: 'Казань, Россия',
        en: 'Kazan, Russia',
        ja: 'カザン、ロシア'
      }
    },
    tourId: 'otaku-tokyo-tour',
    date: '2024-11-20',
    rating: 5,
    text: {
      ru: 'Как большая фанатка аниме, была в восторге от каждой минуты! Pokemon Center в Икэбукуро - это рай для любителей покемонов. Нашла редкие артбуки в Накано. Гид говорил на отаку-сленге, что было очень забавно и аутентично!',
      en: 'As big anime fan, was delighted with every minute! Pokemon Center in Ikebukuro is paradise for Pokemon lovers. Found rare artbooks in Nakano. Guide spoke otaku slang, which was very funny and authentic!',
      ja: 'アニメの大ファンとして、毎分が嬉しかったです！池袋のポケモンセンターはポケモン愛好家の楽園です。中野でレアなアートブックを見つけました。ガイドはオタクスラングを話し、とても面白くて本格的でした！'
    },
    featured: false
  },
  {
    id: 46,
    author: {
      name: 'Maxim',
      image: 'https://source.unsplash.com/featured/?man,portrait,technology',
      location: {
        ru: 'Новосибирск, Россия',
        en: 'Novosibirsk, Russia',
        ja: 'ノボシビルスク、ロシア'
      }
    },
    tourId: 'otaku-tokyo-tour',
    date: '2024-11-08',
    rating: 5,
    text: {
      ru: 'Фантастический опыт! Yodobashi Camera в Акихабаре поражает размерами - 9 этажей техники! Don Quijote ночью - отдельное приключение. Карта отаку-мест очень пригодилась для самостоятельных прогулок. Словарь терминов тоже был полезен.',
      en: 'Fantastic experience! Yodobashi Camera in Akihabara amazes with size - 9 floors of technology! Don Quijote at night is separate adventure. Otaku spots map was very useful for independent walks. Terms dictionary was also helpful.',
      ja: '素晴らしい体験！秋葉原のヨドバシカメラはそのサイズで驚かせます - 9階建ての技術！夜のドン・キホーテは別の冒険です。オタクスポットマップは独立した散歩にとても役立ちました。用語辞書も役に立ちました。'
    },
    featured: false
  },
  {
    id: 47,
    author: {
      name: 'Maria',
      image: 'https://source.unsplash.com/featured/?woman,portrait,temple',
      location: {
        ru: 'Москва, Россия',
        en: 'Moscow, Russia',
        ja: 'モスクワ、ロシア'
      }
    },
    tourId: 'kamakura-day-trip',
    date: '2024-12-18',
    rating: 5,
    text: {
      ru: 'Отличная однодневная поездка из Токио! Большой Будда впечатляет, а виды с храма Хасэ-дэра просто потрясающие. Летом еще и на пляже искупались! Дорога на поезде очень комфортная, час пролетел незаметно.',
      en: 'Excellent day trip from Tokyo! Great Buddha is impressive, and views from Hase-dera temple are simply stunning. In summer we even swam at the beach! Train journey very comfortable, hour flew by unnoticed.',
      ja: '東京からの素晴らしい日帰り旅行！大仏は印象的で、長谷寺からの眺めは本当に素晴らしいです。夏にはビーチで泳ぎもしました！電車の旅はとても快適で、1時間があっという間に過ぎました。'
    },
    featured: true
  },
  {
    id: 48,
    author: {
      name: 'Igor',
      image: 'https://source.unsplash.com/featured/?man,portrait,history',
      location: {
        ru: 'Санкт-Петербург, Россия',
        en: 'Saint Petersburg, Russia',
        ja: 'サンクトペテルブルク、ロシア'
      }
    },
    tourId: 'kamakura-day-trip',
    date: '2024-12-18',
    rating: 5,
    text: {
      ru: 'Очень понравилась атмосфера древнего города. Гид интересно рассказывал о самураях и истории. Обязательно попробуйте местную рыбку ширасу! Святилище Цуругаока Хатимангу произвело сильное впечатление своей историей.',
      en: 'Really liked atmosphere of ancient city. Guide told interesting stories about samurai and history. Definitely try local shirasu fish! Tsurugaoka Hachimangu shrine made strong impression with its history.',
      ja: '古い都市の雰囲気がとても気に入りました。ガイドは武士と歴史について興味深い話をしてくれました。地元のしらす魚を必ず試してください！鶴岡八幡宮はその歴史で強い印象を与えました。'
    },
    featured: true
  },
  {
    id: 49,
    author: {
      name: 'Elena',
      image: 'https://source.unsplash.com/featured/?woman,portrait,beach',
      location: {
        ru: 'Екатеринбург, Россия',
        en: 'Yekaterinburg, Russia',
        ja: 'エカテリンブルク、ロシア'
      }
    },
    tourId: 'kamakura-day-trip',
    date: '2024-12-05',
    rating: 4,
    text: {
      ru: 'Прекрасное сочетание истории и природы! Возможность войти внутрь статуи Будды стоила дополнительных денег. Улица Комати-дори очень колоритная, много интересных сувениров. Жаль только, что времени мало на каждое место.',
      en: 'Beautiful combination of history and nature! Opportunity to enter inside Buddha statue was worth extra money. Komachi-dori street is very colorful, many interesting souvenirs. Pity only that time is short at each place.',
      ja: '歴史と自然の美しい組み合わせ！大仏像の内部に入る機会は追加料金の価値がありました。小町通りはとてもカラフルで、興味深いお土産がたくさんあります。各場所での時間が短いのが残念なだけです。'
    },
    featured: false
  },
  {
    id: 50,
    author: {
      name: 'Alexander',
      image: 'https://source.unsplash.com/featured/?man,portrait,photographer',
      location: {
        ru: 'Казань, Россия',
        en: 'Kazan, Russia',
        ja: 'カザン、ロシア'
      }
    },
    tourId: 'kamakura-day-trip',
    date: '2024-11-22',
    rating: 5,
    text: {
      ru: 'Отличное соотношение цена-качество! За $100 получили полноценную экскурсию с обедом. Осенние клены в храмах были невероятно красивые. Фотографии получились потрясающие, особенно с видом на океан из Хасэ-дэра.',
      en: 'Excellent price-quality ratio! For $100 got full excursion with lunch. Autumn maples in temples were incredibly beautiful. Photos turned out amazing, especially with ocean view from Hase-dera.',
      ja: '優れた価格対品質比！100ドルでランチ付きの完全な見学を得ました。寺院の秋のもみじは信じられないほど美しかったです。写真は素晴らしく、特に長谷寺からの海の眺めは最高でした。'
    },
    featured: false
  },
  {
    id: 51,
    author: {
      name: 'Olga',
      image: 'https://source.unsplash.com/featured/?woman,portrait,food',
      location: {
        ru: 'Новосибирск, Россия',
        en: 'Novosibirsk, Russia',
        ja: 'ノボシビルスク、ロシア'
      }
    },
    tourId: 'kamakura-day-trip',
    date: '2024-11-10',
    rating: 4,
    text: {
      ru: 'Камакура оказалась очень уютным городком! Местные деликатесы в ресторане были вкусными, особенно камакура-яки. Дегустация традиционных сладостей понравилась. Бамбуковая роща создала умиротворяющую атмосферу.',
      en: 'Kamakura turned out to be very cozy town! Local delicacies at restaurant were delicious, especially kamakura-yaki. Traditional sweets tasting was enjoyable. Bamboo grove created peaceful atmosphere.',
      ja: '鎌倉はとても居心地の良い町でした！レストランの地元の珍味は美味しく、特に鎌倉焼きが良かったです。伝統的なお菓子の試食が楽しかったです。竹林は平和な雰囲気を作り出しました。'
    },
    featured: false
  },
  {
    id: 52,
    author: {
      name: 'Anastasia',
      image: 'https://source.unsplash.com/featured/?woman,portrait,zen',
      location: {
        ru: 'Москва, Россия',
        en: 'Moscow, Russia',
        ja: 'モスクワ、ロシア'
      }
    },
    tourId: 'classic-kyoto-tour',
    date: '2024-12-20',
    rating: 5,
    text: {
      ru: 'Киото - это мечта! Каждый храм уникален. Особенно понравился Золотой павильон на рассвете и чайная церемония. Гид великолепно знал историю. Сад камней в Рёан-дзи заставил задуматься о многом. Три дня пролетели незаметно!',
      en: 'Kyoto is a dream! Each temple is unique. Especially loved Golden Pavilion at sunrise and tea ceremony. Guide knew history magnificently. Rock garden at Ryoan-ji made me think about many things. Three days flew by unnoticed!',
      ja: '京都は夢のようです！各寺院がユニークです。特に日の出の金閣寺と茶道が気に入りました。ガイドは歴史を素晴らしく知っていました。龍安寺の石庭は多くのことを考えさせてくれました。3日間があっという間に過ぎました！'
    },
    featured: true
  },
  {
    id: 53,
    author: {
      name: 'Michael',
      image: 'https://source.unsplash.com/featured/?man,portrait,temple',
      location: {
        ru: 'Санкт-Петербург, Россия',
        en: 'Saint Petersburg, Russia',
        ja: 'サンクトペテルブルク、ロシア'
      }
    },
    tourId: 'classic-kyoto-tour',
    date: '2024-12-20',
    rating: 5,
    text: {
      ru: 'Три дня пролетели как один день. Философская тропа весной в сакуре - это что-то невероятное. Обязательно вернемся осенью за кленами! Деревянная терраса Киёмидзу-дэра без единого гвоздя поражает мастерством древних строителей.',
      en: 'Three days flew by like one day. Philosopher\'s Path in spring cherry blossoms is something incredible. Will definitely return in autumn for maples! Wooden terrace of Kiyomizu-dera without single nail amazes with ancient builders\' mastery.',
      ja: '3日間が1日のように過ぎました。春の桜の哲学の道は信じられないものです。秋のもみじのために必ず戻ってきます！釘を一本も使わない清水寺の木造テラスは古代建築家の技術に驚かされます。'
    },
    featured: true
  },
  {
    id: 54,
    author: {
      name: 'Elena',
      image: 'https://source.unsplash.com/featured/?woman,portrait,garden',
      location: {
        ru: 'Санкт-Петербург, Россия',
        en: 'Saint Petersburg, Russia',
        ja: 'サンクトペテルブルク、ロシア'
      }
    },
    tourId: 'classic-kyoto-tour',
    date: '2024-12-20',
    rating: 5,
    text: {
      ru: 'Путешествовали с мужем. Серебряный павильон оказался даже красивее Золотого своей сдержанной элегантностью. Районы Гион и Понтотё перенесли нас в прошлое. Повезло встретить настоящую майко! Фотосессия в кимоно стала изюминкой поездки.',
      en: 'Traveled with husband. Silver Pavilion turned out even more beautiful than Golden with its restrained elegance. Gion and Pontocho districts transported us to the past. Lucky to meet real maiko! Kimono photo session became trip highlight.',
      ja: '夫と一緒に旅行しました。銀閣寺は控えめな優雅さで金閣寺よりも美しかったです。祇園と先斗町地区は私たちを過去にタイムスリップさせてくれました。本物の舞妓に会えてラッキーでした！着物写真撮影が旅行のハイライトになりました。'
    },
    featured: false
  },
  {
    id: 55,
    author: {
      name: 'Vladimir',
      image: 'https://source.unsplash.com/featured/?man,portrait,meditation',
      location: {
        ru: 'Екатеринбург, Россия',
        en: 'Yekaterinburg, Russia',
        ja: 'エカテリンブルク、ロシア'
      }
    },
    tourId: 'classic-kyoto-tour',
    date: '2024-12-05',
    rating: 4,
    text: {
      ru: 'Отличное погружение в буддийскую философию! Загадка сада камней Рёан-дзи действительно работает - с любой точки видно только 14 камней из 15. Чайная церемония была медитативной. Единственное - хотелось бы больше времени на каждом объекте.',
      en: 'Excellent immersion into Buddhist philosophy! Ryoan-ji rock garden mystery really works - only 14 out of 15 stones visible from any point. Tea ceremony was meditative. The only thing - would like more time at each site.',
      ja: '仏教哲学への素晴らしい没入！龍安寺の石庭の謎は本当に機能します - どの地点からも15個中14個の石しか見えません。茶道は瞑想的でした。唯一のことは、各サイトでもっと時間が欲しかったことです。'
    },
    featured: false
  },
  {
    id: 56,
    author: {
      name: 'Tatiana',
      image: 'https://source.unsplash.com/featured/?woman,portrait,culture',
      location: {
        ru: 'Казань, Россия',
        en: 'Kazan, Russia',
        ja: 'カザン、ロシア'
      }
    },
    tourId: 'classic-kyoto-tour',
    date: '2024-11-25',
    rating: 5,
    text: {
      ru: 'Киото превзошел все ожидания! Осенние клены были невероятно красивые, особенно в бамбуковой роще Арасияма. Мастер-класс по каллиграфии открыл новые грани японской культуры. 1000-летняя история ощущается в каждом уголке города.',
      en: 'Kyoto exceeded all expectations! Autumn maples were incredibly beautiful, especially in Arashiyama bamboo grove. Calligraphy masterclass opened new facets of Japanese culture. 1000-year history is felt in every corner of the city.',
      ja: '京都はすべての期待を上回りました！秋のもみじは信じられないほど美しく、特に嵐山の竹林で。書道マスタークラスは日本文化の新しい側面を開いてくれました。1000年の歴史が街の隅々で感じられます。'
    },
    featured: false
  },
  {
    id: 57,
    author: {
      name: 'Vladimir',
      image: 'https://source.unsplash.com/featured/?man,portrait,food',
      location: {
        ru: 'Москва, Россия',
        en: 'Moscow, Russia',
        ja: 'モスクワ、ロシア'
      }
    },
    tourId: 'classic-osaka-tour',
    date: '2024-12-22',
    rating: 5,
    text: {
      ru: 'Осака - это гастрономический рай! За два дня попробовали столько нового. Такояки собственного приготовления - незабываемо. Дотонбори вечером просто сказка! Неоновые огни, движущийся краб - атмосфера невероятная.',
      en: 'Osaka is gastronomic paradise! Tried so much new in two days. Self-made takoyaki - unforgettable. Dotonbori in evening is simply fairy tale! Neon lights, moving crab - atmosphere is incredible.',
      ja: '大阪はグルメの楽園です！2日間でたくさんの新しいものを試しました。自分で作ったたこ焼き - 忘れられません。夜の道頓堀はまさにおとぎ話です！ネオンライト、動くカニ - 雰囲気が信じられません。'
    },
    featured: true
  },
  {
    id: 58,
    author: {
      name: 'Christina',
      image: 'https://source.unsplash.com/featured/?woman,portrait,osaka',
      location: {
        ru: 'Санкт-Петербург, Россия',
        en: 'Saint Petersburg, Russia',
        ja: 'サンクトペテルブルク、ロシア'
      }
    },
    tourId: 'classic-osaka-tour',
    date: '2024-12-22',
    rating: 5,
    text: {
      ru: 'Очень динамичный и вкусный тур! Осака оказалась совсем не похожа на Токио. Люди здесь более открытые, а еда невероятная. Мастер-класс понравился больше всего. Рынок Куромон - это отдельная вселенная вкусов!',
      en: 'Very dynamic and delicious tour! Osaka turned out completely different from Tokyo. People here are more open, and food is incredible. Masterclass was the best part. Kuromon market is separate universe of flavors!',
      ja: 'とてもダイナミックで美味しいツアー！大阪は東京とは全く違うことが分かりました。ここの人々はよりオープンで、食事は信じられません。マスタークラスが一番良かったです。黒門市場は味の別世界です！'
    },
    featured: true
  },
  {
    id: 59,
    author: {
      name: 'Andrey',
      image: 'https://source.unsplash.com/featured/?man,portrait,castle',
      location: {
        ru: 'Екатеринбург, Россия',
        en: 'Yekaterinburg, Russia',
        ja: 'エカテリンブルク、ロシア'
      }
    },
    tourId: 'classic-osaka-tour',
    date: '2024-12-08',
    rating: 4,
    text: {
      ru: 'Отличное сочетание истории и современности! Замок Осаки впечатлил своими размерами, а вид с Умэда Скай Билдинг захватывает дух. Единственное - хотелось бы больше времени на шоппинг в Синсайбаси, но еды и так было предостаточно!',
      en: 'Excellent combination of history and modernity! Osaka Castle impressed with its size, and view from Umeda Sky Building is breathtaking. The only thing - would like more time for shopping in Shinsaibashi, but there was plenty of food anyway!',
      ja: '歴史と現代性の素晴らしい組み合わせ！大阪城はその大きさで印象的で、梅田スカイビルからの眺めは息をのむようです。唯一のことは、心斎橋でのショッピングにもっと時間が欲しかったですが、とにかく食事はたくさんありました！'
    },
    featured: false
  },
  {
    id: 60,
    author: {
      name: 'Maria',
      image: 'https://source.unsplash.com/featured/?woman,portrait,market',
      location: {
        ru: 'Казань, Россия',
        en: 'Kazan, Russia',
        ja: 'カザン、ロシア'
      }
    },
    tourId: 'classic-osaka-tour',
    date: '2024-11-28',
    rating: 5,
    text: {
      ru: 'Кулинарное путешествие мечты! Девиз "кuidaore" - ешь, пока не упадешь - понял на собственном опыте. Окономияки и кусикацу оказались гораздо вкуснее, чем ожидала. Круиз по Дотонбори стоил дополнительных денег - виды с воды потрясающие!',
      en: 'Dream culinary journey! Understood "kuidaore" motto - eat until you drop - from personal experience. Okonomiyaki and kushikatsu turned out much tastier than expected. Dotonbori cruise worth extra money - views from water are amazing!',
      ja: '夢のグルメ旅行！「食い倒れ」のモットー - 倒れるまで食べる - を個人的な経験から理解しました。お好み焼きと串カツは期待以上に美味しかったです。道頓堀クルーズは追加料金の価値がありました - 水からの眺めは素晴らしいです！'
    },
    featured: false
  },
  {
    id: 61,
    author: {
      name: 'Sergey',
      image: 'https://source.unsplash.com/featured/?man,portrait,neon',
      location: {
        ru: 'Новосибирск, Россия',
        en: 'Novosibirsk, Russia',
        ja: 'ノボシビルスク、ロシア'
      }
    },
    tourId: 'classic-osaka-tour',
    date: '2024-11-15',
    rating: 4,
    text: {
      ru: 'Отличная альтернатива Токио! Осака более расслабленная и дружелюбная. Особенно понравился кансайский диалект - люди говорят с такой интонацией! Ночная жизнь в Дотонбори бурлит до утра. Пивоварня Асахи была приятным бонусом.',
      en: 'Great alternative to Tokyo! Osaka is more relaxed and friendly. Especially liked Kansai dialect - people speak with such intonation! Nightlife in Dotonbori buzzes until morning. Asahi brewery was nice bonus.',
      ja: '東京の素晴らしい代替案！大阪はよりリラックスしていて親しみやすいです。特に関西弁が気に入りました - 人々はそのようなイントネーションで話します！道頓堀のナイトライフは朝まで賑わっています。アサヒビール工場は素敵なボーナスでした。'
    },
    featured: false
  },
  {
    id: 7,
    author: {
      name: 'Svetlana',
      image: 'https://source.unsplash.com/featured/?woman,portrait,smile',
      location: {
        ru: 'Воронеж, Россия',
        en: 'Voronezh, Russia',
        ja: 'ヴォロネジ、ロシア'
      }
    },
    tourId: 'one-day-nara',
    date: '2024-11-20',
    rating: 5,
    text: {
      ru: 'Нара - это сказка! Олени такие милые и воспитанные, кланяются за печенье. Великий Будда поражает размерами - никогда не думала, что статуя может быть настолько впечатляющей. Идеальная однодневная поездка из Киото!',
      en: 'Nara is a fairy tale! The deer are so cute and well-behaved, they bow for crackers. The Great Buddha is stunning in size - never thought a statue could be so impressive. Perfect day trip from Kyoto!',
      ja: '奈良はおとぎ話のようです！鹿はとてもかわいくてお行儀がよく、せんべいのためにお辞儀をします。大仏は驚くほど巨大で、彫像がこれほど印象的だとは思いませんでした。京都からの完璧な日帰り旅行！'
    },
    featured: true
  },
  {
    id: 8,
    author: {
      name: 'Petr',
      image: 'https://source.unsplash.com/featured/?family,portrait,happy',
      location: {
        ru: 'Тюмень, Россия',
        en: 'Tyumen, Russia',
        ja: 'チュメニ、ロシア'
      }
    },
    tourId: 'one-day-nara',
    date: '2024-11-15',
    rating: 5,
    text: {
      ru: 'Очень атмосферное место! Дети были в восторге от оленей - кормили их весь день. Храм Тодай-дзи впечатляет своей древностью и величием. Гид рассказал много интересного об истории периода Нара. Обязательно к посещению!',
      en: 'Very atmospheric place! The children were delighted with the deer - fed them all day. Todai-ji Temple impresses with its antiquity and grandeur. The guide told us a lot of interesting things about Nara period history. Must visit!',
      ja: '非常に雰囲気のある場所！子供たちは鹿を大喜びで、一日中餌をやっていました。東大寺はその古さと壮大さで印象的です。ガイドは奈良時代の歴史について多くの興味深いことを教えてくれました。必見です！'
    },
    featured: true
  },
  {
    id: 9,
    author: {
      name: 'Vladimir',
      image: 'https://source.unsplash.com/featured/?man,portrait,photographer',
      location: {
        ru: 'Хабаровск, Россия',
        en: 'Khabarovsk, Russia',
        ja: 'ハバロフスク、ロシア'
      }
    },
    tourId: 'one-day-nara',
    date: '2024-10-30',
    rating: 5,
    text: {
      ru: 'Как фотограф, был поражен красотой Нары! Олени в парке на фоне осенних кленов - просто сказка. Касуга Тайся с тысячами фонарей создает мистическую атмосферу. Отличная организация тура, все по расписанию.',
      en: 'As a photographer, I was amazed by the beauty of Nara! Deer in the park against autumn maples - simply magical. Kasuga Taisha with thousands of lanterns creates a mystical atmosphere. Excellent tour organization, everything on schedule.',
      ja: '写真家として、奈良の美しさに驚きました！秋のもみじを背景にした公園の鹿は、まさに魔法のようです。何千もの灯籠がある春日大社は神秘的な雰囲気を作り出します。優れたツアー組織、すべてがスケジュール通りです。'
    },
    featured: false
  },
  {
    id: 10,
    author: {
      name: 'Maria',
      image: 'https://source.unsplash.com/featured/?woman,portrait,nature',
      location: {
        ru: 'Калининград, Россия',
        en: 'Kaliningrad, Russia',
        ja: 'カリーニングラード、ロシア'
      }
    },
    tourId: 'one-day-nara',
    date: '2024-10-20',
    rating: 4,
    text: {
      ru: 'Очень понравился тур! Олени действительно особенные - так интересно наблюдать, как они взаимодействуют с людьми. Великий Будда производит неизгладимое впечатление. Единственное - хотелось бы чуть больше времени в каждом месте.',
      en: 'Really enjoyed the tour! The deer are truly special - so interesting to watch how they interact with people. The Great Buddha makes an unforgettable impression. The only thing - would have liked a bit more time in each place.',
      ja: 'ツアーを本当に楽しみました！鹿は本当に特別で、人々とどのように交流するかを見るのはとても興味深いです。大仏は忘れられない印象を与えます。唯一のことは、各場所でもう少し時間が欲しかったことです。'
    },
    featured: false
  },
  {
    id: 11,
    author: {
      name: 'Alexey',
      image: 'https://source.unsplash.com/featured/?man,portrait,teacher',
      location: {
        ru: 'Самара, Россия',
        en: 'Samara, Russia',
        ja: 'サマラ、ロシア'
      }
    },
    tourId: 'one-day-nara',
    date: '2024-11-12',
    rating: 5,
    text: {
      ru: 'Как учитель истории, был очарован рассказами гида о периоде Нара. Место действительно дышит историей - первая столица, древние храмы, традиции, которым более тысячи лет. Олени добавляют особый колорит. Рекомендую всем!',
      en: 'As a history teacher, I was charmed by the guide\'s stories about the Nara period. The place truly breathes history - first capital, ancient temples, traditions over a thousand years old. The deer add special color. Recommend to everyone!',
      ja: '歴史教師として、奈良時代についてのガイドの話に魅了されました。この場所は本当に歴史を感じさせます - 最初の首都、古代の寺院、千年以上の伝統。鹿が特別な彩りを添えます。皆さんにお勧めします！'
    },
    featured: false
  },
  {
    id: 12,
    author: {
      name: 'Daria',
      image: 'https://source.unsplash.com/featured/?woman,portrait,winter',
      location: {
        ru: 'Пермь, Россия',
        en: 'Perm, Russia',
        ja: 'ペルミ、ロシア'
      }
    },
    tourId: 'rural-japan-villages',
    date: '2024-02-10',
    rating: 5,
    text: {
      ru: 'Сказочные деревни! Зимой с подсветкой это просто волшебство. Дома под снежными шапками выглядят как из японской сказки. Ночевка в минсюку - незабываемый опыт. Чувствуешь себя частью традиционной Японии.',
      en: 'Fairytale villages! In winter with illumination it\'s pure magic. Houses under snow caps look like from a Japanese fairy tale. Overnight stay in minshuku - unforgettable experience. You feel like part of traditional Japan.',
      ja: 'おとぎ話の村々！冬のライトアップは純粋な魔法です。雪帽子をかぶった家々は日本のおとぎ話のようです。民宿での宿泊 - 忘れられない体験。伝統的な日本の一部になったような気分です。'
    },
    featured: true
  },
  {
    id: 13,
    author: {
      name: 'Andrey',
      image: 'https://source.unsplash.com/featured/?couple,portrait,travel',
      location: {
        ru: 'Ростов-на-Дону, Россия',
        en: 'Rostov-on-Don, Russia',
        ja: 'ロストフ・ナ・ドヌ、ロシア'
      }
    },
    tourId: 'rural-japan-villages',
    date: '2024-01-28',
    rating: 5,
    text: {
      ru: 'Очень атмосферный тур! Наконец увидели настоящую Японию, а не только большие города. Онсен с видом на заснеженные горы - мечта! Архитектура гассё-дзукури поражает своей практичностью и красотой.',
      en: 'Very atmospheric tour! Finally saw real Japan, not just big cities. Onsen with view of snow-covered mountains - a dream! Gassho-zukuri architecture amazes with its practicality and beauty.',
      ja: '非常に雰囲気のあるツアー！ついに大都市だけでなく、本当の日本を見ました。雪に覆われた山々の眺めがある温泉 - 夢のよう！合掌造りの建築はその実用性と美しさで驚かせます。'
    },
    featured: true
  },
  {
    id: 14,
    author: {
      name: 'Eugene',
      image: 'https://source.unsplash.com/featured/?man,portrait,photographer',
      location: {
        ru: 'Владивосток, Россия',
        en: 'Vladivostok, Russia',
        ja: 'ウラジオストク、ロシア'
      }
    },
    tourId: 'rural-japan-villages',
    date: '2024-03-15',
    rating: 5,
    text: {
      ru: 'Как фотограф, был в восторге от возможностей для съемки! Деревни Сиракава-го и Гокаяма предлагают уникальные кадры. Мастер-класс по изготовлению васи оказался неожиданно интересным. Малая группа позволила получить индивидуальное внимание.',
      en: 'As a photographer, I was thrilled with the shooting opportunities! Shirakawa-go and Gokayama villages offer unique shots. The washi making workshop turned out to be unexpectedly interesting. Small group allowed for individual attention.',
      ja: '写真家として、撮影の機会に興奮しました！白川郷と五箇山の村々はユニークなショットを提供します。和紙作りワークショップは意外に興味深いものでした。少人数グループで個別の注意を受けることができました。'
    },
    featured: false
  },
  {
    id: 15,
    author: {
      name: 'Olga',
      image: 'https://source.unsplash.com/featured/?woman,portrait,culture',
      location: {
        ru: 'Казань, Россия',
        en: 'Kazan, Russia',
        ja: 'カザン、ロシア'
      }
    },
    tourId: 'rural-japan-villages',
    date: '2024-04-08',
    rating: 4,
    text: {
      ru: 'Удивительное погружение в сельскую жизнь Японии! Особенно понравился дом Вада - такая сложная конструкция без единого гвоздя. Еда в минсюку была простой, но очень вкусной. Единственное - хотелось бы побольше времени на фотосъемку.',
      en: 'Amazing immersion into rural Japanese life! Especially liked Wada House - such complex construction without a single nail. Food at minshuku was simple but very tasty. Only thing - would have liked more time for photography.',
      ja: '日本の田舎暮らしへの驚くべき没入！特に和田家が気に入りました - 釘を一本も使わない複雑な構造。民宿での食事はシンプルでしたがとても美味しかったです。唯一のことは、写真撮影にもっと時間が欲しかったことです。'
    },
    featured: false
  },
  {
    id: 16,
    author: {
      name: 'Dmitry',
      image: 'https://source.unsplash.com/featured/?man,portrait,architecture',
      location: {
        ru: 'Красноярск, Россия',
        en: 'Krasnoyarsk, Russia',
        ja: 'クラスノヤルスク、ロシア'
      }
    },
    tourId: 'rural-japan-villages',
    date: '2024-02-22',
    rating: 5,
    text: {
      ru: 'Как архитектор, был поражен инженерным решением крыш гассё-дзукури! Угол в 60 градусов идеально приспособлен для снеговых нагрузок. Гид отлично разбирался в конструктивных особенностях. Онсен после долгого дня - просто спасение!',
      en: 'As an architect, I was amazed by the engineering solution of gassho-zukuri roofs! The 60-degree angle is perfectly adapted for snow loads. The guide understood construction features excellently. Onsen after a long day - pure salvation!',
      ja: '建築家として、合掌造りの屋根のエンジニアリングソリューションに驚きました！60度の角度は雪荷重に完璧に適応しています。ガイドは建築的特徴を優れて理解していました。長い一日の後の温泉 - まさに救いでした！'
    },
    featured: false
  },
{
    id: 17,
    author: {
      name: 'Olga',
      image: 'https://source.unsplash.com/featured/?woman,portrait,spa',
      location: {
        ru: 'Санкт-Петербург, Россия',
        en: 'St. Petersburg, Russia',
        ja: 'サンクトペテルブルク、ロシア'
      }
    },
    tourId: 'hot-springs-japan',
    date: '2024-01-15',
    rating: 5,
    text: {
      ru: 'Невероятно расслабляющий тур! Каждый онсен уникален по своему составу и лечебным свойствам. В Кусацу участвовали в церемонии юмоми - очень интересная традиция. Кожа после недели купаний стала как шелк!',
      en: 'Incredibly relaxing tour! Each onsen is unique in its composition and healing properties. In Kusatsu we participated in yumomi ceremony - very interesting tradition. Skin became like silk after a week of bathing!',
      ja: '信じられないほどリラックスできるツアー！各温泉はその成分と治癒特性においてユニークです。草津では湯もみ儀式に参加しました - とても興味深い伝統です。一週間の入浴後、肌が絹のようになりました！'
    },
    featured: true
  },
  {
    id: 18,
    author: {
      name: 'Valery',
      image: 'https://source.unsplash.com/featured/?man,portrait,relaxed',
      location: {
        ru: 'Екатеринбург, Россия',
        en: 'Yekaterinburg, Russia',
        ja: 'エカテリンブルク、ロシア'
      }
    },
    tourId: 'hot-springs-japan',
    date: '2024-02-08',
    rating: 5,
    text: {
      ru: 'Лучший способ познакомиться с японской культурой релаксации! Рёканы потрясающие, еда изысканная. Особенно понравился Бэппу с его разноцветными источниками - настоящие "адские пруды". Массажи были превосходными.',
      en: 'Best way to get acquainted with Japanese relaxation culture! Ryokans are amazing, food is exquisite. Especially liked Beppu with its colorful springs - real "hell ponds". Massages were excellent.',
      ja: '日本のリラクゼーション文化に親しむ最良の方法！旅館は素晴らしく、料理は絶品です。特に色とりどりの温泉があるベップが気に入りました - 本物の「地獄池」。マッサージは素晴らしかったです。'
    },
    featured: true
  },
  {
    id: 19,
    author: {
      name: 'Natalia',
      image: 'https://source.unsplash.com/featured/?woman,portrait,wellness',
      location: {
        ru: 'Новосибирск, Россия',
        en: 'Novosibirsk, Russia',
        ja: 'ノボシビルスク、ロシア'
      }
    },
    tourId: 'hot-springs-japan',
    date: '2024-03-20',
    rating: 5,
    text: {
      ru: 'Как врач, была поражена лечебными свойствами разных источников! В Хаконэ сульфатные воды помогли с суставами, в Кусацу кислотные - с кожей. Каждый рёкан - это маленький рай с идеальным сервисом.',
      en: 'As a doctor, I was amazed by the healing properties of different springs! In Hakone sulfate waters helped with joints, in Kusatsu acidic ones - with skin. Each ryokan is a little paradise with perfect service.',
      ja: '医師として、異なる温泉の治癒特性に驚きました！箱根では硫酸塩の湯が関節に、草津では酸性の湯が肌に効きました。各旅館は完璧なサービスを備えた小さな楽園です。'
    },
    featured: false
  },
  {
    id: 20,
    author: {
      name: 'Sergey',
      image: 'https://source.unsplash.com/featured/?man,portrait,mountain',
      location: {
        ru: 'Челябинск, Россия',
        en: 'Chelyabinsk, Russia',
        ja: 'チェリャビンスク、ロシア'
      }
    },
    tourId: 'hot-springs-japan',
    date: '2024-02-25',
    rating: 4,
    text: {
      ru: 'Отличный тур для восстановления сил! После рабочего стресса это было именно то, что нужно. Песочные ванны в Бэппу - невероятные ощущения. Единственное - хотелось бы больше времени в каждом месте.',
      en: 'Excellent tour for recovery! After work stress this was exactly what was needed. Sand baths in Beppu - incredible sensations. Only thing - would have liked more time in each place.',
      ja: '回復のための素晴らしいツアー！仕事のストレスの後、これはまさに必要なものでした。別府の砂風呂 - 信じられない感覚。唯一のことは、各場所でもっと時間が欲しかったことです。'
    },
    featured: false
  },
  {
    id: 21,
    author: {
      name: 'Ludmila',
      image: 'https://source.unsplash.com/featured/?woman,portrait,mature',
      location: {
        ru: 'Волгоград, Россия',
        en: 'Volgograd, Russia',
        ja: 'ヴォルゴグラード、ロシア'
      }
    },
    tourId: 'hot-springs-japan',
    date: '2024-01-30',
    rating: 5,
    text: {
      ru: 'В 60 лет решила попробовать что-то новое - не пожалела! Онсены действительно лечебные, особенно для суставов. Церемония юмоми в Кусацу была очень трогательной. Японское гостеприимство на высшем уровне.',
      en: 'At 60 I decided to try something new - no regrets! Onsen are truly healing, especially for joints. Yumomi ceremony in Kusatsu was very touching. Japanese hospitality at the highest level.',
      ja: '60歳で何か新しいことを試すことにしました - 後悔はありません！温泉は本当に治癒力があり、特に関節に良いです。草津の湯もみ儀式はとても感動的でした。日本のおもてなしは最高レベルです。'
    },
    featured: false
  },
  {
    id: 22,
    author: {
      name: 'Anna & Peter',
      image: 'https://source.unsplash.com/featured/?couple,portrait,photographer',
      location: {
        ru: 'Москва, Россия',
        en: 'Moscow, Russia',
        ja: 'モスクワ、ロシア'
      }
    },
    tourId: 'custom-tour',
    date: '2024-04-15',
    rating: 5,
    text: {
      ru: 'Создали идеальный тур под наши интересы! Как фотографы, мы получили доступ к уникальным локациям. Каждый день был спланирован с учетом освещения и погоды. Особенно понравились рассветы на Фудзи и ночные съемки в Киото.',
      en: 'Created the perfect tour for our interests! As photographers, we got access to unique locations. Every day was planned considering lighting and weather. Especially loved the sunrises at Fuji and night shoots in Kyoto.',
      ja: '私たちの興味に完璧なツアーを作ってくれました！写真家として、ユニークなロケーションにアクセスできました。毎日が照明と天気を考慮して計画されていました。特に富士山の日の出と京都での夜撮影が気に入りました。'
    },
    featured: true
  },
  {
    id: 23,
    author: {
      name: 'Alisa',
      image: 'https://source.unsplash.com/featured/?woman,portrait,family',
      location: {
        ru: 'Нижний Новгород, Россия',
        en: 'Nizhny Novgorod, Russia',
        ja: 'ニジニ・ノヴゴロド、ロシア'
      }
    },
    tourId: 'custom-tour',
    date: '2024-03-28',
    rating: 5,
    text: {
      ru: 'Путешествовали с мамой в инвалидной коляске. Все было продумано до мелочей - от транспорта до ресторанов. Мама была в восторге от онсенов с доступной средой. Никогда не думала, что такое возможно в Японии!',
      en: 'Traveled with mom in a wheelchair. Everything was thought out to the smallest detail - from transport to restaurants. Mom was delighted with accessible onsen. Never thought such thing was possible in Japan!',
      ja: '車椅子の母と一緒に旅行しました。交通機関からレストランまで、すべてが細部まで考え抜かれていました。母はアクセシブルな温泉に大喜びでした。日本でそんなことが可能だとは思いませんでした！'
    },
    featured: true
  },
  {
    id: 24,
    author: {
      name: 'Ekaterina',
      image: 'https://source.unsplash.com/featured/?family,portrait,teenagers',
      location: {
        ru: 'Казань, Россия',
        en: 'Kazan, Russia',
        ja: 'カザン、ロシア'
      }
    },
    tourId: 'custom-tour',
    date: '2024-02-20',
    rating: 5,
    text: {
      ru: 'Хотели показать детям Японию, но чтобы им было интересно. Получился микс культуры и развлечений. Подростки были в восторге от аниме-студий и роботов, а мы с мужем - от храмов и садов. Всем было интересно!',
      en: 'Wanted to show Japan to kids, but make it interesting for them. Got a mix of culture and entertainment. Teenagers were thrilled with anime studios and robots, while my husband and I loved temples and gardens. Everyone was interested!',
      ja: '子供たちに日本を見せたかったのですが、彼らにとって興味深いものにしたかったのです。文化とエンターテインメントのミックスになりました。ティーンエイジャーはアニメスタジオとロボットに興奮し、夫と私は寺院と庭園を愛しました。みんなが興味を持ちました！'
    },
    featured: true
  },
  {
    id: 25,
    author: {
      name: 'Vladislav',
      image: 'https://source.unsplash.com/featured/?man,portrait,architect',
      location: {
        ru: 'Санкт-Петербург, Россия',
        en: 'St. Petersburg, Russia',
        ja: 'サンクトペテルブルク、ロシア'
      }
    },
    tourId: 'custom-tour',
    date: '2024-05-10',
    rating: 5,
    text: {
      ru: 'Как архитектор, искал специализированный тур по современной японской архитектуре. Организовали встречи с архитекторами, посещение их бюро, даже попал на стройку нового здания Кенго Кума. Бесценный опыт!',
      en: 'As an architect, I was looking for a specialized tour of modern Japanese architecture. They organized meetings with architects, visits to their offices, I even got to the construction site of a new Kengo Kuma building. Priceless experience!',
      ja: '建築家として、現代日本建築の専門ツアーを探していました。建築家との面会、事務所訪問を手配してくれ、隈研吾の新しい建物の建設現場にも行けました。貴重な経験でした！'
    },
    featured: false
  },
  {
    id: 26,
    author: {
      name: 'Anastasiya',
      image: 'https://source.unsplash.com/featured/?woman,portrait,chef',
      location: {
        ru: 'Краснодар, Россия',
        en: 'Krasnodar, Russia',
        ja: 'クラスノダール、ロシア'
      }
    },
    tourId: 'custom-tour',
    date: '2024-06-05',
    rating: 4,
    text: {
      ru: 'Гастрономический тур превзошел ожидания! От уличной еды до ресторанов с мишленовскими звездами. Мастер-классы с поварами, посещение рынков, дегустации саке. Единственное - хотелось бы больше времени в каждом регионе.',
      en: 'Gastronomic tour exceeded expectations! From street food to Michelin-starred restaurants. Workshops with chefs, market visits, sake tastings. Only thing - would have liked more time in each region.',
      ja: 'グルメツアーは期待を超えました！屋台料理からミシュラン星付きレストランまで。シェフとのワークショップ、市場訪問、日本酒の試飲。唯一のことは、各地域でもっと時間が欲しかったことです。'
    },
    featured: false
  }

];