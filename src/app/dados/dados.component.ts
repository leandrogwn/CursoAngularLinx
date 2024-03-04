import { Component,OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent {
  dados$: any;
  dadosPost: any = null;
  dadosAtualizacao: any = null;
  dadosExclusao: any = null;
  dadosCabecalhoPersonalizado: any = null;

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe((resposta) =>{
      this.dados$ = resposta;
    })
  }

  enviarNovoPost(){
    const novoPost = {
      title: 'Novo titulo',
      body: 'Conteúdo do novo post',
      userId: 2
    }

    this.http.post('https://jsonplaceholder.typicode.com/posts', novoPost).subscribe((resposta) =>{
      this.dadosPost = resposta;
    })
  }

  atualizarRecurso(){
    const recursoAtualizado = {
      title: 'Titulo atualizado',
      body: 'Conteúdo do Recurso Atualizado',
      userId: 2
    }

    this.http.put('https://jsonplaceholder.typicode.com/posts/1', recursoAtualizado).subscribe((resposta) =>{
      this.dadosAtualizacao = resposta;
    })
  }

  excluirRecurso(){
    this.http.delete('https://jsonplaceholder.typicode.com/posts/1').subscribe((resposta) =>{
      this.dadosExclusao = resposta;
    })
  }

  novoRecursoComCabecalho(){
    const novoRecurso = {
      title: "Novo título",
      body: "Corpo do objeto",
      userId: 1
    }

    const headers = new HttpHeaders().set("Authorization", "Bearer SeuTokenDeAutorizacao");

    const options = {headers: headers}

    this.http.post('https://jsonplaceholder.typicode.com/posts', novoRecurso, options).subscribe((resposta) =>{
      this.dadosCabecalhoPersonalizado = resposta;
    })

  }
}
