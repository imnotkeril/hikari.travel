// src/components/ExchangeRateWidget.js
import React, { useState, useEffect } from 'react';
import { DollarSign, RefreshCcw } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

function ExchangeRateWidget() {
  const { currentLang } = useAppContext();
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [lastUpdated, setLastUpdated] = useState(new Date());

  // Переводы
  const translations = {
    ru: {
      title: 'Обменный курс',
      lastUpdated: 'Последнее обновление',
      baseCurrency: 'Базовая валюта',
      refresh: 'Обновить',
      loading: 'Загрузка...',
      error: 'Не удалось загрузить данные',
      currencies: {
        USD: 'Доллар США',
        EUR: 'Евро',
        GBP: 'Фунт стерлингов',
        JPY: 'Японская иена',
        RUB: 'Российский рубль',
        CNY: 'Китайский юань',
        AUD: 'Австралийский доллар',
        CAD: 'Канадский доллар'
      }
    },
    en: {
      title: 'Exchange Rate',
      lastUpdated: 'Last updated',
      baseCurrency: 'Base currency',
      refresh: 'Refresh',
      loading: 'Loading...',
      error: 'Failed to load data',
      currencies: {
        USD: 'US Dollar',
        EUR: 'Euro',
        GBP: 'British Pound',
        JPY: 'Japanese Yen',
        RUB: 'Russian Ruble',
        CNY: 'Chinese Yuan',
        AUD: 'Australian Dollar',
        CAD: 'Canadian Dollar'
      }
    },
    ja: {
      title: '為替レート',
      lastUpdated: '最終更新',
      baseCurrency: '基準通貨',
      refresh: '更新',
      loading: '読み込み中...',
      error: 'データの読み込みに失敗しました',
      currencies: {
        USD: '米ドル',
        EUR: 'ユーロ',
        GBP: '英ポンド',
        JPY: '日本円',
        RUB: 'ロシアルーブル',
        CNY: '中国元',
        AUD: 'オーストラリアドル',
        CAD: 'カナダドル'
      }
    }
  };

  const t = translations[currentLang];

  // Пример данных о курсах валют (в реальном приложении здесь был бы API запрос)
  useEffect(() => {
    fetchRates();
  }, [baseCurrency]);

  const fetchRates = () => {
    setLoading(true);
    // Имитация запроса к API обмена валют
    setTimeout(() => {
      const mockRates = {
        base: baseCurrency,
        rates: {
          USD: baseCurrency === 'USD' ? 1 : 0.0073,
          EUR: baseCurrency === 'EUR' ? 1 : 0.0068,
          GBP: baseCurrency === 'GBP' ? 1 : 0.0057,
          JPY: baseCurrency === 'JPY' ? 1 : 1.0,
          RUB: baseCurrency === 'RUB' ? 1 : 0.69,
          CNY: baseCurrency === 'CNY' ? 1 : 0.052,
          AUD: baseCurrency === 'AUD' ? 1 : 0.011,
          CAD: baseCurrency === 'CAD' ? 1 : 0.01
        }
      };
      
      // Пересчитываем курсы относительно базовой валюты
      if (baseCurrency !== 'USD') {
        const baseRate = mockRates.rates[baseCurrency];
        Object.keys(mockRates.rates).forEach(currency => {
          if (currency !== baseCurrency) {
            mockRates.rates[currency] = mockRates.rates[currency] / baseRate;
          }
        });
        mockRates.rates[baseCurrency] = 1;
      }
      
      setRates(mockRates);
      setLastUpdated(new Date());
      setLoading(false);
    }, 1000);
  };

  // Форматирование даты
  const formatDate = (date) => {
    return date.toLocaleString(
      currentLang === 'ru' ? 'ru-RU' : 
      currentLang === 'ja' ? 'ja-JP' : 
      'en-US'
    );
  };

  // Форматирование числа
  const formatNumber = (num) => {
    return num.toLocaleString(
      currentLang === 'ru' ? 'ru-RU' : 
      currentLang === 'ja' ? 'ja-JP' : 
      'en-US',
      { minimumFractionDigits: 2, maximumFractionDigits: 4 }
    );
  };

  // Обработчик смены базовой валюты
  const handleBaseCurrencyChange = (e) => {
    setBaseCurrency(e.target.value);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-800">{t.title}</h3>
        <button 
          onClick={fetchRates}
          className="text-pink-500 hover:text-pink-600 flex items-center text-sm"
        >
          <RefreshCcw className="w-4 h-4 mr-1" />
          {t.refresh}
        </button>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-pink-500"></div>
          <span className="ml-2 text-gray-600">{t.loading}</span>
        </div>
      ) : rates ? (
        <>
          <div className="mb-4">
            <label htmlFor="baseCurrency" className="block text-sm font-medium text-gray-700 mb-1">
              {t.baseCurrency}
            </label>
            <select
              id="baseCurrency"
              value={baseCurrency}
              onChange={handleBaseCurrencyChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
            >
              {Object.keys(t.currencies).map((currency) => (
                <option key={currency} value={currency}>
                  {currency} - {t.currencies[currency]}
                </option>
              ))}
            </select>
          </div>
          
          <div className="divide-y divide-gray-200">
            {Object.entries(rates.rates)
              .filter(([currency]) => currency !== baseCurrency)
              .map(([currency, rate]) => (
                <div key={currency} className="py-2 flex justify-between items-center">
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="font-medium">{currency}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{formatNumber(rate)}</div>
                    <div className="text-xs text-gray-500">
                      1 {baseCurrency} = {formatNumber(rate)} {currency}
                    </div>
                  </div>
                </div>
              ))}
          </div>
          
          <div className="mt-4 text-xs text-gray-500 text-right">
            {t.lastUpdated}: {formatDate(lastUpdated)}
          </div>
        </>
      ) : (
        <div className="text-red-500 text-center py-4">{t.error}</div>
      )}
    </div>
  );
}

export default ExchangeRateWidget;