import { DEFAULT_CURRENCY_CODE, LOCALE_ID,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import ptbr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { MinhaListaDeTarefasComponent } from './minha-lista-de-tarefas/minha-lista-de-tarefas.component';
import { ProdutoInfoComponent } from './produto-info/produto-info.component';
import { NomeUsuarioComponent } from './nome-usuario/nome-usuario.component';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component';
import { SharedModule } from './shared/shared.module';
import { ComponenteAComponent } from './componente-a/componente-a.component';
import { ComponenteBComponent } from './componente-b/componente-b.component';
import { ComunicacaoService } from './services/comunicacao.service';
import { ContadorComponent } from './contador/contador.component';
import { DadosComponent } from './dados/dados.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { SomarComponent } from './somar/somar.component';
import { PerfilUsuarioEditComponent } from './perfil-usuario-edit/perfil-usuario-edit.component';

registerLocaleData(ptbr);

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    MinhaListaDeTarefasComponent,
    ProdutoInfoComponent,
    NomeUsuarioComponent,
    ListaComponent,
    ComponenteAComponent,
    ComponenteBComponent,
    ContadorComponent,
    DadosComponent,
    FormComponent,
    PaginaInicialComponent,
    PerfilUsuarioComponent,
    SomarComponent,
    PerfilUsuarioEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    ComunicacaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
