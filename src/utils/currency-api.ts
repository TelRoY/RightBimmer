export interface ExchangeRate {
    currency: string;
    rate: number;
    flag: string;
  }
  
  export async function fetchExchangeRates(): Promise<ExchangeRate[]> {
    try {
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/RUB');
      const data = await response.json();
      
      return [
        {
          currency: 'JPY',
          rate: Math.round((1 / data.rates.JPY) * 100) / 100,
          flag: '🇯🇵',
        },
        {
          currency: 'EUR',
          rate: Math.round((1 / data.rates.EUR) * 100) / 100,
          flag: '🇪🇺',
        },
      ];
    } catch (error) {
      console.error('Ошибка загрузки курсов валют:', error);
      return [
        { currency: 'JPY', rate: 0.515, flag: '🇯🇵' },
        { currency: 'EUR', rate: 88.90, flag: '🇪🇺' },
      ];
    }
  }
