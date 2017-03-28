# Sesion 09 -- Skylab Coders --
### Jueves 26 de Enero del 2016


### BOOTSTRAP

Es un framework para el css

Cargamos el js antes de acabar el body para que se puedan seleccionar los elementos.

La versión de desarrollo del archivo.css es de la forma habitual. 
En el caso de bootstrap la version de desarrollo es: bootstrap.css

La versión de producción se recomienda compromir todo el css, para que el usuario final pueda cargar la página de manera ágil y rápida.
En el caso de bootstrap la version comprimida es: bootstrap.min.css 

Usaremos templates --> plantillas para partir de una base, y en función de nuestras necesidades iremos adaptando nuestro diseño.

### Optimizar la carga de la aplicación

CDN --> La ventaja que tiene es que el usuario podrá cargar la web en el servidor que más cerca se encuentre. Si recomendable par proyectos pequeños.
Otra ventaja es que si es recurrente el uso de CDN se almacena en la cache.

La desventaja es que perdemos el control de nuestra librería
En un proyeto real de gran magnitud no sería la mejor práctica.

Para utilizar las clases de bootstrap individualmente:
Instalar plugin en Sublime: **install bootstrapSnippets**

El sistema más importante para manejar Bootstrap es GRID

GRID --> Es un sistema de 12 columnas 

![grid](APUNTES/img/grid.png)

**Jerarquia:** .container
                .row (abrimos un nuevo grid)
                    .col xx xx
                        .row(abrimos un nuevo grid)
                            .col xx xx
                            .col xx xx
                            .col xx xx

**Resoluciones** <768 .col-xs --> Mobile
             >=768 .col-sm -->  Tablet
             >=988 .col-md -->Desktop

**La propiedad visble-xs** for exemple lo que nos permite es darle visibilidad en el formato que especifiquemos.
**La propiedad hidden-x** for exemple lo que nos permite es ocultar un elemento en el formato que especifiquemos.

![grid](APUNTES/img/responsive.png)

El atributo **overflow: hidden** --> nos permite ocultar texto que sobrepase de un bloque. Para cortarlo de una manera elegante sería..: **elipsis**

### Sublime
bs3 css cargar el css en Sublime
bs3 js cargar js / aparte añadir jquery 2.x la más extendida 

#### Ejercicios prácticos: 103-104

bs3.css carga el css de boots en Sublime
prettify women
ALT+shift+w


