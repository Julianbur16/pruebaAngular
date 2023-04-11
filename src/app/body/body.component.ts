import { Component, OnDestroy, OnInit, HostListener} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
declare var window: any;



@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit, OnDestroy{
  ruta ='assets/linkedin.png';
  id = 0;
  formmessage1: FormGroup;
  
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
  spinnerstatus=false;

  screenWidth: any;
  screenHeight: any;

  formModal: any;
  valueask='';
  valorread=' ';
  items={};
  data:any;

  titleforweb='Programación web';
  titleforauto='Automatización y control industrial';
  titleforembedded='Programación para sistemas embebidos';
  titleforcad='Diseño mecánico en software CAD';
  titlefordeep='Deep learning y Machine learning en visión artificial';


  constructor(private translate: TranslateService,private fm:FormBuilder, private httpClient: HttpClient) {

    this.formmessage1=fm.group({
      texttask: ['', Validators.required]
    });

    this.translate.get('BODY_SLIDER').subscribe((data:any)=> {
      this.titleforweb=data.WEB;
      this.titleforauto=data.AUTO;
      this.titleforembedded=data.EMBEDDED;
      this.titleforcad=data.CAD;
      this.titlefordeep=data.DEEP;
     });
   
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

    this.formModal = new window.bootstrap.Modal(
      document.getElementById('chatMessage')
    );


    this.callMethod();
    this.id = <any>setInterval(() => {
      this.callMethod(); 
    }, 4000);

  }


  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }

  callMethod(){

    this.translate.get('BODY_SLIDER').subscribe((data:any)=> {
      this.titleforweb=data.WEB;
      this.titleforauto=data.AUTO;
      this.titleforembedded=data.EMBEDDED;
      this.titleforcad=data.CAD;
      this.titlefordeep=data.DEEP;
     });

    if(this.contador == 1){
      this.title_image=this.titleforweb;
      this.ruta ='assets/linkedin.png';
      this.circle1="bi bi-circle-fill icon_fast";
      this.circle2="bi bi-circle icon_fast";
      this.circle3="bi bi-circle icon_fast";
      this.circle4="bi bi-circle icon_fast";
      this.circle5="bi bi-circle icon_fast";
    }
    if(this.contador == 2){
      this.title_image=this.titleforauto;
      this.ruta ='assets/instrumentacion.png';
      this.circle1="bi bi-circle icon_fast";
      this.circle2="bi bi-circle-fill icon_fast";
      this.circle3="bi bi-circle icon_fast";
      this.circle4="bi bi-circle icon_fast";
      this.circle5="bi bi-circle icon_fast";
    }
    if(this.contador == 3){
      this.title_image=this.titleforembedded;
      this.ruta ='assets/nuk_fun.png';
      this.circle1="bi bi-circle icon_fast";
      this.circle2="bi bi-circle icon_fast";
      this.circle3="bi bi-circle-fill icon_fast";
      this.circle4="bi bi-circle icon_fast";
      this.circle5="bi bi-circle icon_fast";
    }

    if(this.contador == 4){
      this.title_image=this.titleforcad;
      this.ruta ='assets/images.png';
      this.circle1="bi bi-circle icon_fast";
      this.circle2="bi bi-circle icon_fast";
      this.circle3="bi bi-circle icon_fast";
      this.circle4="bi bi-circle-fill icon_fast";
      this.circle5="bi bi-circle icon_fast";
    }

    if(this.contador == 5){
      this.title_image=this.titlefordeep;
      this.ruta ='assets/deeplearning.png';
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

    this.translate.get('BODY_SLIDER').subscribe((data:any)=> {
      this.titleforweb=data.WEB;
      this.titleforauto=data.AUTO;
      this.titleforembedded=data.EMBEDDED;
      this.titleforcad=data.CAD;
      this.titlefordeep=data.DEEP;
     });

    if(id_image == 1){
      this.title_image=this.titleforweb;
      this.ruta ='assets/linkedin.png';
      this.circle1="bi bi-circle-fill icon_fast";
      this.circle2="bi bi-circle icon_fast";
      this.circle3="bi bi-circle icon_fast";
      this.circle4="bi bi-circle icon_fast";
      this.circle5="bi bi-circle icon_fast";
      this.contador=-1;
    }
    if(id_image == 2){
      this.title_image=this.titleforauto;
      this.ruta ='assets/instrumentacion.png';
      this.circle1="bi bi-circle icon_fast";
      this.circle2="bi bi-circle-fill icon_fast";
      this.circle3="bi bi-circle icon_fast";
      this.circle4="bi bi-circle icon_fast";
      this.circle5="bi bi-circle icon_fast";
      this.contador=-1;
    }
    if(id_image == 3){
      this.title_image=this.titleforembedded;
      this.ruta ='assets/nuk_fun.png';
      this.circle1="bi bi-circle icon_fast";
      this.circle2="bi bi-circle icon_fast";
      this.circle3="bi bi-circle-fill icon_fast";
      this.circle4="bi bi-circle icon_fast";
      this.circle5="bi bi-circle icon_fast";
      this.contador=-1;
    }

    if(id_image == 4){
      this.title_image=this.titleforcad;
      this.ruta ='assets/images.png';
      this.circle1="bi bi-circle icon_fast";
      this.circle2="bi bi-circle icon_fast";
      this.circle3="bi bi-circle icon_fast";
      this.circle4="bi bi-circle-fill icon_fast";
      this.circle5="bi bi-circle icon_fast";
      this.contador=-1;
    }

    if(id_image == 5){
      this.title_image=this.titlefordeep;
      this.ruta ='assets/deeplearning.png';
      this.circle1="bi bi-circle icon_fast";
      this.circle2="bi bi-circle icon_fast";
      this.circle3="bi bi-circle icon_fast";
      this.circle4="bi bi-circle icon_fast";
      this.circle5="bi bi-circle-fill icon_fast";
      this.contador=-1;
    }
  }


  submitdata1(){
    this.spinnerstatus=true;
    this.items={
      "message": this.formmessage1.controls['texttask'].value,
      
    };
    let url='https://apirestforcv-production.up.railway.app/api/chat';


    this.httpClient.post(url,this.items).subscribe(
      response => {this.data = response;
        this.valorread=this.data.choices[0].text.replace('\n\n',"");
        this.spinnerstatus=false;
        this.valueask='';
        
        },
      error => console.error(error)
    );
    
    
 
  }

  modalchat(){
    this.formModal.show();
  }
}


