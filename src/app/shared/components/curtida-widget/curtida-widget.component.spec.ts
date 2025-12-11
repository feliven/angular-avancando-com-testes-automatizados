import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CurtidaWidgetComponent } from './curtida-widget.component';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';

describe(CurtidaWidgetComponent.name, () => {
  let component: CurtidaWidgetComponent;
  let fixture: ComponentFixture<CurtidaWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurtidaWidgetComponent, FontAwesomeModule],
      providers: [UniqueIdService],
    }).compileComponents();

    fixture = TestBed.createComponent(CurtidaWidgetComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('deve criar ID único se não houver um', () => {
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('não deve criar ID único se já existir um', () => {
    console.log(component.id);

    const idExistente = 'teste';
    component.id = idExistente;
    console.log(component.id);

    fixture.detectChanges();
    expect(component.id).toEqual(idExistente);
  });

  it(`método darCurtida deve emitir variável "curtida"`, (done) => {
    fixture.detectChanges();

    const spyCurtida = spyOn(component.curtida, 'emit');

    component.adicionarCurtida();

    setTimeout(() => {
      expect(spyCurtida).toHaveBeenCalled();
      done();
    }, 600);
  });

  // it('', () => {});
});
