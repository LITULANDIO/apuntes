# ANGULAR 2/4  

* faqs markdown = https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

## ¿Qué es Angular?

### Componentes:
Es una clase de Javascript, que tiene atributos y métodos (lógica del componente)
El principal objetivo de un componente es soportar una vista o un template.

```
import { Component } from '@angular/core';

  @Component({
   selector: 'app-root',
   templateUrl: './app.component.html'
  })
  export class AppComponent {
   title = 'app works!';
  }
```

### Vista/Templates:
Va a ser un HTML con atributos de Angular, jerarquía de componentes y vistas
```
<h1>
{{title}}
</h1>

```

### Databinding: 
Setea valores, es el pegamento, una forma de interpolación

```
export class AppComponent{
    title;

    constructor(){
        setInterval( //método que llama a cada segundo
            ()=> this.title = Math.random(), 1000);
    }
}
```

### Directivas:
Son componentes que angular provee, sirve para manipular la vista, ngfor el típico.

```
 <h1 *ngFor="let charla of charlas">
   {{charla.titulo}}
  </h1>

```

### Metadata:
El pegamento que utiliza para configurar el componente, es un conjunto de atributos.

```
@Component({
    selector: 'app-root',
    template:
    <h1 *ngFor="let charla of charlas">
        {{charla.titulo}}
    </h1>

    })

```

### Servicios:
- Es una clase o un método con lógica de negocio, la idea es que pueda hacer la clase a aparte ya sea en typescript/javascript


```
@Injectable()
export class CharlaService{

    constructor()  {  }
}
```

### Inyección de dependencias:
Es una técnica genérica de varios frameworks/patrones de diseño software para desacoplar objetos

### Módulos:
Es reusabilidad y separación de responsabilidades, separamos partes, agrupa un conjunto de responsabilidades similares.

```
@NgModule({
    declarations:[AppComponent],
    imports:[
        BrowserModule,
        FormModule,
        HttpModule
        ],
    provideres: [CharlasService],
    bootstrap: [AppComponent]
    })
    export class AppModule{
        
    }

```


## Introducción TYPESCRIPT 

[Descargar plugin TypeScript para IDE](https://www.typescriptlang.org/index.html#download-links)

Alternativamente, puede clonar el repo directamente en su carpeta Sublime plugin. Por ejemplo, para Sublime Text 3 en una Mac, esto sería algo así como:
```
cd ~/"Library/Application Support/Sublime Text 3/Packages"
git clone --depth 1 https://github.com/Microsoft/TypeScript-Sublime-Plugin.git TypeScript
```

Y en Windows:
```
cd "%APPDATA%\Sublime Text 3\Packages"
git clone --depth 1 https://github.com/Microsoft/TypeScript-Sublime-Plugin.git TypeScript
```

Es un super set de javascript
basado en ES5/6

Lo que hace es añadir a Javascript más funcionalidades de programación orientada a objetos: clases/atributos/constructores/herencia/interfaces.


El navegador no interpreta Typescript, para ello es Javascript que que hará de compilador para que pueda interpretar el navegador

let es parecido a var pero tiene un mayor control del Scope, ya que let no tiene en cuenta el ámbito global. Si fuera de una función declaramos:

```
// Declaramos una varibale fuera de la función
let nombre = "pepito"

// Creamos una función, declarando una vairable con el mismo nombre.

function myname(){
    let nombre ="menganito"
    return console.log("Hola let " + nombre)
}

// En el console.log primero mirará si la función existe una avaribale nombre, si existe la imprimirá, si no existe mira a fuera, si existe la imprimirá.


```

* Cuando trabajamos con Typescript .ts en nuestro editor IDE, para que se compile automaticamente sin tener que estar compilando manualmente podemos utilizar el comando:

```
tsc -w .ts
```



En type script para definir las varoables se recomienda usar los tipos:
**Ejemplo:**
```
   let nombre:string ="Carles"
   let numero:number= 123
   let booleano:boolean= true

   let hoy:Date = new Date()

   hoy = new Date('2020-10-21')


```
Al especificar el tipo a una variable, siempre tendrá que ser del mismo tipo. pero si queremos que una variable puede almacenar distintos tipos podemos usar para ello any, 

**Ejemplo:**
```
let dni:any;

dni = "documento"
dni = 1234
dni = false
```


- **Template literales ES16**

```
let nombre:string = "Litus"
let apellido:string = "Far"
let edad:number = 32

//Javascript
let texto = "Hola", + "nombre" + " " + "apellido" + "("+ edad +")";
//ES16
let texto = `Hola, ${nombre} ${apellido} (${edad})`

```

- **Parámetros obligatorios/opcionales**

```
function activar(quien:string, 
                 objeto:string="batiseñal",
                 momento?:string){

    let mensaje:string
    
    if(momento){
        mensaje = ` ${quien} activó la ${objeto} en la ${momento}`
    }else{
        mensaje = `${quien} activó la ${objeto}`
    }

activar("Carles", "batiseñal") 

activar("Carles", "batiseñal", "tarde")
```

Al pasar parámetros en una función  hay que seguir el orden estricto, y hay que declararlos cuando llamemos a la función obligatoriamente, si queremos que el parámetro sea opcional, le pondremos un ?, de ésta forma podremos declarar parámetros por si nos interesa más adelante usarlos pero sin estar obligados a declararlos  una vez llamemos a la función.
Los parámetros obligatorios siempre tienen que ir al principio, no después de los opcionales.

- **Funciones de flecha --> Arrow functions ES16**

```
let miFuncion = function(a){
                    return a    
                        }

let miFuncionF = (a) => a
```

Es exactamente lo mismo la primera forma como la segunda.
La segunda es una manera de reducir código por ES16

```
let nombre = "Lits"

let Person ={
    nombre: "Litulandio",
    fotli(){
        setTimeout(()=> console.log(this.nombre + "fotli!!"), 1500)
    }
}

```

Ventajas de las Arrow Functions por ejemplo this sigue apuntando al mismo nombre del objeto y no al objeto window de fuera.

- **Destructuración de objetos ES16**

```
//Creamos un objeto

let avenger ={
    nombre: "Steve",
    clave: "Capitan America",
    poder: "Droga"
}

//Llamamos a los atributos del objeto con Javascript
let nombre = avenger.nombre
let clave = avenger.clave
let poder = evenger.poder

// Destructuración TypeScript -ES16
let {nombre, clave, poder } = avenger

//Destructurar un Array TypeScript -ES16
let avengers:string[] = ["Thor", "Steve", "Tony"]

let [thor, capi, ironman] = avengers
console.log(thor, capi, ironman) --> imprimirá: Thor Steve Tony

Secuencialmente aparacerá en el orden que digamos, si queremos coger sólo el último valor haríamos lo siguiente: (poner los carácteres vacíos)
let [, , ironman] = avengers

console.log(ironman) --> imprimirá: Tony

```


- **Promesas ES16**

```
let prom1 = new Promise( function(result, reject){
    
    setTimeout(()=>{
        console.log("Promesa terminada")

        result()
        }, 1500)

        })
        console.log("Paso 1")

        prom1.then(function(){
            console.log("Ejecutame cuando termine bien")
            },
            function(){
                console.error("Ejecutame cuando ejecute mal")
                }
            )
                console.log("Paso 2")


```

## Programación Orienta a objetos con TypeScript

Cualquier cosa puede ser un objeto:

Para poder definir un objeto usaremos una clase

- **CLASES**
Nos permite moldear un objeto.
Se componen de atributos, propiedades, cualidades que forman parte de un objeto
Tienen métodos, los métodos son acciones que puede realizar la clase.

Declarar una clase TypeScript:
**Ejemplo 1**
//Moldear un objeto 
```
Class coche{
    public color:string
    public modelo:string
    public velocidad:number = 0
}
```
// Para llamar a las propiedades usamos el método "getter"
```
public getColor(){
return this.color
}
public getModelo(){
return this.modelo
}
public getVelocidad(){
return this.velocidad
}
```
//Para modificar propiedades usamos el método "setter"
```
public setColor(color:string){
 this.color = color
}
public setModelo(modelo:string){
 this.modelo = modelo
}
public setVelocidad():number{
 this.velocidad = velocidad
}
```
//Para instanciar un coche y crearlo:
```
let coche = new Coche();
```
//llamar a propiedades del coche:
```
Inicializamos el color --> coche.setColor("Blue")
Vemos la propiedad --> coche.getColor();
```
//Crear métodos
```
public acelerar(){
    this.velocidad++
}

public frenar(){
    this.velocidad--
}
```

**Ejemplo 2 con constructor**
```
class Avenger{
    nombre:string = "Sin nombre"
    equipo:string = undefinded
    nombreReal:string = undefined

    puedePelear:boolean = false
    peleasGanadas:number = 0

    constructor(nombre:string, equipo:string, nombreReal:string){
        this.nombre = nombre
        this.equipo = equipo
        this.nombreReal = nombreReal
    }
}

let antman:Avenger = new Avenger("Antman", "cap", "Scoot Lang",)


```

El constructor nos permite inicializar variables, y substituir los valores que vienen por defecto de una clase. 

- **VSIBILIDAD DE ATRIBUTOS Y MÉTODOS**

* Public
Es accesible desde fuera y dentro de las clases y subclases heredadas.

* Protected
Se puede acceder desde la misma clase o de las subclases que hayan heredado, pero nunca desde fuera de la clase.

* Private 
Sólo son accesibles por la propia clase, no podrán ser accesibles desde fuera ni por herencia, ni de ninguna manera que no sea la misma clase

- **INTERFACES**

```
**interface CocheBase**{

    getModelo():string
    getVelocidad():number;
}

class coche **implements CocheBase**{

}
```

Lo que hace es definir que métodos (por ejemplo) va a tener una clase, y ser más estricto para que pueda lanzar obligatoriamente esos métodos.

- **HERENCIA**

Clases Hijas Hereda las propiedades/ métodos de la función padre. 

```
class Programa{
    public nombre:string
    public version:number
}

setNombre(nombre:string){
    this.nombre = nombre
}
setVersion(version:number){
    this.version = version
}
getNombre(){
   return this.nombre 
}
getVersion(){
    return this.version
}
```

//Clase Hija
```
class EditorVideo extends Programa{
    public timeline:number
    
    setTimeline(timeline:number){
        this.timeline = timeline
    }
    getTimeline(){
        return this.timeline
    }

    getAllData():string{
        return this.getNombre()+" - "+ this.getVersion() + "- " + this.timeline
    }
}


let editor = new EditorVideo()

editor.setNombre("Camtasi Studio")
editor.setVersion(8)
editor.setTimeline(4000)

editor.getAllData()

```

En el ejemplo se moldea una clase Programa  con sus atributos y métodos, se moldea una nueva clase editordeVideo que al hacer uso de extends hereda todas las propieades/atributos y métodos  de la clase padre.
En la calse hija se crea un método getAllData(), donde recopila todos los datos de la clase padre e hija.

**Ejemplo práctico de TypeScript con javascript:**

[Aquí el ejemplo](https://www.youtube.com/watch?v=gFj7J14UA3E&index=15&list=PLBdkl5-ytBTw28OJMumO-iUxYnShbhqwO)

![image](https://github.com/LITULANDIO/apuntes/blob/master/Angular%202-4/image-ejemplo.png?raw=true)

**Ejemplo práctico de TypeScript con Angular 2:**

[Aquí el ejemplo](https://www.youtube.com/watch?v=EFzSrFFQAww&index=16&list=PLBdkl5-ytBTw28OJMumO-iUxYnShbhqwO)

- Módulos de TypeScript

Nos permite segmentear el código en diferentes archivos para poderlo mantener







## ¿Como instalar Angular 2? 

- Primero tener instalado node js
- Instalar typescript: (comprovamos su isntalción tsc -v)

```
npm install -g typescript
```

Creamos un archivo llamado "tsconfig.json" y pegamos en el archivo:

```
{
  "compilerOptions": {
    "target": "es5",
    "module": "system",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "removeComments": false,
    "noImplicitAny": false
  },
  "exclude": [
    "node_modules",
    "typings/main",
    "typings/main.d.ts"
  ]
}
```

Éste archivo sirve para configurar  y se encarga de compilar TypeScript.

Luego creamos un archivo llamado: "typings.json" con el siguiente contenido:

```
{
  "ambientDependencies": {
    "es6-shim": "github:DefinitelyTyped/DefinitelyTyped/es6-shim/es6-shim.d.ts#7de6c3dd94feaeb21f20054b9f30d5dabc5efabd",
    "jasmine": "github:DefinitelyTyped/DefinitelyTyped/jasmine/jasmine.d.ts#7de6c3dd94feaeb21f20054b9f30d5dabc5efabd"
  }
}
```

Creamos el package.json con las dependencias necesarias:

```
{
  "name": "angular2-Carles",
  "version": "1.0.0",
  "scripts": {
    "start": "tsc && concurrently \"npm run tsc:w\" \"npm run lite\" ",
    "tsc": "tsc",
    "tsc:w": "tsc -w",
    "lite": "lite-server",
    "typings": "typings",
    "postinstall": "typings install"
  },
  "license": "ISC",
  "dependencies": {
    "angular2": "2.0.0-beta.14",
    "systemjs": "0.19.25",
    "es6-shim": "^0.35.0",
    "reflect-metadata": "0.1.2",
    "rxjs": "5.0.0-beta.2",
    "zone.js": "0.6.6"
  },
  "devDependencies": {
    "concurrently": "^2.0.0",
    "lite-server": "^2.2.0",
    "typescript": "^1.8.9",
    "typings":"^0.7.12"
  }
}
```

Luego en la consola isntalaremos todas las dependencias

```
npm install
```

Creamos un componente "app.Components"

```
import {Component} from "angular2/core"

//metadatos 
@Component({
    selector: "mi-app",
    template: "<h1> Hola Mundo desde Angular 2 </h1>"
})

export class AppComponent{}
```





- Instalar Angular
```
npm install -g @angular/cli
```

- Instalar Ionic
```
npm install -g cordova ionic
```


- Crear un proyecto nuevo de 0:

```
ng new 'nombre del proyecto'
```

- Para servir el proyecto en un servidor de prueba:

```
ng serve -o
```

- Ejemplos prácticos:

```
https://github.com/nhpatt/agenda
```


## ESTRUCTURA DE UN COMPONENTE

```
import {Component} from "angular2/core"
import { Nombre1Component } from "./components/nombre1-component" 
import { Nombre2Component } from "./nombre2-component"

// Se importa en app.component todos los componentes

@Component({ 
  selector: "my-app", --> etiqueta que identifica a una pagina <myapp>aquí contendrá todo el html de la pagina</myapp>
  templateUrl: "app/view/template.html", --> direccion donde se encuentra la vista (plantilla html)
  providers: [nombre1Services] --> declaramos los servicios
  directives: [nombre1Component, nombre2Component], --> declaramos los componentes
  styleUrls: [ "app/css/style.css"] 

```

## ESTRUCTURA DE UN SERVICIO

```
import { Injectable } from "angular2/core" --> Injectable forma de importar un servicio

@Injectable()  
export class PeliculasService{

```

Los servicios en mayor parte se compone de métodos y de lógica reutilizable.

## DIRECTIVAS:

```
*ngIf --> condicional if

(click)="metodo()" --> evento onclick

[class.nombreClase] = "mostrarAlgo === true" --> añadir una clase css, si sse cumple algo...

Two data Binding 

<input type"text"[(ngModel)]="pelicula.titulo"/> --> Cambia los datos en el componente y en la vista

*ngFor="#pelicula of peliculas --> Para mostrar 

```

## DEFINIR RUTAS

//en el archivo  main.ts 
```
import {bootstrap} from "angular2/platform/browser"
import { ROUTER_PROVIDERS } from "angular2/router" --> importamos
import {AppComponent} from "./app.component"

bootstrap(AppComponent, [ROUTER_PROVIDERS]) --> añadimos como parámetro
```


//en el archivo app.component
importamos la configuración para crear rutas
```
import { ROUTER_DIRECTIVES, RouteConfig, Router } from "angular2/router" 

en directives:[      ,          , ROUTER_DIRECTIVES]

@RouteConfig([
  { path: "/peliculas", name: "clase", component:nombreComponent, useAsDefault: true }
])

se pone la ruta / el nombre de la clase / nombre del componente / ruta por defecto a true

```

//en el archivo index.html
```
 <script src="node_modules/angular2/bundles/angular2.dev.js"></script>
 <script src="node_modules/angular2/bundles/router.dev.js"></script>

 antes que acabe el head --> <base href="/">
```