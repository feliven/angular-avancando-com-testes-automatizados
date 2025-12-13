import { Component, OnInit } from '@angular/core';
import { AlbumFotosService } from './services/album-fotos.service';
import { Foto } from './interfaces/foto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  title = 'Angular testing';
  fotosBackend: Observable<Foto[]>;

  constructor(private service: AlbumFotosService) {}

  ngOnInit(): void {
    this.fotosBackend = this.service.getFotos();
  }

  // public curtidas = 0;

  // adicionarCurtida() {
  //   this.curtidas++;
  // }
}
