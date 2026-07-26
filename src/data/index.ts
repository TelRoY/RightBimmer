export interface CarImage {
  url: string;
  alt: string;
  isMain?: boolean;
}

export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  images: CarImage[];
  badge?: 'Хит' | 'Новинка' | 'Популярное' | 'Топ' | 'Спецпредложение' | 'Бюджетный';
}

export const carsData: Car[] = [
  {
    id: 'bmw-1-series-2020',
    brand: 'bmw',
    model: '1-Series',
    year: 2020,
    price: 1120000,
    images: [
      {
        url: '/img/cars/bmw/BMW-1-Series-new.jpg',
        alt: 'BMW 1-Series 2020',
        isMain: true,
      },
    ],
    badge: 'Топ',
  },
  {
    id: 'bmw-2-series-2018',
    brand: 'bmw',
    model: '2-Series',
    year: 2018,
    price: 900000,
    images: [
      {
        url: '/img/cars/bmw/BMW-2-Series-M.jpg',
        alt: 'BMW 2-Series 2018',
        isMain: true,
      },
    ],
    badge: 'Популярное',
  },
  {
    id: 'bmw-2-series-2017',
    brand: 'bmw',
    model: '2-Series',
    year: 2017,
    price: 1050000,
    images: [
      {
        url: '/img/cars/bmw/BMW-2-Series-Lux.jpg',
        alt: 'BMW 2-Series 2017',
        isMain: true,
      },
    ],
    badge: 'Топ',
  },
  {
    id: 'mazda-axela-2017',
    brand: 'mazda',
    model: 'Axela',
    year: 2017,
    price: 1000000,
    images: [
      {
        url: '/img/cars/mazda/Mazda-Axela.jpg',
        alt: 'Mazda Axela 2017',
        isMain: true,
      },
    ],
    badge: 'Спецпредложение',
  },
  {
    id: 'toyota-raize-2021',
    brand: 'toyota',
    model: 'Raize',
    year: 2021,
    price: 1600000,
    images: [
      {
        url: '/img/cars/toyota/Toyota-Raize.jpg',
        alt: 'Toyota Raize 2021',
        isMain: true,
      },
    ],
    badge: 'Спецпредложение',
  },
  {
    id: 'bmw-2-series-2020',
    brand: 'bmw',
    model: '2-Series',
    year: 2020,
    price: 1320000,
    images: [
      {
        url: '/img/cars/bmw/BMW-2-Series-F44.jpg',
        alt: 'BMW 2-Series 2020',
        isMain: true,
      },
    ],
    badge: 'Топ',
  },
  {
    id: 'bmw-x1-2018',
    brand: 'bmw',
    model: 'X1',
    year: 2018,
    price: 1650000,
    images: [
      {
        url: '/img/cars/bmw/BMW-X1.jpg',
        alt: 'BMW X1 2018',
        isMain: true,
      },
    ],
    badge: 'Популярное',
  },
  {
    id: 'bmw-x2-2018',
    brand: 'bmw',
    model: 'X2',
    year: 2018,
    price: 1650000,
    images: [
      {
        url: '/img/cars/bmw/BMW-X2.jpg',
        alt: 'BMW X2 2018',
        isMain: true,
      },
    ],
    badge: 'Популярное',
  },
  {
    id: 'nissan-dayz-2021',
    brand: 'nissan',
    model: 'Dayz',
    year: 2021,
    price: 600000,
    images: [
      {
        url: '/img/cars/nissan/nissan-dayz.jpg',
        alt: 'Nissan Dayz 2021',
        isMain: true,
      },
    ],
    badge: 'Бюджетный',
  },
  {
    id: 'bmw-1-series-2016',
    brand: 'bmw',
    model: '1-Series',
    year: 2016,
    price: 950000,
    images: [
      {
        url: '/img/cars/bmw/BMW-1-Series-old.jpg',
        alt: 'BMW 1-Series 2016',
        isMain: true,
      },
    ],
    badge: 'Топ',
  },
  {
    id: 'suzuki-jimny-2021',
    brand: 'suzuki',
    model: 'Jimny',
    year: 2021,
    price: 1600000,
    images: [
      {
        url: '/img/cars/suzuki/suzuki-jimny.jpg',
        alt: 'Suzuki Jimny 2021',
        isMain: true,
      },
    ],
    badge: 'Новинка',
  },
  {
    id: 'mitsubishi-eclipse-cross-2023',
    brand: 'mitsubishi',
    model: 'Eclipse Cross',
    year: 2023,
    price: 2000000,
    images: [
      {
        url: '/img/cars/mitsubishi/mitsubishi-eclipse-cross.jpg',
        alt: 'Mitsubishi Eclipse Cross 2023',
        isMain: true,
      },
    ],
    badge: 'Новинка',
  },
  {
    id: 'honda-freed-2026',
    brand: 'Honda',
    model: 'Freed',
    year: 2026,
    price: 2150000,
    images: [
      {
        url: '/img/cars/honda/honda-freed.jpg',
        alt: 'Honda Freed 2026',
        isMain: true,
      },
    ],
    badge: 'Новинка',
  },
  {
    id: 'honda-fit-2022',
    brand: 'Honda',
    model: 'Fit',
    year: 2022,
    price: 1200000,
    images: [
      {
        url: '/img/cars/honda/honda-fit.jpg',
        alt: 'Honda Fit 2022',
        isMain: true,
      },
    ],
    badge: 'Новинка',
  },
  {
    id: 'toyota-corolla-cross-2022',
    brand: 'Toyota',
    model: 'Corolla Cross',
    year: 2022,
    price: 2150000,
    images: [
      {
        url: '/img/cars/toyota/toyota-corolla-cross.jpg',
        alt: 'Toyota Corolla Cross 2022',
        isMain: true,
      },
    ],
    badge: 'Новинка',
  },
  {
    id: 'mazda-cx3-2015',
    brand: 'Mazda',
    model: 'CX-3',
    year: 2015,
    price: 1050000,
    images: [
      {
        url: '/img/cars/mazda/mazda-cx3.jpg',
        alt: 'Mazda CX-3 2015',
        isMain: true,
      },
    ],
    badge: 'Новинка',
  },
];

export function getAllCars(): Car[] {
  return carsData;
}

export function getPopularModels(): Car[] {
  return carsData.filter((car) => car.badge == "Популярное");
}

export function formatPrice(price: number): string {
  return price.toLocaleString('ru-RU') + ' ₽';
}

export function getMainImage(car: Car): string {
  const main = car.images.find((img) => img.isMain);
  return main ? main.url : car.images[0]?.url || '';
}
