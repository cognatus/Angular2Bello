import { Component, OnInit} from '@angular/core';
import { Alumnos2Service } from './alumnos2.service';
import { Alumnos2 } from './alumnos2';

@Component({
	selector: 'alumnos2-component',
	templateUrl: './alumnos2.component.html',
	providers: [Alumnos2Service]
})
export class Alumnos2Component implements OnInit {

	alumnos: Alumnos2[];

	constructor (private alumnos2Service:Alumnos2Service){}

	ngOnInit() {
		this.alumnos2Service.getAlumnos().
			subscribe(alumnos => this.alumnos = alumnos)
	}

}
