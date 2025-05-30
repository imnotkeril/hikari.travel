// src/components/FAQ.js
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

function FAQ({ currentLang, variant = 'full' }) {
  const [openItem, setOpenItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Расширенные переводы для FAQ
  const translations = {
    ru: {
      title: 'Часто задаваемые вопросы',
      searchPlaceholder: 'Поиск по вопросам...',
      allCategories: 'Все категории',
      categories: {
        visa: 'Визы и документы',
        tours: 'Туры и услуги',
        payment: 'Оплата и бронирование',
        practical: 'Практическая информация',
        transport: 'Транспорт и проживание'
      },
      questions: {
        visa: [
          {
            question: 'Нужна ли виза для поездки в Японию?',
            answer: 'Да, для граждан России требуется виза для посещения Японии. Мы предоставляем консультацию и помощь в подготовке необходимых документов для получения визы. Процесс обычно занимает 7-10 рабочих дней.'
          },
          {
            question: 'Какие документы нужны для визы?',
            answer: 'Заграничный паспорт (действительный не менее 6 месяцев), справка с работы, выписка с банковского счета за последние 3 месяца, бронь отеля, авиабилеты, заполненная анкета, фото 4.5x4.5 см. Полный список предоставим при бронировании.'
          },
          {
            question: 'Нужны ли прививки для поездки в Японию?',
            answer: 'Обязательных прививок не требуется. Рекомендуем стандартные прививки и обязательно медицинскую страховку на сумму не менее $50,000.'
          }
        ],
        tours: [
          {
            question: 'Какой язык используют ваши гиды?',
            answer: 'Наши гиды свободно говорят на русском, английском и японском языках. Вы можете выбрать предпочтительный язык при бронировании тура.'
          },
          {
            question: 'Можно ли организовать индивидуальный тур?',
            answer: 'Да, мы специализируемся на индивидуальных турах, учитывающих ваши предпочтения и интересы. Стоимость рассчитывается индивидуально в зависимости от программы и количества участников.'
          },
          {
            question: 'Что включено в стоимость тура?',
            answer: 'В стоимость обычно включены: проживание в отелях 3-4*, завтраки, транспорт по программе, услуги русскоговорящего гида, входные билеты в музеи и достопримечательности. Авиабилеты, обеды/ужины и личные расходы оплачиваются отдельно.'
          },
          {
            question: 'Какой размер группы в турах?',
            answer: 'Групповые туры: 8-15 человек. Индивидуальные туры: 1-6 человек. Маленькие группы позволяют обеспечить персональное внимание каждому участнику и более гибкую программу.'
          }
        ],
        payment: [
          {
            question: 'Как производится оплата тура?',
            answer: 'Мы принимаем оплату банковской картой, банковским переводом или через электронные платежные системы. При бронировании требуется предоплата 30%, остаток суммы оплачивается за 21 день до начала тура.'
          },
          {
            question: 'Можно ли отменить или изменить бронирование?',
            answer: 'Отмена за 30+ дней: возврат 90% стоимости. За 15-29 дней: возврат 50%. Менее 15 дней: возврат не предусмотрен. Изменения в программе возможны до 21 дня без дополнительных платежей.'
          },
          {
            question: 'Нужна ли страховка?',
            answer: 'Медицинская страховка обязательна для получения визы. Рекомендуем также страховку от отмены поездки. Можем помочь с оформлением подходящего полиса.'
          },
          {
            question: 'В какой валюте указаны цены?',
            answer: 'Цены указаны в долларах США. Оплата возможна в рублях по курсу ЦБ на день оплаты. Принимаем карты Visa, MasterCard, Мир.'
          }
        ],
        practical: [
          {
            question: 'Какая погода в Японии по сезонам?',
            answer: 'Весна (март-май): 15-25°C, цветение сакуры. Лето (июнь-август): 25-35°C, жарко и влажно, сезон дождей в июне-июле. Осень (сентябрь-ноябрь): 15-25°C, красивые осенние листья. Зима (декабрь-февраль): 0-15°C, сухо и солнечно.'
          },
          {
            question: 'Какую валюту брать в Японию?',
            answer: 'Основная валюта - японская иена (JPY). В Японии по-прежнему популярны наличные расчеты. Рекомендуем брать наличные доллары или евро для обмена на месте, а также карту для снятия в банкоматах 7-Eleven.'
          },
          {
            question: 'Нужно ли знание японского языка?',
            answer: 'Нет, наши гиды обеспечивают полную языковую поддержку. В крупных городах многие вывески дублируются на английском. В отелях и ресторанах персонал часто говорит по-английски.'
          },
          {
            question: 'Какие розетки и напряжение в Японии?',
            answer: 'Тип A (американский стандарт), напряжение 100V, частота 50/60Hz. Рекомендуем взять универсальный адаптер. Большинство современных устройств работают с таким напряжением.'
          }
        ],
        transport: [
          {
            question: 'Какой уровень отелей вы используете?',
            answer: 'Мы размещаем в отелях 3-4 звезды в центре городов, традиционных рёканах (японских гостиницах), капсульных отелях (по желанию). Все варианты чистые, комфортные и аутентичные.'
          },
          {
            question: 'Как происходят переезды между городами?',
            answer: 'В основном на скоростных поездах синкансэн (японские "пули" - до 320 км/ч). Быстро, комфортно и красивые виды. Иногда используем автобусы для живописных маршрутов в горах.'
          },
          {
            question: 'Включен ли JR Pass в стоимость?',
            answer: 'JR Pass включен в большинство многодневных туров (от 7 дней). Это проездной на все поезда JR, включая синкансэн. Очень выгодно для путешествий по стране - экономия до 50%.'
          },
          {
            question: 'Можно ли продлить пребывание в Японии?',
            answer: 'Да, мы можем организовать продление программы или свободные дни в любом городе. Поможем с бронированием дополнительных ночей в отелях и составим рекомендации по самостоятельному осмотру.'
          }
        ]
      }
    },
    en: {
      title: 'Frequently Asked Questions',
      searchPlaceholder: 'Search questions...',
      allCategories: 'All Categories',
      categories: {
        visa: 'Visas & Documents',
        tours: 'Tours & Services',
        payment: 'Payment & Booking',
        practical: 'Practical Information',
        transport: 'Transport & Accommodation'
      },
      questions: {
        visa: [
          {
            question: 'Do I need a visa to travel to Japan?',
            answer: 'Visa requirements vary depending on your nationality. Citizens of many countries can visit Japan visa-free for short stays. We provide consultation and assistance in preparing necessary documents if a visa is required.'
          },
          {
            question: 'What documents are needed for a visa?',
            answer: 'Valid passport (at least 6 months), employment certificate, bank statements for last 3 months, hotel reservations, flight tickets, completed application form, 4.5x4.5 cm photo. Full list provided upon booking.'
          },
          {
            question: 'Are vaccinations required for Japan?',
            answer: 'No mandatory vaccinations required. We recommend standard vaccinations and mandatory travel insurance with minimum $50,000 coverage.'
          }
        ],
        tours: [
          {
            question: 'What languages do your guides speak?',
            answer: 'Our guides are fluent in Russian, English, and Japanese. You can choose your preferred language when booking a tour.'
          },
          {
            question: 'Can you organize a custom tour?',
            answer: 'Yes, we specialize in custom tours tailored to your preferences and interests. Cost calculated individually based on program and number of participants.'
          },
          {
            question: 'What is included in the tour price?',
            answer: 'Usually includes: 3-4* hotel accommodation, breakfasts, transportation per program, English/Russian speaking guide services, entrance fees to museums and attractions. Flights, lunches/dinners and personal expenses are separate.'
          },
          {
            question: 'What is the group size?',
            answer: 'Group tours: 8-15 people. Private tours: 1-6 people. Small groups ensure personal attention and more flexible itineraries.'
          }
        ],
        payment: [
          {
            question: 'How do I pay for the tour?',
            answer: 'We accept credit cards, bank transfers, and electronic payment systems. 30% deposit required upon booking, balance due 21 days before tour start.'
          },
          {
            question: 'Can I cancel or modify my booking?',
            answer: 'Cancellation 30+ days: 90% refund. 15-29 days: 50% refund. Less than 15 days: no refund. Program changes possible until 21 days without extra fees.'
          },
          {
            question: 'Is travel insurance required?',
            answer: 'Medical insurance is mandatory for visa applications. We also recommend trip cancellation insurance. We can help arrange suitable coverage.'
          },
          {
            question: 'What currency are prices in?',
            answer: 'Prices quoted in USD. Payment possible in local currency at current exchange rates. We accept Visa, MasterCard, and other major cards.'
          }
        ],
        practical: [
          {
            question: 'What is the weather like in Japan by season?',
            answer: 'Spring (Mar-May): 15-25°C, cherry blossoms. Summer (Jun-Aug): 25-35°C, hot and humid, rainy season Jun-Jul. Autumn (Sep-Nov): 15-25°C, beautiful fall colors. Winter (Dec-Feb): 0-15°C, dry and sunny.'
          },
          {
            question: 'What currency should I bring to Japan?',
            answer: 'Japanese Yen (JPY) is the main currency. Cash is still very popular in Japan. Recommend bringing USD or EUR for exchange, plus cards for ATM withdrawals at 7-Eleven stores.'
          },
          {
            question: 'Do I need to know Japanese?',
            answer: 'No, our guides provide full language support. In major cities, many signs are in English. Hotel and restaurant staff often speak English.'
          },
          {
            question: 'What power outlets and voltage in Japan?',
            answer: 'Type A (US standard), 100V voltage, 50/60Hz frequency. Recommend bringing universal adapter. Most modern devices work with this voltage.'
          }
        ],
        transport: [
          {
            question: 'What level hotels do you use?',
            answer: 'We use 3-4 star hotels in city centers, traditional ryokans (Japanese inns), capsule hotels (optional). All options are clean, comfortable and authentic.'
          },
          {
            question: 'How do intercity transfers work?',
            answer: 'Mainly by shinkansen bullet trains (up to 320 km/h). Fast, comfortable with beautiful views. Sometimes use buses for scenic mountain routes.'
          },
          {
            question: 'Is JR Pass included in the price?',
            answer: 'JR Pass included in most multi-day tours (7+ days). It covers all JR trains including shinkansen. Very cost-effective for country travel - saves up to 50%.'
          },
          {
            question: 'Can I extend my stay in Japan?',
            answer: 'Yes, we can arrange program extensions or free days in any city. We help book additional hotel nights and provide recommendations for independent sightseeing.'
          }
        ]
      }
    },
    ja: {
      title: 'よくある質問',
      searchPlaceholder: '質問を検索...',
      allCategories: 'すべてのカテゴリー',
      categories: {
        visa: 'ビザ・書類',
        tours: 'ツアー・サービス',
        payment: '支払い・予約',
        practical: '実用的な情報',
        transport: '交通・宿泊'
      },
      questions: {
        visa: [
          {
            question: '日本への旅行にビザは必要ですか？',
            answer: 'ビザの要件は国籍によって異なります。多くの国の市民は短期滞在の場合、ビザなしで日本を訪れることができます。ビザが必要な場合は、必要書類の準備についてコンサルテーションとサポートを提供します。'
          },
          {
            question: 'ビザに必要な書類は何ですか？',
            answer: '有効なパスポート（6ヶ月以上）、在職証明書、過去3ヶ月の銀行取引明細書、ホテル予約、航空券、記入済み申請書、4.5x4.5cmの写真。予約時に完全なリストを提供します。'
          },
          {
            question: '日本への旅行に予防接種は必要ですか？',
            answer: '義務的な予防接種は不要です。標準的な予防接種と最低50,000ドルの補償額の旅行保険を推奨します。'
          }
        ],
        tours: [
          {
            question: 'ガイドはどの言語を話しますか？',
            answer: '当社のガイドはロシア語、英語、日本語を流暢に話します。ツアー予約時に希望の言語を選択できます。'
          },
          {
            question: 'カスタムツアーを組むことはできますか？',
            answer: 'はい、お客様の好みや興味に合わせたカスタムツアーを専門としています。プログラムと参加者数に基づいて個別に費用を計算します。'
          },
          {
            question: 'ツアー料金に含まれるものは何ですか？',
            answer: '通常含まれるもの：3-4つ星ホテル宿泊、朝食、プログラムによる交通、英語/ロシア語ガイドサービス、博物館・観光地入場料。航空券、昼食/夕食、個人的な費用は別途です。'
          },
          {
            question: 'グループのサイズはどのくらいですか？',
            answer: 'グループツアー：8-15名。プライベートツアー：1-6名。少人数グループにより個人的な注意とより柔軟な旅程を確保します。'
          }
        ],
        payment: [
          {
            question: 'ツアーの支払い方法は？',
            answer: 'クレジットカード、銀行振込、電子決済システムを受け付けています。予約時に30％のデポジット、残金はツアー開始21日前までにお支払いください。'
          },
          {
            question: '予約のキャンセルや変更はできますか？',
            answer: '30日以上前のキャンセル：90％返金。15-29日前：50％返金。15日未満：返金なし。21日前まで追加料金なしでプログラム変更可能です。'
          },
          {
            question: '旅行保険は必要ですか？',
            answer: 'ビザ申請には医療保険が必須です。旅行キャンセル保険も推奨します。適切な補償の手配をお手伝いできます。'
          },
          {
            question: '料金はどの通貨で表示されていますか？',
            answer: '料金は米ドルで表示されています。現在の為替レートで現地通貨での支払いが可能です。Visa、MasterCard、その他主要カードを受け付けます。'
          }
        ],
        practical: [
          {
            question: '日本の季節別の天気はどうですか？',
            answer: '春（3-5月）：15-25°C、桜の季節。夏（6-8月）：25-35°C、暑くて湿度が高い、6-7月は梅雨。秋（9-11月）：15-25°C、美しい紅葉。冬（12-2月）：0-15°C、乾燥して晴れ。'
          },
          {
            question: '日本にはどの通貨を持参すべきですか？',
            answer: '主要通貨は日本円（JPY）です。日本では現金がまだ非常に人気です。両替用にUSDまたはEURの現金、セブン-イレブンのATMでの引き出し用カードをお勧めします。'
          },
          {
            question: '日本語を知る必要がありますか？',
            answer: 'いいえ、当社のガイドが完全な言語サポートを提供します。主要都市では多くの標識が英語併記されています。ホテルやレストランのスタッフは英語を話すことが多いです。'
          },
          {
            question: '日本の電源コンセントと電圧は？',
            answer: 'タイプA（米国標準）、100V電圧、50/60Hz周波数。ユニバーサルアダプターの持参をお勧めします。最新の機器のほとんどはこの電圧で動作します。'
          }
        ],
        transport: [
          {
            question: 'どのレベルのホテルを使用しますか？',
            answer: '市内中心部の3-4つ星ホテル、伝統的な旅館、カプセルホテル（オプション）を使用します。すべての選択肢が清潔で快適で本格的です。'
          },
          {
            question: '都市間の移動はどのように行われますか？',
            answer: '主に新幹線（最高320km/h）を使用します。速くて快適で美しい景色が楽しめます。山間部の風光明媚なルートではバスを使用することもあります。'
          },
          {
            question: 'JRパスは料金に含まれていますか？',
            answer: 'JRパスはほとんどの複数日ツアー（7日以上）に含まれています。新幹線を含むすべてのJR列車をカバーします。国内旅行には非常に経済的で最大50％節約できます。'
          },
          {
            question: '日本での滞在を延長できますか？',
            answer: 'はい、どの都市でもプログラムの延長やフリーデイを手配できます。追加のホテル宿泊の予約や独立した観光のための推奨事項を提供します。'
          }
        ]
      }
    }
  };

  const t = translations[currentLang];

  // Функция для переключения открытого вопроса
  const toggleItem = (index) => {
    if (openItem === index) {
      setOpenItem(null);
    } else {
      setOpenItem(index);
    }
  };

  // Получаем все вопросы для поиска
  const getAllQuestions = () => {
    const allQuestions = [];
    Object.keys(t.questions).forEach(category => {
      t.questions[category].forEach((item, index) => {
        allQuestions.push({
          ...item,
          category,
          globalIndex: `${category}-${index}`
        });
      });
    });
    return allQuestions;
  };

  // Фильтрация вопросов
  const getFilteredQuestions = () => {
    let questions = getAllQuestions();

    // Фильтр по категории
    if (activeCategory !== 'all') {
      questions = questions.filter(q => q.category === activeCategory);
    }

    // Фильтр по поиску
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      questions = questions.filter(q =>
        q.question.toLowerCase().includes(term) ||
        q.answer.toLowerCase().includes(term)
      );
    }

    return questions;
  };

  // Краткий вариант для использования в других страницах
  if (variant === 'compact') {
    const basicQuestions = t.questions.tours.slice(0, 4);

    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{t.title}</h2>

        <div className="space-y-4">
          {basicQuestions.map((item, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                className="flex justify-between items-center w-full text-left font-medium text-gray-700 focus:outline-none"
                onClick={() => toggleItem(index)}
              >
                <span>{item.question}</span>
                {openItem === index ? (
                  <ChevronUp className="w-5 h-5 text-pink-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openItem === index && (
                <div className="mt-2 text-gray-600">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Полный вариант
  const filteredQuestions = getFilteredQuestions();

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{t.title}</h2>

      {/* Поиск и фильтры */}
      <div className="mb-6 space-y-4">
        {/* Поиск */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        {/* Категории */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === 'all'
                ? 'bg-pink-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {t.allCategories}
          </button>
          {Object.keys(t.categories).map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-pink-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {t.categories[category]}
            </button>
          ))}
        </div>
      </div>

      {/* Вопросы */}
      <div className="space-y-4">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((item, index) => (
            <div key={item.globalIndex} className="border-b border-gray-200 pb-4">
              <button
                className="flex justify-between items-center w-full text-left font-medium text-gray-700 focus:outline-none hover:text-pink-600 transition-colors"
                onClick={() => toggleItem(item.globalIndex)}
              >
                <span>{item.question}</span>
                {openItem === item.globalIndex ? (
                  <ChevronUp className="w-5 h-5 text-pink-500 flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0 ml-4" />
                )}
              </button>
              {openItem === item.globalIndex && (
                <div className="mt-3 text-gray-600">
                  <p>{item.answer}</p>
                  {activeCategory === 'all' && (
                    <span className="inline-block mt-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {t.categories[item.category]}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">Вопросы не найдены. Попробуйте изменить поисковый запрос.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FAQ;