import { Component, Input, OnInit } from '@angular/core';
import { Genio } from '../models/genio';
import { ListadoGeniosService } from '../../services/listado-genios.service';

@Component({
  selector: 'app-card-genios',
  templateUrl: './card-genios.component.html',
  styleUrls: ['./card-genios.component.scss'],
})
export class CardGeniosComponent {
  @Input() genio: Genio = new GenioClass();
}

class GenioClass {
  name: string = '';
  position: string = '';
  favoriteFood: string = '';
  favoriteColor: string = '';
  photo: any;

  skills: Array<string> = [];
}
