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

## ¿Como instalar Angular 2? 

- Primero tener instalado node js
- Instalar typescript: (comprovamos su isntalción tsc -v)

```
npm install -g typescript
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


## Introducción TYPESCRIPT 

[Descargar plugin TypeScript para IDE](https://www.typescriptlang.org/index.html#download-links)

Es un super set de javascript
basado en ES5/6

Lo que hace es añadir a Javascript más funcionalidades de programación orientada a objetos: clases/atributos/constructores/herencia/interfaces.




El navegador no interpreta Typescript, para ello es Javascript que que hará de compilador para que pueda interpretar el navegador

let es parecido a var pero tiene un mayo control del Scope

En type script para definir las varoables se recomienda usar los tipos:
Ejemplo:
```
   let nombre:string ="Carles"
   let numero:number= 123
   let booleano:boolean= true

   let hoy:Date = new Date()

   hoy = new Date('2020-10-21')


```

- Template literales ES16

```
let nombre:string = "Litus"
let apellido:string = "Far"
let edad:number = 32

//Javascript
let texto = "Hola", + "nombre" + " " + "apellido" + "("+ edad +")";
//ES16
let texto = `Hola, ${nombre} ${apellido} (${edad})`

```

- Parámetros obligatorios/opcionales

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

- Funciones de flecha --> Arrow functions ES16

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

- Destructuración de objetos ES16

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


- Promesas ES16

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

- CLASES

Se componen de atributos, cualidades que forman parte de un objeto
Tienen métodos, los métodos son acciones que puede realizar la clase

-HERENCIA

clases Hijas Hereda las propiedades/ métodos de la función padre. 

Declarar una clase TypeScript:

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

- Módulos de TypeScript

Nos permite segmentear el código en diferentes archivos para poderlo mantener