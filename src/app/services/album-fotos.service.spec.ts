import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';

import { AlbumFotosService } from './album-fotos.service';
import { Foto } from '../shared/interfaces/foto';
import { criarMockFotos } from '../shared/criarMockFotos';

function criarMockDados(tamanho: number): {
  api: string;
  dados: Foto[];
} {
  return {
    api: 'http://localhost:3000/photos',
    dados: criarMockFotos(tamanho),
  };
}

describe('AlbumFotosService', () => {
  let service: AlbumFotosService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(AlbumFotosService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => httpController.verify());

  it('deve retornar fotos com descrição em maiúscula', (done) => {
    // Math.floor(Math.random() * (max - min)) + min
    const length = Math.floor(Math.random() * (20 - 1)) + 1;

    const mockDados = criarMockDados(length);

    service.getFotos().subscribe((fotos) => {
      expect(fotos.length).toEqual(length);
      fotos.forEach((foto) => {
        expect(foto.description).toContain('FOTO ');
        expect(foto.url).toContain('https://example.com/');
      });
      done();
    });

    httpController.expectOne(mockDados.api).flush(mockDados.dados);

    // A chamada expectOne tem que ficar depois do subscribe, que dispara a requisição para o backend.
    // É como se o httpClient estivesse esperando agora alguém decidir qual vai ser a resposta dele.
    // Quando essa requisição é feita, ela não vai para o backend, ela vai meio que ficar parada aguardando.
  });

  // it('',()=>{})
});
