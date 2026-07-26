export interface CarImage {
  url: string;
  alt: string;
  isMain?: boolean;
}

export interface CarSpec {
  engine: string;
  power: number; // л.с.
  transmission: string;
  drive: string;
  mileage: string; // пробег
  color: string;
  year: number;
}

export interface Car {
  id: string;
  brand: string;
  model: string;
  generation: string;
  year: number;
  price: number; // цена в рублях
  images: CarImage[];
  badge?: 'Хит' | 'Новинка' | 'Популярное' | 'Топ' | 'Спецпредложение' | 'Бюджетный';
}

export interface Brand {
  id: string;
  name: string;
  country: string;
  logo: string;
}

export const brands: Brand[] = [
  { id: 'bmw', name: 'BMW', country: 'Germany', logo: '/img/brands/bmw.svg' },
  { id: 'mazda', name: 'Mazda', country: 'Japan', logo: '/img/brands/mazda.svg' },
  { id: 'toyota', name: 'Toyota', country: 'Japan', logo: '/img/brands/toyota.svg' },
  { id: 'honda', name: 'Honda', country: 'Japan', logo: '/img/brands/honda.svg' },
  { id: 'nissan', name: 'Nissan', country: 'Japan', logo: '/img/brands/nissan.svg' },
];

export const carsData: Car[] = [
  {
    id: 'bmw-1-series-2020',
    brand: 'bmw',
    model: '1-Series',
    generation: 'F40',
    year: 2020,
    price: 1350000,
    images: [
      {
        url: '/img/cars/bmw/BMW-1-Series-new.jpg',
        alt: 'BMW 1-Series 2020',
        isMain: true,
      },
    ],
    badge: 'Топ'
  },
  {
    id: 'bmw-2-series-2018',
    brand: 'bmw',
    model: '2-Series',
    generation: 'F45',
    year: 2018,
    price: 1100000,
    images: [
      {
        url: '/img/cars/bmw/BMW-2-Series-M.jpg',
        alt: 'BMW 2-Series 2018',
        isMain: true,
      },
    ],
    badge: 'Популярное'
  },
  {
    id: 'bmw-2-series-2017',
    brand: 'bmw',
    model: '2-Series',
    generation: 'F45',
    year: 2017,
    price: 1250000,
    images: [
      {
        url: '/img/cars/bmw/BMW-2-Series-Lux.jpg',
        alt: 'BMW 2-Series 2017',
        isMain: true,
      },
    ],
    badge: 'Популярное'
  },
  {
    id: 'mazda-axela-2017',
    brand: 'mazda',
    model: 'Axela',
    generation: '',
    year: 2017,
    price: 1200000,
    images: [
      {
        url: '/img/cars/mazda/Mazda-Axela.jpg',
        alt: 'Mazda Axela 2017',
        isMain: true,
      },
    ],
    badge: 'Популярное'
  },
  {
    id: 'toyota-raize-2021',
    brand: 'toyota',
    model: 'Raize',
    generation: 'A200',
    year: 2021,
    price: 1800000,
    images: [
      {
        url: '/img/cars/toyota/Toyota-Raize.jpg',
        alt: 'Toyota Raize 2021',
        isMain: true,
      },
    ],
    badge: 'Топ'
  },
  {
    id: 'bmw-2-series-2020',
    brand: 'bmw',
    model: '2-Series',
    generation: 'F44',
    year: 2020,
    price: 1450000,
    images: [
      {
        url: '/img/cars/bmw/BMW-2-Series-F44.jpg',
        alt: 'BMW 2-Series 2020',
        isMain: true,
      },
    ],
    badge: 'Топ'
  },
  {
    id: 'bmw-x1-2018',
    brand: 'bmw',
    model: 'X1',
    generation: 'F46',
    year: 2018,
    price: 1800000,
    images: [
      {
        url: '/img/cars/bmw/BMW-X1.jpg',
        alt: 'BMW X1 2018',
        isMain: true,
      },
    ],
    badge: 'Топ'
  },
  {
    id: 'bmw-x2-2018',
    brand: 'bmw',
    model: 'X2',
    generation: 'YH15',
    year: 2018,
    price: 1800000,
    images: [
      {
        url: '/img/cars/bmw/BMW-X2.jpg',
        alt: 'BMW X2 2018',
        isMain: true,
      },
    ],
    badge: 'Топ'
  },
  {
    id: 'bmw-x2-2018',
    brand: 'bmw',
    model: 'X2',
    generation: 'YH15',
    year: 2018,
    price: 1800000,
    images: [
      {
        url: '/img/cars/bmw/BMW-X2.jpg',
        alt: 'BMW X2 2018',
        isMain: true,
      },
    ],
    badge: 'Топ'
  },
  {
    id: 'nissan-dayz-2021',
    brand: 'nissan',
    model: 'Dayz',
    generation: 'B43W',
    year: 2021,
    price: 750000,
    images: [
      {
        url: '/img/cars/nissan/nissan-dayz.jpg',
        alt: 'Nissan Dayz 2021',
        isMain: true,
      },
    ],
    badge: 'Бюджетный'
  },
  {
    id: 'bmw-1-series-2016',
    brand: 'bmw',
    model: '1-Series',
    generation: 'F20',
    year: 2016,
    price: 1100000,
    images: [
      {
        url: '/img/cars/bmw/BMW-1-Series-old.jpg',
        alt: 'BMW 1-Series 2016',
        isMain: true,
      },
    ],
    badge: 'Топ'
  },
  {
    id: 'suzuki-jimny-2021',
    brand: 'suzuki',
    model: 'Jimny',
    generation: '',
    year: 2021,
    price: 1800000,
    images: [
      {
        url: '/img/cars/suzuki/suzuki-jimny.jpg',
        alt: 'Suzuki Jimny 2021',
        isMain: true,
      },
    ],
    badge: 'Новинка'
  },
  {
    id: 'mitsubishi-eclipse-cross-2023',
    brand: 'mitsubishi',
    model: 'Eclipse Cross',
    generation: '',
    year: 2023,
    price: 2200000,
    images: [
      {
        url: '/img/cars/mitsubishi/mitsubishi-eclipse-cross.jpg',
        alt: 'Mitsubishi Eclipse Cross 2023',
        isMain: true,
      },
    ],
    badge: 'Новинка'
  },
  {
    id: 'honda-freed-2026',
    brand: 'Honda',
    model: 'Freed',
    generation: '',
    year: 2026,
    price: 2300000,
    images: [
      {
        url: '/img/cars/honda/honda-freed.jpg',
        alt: 'Honda Freed 2026',
        isMain: true,
      },
    ],
    badge: 'Новинка'
  },
  {
    id: 'honda-fit-2022',
    brand: 'Honda',
    model: 'Fit',
    generation: '',
    year: 2022,
    price: 1400000,
    images: [
      {
        url: '/img/cars/honda/honda-fit.jpg',
        alt: 'Honda Fit 2022',
        isMain: true,
      },
    ],
    badge: 'Новинка'
  },
  {
    id: 'toyota-corolla-cross-2022',
    brand: 'Toyota',
    model: 'Corolla Cross',
    generation: '',
    year: 2022,
    price: 2300000,
    images: [
      {
        url: '/img/cars/toyota/toyota-corolla-cross.jpg',
        alt: 'Toyota Corolla Cross 2022',
        isMain: true,
      },
    ],
    badge: 'Новинка'
  },
  {
    id: 'mazda-cx3-2015',
    brand: 'Mazda',
    model: 'CX-3',
    generation: '',
    year: 2015,
    price: 1200000,
    images: [
      {
        url: '/img/cars/mazda/mazda-cx3.jpg',
        alt: 'Mazda CX-3 2015',
        isMain: true,
      },
    ],
    badge: 'Новинка'
  },
];

export function getAllCars(): Car[] {
  return carsData;
}

export function getCarsByBrand(brandId: string): Car[] {
  return carsData.filter((car) => car.brand === brandId);
}

export function getPopularModels(): Car[] {
  return carsData.filter((car) => car.badge !== undefined);
}

export function getCarById(id: string): Car | undefined {
  return carsData.find((car) => car.id === id);
}

export function getBrandById(id: string): Brand | undefined {
  return brands.find((brand) => brand.id === id);
}

export function searchCars(query: string): Car[] {
  const searchLower = query.toLowerCase();
  return carsData.filter((car) => {
    const brandName = getBrandById(car.brand)?.name.toLowerCase() || '';
    return (
      brandName.includes(searchLower) ||
      car.model.toLowerCase().includes(searchLower) ||
      car.id.toLowerCase().includes(searchLower)
    );
  });
}

export function formatPrice(price: number): string {
  return price.toLocaleString('ru-RU') + ' ₽';
}

export function getMainImage(car: Car): string {
  const main = car.images.find((img) => img.isMain);
  return main ? main.url : car.images[0]?.url || '';
}
