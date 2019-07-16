import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Expertzlab Tech'
  monthsArray=['Jan','Feb','Mar','Apr']

  changeMonth(e){
    console.log(e.target.value)
  }
}
