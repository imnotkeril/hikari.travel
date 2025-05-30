// src/components/WhyChooseUs.js
import React from 'react';

const WhyChooseUs = ({ currentLang, variant = 'grid' }) => {
  // Переводы взяты со страницы About
  const translations = {
    ru: {
      title: 'Почему выбирают нас',
      reason1: {
        title: 'Экспертное знание Японии',
        description: 'Наши специалисты проживают в Японии и обладают инсайдерским знанием культуры, истории и скрытых жемчужин страны.'
      },
      reason2: {
        title: 'Полная языковая поддержка',
        description: 'Мы обеспечиваем профессиональную поддержку на русском и английском языках на всех этапах путешествия.'
      },
      reason3: {
        title: 'Продуманные программы',
        description: 'Наши программы были разработаны с учетом интересов путешественников, а также отзывов наших клиентов.'
      },
      reason4: {
        title: 'Внимание к деталям',
        description: 'От планирования маршрута до подбора аутентичных мест - мы тщательно продумываем каждый аспект вашего путешествия.'
      }
    },
    en: {
      title: 'Why Choose Us',
      reason1: {
        title: 'Expert Knowledge of Japan',
        description: 'Our specialists reside in Japan and possess insider knowledge of the culture, history, and hidden gems of the country.'
      },
      reason2: {
        title: 'Complete Language Support',
        description: 'We provide professional support in Russian and English at all stages of your journey.'
      },
      reason3: {
        title: 'Thoughtful Programs',
        description: 'Our programs have been developed taking into account travelers\' interests as well as feedback from our clients.'
      },
      reason4: {
        title: 'Attention to Detail',
        description: 'From route planning to selecting authentic venues - we carefully consider every aspect of your journey.'
      }
    },
    ja: {
      title: '選ばれる理由',
      reason1: {
        title: '日本の専門知識',
        description: '私たちの専門家は日本に住んでおり、国の文化、歴史、隠れた宝石についての内部者の知識を持っています。'
      },
      reason2: {
        title: '完全な言語サポート',
        description: '旅のすべての段階でロシア語と英語での専門的なサポートを提供します。'
      },
      reason3: {
        title: '思慮深いプログラム',
        description: '私たちのプログラムは、旅行者の興味とお客様のフィードバックを考慮して開発されています。'
      },
      reason4: {
        title: '細部への配慮',
        description: 'ルート計画から本格的な場所の選択まで - あなたの旅のあらゆる側面を慎重に検討します。'
      }
    }
  };

  const t = translations[currentLang];

  if (variant === 'detailed') {
    // Вариант для страницы About с более подробным описанием
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{t.title}</h2>

          <div className="space-y-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-500 text-xl">🗺️</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{t.reason1.title}</h3>
                <p className="text-gray-600">{t.reason1.description}</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-500 text-xl">💬</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{t.reason2.title}</h3>
                <p className="text-gray-600">{t.reason2.description}</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-500 text-xl">❤️</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{t.reason3.title}</h3>
                <p className="text-gray-600">{t.reason3.description}</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-500 text-xl">✨</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{t.reason4.title}</h3>
                <p className="text-gray-600">{t.reason4.description}</p>
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
    );
  }

  // Стандартный grid вариант для главной страницы
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">{t.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-pink-500 text-2xl">🗺️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{t.reason1.title}</h3>
            <p className="text-gray-600">{t.reason1.description}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-500 text-2xl">💬</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{t.reason2.title}</h3>
            <p className="text-gray-600">{t.reason2.description}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-500 text-2xl">❤️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{t.reason3.title}</h3>
            <p className="text-gray-600">{t.reason3.description}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-500 text-2xl">👥</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{t.reason4.title}</h3>
            <p className="text-gray-600">{t.reason4.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;