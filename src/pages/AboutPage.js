// src/pages/AboutPage.js
import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import ReviewsSection from '../components/ReviewsSection';

function AboutPage({ currentLang, setCurrentLang, navigateTo }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMoreTestimonials, setShowMoreTestimonials] = useState(false);


  // Переводы
  const translations = {
    ru: {
      menu: {
        home: 'Главная',
        tours: 'Туры',
        about: 'О нас',
        blog: 'Блог',
        contact: 'Контакты'
      },
      aboutUs: 'О нас',
      ourStory: 'Наша история',
      ourStoryText: 'Компания Hikari Travel была основана в 2020 году группой энтузиастов, влюбленных в Японию. Основатели компании — русские и иностранные экспаты, живущие в Японии уже много лет и свободно говорящие на японском, русском и английском языках. Объединенные общей страстью к японской культуре и желанием показать настоящую Японию иностранным гостям, мы создали компанию, которая специализируется на уникальных, аутентичных турах, раскрывающих глубину и многогранность этой удивительной страны.',
      ourMission: 'Наша миссия',
      ourMissionText: 'Мы стремимся создавать незабываемые, трансформирующие путешествия, которые не только показывают Японию, но и позволяют по-настоящему прочувствовать её культуру, традиции и дух. Мы верим, что языковой барьер не должен быть препятствием для глубокого культурного погружения, поэтому обеспечиваем полную языковую поддержку на русском и английском языках, одновременно открывая доступ к аутентичному японскому опыту.',
      ourValues: 'Наши ценности',
      valueAuthenticity: 'Аутентичность',
      valueAuthenticityText: 'Мы стремимся показать настоящую Японию, выходя за рамки туристических клише и популярных маршрутов.',
      valuePersonalization: 'Персонализация',
      valuePersonalizationText: 'Каждый тур создается с учетом интересов, предпочтений и потребностей наших клиентов.',
      valueQuality: 'Качество',
      valueQualityText: 'Мы не экономим на качестве и комфорте, обеспечивая высокий уровень сервиса во всех аспектах путешествия.',
      valueRespect: 'Уважение',
      valueRespectText: 'Мы глубоко уважаем японскую культуру и традиции, и учим наших клиентов делать то же самое.',
      meetOurTeam: 'Познакомьтесь с нашей командой',
      founder: 'Основатель',
      tourManager: 'Менеджер по турам',
      tourGuide: 'Гид',
      marketingManager: 'Менеджер по маркетингу',
      whyChooseUs: 'Почему выбирают нас',
      whyChooseUsText: 'В мире, где массовый туризм стал нормой, мы предлагаем нечто особенное — путешествия, которые создаются с душой, вниманием к деталям и глубоким пониманием Японии. Наша команда состоит из людей, которые не просто работают в туризме, но искренне любят Японию и хотят поделиться этой любовью с вами.',
      reason1: 'Глубокое знание Японии',
      reason1Text: 'Наши гиды и менеджеры живут в Японии и знают её изнутри, включая скрытые жемчужины, о которых не пишут в путеводителях.',
      reason2: 'Языковая поддержка',
      reason2Text: 'Мы полностью устраняем языковой барьер, обеспечивая поддержку на русском и английском языках на всех этапах путешествия.',
      reason3: 'Персонализированный подход',
      reason3Text: 'Мы не верим в "туры для всех". Каждое путешествие создается с учетом ваших интересов и предпочтений.',
      reason4: 'Внимание к деталям',
      reason4Text: 'От выбора уникальных мест до подбора аутентичных ресторанов и комфортного транспорта — мы продумываем каждую деталь.',
      ourPartners: 'Наши партнеры',
      testimonials: 'Что говорят наши клиенты',
      readyToExplore: 'Готовы исследовать Японию?',
      startYourJourney: 'Начните свое путешествие с нами сегодня',
      contactUs: 'Связаться с нами',
      exploreTours: 'Изучить туры',
      footer: {
        about: 'О Hikari Travel',
        aboutText: 'Мы специализируемся на организации уникальных туров по Японии с русскоговорящими и англоговорящими гидами.',
        quickLinks: 'Быстрые ссылки',
        contact: 'Контакты',
        subscribe: 'Подпишитесь на новости',
        subscribeText: 'Получайте эксклюзивные предложения и новости о Японии',
        emailPlaceholder: 'Ваш email',
        subscribeButton: 'Подписаться',
        copyright: 'Все права защищены',
        terms: 'Условия использования',
        privacy: 'Политика конфиденциальности'
      },
      testimonials: {
        title: 'Отзывы',
        viewAll: 'Смотреть все отзывы',
        showMore: 'Показать больше',
        hideMore: 'Скрыть',
        testimonial1: {
          text: 'Наш тур был замечательным! Гид знал все скрытые места и помогал с языком. Настоящее погружение в культуру.',
          name: 'Анна Смит',
          location: 'Москва, Россия'
        },
        testimonial2: {
          text: 'Потрясающий опыт! Наш гид был очень знающим и показал нам места, которые мы никогда бы не нашли сами.',
          name: 'Джон Доу',
          location: 'Лондон, Великобритания'
        },
        testimonial3: {
          text: 'Прекрасно организованный тур с отличным балансом популярных достопримечательностей и уникальных мест.',
          name: 'Мария Гарсия',
          location: 'Барселона, Испания'
        },
        testimonial4: {
          text: 'Все было организовано на высшем уровне. Особенно понравились местные рестораны, о которых знают только жители.',
          name: 'Александр Иванов',
          location: 'Санкт-Петербург, Россия'
        },
        testimonial5: {
          text: 'Второй раз путешествую с Hikari Travel, и снова все идеально! Теперь рекомендую всем друзьям.',
          name: 'Елена Петрова',
          location: 'Киев, Украина'
        },
        testimonial6: {
          text: 'Поездка в Японию была мечтой всей жизни, и благодаря Hikari Travel она превзошла все ожидания!',
          name: 'Томас Браун',
          location: 'Берлин, Германия'
        }
      },
    },
    en: {
      menu: {
        home: 'Home',
        tours: 'Tours',
        about: 'About',
        blog: 'Blog',
        contact: 'Contact'
      },
      aboutUs: 'About Us',
      ourStory: 'Our Story',
      ourStoryText: "Hikari Travel was founded in 2020 by a group of enthusiasts who fell in love with Japan. The company's founders are Russian and foreign expats who have been living in Japan for many years and speak Japanese, Russian, and English fluently. United by a shared passion for Japanese culture and a desire to show the real Japan to foreign guests, we created a company that specializes in unique, authentic tours that reveal the depth and many facets of this amazing country.",
      ourMission: 'Our Mission',
      ourMissionText: 'We strive to create unforgettable, transformative journeys that not only show Japan but also allow you to truly feel its culture, traditions, and spirit. We believe that the language barrier should not be an obstacle to deep cultural immersion, so we provide full language support in Russian and English, while opening access to authentic Japanese experiences.',
      ourValues: 'Our Values',
      valueAuthenticity: 'Authenticity',
      valueAuthenticityText: 'We strive to show the real Japan, going beyond tourist clichés and popular routes.',
      valuePersonalization: 'Personalization',
      valuePersonalizationText: 'Each tour is created with the interests, preferences, and needs of our clients in mind.',
      valueQuality: 'Quality',
      valueQualityText: 'We do not compromise on quality and comfort, providing a high level of service in all aspects of the journey.',
      valueRespect: 'Respect',
      valueRespectText: 'We deeply respect Japanese culture and traditions, and teach our clients to do the same.',
      meetOurTeam: 'Meet Our Team',
      founder: 'Founder',
      tourManager: 'Tour Manager',
      tourGuide: 'Tour Guide',
      marketingManager: 'Marketing Manager',
      whyChooseUs: 'Why Choose Us',
      whyChooseUsText: 'In a world where mass tourism has become the norm, we offer something special — journeys that are created with soul, attention to detail, and a deep understanding of Japan. Our team consists of people who not only work in tourism but sincerely love Japan and want to share this love with you.',
      reason1: 'Deep Knowledge of Japan',
      reason1Text: 'Our guides and managers live in Japan and know it from the inside, including hidden gems that are not written about in guidebooks.',
      reason2: 'Language Support',
      reason2Text: 'We completely eliminate the language barrier, providing support in Russian and English at all stages of the journey.',
      reason3: 'Personalized Approach',
      reason3Text: 'We don\'t believe in "tours for everyone." Each journey is created with your interests and preferences in mind.',
      reason4: 'Attention to Detail',
      reason4Text: 'From selecting unique places to choosing authentic restaurants and comfortable transportation — we think through every detail.',
      ourPartners: 'Our Partners',
      testimonials: 'What Our Clients Say',
      readyToExplore: 'Ready to Explore Japan?',
      startYourJourney: 'Start Your Journey with Us Today',
      contactUs: 'Contact Us',
      exploreTours: 'Explore Tours',
      footer: {
        about: 'About Hikari Travel',
        aboutText: 'We specialize in organizing unique tours across Japan with Russian and English speaking guides.',
        quickLinks: 'Quick Links',
        contact: 'Contact',
        subscribe: 'Subscribe to Newsletter',
        subscribeText: 'Get exclusive offers and news about Japan',
        emailPlaceholder: 'Your email',
        subscribeButton: 'Subscribe',
        copyright: 'All Rights Reserved',
        terms: 'Terms of Service',
        privacy: 'Privacy Policy'
      },
      testimonials: {
        title: 'Reviews',
        viewAll: 'View All Reviews',
        showMore: 'Show More',
        hideMore: 'Hide',
        testimonial1: {
          text: 'Our tour with Hikari Travel was absolutely amazing! The guides were knowledgeable and friendly, and they showed us places we would never have found on our own.',
          name: 'Anna Smith',
          location: 'Moscow, Russia'
        },
        testimonial2: {
          text: "I've been on many tours around the world, but my experience with Hikari Travel in Japan was truly exceptional. The level of personalization and attention to detail was outstanding.",
          name: 'John Doe',
          location: 'London, UK'
        },
        testimonial3: {
          text: "As someone who doesn't speak Japanese, I was concerned about traveling in Japan. Hikari Travel completely eliminated the language barrier while still providing an authentic experience.",
          name: 'Maria Garcia',
          location: 'Barcelona, Spain'
        },
        testimonial4: {
          text: "Everything was organized at the highest level. I especially liked the local restaurants that only residents know about.",
          name: 'Alexander Ivanov',
          location: 'St. Petersburg, Russia'
        },
        testimonial5: {
          text: "Second time traveling with Hikari Travel, and again everything is perfect! Now I recommend to all friends.",
          name: 'Elena Petrova',
          location: 'Kiev, Ukraine'
        },
        testimonial6: {
          text: "Traveling to Japan was a lifelong dream, and thanks to Hikari Travel, it exceeded all expectations!",
          name: 'Thomas Brown',
          location: 'Berlin, Germany'
        }
      },
    },
    ja: {
      menu: {
        home: 'ホーム',
        tours: 'ツアー',
        about: '会社概要',
        blog: 'ブログ',
        contact: 'お問い合わせ'
      },
      aboutUs: '会社概要',
      ourStory: '私たちの物語',
      ourStoryText: 'ひかりトラベルは、日本に恋した熱心な人々のグループによって2020年に設立されました。 会社の創設者は、長年日本に住み、日本語、ロシア語、英語を流暢に話すロシア人や外国人の駐在員です。 日本文化への共通の情熱と、外国人ゲストに本物の日本を見せたいという願いに結ばれ、私たちはこの驚くべき国の深さと多面性を明らかにするユニークで本格的なツアーを専門とする会社を創設しました。',
      ourMission: '私たちの使命',
      ourMissionText: '私たちは、日本を紹介するだけでなく、その文化、伝統、精神を真に感じることができる忘れられない変革的な旅を創造するよう努めています。 言語の壁が深い文化的な没入の障害にならないと信じているため、ロシア語と英語の完全な言語サポートを提供しながら、本格的な日本の体験へのアクセスを開放しています。',
      ourValues: '私たちの価値観',
      valueAuthenticity: '真正性',
      valueAuthenticityText: '私たちは、観光客のクリシェと人気のあるルートを超えて、本物の日本を見せるよう努めています。',
      valuePersonalization: 'パーソナライゼーション',
      valuePersonalizationText: '各ツアーは、クライアントの興味、好み、ニーズを考慮して作成されています。',
      valueQuality: '品質',
      valueQualityText: '私たちは品質と快適さに妥協せず、旅のあらゆる側面で高いレベルのサービスを提供します。',
      valueRespect: '尊重',
      valueRespectText: '私たちは日本の文化と伝統を深く尊重し、クライアントにも同じことを教えています。',
      meetOurTeam: '私たちのチームに会う',
      founder: '創設者',
      tourManager: 'ツアーマネージャー',
      tourGuide: 'ツアーガイド',
      marketingManager: 'マーケティングマネージャー',
      whyChooseUs: '私たちを選ぶ理由',
      whyChooseUsText: '大量観光が一般的になった世界で、私たちは特別なものを提供しています — 魂、細部へのこだわり、そして日本への深い理解を持って作られた旅。 私たちのチームは、単に観光業で働くだけでなく、心から日本を愛し、その愛をあなたと共有したいと願う人々で構成されています。',
      reason1: '日本についての深い知識',
      reason1Text: '私たちのガイドとマネージャーは日本に住んでおり、ガイドブックには書かれていない隠れた宝石を含め、内側から日本を知っています。',
      reason2: '言語サポート',
      reason2Text: '私たちは言語の壁を完全に取り除き、旅のすべての段階でロシア語と英語でのサポートを提供します。',
      reason3: 'パーソナライズドアプローチ',
      reason3Text: '私たちは「万人向けのツアー」を信じていません。 各旅行はあなたの興味と好みを考慮して作成されています。',
      reason4: '細部へのこだわり',
      reason4Text: 'ユニークな場所の選択から本格的なレストランと快適な交通機関の選択まで - 私たちはすべての詳細を考え抜いています。',
      ourPartners: '私たちのパートナー',
      testimonials: 'クライアントの声',
      readyToExplore: '日本を探検する準備はできましたか？',
      startYourJourney: '今日から私たちと一緒に旅を始めましょう',
      contactUs: 'お問い合わせ',
      exploreTours: 'ツアーを探す',
      footer: {
        about: 'ひかりトラベルについて',
        aboutText: '私たちはロシア語と英語を話すガイドによる日本全国のユニークなツアーを専門としています。',
        quickLinks: 'クイックリンク',
        contact: 'お問い合わせ',
        subscribe: 'ニュースレターを購読',
        subscribeText: '日本に関する限定オファーとニュースを入手',
        emailPlaceholder: 'メールアドレス',
        subscribeButton: '購読',
        copyright: '全著作権所有',
        terms: '利用規約',
        privacy: 'プライバシーポリシー'
      },
      testimonials: {
        title: 'お客様の声',
        viewAll: 'すべての感想を見る',
        showMore: 'もっと見る',
        hideMore: '隠す',
        testimonial1: {
          text: '私たちのツアーは素晴らしかったです！ガイドは知識が豊富で友好的で、自分たちだけでは決して見つけられなかった場所を案内してくれました。',
          name: 'アンナ・スミス',
          location: 'モスクワ、ロシア'
        },
        testimonial2: {
          text: '世界中のツアーに参加してきましたが、日本でのHikari Travelでの経験は本当に特別でした。パーソナライズのレベルと細部へのこだわりは抜群でした。',
          name: 'ジョン・ドウ',
          location: 'ロンドン、イギリス'
        },
        testimonial3: {
          text: '日本語を話せない私としては、日本旅行に不安がありました。Hikari Travelは、本物の体験を提供しながら、言語の壁を完全に取り除いてくれました。',
          name: 'マリア・ガルシア',
          location: 'バルセロナ、スペイン'
        },
        testimonial4: {
          text: 'すべてが最高レベルで組織されていました。特に地元の人だけが知っているローカルレストランが気に入りました。',
          name: 'アレクサンダー・イワノフ',
          location: 'サンクトペテルブルク、ロシア'
        },
        testimonial5: {
          text: 'Hikari Travelで2回目の旅行、そしてまた完璧です！今は全ての友達に勧めています。',
          name: 'エレナ・ペトロワ',
          location: 'キエフ、ウクライナ'
        },
        testimonial6: {
          text: '日本への旅行は生涯の夢でしたが、Hikari Travelのおかげで、それは期待をはるかに超えました！',
          name: 'トーマス・ブラウン',
          location: 'ベルリン、ドイツ'
        }
      },
    }
  };

  const t = translations[currentLang];
  
  // Данные о команде
  const teamMembers = [
    {
      name: 'Alexei Petrov',
      role: t.founder,
      image: 'https://source.unsplash.com/featured/?man,professional,1',
      bio: 'Alexei has been living in Japan for over 15 years and speaks fluent Japanese, Russian, and English. He founded Hikari Travel with a vision to share the real Japan with visitors from around the world.'
    },
    {
      name: 'Yuki Tanaka',
      role: t.tourManager,
      image: 'https://source.unsplash.com/featured/?woman,professional,japanese',
      bio: 'With extensive experience in the Japanese tourism industry, Yuki oversees all our tour operations and ensures every journey exceeds expectations.'
    },
    {
      name: 'Elena Ivanova',
      role: t.tourGuide,
      image: 'https://source.unsplash.com/featured/?woman,professional,2',
      bio: 'A history graduate with a passion for Japanese culture, Elena has been guiding tours throughout Japan for 7 years. She specializes in cultural and historical tours.'
    },
    {
      name: 'Takashi Yamamoto',
      role: t.marketingManager,
      image: 'https://source.unsplash.com/featured/?man,professional,japanese',
      bio: 'With a background in digital marketing and tourism, Takashi leads our marketing efforts and helps us share our love for Japan with the world.'
    }
  ];
  
  // Данные о партнерах
  const partners = [
    { name: 'Japan Railways', logo: 'https://source.unsplash.com/featured/?railway,logo' },
    { name: 'Tokyo Metropolitan Hotels', logo: 'https://source.unsplash.com/featured/?hotel,logo' },
    { name: 'Kyoto Cultural Foundation', logo: 'https://source.unsplash.com/featured/?kyoto,logo' },
    { name: 'Osaka Tourism Board', logo: 'https://source.unsplash.com/featured/?osaka,logo' },
    { name: 'Japanese Culinary Institute', logo: 'https://source.unsplash.com/featured/?japanese,food,logo' }
  ];
  
  // Данные об отзывах
  const testimonials = [
    {
      name: 'Anna Smith',
      image: 'https://source.unsplash.com/featured/?woman,portrait',
      text: 'Our tour with Hikari Travel was absolutely amazing! The guides were knowledgeable and friendly, and they showed us places we would never have found on our own. The language support made everything so much easier and more enjoyable.',
      location: 'Moscow, Russia'
    },
    {
      name: 'John Davis',
      image: 'https://source.unsplash.com/featured/?man,portrait',
      text: 'I\'ve been on many tours around the world, but my experience with Hikari Travel in Japan was truly exceptional. The level of personalization and attention to detail was outstanding.',
      location: 'London, UK'
    },
    {
      name: 'Maria Rodriguez',
      image: 'https://source.unsplash.com/featured/?woman,portrait,2',
      text: 'As someone who doesn\'t speak Japanese, I was concerned about traveling in Japan. Hikari Travel completely eliminated the language barrier while still providing an authentic experience. Highly recommended!',
      location: 'Barcelona, Spain'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center flex" // Добавляем flex
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/hero/about.png)',
          height: '60vh'
        }}
      >
        <div className="container mx-auto px-4 flex flex-col justify-center h-full"> {/* Ключевые изменения здесь */}
          <div className="text-center"> {/* Оборачиваем в дополнительный div для центрирования */}
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">{t.aboutUs}</h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">{t.aboutUsSubtitle}</p>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => navigateTo('contact')}
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full"
              >
                {t.contactUs}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">{t.ourStory}</h2>
              <p className="text-gray-600 mb-6">{t.ourStoryText}</p>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t.ourMission}</h3>
              <p className="text-gray-600">{t.ourMissionText}</p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://source.unsplash.com/featured/?japan,people" 
                alt="Team in Japan" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">{t.ourValues}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-pink-500 text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t.valueAuthenticity}</h3>
              <p className="text-gray-600">{t.valueAuthenticityText}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-500 text-2xl">👤</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t.valuePersonalization}</h3>
              <p className="text-gray-600">{t.valuePersonalizationText}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-500 text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t.valueQuality}</h3>
              <p className="text-gray-600">{t.valueQualityText}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-500 text-2xl">🙏</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t.valueRespect}</h3>
              <p className="text-gray-600">{t.valueRespectText}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Meet Our Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">{t.meetOurTeam}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-pink-500 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">{t.whyChooseUs}</h2>
              <p className="text-gray-600 mb-8">{t.whyChooseUsText}</p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                      <span className="text-pink-500 text-xl">🗺️</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{t.reason1}</h3>
                    <p className="text-gray-600">{t.reason1Text}</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-500 text-xl">💬</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{t.reason2}</h3>
                    <p className="text-gray-600">{t.reason2Text}</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-500 text-xl">👤</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{t.reason3}</h3>
                    <p className="text-gray-600">{t.reason3Text}</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-500 text-xl">✨</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{t.reason4}</h3>
                    <p className="text-gray-600">{t.reason4Text}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://source.unsplash.com/featured/?japan,travel,guide" 
                alt="Tour guide in Japan" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Partners Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">{t.ourPartners}</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-32">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-full max-w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">{t.testimonials.title}</h2>

          <ReviewsSection
            currentLang={currentLang}
            variant="grid"
            showControls={true}
            limit={6}
            showMoreButton={true}
            className="mb-8"
          />
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-16 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://source.unsplash.com/featured/?japan,sakura)' }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{t.readyToExplore}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{t.startYourJourney}</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => navigateTo('contact')}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full"
            >
              {t.contactUs}
            </button>
            <button 
              onClick={() => navigateTo('tours')}
              className="bg-transparent hover:bg-white hover:text-gray-800 text-white font-bold py-3 px-8 rounded-full border border-white"
            >
              {t.exploreTours}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;