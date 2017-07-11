import { Injectable } from "angular2/core"
import { PELICULAS } from "./mock-pelicula-services"

@Injectable()

export class PeliculasService{
	getPeliculas(){
		return PELICULAS // metodo que devuelve la constante con todos los datos del array del servicio
	}
}