import { NovaAdmissaoComponent } from './nova-admissao/nova-admissao.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { NgxMaskModule } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
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
