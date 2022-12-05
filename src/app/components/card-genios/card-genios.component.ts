import { Component, Input, OnInit } from '@angular/core';
import { Genio } from '../models/genio';
import { ListadoGeniosService } from '../../services/listado-genios.service';

@Component({
  selector: 'app-card-genios',
  templateUrl: './card-genios.component.html',
  styleUrls: ['./card-genios.component.scss']
})
export class CardGeniosComponent implements OnInit {
  
  @Input() genio!:Genio;
  
  public infoGenio!:Genio;
  
  ngOnInit(): void {
  this.infoGenio = this.genio;
  }

  // listadoGenios!: Genio[];

  // constructor(
  //   private readonly listadoGeniosService: ListadoGeniosService,
  // ) {}

  // ngOnInit(): void {
  //   this.listadoGeniosService.obtenerGenios().subscribe((genios) => {
  //     console.log('Estos son los genios', genios);
  //     this.listadoGenios = genios;
  //   });
  // }

}
