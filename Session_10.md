# Sesion 10 -- Skylab Coders --
### Viernes 27 de Enero del 2016

### Sass

Es una clase de pseudocódigo

Instalar Scoat--> (software recomendable/ Webpack el más profesional)
Es una versión mejorada del css, cosas que no podemos realizar con el css

Es una versión muy abreviada del css, funciona con tabuladores y variables.
La declaración de un archivo Sass, **archivo.scss**

Nesting: quiere decir declarar una seccion y dentro de ella declarar estilos a los elementos.

Para que el navegador pueda interpretar Sass utilizaremos Scoat, añadiendo un proyecto, seleccionando el input y el output

**@mixin** : Crear funciones 

**@extend**: nos permite enpaquetar todos los estilos de una clase para incluilas en otra clase, ejemplo a la clase mine, le añadimos con @extend.chlid todos los estilos predefinidos con anterioridad

**[ejemplo="elem"]** --> el interior de un corchete se encuentra un atributo con su valor


---------------------------------------
La idea es crear un archivo sass y dentro crear un stylus.scss, abiremos el programa scoop importamos el archivos scss y el archivo css, 
Creamos un mine.scss --> estructura básica, luego podemos crear otros archivos scss que se puedan importar en el mine, si son estilos indepndientes de mine se creará un _primary.scss y en el mine pondremos @import('primary');_

