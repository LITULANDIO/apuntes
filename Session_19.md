#Sesion 19/20/21 -- Skylab Coders --
###Lunes - Martes - Miercoles  13-14-15 de Febrero del 2017

###NODE.JS

Es un un motor de javascriptv8
Es un entorno  basado en javascript del lado del servidor, 
Sistema modular --> que utiliza Common Js: model.exports para exportar 
                                           require: para importar archivos
NPM --> Compartir módulos, facilmente instalado - descubrimiento - publicación - gestión de dependencias - package.json

Podemos leer y escribir archivos, crear un servidor web, eventos
Paquetes nativos de node: url/http/path/fs/utils

process.argv --> Nos dice los argumentos de un array
process.env --> contiene las varibales de entorno

Streams: Readtable - Writable
fs.createReadStream --> Stream --> cuando empiaza a actuar lanza eventos
escucha eventos: on(data) / on(end) /on()
fs.createWriteStream
Creamos una especie de tuberia, cuando empieza a recibir información 

pipe() --> se encarga de unir lo que lee y se escribe, conforme va leyendo se va escribiendo

Duplex --> es un string tanto de lectura como de escritura
process.stdin --> se encarga de capturar lo que el usuario escribe
Transform --> nos permite encadenar 

throw 2 --> es una funcion  que recibe un string de lectura después de haverse transformado




npm install -g nodemon
npm insttall npm
mkdir demo --> creamos un directorio
npm demo init --> haciendo intro creamos un archivo json
npm install express --save --> nos guarda como dependecia el paquete en el archivo json --> similar a bowser

NPM es el padre de los paquetes --> se pueden instalar en local o en global

El eje central de los paquetes es el package.json

npm install xxxx(modulo) --save -s --> se nos guarda en l carpeta  de dependencias
npm install xxxx --global -g --> se nos instala en global dee todo el ordenador

Cuando creamos un archivo js comprovamos que el paquete está bien instalado haciendo:
ejemplo de un paquete instaladoo emoji.js

var emoji = require('node-emoji').emoji
console.log('node.js', emoji.emoji.heart, 'emoji')
console.log('random:', emoji.random().emoji)

mpm init -y instala un packaje.json sin preguntar

Para poder crear un sservidor necesitamos del objeto http --> crete server, devuelve una instancia
```
var http = requier('http')
```
crear el objeto server --> 
```
var server = http.createServer();
```
defininir el evento del tipo request :
```server.on('request, function(req, res){
    res.end('this is response'); 
    });
```
El método end manda un mensaje y corta la comunicacion

server.listen(3000) --> utilizamos el método listen del objeto server, escucha por el puerto 3000



el método url --> 
el objeto path--> var path = require('path') page 210 (module)

readfileSync --> version sycrona  del archivo
readfile --> versiión asíncrona por defecto del archivo

console.log(process.argv)--> convierte en array

throw error--> captura el error
console.log(proces.env) --> muestra todas las variablees de entorno

3 Maneras de decalrar variables en NODE:

var
let
const --> declarar una constante

-----------------------Existen 2 módulos REQUIRE Y EXPORTS---------------------

por ejemplos tenemos un archivo llamado hellow.js
dentro de él tenemos una función  que queremos exportar:
lo declaramos mediante 
```exports.funcname = function(){
    return "Hellow world";
}
```
es lo mismo que hacer: 
```function funcname() { return 'Hello World'; }
module.exports = { funcname: funcname };
```
Ahora desde otro archivo podríamos llamar a la función mediante un require, ejemplo: 
```var hello = require ('./hellow.js') //--> llamo al archivo!
```
imprimo lo que quiero que se muestre : 
```console.log(hello.funcname()); 
```
se imprimirá del archivo hellow la funcion llamada funcname que dará como resultado el return "Hellow world"

