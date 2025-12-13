import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MolduraFotoComponent } from '../moldura-foto/moldura-foto.component';
import { Foto } from '../../interfaces/foto';

@Component({
  selector: 'app-album-fotos',
  imports: [MolduraFotoComponent],
  templateUrl: './album-fotos.component.html',
  styleUrl: './album-fotos.component.scss',
})
export class AlbumFotosComponent implements OnChanges {
  @Input() listaFotos: Foto[] = [];
  linhas: Foto[][] = [];
  itensPorLinha = 4;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.listaFotos && changes.listaFotos.currentValue) {
      this.linhas = this.agruparColunas(changes.listaFotos.currentValue);
    }
  }

  agruparColunas(listaFotos: Foto[]): Foto[][] {
    const linhasNovas: Foto[][] = [];

    for (
      let index = 0;
      index < listaFotos.length;
      index += this.itensPorLinha
    ) {
      linhasNovas.push(listaFotos.slice(index, index + this.itensPorLinha));
    }

    return linhasNovas;
  }
}
