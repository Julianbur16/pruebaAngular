import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  data: any;

  idImport: string[] = [];
  names: string[] = [];
  categories: string[] = [];
  prices: string[] = [];
  createds: string[] = [];
  updates: string[] = [];
  categoriesBD: string[] = [];



  formmessage: FormGroup;
  items = {};

  nameEdit = '';
  categoryEdit = '';
  priceEdit = '';
  selectedCategory='Celulares';

  idUpdate: string='';
  idDelete: string='';
  constructor(private httpClient: HttpClient, private fm: FormBuilder) {

    this.formmessage = fm.group({
      fulname: ['', Validators.required],
      fulprice: ['', Validators.required],

    });

    this.peticionDatos();
    this.peticionDatosCategory();

  }
  ngOnInit(): void {

  }

  peticionDatos = () => {

    let url = "https://apirepo-production.up.railway.app/api/products";
    this.httpClient.get(url).subscribe(
      response => {
        this.data = response;
        for (var i = 0; this.data[i] != null; i++) {

          this.idImport.push(this.data[i].id);
          this.names.push(this.data[i].Name);
          this.categories.push(this.data[i].Category);
          this.prices.push(this.data[i].Price);
          this.createds.push(this.data[i].created_at);
          this.updates.push(this.data[i].updated_at);

        }
        console.log(this.data);
  
      },
      error => { console.log(error); }
    );

  }

  peticionDatosCategory = () => {

    let url = "https://apirepo-production.up.railway.app/api/categorias";
    this.httpClient.get(url).subscribe(
      response => {
        this.data = response;
        for (var i = 0; this.data[i] != null; i++) {

          this.categoriesBD.push(this.data[i].Categorias);

        }
        
  
      },
      error => { console.log(error); }
    );

  }

  submitdata() {
    this.items = {
      "Nombre": this.formmessage.controls['fulname'].value,
      "Categoria": this.selectedCategory,
      "Precio": this.formmessage.controls['fulprice'].value,
    };

    let url = 'https://apirepo-production.up.railway.app/api/products';

    this.formmessage.reset();

    this.httpClient.post(url, this.items).subscribe(
      response => {
        this.idImport = [];
        this.names = [];
        this.categories = [];
        this.prices = [];
        this.createds = [];
        this.updates = [];

        this.peticionDatos();
      },
      error => console.error(error)
    );
  }

  sendCode(idcode: string) {

    this.idUpdate = idcode;
    let url = "https://apirepo-production.up.railway.app/api/products/" + idcode;
    this.httpClient.get(url).subscribe(
      response => {
        this.data = response;
        this.nameEdit = this.data[0].Name;
        this.categoryEdit = this.data[0].Category;
        this.priceEdit = this.data[0].Price;
      },
      error => { console.log(error); }
    );

  }

  sendCodeDelete(idcode: string) {

    this.idDelete = idcode;
  }

  submitDataEdit() {

    this.items = {
      "Nombre": this.nameEdit,
      "Categoria": this.categoryEdit,
      "Precio": this.priceEdit,
    };
    let id = this.idUpdate;
    let url = 'https://apirepo-production.up.railway.app/api/products/' + id;

    this.formmessage.reset();

    this.httpClient.put(url, this.items).subscribe(
      response => {
        this.idImport = [];
        this.names = [];
        this.categories = [];
        this.prices = [];
        this.createds = [];
        this.updates = [];

        this.peticionDatos();
      },
      error => console.error(error)
    );
  }

  deleteData(){
    
    let id = this.idDelete;
    let url = 'https://apirepo-production.up.railway.app/api/products/' + id;
    this.httpClient.delete(url).subscribe(
      response => {
        this.idImport = [];
        this.names = [];
        this.categories = [];
        this.prices = [];
        this.createds = [];
        this.updates = [];

        this.peticionDatos();
      },
      error => console.error(error)
    );
  }



}

