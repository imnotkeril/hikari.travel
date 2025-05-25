// src/hooks/useNavigation.js
import { useNavigate } from 'react-router-dom';

/**
 * Кастомный хук для навигации, который сохраняет совместимость с предыдущей версией
 * системы навигации, но использует React Router под капотом
 */
export const useNavigation = () => {
  const navigate = useNavigate();

  /**
   * Осуществляет навигацию на указанную страницу
   * @param {string} page - Идентификатор страницы или путь
   * @param {string} anchor - Опциональный якорь для скролла
   */
  const navigateTo = (page, anchor) => {
    let path = '/';

    // Преобразуем старый формат страниц в пути URL
    switch(page) {
      case 'home':
        path = '/';
        break;
      case 'tours':
        path = '/tours';
        break;
      case 'services':
        path = '/services';
        break;
      case 'tour':
        path = `/tour`; // ID тура должен передаваться отдельно
        break;
      case 'booking':
        path = '/booking';
        break;
      case 'booking-confirmation':
        path = '/booking-confirmation';
        break;
      case 'about':
        path = '/about';
        break;
      case 'contact':
        path = '/contact';
        break;
      case 'login':
        path = '/login';
        break;
      case 'admin':
        path = '/admin';
        break;
      case 'blog':
        path = '/blog';
        break;
      case 'blog-post':
        path = '/blog-post';
        break;
      default:
        // Если page не совпадает с известными страницами, используем его как прямой путь
        path = page.startsWith('/') ? page : `/${page}`;
    }

    // Осуществляем навигацию с помощью React Router
    navigate(path);

    // Если указан якорь, после загрузки страницы прокручиваем к этому элементу
    if (anchor) {
      // Используем setTimeout, чтобы дать время для рендеринга страницы
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Если якорь не указан, прокручиваем в начало страницы
      window.scrollTo(0, 0);
    }
  };

  return { navigateTo };
};

export default useNavigation;