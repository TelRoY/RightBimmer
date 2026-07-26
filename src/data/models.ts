export interface Model {
    id: string;
    name: string;
    year: string;
    price: string;
    image: string;
    badge: string;
  }
  
  export const models: Model[] = [
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
