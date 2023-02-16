import { MatIconModule } from '@angular/material/icon';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxMaskModule } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NovaAdmissaoComponent } from './nova-admissao.component';
import { TimelineComponent } from './timeline/timeline.component';
import { DadosCooperadoComponent } from './dados-cooperado/dados-cooperado.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    NgxMaskModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule,
  ],
  declarations: [
    NovaAdmissaoComponent,
    TimelineComponent,
    DadosCooperadoComponent,
  ],
  exports: [
    NovaAdmissaoComponent,
  ]
})
export class NovaAdmissaoModule { }
