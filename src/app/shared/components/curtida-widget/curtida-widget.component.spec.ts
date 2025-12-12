import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
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

  it(`método darCurtida deve emitir variável "curtida" 1 vez dentro do debounceTime`, (done) => {
    fixture.detectChanges();

    const spyCurtida = spyOn(component.curtida, 'emit');

    component.adicionarCurtida();
    component.adicionarCurtida();
    component.adicionarCurtida();
    component.adicionarCurtida();
    component.adicionarCurtida();

    setTimeout(() => {
      expect(spyCurtida).toHaveBeenCalledTimes(1);
      done();
    }, 500);
  });

  it(`método darCurtida deve emitir variável "curtida" 1 vez dentro do debounceTime - com fakeAsync`, fakeAsync(() => {
    fixture.detectChanges();

    const spyCurtida = spyOn(component.curtida, 'emit');

    component.adicionarCurtida();
    component.adicionarCurtida();
    component.adicionarCurtida();
    component.adicionarCurtida();
    component.adicionarCurtida();

    tick(500);

    expect(spyCurtida).toHaveBeenCalledTimes(1);
  }));

  it(`método darCurtida deve emitir variável "curtida" X vezes a cada X períodos de debounceTime - com fakeAsync`, fakeAsync(() => {
    fixture.detectChanges();

    const spyCurtida = spyOn(component.curtida, 'emit');

    component.adicionarCurtida();
    tick(500);
    component.adicionarCurtida();
    tick(500);
    component.adicionarCurtida();
    tick(500);
    component.adicionarCurtida();
    tick(500);
    component.adicionarCurtida();
    tick(500);

    expect(spyCurtida).toHaveBeenCalledTimes(5);
  }));

  it(`método darCurtida não deve emitir nada antes do debounceTime de 500ms`, (done) => {
    fixture.detectChanges();

    const spyCurtida = spyOn(component.curtida, 'emit');

    component.adicionarCurtida();

    const debounceTime = Math.floor(Math.random() * 500);

    setTimeout(() => {
      expect(spyCurtida).not.toHaveBeenCalled();
      done();
    }, debounceTime);
  });

  it(`método darCurtida não deve emitir nada antes do debounceTime de 500ms - com fakeAsync`, fakeAsync(() => {
    fixture.detectChanges();

    const spyCurtida = spyOn(component.curtida, 'emit');

    component.adicionarCurtida();

    const debounceTime = Math.floor(Math.random() * 500);

    tick(debounceTime);

    expect(spyCurtida).not.toHaveBeenCalled();
  }));

  it('deve exibir total de curtidas na página', fakeAsync(() => {
    fixture.detectChanges();

    // const spyCurtida = spyOn(component.curtida, 'emit');

    // const totalLikes = 10;

    // Math.floor(Math.random() * (max - min)) + min
    const totalLikes = Math.floor(Math.random() * (50 - 1)) + 1;
    console.log(totalLikes, 'deve exibir total de curtidas na página');

    for (let i = 0; i < totalLikes; i++) {
      component.adicionarCurtida();
      tick(500);
      fixture.detectChanges();
    }

    const numeroLikesNaPagina: string = fixture.nativeElement
      .querySelector('.contador-likes')
      .textContent.trim();

    // expect(spyCurtida).toHaveBeenCalledTimes(totalLikes);

    expect(numeroLikesNaPagina).toEqual(totalLikes.toString());
  }));

  it('aria-label do contador de likes deve ser atualizada a cada clique válido', fakeAsync(() => {
    // fixture.detectChanges();

    const contadorLikes: HTMLElement =
      fixture.nativeElement.querySelector('.contador-likes');

    let labelContador: string;

    // Math.floor(Math.random() * (max - min)) + min
    const totalLikes = Math.floor(Math.random() * (50 - 1)) + 1;
    console.log(
      totalLikes,
      'aria-label do contador de likes deve ser atualizada a cada clique válido'
    );

    for (let i = 0; i < totalLikes; i++) {
      component.adicionarCurtida();
      tick(500);
      fixture.detectChanges();
      labelContador = contadorLikes.getAttribute('aria-label');
      expect(labelContador).toBe(i + ' curtidas');
    }

    console.log(labelContador);
  }));

  it('aria-label do contador de likes deve iniciar com valor padrão', fakeAsync(() => {
    fixture.detectChanges();

    const contadorLikes: HTMLElement =
      fixture.nativeElement.querySelector('.contador-likes');

    let labelContador: string;

    labelContador = contadorLikes.getAttribute('aria-label');

    expect(labelContador).toBe(0 + ' curtidas');
  }));

  it('clique no botão de curtida deve ativar contador de likes', fakeAsync(() => {
    fixture.detectChanges();

    const botaoCurtida: HTMLElement =
      fixture.nativeElement.querySelector('.curtida-widget');
    const contadorLikes: HTMLElement =
      fixture.nativeElement.querySelector('.contador-likes');

    const totalLikes = Math.floor(Math.random() * (50 - 1)) + 1;
    console.log(
      totalLikes,
      'clique no botão de curtida deve ativar contador de likes'
    );

    for (let i = 0; i < totalLikes; i++) {
      botaoCurtida.click();
      tick(500);
      fixture.detectChanges();
    }

    const textoContadorLikes = contadorLikes.textContent.trim();

    expect(textoContadorLikes).toEqual(totalLikes.toString());
  }));

  // it('', () => {});
});
