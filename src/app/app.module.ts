import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HolaAngularComponent } from './hola-angular/hola-angular.component';
import { OtroComponent } from './otro/otro.component';
import { CarritoComponent } from './carrito/carrito.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { Alumnos2Component } from './alumnos2/alumnos2.component';
import { Alumnos2Service } from './alumnos2/alumnos2.service';
import { AlumnoService } from './otro/otro.service';
import { ProductoService } from './carrito/carrito.service';
import { SpotifyService } from './spotify/spotify.service';
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HolaAngularComponent,
    OtroComponent,
    CarritoComponent,
    SpotifyComponent,
    Alumnos2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [ProductoService, AlumnoService, SpotifyService, Alumnos2Service],//dentro poner los servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
