import { ModeloMenu } from './../../interfaces/menu';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent implements OnInit {

  menu: ModeloMenu[] = [
    {
      nome: 'Nova Admissão',
      rota: 'nova-admissao',
      icon: 'search',
    },
    {
      nome: 'Favoritos',
      rota: 'favoritos',
      icon: 'star',
    },
    {
      nome: 'Chat',
      rota: 'chat',
      icon: 'sms',
    },
    {
      nome: 'Configurações',
      rota: 'configuracoes',
      icon: 'tune',
    },
    {
      nome: 'Conta',
      rota: 'conta',
      icon: 'account_balance',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
