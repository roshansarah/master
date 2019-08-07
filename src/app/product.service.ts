import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, interval, throwError, Observable } from 'rxjs';
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
      
      return throwError(data)
      }),
      catchError(this.handleError('GetProductList')),
      tap((data)=>{
        console.log('received from server:',data)
       }),
      
      catchError((e)=> {
        console.log('error',e)
        return  throwError(e)
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

  handleError(op,result?:Observable<Object>,err?:any){
    return (err:any):Observable<Object>=> {
      console.log('Op',op)
      console.log('err',err)
      return of([err])
    }
  
}
}

