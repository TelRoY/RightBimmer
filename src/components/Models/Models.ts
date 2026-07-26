import Handlebars from 'handlebars';
import modelsTemplate from './Models.hbs?raw';
import './Models.css';
import { getPopularModels, formatPrice, getMainImage } from '@data/index';

function prepareModelsData() {
  const popularCars = getPopularModels();
  
  return popularCars.map((car) => ({
    id: car.id,
    name: `${car.brand.toUpperCase()} ${car.model}`,
    year: `${car.year}`,
    price: formatPrice(car.price),
    image: getMainImage(car),
    badge: car.badge || '',
  }));
}

export class Models {
  private container: HTMLElement;

  constructor(containerId: string) {
    this.container = document.getElementById(containerId) as HTMLElement;
  }

  render(): void {
    try {
      const template = Handlebars.compile(modelsTemplate);
      const models = prepareModelsData();
      
      this.container.innerHTML = template({ models });
      this.initHandlers();
    } catch (error) {
      console.error('Ошибка рендеринга Models:', error);
      this.container.innerHTML = `
        <div style="text-align:center; padding:40px; color:#666;">
          <p>⚠️ Ошибка загрузки данных</p>
          <p style="font-size:14px;">Пожалуйста, обновите страницу</p>
        </div>
      `;
    }
  }

  private initHandlers(): void {
    const buttons = this.container.querySelectorAll('.model-item .btn');
    buttons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const modelItem = btn.closest('.model-item');
        const modelName = modelItem?.querySelector('h3')?.textContent;
        const carId = modelItem?.getAttribute('data-car-id');
        
        if (modelName) {
          console.log(`Выбрана модель: ${modelName} (ID: ${carId})`);
          // Открыть модальное окно с деталями
          alert(`🚗 ${modelName}\n\nПодробная информация появится в ближайшее время.`);
        }
      });
    });
  }
}
