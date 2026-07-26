interface CalculatorParams {
    model: string;
    year: string;
    engine: string;
    city: string;
  }
  
  interface CalculatorResult {
    basePrice: number;
    deliveryPrice: number;
    tax: number;
    total: number;
  }
  
  export function calculatePrice(params: CalculatorParams): CalculatorResult {
    // Базовые цены по объему двигателя
    const enginePrices: Record<string, number> = {
      '1.0': 800000,
      '1.5': 1000000,
      '2.0': 1300000,
      '3.0': 1800000,
      '4.0': 2500000,
    };
  
    const basePrice = enginePrices[params.engine] || 1200000;
  
    // Стоимость доставки по городам
    const deliveryPrices: Record<string, number> = {
      vladivostok: 50000,
      moscow: 150000,
      spb: 140000,
      voronezh: 120000,
      novosibirsk: 130000,
      ekaterinburg: 125000,
    };
  
    const deliveryPrice = deliveryPrices[params.city] || 100000;
  
    // Растаможка (примерно 30% от стоимости)
    const tax = basePrice * 0.3;
  
    return {
      basePrice,
      deliveryPrice,
      tax,
      total: basePrice + deliveryPrice + tax,
    };
  }
