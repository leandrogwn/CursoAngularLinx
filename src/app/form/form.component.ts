import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  nome: string = "";
  email: string = "";
  endereco: string = "";
  genero: string = "";
  hobbieLivro: boolean = false;
  hobbieProgramar: boolean = false;
  hobbieViagem: boolean = false;
  estado: string = "";


  enviarFormulario(form: NgForm){
    if(form.valid){
      console.log("Formulário válido. Dados enviados: ", this.estado);
      
    }else{
      console.log("Formulário inválido.");
      
    }
  }
}
