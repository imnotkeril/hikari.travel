import React, { useState } from 'react';
import { 
  Users, Calendar, Map, Globe, DollarSign, Settings, 
  Menu, X, Bell, Search, Filter, Download, Eye, Edit, 
  Trash2, Check, ArrowUp, ArrowDown, MessageCircle, 
  Phone, Mail, ChevronDown
} from 'lucide-react';

function AdminPage({ currentLang, setCurrentLang, navigateTo, userData, handleLogout, isLoggedIn }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('bookings');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [sort, setSort] = useState({ field: 'date', direction: 'desc' });
  
  // Переадресация на страницу входа, если пользователь не авторизован
  if (!isLoggedIn) {
    navigateTo('login');
    return null;
  }
  
  // Переводы
  const translations = {
    ru: {
      dashboard: 'Панель управления',
      bookings: 'Бронирования',
      tours: 'Туры',
      customers: 'Клиенты',
      reports: 'Отчеты',
      settings: 'Настройки',
      searchPlaceholder: 'Поиск...',
      notifications: 'Уведомления',
      allBookings: 'Все бронирования',
      newBookings: 'Новые бронирования',
      upcoming: 'Предстоящие',
      past: 'Прошедшие',
      cancelled: 'Отмененные',
      id: 'ID',
      customer: 'Клиент',
      tour: 'Тур',
      date: 'Дата',
      participants: 'Участники',
      total: 'Сумма',
      status: 'Статус',
      actions: 'Действия',
      export: 'Экспорт',
      filter: 'Фильтр',
      viewDetails: 'Просмотр деталей',
      edit: 'Редактировать',
      delete: 'Удалить',
      bookingDetails: 'Детали бронирования',
      close: 'Закрыть',
      contactInfo: 'Контактная информация',
      paymentInfo: 'Информация об оплате',
      fullName: 'Полное имя',
      email: 'Email',
      phone: 'Телефон',
      tourName: 'Название тура',
      tourGuide: 'Гид',
      departureDate: 'Дата отправления',
      bookingDate: 'Дата бронирования',
      adultsCount: 'Количество взрослых',
      childrenCount: 'Количество детей',
      notes: 'Примечания',
      statusPending: 'Ожидание',
      statusConfirmed: 'Подтверждено',
      statusCompleted: 'Завершено',
      statusCancelled: 'Отменено',
      subtotal: 'Подытог',
      tax: 'Налог',
      deposit: 'Депозит',
      remaining: 'Остаток',
      paid: 'Оплачено',
      sendMessage: 'Отправить сообщение',
      callCustomer: 'Позвонить клиенту',
      emailCustomer: 'Написать клиенту',
      markAsConfirmed: 'Отметить как подтвержденное',
      markAsCancelled: 'Отметить как отмененное',
      sortBy: 'Сортировать по',
      noBookingsFound: 'Бронирования не найдены',
      filterBy: 'Фильтровать по',
      applyFilter: 'Применить фильтр',
      resetFilter: 'Сбросить фильтр',
      dateRange: 'Диапазон дат',
      from: 'От',
      to: 'До',
      startDate: 'Начальная дата',
      endDate: 'Конечная дата',
      priceRange: 'Диапазон цен',
      minPrice: 'Мин. цена',
      maxPrice: 'Макс. цена',
      downloadPDF: 'Скачать PDF',
      printDetails: 'Распечатать детали',
      sendConfirmation: 'Отправить подтверждение',
      lastUpdated: 'Последнее обновление',
      results: 'результатов',
      showing: 'Показано',
      of: 'из',
      itemsPerPage: 'Элементов на странице',
      page: 'Страница',
      paymentMethod: 'Способ оплаты',
      paymentStatus: 'Статус оплаты',
      creditCard: 'Кредитная карта',
      bankTransfer: 'Банковский перевод',
      fullyPaid: 'Полностью оплачено',
      partiallyPaid: 'Частично оплачено',
      notPaid: 'Не оплачено',
      logout: 'Выйти',
      hi: 'Привет',
      admin: 'Администратор',
      adults: 'взрослых',
      children: 'детей'
    },
    en: {
      dashboard: 'Dashboard',
      bookings: 'Bookings',
      tours: 'Tours',
      customers: 'Customers',
      reports: 'Reports',
      settings: 'Settings',
      searchPlaceholder: 'Search...',
      notifications: 'Notifications',
      allBookings: 'All Bookings',
      newBookings: 'New Bookings',
      upcoming: 'Upcoming',
      past: 'Past',
      cancelled: 'Cancelled',
      id: 'ID',
      customer: 'Customer',
      tour: 'Tour',
      date: 'Date',
      participants: 'Participants',
      total: 'Total',
      status: 'Status',
      actions: 'Actions',
      export: 'Export',
      filter: 'Filter',
      viewDetails: 'View Details',
      edit: 'Edit',
      delete: 'Delete',
      bookingDetails: 'Booking Details',
      close: 'Close',
      contactInfo: 'Contact Information',
      paymentInfo: 'Payment Information',
      fullName: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      tourName: 'Tour Name',
      tourGuide: 'Tour Guide',
      departureDate: 'Departure Date',
      bookingDate: 'Booking Date',
      adultsCount: 'Adults Count',
      childrenCount: 'Children Count',
      notes: 'Notes',
      statusPending: 'Pending',
      statusConfirmed: 'Confirmed',
      statusCompleted: 'Completed',
      statusCancelled: 'Cancelled',
      subtotal: 'Subtotal',
      tax: 'Tax',
      deposit: 'Deposit',
      remaining: 'Remaining',
      paid: 'Paid',
      sendMessage: 'Send Message',
      callCustomer: 'Call Customer',
      emailCustomer: 'Email Customer',
      markAsConfirmed: 'Mark as Confirmed',
      markAsCancelled: 'Mark as Cancelled',
      sortBy: 'Sort by',
      noBookingsFound: 'No bookings found',
      filterBy: 'Filter by',
      applyFilter: 'Apply Filter',
      resetFilter: 'Reset Filter',
      dateRange: 'Date Range',
      from: 'From',
      to: 'To',
      startDate: 'Start Date',
      endDate: 'End Date',
      priceRange: 'Price Range',
      minPrice: 'Min Price',
      maxPrice: 'Max Price',
      downloadPDF: 'Download PDF',
      printDetails: 'Print Details',
      sendConfirmation: 'Send Confirmation',
      lastUpdated: 'Last Updated',
      results: 'results',
      showing: 'Showing',
      of: 'of',
      itemsPerPage: 'Items per page',
      page: 'Page',
      paymentMethod: 'Payment Method',
      paymentStatus: 'Payment Status',
      creditCard: 'Credit Card',
      bankTransfer: 'Bank Transfer',
      fullyPaid: 'Fully Paid',
      partiallyPaid: 'Partially Paid',
      notPaid: 'Not Paid',
      logout: 'Log Out',
      hi: 'Hi',
      admin: 'Admin',
      adults: 'adults',
      children: 'children'
    },
    ja: {
      dashboard: 'ダッシュボード',
      bookings: '予約',
      tours: 'ツアー',
      customers: '顧客',
      reports: 'レポート',
      settings: '設定',
      searchPlaceholder: '検索...',
      notifications: '通知',
      allBookings: 'すべての予約',
      newBookings: '新規予約',
      upcoming: '今後の予約',
      past: '過去の予約',
      cancelled: 'キャンセル済み',
      id: 'ID',
      customer: '顧客',
      tour: 'ツアー',
      date: '日付',
      participants: '参加者',
      total: '合計',
      status: 'ステータス',
      actions: 'アクション',
      export: 'エクスポート',
      filter: 'フィルター',
      viewDetails: '詳細を表示',
      edit: '編集',
      delete: '削除',
      bookingDetails: '予約詳細',
      close: '閉じる',
      contactInfo: '連絡先情報',
      paymentInfo: '支払い情報',
      fullName: '氏名',
      email: 'メールアドレス',
      phone: '電話番号',
      tourName: 'ツアー名',
      tourGuide: 'ツアーガイド',
      departureDate: '出発日',
      bookingDate: '予約日',
      adultsCount: '大人の数',
      childrenCount: '子供の数',
      notes: 'メモ',
      statusPending: '保留中',
      statusConfirmed: '確認済み',
      statusCompleted: '完了',
      statusCancelled: 'キャンセル',
      subtotal: '小計',
      tax: '税金',
      deposit: '頭金',
      remaining: '残額',
      paid: '支払済み',
      sendMessage: 'メッセージを送信',
      callCustomer: '顧客に電話',
      emailCustomer: '顧客にメール',
      markAsConfirmed: '確認済みとしてマーク',
      markAsCancelled: 'キャンセル済みとしてマーク',
      sortBy: '並び替え',
      noBookingsFound: '予約が見つかりません',
      filterBy: 'フィルタ条件',
      applyFilter: 'フィルタを適用',
      resetFilter: 'フィルタをリセット',
      dateRange: '日付範囲',
      from: '開始',
      to: '終了',
      startDate: '開始日',
      endDate: '終了日',
      priceRange: '価格範囲',
      minPrice: '最低価格',
      maxPrice: '最高価格',
      downloadPDF: 'PDFをダウンロード',
      printDetails: '詳細を印刷',
      sendConfirmation: '確認を送信',
      lastUpdated: '最終更新',
      results: '結果',
      showing: '表示中',
      of: '/',
      itemsPerPage: 'ページあたりの項目',
      page: 'ページ',
      paymentMethod: '支払い方法',
      paymentStatus: '支払い状況',
      creditCard: 'クレジットカード',
      bankTransfer: '銀行振込',
      fullyPaid: '全額支払済み',
      partiallyPaid: '一部支払済み',
      notPaid: '未払い',
      logout: 'ログアウト',
      hi: 'こんにちは',
      admin: '管理者',
      adults: '大人',
      children: '子供'
    }
  };

  const t = translations[currentLang];

  // Примерные данные о бронированиях
  const bookings = [
    {
      id: 'HT-25042301',
      customer: 'Anna Smith',
      customerEmail: 'anna.smith@example.com',
      customerPhone: '+1 202-555-0158',
      tour: 'Classic Japan',
      tourGuide: 'Tanaka Hiroshi',
      date: '2025-05-15',
      bookingDate: '2025-04-20',
      participants: { adults: 2, children: 1 },
      total: 5700,
      subtotal: 5182,
      tax: 518,
      deposit: 1140,
      remaining: 4560,
      status: 'confirmed',
      paymentMethod: 'creditCard',
      paymentStatus: 'partiallyPaid',
      notes: 'Customers requested vegetarian meals. Child is 10 years old.'
    },
    {
      id: 'HT-25042302',
      customer: 'John Doe',
      customerEmail: 'john.doe@example.com',
      customerPhone: '+1 202-555-0187',
      tour: 'Kyoto & Osaka',
      tourGuide: 'Yamamoto Akiko',
      date: '2025-05-22',
      bookingDate: '2025-04-21',
      participants: { adults: 2, children: 0 },
      total: 4400,
      subtotal: 4000,
      tax: 400,
      deposit: 4400,
      remaining: 0,
      status: 'pending',
      paymentMethod: 'bankTransfer',
      paymentStatus: 'fullyPaid',
      notes: 'First time visiting Japan. Interested in traditional culture.'
    },
    {
      id: 'HT-25042303',
      customer: 'Maria Garcia',
      customerEmail: 'maria.garcia@example.com',
      customerPhone: '+1 202-555-0143',
      tour: 'Mt. Fuji Experience',
      tourGuide: 'Suzuki Takashi',
      date: '2025-06-05',
      bookingDate: '2025-04-22',
      participants: { adults: 1, children: 0 },
      total: 1800,
      subtotal: 1636,
      tax: 164,
      deposit: 360,
      remaining: 1440,
      status: 'confirmed',
      paymentMethod: 'creditCard',
      paymentStatus: 'partiallyPaid',
      notes: 'Solo traveler. Requested early check-in if possible.'
    },
    {
      id: 'HT-25042304',
      customer: 'Alex Chen',
      customerEmail: 'alex.chen@example.com',
      customerPhone: '+1 202-555-0192',
      tour: 'Japanese Cuisine',
      tourGuide: 'Nakamura Yuki',
      date: '2025-04-15',
      bookingDate: '2025-03-10',
      participants: { adults: 2, children: 2 },
      total: 6300,
      subtotal: 5727,
      tax: 573,
      deposit: 6300,
      remaining: 0,
      status: 'completed',
      paymentMethod: 'creditCard',
      paymentStatus: 'fullyPaid',
      notes: 'Family with children. Very interested in cooking and food experiences.'
    },
    {
      id: 'HT-25042305',
      customer: 'Elena Petrova',
      customerEmail: 'elena.petrova@example.com',
      customerPhone: '+7 903-123-4567',
      tour: 'Sakura Season',
      tourGuide: 'Not assigned',
      date: '2025-03-28',
      bookingDate: '2025-02-15',
      participants: { adults: 2, children: 0 },
      total: 2700,
      subtotal: 2455,
      tax: 245,
      deposit: 0,
      remaining: 2700,
      status: 'cancelled',
      paymentMethod: 'bankTransfer',
      paymentStatus: 'notPaid',
      notes: 'Cancelled due to personal reasons. Requested refund.'
    }
  ];

  // Функция сортировки
  const sortBookings = (a, b) => {
    if (sort.field === 'date') {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sort.direction === 'asc' ? dateA - dateB : dateB - dateA;
    } else if (sort.field === 'total') {
      return sort.direction === 'asc' ? a.total - b.total : b.total - a.total;
    } else if (sort.field === 'id') {
      return sort.direction === 'asc' ? a.id.localeCompare(b.id) : b.id.localeCompare(a.id);
    } else if (sort.field === 'customer') {
      return sort.direction === 'asc' ? a.customer.localeCompare(b.customer) : b.customer.localeCompare(a.customer);
    } else if (sort.field === 'tour') {
      return sort.direction === 'asc' ? a.tour.localeCompare(b.tour) : b.tour.localeCompare(a.tour);
    }
    return 0;
  };

  // Получение цвета статуса
  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Обработчики
  const handleSort = (field) => {
    if (sort.field === field) {
      setSort({ ...sort, direction: sort.direction === 'asc' ? 'desc' : 'asc' });
    } else {
      setSort({ field, direction: 'asc' });
    }
  };

  const handleViewDetails = (booking) => {
    setSelectedBooking(booking);
    setIsDetailModalOpen(true);
  };

  const handleToggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-300 md:translate-x-0 md:static md:inset-auto md:h-screen" style={{ transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-pink-500">Hikari Travel</h1>
          <button onClick={() => setIsMenuOpen(false)} className="p-1 rounded-md hover:bg-gray-100 md:hidden">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4">
          <nav className="space-y-1">
            <button onClick={() => setActiveTab('dashboard')} className={`flex items-center px-4 py-2 rounded-md w-full ${activeTab === 'dashboard' ? 'bg-pink-100 text-pink-600' : 'hover:bg-gray-100'}`}>
              <div className="w-6 h-6 mr-3 flex items-center justify-center">
                <DollarSign className="w-5 h-5" />
              </div>
              <span>{t.dashboard}</span>
            </button>
            <button onClick={() => setActiveTab('bookings')} className={`flex items-center px-4 py-2 rounded-md w-full ${activeTab === 'bookings' ? 'bg-pink-100 text-pink-600' : 'hover:bg-gray-100'}`}>
              <div className="w-6 h-6 mr-3 flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
              <span>{t.bookings}</span>
            </button>
            <button onClick={() => setActiveTab('tours')} className={`flex items-center px-4 py-2 rounded-md w-full ${activeTab === 'tours' ? 'bg-pink-100 text-pink-600' : 'hover:bg-gray-100'}`}>
              <div className="w-6 h-6 mr-3 flex items-center justify-center">
                <Map className="w-5 h-5" />
              </div>
              <span>{t.tours}</span>
            </button>
            <button onClick={() => setActiveTab('customers')} className={`flex items-center px-4 py-2 rounded-md w-full ${activeTab === 'customers' ? 'bg-pink-100 text-pink-600' : 'hover:bg-gray-100'}`}>
              <div className="w-6 h-6 mr-3 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <span>{t.customers}</span>
            </button>
            <button onClick={() => setActiveTab('reports')} className={`flex items-center px-4 py-2 rounded-md w-full ${activeTab === 'reports' ? 'bg-pink-100 text-pink-600' : 'hover:bg-gray-100'}`}>
              <div className="w-6 h-6 mr-3 flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <span>{t.reports}</span>
            </button>
            <button onClick={() => setActiveTab('settings')} className={`flex items-center px-4 py-2 rounded-md w-full ${activeTab === 'settings' ? 'bg-pink-100 text-pink-600' : 'hover:bg-gray-100'}`}>
              <div className="w-6 h-6 mr-3 flex items-center justify-center">
                <Settings className="w-5 h-5" />
              </div>
              <span>{t.settings}</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 md:ml-64">

        {/* Bookings tab content */}
        {activeTab === 'bookings' && (
          <main className="py-6">
            <div className="px-4 sm:px-6 lg:px-8">
              {/* Filters and actions */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 space-y-4 sm:space-y-0">
                <div className="flex flex-wrap space-x-2">
                  <button className="px-4 py-2 rounded-md bg-pink-500 text-white font-medium hover:bg-pink-600 transition-colors">
                    {t.allBookings}
                  </button>
                  <button className="px-4 py-2 rounded-md bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                    {t.newBookings}
                  </button>
                  <button className="px-4 py-2 rounded-md bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                    {t.upcoming}
                  </button>
                  <button className="px-4 py-2 rounded-md bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                    {t.past}
                  </button>
                  <button className="px-4 py-2 rounded-md bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                    {t.cancelled}
                  </button>
                </div>
                <div className="flex space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input type="text" placeholder={t.searchPlaceholder} className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" />
                  </div>
                  <button onClick={handleToggleFilter} className="flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
                    <Filter className="w-4 h-4 mr-2" />
                    {t.filter}
                  </button>
                  <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
                    <Download className="w-4 h-4 mr-2" />
                    {t.export}
                  </button>
                </div>
              </div>
              
              {/* Filter panel */}
              {isFilterOpen && (
                <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                  <h3 className="text-lg font-medium mb-4">{t.filterBy}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{t.dateRange}</label>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">{t.from}</label>
                          <input type="date" className="w-full border border-gray-300 rounded-md px-3 py-2" />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">{t.to}</label>
                          <input type="date" className="w-full border border-gray-300 rounded-md px-3 py-2" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{t.status}</label>
                      <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                        <option value="">{t.allBookings}</option>
                        <option value="pending">{t.statusPending}</option>
                        <option value="confirmed">{t.statusConfirmed}</option>
                        <option value="completed">{t.statusCompleted}</option>
                        <option value="cancelled">{t.statusCancelled}</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{t.priceRange}</label>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">{t.minPrice}</label>
                          <input type="number" className="w-full border border-gray-300 rounded-md px-3 py-2" />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">{t.maxPrice}</label>
                          <input type="number" className="w-full border border-gray-300 rounded-md px-3 py-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <button className="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
                      {t.resetFilter}
                    </button>
                    <button className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600">
                      {t.applyFilter}
                    </button>
                  </div>
                </div>
              )}
              
              {/* Results info */}
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-gray-500">
                  {t.showing} 1-5 {t.of} 5 {t.results}
                </div>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500 mr-2">{t.itemsPerPage}:</span>
                  <select className="border border-gray-300 rounded-md px-2 py-1 text-sm">
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                    <option>100</option>
                  </select>
                </div>
              </div>
              
              {/* Bookings table */}
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSort('id')}>
                          <div className="flex items-center">
                            {t.id}
                            {sort.field === 'id' && (
                              sort.direction === 'asc' ? 
                              <ArrowUp className="w-4 h-4 ml-1" /> : 
                              <ArrowDown className="w-4 h-4 ml-1" />
                            )}
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSort('customer')}>
                          <div className="flex items-center">
                            {t.customer}
                            {sort.field === 'customer' && (
                              sort.direction === 'asc' ? 
                              <ArrowUp className="w-4 h-4 ml-1" /> : 
                              <ArrowDown className="w-4 h-4 ml-1" />
                            )}
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSort('tour')}>
                          <div className="flex items-center">
                            {t.tour}
                            {sort.field === 'tour' && (
                              sort.direction === 'asc' ? 
                              <ArrowUp className="w-4 h-4 ml-1" /> : 
                              <ArrowDown className="w-4 h-4 ml-1" />
                            )}
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSort('date')}>
                          <div className="flex items-center">
                            {t.date}
                            {sort.field === 'date' && (
                              sort.direction === 'asc' ? 
                              <ArrowUp className="w-4 h-4 ml-1" /> : 
                              <ArrowDown className="w-4 h-4 ml-1" />
                            )}
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {t.participants}
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSort('total')}>
                          <div className="flex items-center">
                            {t.total}
                            {sort.field === 'total' && (
                              sort.direction === 'asc' ? 
                              <ArrowUp className="w-4 h-4 ml-1" /> : 
                              <ArrowDown className="w-4 h-4 ml-1" />
                            )}
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {t.status}
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {t.actions}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {[...bookings].sort(sortBookings).map((booking) => (
                        <tr key={booking.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {booking.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {booking.customer}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {booking.tour}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(booking.date).toLocaleDateString(currentLang === 'ru' ? 'ru-RU' : currentLang === 'ja' ? 'ja-JP' : 'en-US')}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {booking.participants.adults} {t.adults}, {booking.participants.children} {t.children}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            ${booking.total}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(booking.status)}`}>
                              {t[`status${booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}`]}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="flex space-x-2">
                              <button onClick={() => handleViewDetails(booking)} className="text-blue-600 hover:text-blue-800" title={t.viewDetails}>
                                <Eye className="w-5 h-5" />
                              </button>
                              <button className="text-gray-600 hover:text-gray-800" title={t.edit}>
                                <Edit className="w-5 h-5" />
                              </button>
                              <button className="text-red-600 hover:text-red-800" title={t.delete}>
                                <Trash2 className="w-5 h-5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* Pagination */}
              <div className="flex justify-between items-center mt-4">
                <div>
                  <span className="text-sm text-gray-500">{t.page} 1 {t.of} 1</span>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 border border-gray-300 rounded-md bg-white opacity-50 cursor-not-allowed">
                    &laquo;
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded-md bg-pink-500 text-white">
                    1
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded-md bg-white opacity-50 cursor-not-allowed">
                    &raquo;
                  </button>
                </div>
              </div>
            </div>
          </main>
        )}
        
        {/* Other tab placeholders */}
        {activeTab !== 'bookings' && (
          <main className="py-6">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-lg font-medium mb-4">{t[activeTab]} {t.dashboard}</h2>
                <p>{t[activeTab]} content will be displayed here.</p>
              </div>
            </div>
          </main>
        )}
      </div>
      
      {/* Booking details modal */}
      {isDetailModalOpen && selectedBooking && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" onClick={() => setIsDetailModalOpen(false)}>
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{t.bookingDetails}: {selectedBooking.id}</h3>
                  <button onClick={() => setIsDetailModalOpen(false)} className="text-gray-400 hover:text-gray-500">
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Customer Info */}
                  <div className="md:col-span-1">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-3">{t.contactInfo}</h4>
                      <div className="space-y-2">
                        <div>
                          <p className="text-sm text-gray-500">{t.fullName}</p>
                          <p className="font-medium">{selectedBooking.customer}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">{t.email}</p>
                          <p className="font-medium">{selectedBooking.customerEmail}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">{t.phone}</p>
                          <p className="font-medium">{selectedBooking.customerPhone}</p>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex space-x-2">
                        <button className="flex items-center px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-50 text-sm">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {t.sendMessage}
                        </button>
                        <button className="p-1 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
                          <Phone className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="p-1 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
                          <Mail className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tour Info */}
                  <div className="md:col-span-1">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-3">{t.tourDetails}</h4>
                      <div className="space-y-2">
                        <div>
                          <p className="text-sm text-gray-500">{t.tourName}</p>
                          <p className="font-medium">{selectedBooking.tour}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">{t.tourGuide}</p>
                          <p className="font-medium">{selectedBooking.tourGuide}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">{t.departureDate}</p>
                          <p className="font-medium">
                            {new Date(selectedBooking.date).toLocaleDateString(currentLang === 'ru' ? 'ru-RU' : currentLang === 'ja' ? 'ja-JP' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">{t.bookingDate}</p>
                          <p className="font-medium">
                            {new Date(selectedBooking.bookingDate).toLocaleDateString(currentLang === 'ru' ? 'ru-RU' : currentLang === 'ja' ? 'ja-JP' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">{t.participants}</p>
                          <p className="font-medium">
                            {selectedBooking.participants.adults} {t.adults}, {selectedBooking.participants.children} {t.children}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Payment Info */}
                  <div className="md:col-span-1">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-3">{t.paymentInfo}</h4>
                      <div className="space-y-2">
                        <div>
                          <p className="text-sm text-gray-500">{t.paymentMethod}</p>
                          <p className="font-medium">{t[selectedBooking.paymentMethod]}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">{t.paymentStatus}</p>
                          <p className="font-medium">{t[selectedBooking.paymentStatus]}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">{t.subtotal}</p>
                          <p className="font-medium">${selectedBooking.subtotal}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">{t.tax}</p>
                          <p className="font-medium">${selectedBooking.tax}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">{t.total}</p>
                          <p className="font-medium">${selectedBooking.total}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">{t.deposit} ({t.paid})</p>
                          <p className="font-medium">${selectedBooking.deposit}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">{t.remaining}</p>
                          <p className="font-medium">${selectedBooking.remaining}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Notes and Status */}
                  <div className="md:col-span-3">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-3">{t.notes}</h4>
                      <p className="text-gray-700 mb-4">{selectedBooking.notes || 'No notes available.'}</p>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-2">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(selectedBooking.status)}`}>
                            {t[`status${selectedBooking.status.charAt(0).toUpperCase() + selectedBooking.status.slice(1)}`]}
                          </span>
                          <span className="text-sm text-gray-500">
                            {t.lastUpdated}: {new Date().toLocaleDateString(currentLang === 'ru' ? 'ru-RU' : currentLang === 'ja' ? 'ja-JP' : 'en-US')}
                          </span>
                        </div>
                        <div className="flex space-x-2">
                          {selectedBooking.status === 'pending' && (
                            <button className="flex items-center px-3 py-1 border border-gray-300 rounded-md bg-green-500 text-white hover:bg-green-600 text-sm">
                              <Check className="w-4 h-4 mr-1" />
                              {t.markAsConfirmed}
                            </button>
                          )}
                          {(selectedBooking.status === 'pending' || selectedBooking.status === 'confirmed') && (
                            <button className="flex items-center px-3 py-1 border border-gray-300 rounded-md bg-red-500 text-white hover:bg-red-600 text-sm">
                              <X className="w-4 h-4 mr-1" />
                              {t.markAsCancelled}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button 
                  type="button" 
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-500 text-base font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setIsDetailModalOpen(false)}
                >
                  {t.close}
                </button>
                <button 
                  type="button" 
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setIsDetailModalOpen(false)}
                >
                  {t.downloadPDF}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminPage;