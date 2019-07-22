import { Component, OnInit } from '@angular/core';

import{Product} from './product'

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
  

  ngOnInit() {
    
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

  


