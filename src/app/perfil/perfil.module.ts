import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PerfilUsuarioComponent } from '../perfil-usuario/perfil-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: PerfilUsuarioComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PerfilModule { }
