import { Component, HostBinding, OnInit } from '@angular/core';

import { debounceTime, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
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
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  isRaised: boolean = true;



  constructor(){
    this.search$.pipe(debounceTime(100)).subscribe(search => {
      this.searchTerm = search;
      this.fitros();
    });
  }
  togglestylebtn (){
    this.isRaised = !this.isRaised
  }

  search$ = new Subject<any>();
  ngOnInit(): void {
    this.listaFiltrada = this.listadeObjeto
  }

  public listadeObjeto:Objeto[] = 
  [
    { "nombre": "Silla", "disponibilidad": "No Disponible", "fecha": "2024-08-15" },
    { "nombre": "Mesa", "disponibilidad": "No Disponible", "fecha": "2025-03-21" },
    { "nombre": "Computadora", "disponibilidad": "Disponible", "fecha": "2022-12-09" },
    { "nombre": "Termo", "disponibilidad": "Disponible", "fecha": "2021-07-11" },
    { "nombre": "Lentes", "disponibilidad": "No Disponible", "fecha": "2019-10-22" },
    { "nombre": "Monitor", "disponibilidad": "No Disponible", "fecha": "2020-09-18" },
    { "nombre": "Cargador", "disponibilidad": "Disponible", "fecha": "2023-05-13" },
    { "nombre": "Visor", "disponibilidad": "Disponible", "fecha": "2021-04-26" },
    { "nombre": "Simon", "disponibilidad": "No Disponible", "fecha": "2024-03-17" },
    { "nombre": "Comer", "disponibilidad": "Disponible", "fecha": "2022-06-09" },
    { "nombre": "Cocina", "disponibilidad": "No Disponible", "fecha": "2024-10-06" },
    { "nombre": "Consolar", "disponibilidad": "Disponible", "fecha": "2022-03-03" },
    { "nombre": "Dientes", "disponibilidad": "No Disponible", "fecha": "2025-01-24" },
    { "nombre": "Componentes", "disponibilidad": "Disponible", "fecha": "2022-01-17" },
    { "nombre": "Cargador", "disponibilidad": "Disponible", "fecha": "2020-02-11" },
    { "nombre": "Compostura", "disponibilidad": "No Disponible", "fecha": "2023-04-02" },
    { "nombre": "Llaves", "disponibilidad": "Disponible", "fecha": "2020-11-08" },
    { "nombre": "Lluvia", "disponibilidad": "Disponible", "fecha": "2025-03-06" },
    { "nombre": "Lugar", "disponibilidad": "Disponible", "fecha": "2022-07-22" },
    { "nombre": "Oficina", "disponibilidad": "No Disponible", "fecha": "2020-12-04" },
    { "nombre": "$Complejo", "disponibilidad": "Disponible", "fecha": "2024-02-14" },
    { "nombre": "Teléfono", "disponibilidad": "Disponible", "fecha": "2020-08-29" },
    { "nombre": "Teclado", "disponibilidad": "No Disponible", "fecha": "2021-09-20" },
    { "nombre": "Mochila", "disponibilidad": "Disponible", "fecha": "2023-07-16" },
    { "nombre": "Botella", "disponibilidad": "No Disponible", "fecha": "2024-07-04" },
    { "nombre": "Control", "disponibilidad": "Disponible", "fecha": "2021-10-25" },
    { "nombre": "Micrófono", "disponibilidad": "Disponible", "fecha": "2019-12-18" },
    { "nombre": "Lámpara", "disponibilidad": "No Disponible", "fecha": "2025-08-07" },
    { "nombre": "Papelera", "disponibilidad": "No Disponible", "fecha": "2024-09-29" },
    { "nombre": "Ventana", "disponibilidad": "Disponible", "fecha": "2023-01-13" },
    { "nombre": "Cámara", "disponibilidad": "Disponible", "fecha": "2021-03-19" },
    { "nombre": "Audífonos", "disponibilidad": "No Disponible", "fecha": "2019-06-05" },
    { "nombre": "Tijeras", "disponibilidad": "Disponible", "fecha": "2020-01-27" },
    { "nombre": "Telévision", "disponibilidad": "No Disponible", "fecha": "2022-09-30" },
    { "nombre": "Espejo", "disponibilidad": "Disponible", "fecha": "2025-06-19" },
    { "nombre": "Alfombra", "disponibilidad": "No Disponible", "fecha": "2024-04-08" },
    { "nombre": "Zapatos", "disponibilidad": "Disponible", "fecha": "2023-09-23" },
    { "nombre": "Carpeta", "disponibilidad": "Disponible", "fecha": "2019-07-02" },
    { "nombre": "Parlante", "disponibilidad": "No Disponible", "fecha": "2021-11-30" },
    { "nombre": "Reloj", "disponibilidad": "Disponible", "fecha": "2022-05-26" },
    { "nombre": "Calendario", "disponibilidad": "No Disponible", "fecha": "2024-01-09" },
    { "nombre": "Pizarra", "disponibilidad": "Disponible", "fecha": "2023-10-12" },
    { "nombre": "Gorra", "disponibilidad": "No Disponible", "fecha": "2020-03-22" },
    { "nombre": "Guantes", "disponibilidad": "Disponible", "fecha": "2025-04-18" },
    { "nombre": "Gafas", "disponibilidad": "No Disponible", "fecha": "2023-06-01" },
    { "nombre": "Sudadera", "disponibilidad": "No Disponible", "fecha": "2025-02-05" },
    { "nombre": "Cuchara", "disponibilidad": "Disponible", "fecha": "2022-11-27" },
    { "nombre": "Tenedor", "disponibilidad": "No Disponible", "fecha": "2023-08-04" },
    { "nombre": "Vaso", "disponibilidad": "Disponible", "fecha": "2024-12-25" },
    { "nombre": "Plato", "disponibilidad": "Disponible", "fecha": "2021-02-12" },
    { "nombre": "Cuaderno", "disponibilidad": "No Disponible", "fecha": "2019-09-15" },
    { "nombre": "Marcador", "disponibilidad": "Disponible", "fecha": "2020-04-06" },
    { "nombre": "Caja", "disponibilidad": "No Disponible", "fecha": "2025-07-30" },
    { "nombre": "Pelota", "disponibilidad": "Disponible", "fecha": "2022-10-08" },
    { "nombre": "Refrigerador", "disponibilidad": "Disponible", "fecha": "2021-12-01" },
    { "nombre": "Mochila", "disponibilidad": "No Disponible", "fecha": "2023-02-15" },
    { "nombre": "Impresora", "disponibilidad": "No Disponible", "fecha": "2020-06-13" },
    { "nombre": "Escáner", "disponibilidad": "Disponible", "fecha": "2024-05-31" },
    { "nombre": "Proyector", "disponibilidad": "Disponible", "fecha": "2025-09-27" },
    { "nombre": "Foco", "disponibilidad": "No Disponible", "fecha": "2021-05-23" },
    { "nombre": "Escritorio", "disponibilidad": "Disponible", "fecha": "2019-08-16" },
    { "nombre": "Almohada", "disponibilidad": "No Disponible", "fecha": "2024-06-28" },
    { "nombre": "Colchón", "disponibilidad": "Disponible", "fecha": "2023-03-07" },
    { "nombre": "Sofá", "disponibilidad": "No Disponible", "fecha": "2022-04-16" },
    { "nombre": "Balón", "disponibilidad": "Disponible", "fecha": "2025-12-09" },
    { "nombre": "Joystick", "disponibilidad": "No Disponible", "fecha": "2021-01-05" },
    { "nombre": "Ventilador", "disponibilidad": "Disponible", "fecha": "2023-11-18" },
    { "nombre": "$Estrella", "disponibilidad": "Disponible", "fecha": "2019-04-13" },
    { "nombre": "@Correo", "disponibilidad": "No Disponible", "fecha": "2020-07-10" },
    { "nombre": "!Advertencia", "disponibilidad": "No Disponible", "fecha": "2022-02-06" },
    { "nombre": "#Hash", "disponibilidad": "Disponible", "fecha": "2021-06-21" },
    { "nombre": "%Porcentaje", "disponibilidad": "Disponible", "fecha": "2025-05-10" },
    { "nombre": "&Ampersand", "disponibilidad": "No Disponible", "fecha": "2024-11-13" },
    { "nombre": "*Asterisco", "disponibilidad": "Disponible", "fecha": "2023-12-20" },
    { "nombre": "+Suma", "disponibilidad": "No Disponible", "fecha": "2022-08-02" },
    { "nombre": "-Menos", "disponibilidad": "Disponible", "fecha": "2020-05-29" },
    { "nombre": "/Diagonal", "disponibilidad": "No Disponible", "fecha": "2024-10-31" },
    { "nombre": "=Igual", "disponibilidad": "Disponible", "fecha": "2025-11-12" },
    { "nombre": "?Pregunta", "disponibilidad": "No Disponible", "fecha": "2019-03-25" },
    { "nombre": "^Caret", "disponibilidad": "Disponible", "fecha": "2021-04-01" },
    { "nombre": "~Tilde", "disponibilidad": "No Disponible", "fecha": "2024-12-02" },
    { "nombre": "[Corchete]", "disponibilidad": "Disponible", "fecha": "2022-07-05" },
    { "nombre": "Llaves{}", "disponibilidad": "Disponible", "fecha": "2025-06-04" },
    { "nombre": "|Tubería", "disponibilidad": "No Disponible", "fecha": "2020-02-18" }
  ]

  searchTerm: string = '';
  listaFiltrada: Objeto[] = [];
  chipSeleccionado :chipvalue[] = []
  onKeyPress(event: any) {
    this.search$.next(event.target.value);  // Emite el valor en tiempo real
  }


  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  
  //OPCIONES DE FILTROS DE TIPO CHIPS
  chips:chipvalue[] = [
    {name: 'Disponible',value : 'Disponible'},
    {name: 'No Disponible',value : 'No Disponible'},
  
  ]
  ChipSeleccionado(chip: chipvalue):void{
    if(this.chipSeleccionado.length === 0){
      this.chipSeleccionado.push(chip)
      console.log('Vacio y agrego')
    }else{
      const chipExiste = this.chipSeleccionado[0];
      if(this.compararChips(chipExiste,chip)){
        this.chipSeleccionado = [];
        console.log('MAs de 1 en el array y era el mismo y se elimino')
      }else{
        this.chipSeleccionado[0]= chip
        console.log('Mas de uno en el array pero es diferente y se cambio')
      }
    }
    this.fitros();
  }
  compararChips(chip1:chipvalue,chip2:chipvalue):boolean{
    return chip1.value === chip2.value
  }


  fitros(){
    console.warn('Entro al filtro')
    let filtro = this.listadeObjeto.filter(item => item.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()));

    if(this.chipSeleccionado.length > 0){
      filtro = filtro.filter(item => this.chipSeleccionado.some(chip => chip.value === item.disponibilidad));
    }
    const startDate = this.range.get('start')?.value;
    const endDate = this.range.get('end')?.value;
    if(startDate && endDate){
      filtro = filtro.filter(obj => {
        const fechaObjeto = new Date(obj.fecha);
        return fechaObjeto >=startDate && fechaObjeto <= endDate;
      });
    }else{
      this.listaFiltrada = this.listadeObjeto
    }
    this.listaFiltrada = filtro;
  }
}


