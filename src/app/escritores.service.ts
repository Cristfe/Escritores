import { Injectable } from '@angular/core';
import { ESCRITORES } from './db/escritores.db';
import { Escritor } from './models/escritor.model';

@Injectable({
  providedIn: 'root'
})
export class EscritoresService {

  constructor() { }

  getAll(): Promise<Escritor[]> {
    return new Promise((resolve, reject) => {
      resolve(ESCRITORES);
    });
  }

  getByPais(pPais): Promise<Escritor[]> {
    return new Promise((resolve, reject) => {
      resolve(ESCRITORES.filter(escritor => {
        return escritor.pais === pPais;
      }));
    });
  }

  getById(pId): Promise<Escritor> {
    return new Promise((resolve, reject) => {
      let escritor = ESCRITORES.find(esc => {
        return esc.id === parseInt(pId);
      });
      resolve(escritor);
    });
  }

  add(pEscritor): Promise<Escritor[]> {
    return new Promise((resolve, reject) => {
      pEscritor.id = ESCRITORES.length + 1;
      ESCRITORES.push(pEscritor);
      resolve(ESCRITORES);
    });
  }

}


