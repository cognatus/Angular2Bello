import { Component } from '@angular/core';
import { HolaAngularComponent } from './hola-angular/hola-angular.component';
import { OtroComponent } from './otro/otro.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  hola = 'esta  no funca';
}
