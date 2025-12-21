import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AlbumFotosService } from './album-fotos.service';
import { Foto } from '../shared/interfaces/foto';
import { criarMockFotos } from '../shared/criarMockFotos';

@Injectable({
  providedIn: 'root',
})
export class AlbumFotosMockService extends AlbumFotosService {
  getFotos(): Observable<Foto[]> {
    return of(criarMockFotos(5));
  }
}
