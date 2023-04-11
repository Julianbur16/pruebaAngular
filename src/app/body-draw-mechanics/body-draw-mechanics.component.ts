import { Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-body-draw-mechanics',
  templateUrl: './body-draw-mechanics.component.html',
  styleUrls: ['./body-draw-mechanics.component.css']
})
export class BodyDrawMechanicsComponent implements OnInit{

  data:any;

  titlees: string[]=[];
  descripciones: string[]=[];
  titleen: string[]=[];
  descripcionen: string[]=[];
  titlept: string[]=[];
  descripcionpt: string[]=[];
  titlefc: string[]=[];
  descripcionfc: string[]=[];

  url: string[]=[];

  selection_button="buttonselect";
  selection_button1="buttondontselect";
  activate=0;
  loading=true;

  constructor(public translate: TranslateService,private httpClient:HttpClient){
    let url ="https://apirestforcv-production.up.railway.app/api/services/1";
    this.httpClient.get(url).subscribe(
      response=>{this.data = response;
        for(var i=0; this.data[i] != null; i++){
          this.titlees.push(this.data[i].titlees);
          this.descripciones.push(this.data[i].descripciones );
          this.titleen.push(this.data[i].titleen);
          this.descripcionen.push(this.data[i].descripcionen );
          this.titlept.push(this.data[i].titlept);
          this.descripcionpt.push(this.data[i].descripcionpt );
          this.titlefc.push(this.data[i].titlefc);
          this.descripcionfc.push(this.data[i].descripcionfc );
          this.url.push(this.data[i].url);
        }
        this.loading=false 
        
      },
      error=>{console.log(error);}
    );
  }
  ngOnInit(): void {
    
  }

  showensambles(){
    if(this.activate == 1){
      this.selection_button="buttonselect";
      this.selection_button1="buttondontselect";
      
      this.descripciones=[];
      this.titlees=[];
      this.descripcionen=[];
      this.titleen=[];
      this.descripcionpt=[];
      this.titlept=[];
      this.descripcionfc=[];
      this.titlefc=[];
      this.url=[];
      this.loading=true;
      
      let url ="https://apirestforcv-production.up.railway.app/api/services/1";
      this.httpClient.get(url).subscribe(
        response=>{this.data = response;
          for(var i=0; this.data[i] != null; i++){
            this.titlees.push(this.data[i].titlees);
            this.descripciones.push(this.data[i].descripciones );
            this.titleen.push(this.data[i].titleen);
            this.descripcionen.push(this.data[i].descripcionen );
            this.titlept.push(this.data[i].titlept);
            this.descripcionpt.push(this.data[i].descripcionpt );
            this.titlefc.push(this.data[i].titlefc);
            this.descripcionfc.push(this.data[i].descripcionfc );
            this.url.push(this.data[i].url);
          }
          this.loading=false;  
        },
        error=>{console.log(error);}
        );
        this.activate=0;
      }
    }

  showparts(){

    if(this.activate == 0){
    this.selection_button1="buttonselect";
    this.selection_button="buttondontselect";

    this.descripciones=[];
    this.titlees=[];
    this.descripcionen=[];
    this.titleen=[];
    this.descripcionpt=[];
    this.titlept=[];
    this.descripcionfc=[];
    this.titlefc=[];
    this.url=[];
    this.loading=true;

    let url ="https://apirestforcv-production.up.railway.app/api/services/2";
    this.httpClient.get(url).subscribe(
      response=>{this.data = response;
        for(var i=0; this.data[i] != null; i++){
          this.titlees.push(this.data[i].titlees);
          this.descripciones.push(this.data[i].descripciones );
          this.titleen.push(this.data[i].titleen);
          this.descripcionen.push(this.data[i].descripcionen );
          this.titlept.push(this.data[i].titlept);
          this.descripcionpt.push(this.data[i].descripcionpt );
          this.titlefc.push(this.data[i].titlefc);
          this.descripcionfc.push(this.data[i].descripcionfc );
          this.url.push(this.data[i].url);
        }
        this.loading=false;   
        
      },
      error=>{console.log(error);}
    );
    this.activate=1;
  }
}
}
