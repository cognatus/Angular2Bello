import { Component, OnInit } from '@angular/core';
import { Alumno } from './alumno';
import { ALUMNOS } from './mocks';
import { Producto } from './producto';
import { PRODUCTOS } from './productosData';

@Component({
	selector: 'app-otro',
	templateUrl: './otro.component.html',
	styleUrls: ['./otro.component.css']
})
export class OtroComponent implements OnInit {

	alumnos: Alumno[];
	productos : Producto[];

	ngOnInit() {
		this.alumnos = ALUMNOS;
		this.productos = PRODUCTOS;
	}
	
	addProduct(producto){
		if(producto.quantity < producto.stock) producto.quantity++;
	}

	removeProduct(producto){
		if(producto.quantity > 0) producto.quantity--;
	}

}
