import React from 'react';
import { 
  CheckCircle, 
  Download, 
  Calendar, 
  Users, 
  CreditCard, 
  Mail, 
  Phone, 
  ArrowLeft
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';

function BookingConfirmationPage({ currentLang, setCurrentLang, navigateTo, bookingData }) {
  const { formatPrice, currentCurrency } = useAppContext();

  // Если данные бронирования не переданы, используем временные данные
  const defaultBookingData = {
    tour: {
      id: 1,
      title: 'Classic Japan',
      image: 'https://source.unsplash.com/featured/?tokyo,japan',
      price: 2500,
      duration: 7,
      groupSize: 12
    },
    date: { date: '2025-05-15', price: 2500 },
    participants: { adults: 2, children: 0 },
    contactInfo: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '+1 234-567-8901'
    },
    totalPrice: {
      subtotal: 5000,
      tax: 500,
      total: 5500
    },
    bookingId: 'HT-20250123',
    currency: currentCurrency || 'USD'
  };

  const booking = bookingData || defaultBookingData;
  const isBookingTour = !!booking.tour;
  const isBookingService = !!booking.service;

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
      thankYou: 'Спасибо за ваше бронирование!',
      bookingConfirmed: 'Ваше бронирование подтверждено',
      bookingDetails: 'Детали бронирования отправлены на вашу электронную почту. Наш менеджер свяжется с вами в ближайшее время для уточнения деталей.',
      bookingReference: 'Номер бронирования',
      downloadVoucher: 'Скачать ваучер',
      backToHome: 'Вернуться на главную',
      tourDetails: 'Детали тура',
      serviceDetails: 'Детали услуги',
      tourName: 'Название тура',
      serviceName: 'Название услуги',
      departureDate: 'Дата отправления',
      serviceDate: 'Дата услуги',
      duration: 'Длительность',
      days: 'дней',
      hours: 'часов',
      participants: 'Участники',
      adults: 'Взрослые',
      children: 'Дети',
      contactDetails: 'Контактные данные',
      fullName: 'Полное имя',
      email: 'Email',
      phone: 'Телефон',
      paymentDetails: 'Детали оплаты',
      paymentMethod: 'Способ оплаты',
      creditCard: 'Кредитная карта',
      subtotal: 'Подытог',
      tax: 'Налог',
      total: 'Всего',
      currency: 'Валюта'
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
      thankYou: 'Thank You for Your Booking!',
      bookingConfirmed: 'Your booking is confirmed',
      bookingDetails: 'Your booking details have been sent to your email. Our manager will contact you shortly to confirm the details.',
      bookingReference: 'Booking Reference',
      downloadVoucher: 'Download Voucher',
      backToHome: 'Back to Home',
      tourDetails: 'Tour Details',
      serviceDetails: 'Service Details',
      tourName: 'Tour Name',
      serviceName: 'Service Name',
      departureDate: 'Departure Date',
      serviceDate: 'Service Date',
      duration: 'Duration',
      days: 'days',
      hours: 'hours',
      participants: 'Participants',
      adults: 'Adults',
      children: 'Children',
      contactDetails: 'Contact Details',
      fullName: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      paymentDetails: 'Payment Details',
      paymentMethod: 'Payment Method',
      creditCard: 'Credit Card',
      subtotal: 'Subtotal',
      tax: 'Tax',
      total: 'Total',
      currency: 'Currency'
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
      thankYou: 'ご予約ありがとうございます！',
      bookingConfirmed: 'ご予約が確定しました',
      bookingDetails: '予約詳細はメールで送信されました。詳細確認のため、マネージャーが間もなくご連絡いたします。',
      bookingReference: '予約番号',
      downloadVoucher: 'バウチャーをダウンロード',
      backToHome: 'ホームに戻る',
      tourDetails: 'ツアー詳細',
      serviceDetails: 'サービス詳細',
      tourName: 'ツアー名',
      serviceName: 'サービス名',
      departureDate: '出発日',
      serviceDate: 'サービス日',
      duration: '期間',
      days: '日間',
      hours: '時間',
      participants: '参加者',
      adults: '大人',
      children: '子供',
      contactDetails: '連絡先',
      fullName: '氏名',
      email: 'メールアドレス',
      phone: '電話番号',
      paymentDetails: 'お支払い詳細',
      paymentMethod: '支払い方法',
      creditCard: 'クレジットカード',
      subtotal: '小計',
      tax: '税金',
      total: '合計',
      currency: '通貨'
    }
  };

  const t = translations[currentLang];

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

  // Получаем основной элемент бронирования (тур или услугу)
  const bookingItem = booking.tour || booking.service;

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
          <span className="text-gray-700">{booking.bookingId}</span>
        </div>

        {/* Confirmation Content */}
        <div className="max-w-4xl mx-auto">
          {/* Success Message */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8 text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{t.thankYou}</h1>
            <p className="text-xl font-medium text-gray-700 mb-4">{t.bookingConfirmed}</p>
            <div className="bg-gray-50 rounded-lg p-4 inline-block mb-6">
              <p className="font-medium text-gray-700">{t.bookingReference}</p>
              <p className="text-2xl font-bold text-gray-900">{booking.bookingId}</p>
            </div>
            <p className="text-gray-600 mb-6">{t.bookingDetails}</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="flex items-center justify-center px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-md">
                <Download className="w-5 h-5 mr-2" />
                {t.downloadVoucher}
              </button>
              <button
                onClick={() => navigateTo('home')}
                className="flex items-center justify-center px-6 py-3 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-md"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                {t.backToHome}
              </button>
            </div>
          </div>

          {/* Booking Details */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
              {isBookingService ? t.serviceDetails : t.tourDetails}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
              <div className="md:col-span-1">
                <img
                  src={bookingItem?.image || 'https://source.unsplash.com/featured/?tokyo,japan'}
                  alt={bookingItem?.title || bookingItem?.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="md:col-span-2">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">{isBookingService ? t.serviceName : t.tourName}</p>
                    <p className="font-bold text-lg text-gray-900">
                      {isBookingTour ?
                        (bookingItem?.title?.[currentLang] || bookingItem?.title || 'Tour') :
                        (bookingItem?.title?.[currentLang] || bookingItem?.name?.[currentLang] || 'Service')
                      }
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">{isBookingService ? t.serviceDate : t.departureDate}</p>
                      <p className="font-medium">{booking.date ? formatDate(booking.date.date) : 'TBD'}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{t.duration}</p>
                      <p className="font-medium">
                        {isBookingTour ?
                          `${bookingItem?.duration || 7} ${t.days}` :
                          `${bookingItem?.duration || '2-3 hours'}`
                        }
                      </p>
                    </div>
                    {booking.participants && (
                      <div>
                        <p className="text-sm text-gray-500">{t.participants}</p>
                        <p className="font-medium">
                          {booking.participants.adults} {t.adults}, {booking.participants.children} {t.children}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Details */}
              <div>
                <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-pink-500" />
                  {t.contactDetails}
                </h3>
                <div className="space-y-3">
                  <div className="flex">
                    <span className="w-24 text-gray-500">{t.fullName}:</span>
                    <span className="font-medium">
                      {booking.contactInfo?.firstName} {booking.contactInfo?.lastName}
                    </span>
                  </div>
                  <div className="flex">
                    <span className="w-24 text-gray-500">{t.email}:</span>
                    <span className="font-medium">{booking.contactInfo?.email}</span>
                  </div>
                  <div className="flex">
                    <span className="w-24 text-gray-500">{t.phone}:</span>
                    <span className="font-medium">{booking.contactInfo?.phone}</span>
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              <div>
                <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-pink-500" />
                  {t.paymentDetails}
                </h3>
                <div className="space-y-3">
                  <div className="flex">
                    <span className="w-32 text-gray-500">{t.paymentMethod}:</span>
                    <span className="font-medium">{t.creditCard}</span>
                  </div>
                  <div className="flex">
                    <span className="w-32 text-gray-500">{t.currency}:</span>
                    <span className="font-medium">{booking.currency || currentCurrency}</span>
                  </div>
                  <div className="flex">
                    <span className="w-32 text-gray-500">{t.subtotal}:</span>
                    <span className="font-medium">
                      {formatPrice(booking.totalPrice?.subtotal || booking.totalPrice?.total || 0, booking.currency || currentCurrency)}
                    </span>
                  </div>
                  {booking.totalPrice?.tax && (
                    <div className="flex">
                      <span className="w-32 text-gray-500">{t.tax}:</span>
                      <span className="font-medium">
                        {formatPrice(booking.totalPrice.tax, booking.currency || currentCurrency)}
                      </span>
                    </div>
                  )}
                  <div className="flex border-t border-gray-200 pt-2">
                    <span className="w-32 text-gray-500 font-bold">{t.total}:</span>
                    <span className="font-bold text-pink-600">
                      {formatPrice(booking.totalPrice?.total || booking.totalPrice || 0, booking.currency || currentCurrency)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingConfirmationPage;