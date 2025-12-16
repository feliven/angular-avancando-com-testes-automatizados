import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumFotosComponent } from './album-fotos.component';
import { MolduraFotoComponent } from '../moldura-foto/moldura-foto.component';
import { Foto } from '../../interfaces/foto';

function criarMockFotos(tamanho: number): Foto[] {
  // Creates an array with X empty slots
  // Loop callback: _ ignores the element, i is the index

  const mockFotos: Foto[] = Array.from({ length: tamanho }, (_, i) => ({
    id: i + 1,
    url: `https://example.com/${i + 1}.jpg`,
    description: `Foto ${i + 1}`,
  }));

  return mockFotos;
}

describe('AlbumFotosComponent', () => {
  let component: AlbumFotosComponent;
  let fixture: ComponentFixture<AlbumFotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumFotosComponent, MolduraFotoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlbumFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // ✅ Component creation
  // ✅ Input binding for listaFotos
  // ✅ Default empty array initialization
  // ✅ ngOnChanges lifecycle hook behavior
  // ✅ Grouping photos into rows of 4 items
  // ✅ Handling remaining photos (less than 4)
  // ✅ Handling empty photo lists
  // ✅ Default itensPorLinha value

  // recebe input listaFotos do AppComponent

  describe('Input: listaFotos', () => {
    it('should receive listaFotos from AppComponent', () => {
      const mockFotos = criarMockFotos(2);

      component.listaFotos = mockFotos;

      expect(component.listaFotos).toEqual(mockFotos);
    });

    it('should have empty listaFotos by default', () => {
      expect(component.listaFotos).toEqual([]);
    });
  });

  // altera listaFotos quando forem detectadas mudanças

  describe('ngOnChanges', () => {
    it('should update linhas when listaFotos changes', () => {
      const mockFotos: Foto[] = criarMockFotos(3);

      component.ngOnChanges({
        listaFotos: {
          currentValue: mockFotos,
          previousValue: [],
          firstChange: true,
          isFirstChange: () => true,
        },
      });

      expect(component.linhas.length).toBe(1);
      expect(component.linhas[0]).toEqual(mockFotos);
    });

    it('should not update linhas if listaFotos change has no currentValue', () => {
      component.linhas = [[{ id: 1, url: 'test', description: 'test' }]];

      component.ngOnChanges({
        listaFotos: {
          currentValue: undefined,
          previousValue: [],
          firstChange: false,
          isFirstChange: () => false,
        },
      });

      expect(component.linhas.length).toBe(1);
    });

    it('should not update linhas if listaFotos change is not included', () => {
      component.linhas = [[{ id: 1, url: 'test', description: 'test' }]];

      component.ngOnChanges({});

      expect(component.linhas.length).toBe(1);
    });
  });

  // deve agrupar linhas a cada 4 itens

  describe('agruparColunas', () => {
    it('should group photos into rows of 4 items per line', () => {
      const mockFotos: Foto[] = criarMockFotos(12);

      component.ngOnChanges({
        listaFotos: {
          currentValue: mockFotos,
          previousValue: [],
          firstChange: true,
          isFirstChange: () => true,
        },
      });

      expect(component.linhas.length).toBe(3);
      expect(component.linhas[0].length).toBe(4);
      expect(component.linhas[1].length).toBe(4);
      expect(component.linhas[2].length).toBe(4);
    });

    it('should handle remaining photos less than itensPorLinha', () => {
      const mockFotos: Foto[] = criarMockFotos(5);

      component.ngOnChanges({
        listaFotos: {
          currentValue: mockFotos,
          previousValue: [],
          firstChange: true,
          isFirstChange: () => true,
        },
      });

      expect(component.linhas.length).toBe(2);
      expect(component.linhas[0].length).toBe(4);
      expect(component.linhas[1].length).toBe(1);
    });

    it('should handle empty listaFotos', () => {
      component.ngOnChanges({
        listaFotos: {
          currentValue: [],
          previousValue: [],
          firstChange: true,
          isFirstChange: () => true,
        },
      });

      expect(component.linhas.length).toBe(0);
    });

    it('should have correct itensPorLinha default value', () => {
      expect(component.itensPorLinha).toBe(4);
    });
  });
});
