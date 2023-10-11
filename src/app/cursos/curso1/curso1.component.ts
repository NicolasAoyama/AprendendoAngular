import { Component } from '@angular/core';
import { Curso } from '../model/curso';

@Component({
  selector: 'app-curso1',
  templateUrl: './curso1.component.html',
  styleUrls: ['./curso1.component.scss']
})
export class Curso1Component {

  cursos: Curso[] = [
    {_id: "1", name: "Angular", category: "Front-end"}
  ];
  displayedColumns = ['name','category'];
  
  constructor(){
    //this.cursos = [];
  }
}
