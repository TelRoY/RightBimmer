import Handlebars from 'handlebars';
import heroTemplate from './Hero.hbs?raw';
import './Hero.css';

export class Hero {
  private container: HTMLElement;

  constructor(containerId: string) {
    this.container = document.getElementById(containerId) as HTMLElement;
  }

  render(): void {
    const template = Handlebars.compile(heroTemplate);
    this.container.innerHTML = template({});
  }
}
