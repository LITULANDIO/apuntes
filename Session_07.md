#Sesion 01 -- Skylab Coders --
###Lunes 24 de Enero del 2016

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









