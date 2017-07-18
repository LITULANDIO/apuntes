// Importar el núcleo de Angular
import { Component } from "angular2/core"
import { Pelicula } from "../model/pelicula"
import { PeliculasService } from "../services/peliculas-services"
import { ROUTER_DIRECTIVES, RouteConfig, Router } from "angular2/router"

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
	selector: "peliculas-list",
	templateUrl: "app/view/peliculas-list.html",
	providers: [PeliculasService],
	directives:[PeliculasListComponent, ROUTER_DIRECTIVES],
	styleUrls: [ "app/css/style.css"] 
})

// Clase del componente donde iran los datos y funcionalidades
export class PeliculasListComponent{ 
		public pelicula:Pelicula
		public peliculaElegida:Pelicula
		public mostrarDatos:boolean
		public peliculas
		public datoServicio
	

		constructor(private _peliculasService: PeliculasService){ // variable oculta igual al Servicio
			this.mostrarDatos = false
			this.debug()
			this.peliculas = this._peliculasService.getPeliculas() // peliculas es igual al Servicio + la llamada al método que los muestra
			this.pelicula = this.peliculas[0]
			this.peliculaElegida = this.peliculas[0]
			}

	
		debug(){
			console.log(this.pelicula)
		}

		onShowHide(value){ // metodo para mostrar datos con el boton
			this.mostrarDatos = value

		}

		onChangeFilm(pelicula){ // al hacer click se muestra una pelicula 
			this.pelicula = pelicula
			this.peliculaElegida = pelicula
		}
}