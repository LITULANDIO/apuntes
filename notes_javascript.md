### Bucle forEach --> recorrer arrays

```javascript
var list = [3,4,5,6,7,8,4] //declaración i inicialización de un array

function nums(element, index, array){
    console.log("En el indice: "+index +" el valor es: "+ element+ " y esto es el array completo: "+array)}

list.forEach(nums); // llamamos al array 
En el indice: 0 el valor es: 3 y esto es el array completo: 3,4,5,6,7,8,4
En el indice: 1 el valor es: 4 y esto es el array completo: 3,4,5,6,7,8,4
En el indice: 2 el valor es: 5 y esto es el array completo: 3,4,5,6,7,8,4
En el indice: 3 el valor es: 6 y esto es el array completo: 3,4,5,6,7,8,4
En el indice: 4 el valor es: 7 y esto es el array completo: 3,4,5,6,7,8,4
En el indice: 5 el valor es: 8 y esto es el array completo: 3,4,5,6,7,8,4
En el indice: 6 el valor es: 4 y esto es el array completo: 3,4,5,6,7,8,4
```

### - every() Devuelve true si todos los elementos cumplen la condicion
```javascript
var nums = [3,4,5,6,7,8,11]

function sums(element, index, array){
 return element < 10} // pregunta si todos los valores del array  son más pequeños que 10 

nums.every(sums);
false // devuelve false ya no todos son más pqueños.
```


### - some() Devuelve true si alguno de los elementos cumple con la condicion sino será false
```javascript
var nums = [3,4,5,6,7,8,11]

function sums(element, index, array){
 return element < 10} // pregunta si todos los valores del array  son más pequeños que 10 

nums.every(sums);
true // devuelve true ya que hay uno que no es más pequeño.
```

### METODOS STRING

**length**
Para saber cuantos carácteres:
```javascript
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length; 
sln // llamamos a la variables sln
26 // nos muestra los carácteres
```

**indexOf()** -**search()**
Devuelve el indice de donde se encuentra la primera letra que conincida
```javascript 
var names = "Carles Far"
names.indexOf("F") // Preguntamos en que posicion se encuentra la F
7 // Se encuentra en la posición 7
```

**lastIndexOf()**
Devuelve el indice de donde se encuentra la primera letra que conincida empezando por el final.
```javascript
var names = "Carles Far"
names.indexOf("a") // Preguntamos en que posicion se encuentra la a
8 // Empieza a buscar por el final, la primera a se encuenta en la posición 8
```

**slice()** - **substr()**
Nos devuelve el caracter que esté comprendido entre las posiciones 
```javascript
var str= "Carles Far"
var result = str.slice(7, 10) // posicion 7 a la 10, si sólo especificamos una posición, nos imprimirá todo apartir de la posición, es decir si marcáramos la posición 7 nada más nos imprimirá todo lo que viniera por delante
result
"Far" // nos devuelve la palbra FAR F--> posicion 7, R --z posicion 10-1 (9)
```

**replace()**