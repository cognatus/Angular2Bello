import { CarritoComponent } from './carrito/carrito.component';
import { OtroComponent } from './otro/otro.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { Alumnos2Component } from './alumnos2/alumnos2.component';

export const APP_ROUTES = [

	{
		path: '',
		component: CarritoComponent 
	},
	{
		path: 'otro',
		component: OtroComponent 
	},
	{
		path: 'spotify',
		component: SpotifyComponent 
	},
	{
		path: 'alumnos2',
		component: Alumnos2Component 
	}

]