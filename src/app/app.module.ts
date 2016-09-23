import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HolaAngularComponent } from './hola-angular/hola-angular.component';
import { OtroComponent } from './otro/otro.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaAngularComponent,
    OtroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
