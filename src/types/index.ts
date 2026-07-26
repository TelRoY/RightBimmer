export interface ComponentProps {
    [key: string]: string | number | boolean | string[] | Record<string, unknown>;
  }
  
  export interface Component {
    render(): string;
    mount(container: HTMLElement): void;
    update?(data: ComponentProps): void;
    destroy?(): void;
  }
  
  export interface EventMap {
    click: MouseEvent;
    input: Event;
    submit: Event;
    change: Event;
    [key: string]: Event;
  }
