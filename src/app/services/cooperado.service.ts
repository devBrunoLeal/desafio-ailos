import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CooperadoService {

  constructor() { }

  getData(): Observable<any> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next({
          nome: 'Mariane de Sousa Oliveira',
          situacao: 'Regular',
          contaAplicacao: '557932-4',
          contaCorrente: '778461-8'
        });
        observer.complete();
      }, 1000);
    });
  }
}
