import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, interval, throwError } from 'rxjs';
import { filter, map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  _http:HttpClient

  constructor(http:HttpClient) { 
       this._http=http
  }
  

  getProductList(){
    
    return this._http.get('http://localhost:4200/assets/product.json').pipe(
      
      
       map((data:any[])=>{
         const nData=[]
        data.forEach(el=>{
          const sid='S- '+ el.id
          const sname='S- '+el.name
         
       nData.push({
        'name':sname,
          'id':sid
          
        })
          
        })
        return nData 
      }),
      tap((data)=>{
        console.log('received from server:',data)
       }),
      catchError(err =>{
         console.log("Error in PS",err)
         return throwError (err)
        })
      
    
      
)
    
  
    // of(1,2,3,4,5)
    // .pipe(
    //   filter((num)=> (num%2)==0),
    //    map(num =>num*num)
    // ).subscribe(v1=>{
    //   console.log(v1)
    // }) 
    
    // interval(1000).pipe(
    //   filter(num=> (num%2)==0),
    //   map(num=>num*num)
    // )
    // .subscribe(
    //   val=>{
    //     console.log(val)
    //   }
    // )
  }
}
