#Sesion 29-- Skylab Coders --
###Lunes 27 de Febrero del 2017

###MONGO DB

**Relacional**(asegura la integridad de los datos) - **No relacional**(asegura alta perfomance en la plataforma-más rapidez)
En vez de habalar de tablas hablamos de colecciones
En vez de hablar de filas hablamos de documentos
En vez de hablar de columnas hablamos de archivos

BSON documents --> Se pueden almacenar fechas directamente
Guardamos arrays de objetos

**Instalar mongoDB**
https://docs.mongodb.com/v3.0/tutorial/install-mongodb-on-windows/#get-mongodb
En variable de entorno hay que editar el Path e insertar la ruta de la instalación: C:\Program Files\MongoDB\Server\3.4\bin

comprobar su correcta instalación en el cmr: mongo --version

Per conectar:
1- mongod --dbpath C:\Users\carle\data --> representa todo el motor "daemon"
2- En otra pestaña lanazamos un shell con mongo
3- 

Base de datos en mongo está compuesta de una colección, y en una colección se compone de documentos, y en cada documento se encuentran los campos.


###Comandos básicos
- **show dbs**: muestra las dbs que tenemos 
- **use test_db**: Se  crea una base de datos/ si está creada cambia la base de datos por la especificada
- **db.users.insert**( { name: 'carles', location: 'barcelona' } ) : creamos una coleccion llamada users e insertamos un campo
- **db**: nos dice el nombre de la base de datos que estamos
- **db.users.find()**: muestra todo lo que existe en la colección
- **db.users.find({location:"madrid"})**: muestra los documentos que cumplan con esa condición
- **db.users.update**({name:{$eq: "juanma}"}, {$set:{name:"juanmanuel"}}: Actualizar datos
- **db.users.remove()**: Borrar todo
- **db.users.InsertMany** ([{name:"carles", location:"barcelona"},{name:pepito", location:barna}]): insertar varios documentos a la vez
- 

Para poder intercatuar mongo con node, hay que isntalar el módulo: npm install mongodb --save 

Métodos para recorrer datos: .toArray() / .forEach() / .next()
Métodos para un cursor:
https://docs.mongodb.com/manual/reference/method/js-cursor/

**Importar una colección:** --> en linea de comandos
mongoimport --db test --collection restaurants --drop --file "C:\Users\carle\Desktop\Projects_Skylab\MONGO DB\mongo-demo/restaurants.json"

const myrestaurantsCursor = db.restaurants.find(); --> podemos guardar en una variable 
myrestaurantCursor.next() --> pasar al siguiente

###Operadores de comparación
- $gt --> grater than (mayor que)
- $gte --> mayor o igual que
- $lt --> less than (menor que)
- $lte --> menor o igual que
- para hacer un and & {name:"pepito", location:"barna"}
- para hacer un or o {$or:[{name:"pepito", location:"barna"}]}
- .sort({"name": -1}) --> -1 orden descendiente
- .sort({"name": 1}) --> orden ascendiente
- _id:0 --> indica que no muestre el id, o con 0 puede ocultar el valor de una busqueda de un campo
- 

###INSERTS
**insertar 1 campo**
```
var newuser = {"name": "carles"};
db.collection('users').InsertOne(newuser, (err, result)=>{
    if(err) throw err;
    console.log("new users has properly isnerted...")
}
```
**Insertar varios campos a la vez**
```
var newsuser = [{name:"carles", location:"barcelona"},{name:pepito", location:barna}]
db.collection('users').InsertMany(newsuser, (err, result)=>)
```
###MODIFICAR
```

```

Paginación: skip(+page-1)* limit


npm install nodemon --save-dev
scripts: nodemon 
npm run dev

instalar Robomongo --> mongo workbench