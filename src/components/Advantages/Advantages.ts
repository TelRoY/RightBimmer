import Handlebars from 'handlebars';
import advantagesTemplate from './Advantages.hbs?raw';
import './Advantages.css';

interface Advantage {
  icon: string;
  title: string;
  description: string;
}

export class Advantages {
  private container: HTMLElement;

  constructor(containerId: string) {
    this.container = document.getElementById(containerId) as HTMLElement;
  }

  render(): void {
    const data = {
      advantages: this.getAdvantagesData(),
    };

    const template = Handlebars.compile(advantagesTemplate);
    this.container.innerHTML = template(data);
  }

  private getAdvantagesData(): Advantage[] {
    return [
      {
        icon: this.getAuctionIcon(),
        title: 'Прямые аукционы',
        description: 'Доступ к закрытым японским аукционам без посредников',
      },
      {
        icon: this.getPriceIcon(),
        title: 'Лучшие цены',
        description: 'Экономия до 40% по сравнению с покупкой у перекупщиков',
      },
      {
        icon: this.getCheckIcon(),
        title: 'Тщательная проверка',
        description: 'Подробный отчет о состоянии автомобиля перед покупкой',
      },
      {
        icon: this.getDeliveryIcon(),
        title: 'Полный цикл',
        description: 'Доставка, растаможка и постановка на учет "под ключ"',
      },
    ];
  }

  private getAuctionIcon(): string {
    return `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path d="M2 17l10 5 10-5"/>
      <path d="M2 12l10 5 10-5"/>
    </svg>`;
  }

  private getPriceIcon(): string {
    return `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>`;
  }

  private getCheckIcon(): string {
    return `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>`;
  }

  private getDeliveryIcon(): string {
    return `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="1" y="3" width="15" height="13"/>
      <polyline points="16 8 20 8 23 11 23 16 16 16 16 8"/>
      <circle cx="5.5" cy="18" r="2.5"/>
      <circle cx="18.5" cy="18" r="2.5"/>
    </svg>`;
  }
}
