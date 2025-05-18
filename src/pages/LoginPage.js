import React, { useState } from 'react';
import { ChevronLeft, Lock, Eye, EyeOff } from 'lucide-react';

function LoginPage({ currentLang, setCurrentLang, navigateTo, handleLogin }) {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  // Переводы
  const translations = {
    ru: {
      adminLogin: 'Вход для администратора',
      welcomeBack: 'Добро пожаловать',
      loginToYourAccount: 'Войдите в свой аккаунт',
      username: 'Имя пользователя',
      password: 'Пароль',
      forgotPassword: 'Забыли пароль?',
      login: 'Войти',
      backToHome: 'Вернуться на главную',
      invalidCredentials: 'Неверное имя пользователя или пароль',
      usernameRequired: 'Требуется имя пользователя',
      passwordRequired: 'Требуется пароль',
      show: 'Показать',
      hide: 'Скрыть'
    },
    en: {
      adminLogin: 'Admin Login',
      welcomeBack: 'Welcome Back',
      loginToYourAccount: 'Login to your account',
      username: 'Username',
      password: 'Password',
      forgotPassword: 'Forgot password?',
      login: 'Login',
      backToHome: 'Back to Home',
      invalidCredentials: 'Invalid username or password',
      usernameRequired: 'Username is required',
      passwordRequired: 'Password is required',
      show: 'Show',
      hide: 'Hide'
    },
    ja: {
      adminLogin: '管理者ログイン',
      welcomeBack: 'お帰りなさい',
      loginToYourAccount: 'アカウントにログイン',
      username: 'ユーザー名',
      password: 'パスワード',
      forgotPassword: 'パスワードをお忘れですか？',
      login: 'ログイン',
      backToHome: 'ホームに戻る',
      invalidCredentials: 'ユーザー名またはパスワードが無効です',
      usernameRequired: 'ユーザー名が必要です',
      passwordRequired: 'パスワードが必要です',
      show: '表示',
      hide: '非表示'
    }
  };

  const t = translations[currentLang];
  
  // Валидация формы
  const validateForm = () => {
    if (!credentials.username) {
      setError(t.usernameRequired);
      return false;
    }
    if (!credentials.password) {
      setError(t.passwordRequired);
      return false;
    }
    return true;
  };
  
  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (validateForm()) {
      const success = handleLogin(credentials);
      if (!success) {
        setError(t.invalidCredentials);
      }
    }
  };
  
  // Обработчик изменения полей формы
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };
  
  // Переключение видимости пароля
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-center text-3xl font-extrabold text-gray-900 mb-4">{t.adminLogin}</h1>
        <h2 className="text-center text-2xl font-bold text-pink-500">{t.welcomeBack}</h2>
        <p className="mt-2 text-center text-sm text-gray-600">{t.loginToYourAccount}</p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {error && (
            <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4 text-red-700">
              <p>{error}</p>
            </div>
          )}
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                {t.username}
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  value={credentials.username}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                {t.password}
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={credentials.password}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 pr-10"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a href="#" className="font-medium text-pink-600 hover:text-pink-500">
                  {t.forgotPassword}
                </a>
              </div>
              
              <div className="flex items-center">
                <div className="flex space-x-2">
                  <button 
                    type="button"
                    onClick={() => setCurrentLang('ru')} 
                    className={`px-2 py-1 rounded ${currentLang === 'ru' ? 'bg-pink-100 text-pink-500' : ''}`}
                  >
                    RU
                  </button>
                  <button 
                    type="button"
                    onClick={() => setCurrentLang('en')} 
                    className={`px-2 py-1 rounded ${currentLang === 'en' ? 'bg-pink-100 text-pink-500' : ''}`}
                  >
                    EN
                  </button>
                  <button 
                    type="button"
                    onClick={() => setCurrentLang('ja')} 
                    className={`px-2 py-1 rounded ${currentLang === 'ja' ? 'bg-pink-100 text-pink-500' : ''}`}
                  >
                    JA
                  </button>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                <Lock className="w-4 h-4 mr-2" />
                {t.login}
              </button>
            </div>
          </form>
          
          <div className="mt-6">
            <button
              onClick={() => navigateTo('home')}
              className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              {t.backToHome}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;