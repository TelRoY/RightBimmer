import Handlebars from 'handlebars'; // <-- ВАЖНО: добавить эту строку!
import { Header } from '@components/Header/Header';
import { Hero } from '@components/Hero/Hero';
import { Advantages } from '@components/Advantages/Advantages';
import { Models } from '@components/Models/Models';
import { Calculator } from '@components/Calculator/Calculator';
import { Steps } from '@components/Steps/Steps';
import { CTA } from '@components/CTA/CTA';
import { Footer } from '@components/Footer/Footer';
import appTemplate from './App.hbs?raw';
import './App.css';

export class App {
  private container: HTMLElement;

  constructor(containerId: string) {
    this.container = document.getElementById(containerId) as HTMLElement;
  }

  render(): void {
    const template = Handlebars.compile(appTemplate);
    this.container.innerHTML = template({});
    this.initComponents();
  }

  private initComponents(): void {
    const components = [
      { id: 'header-container', Component: Header },
      { id: 'hero-container', Component: Hero },
      { id: 'advantages-container', Component: Advantages },
      { id: 'models-container', Component: Models },
      { id: 'calculator-container', Component: Calculator },
      { id: 'steps-container', Component: Steps },
      { id: 'cta-container', Component: CTA },
      { id: 'footer-container', Component: Footer },
    ];

    components.forEach(({ id, Component }) => {
      const instance = new Component(id);
      if (Component === Hero) {
        (instance as Hero).render().catch(console.error);
      } else {
        instance.render();
      }
    });
  }
}
