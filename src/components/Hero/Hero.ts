import Handlebars from 'handlebars';
import heroTemplate from './Hero.hbs?raw';
import './Hero.css';

interface ExchangeRate {
  currency: string;
  rate: number;
  flag: string;
}

export class Hero {
  private container: HTMLElement;
  private rates: ExchangeRate[] = [];

  constructor(containerId: string) {
    this.container = document.getElementById(containerId) as HTMLElement;
    this.rates = this.getExchangeRates();
  }

  render(): void {
    try {
      const template = Handlebars.compile(heroTemplate);
      this.container.innerHTML = template({
        rates: this.rates,
        lastUpdate: new Date().toLocaleTimeString('ru-RU'),
      });

      // this.initHandlers();
    } catch (error) {
      console.error('Ошибка рендеринга', error);
      this.container.innerHTML = `
      <section class="hero">
          <div class="container">
            <div class="hero-content">
              <h1>Автомобили из Японии <br>с аукционов</h1>
              <p>Поможем купить, доставить и растаможить автомобиль <br>из Японии под ключ</p>
              <div class="hero-buttons">
                <a href="#calculator" class="btn btn-primary">Рассчитать стоимость</a>
                <a href="#catalog" class="btn btn-secondary">Смотреть каталог</a>
              </div>
            </div>
          </div>
        </section>
      `;
    }
  }
  private getExchangeRates(): ExchangeRate[] {
    // здесь был бы запрос к API
    return [
      {
        currency: 'JPY',
        rate: 0.515, // 1 JPY = 0.515 RUB
        flag: '🇯🇵',
      },
      {
        currency: 'EUR',
        rate: 88.89, // 1 EUR = 88.89 RUB
        flag: '🇪🇺',
      },
    ];
  }

  // private initHandlers(): void {
  //   // Обновление курсов по клику на кнопку обновления
  //   const refreshBtn = this.container.querySelector('.rates-refresh');
  //   if (refreshBtn) {
  //     refreshBtn.addEventListener('click', (e) => {
  //       e.preventDefault();
  //     });
  //   }
  // }
}
