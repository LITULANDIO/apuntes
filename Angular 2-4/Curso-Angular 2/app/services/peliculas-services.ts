import { Injectable } from "angular2/core"
import { PELICULAS } from "./mock-pelicula-services"
import { Pelicula } from "../model/pelicula"

@Injectable()

export class PeliculasService{
	getPeliculas(){
		return PELICULAS // metodo que devuelve la constante con todos los datos del array del servicio
	}

	insertPelicula(pelicula: Pelicula){
		Promise.resolve(PELICULAS)
		.then((peliculas:Pelicula[])=> peliculas.push(pelicula))

	}
}