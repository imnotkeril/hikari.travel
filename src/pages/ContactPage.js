// src/pages/ContactPage.js
import React, { useState } from 'react';

function ContactPage({ currentLang, setCurrentLang, navigateTo }) {
  // Переводы для ContactPage
  const translations = {
    ru: {
      contactUs: 'Свяжитесь с нами',
      name: 'Имя',
      email: 'Email',
      message: 'Сообщение',
      submit: 'Отправить',
      address: 'Адрес',
      phone: 'Телефон',
      emailAddress: 'Email адрес',
      officeHours: 'Часы работы',
      monday: 'Понедельник',
      friday: 'Пятница',
      saturday: 'Суббота',
      sunday: 'Воскресенье',
      closed: 'Закрыто'
    },
    en: {
      contactUs: 'Contact Us',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Submit',
      address: 'Address',
      phone: 'Phone',
      emailAddress: 'Email Address',
      officeHours: 'Office Hours',
      monday: 'Monday',
      friday: 'Friday',
      saturday: 'Saturday',
      sunday: 'Sunday',
      closed: 'Closed'
    },
    ja: {
      contactUs: 'お問い合わせ',
      name: 'お名前',
      email: 'メール',
      message: 'メッセージ',
      submit: '送信',
      address: '住所',
      phone: '電話番号',
      emailAddress: 'メールアドレス',
      officeHours: '営業時間',
      monday: '月曜日',
      friday: '金曜日',
      saturday: '土曜日',
      sunday: '日曜日',
      closed: '休業'
    }
  };

  const t = translations[currentLang];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">{t.contactUs}</h1>
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-pink-500 text-white p-8">
              <h2 className="text-2xl font-bold mb-6">{t.contactUs}</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-bold mb-1">{t.address}</p>
                  <p>1-1-1 Chiyoda, Chiyoda-ku, Tokyo, Japan</p>
                </div>
                <div>
                  <p className="font-bold mb-1">{t.phone}</p>
                  <p>+81 90-1234-5678</p>
                </div>
                <div>
                  <p className="font-bold mb-1">{t.emailAddress}</p>
                  <p>info@hikaritravel.com</p>
                </div>
                <div>
                  <p className="font-bold mb-1">{t.officeHours}</p>
                  <p>{t.monday} - {t.friday}: 9:00 - 18:00</p>
                  <p>{t.saturday}: 10:00 - 15:00</p>
                  <p>{t.sunday}: {t.closed}</p>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t.name}</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t.email}</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">{t.message}</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                  ></textarea>
                </div>
                <div>
                  <button 
                    type="submit" 
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                  >
                    {t.submit}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;