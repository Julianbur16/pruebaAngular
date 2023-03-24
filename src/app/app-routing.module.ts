import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { BodyDrawMechanicsComponent } from './body-draw-mechanics/body-draw-mechanics.component';

const routes: Routes =[
  {path: '', redirectTo: 'Perfil',pathMatch: 'full'},
  {path: 'Perfil',component: BodyComponent },
  {path: 'Dibujo_mecanico',component:BodyDrawMechanicsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
