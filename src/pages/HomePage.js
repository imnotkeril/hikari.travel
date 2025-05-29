// src/pages/HomePage.js
import React, { useState } from 'react';
import {
  Search,
  ChevronDown,
  ArrowRight,
  Star,
  Calendar,
  Users
} from 'lucide-react';
import TourCard from '../components/TourCard';
import { toursData } from '../data/toursData';
import ReviewsSection from '../components/ReviewsSection';

function HomePage({ currentLang, setCurrentLang, navigateTo, bookTour }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Переводы для главной страницы
  const translations = {
    ru: {
      hero: {
        title: 'Откройте настоящую Японию',
        subtitle: 'Путешествуйте с русскоговорящими и англоговорящими гидами, живущими в Японии',
        cta: 'Исследовать туры',
        bookNow: 'Забронировать тур',
        searchPlaceholder: 'Поиск туров...'
      },
      featuredTours: {
        title: 'Популярные туры',
        viewAll: 'Смотреть все туры',
        duration: 'Длительность',
        days: 'дней',
        groupSize: 'Размер группы',
        people: 'человек',
        bookNow: 'Забронировать'
      },
      whyChooseUs: {
        title: 'Почему выбирают нас',
        reason1: {
          title: 'Локальные эксперты',
          description: 'Наши гиды живут в Японии и знают все секретные места'
        },
        reason2: {
          title: 'Языковая поддержка',
          description: 'Никаких языковых барьеров с русскоговорящими и англоговорящими гидами'
        },
        reason3: {
          title: 'Аутентичный опыт',
          description: 'Погрузитесь в настоящую японскую культуру, а не в туристические клише'
        },
        reason4: {
          title: 'Персонализированный сервис',
          description: 'Мы учитываем все ваши предпочтения и интересы'
        }
      },
      destinations: {
        title: 'Популярные направления',
        viewAll: 'Смотреть все'
      },
      experiences: {
        title: 'Уникальные впечатления',
        subtitle: 'От цветения сакуры до посещения аутентичных рёканов'
      },
      testimonials: {
        title: 'Отзывы',
        viewAll: 'Читать все отзывы',
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
        showMore: 'Показать больше'
      },
      // Добавляем недостающую секцию cta
      cta: {
        title: 'Забронируйте свое путешествие сегодня',
        subtitle: 'Исследуйте аутентичную Японию с лучшими русскоговорящими гидами',
        button: 'Связаться с нами'
      }
    },
    en: {
      hero: {
        title: 'Discover the Real Japan',
        subtitle: 'Travel with Russian and English speaking guides living in Japan',
        cta: 'Explore Tours',
        bookNow: 'Book a Tour',
        searchPlaceholder: 'Search tours...'
      },
      featuredTours: {
        title: 'Featured Tours',
        viewAll: 'View All Tours',
        duration: 'Duration',
        days: 'days',
        groupSize: 'Group Size',
        people: 'people',
        bookNow: 'Book Now'
      },
      whyChooseUs: {
        title: 'Why Choose Us',
        reason1: {
          title: 'Local Experts',
          description: 'Our guides live in Japan and know all the secret spots'
        },
        reason2: {
          title: 'Language Support',
          description: 'No language barriers with Russian and English speaking guides'
        },
        reason3: {
          title: 'Authentic Experience',
          description: 'Immerse in real Japanese culture, not tourist clichés'
        },
        reason4: {
          title: 'Personalized Service',
          description: 'We take into account all your preferences and interests'
        }
      },
      destinations: {
        title: 'Popular Destinations',
        viewAll: 'View All'
      },
      experiences: {
        title: 'Unique Experiences',
        subtitle: 'From cherry blossom viewing to authentic ryokan stays'
      },
      testimonials: {
        title: 'Reviews',
        viewAll: 'View All Reviews',
        testimonial1: {
          text: 'Our tour was wonderful! The guide knew all the hidden spots and helped with the language. A true cultural immersion.',
          name: 'Anna Smith',
          location: 'Moscow, Russia'
        },
        testimonial2: {
          text: 'Exceptional experience! Our guide was knowledgeable and showed us places we would never find on our own.',
          name: 'John Doe',
          location: 'London, UK'
        },
        testimonial3: {
          text: 'Beautifully organized tour with an excellent balance of popular attractions and unique places.',
          name: 'Maria Garcia',
          location: 'Barcelona, Spain'
        },
        showMore: 'Show More'
      },
      // Добавляем недостающую секцию cta
      cta: {
        title: 'Book Your Journey Today',
        subtitle: 'Explore authentic Japan with the best Russian-speaking guides',
        button: 'Contact Us'
      }
    },
    ja: {
      hero: {
        title: '本物の日本を発見',
        subtitle: '日本在住のロシア語と英語を話すガイドと旅する',
        cta: 'ツアーを探す',
        bookNow: 'ツアーを予約',
        searchPlaceholder: 'ツアーを検索...'
      },
      featuredTours: {
        title: '人気のツアー',
        viewAll: '全てのツアーを見る',
        duration: '期間',
        days: '日間',
        groupSize: 'グループサイズ',
        people: '人',
        bookNow: '今すぐ予約'
      },
      whyChooseUs: {
        title: '選ばれる理由',
        reason1: {
          title: '現地のエキスパート',
          description: '私たちのガイドは日本に住んでおり、すべての隠れた名所を知っています'
        },
        reason2: {
          title: '言語サポート',
          description: 'ロシア語と英語を話すガイドで言語の壁はありません'
        },
        reason3: {
          title: '本物の体験',
          description: '観光客向けのクリシェではなく、本物の日本文化に浸ってください'
        },
        reason4: {
          title: 'パーソナライズされたサービス',
          description: 'あなたのすべての好みと興味を考慮します'
        },
      },
      destinations: {
        title: '人気の目的地',
        viewAll: 'すべて見る'
      },
      experiences: {
        title: 'ユニークな体験',
        subtitle: '桜の花見から本格的な旅館滞在まで'
      },
      testimonials: {
        title: 'お客様の声',
        viewAll: 'すべての感想を見る',
        testimonial1: {
          text: '私たちのツアーは素晴らしかったです！ガイドは隠れた場所をすべて知っていて、言語を助けてくれました。真の文化的没入体験でした。',
          name: 'アンナ・スミス',
          location: 'モスクワ、ロシア'
        },
        testimonial2: {
          text: '最高の体験でした！ガイドは知識が豊富で、自分たちだけでは決して見つけられない場所を案内してくれました。',
          name: 'ジョン・ドウ',
          location: 'ロンドン、イギリス'
        },
        testimonial3: {
          text: '人気のある観光スポットとユニークな場所のバランスが絶妙な、美しく構成されたツアーでした。',
          name: 'マリア・ガルシア',
          location: 'バルセロナ、スペイン'
        },
        showMore: 'もっと見る'
      },
      // Добавляем недостающую секцию cta
      cta: {
        title: '今日あなたの旅を予約する',
        subtitle: '最高のロシア語を話すガイドと本物の日本を探検',
        button: 'お問い合わせ'
      }
    },
  };

  const t = translations[currentLang];

  // ВАЖНО: проверяем наличие данных toursData
  console.log("toursData available?", Array.isArray(toursData), toursData ? toursData.length : 0);

  // Резервные туры, которые всегда будут доступны
  const fallbackTours = [
    {
      id: "fallback-1",
      title: { ru: "Классический тур по Японии", en: "Classic Japan Tour", ja: "クラシック日本ツアー" },
      image: "https://source.unsplash.com/featured/?japan,tokyo",
      price: 2500,
      duration: 7,
      groupSize: 12
    },
    {
      id: "fallback-2",
      title: { ru: "Киото и Осака", en: "Kyoto & Osaka", ja: "京都と大阪" },
      image: "https://source.unsplash.com/featured/?kyoto,japan",
      price: 2200,
      duration: 6,
      groupSize: 10
    },
    {
      id: "fallback-3",
      title: { ru: "Тур на гору Фудзи", en: "Mt. Fuji Experience", ja: "富士山体験" },
      image: "https://source.unsplash.com/featured/?fujisan,japan",
      price: 1800,
      duration: 4,
      groupSize: 8
    }
  ];

  // Получаем популярные туры из нашего нового файла данных, с проверкой на существование
  let featuredTours = [];
  try {
    if (Array.isArray(toursData) && toursData.length > 0) {
      const popularTours = toursData.filter(tour =>
        tour &&
        (tour.type === 'popular' || (tour.tags && tour.tags.includes('популярное')))
      );

      if (popularTours.length > 0) {
        featuredTours = popularTours.slice(0, 3);
        console.log("Popular tours found:", featuredTours.length);
      } else {
        console.log("No popular tours found, using fallback");
        featuredTours = fallbackTours;
      }
    } else {
      console.log("toursData is not available or empty, using fallback");
      featuredTours = fallbackTours;
    }
  } catch (error) {
    console.error("Error processing tours data:", error);
    featuredTours = fallbackTours;
  }

  // Данные о направлениях
  const destinations = [
    { name: 'Tokyo', image: '/images/destinations/tokyo.webp'},
    { name: 'Kyoto', image: '/images/destinations/kyoto.webp'},
    { name: 'Osaka', image: '/images/destinations/osaka.webp'},
    { name: 'Fuji', image: '/images/destinations/fuji.webp'}
  ];

  // Данные об опыте
  const experiences = [
    { name: 'Cherry Blossoms', image: '/images/experiences/cherry-blossom.webp' },
    { name: 'Japanese Cuisine', image: '/images/experiences/japanese-cuisine.webp' },
    { name: 'Temples & Shrines', image: '/images/experiences/temples-shrines.webp' },
    { name: 'Hot Springs', image: '/images/experiences/hot-springs.webp' }
  ];

  // Данные об отзывах
  const testimonials = [
    {
      id: 1,
      name: t.testimonials.testimonial1.name,
      image: 'https://source.unsplash.com/featured/?woman,portrait',
      comment: t.testimonials.testimonial1.text,
      location: t.testimonials.testimonial1.location,
      rating: 5
    },
    {
      id: 2,
      name: t.testimonials.testimonial2.name,
      image: 'https://source.unsplash.com/featured/?man,portrait',
      comment: t.testimonials.testimonial2.text,
      location: t.testimonials.testimonial2.location,
      rating: 5
    },
    {
      id: 3,
      name: t.testimonials.testimonial3.name,
      image: 'https://source.unsplash.com/featured/?girl,portrait',
      comment: t.testimonials.testimonial3.text,
      location: t.testimonials.testimonial3.location,
      rating: 4
    },
  ];

  // Переключение между отзывами
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/hero/home.webp")',
          height: '60vh' // Увеличьте высоту для более эффектного вида
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Затемнение для лучшей читаемости текста */}
        <div className="relative container mx-auto px-4 text-center text-white flex flex-col justify-center h-full">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t.hero.title}</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{t.hero.subtitle}</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => navigateTo('booking')}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full"
            >
              {t.hero.bookNow}
            </button>
            <button
              onClick={() => navigateTo('tours')}
              className="bg-transparent hover:bg-white hover:text-gray-800 text-white font-bold py-3 px-8 rounded-full border border-white"
            >
              {t.hero.cta}
            </button>
          </div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">{t.featuredTours.title}</h2>
            <a
              onClick={() => navigateTo('tours')}
              className="text-pink-500 hover:text-pink-600 flex items-center cursor-pointer"
            >
              {t.featuredTours.viewAll}
              <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Показываем конкретные 4 тура по ID */}
            {['classic-tokyo-tour', 'classic-kyoto-tour', 'classic-osaka-tour', 'classic-kansai-tour']
              .map(id => (toursData || []).find(tour => tour.id === id))
              .filter(Boolean) // Убираем undefined, если вдруг тур не найден
              .map((tour) => (
                <TourCard
                  key={tour.id}
                  tour={tour}
                  bookTour={bookTour}
                  viewTourDetails={() => {
                    bookTour(tour);
                    navigateTo('tour');
                  }}
                  translations={translations}
                  currentLang={currentLang}
                />
              ))}
          </div>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">{t.whyChooseUs.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-pink-500 text-2xl">🗺️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t.whyChooseUs.reason1.title}</h3>
              <p className="text-gray-600">{t.whyChooseUs.reason1.description}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-500 text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t.whyChooseUs.reason2.title}</h3>
              <p className="text-gray-600">{t.whyChooseUs.reason2.description}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-500 text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t.whyChooseUs.reason3.title}</h3>
              <p className="text-gray-600">{t.whyChooseUs.reason3.description}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-500 text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t.whyChooseUs.reason4.title}</h3>
              <p className="text-gray-600">{t.whyChooseUs.reason4.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">{t.destinations.title}</h2>
            <a href="#" onClick={() => navigateTo('tours')} className="text-pink-500 hover:text-pink-600 flex items-center">
              {t.destinations.viewAll}
              <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-md cursor-pointer" onClick={() => navigateTo('tours')}>
                <div
                  className="w-full h-full bg-cover bg-center transform transition duration-300 hover:scale-110"
                  style={{ backgroundImage: `url(${destination.image})` }}
                ></div>
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-white text-xl font-bold">{destination.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-3">{t.experiences.title}</h2>
          <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">{t.experiences.subtitle}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {experiences.map((experience, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-md cursor-pointer" onClick={() => navigateTo('tours')}>
                <img
                  src={experience.image}
                  alt={experience.name}
                  className="w-full h-full object-cover transform transition duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-white text-lg font-medium">{experience.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ReviewsSection
            currentLang={currentLang}
            featured={true}
            variant="slider"
            showControls={true}
            className="max-w-3xl mx-auto"
            navigateTo={navigateTo}
          />
        </div>
      </section>

      {/* Call to Action */}
      {/* Добавляем проверку на наличие t.cta перед рендерингом секции */}
      {t && t.cta && (
        <section className="py-16 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://source.unsplash.com/featured/?sakura,japan)' }}>
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">{t.cta.title}</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">{t.cta.subtitle}</p>
            <button
              onClick={() => navigateTo('contact')}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full"
            >
              {t.cta.button}
            </button>
          </div>
        </section>
      )}
    </div>
  );
}

export default HomePage;