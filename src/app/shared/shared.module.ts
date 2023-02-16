import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    MatBadgeModule
  ],
  exports: [
    MenuLateralComponent,
    HeaderComponent,
  ],
  declarations: [MenuLateralComponent, HeaderComponent]
})
export class SharedModule { }
