#Sesion 11/12 -- Skylab Coders --
###Lunes - Martes 30/31 de Enero del 2016

###J-QUERY

**Trabajar Javascript en el navegador*

###BOM --> NIVEL + ALTO

Todas aquellas propiedades que definen un navegador es el BOM --> objeto window, está formado por todos los objetos que están fuera del documento cargado 

**window.navigator** --> nos proporciona información sobre el navegador
**window.location** --> nos proporciona información sobre la url que está cargada
**window.history** --> Contiene información sobre el historial del usuario, puedo indicar en qué pagina se puede dirigir pero no puedo leer
**window.screen** --> Proporniona información sobre la resolución en pantalla del usuario

Métodos window--> open/ close:

window.open(); --> Nos abrírá una ventana nueva en el navegador
window.close();

seteTimeout() --> Pasados unos segundos se ejecutará el código que proporcionemos
clearTimeout() --> Para la ejecución

setInterval() --> Cada ciertos segundos se iráejecutando el código que indiquemos
clearInterval() --> Para la ejecución

###DOM

![dom](https://raw.githubusercontent.com/juanmaguitar/javascript-notes/master/markdown-en/11-browser-environment/img/dom.png)

###SELECTORES

**Seleccionar elementos:**
Cuando se carga la página se carga el DOM --> Se crea una jerarquia de elementos, según su jerarquía se pueden seleccionar los elementos padre, hijos.....

**Selección nativa de elementos:**
document.getElementById --> Selecciona los elementos con id
document.getElementByTagName --> Selecciona los elementos con el tag
document.getElementByClassName --> Selecciona los elementos con la clase

document.querySelector(["name"]); --> Selecciona todos los atributos name

![nativa](https://raw.githubusercontent.com/juanmaguitar/javascript-notes/master/markdown-en/11-browser-environment/img/parent-child.png)

JQUERY --> (librería) es una colección de propiedades y métodos 

Framework me obliga a seguir un patrón y una estructura determinada, una librería no.

Seleccionamos elementos y con esa selección cambiamos la propiedad del propio elemento.
$("h3").css("backgroun-color", "green"); --> Selecciona todos los h3 y lo cambia a un color verde.

**Si seleccionamos un id**--> $("#id")
**Si seleccionamos una clase** --> $(".class")
**Seleccionar elementos de atributo** --> $( "input[name='first_name']" );
**Seleccionar mas de 1 elemento** --> $("div.Class, ul.people")
No salamente podemoss seleccionar una propiedad si no podemos seleccionar varias a la vez. :odd --> hace una doble selección
 **Seleccionar elementos visibles** --> $("div:visible") 
 **Seleccionar elementos no visibles** --> $("div:hidden") 


**Para saber cuantos elementos** --> $("p").lenght
El método has --> "tiene" $("div").has("p").lenght --> Devuelve cuantos parrafos "tiene" div

.not --> hace un filtro y devuelve aquellos "que no" tengan....

###Pseudoselectores FORM
(form:input) --> Seleciona todos los inputs de un fomulario
(form:checked) --> Revisar si están las casillas check verificadas
(form:selected) --> Verificar si se han seleccionado radio but/select
(form:enabled) --> Habilitar
(form:disabled) --> Deshabilitar
**.filter(:enabled/:disable/:even...........) -->** método para seleccionar aquellos que sean similares al selector, ejemplo --> *$("li").filter(:even).css("background-color", "blue")*; aplicará el efecto al primer li y al tercero

input:password
input:reset
input:radio
input:text
input:submit
input:checkbox
input:button
input:image
input:file

###OBTENER INFO

**.html()** --> Introduce un tag, un elemento, texto, al elemento seleccionado del html, Ejemplo: $("h1").html("I love coder");
**.text()** --> Establece/lee contenido a elementos de tipo texto seleccionado
**.value()** --> Se obtiene información de los inputs
**.attr()** --> Se obtiene el valor de un atributo 
Ejemplo:
alert($("#w3s").attr("style"));
<p><a href="http://www.w3schools.com" style="color:blue" id="w3s">W3Schools.com</a></p>  --> nos devolverá el valor del atributo style

$("form input").val() --> **El método val()** nos devuelve el input de un label
Para poder acceder a una posición de un elemento de un formulario utilizaremos 
**eq[0]** (será el índice) --> para respetar jquery no utilizaremos directamente[0]

###MOVER / COPIAR 
 
 Efecto inverso .append, .appendTo

**La propiedad .appendTo** --> Primero Seleccionamos el 
$("hijo").appendTo("#id"); luego el padre
var name ="Carles";
$("<li>"+name+"</li>").appendTo(#id); Inserta un li con un nombre 
**La propiedad .append**--> Primero seleccionamos el padre
 $("#id").append("hijo") luego al hijo, se inserta seguido al final del elemento
 **La propiedad .Before** --> Inserta algo delante del elemento seleccionado
$("#id").before()
**La propiedad.After** --> Inserta algo después de un elemento seleccionado
.insertAfter() --> Inserta el elemento después de.....
.after

###CLONAR ELEMENTOS
**.clone().appendTo** --> Clona el elemento seleccionado y lo inserta 
$(".projects").clone().appendTo(".projects")});

Mirar --> Interesante: Selecciona hijos/padres
http://learn.jquery.com/using-jquery-core/traversing/
http://jsfiddle.net/juanma/pp3h1hpo/

$.trim() --> Es un método para limpiar los espacios de una selección.

###Métodos jquery:

$.each() --> método estátio utilizar para recorrer un objeto, un array
$("elemento").each() --> Recorre una seleccion jquery

http://learn.jquery.com/using-jquery-core/utility-methods/

###Borrar elementos

**elimina propiedades** -->.remove()


$name.innerHTML --> Volverá undefined 
$name[0].innerHTML = "Hola que tal" --> seleccion nativa

this --> apunta a cada uno de los elementos que estemos tratando

Ejemplo:

$("li").each( function(index, elem) {

        if ( index%2 != 0) {
          console.log(index)
          $(elem).html(  Number( $(elem).text() ) * 4000 )
        }

      })



###Métodos
.stopInmediatePropagation() --> para el bubbling hacia ariba y los laterales
.stopPropagation() --> Para el bubbling hacia ariba
.preventDefault() --> paraliza cualquier funcionamiento, previene antes de...
.parent() --> Búsqueda del padre
.children() --> Búsqueda de elementos secundarios
.siblings() -->Seleccionar a todos los hermanos



###EVENTS

**Estructura:**
$()on("event", function(){
    
})

Cuando se hace click se hace Bubbling hacia ariba, 

$().on()
el this apunta al elemento seleccionado, this = e.target

###EVENTOS DE ZONAS
blur:
focus: situar el foco en una zona 
focusin: 
focusout:
###EVENTOS DE VENTANA 
load: 
resize: 
scroll:
unload:
###EVENTOS DE RATON
click: 
dblclick: 
mousedown:
mouseup:
mousemove:
mouseover:
mouseout:
mouseenter:
mouseleave:
###EVENTOS DE FORM
change: cada vez que se introduce algo en un input y se sale pasan cosas, select, 
submit, 
###EVENTOS DE TECLADO
keydown, 
keypress, 
keyup, 
error: capturar el error

###JSON

JSON no puede usarse por si sólo sin hace una previa trasnformació.

JSON.parse --> convierte un JSON a objeto javascript
JSON.strinngfy --> convierte un objetos de javascript a JSON

**Intercambio de datos al servidor:**

JSON.stringify({ breed: 'Turtle', occupation: 'Ninja' });
"{"breed":"Turtle","occupation":"Ninja"}"


###AJAX

Petición asíncrona al servidor (sin tener que recargar la página)

![sinc](https://raw.githubusercontent.com/juanmaguitar/javascript-notes/master/markdown-en/14-AJAX/img/ajax.png)

![asinc](https://raw.githubusercontent.com/juanmaguitar/javascript-notes/master/markdown-en/14-AJAX/img/ajax.png)

Tiene una limitacion, sólo puedo hacer una petición a la misma página del mismo dominio. Para solucionar éste problema se podría con JSONP y CORS

Cómo funciona una petición Ajax: 

$.ajax 

1- una url donde quiero hacer esa petición
2- cuando el servidor haya respondido ejecutará una función 

Comando GIT para crear un servidor local:

npm install http-server -g