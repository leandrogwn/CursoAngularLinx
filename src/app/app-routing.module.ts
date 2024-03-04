import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { RouterModule, Routes } from '@angular/router';

import { authGuard } from './auth.guard';
import { candeactiveteGuard } from './candeactivete.guard';
import { canmatchGuard } from './canmatch.guard';
import { PerfilUsuarioEditComponent } from './perfil-usuario-edit/perfil-usuario-edit.component';
import { canactivatechildGuard } from './canactivatechild.guard';

const routes: Routes = [
  { path: '', component: PaginaInicialComponent},
  {
    path: 'perfil',
    canActivateChild: [canactivatechildGuard],
    children:[
      {
        path: 'editar/:id',
        component: PerfilUsuarioEditComponent
      },
      {
        path:':id',
        component:PerfilUsuarioComponent
      }
  ]
  },
  { 
    path: 'perfilm/:id',
    loadChildren: () => import('./perfil/perfil.module').then((m) => m.PerfilModule), canMatch: [canmatchGuard]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
