import { Injectable } from '@angular/core';
import { v7 as uuid } from 'uuid';

@Injectable()
export class UniqueIdService {
  private qtdeIDsGerados = 0;

  private idValido = /^[A-Za-z]+[\w\-\:\.]*$/;

  public gerarIDComPrefixo(prefixo: string): string {
    if (!prefixo || !this.idValido.test(prefixo)) {
      throw new Error('Prefixo é obrigatório');
    }

    const idUnico = this.gerarIDUnico();
    this.qtdeIDsGerados++;
    return `${prefixo}-${idUnico}`;
  }

  public getQtdeIDsGerados(): number {
    return this.qtdeIDsGerados;
  }

  private gerarIDUnico(): string {
    return uuid();
  }
}
