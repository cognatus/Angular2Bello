import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-hola-angular',
	templateUrl: './hola-angular.component.html',
	styleUrls: ['./hola-angular.component.css']
})
export class HolaAngularComponent implements OnInit {

	perra = 'quieres ganar dinero chingon?';

	constructor() { }

	ngOnInit() {
	}

}
