import Handlebars from 'handlebars';
import ctaTemplate from './CTA.hbs?raw';
import './CTA.css';

export class CTA {
  private container: HTMLElement;

  constructor(containerId: string) {
    this.container = document.getElementById(containerId) as HTMLElement;
  }

  render(): void {
    const template = Handlebars.compile(ctaTemplate);
    this.container.innerHTML = template({});
    this.initForm();
  }

  private initForm(): void {
    const form = this.container.querySelector('.cta-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = (form.querySelector('input[type="text"]') as HTMLInputElement)?.value;
        const phone = (form.querySelector('input[type="tel"]') as HTMLInputElement)?.value;

        if (!name || !phone) {
          alert('Пожалуйста, заполните имя и телефон!');
          return;
        }

        alert(`Спасибо, ${name}! Мы свяжемся с вами в ближайшее время.`);
        form.reset();
      });
    }
  }
}
