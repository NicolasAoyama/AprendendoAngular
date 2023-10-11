import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Curso1Component } from './curso1/curso1.component';

const routes: Routes = [
  {path: '', component: Curso1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
