import { Component } from '@angular/core';
import { MolduraFotoComponent } from '../moldura-foto/moldura-foto.component';

@Component({
  selector: 'app-album-fotos',
  imports: [MolduraFotoComponent],
  templateUrl: './album-fotos.component.html',
  styleUrl: './album-fotos.component.scss',
})
export class AlbumFotosComponent {}
