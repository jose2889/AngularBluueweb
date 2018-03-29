import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {

  equipo:any[] = [
    { nombre:"JUAN",
      especialidad: "HTML",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et amet est ipsum voluptates explicabo debitis soluta in vitae minus delectus."
    },
    {
      nombre: "JOSE",
      especialidad: "JavaScript",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et amet est ipsum voluptates explicabo debitis soluta in vitae minus delectus."
    }
  ];
  constructor() { }

  obtener(){
    return this.equipo;
  }

  obtenerUno(i){
    return this.equipo[i];
  }
}
