import { Component, HostBinding, OnInit } from '@angular/core';

import { debounceTime, Subject } from 'rxjs';
import { Router } from '@angular/router';

export interface Objeto{
  nombre: string;
  disponibilidad: string;
  fecha: string;
}

export interface chipvalue {
  name: string;
  value: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'colores-pruebas';
  isRaised: boolean = true;
  showFiller = false;


constructor(private router:Router ){}


  CambiarComponente(componente :string){
    this.router.navigate([componente])
  }
  slide(){
    console.log("Se tiene que ocultar")
  }
  togglestylebtn (){
    this.isRaised = !this.isRaised
  }
  

}

