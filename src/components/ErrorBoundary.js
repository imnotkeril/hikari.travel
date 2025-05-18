import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    const { hasError, error, errorInfo } = this.state;
    
    if (hasError) {
      // You can render any custom fallback UI
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Что-то пошло не так</h1>
            <p className="text-gray-700 mb-4">
              Произошла ошибка при загрузке этой страницы. Наша команда уже работает над решением проблемы.
            </p>
            
            {this.props.showDetails && (
              <div className="mt-4 p-4 bg-gray-100 rounded-md overflow-auto">
                <p className="text-red-500 font-mono">{error && error.toString()}</p>
                <details className="mt-2">
                  <summary className="text-sm text-gray-600 cursor-pointer">Подробности ошибки</summary>
                  <pre className="mt-2 text-xs text-gray-600 whitespace-pre-wrap">
                    {errorInfo && errorInfo.componentStack}
                  </pre>
                </details>
              </div>
            )}
            
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button
                className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-md"
                onClick={() => window.location.reload()}
              >
                Обновить страницу
              </button>
              <Link
                to="/"
                className="px-4 py-2 border border-pink-500 text-pink-500 hover:bg-pink-50 rounded-md text-center"
              >
                Вернуться на главную
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;