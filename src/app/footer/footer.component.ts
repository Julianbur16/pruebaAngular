import { Component, HostListener} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  selection_language1=true;
  selection_language2=false;
  selection_language3=false;
  selection_language4=false;
  style_languges=true;

  screenWidth: any;
  screenHeight: any;


  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');
    translate.use('es');
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    if(this.screenWidth <= 1200){
      this.style_languges=false;
    }else{
      this.style_languges=true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    if(this.screenWidth <= 1000){
      this.style_languges=false;
    }else{
      this.style_languges=true;
    }
  }

  cl_selection_languge(langugenumber: number ){
    if(langugenumber == 1){
      this.selection_language1=true;
      this.selection_language2=false;
      this.selection_language3=false;
      this.selection_language4=false;
      this.translate.use('es');
    }

    if(langugenumber == 2){
      this.selection_language1=false;
      this.selection_language2=true;
      this.selection_language3=false;
      this.selection_language4=false;
      this.translate.use('en');
    }

    if(langugenumber == 3){
      this.selection_language1=false;
      this.selection_language2=false;
      this.selection_language3=true;
      this.selection_language4=false;
      this.translate.use('pt');
    }

    if(langugenumber == 4){
      this.selection_language1=false;
      this.selection_language2=false;
      this.selection_language3=false;
      this.selection_language4=true;
      this.translate.use('fr');
    }
  }
}




  
