# Sesion 06 -- Skylab Coders --
### Lunes 21 de Enero del 2016


LINK para hacer katas:
**cyber-dojo.org** **(elegir una y presentar resultados miércoles 23)**

Otro concepto de testear código: **Koans**

## HTML

Lenguaje de marcas: 

1. Capa de Contenido: HTML
2. Capa de presentacion: diseño css
3. Capa de comportamiento: donde se añade la lógica --> js

SEO --> importante buena estructura
Estructurar la página lo más semántico posible, el diseño se encargará el css

No deberiamos utilizar los tags: 
**<br>** 
**<hr>**




**Elementos de bloque:** son todos los <h1...h6>, <p> y <div>, y todos los elementos que nos permiten ocupar bloques, <aside>, <header>, main, 

Tags Principales de bloque:
**Tag DIV:**  Caja --> marcado menos semántico
**Tag SPAN:** Se usa mayormente para diferenciar similar o igual que el div

###TEMA IMAGENES --> IMPORTANT

**Tag <FIGURE>** se utiliza para corresponder a imágenes semánticas, es decir cuando una imagen corresponde a un texto anexo a esa imagen, si la imagen es decorativa, es decir si cambiasémos la imagen y no afecta al sentido semántico de la web podemos utilizar un DIV-SECTION

**Imagen decorativa:** cargamos la imagen en el css
**Imagen con aspecto semántico:** utilizamos el tag <img src="">

Tag <SECTION> --> es el más habitual


**Elementos de linea:** todos los que pertencen dentro de un bloque **<em> <strong>

Añadir comentarios: <!--aquí va el comentario -->

Tags que nos permiten definiir la estructura de la página:

### Estructura HTML
![Esquema](http://www.developer.com/imagesvr_ce/3977/Figure01.png)


<atrticle> --> Es un grupo-bloque de contenido 

tag figure, para encapsular una imagen, el tag figcaption es un tag para poner la descripción de una imagen

tag <nav> cualquier bloque de enlaces

En Sublime para poder crear toda la estructura básica es con **html-5** +tab

### Para saber cuando utilizar un tag u otro:

![Esquema](http://html5doctor.com/downloads/h5d-sectioning-flowchart.png)

### FORMS

"method" Métodos principales GET, POST
"action" la url donde se enviarán los datros del cliente

Tag donde se pueden insertar datos:

<input type="text" name="username">

Botón para enviar datos:

<input type="submit" name="Boton">

Otra manera de crear un botón es creando el tag <button>Boton</button>
Diferiencias: El comportamiento de input es el mismo de button,pero da más margen de poder darle estilos.

### Textarea

Para introducir texto <textarea></textarea>

### Radiobutton
```html
<input type="radio" name="day" value="Friday" checked> Friday
<input type="radio" name="day" value="Saturday"> Saturday
```
### Checkbox
```html
<input type="checkbox" name="day" value="Friday" checked> Friday
<input type="checkbox" name="day" value="Saturday"> Saturday
<input type="checkbox" name="day" value="Sunday"> Sunday
```
### Select
```html
<select name="day">
  <option value="Friday" selected>Friday</option>
  <option value="Saturday">Saturday</option>
  <option value="Sunday">Sunday</option>
</select>
```

### Multiple

```html
<select name="day" multiple>
  <option value="Friday" selected>Friday</option>
  <option value="Saturday">Saturday</option>
  <option value="Sunday">Sunday</option>
</select>
```
### Seleccionar un archivo
```html
<input type="file" name="file">
```
### Enviar información sin que el usuario la vea
```html
<input type="hidden" name="tracking-code" value="abc-123">
```

1ª validación de un formularion es: REQUIRED, 
2ª validación especificar el tip de campo: email, password

Atributos adicionales para validar:

*
    *
        * accept
        * autocomplete
        * autofocus
        * formaction
        * formenctype
        * formmethod
        * formnovalidate
        * formtarget
        * max
        * maxlength
        * min
        * pattern
        * readonly
        * selectionDirection
        * step

### Data list

Para ayudar al usuario intuitivamente a seleccionar mientras escribe

```html
<input list="browsers">

<datalist id="browsers">
  <option value="Internet Explorer">
  <option value="Firefox">
  <option value="Chrome">
  <option value="Opera">
  <option value="Safari">
</datalist>
```


### SUBLIME EN HTML

html-5 + tab --> Se crea toda la estructura html
tag *numero + tab --> se crea tantos tags por numero escritos
lorem + tab --> Se nos crea texto de relleno
instalar el paquete Random everything: para insertar conetenido aleatorio, sobretodo para hacer pruebas!


