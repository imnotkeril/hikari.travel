import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Calendar, 
  Users, 
  Star, 
  ChevronDown, 
  Menu, 
  X 
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';
// Функция для безопасного получения локализованного значения
// Функция для безопасного получения локализованного значения
const getLocalizedValue = (value, lang, item = null) => {
  if (!value) {
    // Если value пустое, но у нас есть оригинальный item, попробуем взять из него
    if (item && item.title && typeof item.title === 'object') {
      return item.title[lang] || '';
    }
    return '';
  }
  if (typeof value === 'string') return value;
  if (typeof value === 'object' && value[lang]) return value[lang];
  return '';
};
function BookingPage({ currentLang, setCurrentLang, navigateTo, tour, service, saveBooking }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [participants, setParticipants] = useState({ adults: 2, children: 0 });
  const [contactInfo, setContactInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    cardholderName: '',
    expiryDate: '',
    cvv: '',
    saveCard: false,
    acceptTerms: false
  });

  // Получаем функции конвертации валют из контекста
  const { convertPrice, formatPrice, currentCurrency } = useAppContext();

  // Определяем, что бронируем - тур или услугу
  const selectedTour = tour;
  const selectedService = service;
  const isBookingService = !!selectedService;
  const isBookingTour = !!selectedTour && !isBookingService;

  console.log('BookingPage props:', { tour, service, isBookingTour, isBookingService });

  // Если ни тур, ни услуга не выбраны, используем временный тур
  const defaultTour = {
    id: 1,
    title: 'classic-kanto-tour',
    image: '/images/tours/classic-kanto-tour.webp',
    price: 2500,
    duration: 7,
    groupSizeMin: 8,
    groupSizeMax: 12,
    rating: 4.9,
    reviewCount: 28
  };

  const bookingItem = isBookingService ? selectedService : (selectedTour || defaultTour);
// Добавь этот useEffect для обновления локализации при смене языка
useEffect(() => {
  // Принудительно обновляем компонент при смене языка
  // чтобы все локализованные значения пересчитались
}, [currentLang]);
  // Переводы
  const translations = {
    ru: {
      menu: {
        home: 'Главная',
        tours: 'Туры',
        services: 'Услуги',
        about: 'О нас',
        blog: 'Блог',
        contact: 'Контакты'
      },
      bookingProcess: 'Процесс бронирования',
      tourSelection: 'Выбор тура',
      participants: 'Участники',
      contactDetails: 'Контактные данные',
      payment: 'Оплата',
      previous: 'Назад',
      next: 'Далее',
      tourDetails: 'Детали тура',
      serviceDetails: 'Детали услуги',
      duration: 'Длительность',
      days: 'дней',
      hours: 'часов',
      groupSize: 'Размер группы',
      upTo: 'до',
      people: 'человек',
      included: 'Включено',
      excluded: 'Не включено',
      bookNow: 'Забронировать сейчас',
      participantsInfo: 'Информация об участниках',
      adults: 'Взрослые',
      children: 'Дети',
      childrenAges: 'Возраст детей (0-17)',
      firstName: 'Имя',
      lastName: 'Фамилия',
      email: 'Email',
      phone: 'Телефон',
      specialRequests: 'Особые пожелания',
      additionalInfo: 'Дополнительная информация',
      paymentDetails: 'Детали оплаты',
      cardNumber: 'Номер карты',
      cardholderName: 'Имя владельца',
      expiryDate: 'Срок действия',
      cvv: 'CVV',
      saveCard: 'Сохранить карту для будущих платежей',
      acceptTerms: 'Я принимаю условия и положения',
      payNow: 'Оплатить сейчас',
      bookingSummary: 'Сводка бронирования',
      tourName: 'Название тура',
      serviceName: 'Название услуги',
      numberOfParticipants: 'Количество участников',
      totalPrice: 'Общая стоимость',
      subtotal: 'Подытог',
      tax: 'Налог',
      total: 'Всего',
      accommodation: 'Проживание',
      transportation: 'Транспорт',
      guidedTours: 'Экскурсии с гидом',
      breakfasts: 'Завтраки',
      entranceFees: 'Входные билеты',
      guide: 'Гид',
      activities: 'Мероприятия',
      flights: 'Авиабилеты',
      otherMeals: 'Другие приемы пищи',
      personalExpenses: 'Личные расходы',
      travelInsurance: 'Страховка',
      reviewsCount: 'отзывов',
      back: 'Вернуться',
      requiredField: 'Обязательное поле',
      invalidEmail: 'Неверный формат email',
      invalidPhone: 'Неверный формат телефона',
      invalidCard: 'Неверный номер карты',
      invalidDate: 'Неверная дата',
      invalidCVV: 'Неверный CVV код',
      termsRequired: 'Необходимо принять условия',
      backToTours: 'Вернуться к турам',
      backToServices: 'Вернуться к услугам',
      bookingTitle: 'Бронирование',
      youSelected: 'Выбранный тур',
      serviceSelected: 'Выбранная услуга',
      modifySelection: 'Изменить выбор',
      continueToPayment: 'Продолжить к оплате',
      yourBooking: 'Ваше бронирование',
      price: 'Цена',
      selectedOptions: 'Выбранные опции',
      basePrice: 'Базовая цена',
      extras: 'Дополнительно'

    },
    en: {
      menu: {
        home: 'Home',
        tours: 'Tours',
        services: 'Services',
        about: 'About',
        blog: 'Blog',
        contact: 'Contact'
      },
      bookingProcess: 'Booking Process',
      tourSelection: 'Tour Selection',
      participants: 'Participants',
      contactDetails: 'Contact Details',
      payment: 'Payment',
      previous: 'Previous',
      next: 'Next',
      tourDetails: 'Tour Details',
      serviceDetails: 'Service Details',
      duration: 'Duration',
      days: 'days',
      hours: 'hours',
      groupSize: 'Group Size',
      upTo: 'up to',
      people: 'people',
      included: 'Included',
      excluded: 'Not Included',
      bookNow: 'Book Now',
      participantsInfo: 'Participants Information',
      adults: 'Adults',
      children: 'Children',
      childrenAges: 'Children Ages (0-17)',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      phone: 'Phone',
      specialRequests: 'Special Requests',
      additionalInfo: 'Additional Information',
      paymentDetails: 'Payment Details',
      cardNumber: 'Card Number',
      cardholderName: 'Cardholder Name',
      expiryDate: 'Expiry Date',
      cvv: 'CVV',
      saveCard: 'Save card for future payments',
      acceptTerms: 'I accept the terms and conditions',
      payNow: 'Pay Now',
      bookingSummary: 'Booking Summary',
      tourName: 'Tour Name',
      serviceName: 'Service Name',
      numberOfParticipants: 'Number of Participants',
      totalPrice: 'Total Price',
      subtotal: 'Subtotal',
      tax: 'Tax',
      total: 'Total',
      accommodation: 'Accommodation',
      transportation: 'Transportation',
      guidedTours: 'Guided Tours',
      breakfasts: 'Breakfasts',
      entranceFees: 'Entrance Fees',
      guide: 'Guide',
      activities: 'Activities',
      flights: 'Flights',
      otherMeals: 'Other Meals',
      personalExpenses: 'Personal Expenses',
      travelInsurance: 'Travel Insurance',
      reviewsCount: 'reviews',
      back: 'Go Back',
      requiredField: 'Required field',
      invalidEmail: 'Invalid email format',
      invalidPhone: 'Invalid phone format',
      invalidCard: 'Invalid card number',
      invalidDate: 'Invalid date',
      invalidCVV: 'Invalid CVV code',
      termsRequired: 'You must accept the terms',
      backToTours: 'Back to Tours',
      backToServices: 'Back to Services',
      bookingTitle: 'Booking',
      youSelected: 'Selected Tour',
      serviceSelected: 'Selected Service',
      modifySelection: 'Modify Selection',
      continueToPayment: 'Continue to Payment',
      yourBooking: 'Your Booking',
      price: 'Price',
      selectedOptions: 'Selected Options',
      basePrice: 'Base Price',
      extras: 'Extras'
    },
    ja: {
      menu: {
        home: 'ホーム',
        tours: 'ツアー',
        services: 'サービス',
        about: '会社概要',
        blog: 'ブログ',
        contact: 'お問い合わせ'
      },
      bookingProcess: '予約プロセス',
      tourSelection: 'ツアー選択',
      participants: '参加者',
      contactDetails: '連絡先',
      payment: '支払い',
      previous: '戻る',
      next: '次へ',
      tourDetails: 'ツアー詳細',
      serviceDetails: 'サービス詳細',
      duration: '期間',
      days: '日間',
      hours: '時間',
      groupSize: 'グループサイズ',
      upTo: '最大',
      people: '人',
      included: '含まれるもの',
      excluded: '含まれないもの',
      bookNow: '今すぐ予約',
      participantsInfo: '参加者情報',
      adults: '大人',
      children: '子供',
      childrenAges: '子供の年齢（0-17歳）',
      firstName: '名',
      lastName: '姓',
      email: 'メールアドレス',
      phone: '電話番号',
      specialRequests: '特別なリクエスト',
      additionalInfo: '追加情報',
      paymentDetails: 'お支払い詳細',
      cardNumber: 'カード番号',
      cardholderName: 'カード名義人',
      expiryDate: '有効期限',
      cvv: 'セキュリティコード',
      saveCard: '今後の支払いのためにカードを保存する',
      acceptTerms: '利用規約に同意します',
      payNow: '今すぐ支払う',
      bookingSummary: '予約概要',
      tourName: 'ツアー名',
      serviceName: 'サービス名',
      numberOfParticipants: '参加者数',
      totalPrice: '合計金額',
      subtotal: '小計',
      tax: '税金',
      total: '合計',
      accommodation: '宿泊施設',
      transportation: '交通機関',
      guidedTours: 'ガイド付きツアー',
      breakfasts: '朝食',
      entranceFees: '入場料',
      guide: 'ガイド',
      activities: 'アクティビティ',
      flights: '航空券',
      otherMeals: 'その他の食事',
      personalExpenses: '個人的な支出',
      travelInsurance: '旅行保険',
      reviewsCount: 'レビュー',
      back: '戻る',
      requiredField: '必須フィールド',
      invalidEmail: '無効なメールフォーマット',
      invalidPhone: '無効な電話番号フォーマット',
      invalidCard: '無効なカード番号',
      invalidDate: '無効な日付',
      invalidCVV: '無効なCVVコード',
      termsRequired: '利用規約に同意する必要があります',
      backToTours: 'ツアー一覧に戻る',
      backToServices: 'サービス一覧に戻る',
      bookingTitle: '予約',
      youSelected: '選択したツアー',
      serviceSelected: '選択したサービス',
      modifySelection: '選択を変更',
      continueToPayment: '支払いに進む',
      yourBooking: 'ご予約',
      price: '価格',
      selectedOptions: '選択したオプション',
      basePrice: '基本料金',
      extras: '追加オプション'
    }
  };

  const t = translations[currentLang];

  // Примерные включенные и исключенные пункты
  const included = isBookingService ?
    (bookingItem.includes?.[currentLang] || ['guide', 'activities', 'transportation']) :
    ['accommodation', 'transportation', 'guidedTours', 'breakfasts', 'entranceFees'];

  const excluded = isBookingService ?
    [] : // Для услуг не показываем исключенные пункты
    ['flights', 'otherMeals', 'personalExpenses', 'travelInsurance'];

  // Обработчики
  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    } else {
      // Если последний шаг, отправляем данные бронирования
      const bookingData = {
        tour: isBookingTour ? selectedTour : null,
        service: isBookingService ? selectedService : null,
        participants,
        contactInfo,
        paymentInfo,
        totalPrice: calculateTotal(),
        bookingId: `HT-${Date.now().toString().substr(-8)}`,
        currency: currentCurrency
      };
      saveBooking(bookingData);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    } else {
      if (isBookingTour) {
        navigateTo('tours');
      } else if (isBookingService) {
        navigateTo('services');
      } else {
        navigateTo('tours');
      }
    }
  };

  // Валидация данных
  const validateContactInfo = () => {
    const errors = {};
    if (!contactInfo.firstName) errors.firstName = t.requiredField;
    if (!contactInfo.lastName) errors.lastName = t.requiredField;
    if (!contactInfo.email) errors.email = t.requiredField;
    else if (!/\S+@\S+\.\S+/.test(contactInfo.email)) errors.email = t.invalidEmail;
    if (!contactInfo.phone) errors.phone = t.requiredField;
    return errors;
  };

  const validatePaymentInfo = () => {
    const errors = {};
    if (!paymentInfo.cardNumber) errors.cardNumber = t.requiredField;
    else if (!/^\d{16}$/.test(paymentInfo.cardNumber.replace(/\s/g, ''))) errors.cardNumber = t.invalidCard;
    if (!paymentInfo.cardholderName) errors.cardholderName = t.requiredField;
    if (!paymentInfo.expiryDate) errors.expiryDate = t.requiredField;
    else if (!/^\d{2}\/\d{2}$/.test(paymentInfo.expiryDate)) errors.expiryDate = t.invalidDate;
    if (!paymentInfo.cvv) errors.cvv = t.requiredField;
    else if (!/^\d{3,4}$/.test(paymentInfo.cvv)) errors.cvv = t.invalidCVV;
    if (!paymentInfo.acceptTerms) errors.acceptTerms = t.termsRequired;
    return errors;
  };

  // Функция для проверки, можно ли перейти на следующий шаг
  const canProceed = () => {
    if (currentStep === 2) {
      const errors = validateContactInfo();
      return Object.keys(errors).length === 0;
    }
    if (currentStep === 3) {
      const errors = validatePaymentInfo();
      return Object.keys(errors).length === 0;
    }
    return true;
  };

  // Расчет общей стоимости с конвертацией валют
  const calculateTotal = () => {
    let basePrice;

    if (isBookingService) {
      // Для услуг используем цену выбранного варианта или базовую цену
      if (bookingItem.selectedOption) {
        basePrice = bookingItem.selectedOption.price;
      } else {
        basePrice = bookingItem.price || 2500;
      }

      // Добавляем стоимость дополнительных услуг
      if (bookingItem.selectedExtras && bookingItem.selectedExtras.length > 0) {
        const extrasPrice = bookingItem.selectedExtras.reduce((sum, extra) => sum + extra.price, 0);
        basePrice += extrasPrice;
      }
    } else {
      // Для туров используем старую логику
      basePrice = bookingItem.price || 2500;

      if (bookingItem.selectedOptions && bookingItem.selectedOptions.length > 0) {
        const optionsPrice = bookingItem.selectedOptions.reduce((sum, option) => sum + option.price, 0);
        basePrice += optionsPrice;
      }
    }

    // Рассчитываем стоимость для участников
    const totalParticipants = participants.adults + (participants.children * 0.7);
    const totalPrice = basePrice * totalParticipants;

    // Конвертируем цену в выбранную валюту
    const convertedPrice = convertPrice(totalPrice, isBookingService ? 'JPY' : 'USD', currentCurrency);
    const tax = Math.round(convertedPrice * 0.1);

    return {
      subtotal: convertedPrice,
      tax,
      total: convertedPrice + tax
    };
  };

  // Обработчики изменения полей
  const handleContactInfoChange = (e) => {
    const { name, value } = e.target;
    setContactInfo(prev => ({ ...prev, [name]: value }));
  };

  const handlePaymentInfoChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setPaymentInfo(prev => ({ ...prev, [name]: newValue }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Bread Crumbs */}
        <div className="flex items-center mb-6 text-sm">
          <a href="#" onClick={() => navigateTo('home')} className="text-gray-500 hover:text-pink-500">{t.menu.home}</a>
          <span className="mx-2 text-gray-400">/</span>
          <a href="#" onClick={() => navigateTo(isBookingService ? 'services' : 'tours')} className="text-gray-500 hover:text-pink-500">
            {isBookingService ? t.menu.services : t.menu.tours}
          </a>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-700">{t.bookingTitle}</span>
        </div>

        {/* Booking Process Steps */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">{t.bookingProcess}</h1>
          <div className="flex flex-wrap justify-between items-center">
            <div className={`flex-1 text-center ${currentStep >= 1 ? 'text-pink-500' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full ${currentStep >= 1 ? 'bg-pink-500' : 'bg-gray-300'} text-white inline-flex items-center justify-center mb-2`}>1</div>
              <div>{t.tourSelection}</div>
            </div>
            <div className="w-full sm:w-auto">
              <div className="hidden sm:block h-1 w-12 bg-gray-300 mx-2"></div>
            </div>
            <div className={`flex-1 text-center ${currentStep >= 2 ? 'text-pink-500' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full ${currentStep >= 2 ? 'bg-pink-500' : 'bg-gray-300'} text-white inline-flex items-center justify-center mb-2`}>2</div>
              <div>{t.contactDetails}</div>
            </div>
            <div className="w-full sm:w-auto">
              <div className="hidden sm:block h-1 w-12 bg-gray-300 mx-2"></div>
            </div>
            <div className={`flex-1 text-center ${currentStep >= 3 ? 'text-pink-500' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full ${currentStep >= 3 ? 'bg-pink-500' : 'bg-gray-300'} text-white inline-flex items-center justify-center mb-2`}>3</div>
              <div>{t.payment}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              {/* Step 1: Tour/Service Selection (Review) */}
              {currentStep === 1 && (
                <>
                  <h2 className="text-xl font-bold text-gray-800 mb-4">
                    {isBookingService ? t.serviceSelected : t.youSelected}
                  </h2>
                  <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="md:w-1/3">
                      <img
                        src={isBookingService ?
                          (bookingItem.image || 'https://source.unsplash.com/featured/?japan,service') :
                          (bookingItem.image || 'https://source.unsplash.com/featured/?tokyo,japan')
                        }
                        alt={isBookingService ?
                          (getLocalizedValue(bookingItem.title, currentLang) || getLocalizedValue(bookingItem.name, currentLang) || 'Service') :
                          (getLocalizedValue(bookingItem.title, currentLang) || 'Tour')
                        }
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-lg font-bold mb-2">
                        {isBookingService ?
                          (getLocalizedValue(bookingItem.title, currentLang) || getLocalizedValue(bookingItem.name, currentLang) || 'Service') :
                          (getLocalizedValue(bookingItem.title, currentLang) || 'Tour')
                        }
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="w-5 h-5 mr-2 text-pink-500" />
                          <div>
                            <div className="text-sm text-gray-500">{t.duration}</div>
                            <div>
                              {isBookingService ?
                                `${bookingItem.duration || '2-3 hours'}` :
                                `${bookingItem.duration || 7} ${t.days}`
                              }
                            </div>
                          </div>
                        </div>

                        {!isBookingService && (
                          <div className="flex items-center text-gray-600">
                            <Users className="w-5 h-5 mr-2 text-pink-500" />
                            <div>
                              <div className="text-sm text-gray-500">{t.groupSize}</div>
                              <div>
                                {bookingItem.groupSizeMin || 8}-{bookingItem.groupSizeMax || 15} {t.people}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Selected Options Display для туров */}
                      {!isBookingService && bookingItem.selectedOptions && bookingItem.selectedOptions.length > 0 && (
                        <div className="mb-4">
                          <h4 className="font-medium text-gray-800 mb-2">{t.selectedOptions}</h4>
                          <div className="space-y-2">
                            {bookingItem.selectedOptions.map((option, index) => {
                              const convertedOptionPrice = convertPrice(option.price, 'USD', currentCurrency);
                              const formattedOptionPrice = formatPrice(convertedOptionPrice, currentCurrency);

                              return (
                                <div key={index} className="flex justify-between items-center text-sm bg-gray-50 p-2 rounded">
                                  <span className="text-gray-700">{option.name[currentLang]}</span>
                                  <span className="font-medium text-pink-600">+{formattedOptionPrice}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Selected Service Options для услуг */}
                      {isBookingService && bookingItem.selectedOption && (
                        <div className="mb-4">
                          <h4 className="font-medium text-gray-800 mb-2">{t.selectedOptions}</h4>
                          <div className="bg-gray-50 p-2 rounded">
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-gray-700">{bookingItem.selectedOption.name[currentLang]}</span>
                              <span className="font-medium text-pink-600">
                                {formatPrice(convertPrice(bookingItem.selectedOption.price, 'JPY', currentCurrency), currentCurrency)}
                              </span>
                            </div>
                            {bookingItem.selectedOption.description && (
                              <div className="text-xs text-gray-500 mt-1">{bookingItem.selectedOption.description[currentLang]}</div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Selected Extras для услуг */}
                      {isBookingService && bookingItem.selectedExtras && bookingItem.selectedExtras.length > 0 && (
                        <div className="mb-4">
                          <h4 className="font-medium text-gray-800 mb-2">{t.extras}</h4>
                          <div className="space-y-2">
                            {bookingItem.selectedExtras.map((extra, index) => {
                              const convertedExtraPrice = convertPrice(extra.price, 'JPY', currentCurrency);
                              const formattedExtraPrice = formatPrice(convertedExtraPrice, currentCurrency);

                              return (
                                <div key={index} className="flex justify-between items-center text-sm bg-gray-50 p-2 rounded">
                                  <span className="text-gray-700">{extra.name[currentLang]}</span>
                                  <span className="font-medium text-pink-600">+{formattedExtraPrice}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {!isBookingService && (
                        <div className="flex items-center">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(bookingItem.rating || 4.8) ? 'text-yellow-500' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                          <span className="ml-1 text-gray-600">{bookingItem.rating || 4.8}</span>
                          <span className="mx-1 text-gray-400">·</span>
                          <span className="text-gray-600">{bookingItem.reviewCount || 24} {t.reviewsCount}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">{t.participants}</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">{t.adults}</label>
                        <div className="flex">
                          <button
                            className="bg-gray-200 rounded-l px-4 py-2"
                            onClick={() => setParticipants({...participants, adults: Math.max(1, participants.adults - 1)})}
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={participants.adults}
                            onChange={(e) => setParticipants({...participants, adults: Math.max(1, parseInt(e.target.value) || 0)})}
                            className="w-full border-y border-gray-300 text-center py-2"
                            min="1"
                          />
                          <button
                            className="bg-gray-200 rounded-r px-4 py-2"
                            onClick={() => setParticipants({...participants, adults: participants.adults + 1})}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">{t.children}</label>
                        <div className="flex">
                          <button
                            className="bg-gray-200 rounded-l px-4 py-2"
                            onClick={() => setParticipants({...participants, children: Math.max(0, participants.children - 1)})}
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={participants.children}
                            onChange={(e) => setParticipants({...participants, children: Math.max(0, parseInt(e.target.value) || 0)})}
                            className="w-full border-y border-gray-300 text-center py-2"
                            min="0"
                          />
                          <button
                            className="bg-gray-200 rounded-r px-4 py-2"
                            onClick={() => setParticipants({...participants, children: participants.children + 1})}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Step 2: Contact Information */}
              {currentStep === 2 && (
                <>
                  <h2 className="text-xl font-bold text-gray-800 mb-4">{t.contactDetails}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">{t.firstName} *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={contactInfo.firstName}
                        onChange={handleContactInfoChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        required
                      />
                      {validateContactInfo().lastName && (
                        <p className="text-red-500 text-sm mt-1">{validateContactInfo().lastName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">{t.email} *</label>
                      <input
                        type="email"
                        name="email"
                        value={contactInfo.email}
                        onChange={handleContactInfoChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        required
                      />
                      {validateContactInfo().email && (
                        <p className="text-red-500 text-sm mt-1">{validateContactInfo().email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">{t.phone} *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={contactInfo.phone}
                        onChange={handleContactInfoChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        required
                      />
                      {validateContactInfo().phone && (
                        <p className="text-red-500 text-sm mt-1">{validateContactInfo().phone}</p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-medium mb-2">{t.specialRequests}</label>
                      <textarea
                        name="specialRequests"
                        value={contactInfo.specialRequests}
                        onChange={handleContactInfoChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                </>
              )}

              {/* Step 3: Payment */}
              {currentStep === 3 && (
                <>
                  <h2 className="text-xl font-bold text-gray-800 mb-4">{t.paymentDetails}</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">{t.cardNumber} *</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={paymentInfo.cardNumber}
                        onChange={handlePaymentInfoChange}
                        placeholder="1234 5678 9012 3456"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        required
                      />
                      {validatePaymentInfo().cardNumber && (
                        <p className="text-red-500 text-sm mt-1">{validatePaymentInfo().cardNumber}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">{t.cardholderName} *</label>
                      <input
                        type="text"
                        name="cardholderName"
                        value={paymentInfo.cardholderName}
                        onChange={handlePaymentInfoChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        required
                      />
                      {validatePaymentInfo().cardholderName && (
                        <p className="text-red-500 text-sm mt-1">{validatePaymentInfo().cardholderName}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">{t.expiryDate} *</label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={paymentInfo.expiryDate}
                          onChange={handlePaymentInfoChange}
                          placeholder="MM/YY"
                          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                          required
                        />
                        {validatePaymentInfo().expiryDate && (
                          <p className="text-red-500 text-sm mt-1">{validatePaymentInfo().expiryDate}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">{t.cvv} *</label>
                        <input
                          type="text"
                          name="cvv"
                          value={paymentInfo.cvv}
                          onChange={handlePaymentInfoChange}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                          required
                        />
                        {validatePaymentInfo().cvv && (
                          <p className="text-red-500 text-sm mt-1">{validatePaymentInfo().cvv}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="saveCard"
                          checked={paymentInfo.saveCard}
                          onChange={handlePaymentInfoChange}
                          className="rounded border-gray-300 text-pink-500 focus:ring-pink-500 mr-2"
                        />
                        <span className="text-gray-700">{t.saveCard}</span>
                      </label>
                    </div>

                    <div>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="acceptTerms"
                          checked={paymentInfo.acceptTerms}
                          onChange={handlePaymentInfoChange}
                          className="rounded border-gray-300 text-pink-500 focus:ring-pink-500 mr-2"
                          required
                        />
                        <span className="text-gray-700">{t.acceptTerms}</span>
                      </label>
                      {validatePaymentInfo().acceptTerms && (
                        <p className="text-red-500 text-sm mt-1">{validatePaymentInfo().acceptTerms}</p>
                      )}
                    </div>
                  </div>
                </>
              )}

              <div className="flex justify-between mt-8">
                <button
                  onClick={handlePreviousStep}
                  className="flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 text-gray-700"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t.previous}
                </button>
                <button
                  onClick={handleNextStep}
                  className={`flex items-center px-6 py-2 rounded-md bg-pink-500 hover:bg-pink-600 text-white ${!canProceed() ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={!canProceed()}
                >
                  {currentStep === 3 ? t.payNow : t.next}
                  {currentStep < 3 && <ArrowRight className="w-4 h-4 ml-2" />}
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar - Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{t.yourBooking}</h2>

              <div className="mb-4">
                <img
                  src={bookingItem.image || (isBookingService ?
                    'https://source.unsplash.com/featured/?japan,service' :
                    'https://source.unsplash.com/featured/?tokyo,japan')
                  }
                  alt={isBookingService ?
                    (getLocalizedValue(bookingItem.title, currentLang) || getLocalizedValue(bookingItem.name, currentLang) || 'Service') :
                    (getLocalizedValue(bookingItem.title, currentLang) || 'Tour')
                  }
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-bold mb-2">
                  {isBookingService ?
                    (getLocalizedValue(bookingItem.title, currentLang) || getLocalizedValue(bookingItem.name, currentLang) || 'Service') :
                    (getLocalizedValue(bookingItem.title, currentLang) || 'Tour')
                  }
                </h3>

                {!isBookingService && (
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(bookingItem.rating || 4.8) ? 'text-yellow-500' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="ml-1 text-gray-600">{bookingItem.rating || 4.8}</span>
                    <span className="mx-1 text-gray-400">·</span>
                    <span className="text-gray-600">{bookingItem.reviewCount || 24} {t.reviewsCount}</span>
                  </div>
                )}

                <div className="flex justify-between mb-1">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>
                      {isBookingService ?
                        (bookingItem.duration || '2-3 hours') :
                        `${bookingItem.duration} ${t.days}`
                      }
                    </span>
                  </div>
                  {!isBookingService && (
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{bookingItem.groupSizeMin || 8}-{bookingItem.groupSizeMax || 15}</span>
                    </div>
                  )}
                </div>

                {participants && (currentStep > 1) && (
                  <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-700">{t.participants}</p>
                    <p className="text-gray-900">{participants.adults} {t.adults}, {participants.children} {t.children}</p>
                  </div>
                )}
              </div>

              {/* Pricing breakdown */}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <h3 className="font-bold text-gray-800 mb-2">{t.bookingSummary}</h3>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t.basePrice}</span>
                    <span className="font-medium">
                      {isBookingService ?
                        (bookingItem.selectedOption ?
                          formatPrice(convertPrice(bookingItem.selectedOption.price, 'JPY', currentCurrency), currentCurrency) :
                          formatPrice(convertPrice(bookingItem.price || 2500, 'JPY', currentCurrency), currentCurrency)
                        ) :
                        formatPrice(convertPrice(bookingItem.price || 2500, 'USD', currentCurrency), currentCurrency)
                      }
                    </span>
                  </div>

                  {/* Показываем выбранные дополнительные услуги для сервисов */}
                  {isBookingService && bookingItem.selectedExtras && bookingItem.selectedExtras.length > 0 && (
                    <>
                      {bookingItem.selectedExtras.map((extra, index) => {
                        const convertedExtraPrice = convertPrice(extra.price, 'JPY', currentCurrency);
                        const formattedExtraPrice = formatPrice(convertedExtraPrice, currentCurrency);

                        return (
                          <div key={index} className="flex justify-between text-sm">
                            <span className="text-gray-600">{extra.name[currentLang]}</span>
                            <span className="font-medium">+{formattedExtraPrice}</span>
                          </div>
                        );
                      })}
                    </>
                  )}

                  {bookingItem.selectedOptions && bookingItem.selectedOptions.length > 0 && (
                    <>
                      {bookingItem.selectedOptions.map((option, index) => {
                        const convertedOptionPrice = convertPrice(option.price, 'USD', currentCurrency);
                        const formattedOptionPrice = formatPrice(convertedOptionPrice, currentCurrency);

                        return (
                          <div key={index} className="flex justify-between text-sm">
                            <span className="text-gray-600">{option.name[currentLang]}</span>
                            <span className="font-medium">+{formattedOptionPrice}</span>
                          </div>
                        );
                      })}
                    </>
                  )}

                  <div className="flex justify-between">
                    <span className="text-gray-600">{t.subtotal}</span>
                    <span className="font-medium">{formatPrice(calculateTotal().subtotal, currentCurrency)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t.tax} (10%)</span>
                    <span className="font-medium">{formatPrice(calculateTotal().tax, currentCurrency)}</span>
                  </div>
                </div>

                <div className="flex justify-between border-t border-gray-200 pt-2 font-bold">
                  <span>{t.total}</span>
                  <span className="text-pink-600">{formatPrice(calculateTotal().total, currentCurrency)}</span>
                </div>
              </div>

              {isBookingService ? (
                // Для услуг показываем что реально включено из данных услуги
                bookingItem.includes && bookingItem.includes[currentLang] && (
                  <div className="mt-6">
                    <h3 className="font-bold text-gray-800 mb-2">{t.included}</h3>
                    <ul className="space-y-1">
                      {bookingItem.includes[currentLang].map((item, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              ) : (
                // Для туров показываем стандартные включено/исключено
                <div className="mt-6">
                  <h3 className="font-bold text-gray-800 mb-2">{t.included}</h3>
                  <ul className="space-y-1 mb-4">
                    {included.map((item, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        <span>{t[item]}</span>
                      </li>
                    ))}
                  </ul>

                  {excluded.length > 0 && (
                    <>
                      <h3 className="font-bold text-gray-800 mb-2">{t.excluded}</h3>
                      <ul className="space-y-1">
                        {excluded.map((item, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <span className="text-red-500 mr-2">✗</span>
                            <span>{t[item]}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;