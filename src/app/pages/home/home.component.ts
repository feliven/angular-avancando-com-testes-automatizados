import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AlbumFotosService } from '../../services/album-fotos.service';
import { Foto } from '../../shared/interfaces/foto';
import { AlbumFotosComponent } from '../../components/album-fotos/album-fotos.component';
import { UniqueIdService } from '../../services/unique-id.service';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe, AlbumFotosComponent, FontAwesomeModule],
  providers: [UniqueIdService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  title = 'Angular testing';
  fotosBackend: Observable<Foto[]>;
  icones = { faCircleNotch };

  constructor(private service: AlbumFotosService) {}

  ngOnInit(): void {
    this.fotosBackend = this.service.getFotos();
  }
}
