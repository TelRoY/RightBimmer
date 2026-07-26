import Handlebars from 'handlebars';
import calculatorTemplate from './Calculator.hbs?raw';
import './Calculator.css';

export class Calculator {
  private container: HTMLElement;

  constructor(containerId: string) {
    this.container = document.getElementById(containerId) as HTMLElement;
  }

  render(): void {
    const template = Handlebars.compile(calculatorTemplate);
    this.container.innerHTML = template({});
    this.initCalculator();
  }

  private initCalculator(): void {
    const form = this.container.querySelector('.calc-form');
    const resultEl = this.container.querySelector('.calc-result');

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const model = (this.container.querySelector('#model') as HTMLInputElement)?.value;
        const year = (this.container.querySelector('#year') as HTMLSelectElement)?.value;
        const engine = (this.container.querySelector('#engine') as HTMLSelectElement)?.value;
        const city = (this.container.querySelector('#city') as HTMLSelectElement)?.value;

        if (!model || !year || !engine || !city) {
          alert('Пожалуйста, заполните все поля!');
          return;
        }

        // Простой расчет
        const enginePrices: Record<string, number> = {
          '1.0': 800000,
          '1.5': 1000000,
          '2.0': 1300000,
          '3.0': 1800000,
          '4.0': 2500000,
        };

        const basePrice = enginePrices[engine] || 1200000;

        const deliveryPrices: Record<string, number> = {
          vladivostok: 50000,
          moscow: 150000,
          spb: 140000,
          voronezh: 120000,
          novosibirsk: 130000,
          ekaterinburg: 125000,
        };

        const deliveryPrice = deliveryPrices[city] || 100000;
        const tax = basePrice * 0.3;
        const total = basePrice + deliveryPrice + tax;

        if (resultEl) {
          resultEl.innerHTML = `
            <div class="calc-result-grid">
              <div><strong>Стоимость авто:</strong><br>${basePrice.toLocaleString()} ₽</div>
              <div><strong>Доставка:</strong><br>${deliveryPrice.toLocaleString()} ₽</div>
              <div><strong>Растаможка:</strong><br>${tax.toLocaleString()} ₽</div>
              <div class="total-price">
                <strong>Итого:</strong><br>${total.toLocaleString()} ₽
              </div>
            </div>
          `;
          resultEl.classList.add('show');
        }
      });
    }
  }
}
