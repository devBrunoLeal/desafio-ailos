import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { NovaAdmissaoModule } from './nova-admissao/nova-admissao.module';

@NgModule({
  imports: [
    CommonModule,
    NovaAdmissaoModule
  ],
  declarations: [
    FavoritosComponent,
  ]
})
export class PagesModule { }
