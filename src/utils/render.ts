import Handlebars from 'handlebars';

export interface Component {
  template: string;
  data: Record<string, unknown>;
}

export function render(component: Component): string {
  const template = Handlebars.compile(component.template);
  return template(component.data);
}

export function renderToElement(component: Component, container: HTMLElement): void {
  container.innerHTML = render(component);
}

export function createComponent<T>(template: string, data: T): Component {
  return {
    template,
    data: data as Record<string, unknown>,
  };
}
