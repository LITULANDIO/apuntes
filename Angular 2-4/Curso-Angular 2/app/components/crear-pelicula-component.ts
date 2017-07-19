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
	public nuevaPelicula: Pelicula

	constructor(private _peliculasService:PeliculasService,
	            private _router:Router, 
	            private _routeParams: RouteParams){
	}

	//onCrearPelicula(titulo, director, actor, anio){ 
		onSubmit(){

		//let pelicula:Pelicula = new Pelicula(77, titulo, director, actor, anio); 
		this._peliculasService.insertPelicula(this.nuevaPelicula)
		this._router.navigate(["Peliculas"])
	}

		ngOnInit():any{
			this.TituloPelicula = this._routeParams.get("titulo")
			this.nuevaPelicula = new Pelicula(
				0,
				this._routeParams.get("titulo"),
				this._routeParams.get("director"),
				this._routeParams.get("actor"),
				parseInt(this._routeParams.get("anio"))
				)
		}
}

