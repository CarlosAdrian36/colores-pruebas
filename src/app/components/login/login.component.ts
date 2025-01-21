import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  backgroundColor: string = 'lightblue'; // Color inicial
  hide = true

 cambio(){
  if(this.hide === true){
    this.hide = false
  }else{
    this.hide = true
  }
 }
}
 