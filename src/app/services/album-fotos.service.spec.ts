import { TestBed } from '@angular/core/testing';

import { AlbumFotosService } from './album-fotos.service';

describe('AlbumFotosService', () => {
  let service: AlbumFotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumFotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
