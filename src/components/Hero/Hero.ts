import Handlebars from 'handlebars';
import heroTemplate from './Hero.hbs?raw';
import { fetchExchangeRates } from '@utils/currency-api';
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
  }

  async render(): Promise<void> {
    try {
      this.rates = await fetchExchangeRates();

      const template = Handlebars.compile(heroTemplate);
      this.container.innerHTML = template({
        rates: this.rates,
        lastUpdate: new Date().toLocaleTimeString('ru-RU'),
      });
    } catch (error) {
      console.error('Ошибка рендеринга', error);
    }
  }
}
