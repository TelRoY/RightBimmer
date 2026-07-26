import { App } from '@components/App/App';
import '@styles/global.css';

// Инициализация приложения
document.addEventListener('DOMContentLoaded', () => {
  const app = new App('app');
  app.render();
});

// Регистрация Handlebars хелперов
import Handlebars from 'handlebars';

Handlebars.registerHelper('eq', (a: unknown, b: unknown) => a === b);
Handlebars.registerHelper('not', (value: unknown) => !value);
Handlebars.registerHelper('formatPrice', (price: number) => {
  return price.toLocaleString('ru-RU') + ' ₽';
});
