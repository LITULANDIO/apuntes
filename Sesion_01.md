# Sesion 01 -- Skylab Coders --
### Lunes 16 de Enero del 2016

## Front End                         

* HTML -->Contenido
* CSS -->Design
* JS --> Comportamiento

## Back End

* Phyton
* Java
* Php
* Node.js *(Javascript)* -- Framework: **Express**

**Editor de texto** *recomendado para usar*: **Sublime**

### Acceso a sitios de Sublime con atajo de teclas:

* CTRL + K +B = Mostrar Barra Sidebar
* CTRL + P = Buscar archivos
* CTRL + shift + P = Instalar paquetes
* CTRL + N = Nuevo archivo
* CTRL + S = Guardar
* CTRL + C = Copiar
* CTRL + D = Selecciona 1 variable y se modifica todas las variables a la vez cuando escrives.
* CTRL + Z = Volver atrás
* CTRL + y = Hacia delante
* CTRL + f = Buscar la palabra
* ALT = Aparezca el menú

Configurar Sublime para seguir un formato organizado de código:

1. Descargar node.js
2. En el cmr:  npm install standard --global
3. Luego en Sublime ctrl+shft+p: install package
       * SublimeLinter  
       * SublimeLinter-contrib-standard
       *  StandardFormat

### Peculiaridades al escribir un html:

tag+ *(numero) : Introduce tags automaticamente

Markdown: Es un lenguaje que se utiliza para documentar

### CMR

* Crear archivo vacio: touch
* Crear directorio: mkdir



## GIT HUB : Control de versiones 

1. Creamos una carpeta, en ella crearemos el repsitorio donde se guardará y gestionará el proyecto. *( Nos permite crear repositorios remotos)*
2. Commit: Establecer una nueva versión del proyecto *(registrar los cambios)*

### Working copy

3. Para inicializar un repositorio: **git init**
4. Para eliminar el repositorio: **rm -rf git**
5. Para saber el estado en que se encuentra el proyecto: git status
6. Para saber si existe un repositorio en un proyecto con el comando **git -l**
7. Creamos el archivo en Sublime

### Staying Area

8. Para registrar un nuevo archivo: **git add index.html**
9. Para registrar todo: **git add** --all o **git add ***
9. Para comitear los cambios: **git commit -m "index.html created"**
10. Para ver el estado del rep: **git status**
11. Para ver un listado de commits: **git log**
12. Para añadir pequeños cambios y comitear a la vez **git commit -am "info"**

### Local Repository

1. Accedemos a la cuenta GITHUB y creamos un nuevo repositorio con el mismo nombre en local.
2. luego hacemos un copy/past de la url: **git remote add origin** https://github.com/LITULANDIO/project_1.git y la pegaremos en la consola cmd de git.
3. Para comprobar que se ha enlazado bien utilizamos el comando: **git remote -v**
4. Para sincronizar los repositorios: **git push -u origin master**
5. Las siguientes veces haciendo: **git push** es suficiente
5. Insertaremos nuestro nombre de usuario y contraseñagit 

### Configurar github

>$ git config --global user.name "John Doe"
>$ git config --global user.email "john@doe.org"

>Para ver las configuraciones: git config -l
>Para guardar credenciales: git config --global credential.helper wincred




### Trabajar con git / compartir proyectos de 3os

Para trabajar en local utilizaremos **clone download** y se nos bajará todos los archivos en la propia máquina.

Para trabajar en remoto desde github utilizaremos **Fork**

## Esquema de Git

![Esquema](https://skylabcoders.github.io/bootcamp-winter2017/img/basic-remote-workflow.png)

