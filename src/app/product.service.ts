import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  _http:HttpClient

  constructor(http:HttpClient) { 
       this._http=http
  }
  

  getProductList(){
    
    //return this._http.get('http://localhost:4200/assets/product.json')
    of(1,2,3,4,5)
    .pipe(
      filter((num)=> (num%2)==0),
       map(num =>num*num)
    ).subscribe(v1=>{
      console.log(v1)
    })  
  }
}
