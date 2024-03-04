import { Component } from '@angular/core';

@Component({
  selector: 'app-produto-info',
  templateUrl: './produto-info.component.html',
  styleUrls: ['./produto-info.component.css']
})
export class ProdutoInfoComponent {

  public nomeProduto: string = "Smartphone XYZ";
  public preco: number = 499.90;
  public dataLancamento: Date = new Date('2023-01-14');
  public descricao: string = "Este é um smartphone avançado";
  public destaque: boolean = false;
  public tamanhoGrande: boolean = false;
  public categoriaSelecionada: string = "Eletrônicos";
  
  public estiloPadrao: any = {
    'font-size':'16px',
    'color':'black',
    'background-color':'gray'
  }
  public estiloRealce: any = {
    'font-size':'24px',
    'color':'red',
    'background-color':'lightgray'
  }
  
  estilo: any = this.estiloPadrao;
  realceAtivo: boolean = false;

  /**
   * AlterarCategoria
   * */
  public AlterarCategoria(novaCategoria: string) {
    this.categoriaSelecionada = novaCategoria;
  }

  /**
   * AlternarDestaque
   */
  public AlternarDestaque() {
    this.destaque = !this.destaque;
  }

  /**
   * AlternarTamanho
   */
  public AlternarTamanho() {
    this.tamanhoGrande = !this.tamanhoGrande;
  }

  /**
   * AlternarEstilo
   */
  public AlternarEstilo() {
    this.realceAtivo = !this.realceAtivo;
    this.estilo = this.realceAtivo ? this.estiloRealce : this.estiloPadrao;
  }
}
