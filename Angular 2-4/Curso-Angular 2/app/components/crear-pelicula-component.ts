// Importar el núcleo de Angular
import { Component } from "angular2/core"
import { OnInit } from "angular2/core"
import { Pelicula } from "../model/pelicula"
import { Router, RouteParams } from "angular2/router"
import { PeliculasService } from "../services/peliculas-services"


// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
	selector: "crear-pelicula",
	templateUrl: "app/view/crear-pelicula.html",
	providers: [PeliculasService]
	
})


// Clase del componente donde iran los datos y funcionalidades
export class CrearPeliculaComponent implements OnInit{ 
	public TituloPelicula =""

	constructor(private _peliculasService:PeliculasService, private _router:Router, private _routeParams: RouteParams){
	}

	onCrearPelicula(titulo, director, actor, anio){

		let pelicula:Pelicula = new Pelicula(77, titulo, director, actor, anio);
		this._peliculasService.insertPelicula(pelicula)
		this._router.navigate(["Peliculas"])
	}
		ngOnInit():any{
			this.TituloPelicula = this._routeParams.get("titulo")
		}
}

