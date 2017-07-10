// Importar el núcleo de Angular
import {Component} from "angular2/core"
import {Pelicula} from "./model/pelicula"

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
	selector: "my-app",
	templateUrl: "app/view/peliculas.html",
	styleUrls: [ "app/css/style.css"] 
})

// Clase del componente donde iran los datos y funcionalidades
export class AppComponent{ 
		public titulo:string = "Peliculas con Angular 2"
		public pelicula:Pelicula
		public mostrarDatos:boolean
		public peliculas:Array<string>
	

		constructor(){
			this.mostrarDatos = false
			this.pelicula = new Pelicula(1, "Braveheart", "Mel Gibson", "Mel Gibson", 1995 )
			this.debug()

			this.peliculas = [
				new Pelicula(1, "Braveheart", "Mel Gibson", "Mel Gibson", 1995 ),
				new Pelicula(2, "El diario de Noah", "Nick Cassavetes", "Ryan Gosling", 2004 ),
				new Pelicula(3, "Saw", "James Wan", "Tobin Bell", 2005 ),
				new Pelicula(4, "Titanic", "James Cameroon", "Leonardo di Caprio", 1997 ),
				new Pelicula(5, "A todo gas 8", "Mel Gibson", "Vin Diesel", 2017 ),
				new Pelicula(6, "Malditos bastardos", "Quentin Tarantino", "Brad Pitt", 2009 )
			   ]



		}

	
		debug(){
			console.log(this.pelicula)
		}

		onShowHide(value){
			this.mostrarDatos = value

		}
}

