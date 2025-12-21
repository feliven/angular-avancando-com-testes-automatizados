import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appAction]',
})
export class ActionDirective {
  @Output() appAction: EventEmitter<Event> = new EventEmitter();

  constructor() {}

  @HostListener('click', ['$event'])
  resolverClique(evento: Event) {
    this.appAction.emit(evento);
  }

  @HostListener('keyup', ['$event'])
  resolverKeyPress(evento: KeyboardEvent) {
    if (evento.key === 'Enter' || evento.key === ' ') {
      this.appAction.emit(evento);
    }
  }

  // @HostListener('keyup', ['$event'])
  // resolverKeyPress(evento: KeyboardEvent) {
  //   this.appAction.emit(evento);
  // }
}
