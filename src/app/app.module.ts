import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SCalculatorComponent } from './scalculator/scalculator.component';
import { ProductEntryComponent } from './product-entry/product-entry.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
 import {BsDropdownModule} from 'ngx-bootstrap/dropdown'
 import {HttpClientModule} from  '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    SCalculatorComponent,
    ProductEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    AngularFontAwesomeModule,
    BsDropdownModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
