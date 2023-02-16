import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { NovaAdmissaoComponent } from './pages/nova-admissao/nova-admissao.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'nova-admissao',
    pathMatch: 'full'
  },
  {
    path: 'nova-admissao',
    component: NovaAdmissaoComponent,
    data: {
      page: 'NOVA ADMISSÃO COOPERADO',
      breadcrumb: 'Cadastro / Admissão do Cooperado / Nova Admissão de Cooperado'
    }
  },
  {
    path: 'favoritos',
    component: FavoritosComponent,
    data: {
      page: 'Favoritos',
      breadcrumb: 'Items / Favoritos'
    }
  },
  {
    path: 'chat',
    component: FavoritosComponent,
    data: {
      page: 'Chat',
      breadcrumb: 'Items / Chat'
    }
  },
  {
    path: 'configuracoes',
    component: FavoritosComponent,
    data: {
      page: 'Configurações',
      breadcrumb: 'Items / Configurações'
    }
  },
  {
    path: 'conta',
    component: FavoritosComponent,
    data: {
      page: 'Conta',
      breadcrumb: 'Items / Conta'
    }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
