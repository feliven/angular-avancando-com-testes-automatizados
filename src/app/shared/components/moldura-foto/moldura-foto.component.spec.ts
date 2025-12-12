import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolduraFotoComponent } from './moldura-foto.component';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';

describe('MolduraFotoComponent', () => {
  let component: MolduraFotoComponent;
  let fixture: ComponentFixture<MolduraFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MolduraFotoComponent],
      providers: [UniqueIdService],
    }).compileComponents();

    fixture = TestBed.createComponent(MolduraFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve exibir imagem quando src está definido', () => {
    fixture.detectChanges();

    const srcImagem = 'https://picsum.photos/600/400';

    component.src = srcImagem;
    fixture.detectChanges();

    const foto: HTMLImageElement = fixture.nativeElement.querySelector('img');

    expect(foto).toBeTruthy();
    expect(foto.src).toContain(srcImagem);
  });

  it('deve exibir imagem quando src e alt estão definidos', () => {
    fixture.detectChanges();

    const srcImagem = 'https://picsum.photos/600/400';
    const altImagem = 'teste';

    component.src = srcImagem;
    component.alt = altImagem;
    fixture.detectChanges();

    const foto: HTMLImageElement = fixture.nativeElement.querySelector('img');

    expect(foto).toBeTruthy();
    expect(foto.src).toContain(srcImagem);
    expect(foto.alt).toContain(altImagem);
  });
});
