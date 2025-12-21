import { TestBed } from '@angular/core/testing';

import { AlbumFotosMockService } from './album-fotos-mock.service';
import { provideHttpClient } from '@angular/common/http';

describe('AlbumFotosMockService', () => {
  let service: AlbumFotosMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(AlbumFotosMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
