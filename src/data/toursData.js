// src/data/toursData.js
// Данные о турах на основе файла "туры"

export const toursData = [
  // Всеяпонские туры
  {
    id: "all-japan-golden-ring",
    category: "all-japan",
    type: "popular",
    tags: {
      ru: ["популярное"],
      en: ["popular"],
      ja: ["人気"]
    },
    title: {
      ru: 'Гранд-тур "Золотое кольцо Японии"',
      en: 'Grand Tour "Golden Ring of Japan"',
      ja: 'グランドツアー「日本のゴールデンリング」'
    },
    description: {
      ru: 'Комплексный тур, охватывающий основные достопримечательности Японии от Токио до Миядзимы. Идеально подходит для первого знакомства со страной.',
      en: 'A comprehensive tour covering the main attractions in Japan from Tokyo to Miyajima. Perfect for first-time visitors.',
      ja: '東京から宮島まで日本の主な観光スポットを網羅した総合的なツアー。初めての訪問者に最適です。'
    },
    route: {
      ru: ["Токио", "Никко", "Киото", "Нара", "Осака", "Хиросима", "Миядзима"],
      en: ["Tokyo", "Nikko", "Kyoto", "Nara", "Osaka", "Hiroshima", "Miyajima"],
      ja: ["東京", "日光", "京都", "奈良", "大阪", "広島", "宮島"]
    },
    routeDescription: {
      ru: 'Путешествие от столицы к древним городам, с посещением самых значимых храмов, садов и исторических мест Японии',
      en: 'Journey from the capital to ancient cities, visiting the most significant temples, gardens, and historical sites of Japan',
      ja: '首都から古都まで、日本の最も重要な寺院、庭園、歴史的名所を訪れる旅'
    },
    duration: 12,
    price: 3500,
    groupSize: 15,
    image: 'https://source.unsplash.com/featured/?japan,temple',
    seasons: ["spring", "autumn"],
    seasonDescription: {
      ru: 'Весна: цветение сакуры, осень: красные клены',
      en: 'Spring: cherry blossoms, autumn: red maples',
      ja: '春：桜の花、秋：紅葉'
    },
    highlights: {
      ru: [
        "Токийский мегаполис и его контрасты",
        "Древние храмы Никко в окружении горных пейзажей",
        "Традиционные сады и храмы Киото",
        "Священные олени Нары и Великий Будда",
        "Оживленный Осака с его кулинарными традициями",
        "Мемориальный парк мира в Хиросиме",
        "Святилище Ицукусима на острове Миядзима"
      ],
      en: [
        "Tokyo metropolis and its contrasts",
        "Ancient Nikko temples surrounded by mountain landscapes",
        "Traditional gardens and temples of Kyoto",
        "Sacred deer of Nara and the Great Buddha",
        "Vibrant Osaka with its culinary traditions",
        "Hiroshima Peace Memorial Park",
        "Itsukushima Shrine on Miyajima Island"
      ],
      ja: [
        "東京の大都市とその対比",
        "山の風景に囲まれた日光の古代寺院",
        "京都の伝統的な庭園と寺院",
        "奈良の神聖な鹿と大仏",
        "食文化で賑わう大阪",
        "広島平和記念公園",
        "宮島の厳島神社"
      ]
    },
    itinerary: [
      {
        day: 1,
        title: {
          ru: "Прибытие в Токио",
          en: "Arrival in Tokyo",
          ja: "東京到着"
        },
        description: {
          ru: "Встреча в аэропорту, трансфер в отель. Краткое знакомство с окрестностями и приветственный ужин.",
          en: "Meeting at the airport, transfer to the hotel. Brief introduction to the surroundings and welcome dinner.",
          ja: "空港でのお出迎え、ホテルへの送迎。周辺の簡単な紹介と歓迎夕食会。"
        }
      },
      {
        day: 2,
        title: {
          ru: "Токио: современность и традиции",
          en: "Tokyo: Modernity and Traditions",
          ja: "東京：現代性と伝統"
        },
        description: {
          ru: "Осмотр основных достопримечательностей Токио: храм Асакуса, сад Хамарикю, район Сибуя и Токийская телебашня.",
          en: "Tour of Tokyo's main attractions: Asakusa Temple, Hamarikyu Gardens, Shibuya district, and Tokyo Tower.",
          ja: "東京の主な観光スポット巡り：浅草寺、浜離宮庭園、渋谷区、東京タワー。"
        }
      },
      {
        day: 3,
        title: {
          ru: "Экскурсия в Никко",
          en: "Excursion to Nikko",
          ja: "日光への小旅行"
        },
        description: {
          ru: "Поездка в Никко, осмотр храмового комплекса Тосёгу, водопада Кэгон и озера Тюдзэндзи.",
          en: "Trip to Nikko, tour of the Toshogu Shrine complex, Kegon Falls, and Lake Chuzenji.",
          ja: "日光への旅、東照宮、華厳の滝、中禅寺湖の見学。"
        }
      },
      {
        day: 4,
        title: {
          ru: "Токио - Киото на синкансене",
          en: "Tokyo to Kyoto by Shinkansen",
          ja: "東京から京都へ新幹線で"
        },
        description: {
          ru: "Переезд на скоростном поезде в Киото. Вечерняя прогулка по району Гион.",
          en: "Transfer to Kyoto by high-speed train. Evening walk through the Gion district.",
          ja: "新幹線で京都へ移動。夕方に祇園地区を散策。"
        }
      },
      {
        day: 5,
        title: {
          ru: "Киото: храмы и сады",
          en: "Kyoto: Temples and Gardens",
          ja: "京都：寺院と庭園"
        },
        description: {
          ru: "Посещение храмов Кинкаку-дзи (Золотой павильон), Рёан-дзи (храм с дзен-садом) и святилища Фусими Инари.",
          en: "Visit to Kinkaku-ji (Golden Pavilion), Ryoan-ji (temple with Zen garden), and Fushimi Inari Shrine.",
          ja: "金閣寺、龍安寺（禅の庭園がある寺院）、伏見稲荷大社を訪問。"
        }
      }
    ]
  },
  {
    id: "culinary-journey",
    category: "all-japan",
    type: "food",
    tags: {
      ru: ["еда"],
      en: ["food"],
      ja: ["食べ物"]
    },
    title: {
      ru: "Кулинарное путешествие по Японии",
      en: "Culinary Journey Through Japan",
      ja: "日本の食の旅"
    },
    description: {
      ru: "Гастрономический тур для знакомства с региональными кухнями Японии - от суши Токио до окономияки Осаки и кайсэки Киото.",
      en: "A gastronomic tour to discover Japanese regional cuisines - from Tokyo sushi to Osaka okonomiyaki and Kyoto kaiseki.",
      ja: "東京の寿司から大阪のお好み焼き、京都の懐石料理まで、日本の郷土料理を発見する美食ツアー。"
    },
    route: {
      ru: ["Токио", "Осака", "Киото", "Кобе"],
      en: ["Tokyo", "Osaka", "Kyoto", "Kobe"],
      ja: ["東京", "大阪", "京都", "神戸"]
    },
    routeDescription: {
      ru: "Путешествие по кулинарным столицам Японии с мастер-классами и дегустациями",
      en: "Journey through Japan's culinary capitals with masterclasses and tastings",
      ja: "マスタークラスと試食付きの日本の食の都を巡る旅"
    },
    duration: 10,
    price: 3200,
    groupSize: 12,
    image: "https://source.unsplash.com/featured/?japanese,food",
    seasons: ["all-year"],
    seasonDescription: {
      ru: "Сезонные особенности блюд в каждом регионе",
      en: "Seasonal specialties in each region",
      ja: "各地域の季節ごとの特産品"
    },
    highlights: {
      ru: [
        "Мастер-класс по приготовлению суши от токийского шеф-повара",
        "Уличная еда на рынке Куромон в Осаке",
        "Традиционный обед кайсэки в Киото",
        "Дегустация знаменитой говядины вагю в Кобе",
        "Посещение сакэ-пивоварни с дегустацией",
        "Чайная церемония в традиционном чайном домике",
        "Кулинарные сувениры и специи с местных рынков"
      ],
      en: [
        "Sushi cooking masterclass from a Tokyo chef",
        "Street food at Kuromon Market in Osaka",
        "Traditional kaiseki lunch in Kyoto",
        "Tasting famous Wagyu beef in Kobe",
        "Visit to a sake brewery with tasting",
        "Tea ceremony in a traditional tea house",
        "Culinary souvenirs and spices from local markets"
      ],
      ja: [
        "東京のシェフによる寿司作り体験",
        "大阪の黒門市場での屋台料理",
        "京都での伝統的な懐石料理ランチ",
        "神戸での有名な和牛の試食",
        "酒蔵見学と試飲",
        "伝統的な茶室での茶道体験",
        "地元市場での料理のお土産やスパイス"
      ]
    }
  },
  {
    id: "japan-art-tour",
    category: "all-japan",
    type: "cultural",
    tags: {
      ru: ["культура"],
      en: ["culture"],
      ja: ["文化"]
    },
    title: {
      ru: "Япония для ценителей искусства",
      en: "Japan for Art Lovers",
      ja: "芸術愛好家のための日本"
    },
    description: {
      ru: "Погружение в японское искусство: от традиционных музеев Токио до современных инсталляций на острове Наосима и традиционных ремесел Киото.",
      en: "Immersion in Japanese art: from traditional Tokyo museums to contemporary installations on Naoshima Island and traditional Kyoto crafts.",
      ja: "日本芸術への没入：東京の伝統的な美術館から直島の現代アートインスタレーション、京都の伝統工芸まで。"
    },
    route: {
      ru: ["Токио", "Наосима", "Киото"],
      en: ["Tokyo", "Naoshima", "Kyoto"],
      ja: ["東京", "直島", "京都"]
    },
    routeDescription: {
      ru: "Путешествие через призму искусства: от древних мастеров до современных художников",
      en: "Journey through the prism of art: from ancient masters to contemporary artists",
      ja: "芸術の視点からの旅：古代の巨匠から現代のアーティストまで"
    },
    duration: 9,
    price: 2900,
    groupSize: 10,
    image: "https://source.unsplash.com/featured/?japan,art",
    seasons: ["all-year"],
    seasonDescription: {
      ru: "Доступно круглый год с сезонными выставками",
      en: "Available year-round with seasonal exhibitions",
      ja: "季節ごとの展示会と共に一年中利用可能"
    },
    highlights: {
      ru: [
        "Токийский национальный музей и его коллекция традиционного искусства",
        "Музей цифрового искусства teamLab Borderless",
        "Остров Наосима - музей под открытым небом",
        "Мастер-классы по традиционным ремеслам в Киото",
        "Посещение мастерской кимоно с демонстрацией техники окрашивания",
        "Сады и архитектура как формы искусства",
        "Современные галереи и инсталляции"
      ],
      en: [
        "Tokyo National Museum and its collection of traditional art",
        "teamLab Borderless Digital Art Museum",
        "Naoshima Island - an open-air museum",
        "Traditional crafts workshops in Kyoto",
        "Visit to a kimono workshop with dyeing technique demonstration",
        "Gardens and architecture as art forms",
        "Contemporary galleries and installations"
      ],
      ja: [
        "東京国立博物館とその伝統美術コレクション",
        "チームラボボーダレスデジタルアート美術館",
        "野外美術館としての直島",
        "京都での伝統工芸ワークショップ",
        "染色技術のデモンストレーション付きの着物工房訪問",
        "芸術形式としての庭園と建築",
        "現代ギャラリーとインスタレーション"
      ]
    }
  },
  {
    id: "samurai-path",
    category: "all-japan",
    type: "historical",
    tags: {
      ru: ["история"],
      en: ["history"],
      ja: ["歴史"]
    },
    title: {
      ru: "Путь самурая",
      en: "Way of the Samurai",
      ja: "サムライの道"
    },
    description: {
      ru: "Исторический тур по следам японских воинов с посещением замков, самурайских кварталов и мест знаменитых сражений.",
      en: "Historical tour following the footsteps of Japanese warriors, visiting castles, samurai quarters, and famous battle sites.",
      ja: "城、武家屋敷、有名な合戦地を訪れる日本の武士の足跡をたどる歴史ツアー。"
    },
    route: {
      ru: ["Химэдзи", "Мацумото", "Канадзава", "Кумамото"],
      en: ["Himeji", "Matsumoto", "Kanazawa", "Kumamoto"],
      ja: ["姫路", "松本", "金沢", "熊本"]
    },
    routeDescription: {
      ru: "Путешествие по историческим замкам и местам самурайской славы",
      en: "Journey through historic castles and places of samurai glory",
      ja: "歴史的な城郭とサムライの栄光の地を巡る旅"
    },
    duration: 11,
    price: 3100,
    groupSize: 12,
    image: "https://source.unsplash.com/featured/?japan,castle",
    seasons: ["spring", "autumn"],
    seasonDescription: {
      ru: "Лучшее время: весна (цветение сакуры вокруг замков) и осень (красные клены)",
      en: "Best time: spring (cherry blossoms around castles) and autumn (red maples)",
      ja: "ベストシーズン：春（城の周りの桜）と秋（紅葉）"
    },
    highlights: {
      ru: [
        "Замок Белой Цапли в Химэдзи - объект Всемирного наследия ЮНЕСКО",
        "Замок Ворона в Мацумото с его уникальной черной архитектурой",
        "Самурайский квартал Нагамати в Канадзаве",
        "Реконструированный замок Кумамото",
        "Демонстрация боевых искусств и оружия самураев",
        "Посещение кузницы традиционных мечей",
        "Музеи с коллекциями доспехов и военной истории"
      ],
      en: [
        "Himeji Castle (White Heron Castle) - UNESCO World Heritage Site",
        "Matsumoto Castle (Crow Castle) with its unique black architecture",
        "Nagamachi Samurai District in Kanazawa",
        "Reconstructed Kumamoto Castle",
        "Martial arts and samurai weapons demonstration",
        "Visit to a traditional sword forge",
        "Museums with collections of armor and military history"
      ],
      ja: [
        "姫路城（白鷺城）- ユネスコ世界遺産",
        "松本城（烏城）とその独特な黒い建築",
        "金沢の長町武家屋敷跡",
        "再建された熊本城",
        "武道と侍の武器の実演",
        "伝統的な刀鍛冶の訪問",
        "鎧と軍事史のコレクションを持つ博物館"
      ]
    }
  },

  // Токио и окрестности
  {
    id: "classic-tokyo",
    category: "tokyo",
    type: "popular",
    tags: {
      ru: ["популярное"],
      en: ["popular"],
      ja: ["人気"]
    },
    title: {
      ru: "Классический тур по Токио",
      en: "Classic Tokyo Tour",
      ja: "クラシック東京ツアー"
    },
    description: {
      ru: "Знакомство с основными достопримечательностями японской столицы: от традиционного района Асакуса до футуристического Одайба.",
      en: "Introduction to the main attractions of the Japanese capital: from the traditional Asakusa district to futuristic Odaiba.",
      ja: "伝統的な浅草から未来的なお台場まで、日本の首都の主な見どころを紹介。"
    },
    route: {
      ru: ["Асакуса", "Уэно", "Императорский дворец", "Сибуя", "Синдзюку"],
      en: ["Asakusa", "Ueno", "Imperial Palace", "Shibuya", "Shinjuku"],
      ja: ["浅草", "上野", "皇居", "渋谷", "新宿"]
    },
    routeDescription: {
      ru: "Обзорный маршрут по знаковым районам японской столицы",
      en: "Overview route through the iconic districts of the Japanese capital",
      ja: "日本の首都の象徴的な地区を巡る概要ルート"
    },
    duration: 4,
    price: 800,
    groupSize: 15,
    image: "https://source.unsplash.com/featured/?tokyo,skyline",
    seasons: ["spring", "autumn"],
    seasonDescription: {
      ru: "Весна: сакура в парке Уэно, осень: клены в садах",
      en: "Spring: cherry blossoms in Ueno Park, autumn: maples in gardens",
      ja: "春：上野公園の桜、秋：庭園の紅葉"
    },
    highlights: {
      ru: [
        "Храм Сэнсо-дзи и торговая улица Накамисэ в Асакусе",
        "Парк Уэно и его музеи",
        "Внешние сады Императорского дворца",
        "Знаменитый перекресток Сибуя и статуя верного пса Хатико",
        "Токийская мэрия с обзорной площадкой в Синдзюку",
        "Традиционные сады Хамарикю",
        "Круиз по реке Сумида"
      ],
      en: [
        "Senso-ji Temple and Nakamise Shopping Street in Asakusa",
        "Ueno Park and its museums",
        "Imperial Palace Outer Gardens",
        "Famous Shibuya Crossing and loyal dog Hachiko statue",
        "Tokyo Metropolitan Government Building with observation deck in Shinjuku",
        "Traditional Hamarikyu Gardens",
        "Sumida River Cruise"
      ],
      ja: [
        "浅草の浅草寺と仲見世通り",
        "上野公園とその美術館",
        "皇居外苑",
        "有名な渋谷スクランブル交差点と忠犬ハチ公像",
        "新宿の展望台がある東京都庁",
        "伝統的な浜離宮庭園",
        "隅田川クルーズ"
      ]
    }
  },
  {
    id: "modern-tokyo",
    category: "tokyo",
    type: "city",
    tags: {
      ru: ["город"],
      en: ["city"],
      ja: ["都市"]
    },
    title: {
      ru: "Современный Токио",
      en: "Modern Tokyo",
      ja: "モダン東京"
    },
    description: {
      ru: "Погружение в футуристическую сторону японской столицы: технологические хабы, модные кварталы и новейшая архитектура.",
      en: "Immersion in the futuristic side of the Japanese capital: tech hubs, fashion districts, and cutting-edge architecture.",
      ja: "日本の首都の未来的な側面への没入：テクノロジーハブ、ファッション街、最先端の建築。"
    },
    route: {
      ru: ["Сибуя", "Синдзюку", "Роппонги", "Одайба"],
      en: ["Shibuya", "Shinjuku", "Roppongi", "Odaiba"],
      ja: ["渋谷", "新宿", "六本木", "お台場"]
    },
    routeDescription: {
      ru: "Маршрут по самым современным и технологичным районам Токио",
      en: "Route through the most modern and technological districts of Tokyo",
      ja: "東京の最も現代的でハイテクな地区を巡るルート"
    },
    duration: 3,
    price: 700,
    groupSize: 12,
    image: "https://source.unsplash.com/featured/?tokyo,modern",
    seasons: ["all-year"],
    seasonDescription: {
      ru: "Круглый год, зимой - впечатляющие иллюминации",
      en: "Year-round, impressive illuminations in winter",
      ja: "一年中、冬には印象的なイルミネーション"
    },
    highlights: {
      ru: [
        "Новый комплекс Сибуя Скрэмбл Сквер и смотровая площадка Сибуя Скай",
        "Район небоскребов Синдзюку и парк Синдзюку Гёэн",
        "Комплекс Роппонги Хиллз и музей искусств Мори",
        "Остров Одайба с Диверсити Токио и статуей Гандама",
        "Посещение центра цифрового искусства teamLab",
        "Токийский международный форум - шедевр современной архитектуры",
        "Радужный мост и футуристический пейзаж Токийского залива"
      ],
      en: [
        "New Shibuya Scramble Square complex and Shibuya Sky observation deck",
        "Shinjuku skyscraper district and Shinjuku Gyoen Park",
        "Roppongi Hills complex and Mori Art Museum",
        "Odaiba Island with Diversity Tokyo and Gundam statue",
        "Visit to teamLab digital art center",
        "Tokyo International Forum - a masterpiece of modern architecture",
        "Rainbow Bridge and futuristic landscape of Tokyo Bay"
      ],
      ja: [
        "新しい渋谷スクランブルスクエア複合施設と渋谷スカイ展望台",
        "新宿の高層ビル街と新宿御苑",
        "六本木ヒルズ複合施設と森美術館",
        "ダイバーシティ東京とガンダム像があるお台場",
        "チームラボデジタルアートセンターへの訪問",
        "現代建築の傑作である東京国際フォーラム",
        "レインボーブリッジと東京湾の未来的な景観"
      ]
    }
  },

  // Добавим еще один тур из категории "Специальные туры"
  {
    id: "rural-japan",
    category: "special",
    type: "authentic",
    tags: {
      ru: ["популярное", "природа"],
      en: ["popular", "nature"],
      ja: ["人気", "自然"]
    },
    title: {
      ru: "Сельская Япония: традиционные деревни",
      en: "Rural Japan: Traditional Villages",
      ja: "田舎の日本：伝統的な村々"
    },
    description: {
      ru: "Путешествие в глубинку Японии, где сохранились древние традиции, уникальная архитектура и аутентичный образ жизни.",
      en: "Journey into the Japanese countryside where ancient traditions, unique architecture, and authentic lifestyle have been preserved.",
      ja: "古代の伝統、ユニークな建築、本物の生活様式が保存されている日本の田舎への旅。"
    },
    route: {
      ru: ["5-я станция Фудзи", "Озеро Кавагутико", "Деревня Осино Хаккай"],
      en: ["Mt. Fuji 5th Station", "Lake Kawaguchiko", "Oshino Hakkai Village"],
      ja: ["富士山5合目", "河口湖", "忍野八海"]
    },
    routeDescription: {
      ru: "Погружение в традиционную сельскую Японию вдали от туристических маршрутов",
      en: "Immersion in traditional rural Japan away from tourist routes",
      ja: "観光ルートから離れた伝統的な日本の田舎への没入"
    },
    duration: 6,
    price: 1800,
    groupSize: 8,
    image: "https://source.unsplash.com/featured/?japan,village",
    seasons: ["all-year", "winter"],
    seasonDescription: {
      ru: "Зимой: деревни под снегом с подсветкой особенно живописны",
      en: "Winter: villages under snow with illumination are especially picturesque",
      ja: "冬：雪と照明に包まれた村々は特に絵のように美しい"
    },
    highlights: {
      ru: [
        "Деревня Сиракава-го с традиционными домами гассё-дзукури (объект ЮНЕСКО)",
        "Гокаяма и ее уникальная сельская архитектура",
        "Ночевка в традиционном фермерском доме с ирори (очаг)",
        "Старинная почтовая станция Цумаго-дзюку на дороге Накасэндо",
        "Деревня Куроками с террасными рисовыми полями",
        "Участие в сельскохозяйственных работах (в зависимости от сезона)",
        "Мастер-классы по традиционным ремеслам: ткачество, изготовление бумаги васи"
      ],
      en: [
        "Shirakawa-go village with traditional gassho-zukuri houses (UNESCO site)",
        "Gokayama and its unique rural architecture",
        "Overnight stay in a traditional farmhouse with irori (hearth)",
        "Historic Tsumago-juku post town on the Nakasendo Road",
        "Kurokami village with terraced rice fields",
        "Participation in agricultural activities (depending on the season)",
        "Workshops on traditional crafts: weaving, washi papermaking"
      ],
      ja: [
        "伝統的な合掌造りの家がある白川郷（ユネスコ世界遺産）",
        "五箇山とそのユニークな田舎の建築",
        "いろり（囲炉裏）のある伝統的な農家での宿泊",
        "中山道の歴史的な宿場町、妻籠宿",
        "棚田がある黒神村",
        "農業活動への参加（季節による）",
        "伝統工芸のワークショップ：織物、和紙作り"
      ]
    }
  }
];

// Категории туров
export const tourCategories = [
  {
    id: "all-japan",
    title: {
      ru: "Всеяпонские туры",
      en: "All Japan Tours",
      ja: "全日本ツアー"
    }
  },
  {
    id: "tokyo",
    title: {
      ru: "Токио и окрестности",
      en: "Tokyo and Surroundings",
      ja: "東京と周辺"
    }
  },
  {
    id: "kyoto",
    title: {
      ru: "Киото и Кансай",
      en: "Kyoto and Kansai",
      ja: "京都と関西"
    }
  },
  {
    id: "hokkaido",
    title: {
      ru: "Хоккайдо",
      en: "Hokkaido",
      ja: "北海道"
    }
  },
  {
    id: "okinawa",
    title: {
      ru: "Окинава и Юг",
      en: "Okinawa and South",
      ja: "沖縄と南部"
    }
  },
  {
    id: "seasonal",
    title: {
      ru: "Сезонные туры",
      en: "Seasonal Tours",
      ja: "季節限定ツアー"
    }
  },
  {
    id: "special",
    title: {
      ru: "Специальные туры",
      en: "Special Tours",
      ja: "特別ツアー"
    }
  }
];

// Типы туров (для фильтрации)
export const tourTypes = [
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
    id: "food",
    title: {
      ru: "Гастрономические",
      en: "Food",
      ja: "美食"
    }
  },
  {
    id: "historical",
    title: {
      ru: "Исторические",
      en: "Historical",
      ja: "歴史的"
    }
  },
  {
    id: "nature",
    title: {
      ru: "Природа",
      en: "Nature",
      ja: "自然"
    }
  },
  {
    id: "city",
    title: {
      ru: "Городские",
      en: "City",
      ja: "都市"
    }
  },
  {
    id: "beach",
    title: {
      ru: "Пляжные",
      en: "Beach",
      ja: "ビーチ"
    }
  },
  {
    id: "authentic",
    title: {
      ru: "Аутентичные",
      en: "Authentic",
      ja: "本格的"
    }
  }
];

// Сезоны
export const seasons = [
  {
    id: "spring",
    title: {
      ru: "Весна",
      en: "Spring",
      ja: "春"
    }
  },
  {
    id: "summer",
    title: {
      ru: "Лето",
      en: "Summer",
      ja: "夏"
    }
  },
  {
    id: "autumn",
    title: {
      ru: "Осень",
      en: "Autumn",
      ja: "秋"
    }
  },
  {
    id: "winter",
    title: {
      ru: "Зима",
      en: "Winter",
      ja: "冬"
    }
  },
  {
    id: "all-year",
    title: {
      ru: "Круглый год",
      en: "All Year",
      ja: "通年"
    }
  }
];