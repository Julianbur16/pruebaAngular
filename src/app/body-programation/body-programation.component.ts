import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-body-programation',
  templateUrl: './body-programation.component.html',
  styleUrls: ['./body-programation.component.css']
})
export class BodyProgramationComponent implements OnInit {

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
  loading=true;

  selection_button="buttonselect";
  selection_button1="buttondontselect";
  selection_button2="buttondontselect";
  selection_button3="buttondontselect";


  constructor(public translate: TranslateService,private httpClient: HttpClient){

    let url ="https://apirestforcv-production.up.railway.app/api/services/3";
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
  }

ngOnInit(): void {
  
}

programationweb(){
  this.selection_button="buttonselect";
  this.selection_button1="buttondontselect";
  this.selection_button2="buttondontselect";
  this.selection_button3="buttondontselect";

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

  let url ="https://apirestforcv-production.up.railway.app/api/services/3";
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
}

programationAndroid(){
  this.selection_button="buttondontselect";
  this.selection_button1="buttonselect";
  this.selection_button2="buttondontselect";
  this.selection_button3="buttondontselect";

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

  let url ="https://apirestforcv-production.up.railway.app/api/services/4";
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
}

programationsystem(){
  this.selection_button="buttondontselect";
  this.selection_button1="buttondontselect";
  this.selection_button2="buttonselect";
  this.selection_button3="buttondontselect";

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

  let url ="https://apirestforcv-production.up.railway.app/api/services/5";
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
}

programationDeep(){
  this.selection_button="buttondontselect";
  this.selection_button1="buttondontselect";
  this.selection_button2="buttondontselect";
  this.selection_button3="buttonselect";

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

  let url ="https://apirestforcv-production.up.railway.app/api/services/6";
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
}





}
