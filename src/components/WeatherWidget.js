// src/components/WeatherWidget.js
import React, { useState, useEffect } from 'react';
import { Cloud, CloudRain, CloudSnow, Sun, CloudLightning, Wind } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

function WeatherWidget({ city = 'Tokyo' }) {
  const { currentLang } = useAppContext();
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Переводы
  const translations = {
    ru: {
      weather: 'Погода',
      today: 'Сегодня',
      tomorrow: 'Завтра',
      loading: 'Загрузка...',
      error: 'Не удалось загрузить данные о погоде',
      temp: 'Температура',
      feels: 'Ощущается как',
      humidity: 'Влажность',
      wind: 'Ветер',
      precipitation: 'Осадки',
      sunny: 'Солнечно',
      cloudy: 'Облачно',
      rainy: 'Дождь',
      snowy: 'Снег',
      stormy: 'Гроза',
      windy: 'Ветрено',
      cities: {
        Tokyo: 'Токио',
        Kyoto: 'Киото',
        Osaka: 'Осака',
        Sapporo: 'Саппоро',
        Hiroshima: 'Хиросима'
      }
    },
    en: {
      weather: 'Weather',
      today: 'Today',
      tomorrow: 'Tomorrow',
      loading: 'Loading...',
      error: 'Failed to load weather data',
      temp: 'Temperature',
      feels: 'Feels like',
      humidity: 'Humidity',
      wind: 'Wind',
      precipitation: 'Precipitation',
      sunny: 'Sunny',
      cloudy: 'Cloudy',
      rainy: 'Rainy',
      snowy: 'Snowy',
      stormy: 'Stormy',
      windy: 'Windy',
      cities: {
        Tokyo: 'Tokyo',
        Kyoto: 'Kyoto',
        Osaka: 'Osaka',
        Sapporo: 'Sapporo',
        Hiroshima: 'Hiroshima'
      }
    },
    ja: {
      weather: '天気',
      today: '今日',
      tomorrow: '明日',
      loading: '読み込み中...',
      error: '天気データの読み込みに失敗しました',
      temp: '気温',
      feels: '体感温度',
      humidity: '湿度',
      wind: '風',
      precipitation: '降水量',
      sunny: '晴れ',
      cloudy: '曇り',
      rainy: '雨',
      snowy: '雪',
      stormy: '嵐',
      windy: '風が強い',
      cities: {
        Tokyo: '東京',
        Kyoto: '京都',
        Osaka: '大阪',
        Sapporo: '札幌',
        Hiroshima: '広島'
      }
    }
  };

  const t = translations[currentLang];

  // Пример данных о погоде (в реальном приложении здесь был бы API запрос)
  useEffect(() => {
    setLoading(true);
    // Имитация запроса к API погоды
    setTimeout(() => {
      const mockWeatherData = {
        city: city,
        current: {
          date: new Date().toISOString(),
          temp: 22,
          feels_like: 23,
          humidity: 65,
          wind_speed: 10,
          precipitation: 0,
          condition: 'sunny' // sunny, cloudy, rainy, snowy, stormy, windy
        },
        forecast: [
          {
            date: new Date(Date.now() + 86400000).toISOString(), // завтра
            temp_min: 20,
            temp_max: 25,
            condition: 'cloudy'
          },
          {
            date: new Date(Date.now() + 172800000).toISOString(), // послезавтра
            temp_min: 18,
            temp_max: 22,
            condition: 'rainy'
          },
          {
            date: new Date(Date.now() + 259200000).toISOString(), // через 3 дня
            temp_min: 17,
            temp_max: 21,
            condition: 'cloudy'
          }
        ]
      };
      
      setWeather(mockWeatherData);
      setLoading(false);
    }, 1000);
  }, [city]);

  // Иконка погоды в зависимости от условий
  const getWeatherIcon = (condition) => {
    switch(condition) {
      case 'sunny':
        return <Sun className="w-8 h-8 text-yellow-500" />;
      case 'cloudy':
        return <Cloud className="w-8 h-8 text-gray-500" />;
      case 'rainy':
        return <CloudRain className="w-8 h-8 text-blue-500" />;
      case 'snowy':
        return <CloudSnow className="w-8 h-8 text-blue-200" />;
      case 'stormy':
        return <CloudLightning className="w-8 h-8 text-purple-500" />;
      case 'windy':
        return <Wind className="w-8 h-8 text-blue-300" />;
      default:
        return <Sun className="w-8 h-8 text-yellow-500" />;
    }
  };

  // Преобразование даты в день недели
  const getDayOfWeek = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(
      currentLang === 'ru' ? 'ru-RU' : 
      currentLang === 'ja' ? 'ja-JP' : 
      'en-US', 
      { weekday: 'short' }
    );
  };

  // Форматирование даты
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(
      currentLang === 'ru' ? 'ru-RU' : 
      currentLang === 'ja' ? 'ja-JP' : 
      'en-US', 
      { day: 'numeric', month: 'short' }
    );
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-medium text-gray-800 mb-2">{t.weather} - {t.cities[city]}</h3>
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-pink-500"></div>
          <span className="ml-2 text-gray-600">{t.loading}</span>
        </div>
      </div>
    );
  }

  if (error || !weather) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-medium text-gray-800 mb-2">{t.weather} - {t.cities[city]}</h3>
        <div className="text-red-500 text-center py-4">{t.error}</div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-medium text-gray-800 mb-4">{t.weather} - {t.cities[city]}</h3>
      
      {/* Текущая погода */}
      <div className="border-b border-gray-200 pb-4 mb-4">
        <div className="flex justify-between items-center mb-2">
          <div className="font-medium">{t.today}, {formatDate(weather.current.date)}</div>
          <div className="text-sm text-gray-500">{t[weather.current.condition]}</div>
        </div>
        
        <div className="flex items-center">
          <div className="mr-4">
            {getWeatherIcon(weather.current.condition)}
          </div>
          <div>
            <div className="text-2xl font-bold">{weather.current.temp}°C</div>
            <div className="text-sm text-gray-600">{t.feels} {weather.current.feels_like}°C</div>
          </div>
          <div className="ml-auto">
            <div className="text-sm text-gray-600">
              <div>{t.humidity}: {weather.current.humidity}%</div>
              <div>{t.wind}: {weather.current.wind_speed} km/h</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Прогноз на ближайшие дни */}
      <div className="grid grid-cols-3 gap-2">
        {weather.forecast.map((day, index) => (
          <div key={index} className="text-center">
            <div className="text-sm font-medium mb-1">
              {index === 0 ? t.tomorrow : getDayOfWeek(day.date)}
            </div>
            <div className="flex justify-center mb-1">
              {getWeatherIcon(day.condition)}
            </div>
            <div className="text-sm">
              <span className="font-medium">{day.temp_max}°</span> / {day.temp_min}°
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherWidget;