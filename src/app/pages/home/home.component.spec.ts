import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { HomeComponent } from './home.component';
import { Foto } from '../../interfaces/foto';
import { AlbumFotosService } from '../../services/album-fotos.service';

function criarMockFotos(tamanho: number): Foto[] {
  const mockFotos: Foto[] = Array.from({ length: tamanho }, (_, i) => ({
    id: i + 1,
    url: `https://example.com/${i + 1}.jpg`,
    description: `Foto ${i + 1}`,
  }));

  return mockFotos;
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: AlbumFotosService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(AlbumFotosService);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('deve exibir fotos quando chegarem da API', () => {
    const mockFotos = criarMockFotos(5);

    spyOn(service, 'getFotos').and.returnValue(of(mockFotos));

    fixture.detectChanges();

    const album = fixture.nativeElement.querySelector('app-album-fotos');
    const loader = fixture.nativeElement.querySelector('.loader');

    expect(album).not.toBeNull();
    expect(loader).toBeNull();
  });

  it('deve exibir loader enquanto fotos não chegarem da API', () => {
    fixture.detectChanges();

    const album = fixture.nativeElement.querySelector('app-album-fotos');
    const loader = fixture.nativeElement.querySelector('.loader');

    expect(album).toBeNull();
    expect(loader).not.toBeNull();
  });

  // it('',()=>{})
});
