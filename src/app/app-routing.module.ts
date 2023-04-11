import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { BodyDrawMechanicsComponent } from './body-draw-mechanics/body-draw-mechanics.component';
import { BodyProgramationComponent } from './body-programation/body-programation.component';
import { BodyAutomationComponent } from './body-automation/body-automation.component';

const routes: Routes =[
  {path: '', redirectTo: 'Perfil',pathMatch: 'full'},
  {path: 'Perfil',component: BodyComponent },
  {path: 'Dibujo_mecanico',component: BodyDrawMechanicsComponent},
  {path: 'Programmation',component: BodyProgramationComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
