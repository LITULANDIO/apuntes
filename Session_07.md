#Sesion 07 -- Skylab Coders --
###Martes-Miercoles 24/25 de Enero del 2016

###CSS

-Cascading
-Styles 
-Sheets

###3 Maneras de dar estilo a nuestra página web:

1. Estilo Interno:
```html
<!DOCTYPE html>
<html>
<head>
<style type="text/css">
    h1{
    color: red;

    }
</style>    
</head>
<body>
    <h1>Skylab</h1>
</body>
</html>
```
2. Estilo directo
```html
<!DOCTYPE html>
<html>
<head>
    <title>ejemplo css</title>
</head>
<body>
 <h1 style="color:red">Skylab</h1>
</body>
</html>
```

3. Estilo externo
```html
<!DOCTYPE html>
<html>
<head>
    <title>ejemplo css</title>
<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
 <h1>Skylab</h1>
</body>
</html>
```

Para diferenciar estilo de una seccion de tags a otros:

Podemos seleccionar por #id .class o por tipo/tags <etiqueta>
 
 #id{
 }
 .class{
 }
 <tag>{
 }

id : Es para diferenciar zonas únicas
class: Se pueden repetir en diferentes zonas, está pensado para ser compartida

###Seleccion por hijos 
tag > .class : Selecciona estilo a los hijos directos del tag


###Seleccion por hermanos
.class ~ p{
    //Se le da estilo a todos los hermanos siguientes
}

.class + p{
    // Se le da estilo al tag/hermano siguiente
}

###Selectores avanzados

**Stylus de links <a href=""></a>**
a[target]: Todos los enlaces que le ponga el atributo target= Se abriran en una nueva ventana, y se le aplicarán estilo a los que tengan el atributo target

a[href*=twiter] : Se le dara estilo a todos los enlaces que tengan escrito twiter

a[href$=".pdf"] : Se le dará estilo a todos los enlaces que tengan la extensión .pdf, .doc.....

###Selección por pseudoclase

- Estados de un link:

a:hover{
    //paso el ratón por encima se asignan estilos
}

a:active{
    //Cuando el enlace se clika
}

a:visited{
    //Cuando un enlace a ha sido visitado
}

- Estados de un form
- 
input: enabled/disabled{
    // Cuando un input se ha activado
}

tag o .clase #id first-child : Selecciona el primero
tag o .clase #id first-child +tag: Seleccion el siguinte


!important : se carga la fuerza que pudiera tener otra clase que le ganara peso
a un estilo

###Propiedades para dar estilo

color
background-color
font-family
font-size
top
¡¡margin!! Por defecto en navegador importa unos espacios entre todos los tags, para solucionar si nos interesa que los márgenes sean continuados basta con insertar la propiedad margin: 0;
padding
buttom
//.........................
a tener en cuenta:
**border-bottom:** sustituye el tag <hr> mediante la especificacion css
**border-dutter:** marcado en rayas
**border-radius:** redondear los borders
**line-height:** cambia la altura de una linea
**display:** block --> hago que un elemento en linea pase a ser de bloque cambiando su comportamiento
**display:** inline-block --> hago que 2 elementos de bloque se comporten como dos bloques de linea
**box-sizing:** border-box/border-content --> se incluyen en la dimension de la suma de margin+padding
**float**: Rompre el Natural flow y empuja las cajas hacia ariba
**clear**: both --> Restablece el Natural flow de float
**flexbox**: 
**font-face** --> introducir fuentes nuevas,para hacerlo bien habría que irse a google-font y se descargaria un archivo externo
Hay efectos que se tendrán que incluir para que se pueda visualizar en todos los navegadores
**box-shadow:** Para aplicar sombras a las cajas
**text-shodow**- Para aplicar sombra a los textos
**z-indez:** modelo de capas -1 por detras de un bloque, +1 por delante de otro bloque

--MENUS--
**inline-block**: nos pone un <ul> en linea para hacer menu
**list-style: none**: nos quita los puntos de una lista desordenada <ul>
**a:hover** --> cuando pasas el raton encima de una caja (link)
**a:visited** --cambiar el estado de los enlaces visitados
**text-decoration: none** --> eliminar la linea de los links
**background-image** --> Insertar multiples imagenes a la vez
"Si juntamos los tags en la misma linea no, nos hará un salto de linea por ejemplo <div><footer>"

--RESPONSIVE-- 
Utilizamos la regla MEDIA QUERY (al final de las lineas css)
@media (max-width:900px){ --> se especifica en ancho maximo
main>*{
    float: none;
    width:100%
}    
}

**caiuse.com**--> Se analiza el comportamiento que tendrán los navegadores
....................................................

###Medida para dar estilos

px: Medida absoluta --> fija
%: Medida relativa --> adaptable

###Model de caja (box-model)

Elementos de bloque son la mayoría <div>..........

Elementos de linea van marcados por su contenido. ocupan el espacio que les corresponde.

**Características**
1. Ocupa el 100% del espacio
2. Característica: Se situan uno debajo del otro
3. No viene medida por sus dimensiones sino por la suma de todas ellas
4. Su natural flow es uno debajo de otro

![img](http://learn.shayhowe.com/assets/images/courses/html-css/opening-the-box-model/box-model.png)

Propiedad float en imagen: el conteido puede flotar alrededor, salta al block, por ejemplo en una imagen

Propiedad float con divs: el div pasa de dar el salto de linea a estar en la misma linea 

###Caracteríasticas float

![img](https://librosweb.es/img/css/f0507.gif)

![img](https://librosweb.es/img/css/f0507.gif)

![img](https://librosweb.es/img/css/f0508.gif)

![img](https://librosweb.es/img/css/f0509.gif)


###Propiedades de posicionamiento

**position relative:** te activa las opciones top/left/right/buttom
**position absolute:** Se comporta parecido al float, sale del natural flow, la referencia viene dada por el contenedor más cercano iendo hacia ariba al position relative, si no lo hay se irá al body
**position fixed**: sale del natural flow, se fija en un estado 


Colorzila --> Descargar pluggin para chrome (colores): 
WhatFont --> Descargar pluggin para chrome (fuentes)
Live reload --> Para sincronizar los cambios en tiempo real con Sublime
link : https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
**En Sublime** hay que instalar un pluggin para relacionar Live reload 
ctrl+shift+p -->install package y buscar Live reload

###Propiedad Flexbox del padre

"Las reglas cambian", tener la posibilidad de trabajar con elementos flexibles, sobretodo va bien para hacer diseño responsive.

Es una manera para decirle al css que pueda adaptarse el diseño en otros dispositivos. Está pensado sobretodo dentro de bloques

**Display: flex**; -->cambia el eje vertical a horizontal
**flex-direction**: row; --> defino la direccion
**flex-wrap**: --> salto de linea en funcion del espacio de las cajas y la pantalla para adaptarse.
**justify-content**: space-around/end/center --> centrar y espaciar los elementos
**align-items**: center/baseline --> centra el texto que se encuentra dentro de las cajas
**align-content**: space around, between; 

###Propiedades del hijo

**order: 2;** --> Cambiar el orden y la distribución de los bloques
**align-self:** -->  center/end posicionar a los elementos de bloque hijos.


![img](https://skylabcoders.github.io/bootcamp-winter2017/img/flexbox.png)

Mirar: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

###Diseño Responsive

####MEDIA QUERY

Reglas css sólo se van a aplicar segun el tamaño de la pantalla (segun el dispositivo)


###----------¡¡¡¡¡¡¡¡¡¡¡¡¡IMPORTANT!!!!!!!!!!!!!------------

####Javascript page(28-29)

functions local scoop/ global scoop
closures/ prototype/ hight order arrays
TDD: Katas

####HTML5 page(70)
Aplicar un marcado lo más semántico posible
¡Forms

####CSS3 page(82-83)

Selectores
**BOX MODEL -->SANT GRIAL**


