// src/components/JapanMap.js
import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

function JapanMap({ onRegionClick }) {
  const { currentLang } = useAppContext();
  const [activeRegion, setActiveRegion] = useState(null);
  
  // Переводы
  const translations = {
    ru: {
      title: 'Карта Японии',
      subtitle: 'Выберите регион для изучения',
      regions: {
        hokkaido: 'Хоккайдо',
        tohoku: 'Тохоку',
        kanto: 'Канто',
        chubu: 'Тюбу',
        kansai: 'Кансай',
        chugoku: 'Тюгоку',
        shikoku: 'Сикоку',
        kyushu: 'Кюсю',
        okinawa: 'Окинава'
      },
      majorCities: {
        sapporo: 'Саппоро',
        sendai: 'Сендай',
        tokyo: 'Токио',
        yokohama: 'Йокогама',
        nagoya: 'Нагоя',
        kyoto: 'Киото',
        osaka: 'Осака',
        hiroshima: 'Хиросима',
        fukuoka: 'Фукуока',
        naha: 'Наха'
      },
      exploreRegion: 'Исследовать регион',
      popularDestinations: 'Популярные направления',
      viewTours: 'Смотреть туры'
    },
    en: {
      title: 'Map of Japan',
      subtitle: 'Select a region to explore',
      regions: {
        hokkaido: 'Hokkaido',
        tohoku: 'Tohoku',
        kanto: 'Kanto',
        chubu: 'Chubu',
        kansai: 'Kansai',
        chugoku: 'Chugoku',
        shikoku: 'Shikoku',
        kyushu: 'Kyushu',
        okinawa: 'Okinawa'
      },
      majorCities: {
        sapporo: 'Sapporo',
        sendai: 'Sendai',
        tokyo: 'Tokyo',
        yokohama: 'Yokohama',
        nagoya: 'Nagoya',
        kyoto: 'Kyoto',
        osaka: 'Osaka',
        hiroshima: 'Hiroshima',
        fukuoka: 'Fukuoka',
        naha: 'Naha'
      },
      exploreRegion: 'Explore Region',
      popularDestinations: 'Popular Destinations',
      viewTours: 'View Tours'
    },
    ja: {
      title: '日本地図',
      subtitle: '探索する地域を選択',
      regions: {
        hokkaido: '北海道',
        tohoku: '東北',
        kanto: '関東',
        chubu: '中部',
        kansai: '関西',
        chugoku: '中国',
        shikoku: '四国',
        kyushu: '九州',
        okinawa: '沖縄'
      },
      majorCities: {
        sapporo: '札幌',
        sendai: '仙台',
        tokyo: '東京',
        yokohama: '横浜',
        nagoya: '名古屋',
        kyoto: '京都',
        osaka: '大阪',
        hiroshima: '広島',
        fukuoka: '福岡',
        naha: '那覇'
      },
      exploreRegion: '地域を探索',
      popularDestinations: '人気の目的地',
      viewTours: 'ツアーを見る'
    }
  };

  const t = translations[currentLang];
  
  // Данные о регионах
  const regions = [
    {
      id: 'hokkaido',
      path: 'M110,50 C140,40 170,40 190,60 C210,80 205,110 180,130 C155,150 120,150 90,130 C60,110 70,65 110,50 Z',
      attractions: ['Niseko Ski Resort', 'Sapporo Snow Festival', 'Furano Lavender Fields'],
      fill: '#A7C957'
    },
    {
      id: 'tohoku',
      path: 'M155,150 C170,140 190,140 200,155 C210,170 210,190 200,210 C190,230 170,240 150,230 C130,220 125,190 155,150 Z',
      attractions: ['Aomori Nebuta Festival', 'Yamadera Temple', 'Oirase Stream'],
      fill: '#6A994E'
    },
    {
      id: 'kanto',
      path: 'M160,230 C180,220 200,225 210,240 C220,255 220,280 200,290 C180,300 160,290 150,275 C140,260 145,240 160,230 Z',
      attractions: ['Tokyo Tower', 'Nikko Toshogu Shrine', 'Mount Fuji'],
      fill: '#386641'
    },
    {
      id: 'chubu',
      path: 'M135,280 C155,270 175,280 185,300 C195,320 190,345 170,355 C150,365 130,355 120,335 C110,315 115,290 135,280 Z',
      attractions: ['Japanese Alps', 'Shirakawa-go', 'Kanazawa Castle'],
      fill: '#FFDD00'
    },
    {
      id: 'kansai',
      path: 'M115,345 C135,335 155,345 165,365 C175,385 170,410 150,420 C130,430 110,420 100,400 C90,380 95,355 115,345 Z',
      attractions: ['Fushimi Inari Shrine', 'Dotonbori', 'Himeji Castle'],
      fill: '#FFBD00'
    },
    {
      id: 'chugoku',
      path: 'M60,380 C80,370 100,375 115,390 C130,405 125,430 105,440 C85,450 65,440 55,420 C45,400 45,390 60,380 Z',
      attractions: ['Hiroshima Peace Memorial', 'Miyajima Island', 'Tottori Sand Dunes'],
      fill: '#F48C06'
    },
    {
      id: 'shikoku',
      path: 'M90,450 C110,440 130,445 140,465 C150,485 145,510 125,520 C105,530 85,520 75,500 C65,480 70,460 90,450 Z',
      attractions: ['Ritsurin Garden', 'Dogo Onsen', 'Iya Valley'],
      fill: '#DC2F02'
    },
    {
      id: 'kyushu',
      path: 'M50,520 C70,510 90,515 100,535 C110,555 105,580 85,590 C65,600 45,590 35,570 C25,550 30,530 50,520 Z',
      attractions: ['Mount Aso', 'Kumamoto Castle', 'Nagasaki Peace Park'],
      fill: '#9D0208'
    },
    {
      id: 'okinawa',
      path: 'M30,640 C45,635 60,638 65,650 C70,662 68,675 55,680 C42,685 27,682 22,670 C17,658 18,645 30,640 Z',
      attractions: ['Shuri Castle', 'Naha Kokusai-dori', 'Churaumi Aquarium'],
      fill: '#6A040F'
    }
  ];

  const handleMouseEnter = (regionId) => {
    setActiveRegion(regionId);
  };

  const handleMouseLeave = () => {
    setActiveRegion(null);
  };

  const handleClick = (regionId) => {
    if (onRegionClick) {
      onRegionClick(regionId);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{t.title}</h2>
      <p className="text-gray-600 mb-6">{t.subtitle}</p>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* SVG карта */}
        <div className="md:w-1/2">
          <svg viewBox="0 0 300 700" width="100%" height="auto">
            {regions.map((region) => (
              <path
                key={region.id}
                d={region.path}
                fill={activeRegion === region.id ? '#FF6B6B' : region.fill}
                stroke="#FFF"
                strokeWidth="2"
                onMouseEnter={() => handleMouseEnter(region.id)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(region.id)}
                style={{ cursor: 'pointer', transition: 'fill 0.3s ease' }}
              />
            ))}
            
            {/* Подписи регионов */}
            <g>
              <text x="140" y="90" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">{t.regions.hokkaido}</text>
              <text x="175" y="180" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">{t.regions.tohoku}</text>
              <text x="180" y="260" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">{t.regions.kanto}</text>
              <text x="155" y="320" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">{t.regions.chubu}</text>
              <text x="135" y="380" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">{t.regions.kansai}</text>
              <text x="90" y="410" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">{t.regions.chugoku}</text>
              <text x="110" y="480" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">{t.regions.shikoku}</text>
              <text x="70" y="550" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">{t.regions.kyushu}</text>
              <text x="45" y="660" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">{t.regions.okinawa}</text>
            </g>
            
            {/* Основные города (точки) */}
            <circle cx="150" cy="70" r="3" fill="#fff" />
            <text x="160" y="70" fill="#333" fontSize="8">{t.majorCities.sapporo}</text>
            
            <circle cx="180" cy="200" r="3" fill="#fff" />
            <text x="190" y="200" fill="#333" fontSize="8">{t.majorCities.sendai}</text>
            
            <circle cx="190" cy="260" r="4" fill="#fff" />
            <text x="200" y="260" fill="#333" fontSize="8" fontWeight="bold">{t.majorCities.tokyo}</text>
            
            <circle cx="185" cy="270" r="3" fill="#fff" />
            <text x="195" y="270" fill="#333" fontSize="8">{t.majorCities.yokohama}</text>
            
            <circle cx="160" cy="320" r="3" fill="#fff" />
            <text x="170" y="320" fill="#333" fontSize="8">{t.majorCities.nagoya}</text>
            
            <circle cx="135" y="375" r="3" fill="#fff" />
            <text x="145" y="375" fill="#333" fontSize="8">{t.majorCities.kyoto}</text>
            
            <circle cx="130" y="385" r="3" fill="#fff" />
            <text x="140" y="385" fill="#333" fontSize="8">{t.majorCities.osaka}</text>
            
            <circle cx="85" y="410" r="3" fill="#fff" />
            <text x="95" y="410" fill="#333" fontSize="8">{t.majorCities.hiroshima}</text>
            
            <circle cx="70" y="540" r="3" fill="#fff" />
            <text x="80" y="540" fill="#333" fontSize="8">{t.majorCities.fukuoka}</text>
            
            <circle cx="45" y="650" r="3" fill="#fff" />
            <text x="55" y="650" fill="#333" fontSize="8">{t.majorCities.naha}</text>
          </svg>
        </div>
        
        {/* Информация о выбранном регионе */}
        <div className="md:w-1/2">
          {activeRegion ? (
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t.regions[activeRegion]}</h3>
              
              <h4 className="font-medium text-gray-700 mb-2">{t.popularDestinations}:</h4>
              <ul className="list-disc list-inside mb-4 text-gray-600">
                {regions.find(r => r.id === activeRegion).attractions.map((attraction, index) => (
                  <li key={index}>{attraction}</li>
                ))}
              </ul>
              
              <button 
                onClick={() => handleClick(activeRegion)}
                className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 mr-2"
              >
                {t.exploreRegion}
              </button>
              <button 
                onClick={() => handleClick(activeRegion)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
              >
                {t.viewTours}
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500 italic">{t.subtitle}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default JapanMap;