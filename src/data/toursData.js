// src/data/toursData.js

// Common labels for tours
export const tourLabels = {
  popular: {
    ru: "Популярное",
    en: "Popular",
    ja: "人気"
  }
};

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
    types: ["temples", "modern"],
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
  },
  {
    id: "classic-kansai-tour",
    category: "all-japan",
    popular: true,
    types: ["temples", "history"],
    title: {
      ru: 'Классический тур по Кансай',
      en: 'Classic Kansai Tour',
      ja: '関西クラシックツアー'
    },
    description: {
      ru: 'Погружение в культуру и историю региона Кансай - сердца традиционной Японии. От кулинарной столицы Осаки до древних храмов Киото и Нары, с посещением замка белой цапли и расслаблением в знаменитом онсене Арима.',
      en: 'Immersion into the culture and history of the Kansai region - the heart of traditional Japan. From the culinary capital of Osaka to the ancient temples of Kyoto and Nara, visiting the white heron castle and relaxing in the famous Arima onsen.',
      ja: '関西地方の文化と歴史への没入 - 伝統的な日本の心。料理の都大阪から京都と奈良の古い寺院まで、白鷺城を訪れ、有名な有馬温泉でリラックス。'
    },
    route: {
      ru: ["Осака", "Киото", "Нара", "Химэдзи", "Кобе", "Аманохасидатэ", "Арима"],
      en: ["Osaka", "Kyoto", "Nara", "Himeji", "Kobe", "Amanohashidate", "Arima"],
      ja: ["大阪", "京都", "奈良", "姫路", "神戸", "天橋立", "有馬"]
    },
    routeDescription: {
      ru: 'Погружение в культуру и историю региона Кансай с посещением онсена, знакомство с кулинарными традициями и храмовой архитектурой',
      en: 'Immersion into Kansai culture and history with onsen visit, exploring culinary traditions and temple architecture',
      ja: '温泉訪問を含む関西の文化と歴史への没入、料理の伝統と寺院建築の探索'
    },
    duration: 13,
    price: 4500,
    groupSizeMin: 8,
    groupSizeMax: 15,
    image: '/images/tours/classic-kansai-tour.png',
    seasons: ["spring", "autumn", "winter"],
    seasonDescription: {
      ru: 'Весна: цветение сакуры, осень: красные клены, зимой - иллюминации',
      en: 'Spring: cherry blossoms, autumn: red maples, winter - illuminations',
      ja: '春：桜の花、秋：紅いもみじ、冬：イルミネーション'
    },
    highlights: {
      ru: [
        "Замок Осаки и кулинарный район Дотонбори",
        "Золотой и Серебряный павильоны Киото",
        "Священные олени Нары и Великий Будда",
        "Замок Химэдзи - объект ЮНЕСКО",
        "Говядина вагю и порт Кобе",
        "Аманохасидатэ - один из трех великих видов Японии",
        "Релакс в историческом онсене Арима",
        "Дегустация региональных деликатесов"
      ],
      en: [
        "Osaka Castle and Dotonbori culinary district",
        "Golden and Silver Pavilions of Kyoto",
        "Sacred deer of Nara and Great Buddha",
        "Himeji Castle - UNESCO site",
        "Wagyu beef and Kobe port",
        "Amanohashidate - one of Japan's three great views",
        "Relaxation in historic Arima onsen",
        "Regional delicacies tasting"
      ],
      ja: [
        "大阪城と道頓堀の料理地区",
        "京都の金閣と銀閣",
        "奈良の神鹿と大仏",
        "姫路城 - ユネスコ世界遺産",
        "和牛と神戸港",
        "天橋立 - 日本三景の一つ",
        "歴史ある有馬温泉でのリラックス",
        "地域の珍味の試食"
      ]
    },
    itinerary: [
      {
        day: 1,
        title: {
          ru: "Прибытие в Осаку",
          en: "Arrival in Osaka",
          ja: "大阪到着"
        },
        description: {
          ru: "Встреча в аэропорту Кансай, размещение в отеле. Вечерняя прогулка по Дотонбори с первым знакомством с осакской кухней.",
          en: "Meeting at Kansai airport, hotel accommodation. Evening stroll through Dotonbori with first taste of Osaka cuisine.",
          ja: "関西空港でのお出迎え、ホテルへのチェックイン。道頓堀での夜の散歩と大阪料理との初めての出会い。"
        }
      },
      {
        day: 2,
        title: {
          ru: "Осака - кулинарная столица",
          en: "Osaka - culinary capital",
          ja: "大阪 - 料理の都"
        },
        description: {
          ru: "Замок Осаки и его исторический парк. Умэда Скай Билдинг с панорамным видом. Район Синсайбаси для шоппинга. Ужин в традиционном ресторане кусикацу.",
          en: "Osaka Castle and its historic park. Umeda Sky Building with panoramic view. Shinsaibashi district for shopping. Dinner at traditional kushikatsu restaurant.",
          ja: "大阪城とその歴史公園。パノラマビューがある梅田スカイビル。ショッピングのための心斎橋地区。伝統的な串カツレストランでの夕食。"
        }
      },
      {
        day: 3,
        title: {
          ru: "Осака - уличная еда и рынки",
          en: "Osaka - street food and markets",
          ja: "大阪 - 屋台料理と市場"
        },
        description: {
          ru: "Рынок Куромон Итиба - дегустация свежих морепродуктов. Мастер-класс по приготовлению такояки. Вечер в изакае с местными деликатесами.",
          en: "Kuromon Ichiba Market - fresh seafood tasting. Takoyaki cooking masterclass. Evening at izakaya with local delicacies.",
          ja: "黒門市場 - 新鮮な海鮮の試食。たこ焼き料理教室。地元の珍味がある居酒屋での夜。"
        }
      },
      {
        day: 4,
        title: {
          ru: "Киото - древняя столица",
          en: "Kyoto - ancient capital",
          ja: "京都 - 古都"
        },
        description: {
          ru: "Переезд в Киото на поезде. Храм Киёмидзу-дэра с деревянной террасой. Традиционный район Сандзюсангэн-до. Вечерняя прогулка по Гиону.",
          en: "Transfer to Kyoto by train. Kiyomizu-dera temple with wooden terrace. Traditional Sanjusangen-do district. Evening walk through Gion.",
          ja: "電車で京都への移動。木造テラスのある清水寺。伝統的な三十三間堂地区。祇園での夜の散歩。"
        }
      },
      {
        day: 5,
        title: {
          ru: "Киото - золотые храмы",
          en: "Kyoto - golden temples",
          ja: "京都 - 金色の寺院"
        },
        description: {
          ru: "Кинкаку-дзи (Золотой павильон) утром до толп туристов. Рёан-дзи с знаменитым садом камней. Бамбуковая роща Арасияма.",
          en: "Kinkaku-ji (Golden Pavilion) in the morning before tourist crowds. Ryoan-ji with famous rock garden. Arashiyama bamboo grove.",
          ja: "観光客の群衆の前の朝の金閣寺。有名な石庭がある龍安寺。嵐山の竹林。"
        }
      },
      {
        day: 6,
        title: {
          ru: "Киото - серебро и философия",
          en: "Kyoto - silver and philosophy",
          ja: "京都 - 銀と哲学"
        },
        description: {
          ru: "Гинкаку-дзи (Серебряный павильон) и его сады. Философская тропа вдоль канала. Храм Нандэн-дзи с воротами Сан-мон.",
          en: "Ginkaku-ji (Silver Pavilion) and its gardens. Philosopher's Path along the canal. Nanzen-ji temple with Sanmon gate.",
          ja: "銀閣寺とその庭園。運河沿いの哲学の道。三門のある南禅寺。"
        }
      },
      {
        day: 7,
        title: {
          ru: "Нара - древняя столица",
          en: "Nara - ancient capital",
          ja: "奈良 - 古都"
        },
        description: {
          ru: "Поездка в Нару. Парк Нары с священными оленями. Храм Тодай-дзи с Великим Буддой. Святилище Касуга Тайся с тысячами фонарей.",
          en: "Trip to Nara. Nara Park with sacred deer. Todai-ji temple with Great Buddha. Kasuga Taisha shrine with thousands of lanterns.",
          ja: "奈良への旅行。神鹿がいる奈良公園。大仏がある東大寺。何千もの灯籠がある春日大社。"
        }
      },
      {
        day: 8,
        title: {
          ru: "Химэдзи - замок белой цапли",
          en: "Himeji - white heron castle",
          ja: "姫路 - 白鷺城"
        },
        description: {
          ru: "Поездка в Химэдзи. Замок Химэдзи - объект ЮНЕСКО, лучше всего сохранившийся японский замок. Сад Коко-эн с девятью различными садами.",
          en: "Trip to Himeji. Himeji Castle - UNESCO site, Japan's best preserved castle. Koko-en garden with nine different gardens.",
          ja: "姫路への旅行。姫路城 - ユネスコ世界遺産、日本で最もよく保存された城。9つの異なる庭園がある好古園。"
        }
      },
      {
        day: 9,
        title: {
          ru: "Кобе - порт и деликатесы",
          en: "Kobe - port and delicacies",
          ja: "神戸 - 港と珍味"
        },
        description: {
          ru: "Переезд в Кобе. Обед с дегустацией знаменитой говядины вагю. Район Китано с европейской архитектурой. Порт Кобе и гора Рокко.",
          en: "Transfer to Kobe. Lunch with famous wagyu beef tasting. Kitano district with European architecture. Kobe port and Mount Rokko.",
          ja: "神戸への移動。有名な和牛の試食付きランチ。ヨーロッパ建築の北野地区。神戸港と六甲山。"
        }
      },
      {
        day: 10,
        title: {
          ru: "Аманохасидатэ - небесный мостик",
          en: "Amanohashidate - heavenly bridge",
          ja: "天橋立 - 天の橋"
        },
        description: {
          ru: "Поездка к Аманохасидатэ - одному из трех великих видов Японии. Подъем на гору для лучшего обзора \"небесного мостика\". Храм Чион-дзи.",
          en: "Trip to Amanohashidate - one of Japan's three great views. Mountain climb for better view of the \"heavenly bridge\". Chion-ji temple.",
          ja: "天橋立への旅行 - 日本三景の一つ。「天の橋」のより良い眺めのための山登り。智恩寺。"
        }
      },
      {
        day: 11,
        title: {
          ru: "Онсен Арима - релакс",
          en: "Arima Onsen - relaxation",
          ja: "有馬温泉 - リラックス"
        },
        description: {
          ru: "Переезд в онсен Арима - один из старейших горячих источников Японии. Размещение в традиционном рёкане. Вечер в золотых и серебряных источниках.",
          en: "Transfer to Arima onsen - one of Japan's oldest hot springs. Accommodation in traditional ryokan. Evening in gold and silver springs.",
          ja: "有馬温泉への移動 - 日本最古の温泉の一つ。伝統的な旅館での宿泊。金泉と銀泉での夜。"
        }
      },
      {
        day: 12,
        title: {
          ru: "Арима и возвращение в Осаку",
          en: "Arima and return to Osaka",
          ja: "有馬と大阪への帰還"
        },
        description: {
          ru: "Утреннее купание в онсене. Прогулка по историческому городку Арима. Возвращение в Осаку, последние покупки.",
          en: "Morning bathing in onsen. Walk through historic Arima town. Return to Osaka, last-minute shopping.",
          ja: "温泉での朝の入浴。歴史ある有馬の町の散歩。大阪への帰還、最後の買い物。"
        }
      },
      {
        day: 13,
        title: {
          ru: "Вылет",
          en: "Departure",
          ja: "出発"
        },
        description: {
          ru: "Трансфер в аэропорт Кансай и вылет домой.",
          en: "Transfer to Kansai airport and departure home.",
          ja: "関西空港への送迎と帰国。"
        }
      }
    ],
    included: {
      ru: [
        "Проживание в отелях 3-4* и рёкане (12 ночей)",
        "Транспорт (включая Kansai Pass)",
        "Гид",
        "Все входные билеты в храмы и замки",
        "Онсен в Ариме",
        "Завтраки в отелях",
        "Традиционный ужин кайсэки в рёкане"
      ],
      en: [
        "Accommodation in 3-4* hotels and ryokan (12 nights)",
        "Transport (including Kansai Pass)",
        "Guide",
        "All entrance tickets to temples and castles",
        "Onsen in Arima",
        "Breakfast at hotels",
        "Traditional kaiseki dinner at ryokan"
      ],
      ja: [
        "3-4つ星ホテルと旅館での宿泊（12泊）",
        "交通機関（関西パス含む）",
        "ガイド",
        "寺院と城のすべての入場券",
        "有馬温泉",
        "ホテルでの朝食",
        "旅館での伝統的な懐石夕食"
      ]
    },
    excluded: {
      ru: [
        "Авиаперелеты",
        "Обеды и ужины (кроме кайсэки)",
        "Дегустация вагю (доплата)",
        "Личные расходы",
        "Страховка",
        "Виза"
      ],
      en: [
        "Flights",
        "Lunches and dinners (except kaiseki)",
        "Wagyu tasting (surcharge)",
        "Personal expenses",
        "Insurance",
        "Visa"
      ],
      ja: [
        "航空券",
        "昼食と夕食（懐石を除く）",
        "和牛試食（追加料金）",
        "個人的な支出",
        "保険",
        "ビザ"
      ]
    },
    additionalOptions: [
      {
        name: {
          ru: "Ужин с говядиной вагю в Кобе",
          en: "Wagyu beef dinner in Kobe",
          ja: "神戸での和牛夕食"
        },
        price: 150,
        description: {
          ru: "Дегустация знаменитой говядины вагю в премиум ресторане Кобе",
          en: "Famous wagyu beef tasting at premium Kobe restaurant",
          ja: "神戸のプレミアムレストランでの有名な和牛の試食"
        }
      },
      {
        name: {
          ru: "Дополнительная ночь в онсене",
          en: "Additional night at onsen",
          ja: "温泉での追加宿泊"
        },
        price: 180,
        description: {
          ru: "Дополнительная ночь в традиционном рёкане с онсеном",
          en: "Additional night in traditional ryokan with onsen",
          ja: "温泉のある伝統的な旅館での追加宿泊"
        }
      },
      {
        name: {
          ru: "Мастер-класс по кайсэки",
          en: "Kaiseki masterclass",
          ja: "懐石料理教室"
        },
        price: 120,
        description: {
          ru: "Обучение приготовлению традиционной японской кухни кайсэки",
          en: "Learning to prepare traditional Japanese kaiseki cuisine",
          ja: "伝統的な日本の懐石料理の調理法を学ぶ"
        }
      },
      {
        name: {
          ru: "Частная чайная церемония",
          en: "Private tea ceremony",
          ja: "プライベート茶道"
        },
        price: 80,
        description: {
          ru: "Индивидуальная чайная церемония в традиционном чайном домике",
          en: "Individual tea ceremony in traditional tea house",
          ja: "伝統的な茶室での個人的な茶道"
        }
      }
    ],
    practicalInfo: {
      duration: {
        ru: "13 дней / 12 ночей",
        en: "13 days / 12 nights",
        ja: "13日 / 12泊"
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
        ru: "весна (сакура), осень (клены), зима (иллюминации)",
        en: "spring (cherry blossoms), autumn (maples), winter (illuminations)",
        ja: "春（桜）、秋（もみじ）、冬（イルミネーション）"
      },
      languages: {
        ru: "гид владеет русским, английским, японским",
        en: "guide speaks Russian, English, Japanese",
        ja: "ガイドはロシア語、英語、日本語を話します"
      }
    },
    regionalFeatures: [
      {
        region: {
          ru: "Осака",
          en: "Osaka",
          ja: "大阪"
        },
        features: {
          ru: "уличная еда, такояки, окономияки, кусикацу",
          en: "street food, takoyaki, okonomiyaki, kushikatsu",
          ja: "屋台料理、たこ焼き、お好み焼き、串カツ"
        }
      },
      {
        region: {
          ru: "Киото",
          en: "Kyoto",
          ja: "京都"
        },
        features: {
          ru: "кайсэки, матча, традиционные сладости",
          en: "kaiseki, matcha, traditional sweets",
          ja: "懐石、抹茶、伝統的な和菓子"
        }
      },
      {
        region: {
          ru: "Нара",
          en: "Nara",
          ja: "奈良"
        },
        features: {
          ru: "каки-но-хадзуси (суши в хурме)",
          en: "kaki-no-hazushi (persimmon leaf sushi)",
          ja: "柿の葉寿司"
        }
      },
      {
        region: {
          ru: "Кобе",
          en: "Kobe",
          ja: "神戸"
        },
        features: {
          ru: "говядина вагю, сакэ из района Нада",
          en: "wagyu beef, sake from Nada district",
          ja: "和牛、灘の酒"
        }
      }
    ],
    packingList: {
      ru: [
        "Удобная обувь для храмов (часто снимать)",
        "Легкая куртка для вечеров",
        "Купальные принадлежности для онсена",
        "Фотоаппарат",
        "Наличные йены"
      ],
      en: [
        "Comfortable shoes for temples (frequent removal)",
        "Light jacket for evenings",
        "Bathing accessories for onsen",
        "Camera",
        "Cash yen"
      ],
      ja: [
        "寺院用の歩きやすい靴（頻繁に脱ぐ）",
        "夜用の軽いジャケット",
        "温泉用の入浴用品",
        "カメラ",
        "現金円"
      ]
    },
    onsenEtiquette: {
      ru: "Перед посещением онсена в Ариме участники получают инструктаж по японскому банному этикету и правилам поведения в горячих источниках.",
      en: "Before visiting onsen in Arima, participants receive briefing on Japanese bathing etiquette and hot spring behavior rules.",
      ja: "有馬温泉を訪れる前に、参加者は日本の入浴エチケットと温泉での行動規則について説明を受けます。"
    },
    rating: 4.8,
    reviewCount: 156
  },
  {
    id: "golden-ring-japan-tour",
    category: "all-japan",
    popular: false,
    types: ["temples", "history"],
    title: {
      ru: 'Гранд-тур "Золотое кольцо Японии"',
      en: 'Grand Tour "Golden Ring of Japan"',
      ja: 'グランドツアー「日本の黄金の環」'
    },
    description: {
      ru: 'Комплексный тур, охватывающий основные достопримечательности Японии от столицы до древних городов, с посещением самых значимых храмов, садов и исторических мест Японии. Идеально подходит для первого знакомства со страной.',
      en: 'Comprehensive tour covering Japan\'s main attractions from the capital to ancient cities, visiting the most significant temples, gardens and historical sites of Japan. Perfect for first acquaintance with the country.',
      ja: '首都から古代都市まで日本の主要な観光地を網羅し、日本で最も重要な寺院、庭園、歴史的場所を訪れる包括的なツアー。国との初めての出会いに最適。'
    },
    route: {
      ru: ["Токио", "Никко", "Киото", "Нара", "Осака", "Хиросима", "Миядзима"],
      en: ["Tokyo", "Nikko", "Kyoto", "Nara", "Osaka", "Hiroshima", "Miyajima"],
      ja: ["東京", "日光", "京都", "奈良", "大阪", "広島", "宮島"]
    },
    routeDescription: {
      ru: 'Путешествие от столицы к древним городам, с посещением самых значимых храмов, садов и исторических мест Японии',
      en: 'Journey from capital to ancient cities, visiting Japan\'s most significant temples, gardens and historical sites',
      ja: '首都から古代都市への旅、日本で最も重要な寺院、庭園、歴史的場所の訪問'
    },
    duration: 12,
    price: 4300,
    groupSizeMin: 8,
    groupSizeMax: 15,
    image: '/images/tours/golden-ring-japan-tour.png',
    seasons: ["spring", "autumn"],
    seasonDescription: {
      ru: 'Весна: цветение сакуры, осень: красные клены',
      en: 'Spring: cherry blossoms, autumn: red maples',
      ja: '春：桜の花、秋：紅いもみじ'
    },
    highlights: {
      ru: [
        "Токийский мегаполис и его контрасты",
        "Императорский дворец и современные районы",
        "Древние храмы Киото в окружении традиционных садов",
        "Священные олени Нары и Великий Будда",
        "Оживленный Осака с его кулинарными традициями",
        "Мемориальный парк мира в Хиросиме",
        "Святилище Ицукусима на острове Миядзима",
        "Релакс в традиционном онсене Юмото в Никко"
      ],
      en: [
        "Tokyo metropolis and its contrasts",
        "Imperial Palace and modern districts",
        "Ancient Kyoto temples surrounded by traditional gardens",
        "Sacred deer of Nara and Great Buddha",
        "Bustling Osaka with its culinary traditions",
        "Peace Memorial Park in Hiroshima",
        "Itsukushima Shrine on Miyajima Island",
        "Relaxation in traditional Yumoto onsen in Nikko"
      ],
      ja: [
        "東京大都市とそのコントラスト",
        "皇居と現代的な地区",
        "伝統的な庭園に囲まれた古い京都の寺院",
        "奈良の神鹿と大仏",
        "料理の伝統がある賑やかな大阪",
        "広島の平和記念公園",
        "宮島の厳島神社",
        "日光の伝統的な湯元温泉でのリラックス"
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
          en: "Airport meeting, hotel transfer. Brief acquaintance with surroundings and welcome dinner.",
          ja: "空港でのお出迎え、ホテルへの送迎。周辺の簡単な紹介とウェルカムディナー。"
        }
      },
      {
        day: 2,
        title: {
          ru: "Токио: современность и традиции",
          en: "Tokyo: modernity and traditions",
          ja: "東京：現代性と伝統"
        },
        description: {
          ru: "Осмотр основных достопримечательностей Токио: храм Асакуса, сад Хамарикю, район Сибуя и Токийская телебашня.",
          en: "Tour of Tokyo's main attractions: Asakusa temple, Hamarikyu garden, Shibuya district and Tokyo Tower.",
          ja: "東京の主要観光地の見学：浅草寺、浜離宮庭園、渋谷地区、東京タワー。"
        }
      },
      {
        day: 3,
        title: {
          ru: "Экскурсия в Никко + онсен",
          en: "Nikko excursion + onsen",
          ja: "日光観光 + 温泉"
        },
        description: {
          ru: "Поездка в Никко, осмотр храмового комплекса Тосёгу, релакс в онсене Юмото.",
          en: "Trip to Nikko, tour of Toshogu temple complex, relaxation in Yumoto onsen.",
          ja: "日光への旅行、東照宮寺院群の見学、湯元温泉でのリラックス。"
        }
      },
      {
        day: 4,
        title: {
          ru: "Токио - Киото на синкансене",
          en: "Tokyo - Kyoto by shinkansen",
          ja: "東京 - 京都新幹線"
        },
        description: {
          ru: "Переезд на скоростном поезде в Киото. Вечерняя прогулка по району Гион.",
          en: "Transfer by bullet train to Kyoto. Evening walk through Gion district.",
          ja: "新幹線で京都への移動。祇園地区での夜の散歩。"
        }
      },
      {
        day: 5,
        title: {
          ru: "Киото: храмы и сады",
          en: "Kyoto: temples and gardens",
          ja: "京都：寺院と庭園"
        },
        description: {
          ru: "Посещение храмов Кинкаку-дзи (Золотой павильон), Рёан-дзи (храм с дзен-садом) и святилища Фусими Инари.",
          en: "Visit to Kinkaku-ji (Golden Pavilion), Ryoan-ji (temple with zen garden) and Fushimi Inari shrine.",
          ja: "金閣寺、龍安寺（禅庭園のある寺院）、伏見稲荷大社の訪問。"
        }
      },
      {
        day: 6,
        title: {
          ru: "Киото: продолжение знакомства",
          en: "Kyoto: continuing exploration",
          ja: "京都：探索の継続"
        },
        description: {
          ru: "Храм Киёмидзу-дэра, Философская тропа, традиционный район Понтотё.",
          en: "Kiyomizu-dera temple, Philosopher's Path, traditional Pontocho district.",
          ja: "清水寺、哲学の道、伝統的な先斗町地区。"
        }
      },
      {
        day: 7,
        title: {
          ru: "Нара - древняя столица",
          en: "Nara - ancient capital",
          ja: "奈良 - 古都"
        },
        description: {
          ru: "Переезд в Нару. Парк Нары с оленями, храм Тодай-дзи с Великим Буддой, святилище Касуга Тайся.",
          en: "Transfer to Nara. Nara Park with deer, Todai-ji temple with Great Buddha, Kasuga Taisha shrine.",
          ja: "奈良への移動。鹿がいる奈良公園、大仏がある東大寺、春日大社。"
        }
      },
      {
        day: 8,
        title: {
          ru: "Осака - кулинарная столица",
          en: "Osaka - culinary capital",
          ja: "大阪 - 料理の都"
        },
        description: {
          ru: "Переезд в Осаку. Замок Осаки, район Дотонбори, дегустация местной кухни.",
          en: "Transfer to Osaka. Osaka Castle, Dotonbori district, local cuisine tasting.",
          ja: "大阪への移動。大阪城、道頓堀地区、地元料理の試食。"
        }
      },
      {
        day: 9,
        title: {
          ru: "Хиросима - город мира",
          en: "Hiroshima - city of peace",
          ja: "広島 - 平和の街"
        },
        description: {
          ru: "Переезд в Хиросиму. Мемориальный парк мира, музей мира, купол Гэмбаку.",
          en: "Transfer to Hiroshima. Peace Memorial Park, Peace Museum, Genbaku Dome.",
          ja: "広島への移動。平和記念公園、平和記念資料館、原爆ドーム。"
        }
      },
      {
        day: 10,
        title: {
          ru: "Миядзима - священный остров",
          en: "Miyajima - sacred island",
          ja: "宮島 - 神聖な島"
        },
        description: {
          ru: "Поездка на остров Миядзима. Святилище Ицукусима с знаменитыми плавающими тории.",
          en: "Trip to Miyajima Island. Itsukushima Shrine with famous floating torii.",
          ja: "宮島への旅行。有名な浮かぶ鳥居のある厳島神社。"
        }
      },
      {
        day: 11,
        title: {
          ru: "Осака - свободное время",
          en: "Osaka - free time",
          ja: "大阪 - 自由時間"
        },
        description: {
          ru: "Возвращение в Осаку. Свободное время для шоппинга или дополнительных экскурсий.",
          en: "Return to Osaka. Free time for shopping or additional excursions.",
          ja: "大阪への帰還。ショッピングや追加の見学のための自由時間。"
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
          ru: "Трансфер в аэропорт и вылет домой.",
          en: "Transfer to airport and departure home.",
          ja: "空港への送迎と帰国。"
        }
      }
    ],
    included: {
      ru: [
        "Проживание в отелях 3-4* (11 ночей)",
        "Транспорт (включая JR Pass)",
        "Русскоговорящий гид",
        "Все экскурсии по программе",
        "Завтраки в отелях",
        "Входные билеты в храмы и музеи",
        "Онсен в Никко"
      ],
      en: [
        "Accommodation in 3-4* hotels (11 nights)",
        "Transport (including JR Pass)",
        "Russian-speaking guide",
        "All excursions according to program",
        "Breakfast at hotels",
        "Entrance tickets to temples and museums",
        "Onsen in Nikko"
      ],
      ja: [
        "3-4つ星ホテルでの宿泊（11泊）",
        "交通機関（JRパス含む）",
        "ロシア語を話すガイド",
        "プログラムに含まれるすべての見学",
        "ホテルでの朝食",
        "寺院や博物館の入場券",
        "日光での温泉"
      ]
    },
    excluded: {
      ru: [
        "Авиаперелеты",
        "Обеды и ужины (кроме приветственного)",
        "Личные расходы",
        "Страховка",
        "Виза"
      ],
      en: [
        "Flights",
        "Lunches and dinners (except welcome)",
        "Personal expenses",
        "Insurance",
        "Visa"
      ],
      ja: [
        "航空券",
        "昼食と夕食（ウェルカムを除く）",
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
        price: 800,
        description: {
          ru: "Улучшение категории отелей до 5 звезд на протяжении всего тура",
          en: "Hotel category upgrade to 5 stars throughout the tour",
          ja: "ツアー全体を通じてホテルカテゴリーを5つ星にアップグレード"
        }
      },
      {
        name: {
          ru: "Индивидуальный гид",
          en: "Private guide",
          ja: "プライベートガイド"
        },
        price: 1500,
        description: {
          ru: "Персональный гид только для вашей группы",
          en: "Personal guide only for your group",
          ja: "あなたのグループだけのための個人ガイド"
        }
      },
      {
        name: {
          ru: "Дополнительный день в Токио",
          en: "Additional day in Tokyo",
          ja: "東京での追加日"
        },
        price: 300,
        description: {
          ru: "Дополнительный день для осмотра Токио с гидом",
          en: "Additional day for Tokyo sightseeing with guide",
          ja: "ガイド付きの東京観光のための追加日"
        }
      },
      {
        name: {
          ru: "Ужины в традиционных ресторанах",
          en: "Dinners at traditional restaurants",
          ja: "伝統的なレストランでの夕食"
        },
        price: 400,
        description: {
          ru: "Включение ужинов в традиционных японских ресторанах",
          en: "Inclusion of dinners at traditional Japanese restaurants",
          ja: "伝統的な日本のレストランでの夕食の含有"
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
        ru: "легкая (много ходьбы)",
        en: "easy (lots of walking)",
        ja: "軽い（多くの歩行）"
      },
      bestSeasons: {
        ru: "весна (март-май), осень (сентябрь-ноябрь)",
        en: "spring (March-May), autumn (September-November)",
        ja: "春（3月-5月）、秋（9月-11月）"
      },
      languages: {
        ru: "русский, английский, японский гид",
        en: "Russian, English, Japanese guide",
        ja: "ロシア語、英語、日本語のガイド"
      }
    },
    packingList: {
      ru: [
        "Удобная обувь для ходьбы",
        "Легкая куртка (даже летом)",
        "Фотоаппарат",
        "Адаптер для розеток",
        "Наличные йены (многие места не принимают карты)"
      ],
      en: [
        "Comfortable walking shoes",
        "Light jacket (even in summer)",
        "Camera",
        "Power adapter",
        "Cash yen (many places don't accept cards)"
      ],
      ja: [
        "歩きやすい靴",
        "軽いジャケット（夏でも）",
        "カメラ",
        "電源アダプター",
        "現金円（多くの場所でカードが使えません）"
      ]
    },
    rating: 4.9,
    reviewCount: 124
  },
  {
    id: "culinary-journey-japan",
    category: "all-japan",
    popular: true,
    types: ["food", "culture"],
    title: {
      ru: 'Кулинарное путешествие по Японии',
      en: 'Culinary Journey Through Japan',
      ja: '日本グルメ旅行'
    },
    description: {
      ru: 'Гастрономический тур для знакомства с региональными кухнями Японии. От суши Токио до окономияки Осаки и кайсэки Киото, с мастер-классами от местных поваров и дегустациями в аутентичных ресторанах.',
      en: 'Gastronomic tour to discover Japan\'s regional cuisines. From Tokyo sushi to Osaka okonomiyaki and Kyoto kaiseki, with masterclasses from local chefs and tastings at authentic restaurants.',
      ja: '日本の地域料理を発見するためのグルメツアー。東京の寿司から大阪のお好み焼き、京都の懐石まで、地元のシェフによるマスタークラスと本格的なレストランでの試食付き。'
    },
    route: {
      ru: ["Токио", "Осака", "Киото", "Кобе"],
      en: ["Tokyo", "Osaka", "Kyoto", "Kobe"],
      ja: ["東京", "大阪", "京都", "神戸"]
    },
    routeDescription: {
      ru: 'Путешествие по кулинарным столицам Японии с мастер-классами и дегустациями, изучение сезонных особенностей блюд в каждом регионе',
      en: 'Journey through Japan\'s culinary capitals with masterclasses and tastings, studying seasonal dish features in each region',
      ja: 'マスタークラスと試食を含む日本の料理の都への旅、各地域の季節料理の特徴を学ぶ'
    },
    duration: 12,
    price: 5500,
    groupSizeMin: 6,
    groupSizeMax: 10,
    image: '/images/tours/culinary-journey-japan.png',
    seasons: ["spring", "summer", "autumn", "winter", "all-year"],
    seasonDescription: {
      ru: 'Круглый год - сезонные особенности блюд в каждом регионе',
      en: 'Year-round - seasonal dish features in each region',
      ja: '年間を通して - 各地域の季節料理の特徴'
    },
    highlights: {
      ru: [
        "Мастер-класс по приготовлению суши от токийского шеф-повара",
        "Уличная еда на рынке Куромон в Осаке",
        "Традиционный обед кайсэки в Киото",
        "Дегустация знаменитой говядины вагю в Кобе",
        "Посещение сакэ-пивоварни с дегустацией",
        "Чайная церемония в традиционном чайном домике",
        "Кулинарные сувениры и специи с местных рынков",
        "Знакомство с японским этикетом за столом"
      ],
      en: [
        "Sushi preparation masterclass by Tokyo chef",
        "Street food at Kuromon Market in Osaka",
        "Traditional kaiseki lunch in Kyoto",
        "Famous wagyu beef tasting in Kobe",
        "Sake brewery visit with tasting",
        "Tea ceremony in traditional tea house",
        "Culinary souvenirs and spices from local markets",
        "Introduction to Japanese dining etiquette"
      ],
      ja: [
        "東京シェフによる寿司作りマスタークラス",
        "大阪黒門市場での屋台料理",
        "京都での伝統的な懐石ランチ",
        "神戸での有名な和牛の試食",
        "試飲付きの酒蔵見学",
        "伝統的な茶室での茶道",
        "地元市場からの料理土産と香辛料",
        "日本の食事マナーの紹介"
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
          ru: "Встреча в аэропорту, размещение в отеле. Первое знакомство с японской кухней - ужин в традиционном ресторане.",
          en: "Airport meeting, hotel accommodation. First introduction to Japanese cuisine - dinner at traditional restaurant.",
          ja: "空港でのお出迎え、ホテルへのチェックイン。日本料理との初めての出会い - 伝統的なレストランでの夕食。"
        }
      },
      {
        day: 2,
        title: {
          ru: "Токио - мир суши",
          en: "Tokyo - world of sushi",
          ja: "東京 - 寿司の世界"
        },
        description: {
          ru: "Утром посещение рынка Цукидзи (внешний). Мастер-класс по приготовлению суши в школе кулинарии. Обед из собственноручно приготовленных суши.",
          en: "Morning visit to Tsukiji Market (outer). Sushi preparation masterclass at culinary school. Lunch of self-made sushi.",
          ja: "朝の築地市場（場外）見学。料理学校での寿司作りマスタークラス。自分で作った寿司のランチ。"
        }
      },
      {
        day: 3,
        title: {
          ru: "Токио - разнообразие столичной кухни",
          en: "Tokyo - capital cuisine diversity",
          ja: "東京 - 首都料理の多様性"
        },
        description: {
          ru: "Район Цукисима - тайяки и монджаяки. Посещение ресторана рамен в Сибуе. Вечерняя дегустация в изакае.",
          en: "Tsukishima district - taiyaki and monjayaki. Ramen restaurant visit in Shibuya. Evening tasting at izakaya.",
          ja: "月島地区 - たい焼きともんじゃ焼き。渋谷でのラーメン店訪問。居酒屋での夜の試食。"
        }
      },
      {
        day: 4,
        title: {
          ru: "Токио - высокая кухня",
          en: "Tokyo - haute cuisine",
          ja: "東京 - 高級料理"
        },
        description: {
          ru: "Обед в ресторане со звездой Мишлен. Посещение универмага с продуктовыми этажами - дегустация вагаси и других сладостей.",
          en: "Lunch at Michelin-starred restaurant. Department store food floors visit - wagashi and other sweets tasting.",
          ja: "ミシュラン星付きレストランでのランチ。デパートの食品フロア訪問 - 和菓子や他のお菓子の試食。"
        }
      },
      {
        day: 5,
        title: {
          ru: "Переезд в Осаку",
          en: "Transfer to Osaka",
          ja: "大阪への移動"
        },
        description: {
          ru: "Переезд на синкансене в Осаку. Вечерняя прогулка по Дотонбори с дегустацией уличной еды.",
          en: "Shinkansen transfer to Osaka. Evening walk through Dotonbori with street food tasting.",
          ja: "新幹線で大阪への移動。道頓堀での夜の散歩と屋台料理の試食。"
        }
      },
      {
        day: 6,
        title: {
          ru: "Осака - кулинарная столица",
          en: "Osaka - culinary capital",
          ja: "大阪 - 料理の都"
        },
        description: {
          ru: "Мастер-класс по приготовлению окономияки и такояки. Посещение рынка Куромон Итиба. Обед в традиционном ресторане.",
          en: "Okonomiyaki and takoyaki preparation masterclass. Kuromon Ichiba market visit. Lunch at traditional restaurant.",
          ja: "お好み焼きとたこ焼き作りマスタークラス。黒門市場見学。伝統的なレストランでのランチ。"
        }
      },
      {
        day: 7,
        title: {
          ru: "Осака - пивоварни и сакэ",
          en: "Osaka - breweries and sake",
          ja: "大阪 - ビール工場と日本酒"
        },
        description: {
          ru: "Посещение пивоварни Асахи. Дегустация в сакэ-баре. Ужин в ресторане кусикацу.",
          en: "Asahi brewery visit. Sake bar tasting. Dinner at kushikatsu restaurant.",
          ja: "アサヒビール工場見学。酒バーでの試飲。串カツレストランでの夕食。"
        }
      },
      {
        day: 8,
        title: {
          ru: "Киото - императорская кухня",
          en: "Kyoto - imperial cuisine",
          ja: "京都 - 宮廷料理"
        },
        description: {
          ru: "Переезд в Киото. Обед кайсэки в традиционном ресторане. Знакомство с философией японской высокой кухни.",
          en: "Transfer to Kyoto. Kaiseki lunch at traditional restaurant. Introduction to Japanese haute cuisine philosophy.",
          ja: "京都への移動。伝統的なレストランでの懐石ランチ。日本の高級料理の哲学の紹介。"
        }
      },
      {
        day: 9,
        title: {
          ru: "Киото - традиции и чай",
          en: "Kyoto - traditions and tea",
          ja: "京都 - 伝統と茶"
        },
        description: {
          ru: "Чайная церемония с мастером чая. Посещение рынка Нисики - дегустация традиционных продуктов. Ужин в ресторане тофу-кухни.",
          en: "Tea ceremony with tea master. Nishiki Market visit - traditional products tasting. Dinner at tofu cuisine restaurant.",
          ja: "茶道師範との茶道。錦市場見学 - 伝統的な食品の試食。豆腐料理レストランでの夕食。"
        }
      },
      {
        day: 10,
        title: {
          ru: "Кобе - говядина и порт",
          en: "Kobe - beef and port",
          ja: "神戸 - 牛肉と港"
        },
        description: {
          ru: "Переезд в Кобе. Обед с дегустацией знаменитой говядины вагю. Посещение сакэ-пивоварни в районе Нада.",
          en: "Transfer to Kobe. Lunch with famous wagyu beef tasting. Sake brewery visit in Nada district.",
          ja: "神戸への移動。有名な和牛の試食付きランチ。灘地区の酒蔵見学。"
        }
      },
      {
        day: 11,
        title: {
          ru: "Обратно в Осаку - финальная дегустация",
          en: "Back to Osaka - final tasting",
          ja: "大阪に戻る - 最終試食"
        },
        description: {
          ru: "Возвращение в Осаку. Финальный кулинарный тур по городу. Прощальный ужин с дегустацией всех региональных блюд.",
          en: "Return to Osaka. Final culinary city tour. Farewell dinner with all regional dishes tasting.",
          ja: "大阪への帰還。最終的な市内グルメツアー。すべての地域料理の試食付きお別れディナー。"
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
          ru: "Покупка кулинарных сувениров. Трансфер в аэропорт и вылет домой.",
          en: "Culinary souvenirs shopping. Transfer to airport and departure home.",
          ja: "料理土産の買い物。空港への送迎と帰国。"
        }
      }
    ],
    included: {
      ru: [
        "Проживание в отелях 3-4* (11 ночей)",
        "Транспорт (включая JR Pass)",
        "Гид-кулинар",
        "Все мастер-классы и дегустации",
        "Завтраки в отелях",
        "8 обедов и 6 ужинов по программе",
        "Посещение рынков и пивоварен",
        "Кулинарные сувениры"
      ],
      en: [
        "Accommodation in 3-4* hotels (11 nights)",
        "Transport (including JR Pass)",
        "Culinary guide",
        "All masterclasses and tastings",
        "Breakfast at hotels",
        "8 lunches and 6 dinners according to program",
        "Market and brewery visits",
        "Culinary souvenirs"
      ],
      ja: [
        "3-4つ星ホテルでの宿泊（11泊）",
        "交通機関（JRパス含む）",
        "料理ガイド",
        "すべてのマスタークラスと試食",
        "ホテルでの朝食",
        "プログラムに含まれる8回の昼食と6回の夕食",
        "市場と醸造所の見学",
        "料理土産"
      ]
    },
    excluded: {
      ru: [
        "Авиаперелеты",
        "Обеды и ужины не по программе",
        "Алкогольные напитки (кроме дегустаций)",
        "Личные расходы",
        "Страховка",
        "Виза"
      ],
      en: [
        "Flights",
        "Meals not included in program",
        "Alcoholic beverages (except tastings)",
        "Personal expenses",
        "Insurance",
        "Visa"
      ],
      ja: [
        "航空券",
        "プログラムに含まれない食事",
        "アルコール飲料（試飲を除く）",
        "個人的な支出",
        "保険",
        "ビザ"
      ]
    },
    additionalOptions: [
      {
        name: {
          ru: "Ужин в ресторане с 3 звездами Мишлен",
          en: "Dinner at 3 Michelin star restaurant",
          ja: "ミシュラン3つ星レストランでの夕食"
        },
        price: 300,
        description: {
          ru: "Эксклюзивный ужин в ресторане высочайшего уровня",
          en: "Exclusive dinner at highest level restaurant",
          ja: "最高レベルのレストランでの特別な夕食"
        }
      },
      {
        name: {
          ru: "Частный мастер-класс с известным поваром",
          en: "Private masterclass with famous chef",
          ja: "有名シェフとのプライベートマスタークラス"
        },
        price: 400,
        description: {
          ru: "Индивидуальное обучение от знаменитого японского шеф-повара",
          en: "Individual training from famous Japanese chef",
          ja: "有名な日本人シェフからの個人指導"
        }
      },
      {
        name: {
          ru: "Дополнительные дегустации саке",
          en: "Additional sake tastings",
          ja: "追加の日本酒試飲"
        },
        price: 150,
        description: {
          ru: "Расширенная программа дегустации премиальных сортов саке",
          en: "Extended program of premium sake varieties tasting",
          ja: "プレミアム日本酒品種の拡張試飲プログラム"
        }
      },
      {
        name: {
          ru: "Посещение фермы вагю в Кобе",
          en: "Wagyu farm visit in Kobe",
          ja: "神戸での和牛農場見学"
        },
        price: 200,
        description: {
          ru: "Экскурсия на ферму, где выращивают знаменитую говядину вагю",
          en: "Excursion to farm where famous wagyu beef is raised",
          ja: "有名な和牛が育てられる農場への見学"
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
        ru: "до 10 человек",
        en: "up to 10 people",
        ja: "最大10人"
      },
      physicalLevel: {
        ru: "легкая",
        en: "easy",
        ja: "軽い"
      },
      bestSeasons: {
        ru: "круглый год (каждый сезон имеет свои кулинарные особенности)",
        en: "year-round (each season has its culinary features)",
        ja: "年間を通して（各季節に料理の特徴があります）"
      },
      languages: {
        ru: "гид владеет русским, английским, японским",
        en: "guide speaks Russian, English, Japanese",
        ja: "ガイドはロシア語、英語、日本語を話します"
      }
    },
    culinaryFeatures: [
      {
        region: {
          ru: "Токио",
          en: "Tokyo",
          ja: "東京"
        },
        features: {
          ru: "свежайшие морепродукты, рамен, суши",
          en: "freshest seafood, ramen, sushi",
          ja: "最新鮮な海鮮、ラーメン、寿司"
        }
      },
      {
        region: {
          ru: "Осака",
          en: "Osaka",
          ja: "大阪"
        },
        features: {
          ru: "уличная еда, окономияки, такояки, кусикацу",
          en: "street food, okonomiyaki, takoyaki, kushikatsu",
          ja: "屋台料理、お好み焼き、たこ焼き、串カツ"
        }
      },
      {
        region: {
          ru: "Киото",
          en: "Kyoto",
          ja: "京都"
        },
        features: {
          ru: "традиционная кайсэки, тофу-кухня, матча",
          en: "traditional kaiseki, tofu cuisine, matcha",
          ja: "伝統的な懐石、豆腐料理、抹茶"
        }
      },
      {
        region: {
          ru: "Кобе",
          en: "Kobe",
          ja: "神戸"
        },
        features: {
          ru: "говядина вагю, сакэ, портовые деликатесы",
          en: "wagyu beef, sake, port delicacies",
          ja: "和牛、日本酒、港の珍味"
        }
      }
    ],
    packingList: {
      ru: [
        "Удобная обувь для прогулок по рынкам",
        "Свободная одежда (много дегустаций!)",
        "Фотоаппарат для кулинарных шедевров",
        "Блокнот для записи рецептов",
        "Место в чемодане для кулинарных сувениров"
      ],
      en: [
        "Comfortable shoes for market walks",
        "Loose clothing (lots of tastings!)",
        "Camera for culinary masterpieces",
        "Notebook for recipe notes",
        "Space in suitcase for culinary souvenirs"
      ],
      ja: [
        "市場散歩用の歩きやすい靴",
        "ゆったりした服装（試食がたくさん！）",
        "料理の傑作用のカメラ",
        "レシピメモ用のノート",
        "料理土産用のスーツケースのスペース"
      ]
    },
    culinaryDictionary: {
      ru: "Получите карманный японско-русский кулинарный словарь с названиями блюд, ингредиентов и полезными фразами для самостоятельных походов в рестораны.",
      en: "Receive a pocket Japanese-Russian culinary dictionary with dish names, ingredients and useful phrases for independent restaurant visits.",
      ja: "料理名、食材、独立したレストラン訪問のための便利なフレーズを含むポケット日本語-ロシア語料理辞書を受け取ります。"
    },
    rating: 4.9,
    reviewCount: 89
  },
  {
    id: "japan-art-lovers-tour",
    category: "all-japan",
    popular: true,
    types: ["culture", "temples"],
    title: {
      ru: 'Япония для ценителей искусства',
      en: 'Japan for Art Lovers',
      ja: 'アート愛好家のための日本'
    },
    description: {
      ru: 'Погружение в японское искусство: от традиционных музеев Токио до современных инсталляций на острове Наосима и традиционных ремесел Киото. Уникальное путешествие через призму искусства - от древних мастеров до современных художников.',
      en: 'Immersion into Japanese art: from traditional Tokyo museums to modern installations on Naoshima island and traditional Kyoto crafts. A unique journey through the lens of art - from ancient masters to contemporary artists.',
      ja: '日本の芸術への没入：東京の伝統的な博物館から直島の現代インスタレーション、京都の伝統工芸まで。古代の巨匠から現代のアーティストまで、芸術のレンズを通した独特な旅。'
    },
    route: {
      ru: ["Токио", "Наосима", "Тэсима", "Инудзима", "Киото"],
      en: ["Tokyo", "Naoshima", "Teshima", "Inujima", "Kyoto"],
      ja: ["東京", "直島", "豊島", "犬島", "京都"]
    },
    routeDescription: {
      ru: 'Путешествие через призму искусства: от древних мастеров до современных художников, знакомство с традиционными ремеслами и современными инсталляциями',
      en: 'Journey through art lens: from ancient masters to contemporary artists, exploring traditional crafts and modern installations',
      ja: '芸術のレンズを通した旅：古代の巨匠から現代のアーティストまで、伝統工芸と現代インスタレーションの探索'
    },
    duration: 12,
    price: 5000,
    groupSizeMin: 6,
    groupSizeMax: 8,
    image: '/images/tours/japan-art-lovers-tour.png',
    seasons: ["spring", "summer", "autumn", "winter", "all-year"],
    seasonDescription: {
      ru: 'Круглый год с сезонными выставками',
      en: 'Year-round with seasonal exhibitions',
      ja: '季節の展示会のある年間を通して'
    },
    highlights: {
      ru: [
        "Токийский национальный музей и его коллекция традиционного искусства",
        "Музей цифрового искусства teamLab Borderless",
        "Остров Наосима - музей под открытым небом",
        "Мастер-классы по традиционным ремеслам в Киото",
        "Посещение мастерской кимоно с демонстрацией техники окрашивания",
        "Сады и архитектура как формы искусства",
        "Современные галереи и инсталляции",
        "Встречи с современными художниками"
      ],
      en: [
        "Tokyo National Museum and its traditional art collection",
        "teamLab Borderless digital art museum",
        "Naoshima island - open-air museum",
        "Traditional crafts masterclasses in Kyoto",
        "Kimono workshop visit with dyeing technique demonstration",
        "Gardens and architecture as art forms",
        "Contemporary galleries and installations",
        "Meetings with contemporary artists"
      ],
      ja: [
        "東京国立博物館とその伝統芸術コレクション",
        "チームラボボーダレスデジタルアート博物館",
        "直島 - 野外博物館",
        "京都での伝統工芸マスタークラス",
        "染色技術の実演を含む着物工房訪問",
        "芸術形式としての庭園と建築",
        "現代ギャラリーとインスタレーション",
        "現代アーティストとの出会い"
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
          ru: "Встреча в аэропорту, размещение в отеле. Вечернее посещение района Омотэсандо - знакомство с современной архитектурой.",
          en: "Airport meeting, hotel accommodation. Evening visit to Omotesando district - introduction to modern architecture.",
          ja: "空港でのお出迎え、ホテルへのチェックイン。表参道地区の夜の訪問 - 現代建築の紹介。"
        }
      },
      {
        day: 2,
        title: {
          ru: "Токио - традиционное искусство",
          en: "Tokyo - traditional art",
          ja: "東京 - 伝統芸術"
        },
        description: {
          ru: "Токийский национальный музей - сокровища японского искусства. Музей Нэдзу - частная коллекция. Сад при музее как произведение ландшафтного искусства.",
          en: "Tokyo National Museum - treasures of Japanese art. Nezu Museum - private collection. Museum garden as landscape art piece.",
          ja: "東京国立博物館 - 日本美術の宝庫。根津美術館 - 私設コレクション。ランドスケープアートとしての博物館庭園。"
        }
      },
      {
        day: 3,
        title: {
          ru: "Токио - современное искусство",
          en: "Tokyo - contemporary art",
          ja: "東京 - 現代芸術"
        },
        description: {
          ru: "Утром музей современного искусства Мори. После обеда teamLab Borderless - погружение в цифровое искусство. Вечером район Ропонги - галереи современного искусства.",
          en: "Morning at Mori Art Museum. Afternoon teamLab Borderless - digital art immersion. Evening in Roppongi - contemporary art galleries.",
          ja: "朝の森美術館。午後のチームラボボーダレス - デジタルアートへの没入。夜の六本木 - 現代美術ギャラリー。"
        }
      },
      {
        day: 4,
        title: {
          ru: "Токио - архитектура и дизайн",
          en: "Tokyo - architecture and design",
          ja: "東京 - 建築とデザイン"
        },
        description: {
          ru: "Архитектурный тур: здания Тадао Андо, Кэнго Кумы. Посещение Токийского международного форума. Район Гиндза - дизайнерские магазины и галереи.",
          en: "Architecture tour: Tadao Ando, Kengo Kuma buildings. Tokyo International Forum visit. Ginza district - designer shops and galleries.",
          ja: "建築ツアー：安藤忠雄、隈研吾の建物。東京国際フォーラム見学。銀座地区 - デザイナーショップとギャラリー。"
        }
      },
      {
        day: 5,
        title: {
          ru: "Переезд на остров Наосима",
          en: "Transfer to Naoshima island",
          ja: "直島への移動"
        },
        description: {
          ru: "Переезд в Окаяму, затем паром на Наосима. Размещение в уникальном отеле-музее. Первое знакомство с островом искусств.",
          en: "Transfer to Okayama, then ferry to Naoshima. Accommodation in unique museum-hotel. First acquaintance with art island.",
          ja: "岡山への移動、その後直島へのフェリー。ユニークな美術館ホテルでの宿泊。アートの島との初めての出会い。"
        }
      },
      {
        day: 6,
        title: {
          ru: "Наосима - музей под открытым небом",
          en: "Naoshima - open-air museum",
          ja: "直島 - 野外博物館"
        },
        description: {
          ru: "Музей Бэнессе Хаус - коллекция современного искусства. Художественный проект \"Желтая тыква\" Кусамы Яёи. Архитектурный музей Тика.",
          en: "Benesse House Museum - contemporary art collection. Yayoi Kusama's \"Yellow Pumpkin\" art project. Chichu Art Museum.",
          ja: "ベネッセハウスミュージアム - 現代美術コレクション。草間彌生の「黄かぼちゃ」アートプロジェクト。地中美術館。"
        }
      },
      {
        day: 7,
        title: {
          ru: "Острова искусств",
          en: "Art islands",
          ja: "アートの島々"
        },
        description: {
          ru: "Посещение соседних островов Тэсима и Инудзима - художественные инсталляции в природе. Знакомство с проектом восстановления островов через искусство.",
          en: "Visit to neighboring Teshima and Inujima islands - art installations in nature. Introduction to island restoration project through art.",
          ja: "隣接する豊島と犬島の訪問 - 自然の中のアートインスタレーション。芸術を通じた島の復興プロジェクトの紹介。"
        }
      },
      {
        day: 8,
        title: {
          ru: "Киото - традиционные ремесла",
          en: "Kyoto - traditional crafts",
          ja: "京都 - 伝統工芸"
        },
        description: {
          ru: "Переезд в Киото. Посещение квартала Нисидзин - ткачество кимоно. Мастер-класс по окрашиванию тканей юдзэн.",
          en: "Transfer to Kyoto. Nishijin district visit - kimono weaving. Yuzen fabric dyeing masterclass.",
          ja: "京都への移動。西陣地区訪問 - 着物織り。友禅染めマスタークラス。"
        }
      },
      {
        day: 9,
        title: {
          ru: "Киото - керамика и лаки",
          en: "Kyoto - ceramics and lacquer",
          ja: "京都 - 陶芸と漆"
        },
        description: {
          ru: "Мастерская керамики в Киёмидзу - изготовление керамики киёмидзу-яки. Посещение мастерской урусси (японские лаки). Храм Киёмидзу-дэра как произведение архитектуры.",
          en: "Kiyomizu pottery workshop - making Kiyomizu-yaki ceramics. Urushi (Japanese lacquer) workshop visit. Kiyomizu-dera temple as architectural work.",
          ja: "清水陶芸工房 - 清水焼の制作。漆（日本の漆器）工房訪問。建築作品としての清水寺。"
        }
      },
      {
        day: 10,
        title: {
          ru: "Киото - сады как искусство",
          en: "Kyoto - gardens as art",
          ja: "京都 - 芸術としての庭園"
        },
        description: {
          ru: "Сад камней Рёан-дзи - философия дзен в ландшафте. Золотой павильон Кинкаку-дзи. Серебряный павильон Гинкаку-дзи и его сады. Каждый сад как произведение искусства.",
          en: "Ryoan-ji rock garden - zen philosophy in landscape. Golden Pavilion Kinkaku-ji. Silver Pavilion Ginkaku-ji and its gardens. Each garden as art piece.",
          ja: "龍安寺の石庭 - 風景の中の禅の哲学。金閣寺。銀閣寺とその庭園。芸術作品としての各庭園。"
        }
      },
      {
        day: 11,
        title: {
          ru: "Киото - каллиграфия и чайная церемония",
          en: "Kyoto - calligraphy and tea ceremony",
          ja: "京都 - 書道と茶道"
        },
        description: {
          ru: "Мастер-класс по японской каллиграфии сёдо. Чайная церемония как искусство - изучение эстетики ваби-саби. Посещение чайного домика.",
          en: "Japanese calligraphy shodo masterclass. Tea ceremony as art - studying wabi-sabi aesthetics. Tea house visit.",
          ja: "日本の書道マスタークラス。芸術としての茶道 - わび・さびの美学の学習。茶室の訪問。"
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
          ru: "Последние покупки - традиционные изделия ремесленников. Трансфер в аэропорт и вылет домой.",
          en: "Last shopping - traditional craftsmen products. Transfer to airport and departure home.",
          ja: "最後の買い物 - 伝統工芸品。空港への送迎と帰国。"
        }
      }
    ],
    included: {
      ru: [
        "Проживание в отелях 3-4* и дизайнерских отелях (11 ночей)",
        "Транспорт (включая JR Pass и паромы)",
        "Гид-искусствовед",
        "Все входные билеты в музеи и галереи",
        "Мастер-классы по традиционным ремеслам",
        "Завтраки в отелях",
        "Встречи с художниками и мастерами"
      ],
      en: [
        "Accommodation in 3-4* and designer hotels (11 nights)",
        "Transport (including JR Pass and ferries)",
        "Art historian guide",
        "All entrance tickets to museums and galleries",
        "Traditional crafts masterclasses",
        "Breakfast at hotels",
        "Meetings with artists and masters"
      ],
      ja: [
        "3-4つ星とデザイナーホテルでの宿泊（11泊）",
        "交通機関（JRパスとフェリー含む）",
        "美術史ガイド",
        "美術館とギャラリーのすべての入場券",
        "伝統工芸マスタークラス",
        "ホテルでの朝食",
        "アーティストと職人との出会い"
      ]
    },
    excluded: {
      ru: [
        "Авиаперелеты",
        "Обеды и ужины",
        "Покупка произведений искусства",
        "Личные расходы",
        "Страховка",
        "Виза"
      ],
      en: [
        "Flights",
        "Lunches and dinners",
        "Art purchases",
        "Personal expenses",
        "Insurance",
        "Visa"
      ],
      ja: [
        "航空券",
        "昼食と夕食",
        "美術品の購入",
        "個人的な支出",
        "保険",
        "ビザ"
      ]
    },
    additionalOptions: [
      {
        name: {
          ru: "Частная экскурсия с куратором музея",
          en: "Private tour with museum curator",
          ja: "博物館学芸員とのプライベートツアー"
        },
        price: 300,
        description: {
          ru: "Индивидуальная экскурсия с профессиональным куратором музея",
          en: "Individual tour with professional museum curator",
          ja: "プロの博物館学芸員との個人ツアー"
        }
      },
      {
        name: {
          ru: "Покупка произведений искусства у мастеров",
          en: "Art purchases from masters",
          ja: "職人からの美術品購入"
        },
        price: 100,
        priceType: "from",
        description: {
          ru: "Приобретение работ непосредственно у мастеров-ремесленников",
          en: "Purchasing works directly from craftsmen masters",
          ja: "職人の巨匠から直接作品を購入"
        }
      },
      {
        name: {
          ru: "Дополнительные мастер-классы",
          en: "Additional masterclasses",
          ja: "追加マスタークラス"
        },
        price: 150,
        priceType: "per_class",
        description: {
          ru: "Дополнительные занятия по традиционным ремеслам",
          en: "Additional traditional crafts classes",
          ja: "伝統工芸の追加クラス"
        }
      },
      {
        name: {
          ru: "Посещение частных коллекций",
          en: "Private collections visit",
          ja: "プライベートコレクション見学"
        },
        price: 200,
        description: {
          ru: "Доступ к частным художественным коллекциям",
          en: "Access to private art collections",
          ja: "プライベート美術コレクションへのアクセス"
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
        ru: "до 8 человек",
        en: "up to 8 people",
        ja: "最大8人"
      },
      physicalLevel: {
        ru: "легкая (много музеев)",
        en: "easy (lots of museums)",
        ja: "軽い（多くの博物館）"
      },
      bestSeasons: {
        ru: "круглый год (зависит от выставок)",
        en: "year-round (depends on exhibitions)",
        ja: "年間を通して（展示に依存）"
      },
      languages: {
        ru: "гид владеет русским, английским, японским",
        en: "guide speaks Russian, English, Japanese",
        ja: "ガイドはロシア語、英語、日本語を話します"
      }
    },
    artDirections: [
      {
        category: {
          ru: "Традиционное искусство",
          en: "Traditional art",
          ja: "伝統芸術"
        },
        types: {
          ru: "живопись тушью, каллиграфия, керамика",
          en: "ink painting, calligraphy, ceramics",
          ja: "墨絵、書道、陶芸"
        }
      },
      {
        category: {
          ru: "Ремесла",
          en: "Crafts",
          ja: "工芸"
        },
        types: {
          ru: "кимоно, лаки урусси, изделия из бамбука",
          en: "kimono, urushi lacquer, bamboo products",
          ja: "着物、漆、竹製品"
        }
      },
      {
        category: {
          ru: "Современное искусство",
          en: "Contemporary art",
          ja: "現代芸術"
        },
        types: {
          ru: "инсталляции, цифровое искусство",
          en: "installations, digital art",
          ja: "インスタレーション、デジタルアート"
        }
      },
      {
        category: {
          ru: "Архитектура",
          en: "Architecture",
          ja: "建築"
        },
        types: {
          ru: "от традиционных храмов до современных зданий",
          en: "from traditional temples to modern buildings",
          ja: "伝統的な寺院から現代建築まで"
        }
      }
    ],
    packingList: {
      ru: [
        "Удобная обувь для музеев",
        "Блокнот для зарисовок и заметок",
        "Фотоаппарат (где разрешено)",
        "Увеличительное стекло для детального рассмотрения",
        "Папка для хранения материалов мастер-классов"
      ],
      en: [
        "Comfortable shoes for museums",
        "Notebook for sketches and notes",
        "Camera (where permitted)",
        "Magnifying glass for detailed examination",
        "Folder for storing masterclass materials"
      ],
      ja: [
        "博物館用の歩きやすい靴",
        "スケッチとメモ用のノート",
        "カメラ（許可されている場所で）",
        "詳細観察用の拡大鏡",
        "マスタークラス資料保存用フォルダー"
      ]
    },
    usefulInfo: [
      {
        ru: "В некоторых музеях фотосъемка запрещена",
        en: "Photography is prohibited in some museums",
        ja: "一部の博物館では写真撮影が禁止されています"
      },
      {
        ru: "Многие музеи закрыты по понедельникам",
        en: "Many museums are closed on Mondays",
        ja: "多くの博物館は月曜日に閉館しています"
      },
      {
        ru: "В традиционных мастерских соблюдайте тишину",
        en: "Maintain silence in traditional workshops",
        ja: "伝統的な工房では静寂を保ってください"
      },
      {
        ru: "Покупки произведений искусства оформляются с документами",
        en: "Art purchases are processed with documentation",
        ja: "美術品の購入は文書で処理されます"
      }
    ],
    rating: 4.8,
    reviewCount: 76
  },
{
    id: "samurai-path-tour",
    category: "all-japan",
    popular: true,
    types: ["history", "temples"],
    title: {
      ru: 'Путь самурая',
      en: 'Way of the Samurai',
      ja: '侍の道'
    },
    description: {
      ru: 'Историческое путешествие по следам самурайского сословия Японии. От замков белых цапель до самурайских кварталов, изучение кодекса бусидо и традиций воинского сословия через архитектуру, музеи и сохранившиеся исторические районы.',
      en: 'Historical journey following the traces of Japan\'s samurai class. From white heron castles to samurai quarters, studying the bushido code and warrior traditions through architecture, museums and preserved historical districts.',
      ja: '日本の武士階級の足跡をたどる歴史的な旅。白鷺城から武士の居住区まで、建築、博物館、保存された歴史地区を通じて武士道の掟と武士の伝統を学ぶ。'
    },
    route: {
      ru: ["Осака", "Химэдзи", "Мацумото", "Кумамото", "Канадзава"],
      en: ["Osaka", "Himeji", "Matsumoto", "Kumamoto", "Kanazawa"],
      ja: ["大阪", "姫路", "松本", "熊本", "金沢"]
    },
    routeDescription: {
      ru: 'Путешествие по сохранившимся замкам и самурайским кварталам, изучение истории воинского сословия и традиций бусидо',
      en: 'Journey through preserved castles and samurai quarters, studying warrior class history and bushido traditions',
      ja: '保存された城と武士の居住区を巡り、武士階級の歴史と武士道の伝統を学ぶ旅'
    },
    duration: 13,
    price: 5300,
    groupSizeMin: 8,
    groupSizeMax: 12,
    image: '/images/tours/samurai-path-tour.png',
    seasons: ["spring", "summer", "autumn", "winter", "all-year"],
    seasonDescription: {
      ru: 'Круглый год - история не знает сезонов',
      en: 'Year-round - history knows no seasons',
      ja: '年間を通して - 歴史に季節はない'
    },
    highlights: {
      ru: [
        "Замок Химэдзи - объект ЮНЕСКО, \"замок белой цапли\"",
        "Замок Мацумото - один из старейших сохранившихся замков",
        "Замок Кумамото - крепость на Кюсю",
        "Самурайский квартал Нагамати в Канадзаве",
        "Музеи самурайского оружия и доспехов",
        "Демонстрация боевых искусств и фехтования",
        "Посещение синтоистских святилищ, связанных с самураями",
        "Знакомство с философией бусидо"
      ],
      en: [
        "Himeji Castle - UNESCO site, \"white heron castle\"",
        "Matsumoto Castle - one of oldest preserved castles",
        "Kumamoto Castle - fortress on Kyushu",
        "Nagamachi samurai quarter in Kanazawa",
        "Museums of samurai weapons and armor",
        "Martial arts and swordsmanship demonstrations",
        "Visits to Shinto shrines connected to samurai",
        "Introduction to bushido philosophy"
      ],
      ja: [
        "姫路城 - ユネスコ世界遺産、「白鷺城」",
        "松本城 - 最古の現存する城の一つ",
        "熊本城 - 九州の要塞",
        "金沢の長町武家屋敷跡",
        "武士の武器と鎧の博物館",
        "武術と剣術の実演",
        "武士に関連する神社の訪問",
        "武士道の哲学の紹介"
      ]
    },
    itinerary: [
      {
        day: 1,
        title: {
          ru: "Прибытие в Осаку",
          en: "Arrival in Osaka",
          ja: "大阪到着"
        },
        description: {
          ru: "Встреча в аэропорту, размещение в отеле. Вводная лекция об истории самурайского сословия.",
          en: "Airport meeting, hotel accommodation. Introductory lecture on samurai class history.",
          ja: "空港でのお出迎え、ホテルへのチェックイン。武士階級の歴史についての導入講義。"
        }
      },
      {
        day: 2,
        title: {
          ru: "Замок Химэдзи - белая цапля",
          en: "Himeji Castle - white heron",
          ja: "姫路城 - 白鷺"
        },
        description: {
          ru: "Поездка в Химэдзи. Посещение замка Химэдзи - объекта ЮНЕСКО. Изучение архитектуры и оборонительных систем. Сад Коко-эн.",
          en: "Trip to Himeji. Visit to Himeji Castle - UNESCO site. Study of architecture and defensive systems. Koko-en garden.",
          ja: "姫路への旅行。姫路城の訪問 - ユネスコ世界遺産。建築と防御システムの研究。好古園。"
        }
      },
      {
        day: 3,
        title: {
          ru: "Химэдзи - самурайская культура",
          en: "Himeji - samurai culture",
          ja: "姫路 - 武士文化"
        },
        description: {
          ru: "Музей замка с коллекцией самурайского оружия. Демонстрация традиционного фехтования кэндо. Посещение святилища, связанного с самурайскими кланами.",
          en: "Castle museum with samurai weapons collection. Traditional kendo swordsmanship demonstration. Visit to shrine connected to samurai clans.",
          ja: "武士の武器コレクションがある城の博物館。伝統的な剣道の実演。武士の氏族に関連する神社の訪問。"
        }
      },
      {
        day: 4,
        title: {
          ru: "Переезд в Мацумото",
          en: "Transfer to Matsumoto",
          ja: "松本への移動"
        },
        description: {
          ru: "Переезд в Мацумото через японские Альпы. Размещение в традиционном рёкане. Первое знакомство с замком Мацумото.",
          en: "Transfer to Matsumoto through Japanese Alps. Accommodation in traditional ryokan. First acquaintance with Matsumoto Castle.",
          ja: "日本アルプスを通って松本への移動。伝統的な旅館での宿泊。松本城との初めての出会い。"
        }
      },
      {
        day: 5,
        title: {
          ru: "Замок Мацумото - вороний замок",
          en: "Matsumoto Castle - crow castle",
          ja: "松本城 - 烏城"
        },
        description: {
          ru: "Подробное исследование замка Мацумото. Музей с коллекцией огнестрельного оружия. Изучение истории клана Мацудайра.",
          en: "Detailed exploration of Matsumoto Castle. Museum with firearms collection. Study of Matsudaira clan history.",
          ja: "松本城の詳細な探索。火器コレクションがある博物館。松平氏の歴史の研究。"
        }
      },
      {
        day: 6,
        title: {
          ru: "Мацумото - горные самураи",
          en: "Matsumoto - mountain samurai",
          ja: "松本 - 山の武士"
        },
        description: {
          ru: "Посещение исторического квартала Накамати. Музей самурайских доспехов. Прогулка по историческим улицам.",
          en: "Visit to historic Nakamachi quarter. Samurai armor museum. Walk through historic streets.",
          ja: "歴史的な中町地区の訪問。武士の鎧博物館。歴史的な街並みの散歩。"
        }
      },
      {
        day: 7,
        title: {
          ru: "Переезд в Кумамото",
          en: "Transfer to Kumamoto",
          ja: "熊本への移動"
        },
        description: {
          ru: "Перелет в Кумамото. Размещение в отеле. Вечернее знакомство с городом и местной кухней.",
          en: "Flight to Kumamoto. Hotel accommodation. Evening introduction to city and local cuisine.",
          ja: "熊本へのフライト。ホテルでの宿泊。市内と地元料理との夜の紹介。"
        }
      },
      {
        day: 8,
        title: {
          ru: "Замок Кумамото - неприступная крепость",
          en: "Kumamoto Castle - impregnable fortress",
          ja: "熊本城 - 難攻不落の要塞"
        },
        description: {
          ru: "Посещение замка Кумамото (восстановление после землетрясения 2016 г.). История Като Киёмасы. Сад Суйдзэндзи.",
          en: "Visit to Kumamoto Castle (restoration after 2016 earthquake). History of Kato Kiyomasa. Suizenji garden.",
          ja: "熊本城の訪問（2016年の地震後の復興）。加藤清正の歴史。水前寺庭園。"
        }
      },
      {
        day: 9,
        title: {
          ru: "Кумамото - самураи Кюсю",
          en: "Kumamoto - Kyushu samurai",
          ja: "熊本 - 九州の武士"
        },
        description: {
          ru: "Музей самурайских традиций. Знакомство с историей Сайго Такамори - последнего самурая. Мастер-класс по каллиграфии.",
          en: "Museum of samurai traditions. Introduction to history of Saigo Takamori - the last samurai. Calligraphy masterclass.",
          ja: "武士の伝統博物館。西郷隆盛の歴史の紹介 - 最後の武士。書道マスタークラス。"
        }
      },
      {
        day: 10,
        title: {
          ru: "Переезд в Канадзаву",
          en: "Transfer to Kanazawa",
          ja: "金沢への移動"
        },
        description: {
          ru: "Переезд в Канадзаву на синкансене. Размещение в историческом районе города.",
          en: "Transfer to Kanazawa by shinkansen. Accommodation in historic city district.",
          ja: "新幹線で金沢への移動。市内の歴史地区での宿泊。"
        }
      },
      {
        day: 11,
        title: {
          ru: "Канадзава - город самураев",
          en: "Kanazawa - city of samurai",
          ja: "金沢 - 武士の街"
        },
        description: {
          ru: "Самурайский квартал Нагамати - прогулка по сохранившимся улицам. Дом семьи Номура. Сад Кэнрокуэн - один из трех великих садов Японии.",
          en: "Nagamachi samurai quarter - walk through preserved streets. Nomura family house. Kenroku-en garden - one of Japan's three great gardens.",
          ja: "長町武家屋敷跡 - 保存された街並みの散歩。野村家。兼六園 - 日本三名園の一つ。"
        }
      },
      {
        day: 12,
        title: {
          ru: "Канадзава - традиции и ремесла",
          en: "Kanazawa - traditions and crafts",
          ja: "金沢 - 伝統と工芸"
        },
        description: {
          ru: "Посещение музея самурайской культуры. Мастер-класс по изготовлению цубы (гарда меча). Чайная церемония в самурайском доме.",
          en: "Visit to samurai culture museum. Tsuba (sword guard) making masterclass. Tea ceremony in samurai house.",
          ja: "武士文化博物館の訪問。鍔（刀の鍔）作りマスタークラス。武家屋敷での茶道。"
        }
      },
      {
        day: 13,
        title: {
          ru: "Завершение путешествия",
          en: "Journey completion",
          ja: "旅の完成"
        },
        description: {
          ru: "Финальная лекция о наследии самураев в современной Японии. Трансфер в аэропорт и вылет домой.",
          en: "Final lecture on samurai legacy in modern Japan. Transfer to airport and departure home.",
          ja: "現代日本における武士の遺産についての最終講義。空港への送迎と帰国。"
        }
      }
    ],
    included: {
      ru: [
        "Проживание в отелях 3-4* и традиционных рёканах (12 ночей)",
        "Транспорт (включая JR Pass и внутренние перелеты)",
        "Гид-историк",
        "Все входные билеты в замки и музеи",
        "Демонстрации боевых искусств",
        "Мастер-классы",
        "Завтраки в отелях и рёканах"
      ],
      en: [
        "Accommodation in 3-4* hotels and traditional ryokans (12 nights)",
        "Transport (including JR Pass and domestic flights)",
        "Historian guide",
        "All entrance tickets to castles and museums",
        "Martial arts demonstrations",
        "Masterclasses",
        "Breakfast at hotels and ryokans"
      ],
      ja: [
        "3-4つ星ホテルと伝統的な旅館での宿泊（12泊）",
        "交通機関（JRパスと国内線含む）",
        "歴史家ガイド",
        "城と博物館のすべての入場券",
        "武術の実演",
        "マスタークラス",
        "ホテルと旅館での朝食"
      ]
    },
    excluded: {
      ru: [
        "Авиаперелеты",
        "Обеды и ужины",
        "Покупка сувениров (реплики мечей, доспехов)",
        "Личные расходы",
        "Страховка",
        "Виза"
      ],
      en: [
        "Flights",
        "Lunches and dinners",
        "Souvenir purchases (sword replicas, armor)",
        "Personal expenses",
        "Insurance",
        "Visa"
      ],
      ja: [
        "航空券",
        "昼食と夕食",
        "土産の購入（刀のレプリカ、鎧）",
        "個人的な支出",
        "保険",
        "ビザ"
      ]
    },
    additionalOptions: [
      {
        name: {
          ru: "Частный урок кэндо с мастером",
          en: "Private kendo lesson with master",
          ja: "師範とのプライベート剣道レッスン"
        },
        price: 200,
        description: {
          ru: "Индивидуальное обучение традиционному японскому фехтованию",
          en: "Individual training in traditional Japanese swordsmanship",
          ja: "伝統的な日本の剣術の個人指導"
        }
      },
      {
        name: {
          ru: "Покупка реплики самурайского меча",
          en: "Samurai sword replica purchase",
          ja: "武士の刀のレプリカ購入"
        },
        price: 300,
        priceType: "from",
        description: {
          ru: "Качественная реплика традиционного японского меча",
          en: "Quality replica of traditional Japanese sword",
          ja: "伝統的な日本刀の高品質レプリカ"
        }
      },
      {
        name: {
          ru: "Ночевка в замке (где доступно)",
          en: "Castle overnight stay (where available)",
          ja: "城での宿泊（利用可能な場合）"
        },
        price: 150,
        description: {
          ru: "Уникальная возможность переночевать в историческом замке",
          en: "Unique opportunity to stay overnight in historic castle",
          ja: "歴史的な城での宿泊という独特な機会"
        }
      },
      {
        name: {
          ru: "Фотосессия в самурайских доспехах",
          en: "Photo session in samurai armor",
          ja: "武士の鎧での写真撮影"
        },
        price: 100,
        description: {
          ru: "Профессиональная фотосессия в традиционных самурайских доспехах",
          en: "Professional photo session in traditional samurai armor",
          ja: "伝統的な武士の鎧でのプロ写真撮影"
        }
      }
    ],
    practicalInfo: {
      duration: {
        ru: "13 дней / 12 ночей",
        en: "13 days / 12 nights",
        ja: "13日 / 12泊"
      },
      groupSize: {
        ru: "до 12 человек",
        en: "up to 12 people",
        ja: "最大12人"
      },
      physicalLevel: {
        ru: "средняя (подъемы в замки)",
        en: "medium (castle climbs)",
        ja: "中程度（城への登り）"
      },
      bestSeasons: {
        ru: "весна, осень (лучшая погода для замков)",
        en: "spring, autumn (best weather for castles)",
        ja: "春、秋（城に最適な天候）"
      },
      languages: {
        ru: "гид владеет русским, английским, японским",
        en: "guide speaks Russian, English, Japanese",
        ja: "ガイドはロシア語、英語、日本語を話します"
      }
    },
    historicalPeriods: [
      {
        period: {
          ru: "Период Камакура (1185-1333)",
          en: "Kamakura Period (1185-1333)",
          ja: "鎌倉時代（1185-1333）"
        },
        description: {
          ru: "становление самурайства",
          en: "rise of samurai class",
          ja: "武士階級の台頭"
        }
      },
      {
        period: {
          ru: "Период Муромати (1336-1573)",
          en: "Muromachi Period (1336-1573)",
          ja: "室町時代（1336-1573）"
        },
        description: {
          ru: "расцвет самурайской культуры",
          en: "flourishing of samurai culture",
          ja: "武士文化の隆盛"
        }
      },
      {
        period: {
          ru: "Период Эдо (1603-1868)",
          en: "Edo Period (1603-1868)",
          ja: "江戸時代（1603-1868）"
        },
        description: {
          ru: "мирные самураи",
          en: "peaceful samurai",
          ja: "平和な武士"
        }
      },
      {
        period: {
          ru: "Реставрация Мэйдзи (1868)",
          en: "Meiji Restoration (1868)",
          ja: "明治維新（1868）"
        },
        description: {
          ru: "конец эпохи самураев",
          en: "end of samurai era",
          ja: "武士時代の終わり"
        }
      }
    ],
    packingList: {
      ru: [
        "Удобная обувь для подъемов в замки",
        "Теплая одежда (в замках прохладно)",
        "Блокнот для исторических заметок",
        "Фотоаппарат",
        "Уважение к историческим местам"
      ],
      en: [
        "Comfortable shoes for castle climbs",
        "Warm clothing (castles are cool)",
        "Notebook for historical notes",
        "Camera",
        "Respect for historical sites"
      ],
      ja: [
        "城への登りに適した歩きやすい靴",
        "暖かい服装（城は涼しいです）",
        "歴史的メモ用のノート",
        "カメラ",
        "歴史的な場所への敬意"
      ]
    },
    bushidoCode: {
      ru: "В рамках тура участники знакомятся с основами бусидо - кодекса чести самурая, включающего принципы верности, мужества, справедливости и самодисциплины.",
      en: "During the tour, participants learn the basics of bushido - the samurai code of honor, including principles of loyalty, courage, justice and self-discipline.",
      ja: "ツアー中、参加者は武士道の基本を学びます - 忠義、勇気、正義、自己鍛錬の原則を含む武士の名誉の掟。"
    },
    rating: 4.7,
    reviewCount: 94
  },
  {
    id: "classic-tokyo-tour",
    category: "regional",
    popular: true,
    types: ["temples", "modern"],
    title: {
      ru: 'Классический тур по Токио',
      en: 'Classic Tokyo Tour',
      ja: '東京クラシックツアー'
    },
    description: {
      ru: 'Знакомство с основными достопримечательностями японской столицы за 4 дня. От древних храмов Асакусы до современных небоскребов Синдзюку, погружение в контрасты крупнейшего мегаполиса мира.',
      en: 'Introduction to the main attractions of Japanese capital in 4 days. From ancient temples of Asakusa to modern skyscrapers of Shinjuku, diving into contrasts of the world\'s largest metropolis.',
      ja: '4日間で日本の首都の主要な観光地の紹介。浅草の古い寺院から新宿の現代的な高層ビルまで、世界最大の大都市のコントラストに飛び込む。'
    },
    route: {
      ru: ["Асакуса", "Уэно", "Императорский дворец", "Сибуя", "Синдзюку"],
      en: ["Asakusa", "Ueno", "Imperial Palace", "Shibuya", "Shinjuku"],
      ja: ["浅草", "上野", "皇居", "渋谷", "新宿"]
    },
    routeDescription: {
      ru: 'Знакомство с основными достопримечательностями японской столицы, от древних храмов до современных районов',
      en: 'Introduction to main attractions of Japanese capital, from ancient temples to modern districts',
      ja: '古い寺院から現代的な地区まで、日本の首都の主要な観光地の紹介'
    },
    duration: 4,
    price: 1300,
    groupSizeMin: 8,
    groupSizeMax: 15,
    image: '/images/tours/classic-tokyo-tour.png',
    seasons: ["spring", "autumn"],
    seasonDescription: {
      ru: 'Весна: сакура в парке Уэно, осень: клены в садах',
      en: 'Spring: cherry blossoms in Ueno Park, autumn: maples in gardens',
      ja: '春：上野公園の桜、秋：庭園のもみじ'
    },
    highlights: {
      ru: [
        "Храм Сэнсо-дзи - старейший храм Токио в районе Асакуса",
        "Парк Уэно с музеями и зоопарком",
        "Императорский дворец и Восточные сады",
        "Сибуя с знаменитым перекрестком",
        "Синдзюку - деловой центр и развлечения",
        "Традиционные и современные районы",
        "Токийская уличная еда и рестораны",
        "Обзорные площадки с панорамными видами"
      ],
      en: [
        "Senso-ji Temple - Tokyo's oldest temple in Asakusa district",
        "Ueno Park with museums and zoo",
        "Imperial Palace and East Gardens",
        "Shibuya with famous crossing",
        "Shinjuku - business center and entertainment",
        "Traditional and modern districts",
        "Tokyo street food and restaurants",
        "Observation decks with panoramic views"
      ],
      ja: [
        "浅草地区の浅草寺 - 東京最古の寺院",
        "博物館と動物園がある上野公園",
        "皇居と東御苑",
        "有名な交差点がある渋谷",
        "新宿 - ビジネスセンターとエンターテイメント",
        "伝統的で現代的な地区",
        "東京の屋台料理とレストラン",
        "パノラマビューの展望台"
      ]
    },
    itinerary: [
      {
        day: 1,
        title: {
          ru: "Прибытие и Асакуса",
          en: "Arrival and Asakusa",
          ja: "到着と浅草"
        },
        description: {
          ru: "Встреча в аэропорту, размещение в отеле. Знакомство с районом Асакуса - храм Сэнсо-дзи, улица Накамисэ-дори. Первый ужин в традиционном ресторане.",
          en: "Airport meeting, hotel accommodation. Introduction to Asakusa district - Senso-ji temple, Nakamise-dori street. First dinner at traditional restaurant.",
          ja: "空港でのお出迎え、ホテルへのチェックイン。浅草地区の紹介 - 浅草寺、仲見世通り。伝統的なレストランでの最初の夕食。"
        }
      },
      {
        day: 2,
        title: {
          ru: "Уэно и центр",
          en: "Ueno and center",
          ja: "上野と中心部"
        },
        description: {
          ru: "Парк Уэно - один из лучших мест для наблюдения сакуры. Токийский национальный музей (по желанию). Императорский дворец и Восточные сады. Район Гинза для шоппинга.",
          en: "Ueno Park - one of best places for cherry blossom viewing. Tokyo National Museum (optional). Imperial Palace and East Gardens. Ginza district for shopping.",
          ja: "上野公園 - 桜観賞の最高の場所の一つ。東京国立博物館（オプション）。皇居と東御苑。ショッピングのための銀座地区。"
        }
      },
      {
        day: 3,
        title: {
          ru: "Современный Токио",
          en: "Modern Tokyo",
          ja: "現代の東京"
        },
        description: {
          ru: "Район Сибуя - знаменитый перекресток и статуя Хатико. Харадзюку - центр молодежной культуры. Омотэсандо с современной архитектурой. Вечером Роппонги.",
          en: "Shibuya district - famous crossing and Hachiko statue. Harajuku - youth culture center. Omotesando with modern architecture. Evening in Roppongi.",
          ja: "渋谷地区 - 有名な交差点とハチ公像。原宿 - 若者文化の中心地。現代建築の表参道。夜は六本木で。"
        }
      },
      {
        day: 4,
        title: {
          ru: "Синдзюку и финал",
          en: "Shinjuku and finale",
          ja: "新宿とフィナーレ"
        },
        description: {
          ru: "Синдзюку - деловой центр города. Парк Синдзюку Гёэн. Правительственное здание с бесплатной обзорной площадкой. Прощальный ужин и трансфер в аэропорт.",
          en: "Shinjuku - city business center. Shinjuku Gyoen Park. Government building with free observation deck. Farewell dinner and airport transfer.",
          ja: "新宿 - 市のビジネスセンター。新宿御苑。無料展望台がある都庁。お別れディナーと空港送迎。"
        }
      }
    ],
    included: {
      ru: [
        "Проживание в отеле 3-4* (3 ночи)",
        "Транспорт (Tokyo Metro Pass)",
        "Гид",
        "Входные билеты в храмы и сады",
        "Завтраки в отеле",
        "Приветственный и прощальный ужины"
      ],
      en: [
        "Accommodation in 3-4* hotel (3 nights)",
        "Transport (Tokyo Metro Pass)",
        "Guide",
        "Entrance tickets to temples and gardens",
        "Breakfast at hotel",
        "Welcome and farewell dinners"
      ],
      ja: [
        "3-4つ星ホテルでの宿泊（3泊）",
        "交通機関（東京メトロパス）",
        "ガイド",
        "寺院と庭園の入場券",
        "ホテルでの朝食",
        "ウェルカムとお別れディナー"
      ]
    },
    excluded: {
      ru: [
        "Авиаперелеты",
        "Обеды",
        "Входы в музеи (по желанию)",
        "Личные расходы",
        "Страховка",
        "Виза"
      ],
      en: [
        "Flights",
        "Lunches",
        "Museum entries (optional)",
        "Personal expenses",
        "Insurance",
        "Visa"
      ],
      ja: [
        "航空券",
        "昼食",
        "博物館入場（オプション）",
        "個人的な支出",
        "保険",
        "ビザ"
      ]
    },
    additionalOptions: [
      {
        name: {
          ru: "Посещение teamLab Borderless",
          en: "teamLab Borderless visit",
          ja: "チームラボボーダレス見学"
        },
        price: 50,
        description: {
          ru: "Посещение музея цифрового искусства teamLab Borderless",
          en: "Visit to teamLab Borderless digital art museum",
          ja: "チームラボボーダレスデジタルアートミュージアムの見学"
        }
      },
      {
        name: {
          ru: "Ужин в ресторане с мишленовской звездой",
          en: "Michelin starred restaurant dinner",
          ja: "ミシュラン星付きレストランでの夕食"
        },
        price: 150,
        description: {
          ru: "Эксклюзивный ужин в ресторане, отмеченном звездой Мишлен",
          en: "Exclusive dinner at Michelin starred restaurant",
          ja: "ミシュラン星付きレストランでの特別な夕食"
        }
      },
      {
        name: {
          ru: "Дополнительный день",
          en: "Additional day",
          ja: "追加日"
        },
        price: 200,
        description: {
          ru: "Дополнительный день в Токио с гидом",
          en: "Additional day in Tokyo with guide",
          ja: "ガイド付きの東京での追加日"
        }
      },
      {
        name: {
          ru: "Экскурсия на рынок Цукидзи",
          en: "Tsukiji Market tour",
          ja: "築地市場ツアー"
        },
        price: 80,
        description: {
          ru: "Утренняя экскурсия на знаменитый рыбный рынок",
          en: "Morning tour to famous fish market",
          ja: "有名な魚市場への朝のツアー"
        }
      }
    ],
    practicalInfo: {
      duration: {
        ru: "4 дня / 3 ночи",
        en: "4 days / 3 nights",
        ja: "4日 / 3泊"
      },
      groupSize: {
        ru: "до 15 человек",
        en: "up to 15 people",
        ja: "最大15人"
      },
      physicalLevel: {
        ru: "легкая (много ходьбы)",
        en: "easy (lots of walking)",
        ja: "軽い（多くの歩行）"
      },
      bestSeasons: {
        ru: "весна (сакура), осень (комфортная погода)",
        en: "spring (cherry blossoms), autumn (comfortable weather)",
        ja: "春（桜）、秋（快適な天候）"
      },
      languages: {
        ru: "гид владеет русским, английским, японским",
        en: "guide speaks Russian, English, Japanese",
        ja: "ガイドはロシア語、英語、日本語を話します"
      }
    },
    tokyoDistricts: [
      {
        district: {
          ru: "Асакуса",
          en: "Asakusa",
          ja: "浅草"
        },
        description: {
          ru: "традиционный, храмы, ремесленные мастерские",
          en: "traditional, temples, craft workshops",
          ja: "伝統的、寺院、工芸工房"
        }
      },
      {
        district: {
          ru: "Уэно",
          en: "Ueno",
          ja: "上野"
        },
        description: {
          ru: "культурный, музеи, парк, зоопарк",
          en: "cultural, museums, park, zoo",
          ja: "文化的、博物館、公園、動物園"
        }
      },
      {
        district: {
          ru: "Императорский дворец",
          en: "Imperial Palace",
          ja: "皇居"
        },
        description: {
          ru: "исторический центр, сады",
          en: "historic center, gardens",
          ja: "歴史的中心地、庭園"
        }
      },
      {
        district: {
          ru: "Сибуя",
          en: "Shibuya",
          ja: "渋谷"
        },
        description: {
          ru: "молодежный, шоппинг, развлечения",
          en: "youth, shopping, entertainment",
          ja: "若者、ショッピング、エンターテイメント"
        }
      },
      {
        district: {
          ru: "Синдзюку",
          en: "Shinjuku",
          ja: "新宿"
        },
        description: {
          ru: "деловой, небоскребы, рестораны",
          en: "business, skyscrapers, restaurants",
          ja: "ビジネス、高層ビル、レストラン"
        }
      }
    ],
    packingList: {
      ru: [
        "Удобная обувь для ходьбы",
        "Карта метро (предоставляется)",
        "Фотоаппарат",
        "Легкий рюкзак для покупок",
        "Наличные йены"
      ],
      en: [
        "Comfortable walking shoes",
        "Metro map (provided)",
        "Camera",
        "Light backpack for shopping",
        "Cash yen"
      ],
      ja: [
        "歩きやすい靴",
        "地下鉄マップ（提供されます）",
        "カメラ",
        "買い物用の軽いバックパック",
        "現金円"
      ]
    },
    usefulPhrases: {
      ru: "Участники получают карточку с основными фразами на японском языке для самостоятельных прогулок и покупок.",
      en: "Participants receive a card with basic Japanese phrases for independent walks and shopping.",
      ja: "参加者は独立した散歩と買い物のための基本的な日本語フレーズのカードを受け取ります。"
    },
    rating: 4.8,
    reviewCount: 298
  },
  {
    id: "mount-fuji-day-tour",
    category: "regional",
    popular: true,
    types: ["nature"],
    title: {
      ru: 'Однодневный тур на гору Фудзи',
      en: 'Mount Fuji Day Tour',
      ja: '富士山日帰りツアー'
    },
    description: {
      ru: 'Классический однодневный тур к символу Японии - священной горе Фудзи. Посещение 5-й станции горы, живописного озера Кавагутико и традиционной деревни Осино Хаккай с кристально чистыми источниками.',
      en: 'Classic day tour to Japan\'s symbol - sacred Mount Fuji. Visit to mountain\'s 5th station, scenic Lake Kawaguchi and traditional Oshino Hakkai village with crystal clear springs.',
      ja: '日本のシンボルである神聖な富士山への古典的な日帰りツアー。山の5合目、景色の美しい河口湖、澄んだ湧き水がある伝統的な忍野八海村の訪問。'
    },
    route: {
      ru: ["5-я станция Фудзи", "Озеро Кавагутико", "Деревня Осино Хаккай"],
      en: ["Fuji 5th Station", "Lake Kawaguchi", "Oshino Hakkai Village"],
      ja: ["富士山5合目", "河口湖", "忍野八海村"]
    },
    routeDescription: {
      ru: 'Классический тур к символу Японии с лучшими видовыми точками и традиционной деревней',
      en: 'Classic tour to Japan\'s symbol with best viewpoints and traditional village',
      ja: '最高の展望地点と伝統的な村がある日本のシンボルへの古典的なツアー'
    },
    duration: 1,
    price: 100,
    groupSizeMin: 10,
    groupSizeMax: 20,
    image: '/images/tours/mount-fuji-day-tour.png',
    seasons: ["spring", "summer", "autumn"],
    seasonDescription: {
      ru: 'Весна, лето, осень - лучшее время для восхождения: июль-август',
      en: 'Spring, summer, autumn - best climbing time: July-August',
      ja: '春、夏、秋 - 登山に最適な時期：7月-8月'
    },
    highlights: {
      ru: [
        "5-я станция Фудзи - самая высокая доступная точка на автобусе",
        "Озеро Кавагутико - лучшие виды на Фудзи с отражением",
        "Деревня Осино Хаккай с восемью священными источниками",
        "Традиционные дома с соломенными крышами",
        "Дегустация местных деликатесов",
        "Сувенирные магазины с символикой Фудзи",
        "Информация о восхождении на вершину",
        "Фотосессии с лучшими видами"
      ],
      en: [
        "Fuji 5th Station - highest point accessible by bus",
        "Lake Kawaguchi - best Fuji views with reflection",
        "Oshino Hakkai village with eight sacred springs",
        "Traditional thatched-roof houses",
        "Local delicacies tasting",
        "Souvenir shops with Fuji symbols",
        "Information about summit climbing",
        "Photo sessions with best views"
      ],
      ja: [
        "富士山5合目 - バスでアクセス可能な最高地点",
        "河口湖 - 反射する富士山の最高の眺め",
        "8つの神聖な湧き水がある忍野八海村",
        "茅葺き屋根の伝統的な家屋",
        "地元の珍味の試食",
        "富士山のシンボルがあるお土産店",
        "山頂登山についての情報",
        "最高の景色での写真撮影"
      ]
    },
    itinerary: [
      {
        time: "08:00",
        title: {
          ru: "Отправление из Токио",
          en: "Departure from Tokyo",
          ja: "東京からの出発"
        },
        description: {
          ru: "Сбор группы в центре Токио. Комфортабельный автобус до региона Фудзи-Пяти-Озер. Рассказ гида о горе Фудзи по пути.",
          en: "Group meeting in central Tokyo. Comfortable bus to Fuji Five Lakes region. Guide's story about Mount Fuji on the way.",
          ja: "東京中心部でのグループ集合。富士五湖地域への快適なバス。道中の富士山についてのガイドの話。"
        }
      },
      {
        time: "10:30",
        title: {
          ru: "5-я станция горы Фудзи",
          en: "Mount Fuji 5th Station",
          ja: "富士山5合目"
        },
        description: {
          ru: "Подъем на 5-ю станцию (2305 м над уровнем моря). Панорамные виды, сувенирные магазины, святилище. Короткая прогулка по тропе (по погоде).",
          en: "Ascent to 5th Station (2305m above sea level). Panoramic views, souvenir shops, shrine. Short trail walk (weather permitting).",
          ja: "5合目への登り（海抜2305m）。パノラマビュー、お土産店、神社。短いトレイル散歩（天候による）。"
        }
      },
      {
        time: "12:30",
        title: {
          ru: "Обед с видом на Фудзи",
          en: "Lunch with Fuji view",
          ja: "富士山を眺めながらのランチ"
        },
        description: {
          ru: "Традиционный японский обед в ресторане с панорамными окнами. Местные деликатесы региона.",
          en: "Traditional Japanese lunch at restaurant with panoramic windows. Local regional delicacies.",
          ja: "パノラマ窓のあるレストランでの伝統的な日本のランチ。地域の地元の珍味。"
        }
      },
      {
        time: "14:00",
        title: {
          ru: "Озеро Кавагутико",
          en: "Lake Kawaguchi",
          ja: "河口湖"
        },
        description: {
          ru: "Прогулка вдоль озера с лучшими видами на Фудзи. Фотосессии у берега. Канатная дорога на гору Качикачи (по желанию, доплата).",
          en: "Walk along the lake with best Fuji views. Photo sessions by the shore. Cable car to Mount Kachikachi (optional, surcharge).",
          ja: "富士山の最高の眺めがある湖沿いの散歩。湖畔での写真撮影。カチカチ山への ロープウェイ（オプション、追加料金）。"
        }
      },
      {
        time: "15:30",
        title: {
          ru: "Деревня Осино Хаккай",
          en: "Oshino Hakkai Village",
          ja: "忍野八海村"
        },
        description: {
          ru: "Посещение традиционной деревни с восемью священными источниками. Дегустация кристально чистой воды. Традиционные дома и ремесленные мастерские.",
          en: "Visit to traditional village with eight sacred springs. Crystal clear water tasting. Traditional houses and craft workshops.",
          ja: "8つの神聖な湧き水がある伝統的な村の訪問。澄んだ水の試飲。伝統的な家屋と工芸工房。"
        }
      },
      {
        time: "17:00",
        title: {
          ru: "Возвращение в Токио",
          en: "Return to Tokyo",
          ja: "東京への帰還"
        },
        description: {
          ru: "Отправление обратно в Токио. Прибытие около 19:30.",
          en: "Departure back to Tokyo. Arrival around 19:30.",
          ja: "東京への出発。19:30頃到着。"
        }
      }
    ],
    included: {
      ru: [
        "Транспорт из/в Токио на комфортабельном автобусе",
        "Гид",
        "Обед в ресторане с видом на Фудзи",
        "Все входные билеты",
        "Дегустация воды из источников"
      ],
      en: [
        "Transport from/to Tokyo by comfortable bus",
        "Guide",
        "Lunch at restaurant with Fuji view",
        "All entrance tickets",
        "Spring water tasting"
      ],
      ja: [
        "快適なバスでの東京からの往復交通",
        "ガイド",
        "富士山の眺めがあるレストランでのランチ",
        "すべての入場券",
        "湧き水の試飲"
      ]
    },
    excluded: {
      ru: [
        "Канатная дорога (¥900, по желанию)",
        "Личные расходы",
        "Сувениры",
        "Дополнительные напитки"
      ],
      en: [
        "Cable car (¥900, optional)",
        "Personal expenses",
        "Souvenirs",
        "Additional drinks"
      ],
      ja: [
        "ロープウェイ（¥900、オプション）",
        "個人的な支出",
        "お土産",
        "追加の飲み物"
      ]
    },
    additionalOptions: [
      {
        name: {
          ru: "Канатная дорога на гору Качикачи",
          en: "Cable car to Mount Kachikachi",
          ja: "カチカチ山ロープウェイ"
        },
        price: 15,
        description: {
          ru: "Панорамные виды на озеро Кавагутико и гору Фудзи",
          en: "Panoramic views of Lake Kawaguchi and Mount Fuji",
          ja: "河口湖と富士山のパノラマビュー"
        }
      },
      {
        name: {
          ru: "Восхождение на вершину (июль-август, отдельный тур)",
          en: "Summit climbing (July-August, separate tour)",
          ja: "山頂登山（7月-8月、別ツアー）"
        },
        price: 200,
        description: {
          ru: "Двухдневное восхождение с ночевкой в горной хижине",
          en: "Two-day climb with overnight stay in mountain hut",
          ja: "山小屋での一泊を含む2日間の登山"
        }
      },
      {
        name: {
          ru: "Ужин в рёкане у подножия",
          en: "Dinner at ryokan at the foot",
          ja: "麓の旅館での夕食"
        },
        price: 80,
        description: {
          ru: "Традиционный ужин в японской гостинице с видом на Фудзи",
          en: "Traditional dinner at Japanese inn with Fuji view",
          ja: "富士山の眺めがある日本の宿での伝統的な夕食"
        }
      }
    ],
    practicalInfo: {
      duration: {
        ru: "12 часов (08:00-20:00)",
        en: "12 hours (08:00-20:00)",
        ja: "12時間（08:00-20:00）"
      },
      groupSize: {
        ru: "до 20 человек",
        en: "up to 20 people",
        ja: "最大20人"
      },
      physicalLevel: {
        ru: "легкая",
        en: "easy",
        ja: "軽い"
      },
      bestSeasons: {
        ru: "апрель-ноябрь (зимой дорога на 5-ю станцию закрыта)",
        en: "April-November (winter road to 5th station closed)",
        ja: "4月-11月（冬は5合目への道路が閉鎖）"
      },
      languages: {
        ru: "гид владеет русским, английским, японским",
        en: "guide speaks Russian, English, Japanese",
        ja: "ガイドはロシア語、英語、日本語を話します"
      }
    },
    weatherInfo: [
      {
        ru: "Гора Фудзи видна ясно только в 30% дней",
        en: "Mount Fuji is clearly visible only 30% of days",
        ja: "富士山がはっきり見えるのは日数の30%のみ"
      },
      {
        ru: "Лучшая видимость: раннее утро и поздний вечер",
        en: "Best visibility: early morning and late evening",
        ja: "最高の視界：早朝と夕方"
      },
      {
        ru: "В случае плохой погоды тур не отменяется",
        en: "Tour is not cancelled in case of bad weather",
        ja: "悪天候の場合でもツアーはキャンセルされません"
      },
      {
        ru: "Альтернативная программа при закрытой дороге",
        en: "Alternative program when road is closed",
        ja: "道路が閉鎖されている場合の代替プログラム"
      }
    ],
    packingList: {
      ru: [
        "Теплую куртку (на высоте холодно даже летом)",
        "Удобную обувь для прогулок",
        "Фотоаппарат с заряженным аккумулятором",
        "Солнцезащитные очки и крем",
        "Наличные йены для сувениров"
      ],
      en: [
        "Warm jacket (it's cold at altitude even in summer)",
        "Comfortable walking shoes",
        "Camera with charged battery",
        "Sunglasses and sunscreen",
        "Cash yen for souvenirs"
      ],
      ja: [
        "暖かいジャケット（夏でも高地は寒い）",
        "歩きやすい靴",
        "充電されたバッテリーのカメラ",
        "サングラスと日焼け止め",
        "お土産用の現金円"
      ]
    },
    climbingSeason: {
      ru: "Для тех, кто хочет подняться на вершину Фудзи: сезон только июль-сентябрь, продолжительность 2 дня с ночевкой в горной хижине, хорошая физическая форма обязательна.",
      en: "For those who want to climb to Fuji summit: season only July-September, duration 2 days with overnight in mountain hut, good physical condition required.",
      ja: "富士山頂に登りたい方へ：シーズンは7月-9月のみ、山小屋での一泊を含む2日間、良好な体調が必要。"
    },
    rating: 4.7,
    reviewCount: 445
  },
  {
    id: "otaku-tokyo-tour",
    category: "regional",
    popular: true,
    types: ["anime", "modern"],
    title: {
      ru: 'Отаку-тур по Токио',
      en: 'Otaku Tour of Tokyo',
      ja: '東京オタクツアー'
    },
    description: {
      ru: 'Специальный тур для любителей аниме, манги и японской поп-культуры. От электронного района Акихабара до музея Гибли, знакомство с центрами отаку-культуры и современными технологическими развлечениями.',
      en: 'Special tour for anime, manga and Japanese pop culture lovers. From electronics district Akihabara to Ghibli Museum, exploring otaku culture centers and modern technological entertainment.',
      ja: 'アニメ、マンガ、日本のポップカルチャー愛好家のための特別なツアー。電子街秋葉原からジブリ美術館まで、オタク文化の中心地と現代の技術エンターテイメントの探索。'
    },
    route: {
      ru: ["Акихабара", "Накано Бродвей", "Икэбукуро", "Музей Гибли", "teamLab", "Парки аттракционов"],
      en: ["Akihabara", "Nakano Broadway", "Ikebukuro", "Ghibli Museum", "teamLab", "Theme Parks"],
      ja: ["秋葉原", "中野ブロードウェイ", "池袋", "ジブリ美術館", "チームラボ", "テーマパーク"]
    },
    routeDescription: {
      ru: 'Путешествие по центрам японской поп-культуры с рекомендациями по музеям teamLab и паркам аттракционов',
      en: 'Journey through Japanese pop culture centers with recommendations for teamLab museums and theme parks',
      ja: 'チームラボ美術館とテーマパークの推薦を含む日本のポップカルチャーセンターを巡る旅'
    },
    duration: 2,
    price: 550,
    groupSizeMin: 6,
    groupSizeMax: 12,
    image: '/images/tours/otaku-tokyo-tour.png',
    seasons: ["summer"],
    seasonDescription: {
      ru: 'Лето: аниме-фестивали и косплей-мероприятия',
      en: 'Summer: anime festivals and cosplay events',
      ja: '夏：アニメフェスティバルとコスプレイベント'
    },
    highlights: {
      ru: [
        "Акихабара - мекка электроники и аниме-культуры",
        "Накано Бродвей - крупнейший торговый центр манги",
        "Икэбукуро - женская отаку-культура и аниме-магазины",
        "Музей Гибли - мир Миядзаки Хаяо",
        "teamLab - интерактивное цифровое искусство",
        "Парки аттракционов с аниме-тематикой",
        "Мастер-классы по рисованию манги",
        "Посещение аниме-кафе и мейд-кафе"
      ],
      en: [
        "Akihabara - electronics and anime culture mecca",
        "Nakano Broadway - largest manga shopping center",
        "Ikebukuro - female otaku culture and anime shops",
        "Ghibli Museum - world of Hayao Miyazaki",
        "teamLab - interactive digital art",
        "Anime-themed amusement parks",
        "Manga drawing masterclasses",
        "Anime cafes and maid cafes visits"
      ],
      ja: [
        "秋葉原 - 電子機器とアニメ文化のメッカ",
        "中野ブロードウェイ - 最大のマンガショッピングセンター",
        "池袋 - 女性オタク文化とアニメショップ",
        "ジブリ美術館 - 宮崎駿の世界",
        "チームラボ - インタラクティブデジタルアート",
        "アニメテーマの遊園地",
        "マンガ描画マスタークラス",
        "アニメカフェとメイドカフェの訪問"
      ]
    },
    itinerary: [
      {
        day: 1,
        title: {
          ru: "Акихабара - электронная мекка",
          en: "Akihabara - electronics mecca",
          ja: "秋葉原 - 電子機器のメッカ"
        },
        description: {
          ru: "Знакомство с районом Акихабара. Многоэтажные магазины электроники и аниме-товаров. Мейд-кафе для погружения в культуру. Покупка фигурок и манги.",
          en: "Introduction to Akihabara district. Multi-story electronics and anime goods stores. Maid cafe for cultural immersion. Figurines and manga shopping.",
          ja: "秋葉原地区の紹介。多階層の電子機器とアニメ商品店。文化に没入するためのメイドカフェ。フィギュアとマンガの買い物。"
        }
      },
      {
        day: 2,
        title: {
          ru: "Накано и Икэбукуро",
          en: "Nakano and Ikebukuro",
          ja: "中野と池袋"
        },
        description: {
          ru: "Утром посещение Накано Бродвей - 4 этажа манги, винтажных игрушек и редких товаров. После обеда Икэбукуро - женский отаку-рай, анимэйт, косплей-магазины.",
          en: "Morning visit to Nakano Broadway - 4 floors of manga, vintage toys and rare items. Afternoon Ikebukuro - female otaku paradise, Animate, cosplay shops.",
          ja: "朝の中野ブロードウェイ訪問 - マンガ、ヴィンテージ玩具、レアアイテムの4フロア。午後の池袋 - 女性オタクの楽園、アニメイト、コスプレショップ。"
        }
      }
    ],
    mainLocations: [
      {
        area: {
          ru: "Акихабара (День 1)",
          en: "Akihabara (Day 1)",
          ja: "秋葉原（1日目）"
        },
        spots: [
          {
            ru: "Yodobashi Camera - многоэтажный магазин электроники",
            en: "Yodobashi Camera - multi-story electronics store",
            ja: "ヨドバシカメラ - 多階層電子機器店"
          },
          {
            ru: "Mandarake - крупнейший магазин подержанной манги",
            en: "Mandarake - largest used manga store",
            ja: "まんだらけ - 最大の中古マンガ店"
          },
          {
            ru: "Maid Cafe - традиционное мейд-кафе с шоу",
            en: "Maid Cafe - traditional maid cafe with show",
            ja: "メイドカフェ - ショー付き伝統的なメイドカフェ"
          },
          {
            ru: "Radio Kaikan - здание с аниме и фигурками",
            en: "Radio Kaikan - building with anime and figurines",
            ja: "ラジオ会館 - アニメとフィギュアのビル"
          },
          {
            ru: "Don Quijote - круглосуточный магазин всего",
            en: "Don Quijote - 24-hour everything store",
            ja: "ドン・キホーテ - 24時間営業の何でも店"
          }
        ]
      },
      {
        area: {
          ru: "Накано Бродвей (День 2, утро)",
          en: "Nakano Broadway (Day 2, morning)",
          ja: "中野ブロードウェイ（2日目、朝）"
        },
        spots: [
          {
            ru: "Mandarake Complex - 12 магазинов на разных этажах",
            en: "Mandarake Complex - 12 stores on different floors",
            ja: "まんだらけコンプレックス - 異なる階の12店舗"
          },
          {
            ru: "Винтажные игрушки - редкие коллекционные предметы",
            en: "Vintage toys - rare collectible items",
            ja: "ヴィンテージ玩具 - レアコレクティブアイテム"
          },
          {
            ru: "Cosplay костюмы - аренда и покупка",
            en: "Cosplay costumes - rental and purchase",
            ja: "コスプレ衣装 - レンタルと購入"
          },
          {
            ru: "Артбуки и дописи - от известных художников",
            en: "Artbooks and doujinshi - from famous artists",
            ja: "アートブックと同人誌 - 有名アーティストから"
          }
        ]
      },
      {
        area: {
          ru: "Икэбукуро (День 2, вечер)",
          en: "Ikebukuro (Day 2, evening)",
          ja: "池袋（2日目、夜）"
        },
        spots: [
          {
            ru: "Animate - крупнейшая сеть аниме-товаров",
            en: "Animate - largest anime goods chain",
            ja: "アニメイト - 最大のアニメ商品チェーン"
          },
          {
            ru: "Pokemon Center - официальный магазин покемонов",
            en: "Pokemon Center - official Pokemon store",
            ja: "ポケモンセンター - 公式ポケモンストア"
          },
          {
            ru: "Otome Road - улица для девушек-отаку",
            en: "Otome Road - street for female otaku",
            ja: "乙女ロード - 女性オタクのための通り"
          },
          {
            ru: "Butler Cafe - кафе с мужчинами-дворецкими",
            en: "Butler Cafe - cafe with male butlers",
            ja: "執事カフェ - 男性執事のいるカフェ"
          }
        ]
      }
    ],
    additionalActivities: [
      {
        name: {
          ru: "Музей Гибли (по записи)",
          en: "Ghibli Museum (by reservation)",
          ja: "ジブリ美術館（予約制）"
        },
        description: {
          ru: "Волшебный мир студии Гибли и Миядзаки Хаяо. Эксклюзивные экспонаты, короткометражки, доступные только в музее.",
          en: "Magical world of Studio Ghibli and Hayao Miyazaki. Exclusive exhibits, short films available only in museum.",
          ja: "スタジオジブリと宮崎駿の魔法の世界。美術館でのみ利用可能な独占展示品、短編映画。"
        }
      },
      {
        name: {
          ru: "teamLab Borderless/Planets",
          en: "teamLab Borderless/Planets",
          ja: "チームラボボーダレス/プラネッツ"
        },
        description: {
          ru: "Интерактивное цифровое искусство. Иммерсивные инсталляции, где посетители становятся частью произведения.",
          en: "Interactive digital art. Immersive installations where visitors become part of the artwork.",
          ja: "インタラクティブデジタルアート。訪問者がアートワークの一部となるイマーシブインスタレーション。"
        }
      },
      {
        name: {
          ru: "Парки аттракционов",
          en: "Theme Parks",
          ja: "テーマパーク"
        },
        description: {
          ru: "Tokyo Disneyland/DisneySea с японскими особенностями, Joypolis - крытый парк Sega с VR-аттракционами, Namja Town - тематический парк в Икэбукуро",
          en: "Tokyo Disneyland/DisneySea with Japanese features, Joypolis - indoor Sega park with VR attractions, Namja Town - theme park in Ikebukuro",
          ja: "日本の特色がある東京ディズニーランド/ディズニーシー、ジョイポリス - VRアトラクション付きセガの屋内パーク、ナムジャタウン - 池袋のテーマパーク"
        }
      }
    ],
    included: {
      ru: [
        "Проживание в отеле 3* в Акихабаре (1 ночь)",
        "Транспорт (Tokyo Metro Pass)",
        "Гид-отаку",
        "Посещение мейд-кафе с шоу",
        "Мастер-класс по рисованию манги",
        "Карта отаку-мест Токио"
      ],
      en: [
        "Accommodation in 3* hotel in Akihabara (1 night)",
        "Transport (Tokyo Metro Pass)",
        "Otaku guide",
        "Maid cafe visit with show",
        "Manga drawing masterclass",
        "Tokyo otaku spots map"
      ],
      ja: [
        "秋葉原の3つ星ホテルでの宿泊（1泊）",
        "交通機関（東京メトロパス）",
        "オタクガイド",
        "ショー付きメイドカフェ訪問",
        "マンガ描画マスタークラス",
        "東京オタクスポットマップ"
      ]
    },
    excluded: {
      ru: [
        "Входы в музеи (по желанию)",
        "Покупка аниме-товаров",
        "Питание (кроме мейд-кафе)",
        "Парки аттракционов",
        "Личные расходы"
      ],
      en: [
        "Museum entries (optional)",
        "Anime goods purchases",
        "Meals (except maid cafe)",
        "Theme parks",
        "Personal expenses"
      ],
      ja: [
        "博物館入場（オプション）",
        "アニメ商品購入",
        "食事（メイドカフェ除く）",
        "テーマパーク",
        "個人的な支出"
      ]
    },
    additionalOptions: [
      {
        name: {
          ru: "Билет в музей Гибли",
          en: "Ghibli Museum ticket",
          ja: "ジブリ美術館チケット"
        },
        price: 20,
        description: {
          ru: "Входной билет в музей Гибли (при наличии мест)",
          en: "Ghibli Museum entrance ticket (subject to availability)",
          ja: "ジブリ美術館入場券（空席状況による）"
        }
      },
      {
        name: {
          ru: "teamLab Borderless",
          en: "teamLab Borderless",
          ja: "チームラボボーダレス"
        },
        price: 50,
        description: {
          ru: "Билет в интерактивный музей цифрового искусства",
          en: "Ticket to interactive digital art museum",
          ja: "インタラクティブデジタルアート美術館のチケット"
        }
      },
      {
        name: {
          ru: "Парк Диснейленд на день",
          en: "Disneyland park for day",
          ja: "ディズニーランド1日パーク"
        },
        price: 100,
        description: {
          ru: "Однодневный билет в Tokyo Disneyland",
          en: "One-day ticket to Tokyo Disneyland",
          ja: "東京ディズニーランドの1日券"
        }
      },
      {
        name: {
          ru: "Покупка лимитированных фигурок",
          en: "Limited edition figurines purchase",
          ja: "限定フィギュア購入"
        },
        price: 50,
        priceType: "from",
        description: {
          ru: "Помощь в поиске и покупке редких коллекционных фигурок",
          en: "Assistance in finding and purchasing rare collectible figurines",
          ja: "レアコレクティブフィギュアの検索と購入の支援"
        }
      }
    ],
    practicalInfo: {
      duration: {
        ru: "2 дня / 1 ночь",
        en: "2 days / 1 night",
        ja: "2日 / 1泊"
      },
      groupSize: {
        ru: "до 12 человек",
        en: "up to 12 people",
        ja: "最大12人"
      },
      physicalLevel: {
        ru: "легкая",
        en: "easy",
        ja: "軽い"
      },
      bestSeasons: {
        ru: "лето (фестивали), но круглый год",
        en: "summer (festivals), but year-round",
        ja: "夏（フェスティバル）、しかし年間を通して"
      },
      languages: {
        ru: "гид владеет русским, английским, японским и отаку-сленгом",
        en: "guide speaks Russian, English, Japanese and otaku slang",
        ja: "ガイドはロシア語、英語、日本語、オタクスラングを話します"
      }
    },
    usefulInfo: [
      {
        ru: "Многие магазины открыты до 22:00",
        en: "Many stores open until 22:00",
        ja: "多くの店舗は22:00まで営業"
      },
      {
        ru: "В музей Гибли билеты только по предварительной записи",
        en: "Ghibli Museum tickets only by advance reservation",
        ja: "ジブリ美術館のチケットは事前予約のみ"
      },
      {
        ru: "Tax-free shopping доступен для туристов",
        en: "Tax-free shopping available for tourists",
        ja: "観光客向けの免税ショッピングが利用可能"
      },
      {
        ru: "Фотографирование в некоторых кафе ограничено",
        en: "Photography restricted in some cafes",
        ja: "一部のカフェでは写真撮影が制限されています"
      }
    ],
    packingList: {
      ru: [
        "Дополнительное место в чемодане для покупок",
        "Наличные йены (многие места не принимают карты)",
        "Фотоаппарат",
        "Powerbank для телефона",
        "Список желаемых покупок"
      ],
      en: [
        "Extra space in suitcase for purchases",
        "Cash yen (many places don't accept cards)",
        "Camera",
        "Powerbank for phone",
        "Wishlist of desired purchases"
      ],
      ja: [
        "購入品用のスーツケースの追加スペース",
        "現金円（多くの場所でカードが使えません）",
        "カメラ",
        "電話用のパワーバンク",
        "欲しい購入品のリスト"
      ]
    },
    animeDictionary: {
      ru: "Участники получают словарь основных терминов аниме/манга-культуры и полезных фраз для общения в специализированных магазинах.",
      en: "Participants receive dictionary of basic anime/manga culture terms and useful phrases for communication in specialized stores.",
      ja: "参加者は基本的なアニメ/マンガ文化用語と専門店でのコミュニケーションに役立つフレーズの辞書を受け取ります。"
    },
    rating: 4.9,
    reviewCount: 167
  },
  {
    id: "kamakura-day-trip",
    category: "regional",
    popular: true,
    types: ["temples", "history"],
    title: {
      ru: 'Однодневная поездка в Камакуру',
      en: 'Kamakura Day Trip',
      ja: '鎌倉日帰り旅行'
    },
    description: {
      ru: 'Путешествие в древнюю столицу самураев всего в часе езды от Токио. Знаменитый Большой Будда, храмы среди гор и океанское побережье - идеальное сочетание истории, культуры и природы в однодневной поездке.',
      en: 'Journey to ancient samurai capital just one hour from Tokyo. Famous Great Buddha, temples among mountains and ocean coastline - perfect combination of history, culture and nature in day trip.',
      ja: '東京からわずか1時間の古い武士の都への旅。有名な大仏、山々の中の寺院、海岸線 - 日帰り旅行での歴史、文化、自然の完璧な組み合わせ。'
    },
    route: {
      ru: ["Большой Будда", "Храм Хасэ-дэра", "Святилище Цуругаока Хатимангу"],
      en: ["Great Buddha", "Hase-dera Temple", "Tsurugaoka Hachimangu Shrine"],
      ja: ["大仏", "長谷寺", "鶴岡八幡宮"]
    },
    routeDescription: {
      ru: 'Древняя столица самураев с храмами, историческими памятниками и океанским побережьем',
      en: 'Ancient samurai capital with temples, historical monuments and ocean coastline',
      ja: '寺院、歴史的記念碑、海岸線がある古い武士の都'
    },
    duration: 1,
    price: 100,
    groupSizeMin: 10,
    groupSizeMax: 15,
    image: '/images/tours/kamakura-day-trip.png',
    seasons: ["spring", "summer", "autumn"],
    seasonDescription: {
      ru: 'Лето: пляжи, весна: сакура, осень: клены',
      en: 'Summer: beaches, spring: cherry blossoms, autumn: maples',
      ja: '夏：ビーチ、春：桜、秋：もみじ'
    },
    highlights: {
      ru: [
        "Дайбуцу - Большой Будда, символ Камакуры",
        "Храм Хасэ-дэра с видом на океан и Каннон",
        "Святилище Цуругаока Хатимангу - центр самурайской столицы",
        "Прогулка по историческим улицам",
        "Пляж Юигахама (летом)",
        "Традиционная уличная еда",
        "Бамбуковая роща и горные тропы",
        "История периода Камакура (1185-1333)"
      ],
      en: [
        "Daibutsu - Great Buddha, symbol of Kamakura",
        "Hase-dera temple with ocean view and Kannon",
        "Tsurugaoka Hachimangu shrine - center of samurai capital",
        "Walk through historic streets",
        "Yuigahama beach (summer)",
        "Traditional street food",
        "Bamboo grove and mountain trails",
        "History of Kamakura period (1185-1333)"
      ],
      ja: [
        "大仏 - 鎌倉のシンボル",
        "海の眺めと観音がある長谷寺",
        "鶴岡八幡宮 - 武士の都の中心",
        "歴史的な街並みの散歩",
        "由比ガ浜ビーチ（夏）",
        "伝統的な屋台料理",
        "竹林と山道",
        "鎌倉時代の歴史（1185-1333）"
      ]
    },
    itinerary: [
      {
        time: "09:00",
        title: {
          ru: "Отправление из Токио",
          en: "Departure from Tokyo",
          ja: "東京からの出発"
        },
        description: {
          ru: "Встреча на станции JR Токио. Поезд до Камакуры (1 час). Рассказ об истории города по пути.",
          en: "Meeting at JR Tokyo station. Train to Kamakura (1 hour). City history story on the way.",
          ja: "JR東京駅での集合。鎌倉への電車（1時間）。道中の市の歴史の話。"
        }
      },
      {
        time: "10:30",
        title: {
          ru: "Большой Будда (Котоку-ин)",
          en: "Great Buddha (Kotoku-in)",
          ja: "大仏（高徳院）"
        },
        description: {
          ru: "Посещение знаменитой статуи Дайбуцу высотой 13 метров. Возможность войти внутрь статуи. История создания и значение в буддизме.",
          en: "Visit to famous Daibutsu statue 13 meters high. Possibility to enter inside statue. Creation history and significance in Buddhism.",
          ja: "高さ13メートルの有名な大仏像の見学。像の内部に入る可能性。創造の歴史と仏教での意義。"
        }
      },
      {
        time: "11:30",
        title: {
          ru: "Храм Хасэ-дэра",
          en: "Hase-dera Temple",
          ja: "長谷寺"
        },
        description: {
          ru: "Храм с 11-головой статуей Каннон. Сады с сезонными цветами. Смотровая площадка с видом на океан и город.",
          en: "Temple with 11-headed Kannon statue. Gardens with seasonal flowers. Observation deck with ocean and city view.",
          ja: "11面観音像がある寺院。季節の花がある庭園。海と市街の眺めがある展望台。"
        }
      },
      {
        time: "12:30",
        title: {
          ru: "Обед в традиционном ресторане",
          en: "Lunch at traditional restaurant",
          ja: "伝統的なレストランでのランチ"
        },
        description: {
          ru: "Местные деликатесы: камакура-яки (жареные креветки), ширасу (мелкая рыбка) - сезонное блюдо.",
          en: "Local delicacies: kamakura-yaki (fried shrimp), shirasu (small fish) - seasonal dish.",
          ja: "地元の珍味：鎌倉焼き（エビフライ）、しらす（小魚） - 季節料理。"
        }
      },
      {
        time: "14:00",
        title: {
          ru: "Святилище Цуругаока Хатимангу",
          en: "Tsurugaoka Hachimangu Shrine",
          ja: "鶴岡八幡宮"
        },
        description: {
          ru: "Главное святилище Камакуры, центр самурайской власти. Музей сокровищ. Пруды с лотосами.",
          en: "Main shrine of Kamakura, center of samurai power. Treasure museum. Lotus ponds.",
          ja: "鎌倉の主要な神社、武士の権力の中心。宝物館。蓮の池。"
        }
      },
      {
        time: "15:00",
        title: {
          ru: "Прогулка по историческому центру",
          en: "Historic center walk",
          ja: "歴史的中心部の散歩"
        },
        description: {
          ru: "Улица Комати-дори с сувенирными магазинами. Дегустация традиционных сладостей.",
          en: "Komachi-dori street with souvenir shops. Traditional sweets tasting.",
          ja: "お土産店がある小町通り。伝統的なお菓子の試食。"
        }
      },
      {
        time: "16:00",
        title: {
          ru: "Пляж Юигахама (летом) или бамбуковая роща",
          en: "Yuigahama Beach (summer) or bamboo grove",
          ja: "由比ガ浜ビーチ（夏）または竹林"
        },
        description: {
          ru: "Летом - отдых на пляже. В другие сезоны - прогулка по бамбуковой роще или дополнительные храмы.",
          en: "Summer - beach relaxation. Other seasons - bamboo grove walk or additional temples.",
          ja: "夏 - ビーチでのリラックス。他の季節 - 竹林の散歩または追加の寺院。"
        }
      },
      {
        time: "17:30",
        title: {
          ru: "Возвращение в Токио",
          en: "Return to Tokyo",
          ja: "東京への帰還"
        },
        description: {
          ru: "Отправление обратно. Прибытие в Токио около 18:30.",
          en: "Departure back. Arrival in Tokyo around 18:30.",
          ja: "帰りの出発。18:30頃東京到着。"
        }
      }
    ],
    included: {
      ru: [
        "Транспорт из/в Токио (JR Pass)",
        "Гид",
        "Обед в традиционном ресторане",
        "Все входные билеты в храмы",
        "Дегустация местных сладостей"
      ],
      en: [
        "Transport from/to Tokyo (JR Pass)",
        "Guide",
        "Lunch at traditional restaurant",
        "All temple entrance tickets",
        "Local sweets tasting"
      ],
      ja: [
        "東京からの往復交通（JRパス）",
        "ガイド",
        "伝統的なレストランでのランチ",
        "すべての寺院入場券",
        "地元のお菓子の試食"
      ]
    },
    excluded: {
      ru: [
        "Вход внутрь статуи Будды (+$3)",
        "Музей в святилище (+$5)",
        "Личные расходы",
        "Сувениры"
      ],
      en: [
        "Entry inside Buddha statue (+$3)",
        "Shrine museum (+$5)",
        "Personal expenses",
        "Souvenirs"
      ],
      ja: [
        "大仏像内部入場（+$3）",
        "神社博物館（+$5）",
        "個人的な支出",
        "お土産"
      ]
    },
    additionalOptions: [
      {
        name: {
          ru: "Вход внутрь статуи Будды",
          en: "Entry inside Buddha statue",
          ja: "大仏像内部入場"
        },
        price: 3,
        description: {
          ru: "Уникальная возможность войти внутрь 13-метровой статуи",
          en: "Unique opportunity to enter inside 13-meter statue",
          ja: "13メートルの像の内部に入るユニークな機会"
        }
      },
      {
        name: {
          ru: "Музей сокровищ",
          en: "Treasure museum",
          ja: "宝物館"
        },
        price: 5,
        description: {
          ru: "Коллекция исторических артефактов периода Камакура",
          en: "Collection of historical artifacts from Kamakura period",
          ja: "鎌倉時代の歴史的遺物のコレクション"
        }
      },
      {
        name: {
          ru: "Поездка в дополнительные храмы",
          en: "Visit to additional temples",
          ja: "追加の寺院訪問"
        },
        price: 30,
        description: {
          ru: "Посещение храмов Кэнтё-дзи или Энгаку-дзи",
          en: "Visit to Kencho-ji or Engaku-ji temples",
          ja: "建長寺または円覚寺の訪問"
        }
      },
      {
        name: {
          ru: "Мастер-класс по изготовлению благовоний",
          en: "Incense making masterclass",
          ja: "お香作りマスタークラス"
        },
        price: 25,
        description: {
          ru: "Традиционное искусство изготовления японских благовоний",
          en: "Traditional art of making Japanese incense",
          ja: "日本のお香作りの伝統的な技術"
        }
      }
    ],
    practicalInfo: {
      duration: {
        ru: "9 часов (09:00-18:30)",
        en: "9 hours (09:00-18:30)",
        ja: "9時間（09:00-18:30）"
      },
      groupSize: {
        ru: "до 15 человек",
        en: "up to 15 people",
        ja: "最大15人"
      },
      physicalLevel: {
        ru: "легкая-средняя (подъемы к храмам)",
        en: "easy-medium (temple climbs)",
        ja: "軽い-中程度（寺院への登り）"
      },
      bestSeasons: {
        ru: "весна (сакура), лето (пляж), осень (клены)",
        en: "spring (cherry blossoms), summer (beach), autumn (maples)",
        ja: "春（桜）、夏（ビーチ）、秋（もみじ）"
      },
      languages: {
        ru: "гид владеет русским, английским, японским",
        en: "guide speaks Russian, English, Japanese",
        ja: "ガイドはロシア語、英語、日本語を話します"
      }
    },
    historicalBackground: [
      {
        period: {
          ru: "1185-1333: период Камакура, первый самурайский сёгунат",
          en: "1185-1333: Kamakura period, first samurai shogunate",
          ja: "1185-1333: 鎌倉時代、最初の武士の幕府"
        }
      },
      {
        founder: {
          ru: "Минамото-но Ёритомо: основатель сёгуната",
          en: "Minamoto no Yoritomo: founder of shogunate",
          ja: "源頼朝: 幕府の創設者"
        }
      },
      {
        religion: {
          ru: "Дзэн-буддизм: расцвет в период Камакура",
          en: "Zen Buddhism: flourishing in Kamakura period",
          ja: "禅仏教: 鎌倉時代の隆盛"
        }
      },
      {
        culture: {
          ru: "Самурайская культура: формирование кодекса бусидо",
          en: "Samurai culture: formation of bushido code",
          ja: "武士文化: 武士道の掟の形成"
        }
      }
    ],
    packingList: {
      ru: [
        "Удобную обувь для ходьбы по храмам",
        "Купальные принадлежности (летом)",
        "Фотоаппарат",
        "Головной убор от солнца",
        "Наличные йены для сувениров"
      ],
      en: [
        "Comfortable shoes for temple walking",
        "Swimming accessories (summer)",
        "Camera",
        "Sun hat",
        "Cash yen for souvenirs"
      ],
      ja: [
        "寺院散歩用の歩きやすい靴",
        "水泳用品（夏）",
        "カメラ",
        "日よけ帽",
        "お土産用の現金円"
      ]
    },
    seasonalFeatures: [
      {
        season: {
          ru: "Весна",
          en: "Spring",
          ja: "春"
        },
        features: {
          ru: "цветение сакуры в храмах, мягкая погода",
          en: "cherry blossoms in temples, mild weather",
          ja: "寺院での桜の開花、穏やかな天候"
        }
      },
      {
        season: {
          ru: "Лето",
          en: "Summer",
          ja: "夏"
        },
        features: {
          ru: "пляжный сезон, фестиваль фейерверков",
          en: "beach season, fireworks festival",
          ja: "ビーチシーズン、花火祭り"
        }
      },
      {
        season: {
          ru: "Осень",
          en: "Autumn",
          ja: "秋"
        },
        features: {
          ru: "красные клены, комфортная температура",
          en: "red maples, comfortable temperature",
          ja: "紅いもみじ、快適な気温"
        }
      },
      {
        season: {
          ru: "Зима",
          en: "Winter",
          ja: "冬"
        },
        features: {
          ru: "меньше туристов, ясные виды",
          en: "fewer tourists, clear views",
          ja: "観光客が少ない、澄んだ景色"
        }
      }
    ],
    localDelicacies: [
      {
        name: {
          ru: "Ширасу",
          en: "Shirasu",
          ja: "しらす"
        },
        description: {
          ru: "мелкая рыбка (март-декабрь)",
          en: "small fish (March-December)",
          ja: "小魚（3月-12月）"
        }
      },
      {
        name: {
          ru: "Камакура-яки",
          en: "Kamakura-yaki",
          ja: "鎌倉焼き"
        },
        description: {
          ru: "печенье в форме голубя",
          en: "dove-shaped cookies",
          ja: "鳩の形のクッキー"
        }
      },
      {
        name: {
          ru: "Матча-мороженое",
          en: "Matcha ice cream",
          ja: "抹茶アイスクリーム"
        },
        description: {
          ru: "зеленый чай с местными травами",
          en: "green tea with local herbs",
          ja: "地元のハーブ入り緑茶"
        }
      },
      {
        name: {
          ru: "Дайбуцу-пиво",
          en: "Daibutsu beer",
          ja: "大仏ビール"
        },
        description: {
          ru: "местное крафтовое пиво",
          en: "local craft beer",
          ja: "地元のクラフトビール"
        }
      }
    ],
    rating: 4.8,
    reviewCount: 312
  },
  {
    id: "classic-kyoto-tour",
    category: "regional",
    popular: true,
    types: ["temples", "culture"],
    title: {
      ru: 'Классический тур по Киото',
      en: 'Classic Kyoto Tour',
      ja: '京都クラシックツアー'
    },
    description: {
      ru: 'Погружение в древнюю столицу Японии с посещением самых знаменитых храмов и садов. От золотого павильона до деревянных террас Киёмидзу-дэра, знакомство с тысячелетней историей и традициями.',
      en: 'Immersion into Japan\'s ancient capital with visits to most famous temples and gardens. From golden pavilion to wooden terraces of Kiyomizu-dera, exploring thousand-year history and traditions.',
      ja: '最も有名な寺院と庭園を訪れる日本の古都への没入。金閣寺から清水寺の木造テラスまで、千年の歴史と伝統の探索。'
    },
    route: {
      ru: ["Киёмидзу-дэра", "Кинкаку-дзи", "Гинкаку-дзи", "Рёан-дзи"],
      en: ["Kiyomizu-dera", "Kinkaku-ji", "Ginkaku-ji", "Ryoan-ji"],
      ja: ["清水寺", "金閣寺", "銀閣寺", "龍安寺"]
    },
    routeDescription: {
      ru: 'Храмы и сады древней столицы, знакомство с буддийской архитектурой и философией дзен',
      en: 'Temples and gardens of ancient capital, exploring Buddhist architecture and Zen philosophy',
      ja: '古都の寺院と庭園、仏教建築と禅の哲学の探索'
    },
    duration: 3,
    price: 750,
    groupSizeMin: 10,
    groupSizeMax: 15,
    image: '/images/tours/classic-kyoto-tour.png',
    seasons: ["spring", "autumn"],
    seasonDescription: {
      ru: 'Весна: цветение сакуры, осень: красные клены',
      en: 'Spring: cherry blossoms, autumn: red maples',
      ja: '春：桜の開花、秋：紅いもみじ'
    },
    highlights: {
      ru: [
        "Киёмидзу-дэра с деревянной террасой над городом",
        "Кинкаку-дзи - Золотой павильон, символ Киото",
        "Гинкаку-дзи - Серебряный павильон и его сады",
        "Рёан-дзи - знаменитый сад камней дзен",
        "Философская тропа вдоль канала",
        "Традиционные районы Гион и Понтотё",
        "Знакомство с чайной церемонией",
        "История 1000-летней столицы"
      ],
      en: [
        "Kiyomizu-dera with wooden terrace above city",
        "Kinkaku-ji - Golden Pavilion, symbol of Kyoto",
        "Ginkaku-ji - Silver Pavilion and its gardens",
        "Ryoan-ji - famous Zen rock garden",
        "Philosopher's Path along canal",
        "Traditional Gion and Pontocho districts",
        "Introduction to tea ceremony",
        "History of 1000-year capital"
      ],
      ja: [
        "市街を見下ろす木造テラスの清水寺",
        "金閣寺 - 京都のシンボル",
        "銀閣寺とその庭園",
        "龍安寺 - 有名な禅の石庭",
        "運河沿いの哲学の道",
        "伝統的な祇園と先斗町地区",
        "茶道の紹介",
        "千年の都の歴史"
      ]
    },
    itinerary: [
      {
        day: 1,
        title: {
          ru: "Восточный Киото",
          en: "Eastern Kyoto",
          ja: "東山"
        },
        description: {
          ru: "Прибытие в Киото, размещение в отеле. Посещение храма Киёмидзу-дэра - деревянная терраса с видом на город. Прогулка по историческому району Сандзюсангэн-до.",
          en: "Arrival in Kyoto, hotel accommodation. Visit to Kiyomizu-dera temple - wooden terrace with city view. Walk through historic Sanjusangen-do district.",
          ja: "京都到着、ホテルチェックイン。清水寺の訪問 - 市街の眺めがある木造テラス。歴史的な三十三間堂地区の散歩。"
        }
      },
      {
        day: 2,
        title: {
          ru: "Золотой павильон и север",
          en: "Golden Pavilion and north",
          ja: "金閣寺と北部"
        },
        description: {
          ru: "Раннее утреннее посещение Кинкаку-дзи (Золотой павильон) до наплыва туристов. Сад камней в Рёан-дзи. Бамбуковая роща Арасияма.",
          en: "Early morning visit to Kinkaku-ji (Golden Pavilion) before tourist crowds. Rock garden at Ryoan-ji. Arashiyama bamboo grove.",
          ja: "観光客の群衆の前の金閣寺への早朝訪問。龍安寺の石庭。嵐山の竹林。"
        }
      },
      {
        day: 3,
        title: {
          ru: "Серебряный павильон и философия",
          en: "Silver Pavilion and philosophy",
          ja: "銀閣寺と哲学"
        },
        description: {
          ru: "Гинкаку-дзи (Серебряный павильон) и его изящные сады. Философская тропа (Тэцугаку-но-мити) вдоль канала. Храм Нандэн-дзи с воротами Сан-мон.",
          en: "Ginkaku-ji (Silver Pavilion) and its elegant gardens. Philosopher's Path (Tetsugaku-no-michi) along canal. Nanzen-ji temple with Sanmon gate.",
          ja: "銀閣寺とその優雅な庭園。運河沿いの哲学の道。三門のある南禅寺。"
        }
      }
    ],
    mainTemples: [
      {
        name: {
          ru: "Киёмидзу-дэра (День 1)",
          en: "Kiyomizu-dera (Day 1)",
          ja: "清水寺（1日目）"
        },
        details: [
          {
            ru: "История: основан в 778 году",
            en: "History: founded in 778",
            ja: "歴史：778年創建"
          },
          {
            ru: "Особенность: деревянная терраса без единого гвоздя",
            en: "Feature: wooden terrace without a single nail",
            ja: "特徴：釘を一本も使わない木造テラス"
          },
          {
            ru: "Лучшее время: раннее утро или вечер",
            en: "Best time: early morning or evening",
            ja: "最適時間：早朝または夕方"
          },
          {
            ru: "Виды: панорама города Киото",
            en: "Views: panorama of Kyoto city",
            ja: "眺め：京都市のパノラマ"
          }
        ]
      },
      {
        name: {
          ru: "Кинкаку-дзи - Золотой павильон (День 2)",
          en: "Kinkaku-ji - Golden Pavilion (Day 2)",
          ja: "金閣寺（2日目）"
        },
        details: [
          {
            ru: "История: построен в 1397 году как вилла сёгуна",
            en: "History: built in 1397 as shogun's villa",
            ja: "歴史：1397年に将軍の別荘として建築"
          },
          {
            ru: "Особенность: покрыт золотыми листами",
            en: "Feature: covered with gold leaf",
            ja: "特徴：金箔で覆われている"
          },
          {
            ru: "Сады: классический японский сад с прудом",
            en: "Gardens: classic Japanese garden with pond",
            ja: "庭園：池のある古典的な日本庭園"
          },
          {
            ru: "Символизм: рай на земле в буддизме",
            en: "Symbolism: paradise on earth in Buddhism",
            ja: "象徴性：仏教における地上の楽園"
          }
        ]
      },
      {
        name: {
          ru: "Гинкаку-дзи - Серебряный павильон (День 3)",
          en: "Ginkaku-ji - Silver Pavilion (Day 3)",
          ja: "銀閣寺（3日目）"
        },
        details: [
          {
            ru: "История: 1482 год, эпоха расцвета культуры",
            en: "History: 1482, era of cultural flourishing",
            ja: "歴史：1482年、文化隆盛の時代"
          },
          {
            ru: "Особенность: изящество без позолоты",
            en: "Feature: elegance without gilding",
            ja: "特徴：金箔なしの優雅さ"
          },
          {
            ru: "Сады: два типа - мох и сухой ландшафт",
            en: "Gardens: two types - moss and dry landscape",
            ja: "庭園：二種類 - 苔と枯山水"
          },
          {
            ru: "Философия: ваби-саби (красота несовершенства)",
            en: "Philosophy: wabi-sabi (beauty of imperfection)",
            ja: "哲学：わび・さび（不完全さの美）"
          }
        ]
      },
      {
        name: {
          ru: "Рёан-дзи - Сад камней (День 2)",
          en: "Ryoan-ji - Rock Garden (Day 2)",
          ja: "龍安寺 - 石庭（2日目）"
        },
        details: [
          {
            ru: "История: создан в конце XV века",
            en: "History: created in late 15th century",
            ja: "歴史：15世紀後期創作"
          },
          {
            ru: "Особенность: 15 камней на белом гравии",
            en: "Feature: 15 stones on white gravel",
            ja: "特徴：白い砂利の上の15個の石"
          },
          {
            ru: "Философия: медитация и созерцание",
            en: "Philosophy: meditation and contemplation",
            ja: "哲学：瞑想と観想"
          },
          {
            ru: "Загадка: с любой точки видно только 14 камней",
            en: "Mystery: only 14 stones visible from any point",
            ja: "謎：どの地点からも14個の石しか見えない"
          }
        ]
      }
    ],
    additionalActivities: [
      {
        name: {
          ru: "Философская тропа",
          en: "Philosopher's Path",
          ja: "哲学の道"
        },
        description: {
          ru: "2-километровая прогулка вдоль канала, соединяющая Гинкаку-дзи и Нандэн-дзи. Весной - туннель из сакуры.",
          en: "2-kilometer walk along canal connecting Ginkaku-ji and Nanzen-ji. Spring - tunnel of cherry blossoms.",
          ja: "銀閣寺と南禅寺を結ぶ運河沿いの2キロの散歩。春 - 桜のトンネル。"
        }
      },
      {
        name: {
          ru: "Районы гейш",
          en: "Geisha districts",
          ja: "芸者地区"
        },
        areas: [
          {
            ru: "Гион: исторический район развлечений",
            en: "Gion: historic entertainment district",
            ja: "祇園：歴史的な花街"
          },
          {
            ru: "Понтотё: узкие улочки с традиционными ресторанами",
            en: "Pontocho: narrow alleys with traditional restaurants",
            ja: "先斗町：伝統的なレストランがある狭い路地"
          },
          {
            ru: "Встреча с майко: ученицы гейш в традиционных кимоно",
            en: "Meeting with maiko: geisha apprentices in traditional kimono",
            ja: "舞妓との出会い：伝統的な着物を着た芸者の見習い"
          }
        ]
      },
      {
        name: {
          ru: "Чайная церемония",
          en: "Tea ceremony",
          ja: "茶道"
        },
        description: {
          ru: "Знакомство с искусством садо в традиционном чайном домике с видом на сад.",
          en: "Introduction to sado art in traditional tea house with garden view.",
          ja: "庭園の眺めがある伝統的な茶室での茶道の紹介。"
        }
      }
    ],
    included: {
      ru: [
        "Проживание в отеле 3-4* (2 ночи)",
        "Транспорт (автобусы Киото)",
        "Гид",
        "Все входные билеты в храмы",
        "Чайная церемония",
        "Завтраки в отеле"
      ],
      en: [
        "Accommodation in 3-4* hotel (2 nights)",
        "Transport (Kyoto buses)",
        "Guide",
        "All temple entrance tickets",
        "Tea ceremony",
        "Breakfast at hotel"
      ],
      ja: [
        "3-4つ星ホテルでの宿泊（2泊）",
        "交通機関（京都バス）",
        "ガイド",
        "すべての寺院入場券",
        "茶道",
        "ホテルでの朝食"
      ]
    },
    excluded: {
      ru: [
        "Транспорт до/из Киото",
        "Обеды и ужины",
        "Личные расходы",
        "Дополнительные храмы",
        "Сувениры"
      ],
      en: [
        "Transport to/from Kyoto",
        "Lunches and dinners",
        "Personal expenses",
        "Additional temples",
        "Souvenirs"
      ],
      ja: [
        "京都への往復交通",
        "昼食と夕食",
        "個人的な支出",
        "追加の寺院",
        "お土産"
      ]
    },
    additionalOptions: [
      {
        name: {
          ru: "Посещение дополнительных храмов",
          en: "Additional temples visit",
          ja: "追加の寺院訪問"
        },
        price: 50,
        description: {
          ru: "Посещение храмов Тофуку-дзи или Дайго-дзи",
          en: "Visit to Tofuku-ji or Daigo-ji temples",
          ja: "東福寺または醍醐寺の訪問"
        }
      },
      {
        name: {
          ru: "Ужин кайсэки в традиционном ресторане",
          en: "Kaiseki dinner at traditional restaurant",
          ja: "伝統的なレストランでの懐石ディナー"
        },
        price: 120,
        description: {
          ru: "Многоблюдный ужин в стиле высокой японской кухни",
          en: "Multi-course dinner in haute Japanese cuisine style",
          ja: "日本高級料理スタイルのマルチコースディナー"
        }
      },
      {
        name: {
          ru: "Фотосессия в кимоно",
          en: "Kimono photo session",
          ja: "着物写真撮影"
        },
        price: 80,
        description: {
          ru: "Профессиональная фотосессия в традиционном японском кимоно",
          en: "Professional photo session in traditional Japanese kimono",
          ja: "伝統的な日本の着物でのプロ写真撮影"
        }
      },
      {
        name: {
          ru: "Мастер-класс по каллиграфии",
          en: "Calligraphy masterclass",
          ja: "書道マスタークラス"
        },
        price: 60,
        description: {
          ru: "Изучение искусства японской каллиграфии сёдо",
          en: "Learning Japanese calligraphy shodo art",
          ja: "日本の書道芸術の学習"
        }
      }
    ],
    practicalInfo: {
      duration: {
        ru: "3 дня / 2 ночи",
        en: "3 days / 2 nights",
        ja: "3日 / 2泊"
      },
      groupSize: {
        ru: "до 15 человек",
        en: "up to 15 people",
        ja: "最大15人"
      },
      physicalLevel: {
        ru: "средняя (много ходьбы, подъемы)",
        en: "medium (lots of walking, climbs)",
        ja: "中程度（多くの歩行、登り）"
      },
      bestSeasons: {
        ru: "весна (сакура), осень (момидзи)",
        en: "spring (cherry blossoms), autumn (momiji)",
        ja: "春（桜）、秋（紅葉）"
      },
      languages: {
        ru: "гид владеет русским, английским, японским",
        en: "guide speaks Russian, English, Japanese",
        ja: "ガイドはロシア語、英語、日本語を話します"
      }
    },
    templeEtiquette: [
      {
        ru: "Снимайте обувь в храмовых залах",
        en: "Remove shoes in temple halls",
        ja: "寺院の建物内では靴を脱いでください"
      },
      {
        ru: "Не фотографируйте статуи Будды со вспышкой",
        en: "Don't photograph Buddha statues with flash",
        ja: "仏像をフラッシュ撮影しないでください"
      },
      {
        ru: "Поклонитесь перед входом в храм",
        en: "Bow before entering temple",
        ja: "寺院に入る前にお辞儀をしてください"
      },
      {
        ru: "Соблюдайте тишину в залах для медитации",
        en: "Maintain silence in meditation halls",
        ja: "瞑想室では静寂を保ってください"
      }
    ],
    packingList: {
      ru: [
        "Удобную обувь (много ходьбы по храмам)",
        "Носки без дырок (часто снимать обувь)",
        "Фотоаппарат с дополнительными батареями",
        "Блокнот для записей о философии дзен",
        "Наличные йены для пожертвований"
      ],
      en: [
        "Comfortable shoes (lots of temple walking)",
        "Socks without holes (frequent shoe removal)",
        "Camera with extra batteries",
        "Notebook for Zen philosophy notes",
        "Cash yen for donations"
      ],
      ja: [
        "歩きやすい靴（寺院での多くの歩行）",
        "穴のない靴下（頻繁な脱靴）",
        "予備バッテリー付きカメラ",
        "禅哲学メモ用ノート",
        "お賽銭用の現金円"
      ]
    },
    seasonalFeatures: [
      {
        season: {
          ru: "Весна (апрель)",
          en: "Spring (April)",
          ja: "春（4月）"
        },
        features: {
          ru: "цветение сакуры, много туристов",
          en: "cherry blossoms, many tourists",
          ja: "桜の開花、多くの観光客"
        }
      },
      {
        season: {
          ru: "Лето (июнь-август)",
          en: "Summer (June-August)",
          ja: "夏（6月-8月）"
        },
        features: {
          ru: "жарко и влажно, вечерние подсветки",
          en: "hot and humid, evening illuminations",
          ja: "暑くて湿度が高い、夜のライトアップ"
        }
      },
      {
        season: {
          ru: "Осень (ноябрь)",
          en: "Autumn (November)",
          ja: "秋（11月）"
        },
        features: {
          ru: "красные клены, идеальная погода",
          en: "red maples, perfect weather",
          ja: "紅いもみじ、完璧な天候"
        }
      },
      {
        season: {
          ru: "Зима (декабрь-февраль)",
          en: "Winter (December-February)",
          ja: "冬（12月-2月）"
        },
        features: {
          ru: "мало туристов, снежные сады",
          en: "few tourists, snowy gardens",
          ja: "観光客が少ない、雪の庭園"
        }
      }
    ],
    kyotoHistory: [
      {
        ru: "794-1868: столица Японии (1074 года)",
        en: "794-1868: capital of Japan (1074 years)",
        ja: "794-1868: 日本の首都（1074年間）"
      },
      {
        ru: "Период Хэйан: расцвет аристократической культуры",
        en: "Heian Period: flourishing of aristocratic culture",
        ja: "平安時代: 貴族文化の隆盛"
      },
      {
        ru: "1600 храмов: сохранившихся до наших дней",
        en: "1600 temples: preserved to this day",
        ja: "1600の寺院: 現在まで保存"
      },
      {
        ru: "17 объектов ЮНЕСКО: исторические памятники",
        en: "17 UNESCO sites: historical monuments",
        ja: "17のユネスコ世界遺産: 歴史的記念物"
      }
    ],
    rating: 4.9,
    reviewCount: 267
  },
  {
    id: "classic-osaka-tour",
    category: "regional",
    popular: true,
    types: ["food", "history"],
    title: {
      ru: 'Классический тур по Осаке',
      en: 'Classic Osaka Tour',
      ja: '大阪クラシックツアー'
    },
    description: {
      ru: 'Знакомство с кулинарной столицей Японии за два дня. От исторического замка Осаки до неоновых огней Дотонбори, погружение в гастрономическую культуру и современную жизнь второго по величине города страны.',
      en: 'Introduction to Japan\'s culinary capital in two days. From historic Osaka Castle to neon lights of Dotonbori, immersion into gastronomic culture and modern life of the country\'s second largest city.',
      ja: '2日間で日本の料理の都の紹介。歴史的な大阪城から道頓堀のネオンライトまで、国内第2の都市のグルメ文化と現代生活への没入。'
    },
    route: {
      ru: ["Замок Осаки", "Умэда Скай Билдинг", "Дотонбори", "Синсайбаси"],
      en: ["Osaka Castle", "Umeda Sky Building", "Dotonbori", "Shinsaibashi"],
      ja: ["大阪城", "梅田スカイビル", "道頓堀", "心斎橋"]
    },
    routeDescription: {
      ru: 'Кулинарная столица Японии с историческими памятниками и современными развлечениями',
      en: 'Japan\'s culinary capital with historical monuments and modern entertainment',
      ja: '歴史的記念物と現代のエンターテイメントがある日本の料理の都'
    },
    duration: 2,
    price: 550,
    groupSizeMin: 10,
    groupSizeMax: 16,
    image: '/images/tours/classic-osaka-tour.png',
    seasons: ["spring"],
    seasonDescription: {
      ru: 'Весна: цветение сакуры вокруг замка Осаки',
      en: 'Spring: cherry blossoms around Osaka Castle',
      ja: '春：大阪城周辺の桜の開花'
    },
    highlights: {
      ru: [
        "Замок Осаки - реконструированный символ города",
        "Умэда Скай Билдинг с обзорной площадкой",
        "Дотонбори - неоновая река развлечений",
        "Синсайбаши - главная торговая улица",
        "Дегустация такояки, окономияки, кусикацу",
        "Рынок Куромон с свежими деликатесами",
        "Ночная жизнь в районах развлечений",
        "Уличная еда и мишленовские рестораны"
      ],
      en: [
        "Osaka Castle - reconstructed city symbol",
        "Umeda Sky Building with observation deck",
        "Dotonbori - neon river of entertainment",
        "Shinsaibashi - main shopping street",
        "Takoyaki, okonomiyaki, kushikatsu tasting",
        "Kuromon Market with fresh delicacies",
        "Nightlife in entertainment districts",
        "Street food and Michelin restaurants"
      ],
      ja: [
        "大阪城 - 再建された市のシンボル",
        "展望台がある梅田スカイビル",
        "道頓堀 - エンターテイメントのネオン川",
        "心斎橋 - メイン商店街",
        "たこ焼き、お好み焼き、串カツの試食",
        "新鮮な珍味がある黒門市場",
        "エンターテイメント地区でのナイトライフ",
        "屋台料理とミシュランレストラン"
      ]
    },
    itinerary: [
      {
        day: 1,
        title: {
          ru: "История и панорамы",
          en: "History and panoramas",
          ja: "歴史とパノラマ"
        },
        description: {
          ru: "Прибытие в Осаку, размещение в отеле. Посещение замка Осаки и парка. Умэда Скай Билдинг - обзорная площадка. Вечер в районе Китахама.",
          en: "Arrival in Osaka, hotel accommodation. Visit to Osaka Castle and park. Umeda Sky Building - observation deck. Evening in Kitahama district.",
          ja: "大阪到着、ホテルチェックイン。大阪城と公園の訪問。梅田スカイビル - 展望台。北浜地区での夜。"
        }
      },
      {
        day: 2,
        title: {
          ru: "Гастрономический день",
          en: "Gastronomic day",
          ja: "グルメの日"
        },
        description: {
          ru: "Утром рынок Куромон Итиба - дегустация морепродуктов. Мастер-класс по приготовлению такояки. Вечер в Дотонбори с уличной едой и развлечениями.",
          en: "Morning Kuromon Ichiba market - seafood tasting. Takoyaki preparation masterclass. Evening in Dotonbori with street food and entertainment.",
          ja: "朝の黒門市場 - 海鮮の試食。たこ焼き作りマスタークラス。屋台料理とエンターテイメントの道頓堀での夜。"
        }
      }
    ],
    mainLocations: [
      {
        name: {
          ru: "Замок Осаки (День 1)",
          en: "Osaka Castle (Day 1)",
          ja: "大阪城（1日目）"
        },
        details: [
          {
            ru: "История: основан в 1583 году Тоётоми Хидэёси",
            en: "History: founded in 1583 by Toyotomi Hideyoshi",
            ja: "歴史：1583年に豊臣秀吉によって創建"
          },
          {
            ru: "Современность: реконструкция 1931 года",
            en: "Modern: 1931 reconstruction",
            ja: "現代：1931年の再建"
          },
          {
            ru: "Музей: 8 этажей истории города",
            en: "Museum: 8 floors of city history",
            ja: "博物館：市の歴史の8フロア"
          },
          {
            ru: "Парк: 2000 деревьев сакуры весной",
            en: "Park: 2000 cherry trees in spring",
            ja: "公園：春の2000本の桜の木"
          },
          {
            ru: "Панорама: вид на город с верхнего этажа",
            en: "Panorama: city view from top floor",
            ja: "パノラマ：最上階からの市街の眺め"
          }
        ]
      },
      {
        name: {
          ru: "Умэда Скай Билдинг (День 1)",
          en: "Umeda Sky Building (Day 1)",
          ja: "梅田スカイビル（1日目）"
        },
        details: [
          {
            ru: "Архитектура: футуристический дизайн 1993 года",
            en: "Architecture: 1993 futuristic design",
            ja: "建築：1993年の未来的なデザイン"
          },
          {
            ru: "Высота: 173 метра, обзор на 360°",
            en: "Height: 173 meters, 360° view",
            ja: "高さ：173メートル、360°の眺め"
          },
          {
            ru: "Особенность: плавающая обсерватория",
            en: "Feature: floating observatory",
            ja: "特徴：浮遊展望台"
          },
          {
            ru: "Вечер: романтические виды на закат",
            en: "Evening: romantic sunset views",
            ja: "夜：ロマンチックな夕日の眺め"
          }
        ]
      },
      {
        name: {
          ru: "Дотонбори (День 2)",
          en: "Dotonbori (Day 2)",
          ja: "道頓堀（2日目）"
        },
        details: [
          {
            ru: "История: район развлечений с XVII века",
            en: "History: entertainment district since 17th century",
            ja: "歴史：17世紀からの歓楽街"
          },
          {
            ru: "Неон: самая яркая улица Японии",
            en: "Neon: Japan's brightest street",
            ja: "ネオン：日本で最も明るい通り"
          },
          {
            ru: "Символы: движущийся краб, клоун Кани Дораку",
            en: "Symbols: moving crab, Kani Doraku clown",
            ja: "シンボル：動くカニ、かに道楽のピエロ"
          },
          {
            ru: "Еда: концентрация лучших ресторанов",
            en: "Food: concentration of best restaurants",
            ja: "食事：最高のレストランの集中"
          },
          {
            ru: "Круиз: прогулочные лодки по реке",
            en: "Cruise: sightseeing boats on river",
            ja: "クルーズ：川での観光ボート"
          }
        ]
      },
      {
        name: {
          ru: "Синсайбаси (День 2)",
          en: "Shinsaibashi (Day 2)",
          ja: "心斎橋（2日目）"
        },
        details: [
          {
            ru: "Шоппинг: главная торговая артерия",
            en: "Shopping: main commercial artery",
            ja: "ショッピング：メイン商業動脈"
          },
          {
            ru: "История: торговый район с периода Эдо",
            en: "History: trading district since Edo period",
            ja: "歴史：江戸時代からの商業地区"
          },
          {
            ru: "Архитектура: крытая аркада 600 метров",
            en: "Architecture: 600-meter covered arcade",
            ja: "建築：600メートルの屋根付きアーケード"
          },
          {
            ru: "Бренды: от люксовых до демократичных",
            en: "Brands: from luxury to affordable",
            ja: "ブランド：高級品から手頃な価格まで"
          }
        ]
      }
    ],
    gastronomyProgram: {
      localDelicacies: [
        {
          name: {
            ru: "Такояки",
            en: "Takoyaki",
            ja: "たこ焼き"
          },
          description: {
            ru: "шарики с осьминогом, символ Осаки",
            en: "octopus balls, symbol of Osaka",
            ja: "タコのボール、大阪のシンボル"
          }
        },
        {
          name: {
            ru: "Окономияки",
            en: "Okonomiyaki",
            ja: "お好み焼き"
          },
          description: {
            ru: "японская пицца с капустой",
            en: "Japanese pizza with cabbage",
            ja: "キャベツ入りの日本のピザ"
          }
        },
        {
          name: {
            ru: "Кусикацу",
            en: "Kushikatsu",
            ja: "串カツ"
          },
          description: {
            ru: "жареные шашлычки в панировке",
            en: "fried skewers in breadcrumbs",
            ja: "パン粉をつけて揚げた串"
          }
        },
        {
          name: {
            ru: "Бутаман",
            en: "Butaman",
            ja: "豚まん"
          },
          description: {
            ru: "паровые булочки со свининой",
            en: "steamed pork buns",
            ja: "豚肉入り蒸しパン"
          }
        }
      ],
      kuromonMarket: {
        description: {
          ru: "История: 190 лет торговли. Морепродукты: свежие туна, угорь, устрицы. Фрукты: знаменитые японские дыни и клубника. Дегустация: еда прямо у прилавков.",
          en: "History: 190 years of trading. Seafood: fresh tuna, eel, oysters. Fruits: famous Japanese melons and strawberries. Tasting: eating right at the stalls.",
          ja: "歴史：190年の商売。海鮮：新鮮なマグロ、ウナギ、カキ。果物：有名な日本のメロンとイチゴ。試食：店頭での食事。"
        }
      },
      takoyakiMasterclass: {
        activities: [
          {
            ru: "Изучение техники приготовления",
            en: "Learning cooking technique",
            ja: "調理技術の学習"
          },
          {
            ru: "История блюда и его значение для Осаки",
            en: "Dish history and its significance for Osaka",
            ja: "料理の歴史と大阪での意義"
          },
          {
            ru: "Собственноручное приготовление",
            en: "Hands-on preparation",
            ja: "実際の調理"
          },
          {
            ru: "Дегустация с различными соусами",
            en: "Tasting with different sauces",
            ja: "さまざまなソースでの試食"
          }
        ]
      }
    },
    included: {
      ru: [
        "Проживание в отеле 3-4* (1 ночь)",
        "Транспорт (Osaka Amazing Pass)",
        "Гид",
        "Вход в замок Осаки",
        "Обзорная площадка Умэда Скай",
        "Мастер-класс такояки",
        "Дегустации на рынке",
        "Завтрак в отеле"
      ],
      en: [
        "Accommodation in 3-4* hotel (1 night)",
        "Transport (Osaka Amazing Pass)",
        "Guide",
        "Osaka Castle entrance",
        "Umeda Sky observation deck",
        "Takoyaki masterclass",
        "Market tastings",
        "Breakfast at hotel"
      ],
      ja: [
        "3-4つ星ホテルでの宿泊（1泊）",
        "交通機関（大阪周遊パス）",
        "ガイド",
        "大阪城入場",
        "梅田スカイ展望台",
        "たこ焼きマスタークラス",
        "市場での試食",
        "ホテルでの朝食"
      ]
    },
    excluded: {
      ru: [
        "Транспорт до/из Осаки",
        "Обеды и ужины",
        "Круиз по Дотонбори (+$15)",
        "Личные расходы",
        "Алкогольные напитки"
      ],
      en: [
        "Transport to/from Osaka",
        "Lunches and dinners",
        "Dotonbori cruise (+$15)",
        "Personal expenses",
        "Alcoholic beverages"
      ],
      ja: [
        "大阪への往復交通",
        "昼食と夕食",
        "道頓堀クルーズ（+$15）",
        "個人的な支出",
        "アルコール飲料"
      ]
    },
    additionalOptions: [
      {
        name: {
          ru: "Круиз по реке Дотонбори",
          en: "Dotonbori river cruise",
          ja: "道頓堀川クルーズ"
        },
        price: 15,
        description: {
          ru: "Прогулка на лодке по неоновой реке развлечений",
          en: "Boat ride along neon entertainment river",
          ja: "ネオンエンターテイメント川でのボートライド"
        }
      },
      {
        name: {
          ru: "Ужин в ресторане кусикацу",
          en: "Kushikatsu restaurant dinner",
          ja: "串カツレストランでの夕食"
        },
        price: 40,
        description: {
          ru: "Традиционный ужин из жареных шашлычков",
          en: "Traditional dinner of fried skewers",
          ja: "揚げ串の伝統的な夕食"
        }
      },
      {
        name: {
          ru: "Дополнительные дегустации",
          en: "Additional tastings",
          ja: "追加の試食"
        },
        price: 30,
        description: {
          ru: "Расширенная программа дегустации уличной еды",
          en: "Extended street food tasting program",
          ja: "拡張された屋台料理試食プログラム"
        }
      },
      {
        name: {
          ru: "Посещение пивоварни Асахи",
          en: "Asahi brewery visit",
          ja: "アサヒビール工場見学"
        },
        price: 25,
        description: {
          ru: "Экскурсия на пивоварню с дегустацией",
          en: "Brewery tour with tasting",
          ja: "試飲付きビール工場見学"
        }
      }
    ],
    practicalInfo: {
      duration: {
        ru: "2 дня / 1 ночь",
        en: "2 days / 1 night",
        ja: "2日 / 1泊"
      },
      groupSize: {
        ru: "до 16 человек",
        en: "up to 16 people",
        ja: "最大16人"
      },
      physicalLevel: {
        ru: "легкая",
        en: "easy",
        ja: "軽い"
      },
      bestSeasons: {
        ru: "весна (сакура), но круглый год",
        en: "spring (cherry blossoms), but year-round",
        ja: "春（桜）、しかし年間を通して"
      },
      languages: {
        ru: "гид владеет русским, английским, японским",
        en: "guide speaks Russian, English, Japanese",
        ja: "ガイドはロシア語、英語、日本語を話します"
      }
    },
    foodCulture: [
      {
        ru: "\"Kuidaore\": \"ешь, пока не упадешь\" - девиз города",
        en: "\"Kuidaore\": \"eat until you drop\" - city motto",
        ja: "「食い倒れ」：「倒れるまで食べる」- 街のモットー"
      },
      {
        ru: "Уличная еда: основа гастрономической культуры",
        en: "Street food: foundation of gastronomic culture",
        ja: "屋台料理：グルメ文化の基盤"
      },
      {
        ru: "Комедия: Осака - центр японского юмора",
        en: "Comedy: Osaka - center of Japanese humor",
        ja: "コメディ：大阪 - 日本のユーモアの中心地"
      },
      {
        ru: "Диалект: особый кансайский диалект",
        en: "Dialect: special Kansai dialect",
        ja: "方言：特別な関西弁"
      }
    ],
    packingList: {
      ru: [
        "Удобную обувь для долгих прогулок",
        "Свободную одежду (много еды!)",
        "Фотоаппарат для неоновых огней",
        "Наличные йены (многие уличные киоски не принимают карты)",
        "Хороший аппетит!"
      ],
      en: [
        "Comfortable shoes for long walks",
        "Loose clothing (lots of food!)",
        "Camera for neon lights",
        "Cash yen (many street stalls don't accept cards)",
        "Good appetite!"
      ],
      ja: [
        "長い散歩用の歩きやすい靴",
        "ゆったりした服装（たくさん食べます！）",
        "ネオンライト用のカメラ",
        "現金円（多くの屋台はカードを受け付けません）",
        "良い食欲！"
      ]
    },
    nightlife: [
      {
        area: {
          ru: "Дотонбори",
          en: "Dotonbori",
          ja: "道頓堀"
        },
        description: {
          ru: "неон и развлечения до утра",
          en: "neon and entertainment until morning",
          ja: "朝までネオンとエンターテイメント"
        }
      },
      {
        area: {
          ru: "Синсекай",
          en: "Shinsekai",
          ja: "新世界"
        },
        description: {
          ru: "ретро-район с пачинко",
          en: "retro district with pachinko",
          ja: "パチンコのあるレトロ地区"
        }
      },
      {
        area: {
          ru: "Китасинти",
          en: "Kitashinchi",
          ja: "北新地"
        },
        description: {
          ru: "элитные бары и клубы",
          en: "elite bars and clubs",
          ja: "エリートバーとクラブ"
        }
      },
      {
        area: {
          ru: "Изакая",
          en: "Izakaya",
          ja: "居酒屋"
        },
        description: {
          ru: "традиционные пивные",
          en: "traditional pubs",
          ja: "伝統的なパブ"
        }
      }
    ],
    shopping: [
      {
        area: {
          ru: "Синсайбаси",
          en: "Shinsaibashi",
          ja: "心斎橋"
        },
        description: {
          ru: "главная торговая улица",
          en: "main shopping street",
          ja: "メイン商店街"
        }
      },
      {
        area: {
          ru: "Америка-мура",
          en: "Amerika-mura",
          ja: "アメリカ村"
        },
        description: {
          ru: "молодежная мода",
          en: "youth fashion",
          ja: "若者ファッション"
        }
      },
      {
        area: {
          ru: "Дэнки-гай",
          en: "Denki-gai",
          ja: "電気街"
        },
        description: {
          ru: "электроника (меньше, чем в Токио)",
          en: "electronics (smaller than Tokyo)",
          ja: "電子機器（東京より小さい）"
        }
      },
      {
        area: {
          ru: "Сувениры",
          en: "Souvenirs",
          ja: "お土産"
        },
        description: {
          ru: "фигурки такояки, местные сладости",
          en: "takoyaki figurines, local sweets",
          ja: "たこ焼きフィギュア、地元のお菓子"
        }
      }
    ],
    rating: 4.8,
    reviewCount: 189
  },
  {
    id: "nara-day-tour",
    category: "regional",
    popular: true,
    types: ["temples", "nature"],
    title: {
      ru: 'Один день в Наре',
      en: 'One Day in Nara',
      ja: '奈良の一日'
    },
    description: {
      ru: 'Путешествие в первую постоянную столицу Японии. Священные олени, свободно гуляющие по городу, величественный Великий Будда и тысячи каменных фонарей - уникальная атмосфера древней столицы в однодневной поездке.',
      en: 'Journey to Japan\'s first permanent capital. Sacred deer roaming freely through the city, the majestic Great Buddha, and thousands of stone lanterns - unique atmosphere of the ancient capital in a day trip.',
      ja: '日本初の恒久的な首都への旅。街を自由に歩き回る神聖な鹿、雄大な大仏、そして何千もの石灯籠 - 古都の独特な雰囲気を日帰り旅行で。'
    },
    route: {
      ru: ["Осака/Киото", "Парк Нары", "Храм Тодай-дзи", "Святилище Касуга", "Нарамати"],
      en: ["Osaka/Kyoto", "Nara Park", "Todai-ji Temple", "Kasuga Shrine", "Naramachi"],
      ja: ["大阪/京都", "奈良公園", "東大寺", "春日大社", "奈良町"]
    },
    routeDescription: {
      ru: 'Однодневная поездка из Кансая в первую столицу Японии с её священными оленями и древними храмами',
      en: 'Day trip from Kansai to Japan\'s first capital with its sacred deer and ancient temples',
      ja: '関西から神聖な鹿と古代の寺院がある日本初の首都への日帰り旅行'
    },
    duration: 1,
    price: 100,
    groupSizeMin: 10,
    groupSizeMax: 20,
    image: '/images/tours/nara-day-tour.png',
    seasons: ["spring", "autumn", "all-year"],
    seasonDescription: {
      ru: 'Весна: цветение сакуры и новорожденные оленята, осень: красные клены',
      en: 'Spring: cherry blossoms and newborn fawns, autumn: red maples',
      ja: '春：桜の花と生まれたばかりの子鹿、秋：赤いもみじ'
    },
    highlights: {
      ru: [
        "1200 священных оленей, свободно гуляющих по парку",
        "Дайбуцу - Великий Будда, одна из крупнейших бронзовых статуй",
        "Храм Тодай-дзи - один из крупнейших деревянных храмов мира",
        "Святилище Касуга Тайся с 3000 каменными фонарями",
        "Кормление оленей специальным печеньем",
        "Парк Нары - один из старейших парков Японии",
        "История столицы периода Нара (710-794)",
        "Буддийские сокровища в храмовых музеях"
      ],
      en: [
        "1200 sacred deer roaming freely in the park",
        "Daibutsu - Great Buddha, one of the largest bronze statues",
        "Todai-ji Temple - one of the world's largest wooden temples",
        "Kasuga Taisha Shrine with 3000 stone lanterns",
        "Feeding deer with special crackers",
        "Nara Park - one of Japan's oldest parks",
        "History of Nara period capital (710-794)",
        "Buddhist treasures in temple museums"
      ],
      ja: [
        "公園を自由に歩き回る1200頭の神聖な鹿",
        "大仏 - 最大級の青銅像の一つ",
        "東大寺 - 世界最大級の木造寺院の一つ",
        "3000の石灯籠がある春日大社",
        "特別なせんべいで鹿に餌やり",
        "奈良公園 - 日本最古の公園の一つ",
        "奈良時代の都の歴史（710-794）",
        "寺院博物館の仏教の宝物"
      ]
    },
    itinerary: [
      {
        day: 1,
        title: {
          ru: "Один день в древней столице",
          en: "One day in the ancient capital",
          ja: "古都での一日"
        },
        description: {
          ru: "09:30 - Отправление из Осаки/Киото. 10:30 - Встреча с оленями в парке Нары. 11:30 - Храм Тодай-дзи с Великим Буддой. 12:30 - Обед местной кухней. 14:00 - Святилище Касуга с каменными фонарями. 15:00 - Исторический район Нарамати. 16:00 - Свободное время с оленями. 17:00 - Возвращение.",
          en: "09:30 - Departure from Osaka/Kyoto. 10:30 - Meeting deer in Nara Park. 11:30 - Todai-ji Temple with Great Buddha. 12:30 - Local cuisine lunch. 14:00 - Kasuga Shrine with stone lanterns. 15:00 - Historic Naramachi district. 16:00 - Free time with deer. 17:00 - Return.",
          ja: "09:30 - 大阪/京都から出発。10:30 - 奈良公園で鹿との出会い。11:30 - 大仏のある東大寺。12:30 - 地元料理の昼食。14:00 - 石灯籠のある春日大社。15:00 - 歴史的な奈良町地区。16:00 - 鹿との自由時間。17:00 - 帰路。"
        }
      }
    ],
    included: {
      ru: [
        "Транспорт из/в Осаку или Киото",
        "Русскоговорящий гид",
        "Обед в традиционном ресторане",
        "Входные билеты во все храмы и святилища",
        "Печенье для кормления оленей",
        "Карта Нары с легендами об оленях",
        "Страховка на время тура"
      ],
      en: [
        "Transport to/from Osaka or Kyoto",
        "Russian-speaking guide",
        "Lunch at traditional restaurant",
        "Entrance tickets to all temples and shrines",
        "Deer feeding crackers",
        "Nara map with deer legends",
        "Insurance during the tour"
      ],
      ja: [
        "大阪または京都への往復交通",
        "ロシア語を話すガイド",
        "伝統的なレストランでの昼食",
        "すべての寺院と神社への入場券",
        "鹿の餌やり用せんべい",
        "鹿の伝説付き奈良地図",
        "ツアー中の保険"
      ]
    },
    excluded: {
      ru: [
        "Международные авиаперелеты",
        "Дополнительное печенье для оленей",
        "Музей сокровищ Тодай-дзи",
        "Личные расходы и сувениры",
        "Мастер-классы",
        "Ужин"
      ],
      en: [
        "International flights",
        "Extra deer crackers",
        "Todai-ji Treasure Museum",
        "Personal expenses and souvenirs",
        "Workshop classes",
        "Dinner"
      ],
      ja: [
        "国際線フライト",
        "追加の鹿せんべい",
        "東大寺宝物館",
        "個人的な支出とお土産",
        "ワークショップクラス",
        "夕食"
      ]
    },
    additionalOptions: [
      {
        name: {
          ru: "Музей сокровищ Тодай-дзи",
          en: "Todai-ji Treasure Museum",
          ja: "東大寺宝物館"
        },
        price: 8,
        description: {
          ru: "Посещение музея с буддийскими реликвиями и сокровищами",
          en: "Visit to museum with Buddhist relics and treasures",
          ja: "仏教の遺物と宝物がある博物館への入場"
        }
      },
      {
        name: {
          ru: "Мастер-класс по изготовлению благовоний",
          en: "Incense making workshop",
          ja: "お香作りワークショップ"
        },
        price: 20,
        description: {
          ru: "Традиционное искусство изготовления благовоний в храме",
          en: "Traditional art of incense making at the temple",
          ja: "寺院での伝統的なお香作りの技術"
        }
      },
      {
        name: {
          ru: "Традиционный ужин в рёкане",
          en: "Traditional dinner at ryokan",
          ja: "旅館での伝統的な夕食"
        },
        price: 60,
        description: {
          ru: "Кайсэки ужин в традиционной гостинице с возвращением поздним поездом",
          en: "Kaiseki dinner at traditional inn with late train return",
          ja: "遅い電車での帰路を含む伝統的な旅館での懐石料理"
        }
      }
    ],
    practicalInfo: {
      duration: {
        ru: "8 часов (09:30-17:30)",
        en: "8 hours (09:30-17:30)",
        ja: "8時間（09:30-17:30）"
      },
      groupSize: {
        ru: "до 20 человек",
        en: "up to 20 people",
        ja: "最大20人"
      },
      physicalLevel: {
        ru: "легкая (много ходьбы по парку)",
        en: "easy (lots of walking in the park)",
        ja: "軽い（公園での多くの歩行）"
      },
      bestSeasons: {
        ru: "весна (сакура и оленята), осень (красные клены)",
        en: "spring (sakura and fawns), autumn (red maples)",
        ja: "春（桜と子鹿）、秋（紅いもみじ）"
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
          ru: "Нара",
          en: "Nara",
          ja: "奈良"
        },
        climate: {
          ru: "умеренный континентальный, +5-30°C",
          en: "temperate continental, +5-30°C",
          ja: "温帯大陸性、+5-30°C"
        }
      }
    ],
    packingList: {
      ru: [
        "Удобная обувь для ходьбы по парку",
        "Фотоаппарат для съемки оленей и храмов",
        "Влажные салфетки (олени могут испачкать руки)",
        "Небольшой рюкзак для сувениров",
        "Наличные йены для дополнительных покупок",
        "Легкий дождевик на случай дождя"
      ],
      en: [
        "Comfortable shoes for walking in the park",
        "Camera for photographing deer and temples",
        "Wet wipes (deer may dirty your hands)",
        "Small backpack for souvenirs",
        "Cash yen for additional purchases",
        "Light raincoat in case of rain"
      ],
      ja: [
        "公園歩行用の快適な靴",
        "鹿と寺院撮影用のカメラ",
        "ウェットティッシュ（鹿が手を汚すかもしれません）",
        "お土産用の小さなバックパック",
        "追加購入用の現金円",
        "雨の場合の軽いレインコート"
      ]
    },
    rating: 4.9,
    reviewCount: 324
  },
  {
    id: "rural-japan",
    category: "special",
    popular: true,
    types: ["history", "nature"],
    title: {
      ru: 'Сельская Япония: традиционные деревни',
      en: 'Rural Japan: Traditional Villages',
      ja: '日本の田舎：伝統的な村々'
    },
    description: {
      ru: 'Погружение в традиционную сельскую Японию с посещением деревень Сиракава-го и Гокаяма - объектов всемирного наследия ЮНЕСКО. Дома с соломенными крышами, горячие источники Такаямы и знакомство с жизнью японской глубинки.',
      en: 'Immersion into traditional rural Japan visiting Shirakawa-go and Gokayama villages - UNESCO World Heritage sites. Thatched-roof houses, Takayama hot springs and experiencing life in rural Japan.',
      ja: '白川郷と五箇山の村々を訪れる伝統的な日本の田舎への没入体験 - ユネスコ世界遺産。茅葺き屋根の家、高山の温泉、そして日本の田舎暮らしの体験。'
    },
    route: {
      ru: ["Такаяма", "Сиракава-го", "Гокаяма", "Хираю Онсен"],
      en: ["Takayama", "Shirakawa-go", "Gokayama", "Hirayu Onsen"],
      ja: ["高山", "白川郷", "五箇山", "平湯温泉"]
    },
    routeDescription: {
      ru: 'Путешествие по горным деревням с объектами ЮНЕСКО, традиционной архитектурой и горячими источниками',
      en: 'Journey through mountain villages with UNESCO sites, traditional architecture and hot springs',
      ja: 'ユネスコ遺産、伝統建築、温泉のある山間の村々を巡る旅'
    },
    duration: 3,
    price: 1000,
    groupSizeMin: 4,
    groupSizeMax: 8,
    image: '/images/tours/rural-japan.png',
    seasons: ["winter", "spring", "summer", "autumn"],
    seasonDescription: {
      ru: 'Зимой: деревни под снегом с подсветкой, круглый год красиво',
      en: 'Winter: snow-covered villages with illumination, beautiful year-round',
      ja: '冬：雪に覆われた村々のライトアップ、年間を通して美しい'
    },
    highlights: {
      ru: [
        "Дома гассё-дзукури с крышами \"молящихся рук\"",
        "Деревня Сиракава-го - объект ЮНЕСКО с 1995 года",
        "Гокаяма - менее туристическая, более аутентичная",
        "Ночевка в традиционном минсюку (сельская гостиница)",
        "Онсен в горах Такаямы с видом на Альпы",
        "Традиционная кухня горных регионов",
        "Мастер-классы по традиционным ремеслам",
        "Зимняя подсветка деревень (январь-февраль)"
      ],
      en: [
        "Gassho-zukuri houses with \"praying hands\" roofs",
        "Shirakawa-go village - UNESCO site since 1995",
        "Gokayama - less touristy, more authentic",
        "Overnight stay in traditional minshuku (rural inn)",
        "Onsen in Takayama mountains with Alps view",
        "Traditional cuisine of mountain regions",
        "Workshops on traditional crafts",
        "Winter illumination of villages (January-February)"
      ],
      ja: [
        "「合掌造り」の家々",
        "白川郷の村 - 1995年からユネスコ遺産",
        "五箇山 - より観光地化されていない、より本格的",
        "伝統的な民宿での宿泊",
        "アルプスの眺めがある高山の温泉",
        "山間地域の伝統料理",
        "伝統工芸のワークショップ",
        "村々の冬のライトアップ（1月-2月）"
      ]
    },
    itinerary: [
      {
        day: 1,
        title: {
          ru: "Переезд в Такаяму",
          en: "Transfer to Takayama",
          ja: "高山への移動"
        },
        description: {
          ru: "Отправление из Токио или Осаки в Такаяму. Размещение в традиционном рёкане. Вечерняя прогулка по историческому району Санмати-Суджи с деревянными домами эпохи Эдо.",
          en: "Departure from Tokyo or Osaka to Takayama. Accommodation in traditional ryokan. Evening walk through historic Sanmachi-Suji district with Edo period wooden houses.",
          ja: "東京または大阪から高山への出発。伝統的な旅館での宿泊。江戸時代の木造家屋がある歴史的な三町筋地区の夜の散歩。"
        }
      },
      {
        day: 2,
        title: {
          ru: "Сиракава-го - сказочная деревня",
          en: "Shirakawa-go - fairytale village",
          ja: "白川郷 - おとぎ話の村"
        },
        description: {
          ru: "Поездка в деревню Сиракава-го. Посещение дома Вада - крупнейшего дома гассё-дзукури. Подъем на смотровую площадку Сиракава-го. Обед в традиционном ресторане с местной кухней.",
          en: "Trip to Shirakawa-go village. Visit to Wada House - largest gassho-zukuri house. Ascent to Shirakawa-go observation deck. Lunch at traditional restaurant with local cuisine.",
          ja: "白川郷の村への旅行。和田家の見学 - 最大の合掌造りの家。白川郷展望台への登り。地元料理の伝統的なレストランでの昼食。"
        }
      },
      {
        day: 3,
        title: {
          ru: "Гокаяма и онсен",
          en: "Gokayama and onsen",
          ja: "五箇山と温泉"
        },
        description: {
          ru: "Переезд в менее известную деревню Гокаяма. Посещение дома Иванасэ. Мастер-класс по изготовлению васи (японская бумага). Вечернее купание в онсене с видом на горы. Возвращение.",
          en: "Transfer to lesser-known Gokayama village. Visit to Iwanase House. Workshop on making washi (Japanese paper). Evening bathing in onsen with mountain views. Return.",
          ja: "あまり知られていない五箇山の村への移動。岩瀬家の見学。和紙作りのワークショップ。山の眺めがある温泉での夜の入浴。帰路。"
        }
      }
    ],
    included: {
      ru: [
        "Проживание в рёкане и минсюку (2 ночи)",
        "Транспорт включая автобусы к деревням",
        "Русскоговорящий гид",
        "Все входные билеты в дома-музеи",
        "Онсен в Такаяме",
        "Мастер-класс по изготовлению васи",
        "Традиционные завтраки и ужины"
      ],
      en: [
        "Accommodation in ryokan and minshuku (2 nights)",
        "Transport including buses to villages",
        "Russian-speaking guide",
        "All entrance tickets to house museums",
        "Onsen in Takayama",
        "Washi making workshop",
        "Traditional breakfasts and dinners"
      ],
      ja: [
        "旅館と民宿での宿泊（2泊）",
        "村々へのバスを含む交通機関",
        "ロシア語を話すガイド",
        "すべての家屋博物館への入場券",
        "高山での温泉",
        "和紙作りワークショップ",
        "伝統的な朝食と夕食"
      ]
    },
    excluded: {
      ru: [
        "Транспорт до/из Такаямы",
        "Обеды в городах",
        "Дополнительные онсены",
        "Личные расходы и сувениры",
        "Зимняя подсветка (сезонная доплата)",
        "Алкогольные напитки"
      ],
      en: [
        "Transport to/from Takayama",
        "Lunches in cities",
        "Additional onsen",
        "Personal expenses and souvenirs",
        "Winter illumination (seasonal surcharge)",
        "Alcoholic beverages"
      ],
      ja: [
        "高山への往復交通",
        "市内での昼食",
        "追加の温泉",
        "個人的な支出とお土産",
        "冬のライトアップ（季節料金）",
        "アルコール飲料"
      ]
    },
    additionalOptions: [
      {
        name: {
          ru: "Зимняя подсветка деревень",
          en: "Winter village illumination",
          ja: "村々の冬のライトアップ"
        },
        price: 50,
        description: {
          ru: "Посещение деревень во время зимней подсветки (январь-февраль)",
          en: "Village visit during winter illumination (January-February)",
          ja: "冬のライトアップ期間中の村々訪問（1月-2月）"
        }
      },
      {
        name: {
          ru: "Дополнительная ночь в деревне",
          en: "Additional night in village",
          ja: "村での追加宿泊"
        },
        price: 120,
        description: {
          ru: "Дополнительная ночь в минсюку для более глубокого погружения",
          en: "Additional night in minshuku for deeper immersion",
          ja: "より深い体験のための民宿での追加宿泊"
        }
      },
      {
        name: {
          ru: "Мастер-класс по приготовлению соба",
          en: "Soba making workshop",
          ja: "そば作りワークショップ"
        },
        price: 40,
        description: {
          ru: "Изучение традиционного приготовления гречневой лапши",
          en: "Learning traditional buckwheat noodle preparation",
          ja: "伝統的なそば麺作りの学習"
        }
      },
      {
        name: {
          ru: "Частный онсен",
          en: "Private onsen",
          ja: "貸切温泉"
        },
        price: 80,
        description: {
          ru: "Приватное купание в горячих источниках",
          en: "Private hot spring bathing",
          ja: "プライベート温泉入浴"
        }
      }
    ],
    practicalInfo: {
      duration: {
        ru: "3 дня / 2 ночи",
        en: "3 days / 2 nights",
        ja: "3日 / 2泊"
      },
      groupSize: {
        ru: "до 8 человек",
        en: "up to 8 people",
        ja: "最大8人"
      },
      physicalLevel: {
        ru: "легкая-средняя (ходьба по деревням)",
        en: "easy-medium (walking through villages)",
        ja: "軽い-中程度（村での歩行）"
      },
      bestSeasons: {
        ru: "зима (подсветка), но красиво круглый год",
        en: "winter (illumination), but beautiful year-round",
        ja: "冬（ライトアップ）、しかし年間を通して美しい"
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
          ru: "Такаяма/Сиракава-го",
          en: "Takayama/Shirakawa-go",
          ja: "高山/白川郷"
        },
        climate: {
          ru: "горный, -5 до +25°C, много снега зимой",
          en: "mountain climate, -5 to +25°C, heavy snow in winter",
          ja: "山岳気候、-5から+25°C、冬は大雪"
        }
      }
    ],
    packingList: {
      ru: [
        "Теплую одежду (горы, даже летом прохладно)",
        "Удобную обувь для ходьбы по деревням",
        "Фотоаппарат для уникальной архитектуры",
        "Наличные йены (не везде принимают карты)",
        "Купальные принадлежности для онсена",
        "Теплые носки для традиционных домов"
      ],
      en: [
        "Warm clothing (mountains, cool even in summer)",
        "Comfortable shoes for walking through villages",
        "Camera for unique architecture",
        "Cash yen (cards not accepted everywhere)",
        "Bathing accessories for onsen",
        "Warm socks for traditional houses"
      ],
      ja: [
        "暖かい服装（山地、夏でも涼しい）",
        "村歩き用の快適な靴",
        "独特な建築のためのカメラ",
        "現金円（どこでもカードが使えるわけではない）",
        "温泉用の入浴用品",
        "伝統的な家屋用の暖かい靴下"
      ]
    },
    rating: 4.9,
    reviewCount: 134
  },
  {
    id: "hot-springs-japan",
    category: "special",
    popular: true,
    types: ["onsen", "nature"],
    title: {
      ru: 'Горячие источники Японии',
      en: 'Hot Springs of Japan',
      ja: '日本の温泉'
    },
    description: {
      ru: 'Оздоровительный тур по лучшим горячим источникам Японии. От знаменитых онсенов Хаконэ до целебных вод Кусацу, погружение в культуру купания и релаксации в природных горячих источниках с многовековой историей.',
      en: 'Wellness tour of Japan\'s best hot springs. From famous Hakone onsen to healing waters of Kusatsu, immersion into bathing culture and relaxation in natural hot springs with centuries of history.',
      ja: '日本最高の温泉を巡る健康ツアー。有名な箱根の温泉から草津の癒しの湯まで、何世紀もの歴史を持つ天然温泉での入浴文化とリラクゼーションへの没入。'
    },
    route: {
      ru: ["Хаконэ", "Кусацу", "Бэппу", "Югавара"],
      en: ["Hakone", "Kusatsu", "Beppu", "Yugawara"],
      ja: ["箱根", "草津", "別府", "湯河原"]
    },
    routeDescription: {
      ru: 'Оздоровительный тур по лучшим горячим источникам с разными типами минеральных вод и лечебными свойствами',
      en: 'Wellness tour of the best hot springs with different types of mineral waters and healing properties',
      ja: '異なる種類のミネラル水と治癒特性を持つ最高の温泉を巡る健康ツアー'
    },
    duration: 8,
    price: 3150,
    groupSizeMin: 6,
    groupSizeMax: 10,
    image: '/images/tours/hot-springs-japan.png',
    seasons: ["all-year", "winter"],
    seasonDescription: {
      ru: 'Круглый год, особенно приятно зимой для контраста с холодным воздухом',
      en: 'Year-round, especially pleasant in winter for contrast with cold air',
      ja: '年間を通して、特に冷たい空気とのコントラストで冬が心地よい'
    },
    highlights: {
      ru: [
        "Хаконэ - онсены с видом на гору Фудзи",
        "Кусацу - один из трех лучших онсенов Японии",
        "Бэппу - \"горячий источник ада\" на Кюсю",
        "Югавара - исторический курорт писателей и художников",
        "Разные типы минеральных вод и их свойства",
        "Традиционные рёканы с частными онсенами",
        "Церемония юмоми в Кусацу",
        "СПА-процедуры и массаж"
      ],
      en: [
        "Hakone - onsen with Mount Fuji views",
        "Kusatsu - one of Japan's three best onsen",
        "Beppu - \"hell hot springs\" in Kyushu",
        "Yugawara - historic resort of writers and artists",
        "Different types of mineral waters and their properties",
        "Traditional ryokans with private onsen",
        "Yumomi ceremony in Kusatsu",
        "SPA treatments and massage"
      ],
      ja: [
        "箱根 - 富士山の眺めがある温泉",
        "草津 - 日本三大温泉の一つ",
        "別府 - 九州の「地獄温泉」",
        "湯河原 - 作家と芸術家の歴史的リゾート",
        "様々な種類のミネラル水とその特性",
        "プライベート温泉付きの伝統的な旅館",
        "草津での湯もみ儀式",
        "スパトリートメントとマッサージ"
      ]
    },
    itinerary: [
      {
        day: 1,
        title: {
          ru: "Прибытие в Хаконэ",
          en: "Arrival in Hakone",
          ja: "箱根到着"
        },
        description: {
          ru: "Переезд в Хаконэ из Токио. Размещение в традиционном рёкане с онсеном. Вечернее купание с видом на озеро Аси и знакомство с культурой онсен.",
          en: "Transfer to Hakone from Tokyo. Accommodation in traditional ryokan with onsen. Evening bathing with Lake Ashi view and introduction to onsen culture.",
          ja: "東京から箱根への移動。温泉付きの伝統的な旅館での宿泊。芦ノ湖の眺めがある夜の入浴と温泉文化の紹介。"
        }
      },
      {
        day: 2,
        title: {
          ru: "Хаконэ - разнообразие источников",
          en: "Hakone - variety of springs",
          ja: "箱根 - 様々な温泉"
        },
        description: {
          ru: "Посещение различных типов онсенов: Тэнсан, Гора, Сэнгокухара. Каждый источник имеет разный состав воды и лечебные свойства. Виды на гору Фудзи.",
          en: "Visit to different types of onsen: Tenzan, Gora, Sengokuhara. Each spring has different water composition and healing properties. Mount Fuji views.",
          ja: "異なるタイプの温泉訪問：天山、強羅、仙石原。各温泉は異なる水質と治癒特性を持っています。富士山の眺め。"
        }
      },
      {
        day: 3,
        title: {
          ru: "Переезд в Кусацу",
          en: "Transfer to Kusatsu",
          ja: "草津への移動"
        },
        description: {
          ru: "Переезд в Кусацу - один из самых знаменитых онсен-курортов. Размещение в рёкане. Посещение символа Кусацу - поля Юбатаке с деревянными желобами для охлаждения воды.",
          en: "Transfer to Kusatsu - one of the most famous onsen resorts. Ryokan accommodation. Visit to Kusatsu symbol - Yubatake field with wooden channels for cooling water.",
          ja: "最も有名な温泉リゾートの一つ、草津への移動。旅館での宿泊。草津のシンボル、湯畑の見学 - 水を冷却するための木製の水路。"
        }
      },
      {
        day: 4,
        title: {
          ru: "Кусацу - церемония юмоми",
          en: "Kusatsu - yumomi ceremony",
          ja: "草津 - 湯もみ儀式"
        },
        description: {
          ru: "Участие в традиционной церемонии юмоми - охлаждение горячей воды деревянными досками под песни. Посещение различных общественных бань с разной температурой.",
          en: "Participation in traditional yumomi ceremony - cooling hot water with wooden boards while singing. Visit to various public baths with different temperatures.",
          ja: "伝統的な湯もみ儀式への参加 - 歌いながら木の板で熱いお湯を冷ます。異なる温度の様々な公衆浴場の訪問。"
        }
      },
      {
        day: 5,
        title: {
          ru: "Перелет в Бэппу",
          en: "Flight to Beppu",
          ja: "別府へのフライト"
        },
        description: {
          ru: "Перелет на Кюсю в город Бэппу. Знакомство с \"восемью адскими прудами\" - геотермальными источниками разных цветов: голубой, красный, кипящий гейзер.",
          en: "Flight to Kyushu to Beppu city. Introduction to \"eight hell ponds\" - geothermal springs of different colors: blue, red, boiling geyser.",
          ja: "九州の別府市へのフライト。「八つの地獄池」の紹介 - 青、赤、沸騰する間欠泉など、異なる色の地熱温泉。"
        }
      },
      {
        day: 6,
        title: {
          ru: "Бэппу - разнообразие онсенов",
          en: "Beppu - variety of onsen",
          ja: "別府 - 様々な温泉"
        },
        description: {
          ru: "Посещение уникальных онсенов: песочные ванны на пляже, грязевые ванны, источники с различными минералами. Лечебные процедуры с вулканической грязью.",
          en: "Visit to unique onsen: sand baths on beach, mud baths, springs with various minerals. Therapeutic treatments with volcanic mud.",
          ja: "ユニークな温泉への訪問：ビーチでの砂風呂、泥風呂、様々なミネラルを含む温泉。火山泥による治療。"
        }
      },
      {
        day: 7,
        title: {
          ru: "Югавара - курорт творческих людей",
          en: "Yugawara - resort of creative people",
          ja: "湯河原 - 創造的な人々のリゾート"
        },
        description: {
          ru: "Переезд в Югавару. Исторический курорт, любимый писателями и художниками эпохи Мэйдзи. Размещение в историческом рёкане. Мягкие щелочные источники.",
          en: "Transfer to Yugawara. Historic resort beloved by writers and artists of Meiji era. Accommodation in historic ryokan. Soft alkaline springs.",
          ja: "湯河原への移動。明治時代の作家や芸術家に愛された歴史的リゾート。歴史的な旅館での宿泊。柔らかいアルカリ性温泉。"
        }
      },
      {
        day: 8,
        title: {
          ru: "Завершение тура",
          en: "Tour completion",
          ja: "ツアー終了"
        },
        description: {
          ru: "Последнее утреннее купание в онсене. Подведение итогов оздоровительного тура. Возвращение в Токио или трансфер в аэропорт для вылета домой.",
          en: "Final morning onsen bathing. Wellness tour summary. Return to Tokyo or airport transfer for departure home.",
          ja: "最後の朝の温泉入浴。健康ツアーのまとめ。東京への帰還または帰国のための空港送迎。"
        }
      }
    ],
    included: {
      ru: [
        "Проживание в традиционных рёканах (7 ночей)",
        "Все переезды включая внутренний перелет",
        "Доступ ко всем онсенам по программе",
        "Традиционные завтраки и ужины кайсэки",
        "Церемония юмоми в Кусацу",
        "Экскурсия по \"адским прудам\" Бэппу",
        "СПА-процедуры в каждом регионе"
      ],
      en: [
        "Accommodation in traditional ryokans (7 nights)",
        "All transfers including domestic flight",
        "Access to all onsen according to program",
        "Traditional breakfasts and kaiseki dinners",
        "Yumomi ceremony in Kusatsu",
        "\"Hell ponds\" tour in Beppu",
        "SPA treatments in each region"
      ],
      ja: [
        "伝統的な旅館での宿泊（7泊）",
        "国内線フライトを含むすべての移動",
        "プログラムに含まれるすべての温泉へのアクセス",
        "伝統的な朝食と懐石料理の夕食",
        "草津での湯もみ儀式",
        "別府の「地獄巡り」ツアー",
        "各地域でのスパトリートメント"
      ]
    },
    excluded: {
      ru: [
        "Транспорт до начального пункта тура",
        "Обеды в ресторанах",
        "Дополнительные массажи и процедуры",
        "Личные расходы и сувениры",
        "Алкогольные напитки",
        "Медицинская страховка"
      ],
      en: [
        "Transport to tour starting point",
        "Restaurant lunches",
        "Additional massages and treatments",
        "Personal expenses and souvenirs",
        "Alcoholic beverages",
        "Medical insurance"
      ],
      ja: [
        "ツアー開始地点への交通",
        "レストランでの昼食",
        "追加のマッサージとトリートメント",
        "個人的な支出とお土産",
        "アルコール飲料",
        "医療保険"
      ]
    },
    additionalOptions: [
      {
        name: {
          ru: "Частный онсен (семейный)",
          en: "Private onsen (family)",
          ja: "貸切温泉（家族用）"
        },
        price: 100,
        description: {
          ru: "Приватное купание в семейном онсене на час",
          en: "Private bathing in family onsen for one hour",
          ja: "1時間の家族温泉でのプライベート入浴"
        }
      },
      {
        name: {
          ru: "Дополнительные массажи",
          en: "Additional massages",
          ja: "追加マッサージ"
        },
        price: 80,
        description: {
          ru: "Профессиональный японский массаж (60 минут)",
          en: "Professional Japanese massage (60 minutes)",
          ja: "プロの日本式マッサージ（60分）"
        }
      },
      {
        name: {
          ru: "Премиум рёкан с лучшими видами",
          en: "Premium ryokan with best views",
          ja: "最高の眺めのプレミアム旅館"
        },
        price: 400,
        description: {
          ru: "Апгрейд до рёкана премиум класса с видами на Фудзи",
          en: "Upgrade to premium ryokan with Fuji views",
          ja: "富士山の眺めがあるプレミアム旅館へのアップグレード"
        }
      },
      {
        name: {
          ru: "Дегустация местных саке",
          en: "Local sake tasting",
          ja: "地酒試飲"
        },
        price: 60,
        description: {
          ru: "Дегустация сакэ, произведенного в каждом регионе",
          en: "Tasting of sake produced in each region",
          ja: "各地域で製造された日本酒の試飲"
        }
      }
    ],
    practicalInfo: {
      duration: {
        ru: "8 дней / 7 ночей",
        en: "8 days / 7 nights",
        ja: "8日 / 7泊"
      },
      groupSize: {
        ru: "до 10 человек",
        en: "up to 10 people",
        ja: "最大10人"
      },
      physicalLevel: {
        ru: "легкая (много релаксации)",
        en: "easy (lots of relaxation)",
        ja: "軽い（多くのリラクゼーション）"
      },
      bestSeasons: {
        ru: "зима (контраст), но приятно круглый год",
        en: "winter (contrast), but pleasant year-round",
        ja: "冬（コントラスト）、しかし年間を通して心地よい"
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
          ru: "Хаконэ",
          en: "Hakone",
          ja: "箱根"
        },
        climate: {
          ru: "горный, +5-25°C, влажность от источников",
          en: "mountain climate, +5-25°C, humidity from springs",
          ja: "山岳気候、+5-25°C、温泉からの湿度"
        }
      },
      {
        region: {
          ru: "Кусацу",
          en: "Kusatsu",
          ja: "草津"
        },
        climate: {
          ru: "высокогорный, -5-20°C, сухой воздух",
          en: "highland, -5-20°C, dry air",
          ja: "高地、-5-20°C、乾燥した空気"
        }
      },
      {
        region: {
          ru: "Бэппу",
          en: "Beppu",
          ja: "別府"
        },
        climate: {
          ru: "субтропический, +10-30°C, высокая влажность",
          en: "subtropical, +10-30°C, high humidity",
          ja: "亜熱帯、+10-30°C、高湿度"
        }
      }
    ],
    packingList: {
      ru: [
        "Купальные принадлежности (полотенца предоставляются)",
        "Резиновые тапочки для влажных полов",
        "Легкую одежду после купания",
        "Средства для волос (вода может сушить)",
        "Бутылку воды (важно избегать обезвоживания)",
        "Удобную одежду для релаксации"
      ],
      en: [
        "Bathing accessories (towels provided)",
        "Rubber slippers for wet floors",
        "Light clothing after bathing",
        "Hair care products (water may dry)",
        "Water bottle (important to avoid dehydration)",
        "Comfortable clothing for relaxation"
      ],
      ja: [
        "入浴用品（タオルは提供されます）",
        "濡れた床用のゴムスリッパー",
        "入浴後の軽い服装",
        "ヘアケア製品（水が乾燥させる可能性）",
        "水のボトル（脱水症状を避けることが重要）",
        "リラクゼーション用の快適な服装"
      ]
    },
    rating: 4.8,
    reviewCount: 98
  },
  {
    id: "custom-tour",
    category: "special",
    popular: false,
    types: ["culture", "luxury"],
    title: {
      ru: 'Кастомный тур',
      en: 'Custom Tour',
      ja: 'カスタムツアー'
    },
    description: {
      ru: 'Полностью персонализированное путешествие по Японии, созданное специально под ваши интересы, предпочтения и пожелания. От выбора маршрута до уровня комфорта - каждая деталь адаптируется под конкретного путешественника или группу.',
      en: 'Completely personalized travel through Japan, created specifically for your interests, preferences and wishes. From route selection to comfort level - every detail is adapted to the specific traveler or group.',
      ja: 'あなたの興味、好み、願いに特別に合わせて作られた、完全にパーソナライズされた日本旅行。ルート選択から快適さのレベルまで - すべての詳細が特定の旅行者やグループに適応されています。'
    },
    route: {
      ru: ["Индивидуальный маршрут", "По вашим пожеланиям", "Гибкое планирование"],
      en: ["Individual route", "According to your wishes", "Flexible planning"],
      ja: ["個別ルート", "あなたの希望に応じて", "柔軟な計画"]
    },
    routeDescription: {
      ru: 'Индивидуальный маршрут, составленный с учетом всех пожеланий. Собственный транспорт и гид, гибкое расписание, возможность изменений по ходу путешествия',
      en: 'Individual route compiled taking into account all wishes. Private transport and guide, flexible schedule, possibility to make changes during the journey',
      ja: 'すべての希望を考慮して作成された個別ルート。専用の交通機関とガイド、柔軟なスケジュール、旅行中の変更の可能性'
    },
    duration: 7, // Default duration for display, actual duration is flexible
    price: 500, // Price per day starting from
    groupSizeMin: 1,
    groupSizeMax: 20,
    image: '/images/tours/custom-tour.png',
    seasons: ["spring", "summer", "autumn", "winter"],
    seasonDescription: {
      ru: 'Любой сезон по желанию клиента, планирование под конкретные даты',
      en: 'Any season according to client wishes, planning for specific dates',
      ja: 'クライアントの希望に応じた任意の季節、特定の日程での計画'
    },
    highlights: {
      ru: [
        "Маршрут создается индивидуально под каждого клиента",
        "Гибкое расписание с возможностью изменений",
        "Собственный транспорт и персональный гид",
        "Выбор уровня размещения от бюджетного до люкс",
        "Специализация по интересам (история, еда, природа, аниме и др.)",
        "Продолжительность от 1 дня до нескольких недель",
        "Возможность посещения нетуристических мест",
        "Адаптация под физические возможности и ограничения"
      ],
      en: [
        "Route created individually for each client",
        "Flexible schedule with possibility of changes",
        "Private transport and personal guide",
        "Choice of accommodation level from budget to luxury",
        "Specialization by interests (history, food, nature, anime, etc.)",
        "Duration from 1 day to several weeks",
        "Possibility to visit non-tourist places",
        "Adaptation to physical capabilities and limitations"
      ],
      ja: [
        "各クライアントに個別に作成されるルート",
        "変更可能な柔軟なスケジュール",
        "専用交通機関と個人ガイド",
        "予算からラグジュアリーまでの宿泊レベルの選択",
        "興味による専門化（歴史、食事、自然、アニメなど）",
        "1日から数週間までの期間",
        "非観光地を訪問する可能性",
        "身体的能力と制限への適応"
      ]
    },
    itinerary: [
      {
        day: 1,
        title: {
          ru: "Индивидуальное планирование",
          en: "Individual planning",
          ja: "個別計画"
        },
        description: {
          ru: "Маршрут и программа каждого дня создаются индивидуально на основе ваших интересов, бюджета и предпочтений. Возможны любые комбинации городов, активностей и уровня комфорта.",
          en: "Route and program for each day are created individually based on your interests, budget and preferences. Any combinations of cities, activities and comfort levels are possible.",
          ja: "各日のルートとプログラムは、あなたの興味、予算、好みに基づいて個別に作成されます。都市、アクティビティ、快適さのレベルのあらゆる組み合わせが可能です。"
        }
      }
    ],
    included: {
      ru: [
        "Персональная консультация и планирование",
        "Детальный маршрут с картами и инструкциями",
        "Бронирование всех услуг",
        "Круглосуточная поддержка во время тура",
        "Гид (опционально - в зависимости от пожеланий)",
        "Трансферы по программе",
        "Возможность изменений маршрута"
      ],
      en: [
        "Personal consultation and planning",
        "Detailed route with maps and instructions",
        "Booking of all services",
        "24/7 support during the tour",
        "Guide (optional - depending on preferences)",
        "Transfers according to program",
        "Possibility to change route"
      ],
      ja: [
        "個人コンサルテーションと計画",
        "地図と説明書付きの詳細ルート",
        "すべてのサービスの予約",
        "ツアー中の24時間サポート",
        "ガイド（オプション - 希望による）",
        "プログラムに従った送迎",
        "ルート変更の可能性"
      ]
    },
    excluded: {
      ru: [
        "Размещение (выбирается по бюджету)",
        "Транспорт (от JR Pass до частного автомобиля)",
        "Питание (от уличной еды до Мишлен)",
        "Экскурсии и активности (по выбору)",
        "Билеты и входы (по программе)",
        "Международные авиаперелеты"
      ],
      en: [
        "Accommodation (chosen by budget)",
        "Transport (from JR Pass to private car)",
        "Meals (from street food to Michelin)",
        "Excursions and activities (by choice)",
        "Tickets and entries (according to program)",
        "International flights"
      ],
      ja: [
        "宿泊施設（予算により選択）",
        "交通機関（JRパスから専用車まで）",
        "食事（屋台料理からミシュランまで）",
        "見学とアクティビティ（選択による）",
        "チケットと入場料（プログラムによる）",
        "国際線フライト"
      ]
    },
    additionalOptions: [
      {
        name: {
          ru: "Частный гид на весь тур",
          en: "Private guide for entire tour",
          ja: "全ツアーでのプライベートガイド"
        },
        price: 300,
        priceType: "per_day",
        description: {
          ru: "Персональный гид-эксперт на все дни путешествия",
          en: "Personal expert guide for all travel days",
          ja: "すべての旅行日程での個人専門ガイド"
        }
      },
      {
        name: {
          ru: "Частный транспорт",
          en: "Private transport",
          ja: "専用交通機関"
        },
        price: 400,
        priceType: "per_day",
        description: {
          ru: "Автомобиль с водителем на весь день",
          en: "Car with driver for the whole day",
          ja: "一日中運転手付きの車"
        }
      },
      {
        name: {
          ru: "Премиум размещение",
          en: "Premium accommodation",
          ja: "プレミアム宿泊"
        },
        price: 300,
        priceType: "per_night",
        description: {
          ru: "Отели 5* и роскошные рёканы",
          en: "5* hotels and luxury ryokans",
          ja: "5つ星ホテルと高級旅館"
        }
      },
      {
        name: {
          ru: "Эксклюзивные мероприятия",
          en: "Exclusive events",
          ja: "エクスクルーシブなイベント"
        },
        price: 200,
        description: {
          ru: "Доступ к закрытым мероприятиям и VIP локациям",
          en: "Access to private events and VIP locations",
          ja: "プライベートイベントとVIPロケーションへのアクセス"
        }
      }
    ],
    practicalInfo: {
      duration: {
        ru: "от 1 дня до нескольких недель",
        en: "from 1 day to several weeks",
        ja: "1日から数週間まで"
      },
      groupSize: {
        ru: "от 1 до 20 человек",
        en: "from 1 to 20 people",
        ja: "1人から20人まで"
      },
      physicalLevel: {
        ru: "адаптируется под клиента",
        en: "adapted to client",
        ja: "クライアントに適応"
      },
      bestSeasons: {
        ru: "любой сезон по желанию",
        en: "any season by request",
        ja: "希望に応じた任意の季節"
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
          ru: "Планирование под сезон",
          en: "Planning for season",
          ja: "季節に応じた計画"
        },
        climate: {
          ru: "адаптируется под выбранные регионы и время года",
          en: "adapts to chosen regions and time of year",
          ja: "選択された地域と時期に適応"
        }
      }
    ],
    packingList: {
      ru: [
        "Список составляется индивидуально",
        "Зависит от сезона и выбранных активностей",
        "Рекомендации предоставляются после планирования",
        "Учитываются климатические условия маршрута",
        "Адаптируется под уровень комфорта",
        "Специальные требования по запросу"
      ],
      en: [
        "List compiled individually",
        "Depends on season and chosen activities",
        "Recommendations provided after planning",
        "Takes into account route climate conditions",
        "Adapted to comfort level",
        "Special requirements on request"
      ],
      ja: [
        "個別にリストを作成",
        "季節と選択されたアクティビティに依存",
        "計画後に推奨事項を提供",
        "ルートの気候条件を考慮",
        "快適さのレベルに適応",
        "リクエストに応じた特別要件"
      ]
    },
    rating: 4.9,
    reviewCount: 89,
    // Special fields for custom tour
    customTourTypes: [
      {
        id: "gastronomic",
        title: {
          ru: "Гастрономические туры",
          en: "Gastronomic tours",
          ja: "グルメツアー"
        },
        description: {
          ru: "Региональные кухни, мастер-классы, рестораны Мишлен",
          en: "Regional cuisines, workshops, Michelin restaurants",
          ja: "地方料理、ワークショップ、ミシュランレストラン"
        }
      },
      {
        id: "historical",
        title: {
          ru: "Исторические туры",
          en: "Historical tours",
          ja: "歴史ツアー"
        },
        description: {
          ru: "Замки, музеи, исторические районы",
          en: "Castles, museums, historical districts",
          ja: "城、博物館、歴史地区"
        }
      },
      {
        id: "nature",
        title: {
          ru: "Природные туры",
          en: "Nature tours",
          ja: "自然ツアー"
        },
        description: {
          ru: "Национальные парки, горы, онсены",
          en: "National parks, mountains, onsen",
          ja: "国立公園、山、温泉"
        }
      },
      {
        id: "cultural",
        title: {
          ru: "Культурные туры",
          en: "Cultural tours",
          ja: "文化ツアー"
        },
        description: {
          ru: "Искусство, ремесла, традиции",
          en: "Art, crafts, traditions",
          ja: "芸術、工芸、伝統"
        }
      },
      {
        id: "anime",
        title: {
          ru: "Аниме и поп-культура",
          en: "Anime and pop culture",
          ja: "アニメとポップカルチャー"
        },
        description: {
          ru: "Места съемок, студии, магазины, кафе",
          en: "Filming locations, studios, shops, cafes",
          ja: "撮影場所、スタジオ、ショップ、カフェ"
        }
      }
    ],
    priceRanges: [
      {
        level: "budget",
        title: {
          ru: "Бюджетный уровень",
          en: "Budget level",
          ja: "バジェットレベル"
        },
        priceRange: "$200-400/день",
        description: {
          ru: "Хостелы, общественный транспорт, уличная еда",
          en: "Hostels, public transport, street food",
          ja: "ホステル、公共交通機関、屋台料理"
        }
      },
      {
        level: "medium",
        title: {
          ru: "Средний уровень",
          en: "Medium level",
          ja: "ミドルレベル"
        },
        priceRange: "$400-800/день",
        description: {
          ru: "Отели 3-4*, комбинированный транспорт, хорошие рестораны",
          en: "3-4* hotels, combined transport, good restaurants",
          ja: "3-4つ星ホテル、複合交通機関、良いレストラン"
        }
      },
      {
        level: "premium",
        title: {
          ru: "Премиум уровень",
          en: "Premium level",
          ja: "プレミアムレベル"
        },
        priceRange: "$800-1500/день",
        description: {
          ru: "Отели 4-5* и рёканы, частный транспорт, высококлассные рестораны",
          en: "4-5* hotels and ryokans, private transport, high-class restaurants",
          ja: "4-5つ星ホテルと旅館、専用交通機関、高級レストラン"
        }
      },
      {
        level: "luxury",
        title: {
          ru: "Люкс уровень",
          en: "Luxury level",
          ja: "ラグジュアリーレベル"
        },
        priceRange: "$1500+/день",
        description: {
          ru: "Эксклюзивные отели, премиум транспорт, мишленовские рестораны",
          en: "Exclusive hotels, premium transport, Michelin restaurants",
          ja: "エクスクルーシブホテル、プレミアム交通機関、ミシュランレストラン"
        }
      }
    ]
  }

];