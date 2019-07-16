import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scalculator',
  templateUrl: './scalculator.component.html',
  styleUrls: ['./scalculator.component.css']
})
export class SCalculatorComponent implements OnInit {

  value1
  value2
  result:number=0
  operator=""
  constructor() { 
    this.value1=""
    this.value2=""
  }

  ngOnInit() {
    //this.result=this.value1+this.value2
  }

  displayValue(i:string):void{
    
  
   if(this.operator==""){
     this.value1=this.value1+i
   }
   else{
     this.value2=this.value2+i
   }
  }

  calculate(){

   switch(this.operator){
     
      case '+':{
        this.result=parseInt(this.value1)+parseInt(this.value2)
        break
      }

      case '-':{
        this.result=parseInt(this.value1)-parseInt(this.value2)
        break
      }

      case '*':{
        this.result=parseInt(this.value1)*parseInt(this.value2)
        break
      }

      case '/':{
        this.result=parseInt(this.value1)/parseInt(this.value2)
        break
      }
   }
        
  }

  setOperator(op:string):void{
    this.operator=op;  

    //This is to allow calculation with result variable
    if(this.result!=0){
      this.value1=this.result
      this.value2=""
      this.result=0
    }
  }

  clear():void{
    this.result=0
    this.value1=""
    this.value2=""
    this.operator=""
  }
  
}
