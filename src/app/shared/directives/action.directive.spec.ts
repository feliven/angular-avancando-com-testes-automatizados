import { Component } from '@angular/core';
import { ActionDirective } from './action.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('ActionDirective', () => {
  let fixture: ComponentFixture<ActionDirectiveTestComponent>;
  let component: ActionDirectiveTestComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionDirectiveTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ActionDirectiveTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = new ActionDirective();
    expect(directive).toBeTruthy();
  });

  it('@Output appAction deve emitir evento com payload ao pressionar Enter', () => {
    const div = fixture.nativeElement.querySelector('.dummy');

    const pressionarEnter = new KeyboardEvent('keyup', { key: 'Enter' });

    div.dispatchEvent(pressionarEnter);
    fixture.detectChanges();

    expect(component.hasEvent()).toBeTrue();
  });

  it('@Output appAction deve emitir evento com payload ao pressionar Espaço', () => {
    const div = fixture.nativeElement.querySelector('.dummy');

    const pressionarEspaco = new KeyboardEvent('keyup', { key: ' ' });

    div.dispatchEvent(pressionarEspaco);
    fixture.detectChanges();

    expect(component.hasEvent()).toBeTrue();
  });

  it('@Output appAction deve emitir evento com payload ao clicar', () => {
    const div = fixture.nativeElement.querySelector('.dummy');

    const darClique = new Event('click');

    div.dispatchEvent(darClique);
    fixture.detectChanges();

    expect(component.hasEvent()).toBeTrue();
  });

  it('@Output appAction deve emitir evento com payload ao clicar - com DebugElement e By', () => {
    // const div = fixture.nativeElement.querySelector('.dummy');

    const div = fixture.debugElement.query(
      By.directive(ActionDirective)
    ).nativeElement;

    const darClique = new Event('click');

    div.dispatchEvent(darClique);
    fixture.detectChanges();

    expect(component.hasEvent()).toBeTrue();
  });

  // it('', () => {});
});

@Component({
  template: `<div class="dummy" (appAction)="actionHandler($event)"></div>`,
  imports: [ActionDirective],
})
class ActionDirectiveTestComponent {
  private evento: Event = null;

  actionHandler(variavelEvento: Event): void {
    this.evento = variavelEvento;
  }

  hasEvent(): boolean {
    return !!this.evento;

    // It is not a single operator, but rather the logical NOT operator (!) applied twice.
    // First !: Converts the value to a boolean and negates it (e.g., !"hello" becomes false).
    // Second !: Negates that result back to its original truthiness (e.g., !false becomes true).
  }
}
