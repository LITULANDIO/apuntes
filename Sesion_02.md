#Sesion 02 -- Skylab Coders --
###Martes 17 de Enero del 2016


##JAVASCRIPT

Es un lenguaje interpretado, no tiene que hacer ningún proceso de compilación y es capaz de ejecutarlo sin ser compilado.

####Versiones

 * Ecma02 -- Pasado: Explorer
 * Ecma05 -- Presente
 * Ecma2015 -- Futuro

 Variables, se almacenan datos y puedan variar en diferentes estados del programa.

 Se declara ```javascript 
                var nombre```
###Datos primitivos

Para expresar  números:

  * Decimal: 0 1 2 3 4 5 6 7 8 9 
  * Binaria: 01
  * Octal: 0 1 2 3 4 5 6 7 
  * Hexadecimal: 0 2 3 4 5 6 7 8 9
                  A B C D E F

Para expresar los Strings " ", ''

Para expresar los Booleanos: true or false

Si no se inicializa una variables es *undefined*

###Operadores aritméticos

   *   Suma = <**+;**
   *   Resta = **-;**
   *   Multiplicación = ***;**
   *   División = **/;**
   *   Resto = **%;**
   *   Incremento = **++;**
   *   Decremento = **- -;**
    
###Operadores lógicos

   *   Verdadero = **true;**
   *   Falso = **false;**
   *   O = **||;**
   *   Y....= **&&;**

###Operadores de comparación

   *   Estrictamente igual **===;**
   *   Distinto a = **!=;**
   *   Mayor que = **>;**
   *   Menor que = **<;**

### Conversiones

Doble negación **!!**

## Condicionales

   * **IF ELSE**
```javascript
var Myname;

If(Myname{
    console.log(Myname)
} else{
    console.log("You don't have a name");
    
}
```

Sirve para saver si una variable está vacía: undefined
Volverá false, si la declaramos vovlerá true.

```javascript
var myName;

If(age>=40){
    myName ="SuperLitus"
}
else{
    myName ="Litus;
}

///Operador ternario: Simplifica if básicos

var myName = (age>=40) ? "SuperLitus" : "Litus";
```
  * **SWitch**

```javascript
var a = '1';
var result = '';

 Switch (a){
    case 1:
        result = 'Number 1';
        break;
    case 2:
        result = 'Number2';
        break
 }
```
  * **LOOPS**


1. WHILE 
```javascript
var 1 = 0;
while(i<10){
    i++
}
```

2. DO WHILE
```javascript
var 1 = 0;
do{
    i++;
}while (i <1 0)
```
2. **FOR**
```javascript
var punishment = '';

for (var i =0; i <100; i++){

    punishment += "I will never do this again";
}



```

  * **FUNCTIONS**

Las funciones siempre devuelven algo, son objetos

```javascript
// Definir una funciona forma 1
function sum(a+b){
    var c = a+ b;    
    return = c;
}
// Definir una funcion forma 2
var sum = function sum(a+b){
    var c = a+ b;
    return = c;
}
//Llamar a una función 
sum(2,3);

//Funcion anonima
>>> function invoke_and_add(a, b){ return a() + b(); }
>>> function one() { return 1; }
>>> function two() { return 2; }
>>> invoke_and_add(one, two);
3
```

La función Parseint, nos pasa de string a números:

typeof "123"
"string"

parseint("123")

typeof parseint("123")
"number"

**isNan()**: Nos devuelve true o false si es un numero o no.

**eval()**: No es recomendado su uso, puede abrir un agujero en la seguridad del código.

  * **CLOSURES**

Variables  globales
Variables locales

Scoop es el término que se utiliza para saber la visibilidad de una función si es local la variable o global. ( es decir el scoop de una variable puede ser local o global o las 2 a la vez).

Si no hay varibales definidas dentro de una función el return buscará una variable global.

Una función puede acceder a una variable externa pero no al revés.

Una funcion padre podrá acceder a las variables  globales (exterior) y variables locales (internas) pero no a las variables hijos, si en cambio el hijo puede acceder a la variable local, padre y global y así sucesisavemente.

Ejemplo:

```javascript

var a = 123;
function f() {
  alert(a);
  var a = 1;
  alert(a);
}
f();
```

###Practicando  closures

var a; typeof a;  **devolverá: undefined**
var s = '1s'; s++; **devolverá: NaN ++suma1 pero al ser string no puede sumar** 
!!"false" **devolverá: True**
!!undefined **devolverá: False**
undefined == null **devolverá: True**
false == "" **devolverá: True**
false === "" **devolverá: False**
typeof "2E+2" **devolverá: String**
a = 3e+3; a++; **devolverá: 3001, 3: decena, e =exponencial =3000++ = 3001**

var v = v || 10; **devolverá: 10**
var v = 100; **devolverá: 100**
var v = v || 10; **devolverá: 100**
var v = 0; **devolverá: 0**
var v = v || 10; **devolverá: 10**
var v = null; **devolverá: null**
var v = v || 10; **devolverá: 10**
```javascript
var x = 'Hello World';
function foo(){ 
    var x;
    alert( x );
    x = 'New Value';
    alert( x );
}
foo(); // devuelve el primer alert como undefined
      // 2º alert devolvera New value, porque foo() sólo
      // encuentra en local la variable declarada como new value, hellow world no la interpreta

function test() {
    foo();
    bar();
    var foo = function () {
        alert("this won't run!");
    }
    function bar() {
        alert("this will run!");
    }
}
test(); 
//funcion test ve foo() como undefined i bar() 
//detecta automaticamente que existen datos, al estar 
//declarada como una varibale var foo = function, 
//prevalece la declaracion de una funcion como tradicional.

var a = 1;
function f() {
    var a = 2;
    function n() {
        alert(a);
    }
    n();
}
f(); f() 
//ve que hay una variable pero la ve como undefined, 
//detecta n(), y n //busca el valor de la varibale primero
 //si existe en local y se va al padre, con lo cual  acaba 
 //devolviendo 2.
```
