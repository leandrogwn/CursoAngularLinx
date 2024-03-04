import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
  id: string | null = "";

  constructor (private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      const id = params.get('id');
      if(id !== null){
        this.id = id;
        console.log("valor recebido:" + this.id);
        
      }
    })
  }
}
