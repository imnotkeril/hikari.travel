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
    image: 'https://source.unsplash.com/featured/?japan,landscape',
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
        day: 2,
        title: {
          ru: "Окинава - тропический рай",
          en: "Okinawa - tropical paradise",
          ja: "沖縄 - 熱帯の楽園"
        },
        description: {
          ru: "Замок Сюри, деревня Рюкю, пляжи. Знакомство с историей королевства Рюкю.",
          en: "Shuri Castle, Ryukyu Village, beaches. Introduction to the history of the Ryukyu Kingdom.",
          ja: "首里城、琉球村、ビーチ。琉球王国の歴史紹介。"
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
    rating: 4.8,
    reviewCount: 67
  }
];