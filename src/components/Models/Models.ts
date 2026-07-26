import Handlebars from 'handlebars';
import modelsTemplate from './Models.hbs?raw';
import './Models.css';

interface Model {
  id: string;
  name: string;
  year: string;
  price: string;
  image: string;
  badge: string;
}

const modelsData: Model[] = [
  {
    id: 'bmw-1-series',
    name: 'BMW 1-Series',
    year: '2022-2024',
    price: 'от 1 250 000 ₽',
    image: '/img/BMW 1-Series-new.jpg',
    badge: 'Хит',
  },
  {
    id: 'bmw-2-series',
    name: 'BMW 2-Series',
    year: '2022-2024',
    price: 'от 1 100 000 ₽',
    image: '/img/BMW-2-Series-new.jpg',
    badge: 'Новинка',
  },
  {
    id: 'mazda-axela',
    name: 'Mazda Axela',
    year: '2020-2023',
    price: 'от 950 000 ₽',
    image: '/img/Mazda-Axela.jpg',
    badge: 'Популярное',
  },
  {
    id: 'toyota-raize',
    name: 'Toyota Raize',
    year: '2022-2024',
    price: 'от 1 450 000 ₽',
    image: '/img/Toyota-Raize.jpg',
    badge: 'Топ',
  },
];

export class Models {
  private container: HTMLElement;

  constructor(containerId: string) {
    this.container = document.getElementById(containerId) as HTMLElement;
  }

  render(): void {
    const template = Handlebars.compile(modelsTemplate);
    this.container.innerHTML = template({ models: modelsData });
    this.initHandlers();
  }

  private initHandlers(): void {
    const buttons = this.container.querySelectorAll('.model-item .btn');
    buttons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const modelName = btn.closest('.model-item')?.querySelector('h3')?.textContent;
        if (modelName) {
          console.log(`Выбрана модель: ${modelName}`);
        }
      });
    });
  }
}
