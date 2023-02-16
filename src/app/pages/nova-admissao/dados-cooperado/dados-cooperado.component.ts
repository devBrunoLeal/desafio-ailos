import { ModeloCooperado } from './../../../interfaces/cooperado';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-cooperado',
  templateUrl: './dados-cooperado.component.html',
  styleUrls: ['./dados-cooperado.component.scss']
})
export class DadosCooperadoComponent implements OnInit {

  @Input() dadosCooperado: ModeloCooperado = {
    nome: '',
    situacao: '',
    contaAplicacao: '',
    contaCorrente: '',
  };

  constructor() { }

  ngOnInit() {
  }

}
