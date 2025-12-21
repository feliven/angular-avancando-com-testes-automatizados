import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { AlbumFotosService } from '../../services/album-fotos.service';
import { Foto } from '../../interfaces/foto';
import { AlbumFotosComponent } from 'src/app/components/album-fotos/album-fotos.component';
import { UniqueIdService } from 'src/app/services/unique-id.service';

@Component({
  selector: 'app-home',
  imports: [AlbumFotosComponent, AsyncPipe],
  providers: [UniqueIdService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  title = 'Angular testing';
  fotosBackend: Observable<Foto[]>;

  constructor(private service: AlbumFotosService) {}

  ngOnInit(): void {
    this.fotosBackend = this.service.getFotos();
  }
}
