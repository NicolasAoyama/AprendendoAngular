import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { Curso1Component } from './curso1/curso1.component';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    Curso1Component
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MatTableModule
  ]
})
export class CursosModule { }
