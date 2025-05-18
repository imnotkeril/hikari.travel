// src/components/FAQ.js
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

function FAQ({ currentLang }) {
  const [openItem, setOpenItem] = useState(null);

  // Переводы для FAQ
  const translations = {
    ru: {
      title: 'Часто задаваемые вопросы',
      questions: [
        {
          question: 'Нужна ли виза для поездки в Японию?',
          answer: 'Да, для граждан России требуется виза для посещения Японии. Мы предоставляем консультацию и помощь в подготовке необходимых документов для получения визы.'
        },
        {
          question: 'Какой язык используют ваши гиды?',
          answer: 'Наши гиды свободно говорят на русском, английском и японском языках. Вы можете выбрать предпочтительный язык при бронировании тура.'
        },
        {
          question: 'Можно ли организовать индивидуальный тур?',
          answer: 'Да, мы специализируемся на индивидуальных турах, учитывающих ваши предпочтения и интересы. Свяжитесь с нами для обсуждения деталей.'
        },
        {
          question: 'Как производится оплата тура?',
          answer: 'Мы принимаем оплату банковской картой, банковским переводом или через электронные платежные системы. При бронировании требуется предоплата в размере 20%, остаток суммы оплачивается за 30 дней до начала тура.'
        }
      ]
    },
    en: {
      title: 'Frequently Asked Questions',
      questions: [
        {
          question: 'Do I need a visa to travel to Japan?',
          answer: 'Visa requirements vary depending on your nationality. We provide consultation and assistance in preparing the necessary documents for obtaining a visa if needed.'
        },
        {
          question: 'What languages do your guides speak?',
          answer: 'Our guides are fluent in Russian, English, and Japanese. You can choose your preferred language when booking a tour.'
        },
        {
          question: 'Can you organize a custom tour?',
          answer: 'Yes, we specialize in custom tours tailored to your preferences and interests. Contact us to discuss the details.'
        },
        {
          question: 'How do I pay for the tour?',
          answer: 'We accept payment by credit card, bank transfer, or electronic payment systems. A 20% deposit is required when booking, with the balance due 30 days before the tour begins.'
        }
      ]
    },
    ja: {
      title: 'よくある質問',
      questions: [
        {
          question: '日本への旅行にビザは必要ですか？',
          answer: 'ビザの要件は国籍によって異なります。必要な場合はビザ取得に必要な書類の準備についてのコンサルテーションとサポートを提供しています。'
        },
        {
          question: 'ガイドはどの言語を話しますか？',
          answer: '当社のガイドはロシア語、英語、日本語を流暢に話します。ツアー予約時に希望の言語を選択できます。'
        },
        {
          question: 'カスタムツアーを組むことはできますか？',
          answer: 'はい、お客様の好みや興味に合わせたカスタムツアーを専門としています。詳細については、お問い合わせください。'
        },
        {
          question: 'ツアーの支払い方法は？',
          answer: 'クレジットカード、銀行振込、または電子決済システムでのお支払いを受け付けています。予約時に20％のデポジットが必要で、残りの金額はツアー開始の30日前までにお支払いいただきます。'
        }
      ]
    }
  };

  const t = translations[currentLang];

  // Функция для переключения открытого вопроса
  const toggleItem = (index) => {
    if (openItem === index) {
      setOpenItem(null);
    } else {
      setOpenItem(index);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{t.title}</h2>
      
      <div className="space-y-4">
        {t.questions.map((item, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              className="flex justify-between items-center w-full text-left font-medium text-gray-700 focus:outline-none"
              onClick={() => toggleItem(index)}
            >
              <span>{item.question}</span>
              {openItem === index ? (
                <ChevronUp className="w-5 h-5 text-pink-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            {openItem === index && (
              <div className="mt-2 text-gray-600">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;