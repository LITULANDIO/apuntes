# Sesion 03 -- Skylab Coders --
### Miercoles 18 de Enero del 2016


## JAVASCRIPT

### ARRAYS

Un array puede contener datos primitivos, objetos, true, null, undefined, funciones, otros arrays.

Para ejecutar una función dentro de un Array:
Ejemplo: a[0]()

Declarar un array: var a = [];
join() = convierte todos los valores de un array en un string separado por ",-\/||"
toString() = convierte a metodos/objetos/arrays en string a diferencia de join solo sirve para arrays y para poder darle la opcion de escoger un separador


#### Métodos

lenght : averigurar dimension array
push : añade un elemento en la ultima posicion del array
sort : método para ordenar arrays
join : me devuelve un string ,join(",")
slice : me devuelve un nuevo array
splice : modifica el array original 
pop : elimina la ultima posicion del array
shift : elimina la primera posicion del array


funcion map(), for each, every(), some(), reduce() -- repasar


### OBJECTS

Los objetos quedan identificados por las palabras y los arrays quedan identificados por los numeros.

objeto.valueof() = devuelve el objeto en si

match.random = devuelve un numero 



var hero={
    beed: 'Turtle',
    occupation: 'Ninja',
    talk: function(){
     alert('Whoo whoo');
}
};

Para llamar a una propiedad **hero.beed** = nos devolverá Turtle
Para llamar a la funcion **her.talk();**

Un objeto puede contener otro objeto
Para añadir propiedades a un objeto = hero.beed = 'Trol';
```javascript
// Definimos el objeto

function Hero(name) {
  this.name = name;
  this.occupation = 'Ninja';
  this.whoAreYou = function() {
    return "I'm " + this.name + " and I'm a " + this.occupation;
  }
}

// Creamos objetos
>>> var h1 = new Hero('Michelangelo');
>>> var h2 = new Hero('Donatello');
>>> 
//Cuando llamamos una funcion con new se denomina una funcion constructora, y nos devolverá un objeto

//Otra manera de crear un objeto 
function factory(name) {
  return {
    name: name
  };
}

var o = factory('one'); // Llamo a la función y me devuelve el objeto
```

Esquema: **izquierda:** objetos/funciones/ arrays || **derecha:** datos primitivos: Strings; numbers, boolean
![Esquema: izquierda: objetos/funciones/ arrays || derecha: datos primitivos: Strings; numbers, boolean](https://skylabcoders.github.io/bootcamp-winter2017/img/pass-by-reference-vs-pass-by-value-animation.gif)

### Expresiones Regulares

Para crear una expresion regular podemos utilizar una funcion constructora