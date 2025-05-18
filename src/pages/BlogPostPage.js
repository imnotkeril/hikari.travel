// src/pages/BlogPostPage.js
import React from 'react';
import { ArrowLeft, Calendar, User, Tag, Share, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

function BlogPostPage() {
  const { currentLang, navigateTo } = useAppContext();

  // Переводы для страницы статьи
  const translations = {
    ru: {
      backToBlog: 'Назад к блогу',
      publishedOn: 'Опубликовано',
      by: 'Автор',
      tags: 'Теги',
      share: 'Поделиться',
      relatedPosts: 'Похожие статьи',
      comments: 'Комментарии',
      leaveComment: 'Оставить комментарий',
      yourName: 'Ваше имя',
      yourEmail: 'Ваш email',
      yourComment: 'Ваш комментарий',
      submit: 'Отправить'
    },
    en: {
      backToBlog: 'Back to Blog',
      publishedOn: 'Published on',
      by: 'By',
      tags: 'Tags',
      share: 'Share',
      relatedPosts: 'Related Posts',
      comments: 'Comments',
      leaveComment: 'Leave a Comment',
      yourName: 'Your Name',
      yourEmail: 'Your Email',
      yourComment: 'Your Comment',
      submit: 'Submit'
    },
    ja: {
      backToBlog: 'ブログに戻る',
      publishedOn: '公開日',
      by: '著者',
      tags: 'タグ',
      share: 'シェア',
      relatedPosts: '関連記事',
      comments: 'コメント',
      leaveComment: 'コメントを残す',
      yourName: 'お名前',
      yourEmail: 'メールアドレス',
      yourComment: 'コメント',
      submit: '送信'
    }
  };

  const t = translations[currentLang];
  
  // Пример данных статьи
  const post = {
    title: {
      ru: 'Лучшее время для наблюдения за цветением сакуры в 2025 году',
      en: 'The Best Time to See Cherry Blossoms in 2025',
      ja: '2025年の桜を見るベストタイム'
    },
    content: {
      ru: `
        <p>Цветение сакуры, или "ханами", является одним из самых ожидаемых природных явлений в Японии. Эти нежные розовые цветы не только символизируют красоту и эфемерность жизни, но и привлекают миллионы посетителей со всего мира каждый год.</p>
        
        <h2>Прогноз цветения сакуры на 2025 год</h2>
        
        <p>Согласно предварительным прогнозам, в 2025 году цветение сакуры в Японии начнется следующим образом:</p>
        
        <ul>
          <li><strong>Токио:</strong> Конец марта - начало апреля</li>
          <li><strong>Киото:</strong> Начало апреля</li>
          <li><strong>Осака:</strong> Начало апреля</li>
          <li><strong>Хиросима:</strong> Середина апреля</li>
          <li><strong>Саппоро:</strong> Конец апреля - начало мая</li>
        </ul>
        
        <p>Имейте в виду, что эти даты являются предварительными и могут меняться в зависимости от погодных условий. Японское метеорологическое агентство обычно публикует более точные прогнозы в январе-феврале.</p>
        
        <h2>Лучшие места для наблюдения за сакурой</h2>
        
        <h3>Токио</h3>
        <p>В столице Японии есть множество прекрасных мест для наблюдения за сакурой:</p>
        <ul>
          <li><strong>Парк Уэно:</strong> Самое популярное место с более чем 1000 деревьев сакуры</li>
          <li><strong>Сады Синдзюку Гёэн:</strong> Предлагает разнообразие видов сакуры</li>
          <li><strong>Река Мегуро:</strong> Романтическая прогулка вдоль реки под сакурой</li>
        </ul>
        
        <h3>Киото</h3>
        <p>Исторический Киото предлагает некоторые из самых живописных мест для ханами:</p>
        <ul>
          <li><strong>Философская тропа:</strong> Живописная дорожка вдоль канала, обрамленная сакурой</li>
          <li><strong>Храм Киёмидзу-дэра:</strong> Сакура с видом на исторический храм</li>
          <li><strong>Парк Маруяма:</strong> Известен своим большим плакучим деревом сакуры</li>
        </ul>
        
        <h2>Советы для планирования поездки</h2>
        
        <ol>
          <li><strong>Бронируйте заранее:</strong> Сезон сакуры - пиковое время для туризма в Японии. Отели, транспорт и туры быстро бронируются.</li>
          <li><strong>Будьте гибкими:</strong> Если возможно, планируйте поездку с возможностью изменения дат, так как цветение может начаться раньше или позже прогноза.</li>
          <li><strong>Рассмотрите менее известные места:</strong> Популярные места могут быть очень многолюдными. Исследуйте менее известные места для более спокойного опыта.</li>
          <li><strong>Попробуйте сезонные блюда и напитки:</strong> Многие кафе и рестораны предлагают специальные блюда и напитки с сакурой во время сезона.</li>
        </ol>
        
        <p>Наблюдение за цветением сакуры - это не просто созерцание природной красоты, но и погружение в важный аспект японской культуры. Это время для размышлений, празднования и наслаждения мимолетной красотой жизни.</p>
      `,
      en: `
        <p>Cherry blossom viewing, or "hanami," is one of the most anticipated natural events in Japan. These delicate pink flowers not only symbolize beauty and the ephemeral nature of life but also attract millions of visitors from around the world each year.</p>
        
        <h2>Cherry Blossom Forecast for 2025</h2>
        
        <p>According to preliminary forecasts, cherry blossoms in Japan in 2025 will begin flowering as follows:</p>
        
        <ul>
          <li><strong>Tokyo:</strong> Late March - early April</li>
          <li><strong>Kyoto:</strong> Early April</li>
          <li><strong>Osaka:</strong> Early April</li>
          <li><strong>Hiroshima:</strong> Mid-April</li>
          <li><strong>Sapporo:</strong> Late April - early May</li>
        </ul>
        
        <p>Keep in mind that these dates are preliminary and may change depending on weather conditions. The Japan Meteorological Agency typically releases more accurate forecasts in January-February.</p>
        
        <h2>Best Places to See Cherry Blossoms</h2>
        
        <h3>Tokyo</h3>
        <p>Japan's capital has many excellent spots for cherry blossom viewing:</p>
        <ul>
          <li><strong>Ueno Park:</strong> The most popular spot with over 1,000 cherry trees</li>
          <li><strong>Shinjuku Gyoen Gardens:</strong> Offers a variety of cherry blossom species</li>
          <li><strong>Meguro River:</strong> A romantic stroll along the river under cherry trees</li>
        </ul>
        
        <h3>Kyoto</h3>
        <p>Historic Kyoto offers some of the most picturesque spots for hanami:</p>
        <ul>
          <li><strong>Philosopher's Path:</strong> A scenic walkway along a canal lined with cherry trees</li>
          <li><strong>Kiyomizu-dera Temple:</strong> Cherry blossoms with a view of the historic temple</li>
          <li><strong>Maruyama Park:</strong> Known for its large weeping cherry tree</li>
        </ul>
        
        <h2>Tips for Planning Your Trip</h2>
        
        <ol>
          <li><strong>Book in advance:</strong> Cherry blossom season is peak tourism time in Japan. Hotels, transportation, and tours get booked quickly.</li>
          <li><strong>Be flexible:</strong> If possible, plan your trip with changeable dates, as blooming may start earlier or later than forecast.</li>
          <li><strong>Consider less-known spots:</strong> Popular places can be very crowded. Explore lesser-known spots for a more peaceful experience.</li>
          <li><strong>Try seasonal foods and drinks:</strong> Many cafes and restaurants offer special cherry blossom-themed foods and drinks during the season.</li>
        </ol>
        
        <p>Viewing cherry blossoms is not just about appreciating natural beauty but also immersing yourself in an important aspect of Japanese culture. It's a time for reflection, celebration, and enjoying the fleeting beauty of life.</p>
      `,
      ja: `
        <p>桜の花見、または「花見」は、日本で最も期待される自然現象の一つです。これらの繊細なピンクの花は、美しさと人生の儚さを象徴するだけでなく、毎年世界中から何百万人もの訪問者を魅了します。</p>
        
        <h2>2025年の桜の予報</h2>
        
        <p>予備的な予報によると、2025年の日本の桜は次のように咲き始めます：</p>
        
        <ul>
          <li><strong>東京：</strong> 3月下旬〜4月上旬</li>
          <li><strong>京都：</strong> 4月上旬</li>
          <li><strong>大阪：</strong> 4月上旬</li>
          <li><strong>広島：</strong> 4月中旬</li>
          <li><strong>札幌：</strong> 4月下旬〜5月上旬</li>
        </ul>
        
        <p>これらの日付は予備的なものであり、天候条件によって変わる可能性があることに注意してください。日本気象庁は通常、1月から2月にかけてより正確な予報を発表します。</p>
        
        <h2>桜を見るための最高の場所</h2>
        
        <h3>東京</h3>
        <p>日本の首都には、桜を見るための素晴らしいスポットがたくさんあります：</p>
        <ul>
          <li><strong>上野公園：</strong> 1,000本以上の桜の木がある最も人気のあるスポット</li>
          <li><strong>新宿御苑：</strong> さまざまな種類の桜を提供</li>
          <li><strong>目黒川：</strong> 桜の木の下で川に沿ってロマンチックな散歩</li>
        </ul>
        
        <h3>京都</h3>
        <p>歴史的な京都は、花見のための最も絵のように美しいスポットを提供しています：</p>
        <ul>
          <li><strong>哲学の道：</strong> 桜並木の運河に沿った風光明媚な散歩道</li>
          <li><strong>清水寺：</strong> 歴史的な寺院を眺めながらの桜</li>
          <li><strong>円山公園：</strong> 大きなしだれ桜で知られている</li>
        </ul>
        
        <h2>旅行計画のためのヒント</h2>
        
        <ol>
          <li><strong>事前に予約する：</strong> 桜の季節は日本の観光のピーク時です。ホテル、交通機関、ツアーはすぐに予約されます。</li>
          <li><strong>柔軟に対応する：</strong> 可能であれば、開花が予報よりも早く始まったり遅く始まったりする可能性があるため、日程を変更できる旅行を計画してください。</li>
          <li><strong>あまり知られていないスポットを検討する：</strong> 人気のある場所は非常に混雑する可能性があります。より穏やかな体験のためにあまり知られていないスポットを探検してください。</li>
          <li><strong>季節の食べ物や飲み物を試す：</strong> 多くのカフェやレストランでは、この季節に特別な桜をテーマにした食べ物や飲み物を提供しています。</li>
        </ol>
        
        <p>桜を見ることは、自然の美しさを鑑賞するだけでなく、日本文化の重要な側面に身を浸すことでもあります。それは反省、祝福、そして人生の儚い美しさを楽しむ時間です。</p>
      `
    },
    image: 'https://source.unsplash.com/featured/?cherryblossom,japan',
    date: '2025-01-15',
    author: 'Alexei Petrov',
    category: 'travel',
    tags: ['cherry blossoms', 'sakura', 'spring', 'travel tips', 'Japan'],
    relatedPosts: [
      {
        id: 2,
        title: {
          ru: 'Скрытые жемчужины Киото: 10 мест, о которых не знают туристы',
          en: 'Hidden Gems of Kyoto: 10 Places Tourists Don\'t Know About',
          ja: '京都の隠れた名所：観光客が知らない10ヶ所'
        },
        image: 'https://source.unsplash.com/featured/?kyoto,temple',
        date: '2025-01-05'
      },
      {
        id: 6,
        title: {
          ru: 'Сезонные фестивали Японии: календарь на 2025 год',
          en: 'Seasonal Festivals of Japan: 2025 Calendar',
          ja: '日本の季節の祭り：2025年カレンダー'
        },
        image: 'https://source.unsplash.com/featured/?japan,festival',
        date: '2024-11-15'
      },
      {
        id: 5,
        title: {
          ru: '7 советов для экономии в Японии без ущерба для впечатлений',
          en: '7 Tips for Saving Money in Japan Without Sacrificing Experience',
          ja: '体験を犠牲にせずに日本でお金を節約するための7つのヒント'
        },
        image: 'https://source.unsplash.com/featured/?japan,yen',
        date: '2024-11-28'
      }
    ]
  };

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
        {/* Навигация назад к блогу */}
        <button 
          onClick={() => navigateTo('blog')}
          className="flex items-center text-pink-500 hover:text-pink-600 font-medium mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t.backToBlog}
        </button>
        
        {/* Заголовок статьи */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">{post.title[currentLang]}</h1>
        
        {/* Метаданные статьи */}
        <div className="flex flex-wrap items-center text-gray-500 mb-8">
          <div className="flex items-center mr-6 mb-2">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{t.publishedOn} {formatDate(post.date)}</span>
          </div>
          <div className="flex items-center mr-6 mb-2">
            <User className="w-4 h-4 mr-2" />
            <span>{t.by} {post.author}</span>
          </div>
          <div className="flex items-center mb-2">
            <Tag className="w-4 h-4 mr-2" />
            <span className="mr-2">{t.tags}:</span>
            <div className="flex flex-wrap">
              {post.tags.map((tag, index) => (
                <span key={index} className="mr-2">
                  {tag}{index < post.tags.length - 1 ? ',' : ''}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Изображение статьи */}
        <div className="mb-8">
          <img 
            src={post.image} 
            alt={post.title[currentLang]} 
            className="w-full h-auto max-h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
        
        {/* Основной контент */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Содержимое статьи */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content[currentLang] }}
              />
            </div>
            
            {/* Поделиться */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t.share}</h3>
              <div className="flex space-x-4">
                <button className="flex items-center text-blue-600 hover:text-blue-800">
                  <Facebook className="w-5 h-5 mr-2" />
                  Facebook
                </button>
                <button className="flex items-center text-blue-400 hover:text-blue-600">
                  <Twitter className="w-5 h-5 mr-2" />
                  Twitter
                </button>
                <button className="flex items-center text-blue-700 hover:text-blue-900">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </button>
              </div>
            </div>
            
            {/* Секция комментариев */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">{t.comments}</h3>
              
              {/* Здесь будут комментарии */}
              <div className="space-y-6 mb-8">
                {/* Примерно 2-3 комментария */}
              </div>
              
              {/* Форма комментария */}
              <h4 className="text-lg font-bold text-gray-800 mb-4">{t.leaveComment}</h4>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t.yourName} *</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500" 
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t.yourEmail} *</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500" 
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="comment" className="block text-sm font-medium text-gray-700">{t.yourComment} *</label>
                  <textarea 
                    id="comment" 
                    rows="4" 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500" 
                    required
                  ></textarea>
                </div>
                <div>
                  <button 
                    type="submit" 
                    className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-md"
                  >
                    {t.submit}
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Боковая панель */}
          <div className="lg:col-span-1">
            {/* Похожие статьи */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t.relatedPosts}</h3>
              <div className="space-y-4">
                {post.relatedPosts.map((relatedPost) => (
                  <div key={relatedPost.id} className="flex items-start">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title[currentLang]} 
                      className="w-20 h-20 object-cover rounded-md mr-4"
                    />
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1 line-clamp-2">
                        {relatedPost.title[currentLang]}
                      </h4>
                      <p className="text-sm text-gray-500">{formatDate(relatedPost.date)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Теги */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t.tags}</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPostPage;