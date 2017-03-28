#Sesion 29-- Skylab Coders --
###Miércoles 01 de Marzo del 2017

###MONGOOSE
Es un paquete de modelado de objetos

Ventajas: 
- Aplicamos una primera capa de validación, crea nun modelo y graba, si no lo graba avisará. 
- Setear valores por defecto

Para definir un modelo antes tenemos que "definir" un esquema
Crearemos un modelo:
```  
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model("User", UserSchema);
```

```
npm install mongoose
```        
nombre / apellidos / profesion / edad
```

###SISTEMA DE LOGGIN

- passport --> es un middlware
- pluggin de mongoose --> nos hace la encriptación de la password del usuario, dará una serie de métodos para la validación.
-  Tendremos disponible "req.user"
```
npm install passport --save //modulo general de validacion
npm install passport-local --save 
npm install express-session --save
npm install cookie-parser --save
```
app.use --> usamos middleware

###Project:

views --> pug --> cargar bootstrap/jquery y nuestro css en la ultima linea
public --> css/js/html
bower init -y
.bowerrc --> especificar la ruta de bower components a public
comprobar que se carga bien bower haceindo console.log (inspector chrome)

Subir proyecto:
https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction

crear base de datos: mlab
