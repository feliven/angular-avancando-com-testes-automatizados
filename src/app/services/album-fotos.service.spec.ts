import { TestBed } from '@angular/core/testing';

import { AlbumFotosService } from './album-fotos.service';
import { provideHttpClient } from '@angular/common/http';

describe('AlbumFotosService', () => {
  let service: AlbumFotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(AlbumFotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
