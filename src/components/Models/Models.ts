import Handlebars from 'handlebars';
import modelsTemplate from './Models.hbs?raw';
import './Models.css';
import { getPopularModels, getAllCars, getMainImage, formatPrice, Car } from '@data/index';

export class Models {
  private container: HTMLElement;
  private allCars: Car[] = [];
  private popularCars: Car[] = [];

  constructor(containerId: string) {
    this.container = document.getElementById(containerId) as HTMLElement;
    this.popularCars = getPopularModels();
    this.allCars = getAllCars();
  }

  render(): void {
    try {
      const popularModels = this.popularCars.map((car) => ({
        id: car.id,
        name: `${car.brand.toUpperCase()} ${car.model}`,
        year: `${car.year}`,
        price: formatPrice(car.price),
        image: getMainImage(car),
        badge: car.badge || '',
      }));

      const template = Handlebars.compile(modelsTemplate);
      this.container.innerHTML = template({
        models: popularModels,
        hasMore: this.allCars.length > this.popularCars.length,
      });

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
    const showAllBtn = this.container.querySelector('.show-all-btn');
    if (showAllBtn) {
      showAllBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.showAllModels();
      });
    }

    const showPopularBtn = this.container.querySelector('.show-popular-btn');
    if (showPopularBtn) {
      showPopularBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.render();
      });
    }

    const detailButtons = this.container.querySelectorAll('.model-item .btn');
    detailButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
      });
    });
  }

  private showAllModels(): void {
    const modelsGrid = this.container.querySelector('.models-grid');
    const showAllBtn = this.container.querySelector('.show-all-btn');
    const container = this.container.querySelector('.models .container');

    if (!modelsGrid) return;

    const allModelsHtml = this.allCars.map((car) => `
      <div class="model-item" data-car-id="${car.id}">
        <div class="model-image">
          <img src="${getMainImage(car)}" alt="${car.brand} ${car.model}" loading="lazy">
          ${car.badge ? `<div class="model-badge">${car.badge}</div>` : ''}
        </div>
        <div class="model-info">
          <h3>${car.brand.toUpperCase()} ${car.model}</h3>
          <p class="model-year">${car.year} год</p>
          <p class="model-price">${formatPrice(car.price)}</p>
          <a href="#" class="btn btn-small btn-primary">Подробнее</a>
        </div>
      </div>
    `).join('');

    modelsGrid.innerHTML = allModelsHtml;

    if (showAllBtn) {
      showAllBtn.remove();
    }

    if (container) {
      const backBtn = document.createElement('div');
      backBtn.className = 'text-center';
      backBtn.style.marginTop = '40px';
      backBtn.innerHTML = `
        <button class="btn btn-secondary btn-large show-popular-btn">
          ← Показать популярные
        </button>
      `;
      container.appendChild(backBtn);

      const newShowPopularBtn = backBtn.querySelector('.show-popular-btn');
      if (newShowPopularBtn) {
        newShowPopularBtn.addEventListener('click', (e) => {
          e.preventDefault();
          this.render();
        });
      }
    }
    this.initHandlers();
  }
}
