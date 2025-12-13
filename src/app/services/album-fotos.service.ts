import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Foto } from '../interfaces/foto';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlbumFotosService {
  enderecoAPI = environment.apiURL;

  constructor(private http: HttpClient) {}

  getFotos(): Observable<Foto[]> {
    return this.http.get<Foto[]>(`${this.enderecoAPI}/photos`);
  }
}
