import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {map} from 'rxjs/operators';
import { Producto } from "../models/producto";
import { GLOBAL } from "../services/global";


@Injectable()
export class ProductoService { 
    
    public url: string;
  
    constructor(public _http: HttpClient) { 
        this.url = GLOBAL.url;
    }

   getProductos(){
    //    return "Texto desde el servicio";
       return this._http.get(this.url+'productos')
                        .pipe(map(res => res));
   }

   addProducto(producto: Producto){
       let json = JSON.stringify(producto);
       console.log(json);
       let params = 'json='+json;
       let headers = {'Content-Type':'application/x-www-form-urlencoded'};

       return this._http.post(this.url+'productos', params, {headers: headers})
                        .pipe(map(res => res));
   }
}