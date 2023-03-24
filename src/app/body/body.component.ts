import { Component, OnDestroy, OnInit, HostListener} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";




@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit, OnDestroy{
  ruta ='assets/linkedin.png';
  id = 0;
  
  contador=1;
  circle1="bi bi-circle-fill";
  circle2="bi bi-circle";
  circle3="bi bi-circle";
  circle4="bi bi-circle";
  circle5="bi bi-circle";
  title_image="Programación web";
  body_resposiv=true;
  slider_img="slider_imag";
  img_of_sli="img_of_slider";
  control_hability=true;
  control_double=true;
  control_languages_skills="languages_skills";
  control_list_of_database=true;

  screenWidth: any;
  screenHeight: any;

  constructor(private translate: TranslateService) {
   
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    if(this.screenWidth <= 1100){
      this.body_resposiv=false;
      this.slider_img="slider_imag1";
      this.img_of_sli="img_of_slider1";
    }else{
      this.body_resposiv=true;
      this.slider_img="slider_imag";
      this.img_of_sli="img_of_slider";
    }

    if(this.screenWidth <= 1300){
      this.control_hability=false;
      this.control_languages_skills="languages_skills1";
    }else{
      this.control_hability=true;
      this.control_languages_skills="languages_skills";
    }

    if(this.screenWidth <= 900){
      this.control_double=false;
    }else{
      this.control_double=true;
    }

    if(this.screenWidth <= 700){
      this.control_list_of_database=false;
    }else{
      this.control_list_of_database=true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    if(this.screenWidth <= 1100){
      this.body_resposiv=false;
      this.slider_img="slider_imag1";
      this.img_of_sli="img_of_slider1";
    }else{
      this.body_resposiv=true;
      this.slider_img="slider_imag";
      this.img_of_sli="img_of_slider";
    }

    if(this.screenWidth <= 1300){
      this.control_hability=false;
      this.control_languages_skills="languages_skills1";
    }else{
      this.control_hability=true;
      this.control_languages_skills="languages_skills";
    }

    if(this.screenWidth <= 900){
      this.control_double=false;
    }else{
      this.control_double=true;
    }

    if(this.screenWidth <= 700){
      this.control_list_of_database=false;
    }else{
      this.control_list_of_database=true;
    }

  }
  
  ngOnInit() {
    this.callMethod();
    this.id = <any>setInterval(() => {
      this.callMethod(); 
    }, 5000);

  }


  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }

  callMethod(){

    if(this.contador == 1){
      this.title_image="Programación web";
      this.ruta ='assets/linkedin.png';
      this.circle1="bi bi-circle-fill icon_fast";
      this.circle2="bi bi-circle icon_fast";
      this.circle3="bi bi-circle icon_fast";
      this.circle4="bi bi-circle icon_fast";
      this.circle5="bi bi-circle icon_fast";
    }
    if(this.contador == 2){
      this.title_image="Automatización y control industrial";
      this.ruta ='assets/images.png';
      this.circle1="bi bi-circle icon_fast";
      this.circle2="bi bi-circle-fill icon_fast";
      this.circle3="bi bi-circle icon_fast";
      this.circle4="bi bi-circle icon_fast";
      this.circle5="bi bi-circle icon_fast";
    }
    if(this.contador == 3){
      this.title_image="Programación para sistemas embebidos";
      this.ruta ='assets/nuk_fun.png';
      this.circle1="bi bi-circle icon_fast";
      this.circle2="bi bi-circle icon_fast";
      this.circle3="bi bi-circle-fill icon_fast";
      this.circle4="bi bi-circle icon_fast";
      this.circle5="bi bi-circle icon_fast";
    }

    if(this.contador == 4){
      this.title_image="Diseño mecánico en software CAD";
      this.ruta ='assets/images.png';
      this.circle1="bi bi-circle icon_fast";
      this.circle2="bi bi-circle icon_fast";
      this.circle3="bi bi-circle icon_fast";
      this.circle4="bi bi-circle-fill icon_fast";
      this.circle5="bi bi-circle icon_fast";
    }

    if(this.contador == 5){
      this.title_image="Deep learning y Machine learning en visión artificial";
      this.ruta ='assets/images.png';
      this.circle1="bi bi-circle icon_fast";
      this.circle2="bi bi-circle icon_fast";
      this.circle3="bi bi-circle icon_fast";
      this.circle4="bi bi-circle icon_fast";
      this.circle5="bi bi-circle-fill icon_fast";
      this.contador=0;
    }
  if(this.contador != -1){
    this.contador++;
  }
    
  }


  change_image(id_image: number){
    if(id_image == 1){
      this.title_image="Programación web";
      this.ruta ='assets/linkedin.png';
      this.circle1="bi bi-circle-fill icon_fast";
      this.circle2="bi bi-circle icon_fast";
      this.circle3="bi bi-circle icon_fast";
      this.circle4="bi bi-circle icon_fast";
      this.circle5="bi bi-circle icon_fast";
      this.contador=-1;
    }
    if(id_image == 2){
      this.title_image="Automatización y control industrial";
      this.ruta ='assets/images.png';
      this.circle1="bi bi-circle icon_fast";
      this.circle2="bi bi-circle-fill icon_fast";
      this.circle3="bi bi-circle icon_fast";
      this.circle4="bi bi-circle icon_fast";
      this.circle5="bi bi-circle icon_fast";
      this.contador=-1;
    }
    if(id_image == 3){
      this.title_image="Programación para sistemas embebidos";
      this.ruta ='assets/nuk_fun.png';
      this.circle1="bi bi-circle icon_fast";
      this.circle2="bi bi-circle icon_fast";
      this.circle3="bi bi-circle-fill icon_fast";
      this.circle4="bi bi-circle icon_fast";
      this.circle5="bi bi-circle icon_fast";
      this.contador=-1;
    }

    if(id_image == 4){
      this.title_image="Diseño mecánico en software CAD";
      this.ruta ='assets/images.png';
      this.circle1="bi bi-circle icon_fast";
      this.circle2="bi bi-circle icon_fast";
      this.circle3="bi bi-circle icon_fast";
      this.circle4="bi bi-circle-fill icon_fast";
      this.circle5="bi bi-circle icon_fast";
      this.contador=-1;
    }

    if(id_image == 5){
      this.title_image="Deep learning y Machine learning en visión artificial";
      this.ruta ='assets/images.png';
      this.circle1="bi bi-circle icon_fast";
      this.circle2="bi bi-circle icon_fast";
      this.circle3="bi bi-circle icon_fast";
      this.circle4="bi bi-circle icon_fast";
      this.circle5="bi bi-circle-fill icon_fast";
      this.contador=-1;
    }
  }
}
