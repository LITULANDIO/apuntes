##ANGULAR 2/4

###¿Qué es Angular?

###Componentes:
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

###Vista/Templates:
Va a ser un HTML con atributos de Angular, jerarquía de componentes y vistas
```
<h1>
{{title}}
</h1>

```

###Databinding: 
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

###Directivas:
Son componentes que angular provee, sirve para manipular la vista, ngfor el típico.

```
 <h1 *ngFor="let charla of charlas">
   {{charla.titulo}}
  </h1>

```

###Metadata:
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

###Servicios:
- Es una clase o un método con lógica de negocio, la idea es que pueda hacer la clase a aparte ya sea en typescript/javascript


```
@Injectable()
export class CharlaService{

    constructor()  {  }
}
```

###Inyección de dependencias:
Es una técnica genérica de varios frameworks/patrones de diseño software para desacoplar objetos

###Módulos:
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

###¿Como instalar Angular 2? 

- Primero tener instalado node js
- Instalar typescript: (comprovamos su isntalción tsc -v)

```npm install -g typescript
```

- Instalar Angular
```npm install -g @angular/cli
```

- Instalar Ionic
```npm install -g cordova ionic
```


-Crear un proyecto nuevo de 0:

```ng new 'nombre del proyecto'
```

Para servir el proyecto en un servidor de prueba:

```ng serve -o
```

Ejemplos prácticos:

```https://github.com/nhpatt/agenda
```


###Introducción TYPESCRIPT

Es un super set de javascript
basado en ES5/6

El navegador no interpreta Typescript, para ello es Javascript que que hará de compilador para que pueda interpretar el navegador

let es parecido a var pero tiene un mayo control del Scope

En type script para definir las varoables se recomienda usar los tipos:
Ejemplo:
```let nombre:string ="Carles"
   let numero:number= 123
   let booleano:boolean= true

   let hoy:Date = new Date()

   hoy = new Date('2020-10-21')


```

Template literales

