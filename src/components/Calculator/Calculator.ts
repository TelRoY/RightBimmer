import Handlebars from 'handlebars';
import calculatorTemplate from './Calculator.hbs?raw';
import { fetchExchangeRates } from '@utils/currency-api';
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

  private async initCalculator(): Promise<void> {
    const form = this.container.querySelector('.calc-form');
    const resultEl = this.container.querySelector('.calc-result');

    const rates = await fetchExchangeRates();
    const euroRate = rates.find(r => r.currency === 'EUR')?.rate || 88.9;
    const yenRate = rates.find(r => r.currency === 'JPY')?.rate || 0.515;
    const yenRateUr = yenRate + 0.1;
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const carPriceYen = parseFloat((this.container.querySelector('#car-price-yen') as HTMLInputElement)?.value) || 0;
        const releaseYear = parseInt((this.container.querySelector('#release-year') as HTMLSelectElement)?.value, 10) || 0;
        const releaseMonth = parseInt((this.container.querySelector('#release-month') as HTMLSelectElement)?.value, 10) || 0;
        const engineVolume = parseInt((this.container.querySelector('#engine') as HTMLSelectElement)?.value, 10) || 0;
        const importYear = 2026;
        const importMonth = 8;

        if (!carPriceYen || !engineVolume || !importYear) {
          alert('Пожалуйста, заполните все поля!');
          return;
        }

        // Расчёт утильсбора 
        let releaseTotal = ((releaseYear*12) + releaseMonth);
        let importTotal = (importYear*12) + importMonth;
        const prohod = (importTotal - 58 > releaseTotal) ? 2015 : (importTotal - 35 < releaseTotal) ? 2023 : 2020;
        const utilSbor = (prohod < 2021) ? 5200 : 3400;

        // Расчёт таможенного оформления 
        const customClearance = carPriceYen < 1980
          ? carPriceYen < 700
            ? carPriceYen < 300 ? 775 : 2134
            : 3100
          : 8530;

        // Расчёт таможенной ставки 
        let customsRate = 0;
        if (prohod < 2021) {
          // Расчет непроходных авто до 2021 года выпуска
          if (prohod < 2019) {
            if (engineVolume < 1100) customsRate = 3;
            else if (engineVolume < 1600) customsRate = 3.2;
            else if (engineVolume < 1900) customsRate = 3.5;
            else if (engineVolume < 2300) customsRate = 4;
            else customsRate = 5;
          } else {
            if (engineVolume < 1100) customsRate = 1.5;
            else if (engineVolume < 1600) customsRate = 1.7;
            else if (engineVolume < 1900) customsRate = 2.5;
            else if (engineVolume < 2300) customsRate = 2.7;
            else customsRate = 3;
          }
        } else {
          // Расчёт проходных авто после 2021 года выпуска
          const condition = (carPriceYen + 140) * (carPriceYen < 1300 ? 0.54 : 0.48) * yenRate * 1000;
          const alternative = engineVolume * (carPriceYen < 1300 ? 2.5 : 3.5) * euroRate;

          if (condition < alternative) {
            customsRate = carPriceYen < 1300 ? 2.5 : 3.5;
          } else {
            customsRate = carPriceYen < 1300 ? 0.54 : 0.48;
          }
        }

        // Расчёт таможенной пошлины
        let customsDuty = 0;
        if (prohod < 2021) {
          customsDuty = (engineVolume * customsRate * euroRate) + utilSbor + (carPriceYen < 1980 ? ((carPriceYen < 700) ? ((carPriceYen < 300) ? 775 : 1500) : 3100) : 8500);
        } else {
          const baseCost = (carPriceYen + 140) * (carPriceYen < 1300 ? 0.54 : 0.48) * yenRateUr * 1000;
          const altCost = engineVolume * (carPriceYen < 1300 ? 2.5 : 3.5) * euroRate;

          customsDuty = baseCost < altCost
            ? (altCost + customClearance + utilSbor)
            : (baseCost + customClearance + utilSbor);
        }

        // Прочие расходы 
        const otherExpenses = 15000 + 4000 + 300 + 1500; // СВХ + временная регистрация + нотариус + сдэк
        const brokerFee = 55550; // Услуги брокера 
        const freight = 140; 
        // const rightbimmerFee = 30000;
        const delivery = 200000;

        // Итого в Японии 
        const totalInJapanYen = (carPriceYen + freight) * 1000;
        const totalInJapanRub = totalInJapanYen * yenRate;

        // Итого во Владивостоке 
        const totalVladivostok = totalInJapanRub + customsDuty + brokerFee + otherExpenses;
        // Итого в городе доставки 
        const totalDelivery = totalVladivostok + delivery;
        // Форматирование результатов
        const formatCurrency = (amount: number) => amount.toLocaleString('ru-RU') + '₽';
        const formatYen = (amount: number) => amount.toLocaleString('ja-JP') + '¥';


        if (resultEl) {
          resultEl.innerHTML = `
            <div class="calc-result-grid">
              <div><strong>Цена авто в йенах:</strong><br>${formatYen(carPriceYen*1000)}</div>
              <div><strong>Объём мотора:</strong><br>${engineVolume} см³</div>
              <div><strong>Год выпуска:</strong><br>${releaseYear}</div>
              <div><strong>Итого в Японии:</strong><br>${formatCurrency(totalInJapanRub)}</div>
              <div><strong>Утильсбор:</strong><br>${formatCurrency(utilSbor)}</div>
              <div><strong>Таможенная пошлина:</strong><br>${formatCurrency(customsDuty)}</div>
              <div><strong>Брокерские услуги:</strong><br>${formatCurrency(brokerFee)}</div>
              <div><strong>Прочие расходы:</strong><br>${formatCurrency(otherExpenses)}</div>
            </div> 
            <div class="total-price">
              <strong>Цена в РФ:</strong>${formatCurrency(totalVladivostok)}
            </div>
            <div class="total-price">
              <strong>Цена в вашем городе:</strong>${formatCurrency(totalDelivery)}
            </div>
          `;
          resultEl.classList.add('show');
        }
      });
    }
  }
}
