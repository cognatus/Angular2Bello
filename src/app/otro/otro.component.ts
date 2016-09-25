import { Component, OnInit } from '@angular/core';
import { Alumno } from './alumno';
import { ALUMNOS } from './mocks';
import { AlumnoService } from './otro.service';

@Component({
	selector: 'app-otro',
	templateUrl: './otro.component.html',
	styleUrls: ['./otro.component.css'],
	providers: [AlumnoService]
})
export class OtroComponent implements OnInit {

	constructor (private alumnoService: AlumnoService){}

	alumnos: Alumno[];

	ngOnInit() {
		this.alumnoService.getAlumnos().
			subscribe(alumnos => this.alumnos = alumnos)
		this.alumnos = ALUMNOS;
	}
	
	//alumnos

	addFalta(alumno){
		if(alumno.faltas < 4) alumno.faltas++;
	}

	removeFalta(alumno){
		if(alumno.faltas > 0) alumno.faltas--;
	}

	reprobado(alumno){
		let reprobado;
		return reprobado = ` ${alumno.name} tiene ${alumno.faltas} faltas`;
	}

}
