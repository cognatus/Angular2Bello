import { Alumnos2 } from './alumnos2';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable() 
export class Alumnos2Service {
	
	constructor(private http: Http) {}
	
	getAlumnos(){
		return this.http.get(`http://vijusamexico.net/alumnos/`)
			.map(response => <Alumnos2[]> response.json())
	}

}