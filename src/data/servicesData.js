// src/data/servicesData.js
export const servicesData = [
  {
    id: "transfer-taxi",
    category: "transport",
    type: "popular",
    tags: {
      ru: ["популярное", "транспорт"],
      en: ["popular", "transport"],
      ja: ["人気", "交通"]
    },
    title: {
      ru: "Трансфер/такси между городами и аэропортами",
      en: "Transfer/taxi between cities and airports",
      ja: "都市間・空港間のトランスファー/タクシー"
    },
    shortDescription: {
      ru: "Комфортабельные трансферы с русскоговорящими водителями по всей Японии",
      en: "Comfortable transfers with Russian-speaking drivers throughout Japan",
      ja: "日本全国でロシア語対応ドライバーによる快適な送迎サービス"
    },
    description: {
      ru: "Комфортабельные трансферы с русскоговорящими водителями по всей Японии. Встреча с табличкой в аэропорту, помощь с багажом, Wi-Fi в автомобиле.",
      en: "Comfortable transfers with Russian-speaking drivers throughout Japan. Airport pickup with nameplate, luggage assistance, Wi-Fi in the vehicle.",
      ja: "日本全国でロシア語対応ドライバーによる快適な送迎サービス。空港でのネームプレートお出迎え、荷物サポート、車内Wi-Fi完備。"
    },
    image: "https://source.unsplash.com/featured/?japan,car,transfer",
    price: 15000,
    priceType: "from", // from, fixed, per_hour
    currency: "JPY",
    duration: null,
    includes: {
      ru: [
        "Встреча с табличкой в аэропорту",
        "Помощь с багажом",
        "Русскоговорящий водитель",
        "Детские кресла (по запросу)",
        "Wi-Fi в автомобиле"
      ],
      en: [
        "Airport pickup with nameplate",
        "Luggage assistance",
        "Russian-speaking driver",
        "Child seats (on request)",
        "Wi-Fi in vehicle"
      ],
      ja: [
        "空港でのネームプレートお出迎え",
        "荷物サポート",
        "ロシア語対応ドライバー",
        "チャイルドシート（リクエストに応じて）",
        "車内Wi-Fi"
      ]
    },
    options: [
      {
        name: {
          ru: "Седан (1-3 пассажира)",
          en: "Sedan (1-3 passengers)",
          ja: "セダン（1-3名）"
        },
        price: 18000,
        description: {
          ru: "Аэропорт Нарита → Токио",
          en: "Narita Airport → Tokyo",
          ja: "成田空港 → 東京"
        }
      },
      {
        name: {
          ru: "Минивэн (4-7 пассажиров)",
          en: "Minivan (4-7 passengers)",
          ja: "ミニバン（4-7名）"
        },
        price: 22000,
        description: {
          ru: "Токио → Хаконэ",
          en: "Tokyo → Hakone",
          ja: "東京 → 箱根"
        }
      },
      {
        name: {
          ru: "Микроавтобус (8-15 пассажиров)",
          en: "Microbus (8-15 passengers)",
          ja: "マイクロバス（8-15名）"
        },
        price: 12000,
        description: {
          ru: "Осака → Киото",
          en: "Osaka → Kyoto",
          ja: "大阪 → 京都"
        }
      }
    ],
    bookingInfo: {
      ru: "Бронирование за 24 часа, экстренно - доплата 50%",
      en: "Booking 24 hours in advance, emergency - 50% surcharge",
      ja: "24時間前の予約、緊急時は50%の追加料金"
    }
  },
  {
    id: "photo-session",
    category: "photography",
    type: "popular",
    tags: {
      ru: ["популярное", "фото"],
      en: ["popular", "photography"],
      ja: ["人気", "写真"]
    },
    title: {
      ru: "Фотосессия с профессиональным фотографом",
      en: "Photo session with professional photographer",
      ja: "プロ写真家による撮影セッション"
    },
    shortDescription: {
      ru: "Профессиональные фото в самых красивых местах Японии",
      en: "Professional photos in the most beautiful places in Japan",
      ja: "日本の最も美しい場所でのプロ写真撮影"
    },
    description: {
      ru: "Профессиональные фото в самых красивых местах Японии. 2-3 часа съемки, 50-100 обработанных фотографий, все исходники в RAW формате.",
      en: "Professional photos in the most beautiful places in Japan. 2-3 hours of shooting, 50-100 processed photos, all RAW originals.",
      ja: "日本の最も美しい場所でのプロ写真撮影。2-3時間の撮影、50-100枚の加工済み写真、RAW形式の全オリジナル。"
    },
    image: "https://source.unsplash.com/featured/?japan,photography,kimono",
    price: 35000,
    priceType: "fixed",
    currency: "JPY",
    duration: "2-3 hours",
    includes: {
      ru: [
        "2-3 часа съемки",
        "50-100 обработанных фотографий",
        "Все исходники в RAW формате",
        "Рекомендации по локациям",
        "Помощь с позированием"
      ],
      en: [
        "2-3 hours of shooting",
        "50-100 processed photos",
        "All RAW originals",
        "Location recommendations",
        "Posing assistance"
      ],
      ja: [
        "2-3時間の撮影",
        "50-100枚の加工済み写真",
        "RAW形式の全オリジナル",
        "ロケーション推奨",
        "ポージング指導"
      ]
    },
    options: [
      {
        name: {
          ru: "Стандартная съемка (2 часа)",
          en: "Standard shooting (2 hours)",
          ja: "スタンダード撮影（2時間）"
        },
        price: 35000,
        description: {
          ru: "Токио: Асакуса, Синдзюку, Харадзюку",
          en: "Tokyo: Asakusa, Shinjuku, Harajuku",
          ja: "東京：浅草、新宿、原宿"
        }
      },
      {
        name: {
          ru: "Расширенная съемка (3 часа)",
          en: "Extended shooting (3 hours)",
          ja: "拡張撮影（3時間）"
        },
        price: 45000,
        description: {
          ru: "Киото: Бамбуковая роща, Гион, храмы",
          en: "Kyoto: Bamboo grove, Gion, temples",
          ja: "京都：竹林、祇園、寺院"
        }
      },
      {
        name: {
          ru: "Золотой час (рассвет/закат)",
          en: "Golden hour (sunrise/sunset)",
          ja: "ゴールデンアワー（日の出/日没）"
        },
        price: 55000,
        description: {
          ru: "Специальное время для лучшего освещения",
          en: "Special timing for best lighting",
          ja: "最高の照明のための特別な時間"
        }
      }
    ],
    extras: [
      {
        name: {
          ru: "Аренда кимоно",
          en: "Kimono rental",
          ja: "着物レンタル"
        },
        price: 8000
      },
      {
        name: {
          ru: "Профессиональный макияж",
          en: "Professional makeup",
          ja: "プロメイク"
        },
        price: 12000
      }
    ]
  },
  {
    id: "kimono-rental",
    category: "culture",
    type: "cultural",
    tags: {
      ru: ["культура", "кимоно"],
      en: ["culture", "kimono"],
      ja: ["文化", "着物"]
    },
    title: {
      ru: "Аренда традиционных костюмов",
      en: "Traditional costume rental",
      ja: "伝統衣装レンタル"
    },
    shortDescription: {
      ru: "Аренда кимоно и юката для аутентичных фото и прогулок",
      en: "Kimono and yukata rental for authentic photos and walks",
      ja: "本格的な写真撮影や散策のための着物・浴衣レンタル"
    },
    description: {
      ru: "Аренда кимоно и юката для аутентичных фото и прогулок. Включает помощь в одевании, все аксессуары и простую прическу.",
      en: "Kimono and yukata rental for authentic photos and walks. Includes dressing assistance, all accessories and simple hairstyling.",
      ja: "本格的な写真撮影や散策のための着物・浴衣レンタル。着付けサポート、全アクセサリー、簡単なヘアスタイリング込み。"
    },
    image: "https://source.unsplash.com/featured/?kimono,japan,traditional",
    price: 4000,
    priceType: "from",
    currency: "JPY",
    duration: "3 hours",
    includes: {
      ru: [
        "Помощь в одевании",
        "Все аксессуары (оби, гэта, сумочка)",
        "Простая прическа",
        "Хранение личных вещей"
      ],
      en: [
        "Dressing assistance",
        "All accessories (obi, geta, handbag)",
        "Simple hairstyling",
        "Personal item storage"
      ],
      ja: [
        "着付けサポート",
        "全アクセサリー（帯、下駄、バッグ）",
        "簡単なヘアスタイリング",
        "私物保管"
      ]
    },
    options: [
      {
        name: {
          ru: "Юката (3 часа)",
          en: "Yukata (3 hours)",
          ja: "浴衣（3時間）"
        },
        price: 4000,
        description: {
          ru: "Летний вариант для фестивалей",
          en: "Summer option for festivals",
          ja: "夏祭り用"
        }
      },
      {
        name: {
          ru: "Кимоно стандартное (3 часа)",
          en: "Standard kimono (3 hours)",
          ja: "スタンダード着物（3時間）"
        },
        price: 6000,
        description: {
          ru: "Классическое кимоно для прогулок",
          en: "Classic kimono for walks",
          ja: "散策用クラシック着物"
        }
      },
      {
        name: {
          ru: "Кимоно премиум (3 часа)",
          en: "Premium kimono (3 hours)",
          ja: "プレミアム着物（3時間）"
        },
        price: 12000,
        description: {
          ru: "Эксклюзивные ткани и дизайн",
          en: "Exclusive fabrics and design",
          ja: "高級生地とデザイン"
        }
      }
    ]
  },
  {
    id: "cooking-class",
    category: "food",
    type: "popular",
    tags: {
      ru: ["популярное", "еда", "мастер-класс"],
      en: ["popular", "food", "masterclass"],
      ja: ["人気", "料理", "体験"]
    },
    title: {
      ru: "Мастер-классы японской кухни",
      en: "Japanese cuisine masterclasses",
      ja: "日本料理体験教室"
    },
    shortDescription: {
      ru: "Обучение приготовлению традиционных японских блюд с местными поварами",
      en: "Learn to cook traditional Japanese dishes with local chefs",
      ja: "地元のシェフと一緒に伝統的な日本料理を学ぶ"
    },
    description: {
      ru: "Обучение приготовлению традиционных японских блюд с местными поварами. Включает все ингредиенты, пошаговое обучение и дегустацию.",
      en: "Learn to cook traditional Japanese dishes with local chefs. Includes all ingredients, step-by-step instruction and tasting.",
      ja: "地元のシェフと一緒に伝統的な日本料理を学ぶ。全材料、段階的指導、試食込み。"
    },
    image: "https://source.unsplash.com/featured/?sushi,cooking,japan",
    price: 8000,
    priceType: "from",
    currency: "JPY",
    duration: "1.5-3 hours",
    includes: {
      ru: [
        "Все ингредиенты и инструменты",
        "Пошаговое обучение",
        "Дегустация приготовленного",
        "Рецепты на русском языке",
        "Сертификат участника"
      ],
      en: [
        "All ingredients and tools",
        "Step-by-step instruction",
        "Tasting of prepared dishes",
        "Recipes in Russian",
        "Participation certificate"
      ],
      ja: [
        "全材料と道具",
        "段階的指導",
        "調理した料理の試食",
        "ロシア語レシピ",
        "参加証明書"
      ]
    },
    options: [
      {
        name: {
          ru: "Суши (нигири, роллы, сашими)",
          en: "Sushi (nigiri, rolls, sashimi)",
          ja: "寿司（握り、巻き、刺身）"
        },
        price: 8000,
        description: {
          ru: "2 часа обучения",
          en: "2 hours of training",
          ja: "2時間の指導"
        }
      },
      {
        name: {
          ru: "Рамен (от бульона до лапши)",
          en: "Ramen (from broth to noodles)",
          ja: "ラーメン（スープから麺まで）"
        },
        price: 10000,
        description: {
          ru: "3 часа обучения",
          en: "3 hours of training",
          ja: "3時間の指導"
        }
      },
      {
        name: {
          ru: "Окономияки (осакская пицца)",
          en: "Okonomiyaki (Osaka pizza)",
          ja: "お好み焼き（大阪ピザ）"
        },
        price: 6000,
        description: {
          ru: "1.5 часа обучения",
          en: "1.5 hours of training",
          ja: "1.5時間の指導"
        }
      }
    ]
  },
  {
    id: "tea-ceremony",
    category: "culture",
    type: "cultural",
    tags: {
      ru: ["культура", "чай"],
      en: ["culture", "tea"],
      ja: ["文化", "茶道"]
    },
    title: {
      ru: "Чайная церемония",
      en: "Tea ceremony",
      ja: "茶道体験"
    },
    shortDescription: {
      ru: "Традиционная японская чайная церемония с мастером садо",
      en: "Traditional Japanese tea ceremony with sado master",
      ja: "茶道師による伝統的な日本の茶道"
    },
    description: {
      ru: "Традиционная японская чайная церемония с мастером садо. Объяснение философии, дегустация матча и традиционных сладостей.",
      en: "Traditional Japanese tea ceremony with sado master. Philosophy explanation, matcha tasting and traditional sweets.",
      ja: "茶道師による伝統的な日本の茶道。哲学の説明、抹茶と伝統菓子の試飲。"
    },
    image: "https://source.unsplash.com/featured/?tea,ceremony,japan",
    price: 4000,
    priceType: "from",
    currency: "JPY",
    duration: "30-90 min",
    includes: {
      ru: [
        "Объяснение философии чайной церемонии",
        "Дегустация матча и традиционных сладостей",
        "Изучение правильных движений",
        "История и культурный контекст",
        "Возможность сфотографироваться"
      ],
      en: [
        "Tea ceremony philosophy explanation",
        "Matcha and traditional sweets tasting",
        "Learning proper movements",
        "History and cultural context",
        "Photo opportunities"
      ],
      ja: [
        "茶道哲学の説明",
        "抹茶と伝統菓子の試飲",
        "正しい作法の学習",
        "歴史と文化的背景",
        "写真撮影機会"
      ]
    },
    options: [
      {
        name: {
          ru: "Краткая церемония (30 мин)",
          en: "Brief ceremony (30 min)",
          ja: "短時間体験（30分）"
        },
        price: 4000,
        description: {
          ru: "Основы этикета и дегустация",
          en: "Basic etiquette and tasting",
          ja: "基本マナーと試飲"
        }
      },
      {
        name: {
          ru: "Полная церемония (60 мин)",
          en: "Full ceremony (60 min)",
          ja: "本格体験（60分）"
        },
        price: 6000,
        description: {
          ru: "Полный цикл церемонии",
          en: "Complete ceremony cycle",
          ja: "完全な茶会サイクル"
        }
      },
      {
        name: {
          ru: "Мастер-класс (90 мин)",
          en: "Masterclass (90 min)",
          ja: "マスタークラス（90分）"
        },
        price: 8000,
        description: {
          ru: "Участие в приготовлении",
          en: "Participation in preparation",
          ja: "準備への参加"
        }
      }
    ]
  },
  {
    id: "sake-tasting",
    category: "food",
    type: "cultural",
    tags: {
      ru: ["еда", "саке", "дегустация"],
      en: ["food", "sake", "tasting"],
      ja: ["食べ物", "日本酒", "試飲"]
    },
    title: {
      ru: "Дегустация саке",
      en: "Sake tasting",
      ja: "日本酒試飲"
    },
    shortDescription: {
      ru: "Профессиональная дегустация японского саке с экспертом",
      en: "Professional Japanese sake tasting with expert",
      ja: "専門家による日本酒のプロ試飲"
    },
    description: {
      ru: "Профессиональная дегустация японского саке с экспертом. Объяснение процесса производства, история и традиции саке.",
      en: "Professional Japanese sake tasting with expert. Production process explanation, sake history and traditions.",
      ja: "専門家による日本酒のプロ試飲。製造工程の説明、日本酒の歴史と伝統。"
    },
    image: "https://source.unsplash.com/featured/?sake,japan,tasting",
    price: 5000,
    priceType: "from",
    currency: "JPY",
    duration: "1-2 hours",
    includes: {
      ru: [
        "Объяснение процесса производства",
        "История и традиции саке",
        "Правильная подача и дегустация",
        "Подбор закусок",
        "Рекомендации для покупки"
      ],
      en: [
        "Production process explanation",
        "Sake history and traditions",
        "Proper serving and tasting",
        "Snack pairing",
        "Purchase recommendations"
      ],
      ja: [
        "製造工程の説明",
        "日本酒の歴史と伝統",
        "正しい提供と試飲",
        "おつまみのペアリング",
        "購入おすすめ"
      ]
    },
    options: [
      {
        name: {
          ru: "Введение в саке (1 час)",
          en: "Introduction to sake (1 hour)",
          ja: "日本酒入門（1時間）"
        },
        price: 5000,
        description: {
          ru: "5 видов + закуски",
          en: "5 types + snacks",
          ja: "5種類＋おつまみ"
        }
      },
      {
        name: {
          ru: "Региональные особенности (1.5 часа)",
          en: "Regional specialties (1.5 hours)",
          ja: "地域の特色（1.5時間）"
        },
        price: 8000,
        description: {
          ru: "8 видов из разных регионов",
          en: "8 types from different regions",
          ja: "異なる地域から8種類"
        }
      },
      {
        name: {
          ru: "Премиум дегустация (2 часа)",
          en: "Premium tasting (2 hours)",
          ja: "プレミアム試飲（2時間）"
        },
        price: 15000,
        description: {
          ru: "Редкие и винтажные саке",
          en: "Rare and vintage sake",
          ja: "希少・ヴィンテージ日本酒"
        }
      }
    ]
  },
  {
    id: "restaurant-booking",
    category: "food",
    type: "service",
    tags: {
      ru: ["еда", "ресторан", "бронирование"],
      en: ["food", "restaurant", "booking"],
      ja: ["食事", "レストラン", "予約"]
    },
    title: {
      ru: "Помощь с бронированием ресторанов",
      en: "Restaurant booking assistance",
      ja: "レストラン予約サポート"
    },
    shortDescription: {
      ru: "Бронирование столиков в лучших ресторанах Японии, включая мишленовские",
      en: "Table reservations at Japan's best restaurants, including Michelin-starred",
      ja: "ミシュラン星付きを含む日本最高のレストランでのテーブル予約"
    },
    description: {
      ru: "Бронирование столиков в лучших ресторанах Японии, включая мишленовские. Поиск по предпочтениям, помощь с выбором меню.",
      en: "Table reservations at Japan's best restaurants, including Michelin-starred. Search by preferences, menu selection assistance.",
      ja: "ミシュラン星付きを含む日本最高のレストランでのテーブル予約。好みに応じた検索、メニュー選択サポート。"
    },
    image: "https://source.unsplash.com/featured/?japanese,restaurant,fine-dining",
    price: 2000,
    priceType: "from",
    currency: "JPY",
    duration: null,
    includes: {
      ru: [
        "Поиск ресторанов по предпочтениям",
        "Бронирование столиков",
        "Помощь с выбором меню",
        "Информация об аллергенах",
        "Сопровождение переводчика"
      ],
      en: [
        "Restaurant search by preferences",
        "Table reservations",
        "Menu selection assistance",
        "Allergen information",
        "Translator accompaniment"
      ],
      ja: [
        "好みに応じたレストラン検索",
        "テーブル予約",
        "メニュー選択サポート",
        "アレルゲン情報",
        "通訳同行"
      ]
    },
    options: [
      {
        name: {
          ru: "Мишлен (1-3 звезды)",
          en: "Michelin (1-3 stars)",
          ja: "ミシュラン（1-3つ星）"
        },
        price: 15000,
        description: {
          ru: "Премиум рестораны",
          en: "Premium restaurants",
          ja: "プレミアムレストラン"
        }
      },
      {
        name: {
          ru: "Популярные рестораны",
          en: "Popular restaurants",
          ja: "人気レストラン"
        },
        price: 3000,
        description: {
          ru: "Известные заведения",
          en: "Well-known establishments",
          ja: "有名店"
        }
      },
      {
        name: {
          ru: "Традиционные (кайсэки, тэппаняки)",
          en: "Traditional (kaiseki, teppanyaki)",
          ja: "伝統料理（懐石、鉄板焼き）"
        },
        price: 5000,
        description: {
          ru: "Аутентичная кухня",
          en: "Authentic cuisine",
          ja: "本格料理"
        }
      }
    ],
    extras: [
      {
        name: {
          ru: "Объяснение этикета",
          en: "Etiquette explanation",
          ja: "マナー説明"
        },
        price: 2000
      },
      {
        name: {
          ru: "Сопровождение переводчика",
          en: "Translator accompaniment",
          ja: "通訳同行"
        },
        price: 8000
      }
    ]
  },
  {
    id: "event-tickets",
    category: "entertainment",
    type: "service",
    tags: {
      ru: ["развлечения", "билеты", "мероприятия"],
      en: ["entertainment", "tickets", "events"],
      ja: ["エンターテイメント", "チケット", "イベント"]
    },
    title: {
      ru: "Бронирование билетов на мероприятия",
      en: "Event ticket booking",
      ja: "イベントチケット予約"
    },
    shortDescription: {
      ru: "Получение билетов на популярные японские мероприятия и шоу",
      en: "Getting tickets for popular Japanese events and shows",
      ja: "人気の日本のイベントやショーのチケット取得"
    },
    description: {
      ru: "Получение билетов на популярные японские мероприятия и шоу. Традиционные представления, спорт, концерты, фестивали.",
      en: "Getting tickets for popular Japanese events and shows. Traditional performances, sports, concerts, festivals.",
      ja: "人気の日本のイベントやショーのチケット取得。伝統芸能、スポーツ、コンサート、祭り。"
    },
    image: "https://source.unsplash.com/featured/?japan,kabuki,sumo",
    price: 2000,
    priceType: "from",
    currency: "JPY",
    duration: null,
    includes: {
      ru: [
        "Поиск и покупка билетов",
        "Информация о мероприятии",
        "Помощь с пониманием программы",
        "Рекомендации по дресс-коду",
        "Логистика и транспорт"
      ],
      en: [
        "Ticket search and purchase",
        "Event information",
        "Program understanding assistance",
        "Dress code recommendations",
        "Logistics and transport"
      ],
      ja: [
        "チケット検索・購入",
        "イベント情報",
        "プログラム理解サポート",
        "ドレスコード推奨",
        "物流・交通手段"
      ]
    },
    options: [
      {
        name: {
          ru: "Традиционные (Кабуки, Но, Бунраку)",
          en: "Traditional (Kabuki, Noh, Bunraku)",
          ja: "伝統芸能（歌舞伎、能、文楽）"
        },
        price: 2000,
        description: {
          ru: "Классические японские театры",
          en: "Classic Japanese theaters",
          ja: "古典的な日本の劇場"
        }
      },
      {
        name: {
          ru: "Спорт (Сумо, бейсбол, J-League)",
          en: "Sports (Sumo, baseball, J-League)",
          ja: "スポーツ（相撲、野球、Jリーグ）"
        },
        price: 5000,
        description: {
          ru: "Популярные спортивные события",
          en: "Popular sporting events",
          ja: "人気スポーツイベント"
        }
      },
      {
        name: {
          ru: "Концерты и фестивали",
          en: "Concerts and festivals",
          ja: "コンサート・フェスティバル"
        },
        price: 8000,
        description: {
          ru: "Премиум места на популярных событиях",
          en: "Premium seats at popular events",
          ja: "人気イベントのプレミアム席"
        }
      }
    ]
  },
  {
    id: "private-onsen",
    category: "wellness",
    type: "popular",
    tags: {
      ru: ["популярное", "онсен", "релакс"],
      en: ["popular", "onsen", "relaxation"],
      ja: ["人気", "温泉", "リラックス"]
    },
    title: {
      ru: "Аренда частного онсена",
      en: "Private onsen rental",
      ja: "貸切温泉"
    },
    shortDescription: {
      ru: "Бронирование частных горячих источников для семей и групп",
      en: "Private hot spring reservations for families and groups",
      ja: "家族・グループ向け貸切温泉予約"
    },
    description: {
      ru: "Бронирование частных горячих источников для семей и групп. Включает аренду на 1-2 часа, полотенца и принадлежности.",
      en: "Private hot spring reservations for families and groups. Includes 1-2 hour rental, towels and amenities.",
      ja: "家族・グループ向け貸切温泉予約。1-2時間のレンタル、タオル・アメニティ込み。"
    },
    image: "https://source.unsplash.com/featured/?onsen,japan,hot-spring",
    price: 12000,
    priceType: "from",
    currency: "JPY",
    duration: "1-2 hours",
    includes: {
      ru: [
        "Аренда на 1-2 часа",
        "Полотенца и принадлежности",
        "Инструктаж по этикету",
        "Трансфер (в пределах города)",
        "Напитки после купания"
      ],
      en: [
        "1-2 hour rental",
        "Towels and amenities",
        "Etiquette instruction",
        "Transfer (within city)",
        "Post-bath beverages"
      ],
      ja: [
        "1-2時間のレンタル",
        "タオル・アメニティ",
        "マナー指導",
        "送迎（市内）",
        "入浴後ドリンク"
      ]
    },
    options: [
      {
        name: {
          ru: "Хаконэ (семейный онсен)",
          en: "Hakone (family onsen)",
          ja: "箱根（家族風呂）"
        },
        price: 18000,
        description: {
          ru: "С видом на горы",
          en: "Mountain view",
          ja: "山の景色"
        }
      },
      {
        name: {
          ru: "Атами (премиум)",
          en: "Atami (premium)",
          ja: "熱海（プレミアム）"
        },
        price: 25000,
        description: {
          ru: "Исторический рёкан",
          en: "Historic ryokan",
          ja: "歴史ある旅館"
        }
      },
      {
        name: {
          ru: "Арима (люкс)",
          en: "Arima (luxury)",
          ja: "有馬（高級）"
        },
        price: 30000,
        description: {
          ru: "Золотые и серебряные источники",
          en: "Gold and silver springs",
          ja: "金泉・銀泉"
        }
      }
    ],
    extras: [
      {
        name: {
          ru: "Массаж",
          en: "Massage",
          ja: "マッサージ"
        },
        price: 8000
      },
      {
        name: {
          ru: "Ужин кайсэки",
          en: "Kaiseki dinner",
          ja: "懐石ディナー"
        },
        price: 12000
      }
    ]
  },
  {
    id: "custom-itinerary",
    category: "planning",
    type: "popular",
    tags: {
      ru: ["популярное", "планирование", "маршрут"],
      en: ["popular", "planning", "itinerary"],
      ja: ["人気", "企画", "旅程"]
    },
    title: {
      ru: "Составление индивидуальных маршрутов",
      en: "Custom itinerary planning",
      ja: "個別旅程作成"
    },
    shortDescription: {
      ru: "Персональные маршруты с учетом интересов, бюджета и скрытых мест",
      en: "Personal itineraries considering interests, budget and hidden gems",
      ja: "興味・予算・隠れた名所を考慮した個人旅程"
    },
    description: {
      ru: "Персональные маршруты с учетом интересов, бюджета и скрытых мест. Детальный план по дням, рекомендации отелей и ресторанов.",
      en: "Personal itineraries considering interests, budget and hidden gems. Detailed daily plans, hotel and restaurant recommendations.",
      ja: "興味・予算・隠れた名所を考慮した個人旅程。詳細な日程表、ホテル・レストラン推奨。"
    },
    image: "https://source.unsplash.com/featured/?japan,map,planning",
    price: 15000,
    priceType: "from",
    currency: "JPY",
    duration: null,
    includes: {
      ru: [
        "Детальный план по дням",
        "Рекомендации отелей и ресторанов",
        "Транспортные схемы",
        "Карты и путеводители",
        "Контакты местных сервисов"
      ],
      en: [
        "Detailed daily plans",
        "Hotel and restaurant recommendations",
        "Transportation schemes",
        "Maps and guidebooks",
        "Local service contacts"
      ],
      ja: [
        "詳細な日程表",
        "ホテル・レストラン推奨",
        "交通スキーム",
        "地図・ガイドブック",
        "地元サービス連絡先"
      ]
    },
    options: [
      {
        name: {
          ru: "Базовый (3-5 дней)",
          en: "Basic (3-5 days)",
          ja: "ベーシック（3-5日）"
        },
        price: 15000,
        description: {
          ru: "Основные достопримечательности",
          en: "Main attractions",
          ja: "主要観光地"
        }
      },
      {
        name: {
          ru: "Стандартный (6-10 дней)",
          en: "Standard (6-10 days)",
          ja: "スタンダード（6-10日）"
        },
        price: 25000,
        description: {
          ru: "Сбалансированный маршрут",
          en: "Balanced itinerary",
          ja: "バランス良い旅程"
        }
      },
      {
        name: {
          ru: "Расширенный (11-14 дней)",
          en: "Extended (11-14 days)",
          ja: "拡張版（11-14日）"
        },
        price: 35000,
        description: {
          ru: "Глубокое изучение регионов",
          en: "Deep regional exploration",
          ja: "地域の深い探索"
        }
      },
      {
        name: {
          ru: "Премиум (15+ дней)",
          en: "Premium (15+ days)",
          ja: "プレミアム（15日以上）"
        },
        price: 50000,
        description: {
          ru: "Полное погружение в культуру",
          en: "Complete cultural immersion",
          ja: "完全な文化体験"
        }
      }
    ]
  },
  {
    id: "jr-pass",
    category: "transport",
    type: "service",
    tags: {
      ru: ["транспорт", "JR Pass", "проездной"],
      en: ["transport", "JR Pass", "travel pass"],
      ja: ["交通", "JRパス", "乗り放題"]
    },
    title: {
      ru: "Оформление JR Pass и других проездных",
      en: "JR Pass and travel pass arrangements",
      ja: "JRパス等乗り放題パス手配"
    },
    shortDescription: {
      ru: "Помощь с выбором и оформлением транспортных проездных",
      en: "Assistance with selecting and arranging transport passes",
      ja: "交通パスの選択・手配サポート"
    },
    description: {
      ru: "Помощь с выбором и оформлением транспортных проездных. Расчет экономии по маршруту, оформление и доставка.",
      en: "Assistance with selecting and arranging transport passes. Route savings calculation, processing and delivery.",
      ja: "交通パスの選択・手配サポート。ルート節約計算、処理・配送。"
    },
    image: "https://source.unsplash.com/featured/?japan,train,shinkansen",
    price: 2000,
    priceType: "from",
    currency: "JPY",
    duration: null,
    includes: {
      ru: [
        "Расчет экономии по маршруту",
        "Оформление и доставка",
        "Инструкции по использованию",
        "Помощь с активацией",
        "Консультации по маршрутам"
      ],
      en: [
        "Route savings calculation",
        "Processing and delivery",
        "Usage instructions",
        "Activation assistance",
        "Route consultations"
      ],
      ja: [
        "ルート節約計算",
        "処理・配送",
        "使用方法説明",
        "アクティベーション支援",
        "ルート相談"
      ]
    },
    options: [
      {
        name: {
          ru: "Консультация и расчет",
          en: "Consultation and calculation",
          ja: "相談・計算"
        },
        price: 2000,
        description: {
          ru: "Подбор оптимального проездного",
          en: "Optimal pass selection",
          ja: "最適パス選択"
        }
      },
      {
        name: {
          ru: "Оформление JR Pass",
          en: "JR Pass processing",
          ja: "JRパス手続き"
        },
        price: 3000,
        description: {
          ru: "Полное оформление документов",
          en: "Complete documentation processing",
          ja: "書類手続き完了"
        }
      },
      {
        name: {
          ru: "Комплексное оформление",
          en: "Comprehensive processing",
          ja: "総合手続き"
        },
        price: 5000,
        description: {
          ru: "Все виды проездных + доставка",
          en: "All pass types + delivery",
          ja: "全パス種類＋配送"
        }
      }
    ]
  },
  {
    id: "hanami-picnic",
    category: "seasonal",
    type: "seasonal",
    tags: {
      ru: ["сезонное", "сакура", "пикник"],
      en: ["seasonal", "sakura", "picnic"],
      ja: ["季節限定", "桜", "ピクニック"]
    },
    title: {
      ru: "Организация пикников под сакурой/кленами",
      en: "Cherry blossom/maple picnic organization",
      ja: "桜・紅葉ピクニック企画"
    },
    shortDescription: {
      ru: "Организация традиционных пикников ханами и момидзи-гари",
      en: "Traditional hanami and momiji-gari picnic organization",
      ja: "伝統的な花見・紅葉狩りピクニック企画"
    },
    description: {
      ru: "Организация традиционных пикников ханами и момидзи-гари. Бронирование лучших мест, традиционные бэнто, объяснение традиций.",
      en: "Traditional hanami and momiji-gari picnic organization. Best spot reservations, traditional bento, tradition explanations.",
      ja: "伝統的な花見・紅葉狩りピクニック企画。最高の場所の予約、伝統弁当、伝統説明。"
    },
    image: "https://source.unsplash.com/featured/?hanami,sakura,picnic",
    price: 6000,
    priceType: "from",
    currency: "JPY",
    duration: "2-4 hours",
    includes: {
      ru: [
        "Бронирование лучших мест",
        "Традиционные бэнто (ланч-боксы)",
        "Напитки (включая саке)",
        "Подстилки и посуда",
        "Объяснение традиций"
      ],
      en: [
        "Best spot reservations",
        "Traditional bento lunch boxes",
        "Beverages (including sake)",
        "Mats and tableware",
        "Tradition explanations"
      ],
      ja: [
        "最高の場所の予約",
        "伝統弁当",
        "飲み物（日本酒含む）",
        "マット・食器",
        "伝統説明"
      ]
    },
    options: [
      {
        name: {
          ru: "Стандартный пикник (2-4 чел)",
          en: "Standard picnic (2-4 people)",
          ja: "スタンダードピクニック（2-4名）"
        },
        price: 8000,
        description: {
          ru: "Весенний ханами или осенний момидзи",
          en: "Spring hanami or autumn momiji",
          ja: "春の花見または秋の紅葉"
        }
      },
      {
        name: {
          ru: "Премиум пикник (2-4 чел)",
          en: "Premium picnic (2-4 people)",
          ja: "プレミアムピクニック（2-4名）"
        },
        price: 12000,
        description: {
          ru: "Изысканные блюда и премиум саке",
          en: "Gourmet dishes and premium sake",
          ja: "グルメ料理とプレミアム日本酒"
        }
      },
      {
        name: {
          ru: "Групповой пикник (5-10 чел)",
          en: "Group picnic (5-10 people)",
          ja: "グループピクニック（5-10名）"
        },
        price: 6000,
        description: {
          ru: "Скидка на большие группы",
          en: "Group discount",
          ja: "団体割引"
        }
      }
    ],
    extras: [
      {
        name: {
          ru: "Фотограф",
          en: "Photographer",
          ja: "写真家"
        },
        price: 15000
      },
      {
        name: {
          ru: "Традиционная музыка",
          en: "Traditional music",
          ja: "伝統音楽"
        },
        price: 10000
      }
    ]
  },
  {
    id: "art-classes",
    category: "culture",
    type: "cultural",
    tags: {
      ru: ["культура", "искусство", "мастер-класс"],
      en: ["culture", "art", "masterclass"],
      ja: ["文化", "芸術", "体験教室"]
    },
    title: {
      ru: "Уроки каллиграфии/оригами/икебаны",
      en: "Calligraphy/origami/ikebana lessons",
      ja: "書道・折り紙・生け花教室"
    },
    shortDescription: {
      ru: "Мастер-классы по традиционным японским искусствам",
      en: "Masterclasses in traditional Japanese arts",
      ja: "伝統的な日本の芸術体験教室"
    },
    description: {
      ru: "Мастер-классы по традиционным японским искусствам. Все материалы включены, готовая работа в подарок.",
      en: "Masterclasses in traditional Japanese arts. All materials included, finished work as a gift.",
      ja: "伝統的な日本の芸術体験教室。全材料込み、完成作品をプレゼント。"
    },
    image: "https://source.unsplash.com/featured/?calligraphy,origami,ikebana",
    price: 4000,
    priceType: "from",
    currency: "JPY",
    duration: "1-3 hours",
    includes: {
      ru: [
        "Все материалы и инструменты",
        "Пошаговое обучение с мастером",
        "История и философия искусства",
        "Готовая работа в подарок",
        "Сертификат участника"
      ],
      en: [
        "All materials and tools",
        "Step-by-step instruction with master",
        "Art history and philosophy",
        "Finished work as gift",
        "Participation certificate"
      ],
      ja: [
        "全材料・道具",
        "師匠による段階的指導",
        "芸術の歴史と哲学",
        "完成作品をプレゼント",
        "参加証明書"
      ]
    },
    options: [
      {
        name: {
          ru: "Каллиграфия (1.5 часа)",
          en: "Calligraphy (1.5 hours)",
          ja: "書道（1.5時間）"
        },
        price: 6000,
        description: {
          ru: "Иероглифы кисточкой",
          en: "Characters with brush",
          ja: "筆による文字"
        }
      },
      {
        name: {
          ru: "Оригами (1 час)",
          en: "Origami (1 hour)",
          ja: "折り紙（1時間）"
        },
        price: 4000,
        description: {
          ru: "Искусство складывания бумаги",
          en: "Paper folding art",
          ja: "紙折り芸術"
        }
      },
      {
        name: {
          ru: "Икебана (2 часа)",
          en: "Ikebana (2 hours)",
          ja: "生け花（2時間）"
        },
        price: 8000,
        description: {
          ru: "Японская аранжировка цветов",
          en: "Japanese flower arrangement",
          ja: "日本の花の配置"
        }
      },
      {
        name: {
          ru: "Комбинированный (3 часа)",
          en: "Combined (3 hours)",
          ja: "組み合わせ（3時間）"
        },
        price: 12000,
        description: {
          ru: "2-3 искусства за урок",
          en: "2-3 arts per lesson",
          ja: "1レッスンで2-3の芸術"
        }
      }
    ]
  },
  {
    id: "mobile-internet",
    category: "technology",
    type: "service",
    tags: {
      ru: ["технологии", "интернет", "связь"],
      en: ["technology", "internet", "communication"],
      ja: ["技術", "インターネット", "通信"]
    },
    title: {
      ru: "Аренда мобильного интернета",
      en: "Mobile internet rental",
      ja: "モバイルインターネットレンタル"
    },
    shortDescription: {
      ru: "Надежный мобильный интернет по всей Японии",
      en: "Reliable mobile internet throughout Japan",
      ja: "日本全国で信頼できるモバイルインターネット"
    },
    description: {
      ru: "Надежный мобильный интернет по всей Японии. SIM-карты, Pocket WiFi, eSIM. Покрытие 99% территории.",
      en: "Reliable mobile internet throughout Japan. SIM cards, Pocket WiFi, eSIM. 99% territory coverage.",
      ja: "日本全国で信頼できるモバイルインターネット。SIMカード、ポケットWiFi、eSIM。99%の地域カバー。"
    },
    image: "https://source.unsplash.com/featured/?wifi,mobile,japan",
    price: 500,
    priceType: "per day",
    currency: "JPY",
    duration: "per day",
    includes: {
      ru: [
        "99% покрытие территории Японии",
        "4G LTE до 150 Мбит/с",
        "Одновременно до 10 устройств",
        "Доставка в аэропорт/отель",
        "Техническая поддержка"
      ],
      en: [
        "99% Japan territory coverage",
        "4G LTE up to 150 Mbps",
        "Up to 10 devices simultaneously",
        "Airport/hotel delivery",
        "Technical support"
      ],
      ja: [
        "日本の99%の地域カバー",
        "4G LTE最大150Mbps",
        "同時最大10台",
        "空港・ホテル配送",
        "技術サポート"
      ]
    },
    options: [
      {
        name: {
          ru: "Базовый (1GB/день)",
          en: "Basic (1GB/day)",
          ja: "ベーシック（1GB/日）"
        },
        price: 500,
        description: {
          ru: "1-3 дня использования",
          en: "1-3 days usage",
          ja: "1-3日使用"
        }
      },
      {
        name: {
          ru: "Стандартный (3GB/день)",
          en: "Standard (3GB/day)",
          ja: "スタンダード（3GB/日）"
        },
        price: 800,
        description: {
          ru: "4-14 дней использования",
          en: "4-14 days usage",
          ja: "4-14日使用"
        }
      },
      {
        name: {
          ru: "Безлимитный",
          en: "Unlimited",
          ja: "無制限"
        },
        price: 1200,
        description: {
          ru: "Без ограничений по трафику",
          en: "No traffic restrictions",
          ja: "トラフィック制限なし"
        }
      }
    ],
    extras: [
      {
        name: {
          ru: "Дополнительная батарея",
          en: "Additional battery",
          ja: "追加バッテリー"
        },
        price: 200
      },
      {
        name: {
          ru: "Возврат по почте",
          en: "Mail return",
          ja: "郵送返却"
        },
        price: 300
      }
    ]
  }
];

// Категории услуг
export const serviceCategories = [
  {
    id: "transport",
    title: {
      ru: "Транспорт",
      en: "Transport",
      ja: "交通"
    },
    icon: "🚗"
  },
  {
    id: "culture",
    title: {
      ru: "Культура",
      en: "Culture",
      ja: "文化"
    },
    icon: "🎭"
  },
  {
    id: "food",
    title: {
      ru: "Еда и напитки",
      en: "Food & Drinks",
      ja: "食べ物・飲み物"
    },
    icon: "🍱"
  },
  {
    id: "photography",
    title: {
      ru: "Фотография",
      en: "Photography",
      ja: "写真"
    },
    icon: "📸"
  },
  {
    id: "wellness",
    title: {
      ru: "Здоровье и релакс",
      en: "Wellness",
      ja: "健康・リラックス"
    },
    icon: "♨️"
  },
  {
    id: "entertainment",
    title: {
      ru: "Развлечения",
      en: "Entertainment",
      ja: "エンターテイメント"
    },
    icon: "🎪"
  },
  {
    id: "planning",
    title: {
      ru: "Планирование",
      en: "Planning",
      ja: "企画"
    },
    icon: "📋"
  },
  {
    id: "seasonal",
    title: {
      ru: "Сезонные",
      en: "Seasonal",
      ja: "季節限定"
    },
    icon: "🌸"
  },
  {
    id: "technology",
    title: {
      ru: "Технологии",
      en: "Technology",
      ja: "技術"
    },
    icon: "📱"
  }
];

// Типы услуг
export const serviceTypes = [
  {
    id: "popular",
    title: {
      ru: "Популярные",
      en: "Popular",
      ja: "人気"
    }
  },
  {
    id: "cultural",
    title: {
      ru: "Культурные",
      en: "Cultural",
      ja: "文化的"
    }
  },
  {
    id: "service",
    title: {
      ru: "Услуги",
      en: "Services",
      ja: "サービス"
    }
  },
  {
    id: "seasonal",
    title: {
      ru: "Сезонные",
      en: "Seasonal",
      ja: "季節限定"
    }
  }
];

// Функции-помощники
export const getServicesByCategory = (categoryId) => {
  return servicesData.filter(service => service.category === categoryId);
};

export const getServicesByType = (typeId) => {
  return servicesData.filter(service => service.type === typeId);
};

export const getPopularServices = () => {
  return servicesData.filter(service => service.type === 'popular').slice(0, 6);
};

export const getServiceById = (serviceId) => {
  return servicesData.find(service => service.id === serviceId);
};