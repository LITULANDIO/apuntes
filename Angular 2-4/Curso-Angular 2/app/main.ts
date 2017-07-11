/*Ahora creamos el fichero main.ts en el directorio app, básicamente se encarga de 
lanzar el framework al cargar la página:*/

import {bootstrap} from "angular2/platform/browser"
import {ROUTER_PROVIDERS} from "angular2/router" 
import {AppComponent} from "./app.component"

bootstrap(AppComponent, [ROUTER_PROVIDERS])
