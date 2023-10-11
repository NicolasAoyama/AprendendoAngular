import { Injectable } from '@angular/core';
import { Curso } from '../model/curso';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private httpClient: HttpClient) { }


  list(): Curso[]{
    return [
      {_id: "1", name: "Angular", category: "Front-end"}
    ];
  }
}
