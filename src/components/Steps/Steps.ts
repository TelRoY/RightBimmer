import Handlebars from 'handlebars';
import stepsTemplate from './Steps.hbs?raw';
import './Steps.css';

export class Steps {
  private container: HTMLElement;

  constructor(containerId: string) {
    this.container = document.getElementById(containerId) as HTMLElement;
  }

  render(): void {
    const steps = [
      { number: 1, title: 'Заявка', description: 'Вы оставляете заявку или звоните нам' },
      { number: 2, title: 'Подбор авто', description: 'Мы подбираем варианты по вашим критериям' },
      { number: 3, title: 'Проверка', description: 'Проверяем историю и состояние автомобиля' },
      { number: 4, title: 'Покупка', description: 'Участвуем в аукционе и покупаем авто' },
      { number: 5, title: 'Доставка', description: 'Доставляем и растаможиваем автомобиль' },
      { number: 6, title: 'Получение', description: 'Вы получаете автомобиль и документы' },
    ];

    const template = Handlebars.compile(stepsTemplate);
    this.container.innerHTML = template({ steps });
  }
}
