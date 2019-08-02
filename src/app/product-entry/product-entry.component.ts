import { Component, OnInit } from '@angular/core';

import{Product} from './product'
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-entry',
  templateUrl: './product-entry.component.html',
  styleUrls: ['./product-entry.component.css']
})
export class ProductEntryComponent implements OnInit {
 //productArray:Product=<any> <Product[]>[]
 productArray:Product[]=<any><Product[]>[ ]//inference type
 
  done=true
  myColor='red'
  myFont='bold'
  myStyle={'color':this.myColor,'font-weight':this.myFont}
  text="Welcome to Expertzlab!"

  //For ngClass to work add the below property
  blueBold='blueBold'

  //using conditions
  blueBoldDisabled='blueBoldDisabled'
  disabled=false

  //for ajax
  _prodService:ProductService
  _productList
  
  constructor(prodService:ProductService){
    
    this._prodService=prodService

  }
  

  ngOnInit() {

    this._prodService.getProductList()
    // .subscribe((data)=>{
    //  this._productList=data
    
    // })
  }
  
  
  saveProduct(pid,pname){
    
 
  let product= new Product(pid,pname)
  console.log(product)
  this.productArray.push(product)
 }

 updateStyle(){
  this.myStyle={'color':this.myColor,'font-weight':this.myFont}
 }


}

  


