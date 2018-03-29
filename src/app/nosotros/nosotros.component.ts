import { Component, OnInit } from '@angular/core';

import { ServiceService } from '../service.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  equipo:any[] = [];

  constructor(private servicio:ServiceService ) {

    this.equipo = this.servicio.obtener();
   }

  ngOnInit() {
    
  }


}
