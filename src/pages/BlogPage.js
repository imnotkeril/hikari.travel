// src/pages/BlogPage.js
import React, { useState } from 'react';


function BlogPage({ currentLang, setCurrentLang, navigateTo }) {
  const [activeCategory, setActiveCategory] = useState('all');

  // Переводы для блога
  const translations = {
    ru: {
      title: 'Блог о Японии',
      subtitle: 'Интересные статьи, советы и истории о путешествиях по Японии',
      categories: {
        all: 'Все статьи',
        culture: 'Культура',
        food: 'Еда',
        travel: 'Путешествия',
        tips: 'Советы'
      },
      readMore: 'Читать далее',
      postedOn: 'Опубликовано',
      searchPlaceholder: 'Поиск по блогу...',
      popularPosts: 'Популярные статьи',
      recentPosts: 'Недавние публикации',
      tags: 'Теги',
      subscribe: 'Подписаться на новости блога',
      subscribeText: 'Получайте уведомления о новых статьях',
      emailPlaceholder: 'Ваш email',
      subscribeButton: 'Подписаться'
    },
    en: {
      title: 'Japan Blog',
      subtitle: 'Interesting articles, tips, and stories about traveling in Japan',
      categories: {
        all: 'All Articles',
        culture: 'Culture',
        food: 'Food',
        travel: 'Travel',
        tips: 'Tips'
      },
      readMore: 'Read More',
      postedOn: 'Posted on',
      searchPlaceholder: 'Search the blog...',
      popularPosts: 'Popular Posts',
      recentPosts: 'Recent Posts',
      tags: 'Tags',
      subscribe: 'Subscribe to Blog Updates',
      subscribeText: 'Get notifications about new articles',
      emailPlaceholder: 'Your email',
      subscribeButton: 'Subscribe'
    },
    ja: {
      title: '日本ブログ',
      subtitle: '日本旅行に関する興味深い記事、ヒント、ストーリー',
      categories: {
        all: 'すべての記事',
        culture: '文化',
        food: '食べ物',
        travel: '旅行',
        tips: 'ヒント'
      },
      readMore: '続きを読む',
      postedOn: '投稿日',
      searchPlaceholder: 'ブログを検索...',
      popularPosts: '人気の投稿',
      recentPosts: '最近の投稿',
      tags: 'タグ',
      subscribe: 'ブログの更新を購読',
      subscribeText: '新しい記事の通知を受け取る',
      emailPlaceholder: 'メールアドレス',
      subscribeButton: '購読'
    }
  };

  const t = translations[currentLang];

  // Примерные данные блога
  const blogPosts = [
    {
      id: 1,
      title: {
        ru: 'Лучшее время для наблюдения за цветением сакуры в 2025 году',
        en: 'The Best Time to See Cherry Blossoms in 2025',
        ja: '2025年の桜を見るベストタイム'
      },
      excerpt: {
        ru: 'Узнайте о прогнозах цветения сакуры в разных регионах Японии на 2025 год и советы по планированию идеального путешествия.',
        en: 'Learn about cherry blossom forecasts for different regions of Japan in 2025 and tips for planning the perfect cherry blossom trip.',
        ja: '2025年の日本の各地域での桜の開花予報と、完璧な桜旅行を計画するためのヒントをご紹介します。'
      },
      image: 'https://source.unsplash.com/featured/?cherryblossom,japan',
      date: '2025-01-15',
      category: 'travel',
      author: 'Alexei Petrov'
    },
    {
      id: 2,
      title: {
        ru: 'Скрытые жемчужины Киото: 10 мест, о которых не знают туристы',
        en: 'Hidden Gems of Kyoto: 10 Places Tourists Don\'t Know About',
        ja: '京都の隠れた名所：観光客が知らない10ヶ所'
      },
      excerpt: {
        ru: 'Исследуйте малоизвестные, но удивительные места в Киото, которые обычно не включают в путеводители.',
        en: 'Explore lesser-known but amazing places in Kyoto that typically don\'t make it into guidebooks.',
        ja: 'ガイドブックには通常載っていない、京都の知られざる素晴らしい場所を探検しましょう。'
      },
      image: 'https://source.unsplash.com/featured/?kyoto,temple',
      date: '2025-01-05',
      category: 'travel',
      author: 'Yuki Tanaka'
    },
    {
      id: 3,
      title: {
        ru: 'Японская кухня: за пределами суши и рамена',
        en: 'Japanese Cuisine: Beyond Sushi and Ramen',
        ja: '日本料理：寿司とラーメンを超えて'
      },
      excerpt: {
        ru: 'Откройте для себя менее известные, но не менее вкусные блюда японской кухни, которые стоит попробовать во время вашего визита.',
        en: 'Discover lesser-known but equally delicious Japanese dishes that are worth trying during your visit.',
        ja: '訪問中に試す価値のある、あまり知られていないが同様においしい日本料理を発見してください。'
      },
      image: 'https://source.unsplash.com/featured/?japanese,food',
      date: '2024-12-20',
      category: 'food',
      author: 'Elena Ivanova'
    },
    {
      id: 4,
      title: {
        ru: 'Японский этикет: что нужно знать перед поездкой',
        en: 'Japanese Etiquette: What to Know Before You Go',
        ja: '日本のマナー：行く前に知っておくべきこと'
      },
      excerpt: {
        ru: 'Важные правила этикета, которые помогут вам избежать неловких ситуаций и уважительно относиться к местной культуре в Японии.',
        en: 'Important etiquette rules that will help you avoid awkward situations and respect the local culture in Japan.',
        ja: '日本で気まずい状況を避け、地元の文化を尊重するのに役立つ重要なマナーのルール。'
      },
      image: 'https://source.unsplash.com/featured/?japan,bow',
      date: '2024-12-10',
      category: 'culture',
      author: 'Takashi Yamamoto'
    },
    {
      id: 5,
      title: {
        ru: '7 советов для экономии в Японии без ущерба для впечатлений',
        en: '7 Tips for Saving Money in Japan Without Sacrificing Experience',
        ja: '体験を犠牲にせずに日本でお金を節約するための7つのヒント'
      },
      excerpt: {
        ru: 'Практические советы для путешественников с ограниченным бюджетом, которые помогут сократить расходы, сохраняя аутентичный опыт в Японии.',
        en: 'Practical advice for budget travelers to cut costs while maintaining an authentic experience in Japan.',
        ja: '予算に制限のある旅行者が、日本での本物の体験を維持しながらコストを削減するための実用的なアドバイス。'
      },
      image: 'https://source.unsplash.com/featured/?japan,yen',
      date: '2024-11-28',
      category: 'tips',
      author: 'Anna Smith'
    },
    {
      id: 6,
      title: {
        ru: 'Сезонные фестивали Японии: календарь на 2025 год',
        en: 'Seasonal Festivals of Japan: 2025 Calendar',
        ja: '日本の季節の祭り：2025年カレンダー'
      },
      excerpt: {
        ru: 'Полный календарь традиционных японских фестивалей на 2025 год, чтобы вы могли спланировать свое путешествие вокруг этих удивительных культурных событий.',
        en: 'A complete calendar of traditional Japanese festivals for 2025 so you can plan your trip around these amazing cultural events.',
        ja: 'これらの素晴らしい文化イベントに合わせて旅行を計画できるよう、2025年の伝統的な日本の祭りの完全なカレンダー。'
      },
      image: 'https://source.unsplash.com/featured/?japan,festival',
      date: '2024-11-15',
      category: 'culture',
      author: 'Yuki Tanaka'
    }
  ];

  // Фильтрация постов по категории
  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  // Форматирование даты
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(
      currentLang === 'ru' ? 'ru-RU' : 
      currentLang === 'ja' ? 'ja-JP' : 
      'en-US', 
      { day: 'numeric', month: 'long', year: 'numeric' }
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">{t.title}</h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">{t.subtitle}</p>
        </div>
        
        {/* Категории блога */}
        <div className="flex flex-wrap justify-center mb-8 space-x-2">
          {Object.entries(t.categories).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-4 py-2 rounded-full mb-2 ${
                activeCategory === key
                  ? 'bg-pink-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {value}
            </button>
          ))}
        </div>
        
        {/* Поиск */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button className="absolute right-3 top-3 text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Основная сетка статей блога */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title[currentLang]} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">
                    {t.categories[post.category]}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{post.title[currentLang]}</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt[currentLang]}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{t.postedOn} {formatDate(post.date)}</span>
                  <button 
                    onClick={() => navigateTo('blog-post')} 
                    className="text-pink-500 hover:text-pink-600 font-medium text-sm flex items-center"
                  >
                    {t.readMore}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Подписка на блог */}
        <div className="bg-pink-500 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">{t.subscribe}</h2>
          <p className="mb-6 max-w-2xl mx-auto">{t.subscribeText}</p>
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder={t.emailPlaceholder} 
              className="flex-grow px-4 py-3 rounded-l-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <button className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-r-md font-medium">
              {t.subscribeButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;