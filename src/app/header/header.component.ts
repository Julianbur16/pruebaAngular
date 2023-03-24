import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  primaryEmail='';
  secondEmail='';
  constructor(private translate: TranslateService,private router:Router) {
    
  }

  Navegar(propiedad: string){
    if(propiedad == 'perfil'){
      this.router.navigate(['/Perfil']);  
    }

    if(propiedad == 'dibujo_mecanico'){
      this.router.navigate(['/Dibujo_mecanico']);  
    }
  }

}

