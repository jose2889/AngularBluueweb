import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  equipo:any = {};

  constructor(private ruta:ActivatedRoute,
              private servicio:ServiceService ) {

    this.ruta.params.subscribe( parametro => {
      
      this.equipo = this.servicio.obtenerUno(parametro['id']);
    })
   }

  ngOnInit() {
  }

}
