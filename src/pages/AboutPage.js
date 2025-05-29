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
      ourStoryText: 'Hikari Travel была основана в 2025 году командой молодых энтузиастов, желающих показать туристам прекрасную Японию. Мы разработали уникальный подход к организации путешествий, который сочетает глубокое знание японской культуры с профессиональным сервисом.',
      ourMission: 'Наша миссия',
      ourMissionText: 'Мы создаем индивидуальные туристические программы, которые открывают подлинную Японию через призму местной культуры и традиций. Наша цель - обеспечить комфортное и содержательное путешествие, устраняя языковые барьеры и предоставляя доступ к аутентичным японским впечатлениям. Мы верим, что качественный туризм должен быть образовательным, вдохновляющим и культурно обогащающим.',
      ourValues: 'Наши ценности',
      valueAuthenticity: 'Аутентичность',
      valueAuthenticityText: 'Мы предлагаем подлинные японские впечатления, выходящие за рамки стандартных туристических маршрутов.',
      valuePersonalization: 'Индивидуальный подход',
      valuePersonalizationText: 'Каждая программа разрабатывается с учетом интересов, предпочтений и потребностей наших клиентов.',
      valueQuality: 'Качество сервиса',
      valueQualityText: 'Мы поддерживаем высокие стандарты качества во всех аспектах наших услуг.',
      valueRespect: 'Культурное уважение',
      valueRespectText: 'Мы глубоко уважаем японскую культуру и способствуем ответственному туризму.',
      whyChooseUs: 'Почему выбирают нас',
      whyChooseUsText: 'В эпоху массового туризма мы предлагаем персонализированный подход к путешествиям по Японии. Наша команда состоит из квалифицированных специалистов, которые не только профессионально знают туристическую индустрию, но и имеют глубокое понимание японской культуры и менталитета.',
      reason1: 'Экспертное знание Японии',
      reason1Text: 'Наши специалисты проживают в Японии и обладают инсайдерским знанием культуры, истории и скрытых жемчужин страны.',
      reason2: 'Полная языковая поддержка',
      reason2Text: 'Мы обеспечиваем профессиональную поддержку на русском и английском языках на всех этапах путешествия.',
      reason3: 'Продуманные программы',
      reason3Text: 'Наши программы были разработаны с учетом интересов путешественников, а также отзывов наших клиентов.',
      reason4: 'Внимание к деталям',
      reason4Text: 'От планирования маршрута до подбора аутентичных мест - мы тщательно продумываем каждый аспект вашего путешествия.',
      ourPartners: 'Наши партнеры',
      readyToExplore: 'Готовы исследовать Японию?',
      startYourJourney: 'Начните свое путешествие с нами сегодня',
      contactUs: 'Связаться с нами',
      exploreTours: 'Изучить туры'
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
      ourStoryText: 'Hikari Travel was founded in 2025 by a team of young enthusiasts eager to show tourists the beautiful Japan. We have developed a unique approach to travel planning that combines deep knowledge of Japanese culture with professional service standards.',
      ourMission: 'Our Mission',
      ourMissionText: 'We create personalized travel programs that reveal authentic Japan through the lens of local culture and traditions. Our goal is to provide comfortable and meaningful journeys while eliminating language barriers and offering access to genuine Japanese experiences. We believe that quality tourism should be educational, inspiring, and culturally enriching.',
      ourValues: 'Our Values',
      valueAuthenticity: 'Authenticity',
      valueAuthenticityText: 'We offer genuine Japanese experiences that go beyond standard tourist routes.',
      valuePersonalization: 'Personalized Approach',
      valuePersonalizationText: 'Each program is developed considering our clients\' interests, preferences, and needs.',
      valueQuality: 'Service Quality',
      valueQualityText: 'We maintain high quality standards in all aspects of our services.',
      valueRespect: 'Cultural Respect',
      valueRespectText: 'We deeply respect Japanese culture and promote responsible tourism.',
      whyChooseUs: 'Why Choose Us',
      whyChooseUsText: 'In an era of mass tourism, we offer a personalized approach to traveling in Japan. Our team consists of qualified specialists who not only have professional knowledge of the tourism industry but also possess deep understanding of Japanese culture and mentality.',
      reason1: 'Expert Knowledge of Japan',
      reason1Text: 'Our specialists reside in Japan and possess insider knowledge of the culture, history, and hidden gems of the country.',
      reason2: 'Complete Language Support',
      reason2Text: 'We provide professional support in Russian and English at all stages of your journey.',
      reason3: 'Thoughtful Programs',
      reason3Text: 'Our programs have been developed taking into account travelers\' interests as well as feedback from our clients.',
      reason4: 'Attention to Detail',
      reason4Text: 'From route planning to selecting authentic venues - we carefully consider every aspect of your journey.',
      ourPartners: 'Our Partners',
      testimonials: 'What Our Clients Say',
      readyToExplore: 'Ready to Explore Japan?',
      startYourJourney: 'Start Your Journey with Us Today',
      contactUs: 'Contact Us',
      exploreTours: 'Explore Tours'
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
      ourStoryText: 'ひかりトラベルは、美しい日本を観光客に見せたいと願う若い熱心な人々のチームによって2025年に設立されました。日本文化への深い知識とプロフェッショナルなサービス基準を組み合わせた独自の旅行企画アプローチを開発しました。',
      ourMission: '私たちの使命',
      ourMissionText: '私たちは、地域の文化と伝統を通して本物の日本を明かす個別の旅行プログラムを作成します。言語の壁を取り除き、本物の日本体験へのアクセスを提供しながら、快適で意味のある旅を提供することが私たちの目標です。質の高い観光は教育的で、インスピレーションを与え、文化的に豊かなものであるべきだと信じています。',
      ourValues: '私たちの価値観',
      valueAuthenticity: '真正性',
      valueAuthenticityText: '標準的な観光ルートを超えた本物の日本体験を提供します。',
      valuePersonalization: '個別アプローチ',
      valuePersonalizationText: '各プログラムはお客様の興味、好み、ニーズを考慮して開発されます。',
      valueQuality: 'サービス品質',
      valueQualityText: '私たちのサービスのすべての側面で高い品質基準を維持します。',
      valueRespect: '文化的敬意',
      valueRespectText: '日本文化を深く尊重し、責任ある観光を促進します。',
      whyChooseUs: '私たちを選ぶ理由',
      whyChooseUsText: '大量観光の時代において、私たちは日本旅行への個別アプローチを提供します。私たちのチームは、観光業界の専門知識を持つだけでなく、日本の文化と精神性への深い理解を持つ資格のある専門家で構成されています。',
      reason1: '日本の専門知識',
      reason1Text: '私たちの専門家は日本に住んでおり、国の文化、歴史、隠れた宝石についての内部者の知識を持っています。',
      reason2: '完全な言語サポート',
      reason2Text: '旅のすべての段階でロシア語と英語での専門的なサポートを提供します。',
      reason3: '思慮深いプログラム',
      reason3Text: '私たちのプログラムは、旅行者の興味とお客様のフィードバックを考慮して開発されています。',
      reason4: '細部への配慮',
      reason4Text: 'ルート計画から本格的な場所の選択まで - あなたの旅のあらゆる側面を慎重に検討します。',
      ourPartners: '私たちのパートナー',
      testimonials: 'お客様の声',
      readyToExplore: '日本を探検する準備はできましたか？',
      startYourJourney: '今日から私たちと一緒に旅を始めましょう',
      contactUs: 'お問い合わせ',
      exploreTours: 'ツアーを探す'
    }
  };

  const t = translations[currentLang];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center flex"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/hero/about.webp)',
          height: '60vh'
        }}
      >
        <div className="container mx-auto px-4 flex flex-col justify-center h-full">
          <div className="text-center">
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
                src="/images/hero/team.webp"
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

      {/* Why Choose Us Section */}
      <section className="py-16">
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">{t.testimonials}</h2>

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