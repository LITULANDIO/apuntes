# Sesion 22-23-- Skylab Coders --
### Jueves/Viernes 16-17 de Febrero del 2017

### ES2015

Evitar tareas repetitivas, mejorar el código

### CARACTERÍASTICAS

1. Arrow functions ( manera más corta de hacer funciones, son siempre anónimas =>)
2. THIS -->
3. Declaración de variables: let: variable temporal / var: variable standard / const: variable inalterable
4. Template Strings --> Declarar un string ´string´ respeta los saltos de linea
**ejemplo:**

```javascript
var text = `Esto es
un ejemplo de 
salto de line`
```

**Dentro de un String podemos mostrar las variables: con los stiks ejemplo:**
```javascript
var name = `carles`
var location = `barcelona`
var myjob = `el señorito ${name}
reside en la localidad de ${location}
y pim pam`
```

**Ejemplo de tratar operaciones dentro de un objeto, simplificar la declaración de un objeto**
```javascript
var myName = "juanma"
var myLocation = "barcelona"

const sayHi = name => `Hello ${name}!!`

var me = {
  myName,
  myLocation,
  sayHi,
  [`topic-${name}`] : 45
}

// var sayHi = function(name) { return "Hello" + name + "!" }

// function sayHi(name) {
//   return "Hello" + name + "!"
// }



// var me = {
//   name: name,
//   location: location
//   sayHi: sayHi
// }

var me = {
  name,
  location,
  sayHi,
  [`topic-${name}`] : 45
}

me["topic" + index] = "aaaa"

me.sayHi('juanma') // Hello juanma!



function (idArtist)  {
2
  const url = `http://api.spotify.com/artists/${idArtist}`

  $.ajax({ url })
    .then( (data) => console.log(data))


}
```

**Operador ternario:**
location = location ? location: "barcelona" --> javascript standrad
location = location || "barcelona" --> ES16

**Destructuring Assignament**

var [A,B,C,D,E] = [1,2,3,4,5]

**Rest Operator**
...rest

### Promise

Nos permite encapsular una operación futura, como si se tratara de una operación asíncrona. 

Forma nativa de declarar una promesa: le pasas 2 parámetros, resolvd y reject


var promise = new Promise(function(resolve, reject)){
    
    setTimeout(function(){
        resolve("Juanma")
        },5000)
        })

El método then es un método que define otra función 

promise().then(function(data){
    console.log
}

Para lanzar la promesa (la función que quiera resolver)

promise.all --> agrupar promesas
promise.race --> 

npm browefy -g -->
npm watchify -g -->  

### Métodos nuevos de Arrays

**Array.of**(2,2,2,) --> convierte un array separado por comas

**Array.from**("carles") --> convierte un array a partir de un pseudoarray  

Very interesant!! --> **fill("*")**. puedo rellenar un array con valores 

**.find** --> imprime un único valor, el primero que cumpla uan condición
**.findIndex** --> te devuelve la posicion donde ha encontrado el valor
**.filter** --> a diferencia de filter te devuelve todos los valores que cumplan la condición

Strings

var name = "carles esta estudiando en skylab"

name.includes("skylab") --> nos devolverá true si existe la palabra false si no existe.

"-".repeat() --> repite 




