import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { HomeComponent } from './home.component';
import { AlbumFotosService } from '../../services/album-fotos.service';
import { AlbumFotosMockService } from '../../services/album-fotos-mock.service';

describe('HomeComponent - Mock Provider', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        provideHttpClient(),
        {
          provide: AlbumFotosService,
          useClass: AlbumFotosMockService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('deve exibir fotos quando chegarem da API', () => {
    fixture.detectChanges();

    const album = fixture.nativeElement.querySelector('app-album-fotos');
    const loader = fixture.nativeElement.querySelector('.loader');

    expect(album).not.toBeNull();
    expect(loader).toBeNull();
  });

  // it('',()=>{})
});
