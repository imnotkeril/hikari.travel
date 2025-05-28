// src/data/toursData.js

// Tour categories - at the top
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
    id: "regional",
    title: {
      ru: "Региональные туры",
      en: "Regional Tours",
      ja: "地域ツアー"
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

// Tour types (for filtering) - updated with correct tags
export const tourTypes = [
  {
    id: "temples",
    title: {
      ru: "Храмы",
      en: "Temples",
      ja: "寺院"
    }
  },
  {
    id: "food",
    title: {
      ru: "Еда",
      en: "Food",
      ja: "食べ物"
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
    id: "history",
    title: {
      ru: "История",
      en: "History",
      ja: "歴史"
    }
  },
  {
    id: "culture",
    title: {
      ru: "Культура",
      en: "Culture",
      ja: "文化"
    }
  },
  {
    id: "modern",
    title: {
      ru: "Современность",
      en: "Modern",
      ja: "現代"
    }
  },
  {
    id: "anime",
    title: {
      ru: "Аниме",
      en: "Anime",
      ja: "アニメ"
    }
  },
  {
    id: "onsen",
    title: {
      ru: "Онсены",
      en: "Onsen",
      ja: "温泉"
    }
  },
  {
    id: "beach",
    title: {
      ru: "Пляжи",
      en: "Beach",
      ja: "ビーチ"
    }
  },
  {
    id: "festivals",
    title: {
      ru: "Фестивали",
      en: "Festivals",
      ja: "祭り"
    }
  },
  {
    id: "flowers",
    title: {
      ru: "Цветы",
      en: "Flowers",
      ja: "花"
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
    id: "family",
    title: {
      ru: "Семейный",
      en: "Family",
      ja: "ファミリー"
    }
  },
  {
    id: "luxury",
    title: {
      ru: "Люкс",
      en: "Luxury",
      ja: "ラグジュアリー"
    }
  },
  {
    id: "activity",
    title: {
      ru: "Активность",
      en: "Activity",
      ja: "アクティビティ"
    }
  }
];

// Seasons
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

// Tours data array
export const toursData = [
  {
    id: "through-all-japan",
    category: "all-japan",
    popular: true,
    types: ["culture", "nature"],
    title: {
      ru: 'Через всю Японию',
      en: 'Through All Japan',
      ja: '日本全国縦断'
    },
    description: {
      ru: 'Уникальное путешествие через всю Японию с юга на север, охватывающее все основные регионы и туристические города. От тропической Окинавы до снежного Хоккайдо - полное погружение в разнообразие японской культуры, природы и традиций.',
      en: 'A unique journey through all of Japan from south to north, covering all major regions and tourist cities. From tropical Okinawa to snowy Hokkaido - complete immersion in the diversity of Japanese culture, nature and traditions.',
      ja: '南の沖縄から北の北海道まで、日本の全主要地域と観光都市を網羅するユニークな旅。熱帯の沖縄から雪の北海道まで、日本の文化、自然、伝統の多様性に完全に浸る。'
    },
    route: {
      ru: ["Наха (Окинава)", "Кагосима", "Фукуока", "Хиросима", "Осака", "Киото", "Нара", "Токио", "Никко", "Сендай", "Саппоро (Хоккайдо)"],
      en: ["Naha (Okinawa)", "Kagoshima", "Fukuoka", "Hiroshima", "Osaka", "Kyoto", "Nara", "Tokyo", "Nikko", "Sendai", "Sapporo (Hokkaido)"],
      ja: ["那覇（沖縄）", "鹿児島", "福岡", "広島", "大阪", "京都", "奈良", "東京", "日光", "仙台", "札幌（北海道）"]
    },
    routeDescription: {
      ru: 'Грандиозное путешествие от южных тропических островов до северных заснеженных равнин, знакомство с уникальными особенностями каждого региона',
      en: 'A grand journey from southern tropical islands to northern snowy plains, exploring the unique features of each region',
      ja: '南の熱帯の島々から北の雪に覆われた平野まで、各地域のユニークな特徴を探る壮大な旅'
    },
    duration: 21,
    price: 9000,
    groupSizeMin: 8,
    groupSizeMax: 12,
    image: '/images/tours/through-all-japan.png',
    seasons: ["spring", "summer", "autumn", "winter"],
    seasonDescription: {
      ru: 'Круглый год, каждый регион в своё лучшее время',
      en: 'Year-round, each region at its best time',
      ja: '年間を通して、各地域が最も美しい時期に'
    },
    highlights: {
      ru: [
        "Полный обзор всех регионов Японии",
        "Тропические пляжи Окинавы и вулканы Кюсю",
        "Древние столицы Киото и Нара",
        "Современная культура Токио",
        "Природные красоты Хоккайдо",
        "Уникальная кухня каждого региона",
        "Разнообразие климатических зон",
        "От субтропиков до северных лесов"
      ],
      en: [
        "Complete overview of all regions of Japan",
        "Tropical beaches of Okinawa and volcanoes of Kyushu",
        "Ancient capitals Kyoto and Nara",
        "Modern culture of Tokyo",
        "Natural beauty of Hokkaido",
        "Unique cuisine of each region",
        "Variety of climate zones",
        "From subtropics to northern forests"
      ],
      ja: [
        "日本全地域の完全な概要",
        "沖縄の熱帯ビーチと九州の火山",
        "古代の都、京都と奈良",
        "東京の現代文化",
        "北海道の自然美",
        "各地域のユニークな料理",
        "多様な気候帯",
        "亜熱帯から北方森林まで"
      ]
    },
    itinerary: [
      {
        day: 1,
        title: {
          ru: "Прибытие в Наху (Окинава)",
          en: "Arrival in Naha (Okinawa)",
          ja: "那覇（沖縄）到着"
        },
        description: {
          ru: "Встреча в аэропорту Наха, размещение в отеле. Знакомство с Окинавой и её уникальной культурой.",
          en: "Meeting at Naha Airport, hotel accommodation. Introduction to Okinawa and its unique culture.",
          ja: "那覇空港でのお出迎え、ホテルへのチェックイン。沖縄とその独特な文化の紹介。"
        }
      },
      {
        day: 3,
        title: {
          ru: "Кагосима - ворота Кюсю",
          en: "Kagoshima - gateway to Kyushu",
          ja: "鹿児島 - 九州の玄関口"
        },
        description: {
          ru: "Перелет в Кагосиму. Сакурадзима (активный вулкан), традиционные сады Сэнган-эн.",
          en: "Flight to Kagoshima. Sakurajima (active volcano), traditional Sengan-en gardens.",
          ja: "鹿児島へのフライト。桜島（活火山）、伝統的な仙巌園。"
        }
      },
      {
        day: 4,
        title: {
          ru: "Фукуока - северные ворота Кюсю",
          en: "Fukuoka - northern gateway of Kyushu",
          ja: "福岡 - 九州北の玄関口"
        },
        description: {
          ru: "Переезд в Фукуоку. Храм Дадзайфу Тэнмангу, современные районы города.",
          en: "Transfer to Fukuoka. Dazaifu Tenmangu Shrine, modern city districts.",
          ja: "福岡への移動。太宰府天満宮、市内の現代的な地区。"
        }
      },
      {
        day: 5,
        title: {
          ru: "Хиросима - город мира",
          en: "Hiroshima - city of peace",
          ja: "広島 - 平和の街"
        },
        description: {
          ru: "Переезд в Хиросиму. Мемориальный парк мира, музей мира.",
          en: "Transfer to Hiroshima. Peace Memorial Park, Peace Museum.",
          ja: "広島への移動。平和記念公園、平和記念資料館。"
        }
      },
      {
        day: 6,
        title: {
          ru: "Миядзима - священный остров",
          en: "Miyajima - sacred island",
          ja: "宮島 - 神聖な島"
        },
        description: {
          ru: "Поездка на остров Миядзима. Святилище Ицукусима с плавающими тории.",
          en: "Trip to Miyajima Island. Itsukushima Shrine with floating torii.",
          ja: "宮島への旅行。浮かぶ鳥居のある厳島神社。"
        }
      },
      {
        day: 7,
        title: {
          ru: "Осака - кулинарная столица",
          en: "Osaka - culinary capital",
          ja: "大阪 - 美食の都"
        },
        description: {
          ru: "Переезд в Осаку. Замок Осаки, район Дотонбори, дегустация такояки и окономияки.",
          en: "Transfer to Osaka. Osaka Castle, Dotonbori district, tasting takoyaki and okonomiyaki.",
          ja: "大阪への移動。大阪城、道頓堀地区、たこ焼きとお好み焼きの試食。"
        }
      },
      {
        day: 8,
        title: {
          ru: "Киото - древняя столица",
          en: "Kyoto - ancient capital",
          ja: "京都 - 古都"
        },
        description: {
          ru: "Переезд в Киото. Храмы Кинкаку-дзи и Киёмидзу-дэра, район Гион.",
          en: "Transfer to Kyoto. Kinkaku-ji and Kiyomizu-dera temples, Gion district.",
          ja: "京都への移動。金閣寺と清水寺、祇園地区。"
        }
      },
      {
        day: 9,
        title: {
          ru: "Нара - первая столица",
          en: "Nara - first capital",
          ja: "奈良 - 最初の都"
        },
        description: {
          ru: "Поездка в Нару. Парк с оленями, храм Тодай-дзи с Великим Буддой.",
          en: "Trip to Nara. Deer park, Todai-ji temple with the Great Buddha.",
          ja: "奈良への旅行。鹿公園、大仏のある東大寺。"
        }
      },
      {
        day: 10,
        title: {
          ru: "Токио - современная столица",
          en: "Tokyo - modern capital",
          ja: "東京 - 現代の首都"
        },
        description: {
          ru: "Переезд в Токио на синкансене. Районы Сибуя и Синдзюку.",
          en: "Transfer to Tokyo by shinkansen. Shibuya and Shinjuku districts.",
          ja: "新幹線で東京へ移動。渋谷と新宿地区。"
        }
      },
      {
        day: 11,
        title: {
          ru: "Токио - традиции и современность",
          en: "Tokyo - traditions and modernity",
          ja: "東京 - 伝統と現代"
        },
        description: {
          ru: "Храм Асакуса, Императорский дворец, современные районы Роппонги и Одайба.",
          en: "Asakusa Temple, Imperial Palace, modern Roppongi and Odaiba districts.",
          ja: "浅草寺、皇居、現代的な六本木とお台場地区。"
        }
      },
      {
        day: 12,
        title: {
          ru: "Никко - горы и храмы",
          en: "Nikko - mountains and temples",
          ja: "日光 - 山と寺院"
        },
        description: {
          ru: "Поездка в Никко. Святилище Тосёгу, озеро Тюдзэндзи, водопад Кэгон.",
          en: "Trip to Nikko. Toshogu Shrine, Lake Chuzenji, Kegon Falls.",
          ja: "日光への旅行。東照宮、中禅寺湖、華厳の滝。"
        }
      },
      {
        day: 13,
        title: {
          ru: "Сендай - ворота Тохоку",
          en: "Sendai - gateway to Tohoku",
          ja: "仙台 - 東北の玄関口"
        },
        description: {
          ru: "Переезд в Сендай. Замок Аоба, мавзолей Дате Масамунэ, местная кухня.",
          en: "Transfer to Sendai. Aoba Castle, Date Masamune mausoleum, local cuisine.",
          ja: "仙台への移動。青葉城、伊達政宗霊廟、地元料理。"
        }
      },
      {
        day: 14,
        title: {
          ru: "Мацусима - три великих вида",
          en: "Matsushima - three great views",
          ja: "松島 - 日本三景"
        },
        description: {
          ru: "Поездка в Мацусиму - один из трех самых красивых видов Японии.",
          en: "Trip to Matsushima - one of Japan's three most beautiful views.",
          ja: "日本三景の一つ、松島への旅行。"
        }
      },
      {
        day: 15,
        title: {
          ru: "Саппоро (Хоккайдо) - прибытие",
          en: "Sapporo (Hokkaido) - arrival",
          ja: "札幌（北海道）- 到着"
        },
        description: {
          ru: "Перелет в Саппоро. Знакомство с Хоккайдо, местная кухня, пивоварня Саппоро.",
          en: "Flight to Sapporo. Introduction to Hokkaido, local cuisine, Sapporo brewery.",
          ja: "札幌へのフライト。北海道の紹介、地元料理、サッポロビール園。"
        }
      },
      {
        day: 16,
        title: {
          ru: "Отару или Хакодате",
          en: "Otaru or Hakodate",
          ja: "小樽または函館"
        },
        description: {
          ru: "Поездка в Отару (зимой) или Хакодате (летом). Исторические районы.",
          en: "Trip to Otaru (winter) or Hakodate (summer). Historic districts.",
          ja: "小樽（冬）または函館（夏）への旅行。歴史地区。"
        }
      },
      {
        day: 17,
        title: {
          ru: "Природа Хоккайдо - день 1",
          en: "Hokkaido Nature - day 1",
          ja: "北海道の自然 - 1日目"
        },
        description: {
          ru: "Фурано (летом - лаванда, зимой - лыжи), национальные парки.",
          en: "Furano (summer - lavender, winter - skiing), national parks.",
          ja: "富良野（夏 - ラベンダー、冬 - スキー）、国立公園。"
        }
      },
      {
        day: 18,
        title: {
          ru: "Природа Хоккайдо - день 2",
          en: "Hokkaido Nature - day 2",
          ja: "北海道の自然 - 2日目"
        },
        description: {
          ru: "Продолжение знакомства с природными красотами Хоккайдо.",
          en: "Continuing to explore the natural beauty of Hokkaido.",
          ja: "北海道の自然美を引き続き探索。"
        }
      },
      {
        day: 19,
        title: {
          ru: "Природа Хоккайдо - день 3",
          en: "Hokkaido Nature - day 3",
          ja: "北海道の自然 - 3日目"
        },
        description: {
          ru: "Заключительное знакомство с уникальной природой северного острова.",
          en: "Final exploration of the unique nature of the northern island.",
          ja: "北の島のユニークな自然との最終的な探索。"
        }
      },
      {
        day: 20,
        title: {
          ru: "Саппоро - прощальный день",
          en: "Sapporo - farewell day",
          ja: "札幌 - お別れの日"
        },
        description: {
          ru: "Свободное время в Саппоро, покупка сувениров, прощальный ужин.",
          en: "Free time in Sapporo, souvenir shopping, farewell dinner.",
          ja: "札幌での自由時間、お土産の購入、お別れディナー。"
        }
      },
      {
        day: 21,
        title: {
          ru: "Вылет",
          en: "Departure",
          ja: "出発"
        },
        description: {
          ru: "Трансфер в аэропорт Саппоро и вылет домой.",
          en: "Transfer to Sapporo airport and departure home.",
          ja: "札幌空港への送迎と帰国。"
        }
      }
    ],
    included: {
      ru: [
        "Проживание в отелях 3-4* (20 ночей)",
        "Все внутренние перелеты и транспорт",
        "JR Pass на 21 день",
        "Гид в каждом регионе",
        "Все экскурсии по программе",
        "Завтраки в отелях",
        "Входные билеты в храмы и музеи",
        "Трансферы аэропорт-отель"
      ],
      en: [
        "Accommodation in 3-4* hotels (20 nights)",
        "All domestic flights and transport",
        "21-day JR Pass",
        "Guide in each region",
        "All excursions according to the program",
        "Breakfast at hotels",
        "Entrance tickets to temples and museums",
        "Airport-hotel transfers"
      ],
      ja: [
        "3-4つ星ホテルでの宿泊（20泊）",
        "すべての国内線フライトと交通機関",
        "21日間JRパス",
        "各地域でのガイド",
        "プログラムに含まれるすべての見学",
        "ホテルでの朝食",
        "寺院や博物館の入場券",
        "空港・ホテル間送迎"
      ]
    },
    excluded: {
      ru: [
        "Международные авиаперелеты",
        "Обеды и ужины",
        "Личные расходы",
        "Страховка",
        "Виза"
      ],
      en: [
        "International flights",
        "Lunches and dinners",
        "Personal expenses",
        "Insurance",
        "Visa"
      ],
      ja: [
        "国際線フライト",
        "昼食と夕食",
        "個人的な支出",
        "保険",
        "ビザ"
      ]
    },
    additionalOptions: [
      {
        name: {
          ru: "Проживание в отелях 5*",
          en: "5* hotel accommodation",
          ja: "5つ星ホテルでの宿泊"
        },
        price: 1500,
        description: {
          ru: "Улучшение категории отелей до 5 звезд",
          en: "Upgrade hotel category to 5 stars",
          ja: "ホテルカテゴリーを5つ星にアップグレード"
        }
      },
      {
        name: {
          ru: "Дополнительные дни в любом регионе",
          en: "Additional days in any region",
          ja: "任意の地域での追加日"
        },
        price: 250,
        priceType: "per_day",
        description: {
          ru: "Продление пребывания в выбранном регионе",
          en: "Extension of stay in selected region",
          ja: "選択した地域での滞在延長"
        }
      },
      {
        name: {
          ru: "Включение всех обедов и ужинов",
          en: "Inclusion of all lunches and dinners",
          ja: "すべての昼食と夕食の含有"
        },
        price: 1200,
        description: {
          ru: "Полное питание на протяжении всего тура",
          en: "Full board throughout the tour",
          ja: "ツアー全体を通じての全食事"
        }
      }
    ],
    practicalInfo: {
      duration: {
        ru: "21 день / 20 ночей",
        en: "21 days / 20 nights",
        ja: "21日 / 20泊"
      },
      groupSize: {
        ru: "до 12 человек",
        en: "up to 12 people",
        ja: "最大12人"
      },
      physicalLevel: {
        ru: "средняя (много переездов и ходьбы)",
        en: "medium (lots of transfers and walking)",
        ja: "中程度（多くの移動と歩行）"
      },
      bestSeasons: {
        ru: "весна (апрель-май), осень (сентябрь-октябрь)",
        en: "spring (April-May), autumn (September-October)",
        ja: "春（4月-5月）、秋（9月-10月）"
      },
      languages: {
        ru: "гиды владеют русским, английским, японским",
        en: "guides speak Russian, English, Japanese",
        ja: "ガイドはロシア語、英語、日本語を話します"
      }
    },
    climateInfo: [
      {
        region: {
          ru: "Окинава",
          en: "Okinawa",
          ja: "沖縄"
        },
        climate: {
          ru: "тропический, +25°C круглый год",
          en: "tropical, +25°C year-round",
          ja: "熱帯気候、年間を通して+25°C"
        }
      },
      {
        region: {
          ru: "Кюсю",
          en: "Kyushu",
          ja: "九州"
        },
        climate: {
          ru: "субтропический, +20-30°C",
          en: "subtropical, +20-30°C",
          ja: "亜熱帯、+20-30°C"
        }
      },
      {
        region: {
          ru: "Кансай/Канто",
          en: "Kansai/Kanto",
          ja: "関西/関東"
        },
        climate: {
          ru: "умеренный, +15-25°C",
          en: "temperate, +15-25°C",
          ja: "温帯、+15-25°C"
        }
      },
      {
        region: {
          ru: "Тохоку",
          en: "Tohoku",
          ja: "東北"
        },
        climate: {
          ru: "прохладный, +10-20°C",
          en: "cool, +10-20°C",
          ja: "涼しい、+10-20°C"
        }
      },
      {
        region: {
          ru: "Хоккайдо",
          en: "Hokkaido",
          ja: "北海道"
        },
        climate: {
          ru: "континентальный, +5-15°C (летом), -10°C (зимой)",
          en: "continental, +5-15°C (summer), -10°C (winter)",
          ja: "大陸性、+5-15°C（夏）、-10°C（冬）"
        }
      }
    ],
    packingList: {
      ru: [
        "Одежда для разных климатических зон",
        "Удобная обувь для ходьбы",
        "Легкая куртка и теплые вещи для севера",
        "Купальные принадлежности для Окинавы",
        "Фотоаппарат с дополнительными батареями",
        "Универсальный адаптер для розеток"
      ],
      en: [
        "Clothing for different climate zones",
        "Comfortable walking shoes",
        "Light jacket and warm clothes for the north",
        "Swimming accessories for Okinawa",
        "Camera with extra batteries",
        "Universal power adapter"
      ],
      ja: [
        "異なる気候帯用の服装",
        "歩きやすい靴",
        "軽いジャケットと北部用の暖かい服",
        "沖縄用の水泳用品",
        "予備バッテリー付きカメラ",
        "万能電源アダプター"
      ]
    },
    rating: 4.8,
    reviewCount: 67
  },
  {
    id: "classic-kanto-tour",
    category: "all-japan",
    popular: true,
    types: ["temples", "nature"],
    title: {
      ru: 'Классический тур по Канто',
      en: 'Classic Kanto Tour',
      ja: '関東クラシックツアー'
    },
    description: {
      ru: 'Сочетание традиций и современности региона Канто - от мегаполиса Токио до священной горы Фудзи. Древние столицы самураев, горячие источники Хаконэ и космополитичная Йокохама в одном туре.',
      en: 'A combination of tradition and modernity in the Kanto region - from the metropolis of Tokyo to the sacred Mount Fuji. Ancient samurai capitals, Hakone hot springs and cosmopolitan Yokohama in one tour.',
      ja: '関東地方の伝統と現代性の融合 - 大都市東京から神聖な富士山まで。古い侍の都、箱根温泉、国際的な横浜を一つのツアーで。'
    },
    route: {
      ru: ["Токио", "Камакура", "Никко", "Хаконэ", "Фудзи", "Йокохама"],
      en: ["Tokyo", "Kamakura", "Nikko", "Hakone", "Fuji", "Yokohama"],
      ja: ["東京", "鎌倉", "日光", "箱根", "富士", "横浜"]
    },
    routeDescription: {
      ru: 'Сочетание традиций и современности региона Канто, от мегаполиса до священных гор и горячих источников',
      en: 'A combination of tradition and modernity in the Kanto region, from metropolis to sacred mountains and hot springs',
      ja: '関東地方の伝統と現代性の組み合わせ、大都市から神聖な山々と温泉まで'
    },
    duration: 12,
    price: 4500,
    groupSizeMin: 8,
    groupSizeMax: 15,
    image: '/images/tours/classic-kanto-tour.png',
    seasons: ["spring", "autumn", "winter"],
    seasonDescription: {
      ru: 'Весна: цветение сакуры, осень: красные клены, зимой - иллюминации',
      en: 'Spring: cherry blossoms, autumn: red maples, winter - illuminations',
      ja: '春：桜の花、秋：紅いもみじ、冬：イルミネーション'
    },
    highlights: {
      ru: [
        "Контрасты Токио - от Асакусы до Синдзюку",
        "Большой Будда и самурайская столица Камакура",
        "Святилище Тосёгу в Никко - объект ЮНЕСКО",
        "Горячие источники Хаконэ с видом на Фудзи",
        "Священная гора Фудзи и озеро Кавагутико",
        "Космополитичная Йокохама и ее порт",
        "Традиционные рёканы и современные отели",
        "Разнообразие японской кухни региона"
      ],
      en: [
        "Tokyo contrasts - from Asakusa to Shinjuku",
        "Great Buddha and samurai capital Kamakura",
        "Toshogu Shrine in Nikko - UNESCO site",
        "Hakone hot springs with Fuji views",
        "Sacred Mount Fuji and Lake Kawaguchi",
        "Cosmopolitan Yokohama and its port",
        "Traditional ryokans and modern hotels",
        "Diverse regional Japanese cuisine"
      ],
      ja: [
        "東京のコントラスト - 浅草から新宿まで",
        "大仏と侍の都鎌倉",
        "日光の東照宮 - ユネスコ世界遺産",
        "富士山の眺めがある箱根温泉",
        "神聖な富士山と河口湖",
        "国際的な横浜とその港",
        "伝統的な旅館とモダンなホテル",
        "地域の多様な日本料理"
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
          ru: "Встреча в аэропорту Нарита/Ханэда, размещение в отеле. Первое знакомство с районом Асакуса и храмом Сэнсо-дзи.",
          en: "Meeting at Narita/Haneda airport, hotel accommodation. First acquaintance with Asakusa district and Senso-ji temple.",
          ja: "成田/羽田空港でのお出迎え、ホテルへのチェックイン。浅草地区と浅草寺との初めての出会い。"
        }
      },
      {
        day: 2,
        title: {
          ru: "Токио - традиции столицы",
          en: "Tokyo - capital traditions",
          ja: "東京 - 首都の伝統"
        },
        description: {
          ru: "Императорский дворец и Восточные сады. Район Гинза для шоппинга. Вечером небоскребы Синдзюку и обзорная площадка.",
          en: "Imperial Palace and East Gardens. Ginza district for shopping. Evening skyscrapers in Shinjuku and observation deck.",
          ja: "皇居と東御苑。ショッピングのための銀座地区。夜は新宿の高層ビルと展望台。"
        }
      },
      {
        day: 3,
        title: {
          ru: "Токио - современная культура",
          en: "Tokyo - modern culture",
          ja: "東京 - 現代文化"
        },
        description: {
          ru: "Район Сибуя и знаменитый перекресток. Харадзюку - центр молодежной моды. Омотэсандо с современной архитектурой.",
          en: "Shibuya district and the famous crossing. Harajuku - center of youth fashion. Omotesando with modern architecture.",
          ja: "渋谷地区と有名な交差点。原宿 - 若者ファッションの中心地。現代建築のある表参道。"
        }
      },
      {
        day: 4,
        title: {
          ru: "Камакура - древняя столица",
          en: "Kamakura - ancient capital",
          ja: "鎌倉 - 古都"
        },
        description: {
          ru: "Поездка в Камакуру на поезде JR. Большой Будда (Дайбуцу) - символ города. Храм Хасэ-дэра с видом на океан. Святилище Цуругаока Хатимангу.",
          en: "Trip to Kamakura by JR train. Great Buddha (Daibutsu) - symbol of the city. Hase-dera temple with ocean view. Tsurugaoka Hachimangu shrine.",
          ja: "JR電車で鎌倉への旅行。大仏（大仏）- 市のシンボル。海の眺めがある長谷寺。鶴岡八幡宮。"
        }
      },
      {
        day: 5,
        title: {
          ru: "Никко - священные горы",
          en: "Nikko - sacred mountains",
          ja: "日光 - 神聖な山々"
        },
        description: {
          ru: "Поездка в Никко. Святилище Тосёгу - мавзолей первого сёгуна Токугавы. Озеро Тюдзэндзи и водопад Кэгон.",
          en: "Trip to Nikko. Toshogu Shrine - mausoleum of the first Tokugawa shogun. Lake Chuzenji and Kegon Falls.",
          ja: "日光への旅行。東照宮 - 初代徳川将軍の霊廟。中禅寺湖と華厳の滝。"
        }
      },
      {
        day: 6,
        title: {
          ru: "Никко - природа и онсены",
          en: "Nikko - nature and onsen",
          ja: "日光 - 自然と温泉"
        },
        description: {
          ru: "Национальный парк Никко. Знакомство с горячими источниками региона. Традиционная гостиница с онсеном.",
          en: "Nikko National Park. Introduction to regional hot springs. Traditional inn with onsen.",
          ja: "日光国立公園。地域の温泉の紹介。温泉のある伝統的な旅館。"
        }
      },
      {
        day: 7,
        title: {
          ru: "Переезд в Хаконэ",
          en: "Transfer to Hakone",
          ja: "箱根への移動"
        },
        description: {
          ru: "Переезд в Хаконэ на поезде Romance Car. Размещение в традиционном рёкане с видом на гору Фудзи. Вечер в онсене.",
          en: "Transfer to Hakone by Romance Car train. Accommodation in traditional ryokan with Mount Fuji view. Evening in onsen.",
          ja: "ロマンスカーで箱根への移動。富士山の眺めがある伝統的な旅館での宿泊。温泉での夜。"
        }
      },
      {
        day: 8,
        title: {
          ru: "Хаконэ - горы и озера",
          en: "Hakone - mountains and lakes",
          ja: "箱根 - 山と湖"
        },
        description: {
          ru: "Озеро Аси и прогулка на пиратском корабле. Долина Овакудани с геотермальными источниками. Канатная дорога с панорамными видами.",
          en: "Lake Ashi and pirate ship cruise. Owakudani Valley with geothermal springs. Cable car with panoramic views.",
          ja: "芦ノ湖と海賊船クルーズ。地熱温泉のある大涌谷。パノラマビューのあるケーブルカー。"
        }
      },
      {
        day: 9,
        title: {
          ru: "Гора Фудзи",
          en: "Mount Fuji",
          ja: "富士山"
        },
        description: {
          ru: "Поездка к горе Фудзи. 5-я станция Фудзи (по погоде). Озеро Кавагутико - лучшие виды на священную гору. Деревня Осино Хаккай.",
          en: "Trip to Mount Fuji. Fuji 5th Station (weather permitting). Lake Kawaguchi - best views of the sacred mountain. Oshino Hakkai village.",
          ja: "富士山への旅行。富士山5合目（天候による）。河口湖 - 神聖な山の最高の眺め。忍野八海村。"
        }
      },
      {
        day: 10,
        title: {
          ru: "Йокохама - город будущего",
          en: "Yokohama - city of the future",
          ja: "横浜 - 未来の都市"
        },
        description: {
          ru: "Переезд в Йокохаму. Район Минато Мирай с небоскребами. Китайский квартал - крупнейший в Японии. Красный кирпичный склад.",
          en: "Transfer to Yokohama. Minato Mirai district with skyscrapers. Chinatown - largest in Japan. Red Brick Warehouse.",
          ja: "横浜への移動。高層ビルのあるみなとみらい地区。日本最大の中華街。赤レンガ倉庫。"
        }
      },
      {
        day: 11,
        title: {
          ru: "Йокохама и возвращение в Токио",
          en: "Yokohama and return to Tokyo",
          ja: "横浜と東京への帰還"
        },
        description: {
          ru: "Сад Сансукэй - традиционный японский сад в современном городе. Музей Рамена. Возвращение в Токио для последних покупок.",
          en: "Sankeien Garden - traditional Japanese garden in modern city. Ramen Museum. Return to Tokyo for last-minute shopping.",
          ja: "三溪園 - 現代都市の中の伝統的な日本庭園。ラーメン博物館。最後の買い物のための東京への帰還。"
        }
      },
      {
        day: 12,
        title: {
          ru: "Вылет",
          en: "Departure",
          ja: "出発"
        },
        description: {
          ru: "Свободное время в Токио. Трансфер в аэропорт и вылет домой.",
          en: "Free time in Tokyo. Transfer to airport and departure home.",
          ja: "東京での自由時間。空港への送迎と帰国。"
        }
      }
    ],
    included: {
      ru: [
        "Проживание в отелях 3-4* и рёканах (11 ночей)",
        "Транспорт (включая JR Pass)",
        "Гид",
        "Все входные билеты в храмы и музеи",
        "Онсены в Никко и Хаконэ",
        "Завтраки в отелях и рёканах",
        "Традиционные ужины в рёканах"
      ],
      en: [
        "Accommodation in 3-4* hotels and ryokans (11 nights)",
        "Transport (including JR Pass)",
        "Guide",
        "All entrance tickets to temples and museums",
        "Onsen in Nikko and Hakone",
        "Breakfast at hotels and ryokans",
        "Traditional dinners at ryokans"
      ],
      ja: [
        "3-4つ星ホテルと旅館での宿泊（11泊）",
        "交通機関（JRパス含む）",
        "ガイド",
        "寺院や博物館のすべての入場券",
        "日光と箱根での温泉",
        "ホテルと旅館での朝食",
        "旅館での伝統的な夕食"
      ]
    },
    excluded: {
      ru: [
        "Авиаперелеты",
        "Обеды и ужины в городах",
        "Подъем на Фудзи (сезонно)",
        "Личные расходы",
        "Страховка",
        "Виза"
      ],
      en: [
        "Flights",
        "Lunches and dinners in cities",
        "Mount Fuji climbing (seasonal)",
        "Personal expenses",
        "Insurance",
        "Visa"
      ],
      ja: [
        "航空券",
        "市内での昼食と夕食",
        "富士山登山（季節による）",
        "個人的な支出",
        "保険",
        "ビザ"
      ]
    },
    additionalOptions: [
      {
        name: {
          ru: "Восхождение на Фудзи с гидом",
          en: "Mount Fuji climbing with guide",
          ja: "ガイド付き富士山登山"
        },
        price: 300,
        description: {
          ru: "Восхождение на священную гору с опытным гидом (июль-август)",
          en: "Climbing the sacred mountain with experienced guide (July-August)",
          ja: "経験豊富なガイドとの神聖な山への登山（7月-8月）"
        }
      },
      {
        name: {
          ru: "Дополнительная ночь в премиум-рёкане",
          en: "Additional night in premium ryokan",
          ja: "プレミアム旅館での追加宿泊"
        },
        price: 250,
        description: {
          ru: "Улучшение до премиум категории рёкана с лучшим видом на Фудзи",
          en: "Upgrade to premium ryokan category with better Fuji view",
          ja: "富士山のより良い眺めがあるプレミアム旅館カテゴリーへのアップグレード"
        }
      },
      {
        name: {
          ru: "Частная экскурсия по Токио",
          en: "Private Tokyo tour",
          ja: "東京プライベートツアー"
        },
        price: 200,
        description: {
          ru: "Индивидуальная экскурсия по скрытым местам Токио",
          en: "Individual tour of Tokyo's hidden places",
          ja: "東京の隠れた場所の個人ツアー"
        }
      }
    ],
    practicalInfo: {
      duration: {
        ru: "12 дней / 11 ночей",
        en: "12 days / 11 nights",
        ja: "12日 / 11泊"
      },
      groupSize: {
        ru: "до 15 человек",
        en: "up to 15 people",
        ja: "最大15人"
      },
      physicalLevel: {
        ru: "легкая-средняя",
        en: "easy-medium",
        ja: "軽い-中程度"
      },
      bestSeasons: {
        ru: "весна (сакура), осень (клены), зима (виды Фудзи)",
        en: "spring (cherry blossoms), autumn (maples), winter (Fuji views)",
        ja: "春（桜）、秋（もみじ）、冬（富士の眺め）"
      },
      languages: {
        ru: "гид владеет русским, английским, японским",
        en: "guide speaks Russian, English, Japanese",
        ja: "ガイドはロシア語、英語、日本語を話します"
      }
    },
    climateInfo: [
      {
        region: {
          ru: "Токио",
          en: "Tokyo",
          ja: "東京"
        },
        climate: {
          ru: "умеренный морской, +5-30°C",
          en: "temperate oceanic, +5-30°C",
          ja: "温帯海洋性、+5-30°C"
        }
      },
      {
        region: {
          ru: "Камакура",
          en: "Kamakura",
          ja: "鎌倉"
        },
        climate: {
          ru: "мягкий океанический, +8-28°C",
          en: "mild oceanic, +8-28°C",
          ja: "穏やかな海洋性、+8-28°C"
        }
      },
      {
        region: {
          ru: "Никко",
          en: "Nikko",
          ja: "日光"
        },
        climate: {
          ru: "горный, прохладнее на 5-8°C",
          en: "mountain climate, 5-8°C cooler",
          ja: "山岳気候、5-8°C涼しい"
        }
      },
      {
        region: {
          ru: "Хаконэ/Фудзи",
          en: "Hakone/Fuji",
          ja: "箱根/富士"
        },
        climate: {
          ru: "высокогорный, переменчивый",
          en: "highland, changeable",
          ja: "高地、変わりやすい"
        }
      }
    ],
    packingList: {
      ru: [
        "Удобная обувь для ходьбы",
        "Одежда для онсенов (или аренда юката)",
        "Теплая куртка для гор",
        "Фотоаппарат для видов Фудзи",
        "Наличные йены для местных покупок",
        "Легкий дождевик"
      ],
      en: [
        "Comfortable walking shoes",
        "Clothes for onsen (or yukata rental)",
        "Warm jacket for mountains",
        "Camera for Fuji views",
        "Cash yen for local purchases",
        "Light raincoat"
      ],
      ja: [
        "歩きやすい靴",
        "温泉用の服（または浴衣レンタル）",
        "山用の暖かいジャケット",
        "富士の眺めのためのカメラ",
        "地元での買い物のための現金円",
        "軽いレインコート"
      ]
    },
    rating: 4.9,
    reviewCount: 203
  }
];