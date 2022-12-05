import { Genio } from './../models/genio';
import { Component, ErrorHandler, EventEmitter, OnInit, Output } from '@angular/core';
import { ListadoGeniosService } from 'src/app/services/listado-genios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-genios',
  templateUrl: './listado-genios.component.html',
  styleUrls: ['./listado-genios.component.scss'],
})
export class ListadoGeniosComponent implements OnInit {
  listadoGenios!: Genio[];

  constructor(
    private readonly listadoGeniosService: ListadoGeniosService,
  ) {}

  ngOnInit(): void {
    this.listadoGeniosService.obtenerGenios().subscribe(
      
      {
        next:(genios:Genio[])=> this.listadoGenios = genios,
        error: (error:ErrorHandler)=> Swal.fire('Error',` ¡Ho no! ha ocurrido un error ${error}`,'error')
      }
    );
  }

  
}
