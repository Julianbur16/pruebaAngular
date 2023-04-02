import { Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-body-draw-mechanics',
  templateUrl: './body-draw-mechanics.component.html',
  styleUrls: ['./body-draw-mechanics.component.css']
})
export class BodyDrawMechanicsComponent implements OnInit{

  data:any;
  title: string[]=[];
  descripcion: string[]=[];
  url: string[]=[];

  selection_button="buttonselect";
  selection_button1="buttondontselect";
  activate=0;

  constructor(private httpClient:HttpClient){
    let url ="https://apirestforcv-production.up.railway.app/api/services";
    this.httpClient.get(url).subscribe(
      response=>{this.data = response;
        for(var i=0; this.data[i] != null; i++){
          this.title.push(this.data[i].title);
          this.descripcion.push(this.data[i].descripcion );
          this.url.push(this.data[i].url);
        } 
        
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
      
      this.descripcion=[];
      this.title=[];
      this.url=[];
      
      let url ="https://apirestforcv-production.up.railway.app/api/services/1";
      this.httpClient.get(url).subscribe(
        response=>{this.data = response;
          for(var i=0; this.data[i] != null; i++){
            this.title.push(this.data[i].title);
            this.descripcion.push(this.data[i].descripcion );
            this.url.push(this.data[i].url);
          } 
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

    this.descripcion=[];
    this.title=[];
    this.url=[];

    let url ="https://apirestforcv-production.up.railway.app/api/services";
    this.httpClient.get(url).subscribe(
      response=>{this.data = response;
        for(var i=0; this.data[i] != null; i++){
          this.title.push(this.data[i].title);
          this.descripcion.push(this.data[i].descripcion );
          this.url.push(this.data[i].url);
        } 
        
      },
      error=>{console.log(error);}
    );
    this.activate=1;
  }
}
}
