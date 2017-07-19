# Sesion 24-25-26-27-28-- Skylab Coders --
### Lunes 20 de Febrero del 2017

### EXPRESS (framework node)

Es un módulo npm --> hay que importarlo, nos facilita la creaacion de servidores web

- Primero de todo creamos un packet jason con **npm init--yes**
- Luego instalamos el paquete: **npm install express --save** (--save: añadimos como dependencia a nuestro proyecto) al subir nuestro proyecto, podemos eliminar la carpeta node modules y dejar el package jason como dependencia.
- en el archivo de código para poder utilizar el archivo expres:
**var expresss = require ('express')** --> lo siguiente que haremos será 
**const app = express()**--> generáá un objeto, que nose servirá para manejar nuestro servidor web a través de sus objetos
**Definimos la ruta -->** app.get('/',(request, response) =>response.send("Hello World") 
**Escuchar por el puerto -->** app.listen(PORT, ()=> console.log(`Listening on PORT ${PORT}...`))
**Para comprobar nuestro servidor -->** vamos al navegador localhost:3001 y podremos ver contenido
**curl -->**es un comando para hacer peticiones al navegador desde el terminal
curl localhost:3001
**Postman -->** pluggin para chrome para emular y hacer testeos de envio de datos al servidor
**const PORT = process.env.PORT** --> variable de entorno
En windows para poder setear las variables de entorno tendremos que ejecutar el comando **set PORT=3005 && set API_KEY=kfljelrj3494jfsf943 && node main.js**

- Para automatizar la escucha del servidor podemos modificar el archivo package jason en la seccion scripts, e insertar "start": set PORT=3005 && set API_KEY=kfljelrj3494jfsf943 && node main.js"
De ésta manera podremos ejecutar **npm start** y directamente escuchará por el puerto

Automatizar el proceso de instalación, también  lo podemos incluir en el package  jason en scripts con: **"prestart"**

**watch**

Preparar el servidor para recibir archivos estáticos: 
Configuramos la aplicación express --> **app.use(express.static('public'))**
Todo lo que le pasemos e el interior de la "carpeta" public será estático

**curl --data ""** --> para ver en consola la respuesta de un método post!

### sPUG:
Una manera muy abreviada de expresar un hmtl "npm install pug" sería el equivalente a SAAS en html
Las tabulaciones muestran la jerarquia del  html 
- Sirve para configurar mi servidor web (el método set)
app.set("view engine" , pug) le digo que mi motor de plantillas es PUG, y además va a buscar en una carpeta seimpre llamada views el archivo html.pug

defino la ruta con get, --> app.get('/home', (req, resp)=>{
    res.render('home', {title: "this is main title"})
})



render es el canal para renderizar el html transpformado en PUG. además va mostrar lo que le pasemos en title.

app.me(express.static('public')) .html/js/css --> archivos estaticos
para servir archivos estaticos, especificamos la carpeta donde estarán los archivos con su extensión

res.send --> deuvuelve texto
res.json --> devuelve contenido json
res.render --> devuelve contetnido dinamico
res.sendFile --> devuelve contenido estatico
re.redirect --> nos permite redireccionar una página

pagina 241

bower init
bower install "dependencia" --save
crear archivo .bowerrc {"directory": "aqui el directorio donde queremos que se isntale el bower components"}
para especificar en el mismo pakage.json los archivos de configuacion de cliente y sservidor en prestart podemos  install exprerss && isntall bower

Ruta para especificar el css de bootstrap teniendo bower instalado:
<link rel="stylesheet" href="bower_Components/bootstrap/dist/css/bootstrap.min.css">

Importatn si es posa  /--> raiz
Para pasarlo a PUG podemos utilizar la herramiento --> toPug

Para debuguear con node: npm install devtool --global

const router = express.reouter() --> especificar rutas
Para poder enviar datos con el método POST--> instalaremos el Método Body.parser, cargar el require y hacer un copy past de app.use 

