import { Producto } from './producto';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductoService {
	
	constructor(private http: Http) {}
	
	getProductos(){
		return this.http.get('app/producto/data.json')
			.map(response => <Producto[]> response.json().data)
	}

}