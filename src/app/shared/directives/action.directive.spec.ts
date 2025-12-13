import { Component, DebugElement } from '@angular/core';
import { ActionDirective } from './action.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('ActionDirective', () => {
  let fixture: ComponentFixture<ActionDirectiveTestComponent>;
  let component: ActionDirectiveTestComponent;
  let divElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionDirectiveTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ActionDirectiveTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    divElement = fixture.debugElement.query(By.css('.dummy'));
  });

  it('should create an instance', () => {
    const directive = new ActionDirective();
    expect(directive).toBeTruthy();
  });

  it('@Output appAction deve emitir evento com payload ao pressionar Enter', () => {
    const pressionarEnter = new KeyboardEvent('keyup', { key: 'Enter' });
    divElement.triggerEventHandler('keyup', pressionarEnter);
    fixture.detectChanges();

    expect(component.hasEvent()).toBeTrue();
  });

  it('@Output appAction deve emitir evento com payload ao pressionar Espaço', () => {
    const pressionarEspaco = new KeyboardEvent('keyup', { key: ' ' });
    divElement.triggerEventHandler('keyup', pressionarEspaco);
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
