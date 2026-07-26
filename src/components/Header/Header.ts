import Handlebars from 'handlebars';
import headerTemplate from './Header.hbs';
import './Header.css';

export class Header {
  private container: HTMLElement;

  constructor(containerId: string) {
    this.container = document.getElementById(containerId) as HTMLElement;
  }

  render(): void {
    const template = Handlebars.compile(headerTemplate);
    this.container.innerHTML = template({});
    this.initNavigation();
  }

  private initNavigation(): void {
    const links = this.container.querySelectorAll('.nav a');
    links.forEach((link) => {
      link.addEventListener('click', () => {
        links.forEach((l) => l.classList.remove('active'));
        link.classList.add('active');
      });
    });
  }
}
