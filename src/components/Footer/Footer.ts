import Handlebars from 'handlebars';
import footerTemplate from './Footer.hbs?raw';
import './Footer.css';

export class Footer {
  private container: HTMLElement;

  constructor(containerId: string) {
    this.container = document.getElementById(containerId) as HTMLElement;
  }

  render(): void {
    const template = Handlebars.compile(footerTemplate);
    this.container.innerHTML = template({});
  }
}
