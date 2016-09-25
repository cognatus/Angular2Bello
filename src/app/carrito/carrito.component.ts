import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';
import { PRODUCTOS } from './productosData';
import { ProductoService } from './carrito.service';

@Component({
	selector: 'app-carrito',
	templateUrl: './carrito.component.html',
	styleUrls: ['./carrito.component.css'],
	providers: [ProductoService]
})
export class CarritoComponent implements OnInit {

	constructor (private productoService: ProductoService){}

	productos : Producto[];

	ngOnInit() {
		this.productoService.getProductos().
			subscribe(productos => this.productos = productos)
		this.productos = PRODUCTOS;
	}

  	addProduct(producto){
		if(producto.quantity < producto.stock) producto.quantity++;
	}

	removeProduct(producto){
		if(producto.quantity > 0) producto.quantity--;
	}

	quedan(producto){
		let restan;
		restan = producto.stock - producto.quantity;
		return restan;
	}

	total(){
		let total = 0;
		let suma = 0;
		if(Array.isArray(this.productos)) {
			for(let producto of this.productos){
				suma = producto.quantity * producto.price;
				total += suma;
			}
		}
		return total;
	}

	pedido(producto){
		let pedido;
		return pedido = `pediste ${producto.quantity} de ${producto.name}`;
	}

}
