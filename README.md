# Pasos Para crear y conectar una BBDD a nuestro Proyecto

Explicaremos como crear una BBDD en mongoDB Atlas y posteriormente conectarla a nuestro proyecto en VS Code.

## MongoDB Atlas

### Paso 1: Tras haberse logeado, nos creamos un cluster. 
   - Escogemos la versión gratuita del cluster
   - Le damos un nombre al cluster
   - Escogemos Google cloud como proveedor
   - Seleccionamos que nuestro Cluster esté en Bélgica

### Paso 2: Nos creamos una BBDD dentro del nuevo cluster.
  - Nos vamos a la sección Database arriba a la izquierda 
  - Le damos a Clusters
  - Veremos nuestro nuevo Cluster creado
  - Seleccionamos Browse Collections
  - Damos a add my own data
  - Damos nombre a la BBDD y a la collection de la BBDD
  - Dentro de la collecion creada nos creamos un elemento si le damos al botón de insert document
  - Le podremos poner los atributos que necesitemos  seleccionando su tipo de datos
    
    #### Tras todos estos pasos nos debería quedar algo asi
    ![image](https://github.com/user-attachments/assets/dd9ee128-8a2a-4ec8-806a-1825e42dea02)

### Paso 3: Configurar el acceso de red de la BBDD
   - Nos vamos a la sección de security
   - Network access
   - Seleccionamos "add ip address"
   - Seleccionamos "allow access from anywhere" y confirmamos

   #### Tras haber hecho esto tendremos lo siguiente:
   ![image](https://github.com/user-attachments/assets/ab44ecd3-d1f3-47fd-acbf-53962181c2f2)

### Paso 4: Crear un usuario para acceder a la BBDD
   - Nos vamos a la sección de security 
   - Database access
   - Seleccionamos "add new database user"
   - Le damos un nombre al usuario y una contraseña
   - En la sección "Built-in Role", damos a "add built-in role"
   - Le damos los permisos de "Atlas admin"

   #### Tras todo esto nos debería quedar un usuario tal que así: 
   ![image](https://github.com/user-attachments/assets/7cb4c827-9e3b-4636-8f9d-b86c65641aac)

## Concetar BBDD en VS Code

### Paso 1: Inicializar el proyecto en vs Code
   - Abrir una carpeta 
   - abrir el command palette "ctrl+shift+p"
   - poner "Deno initialize workspace configuration"
   - en la consola poner el comando "deno init"
   - en el deno.json dar todos los persmisos "--allow-all"

### Paso 2: Añadimos las librerias de mongodb con el gestor de paquetes npm
   #### En la terminal de VS Code ponemos:
   - deno add npm:mongodb
   - tras añadir el comando, veremos que se nos crea un nuevo fichero llamado "deno.lock". Este archivo no hay que tocarlo.
   - tambien veremos que en "deno.json" nos ha añadido en la sección de imports la libreria de mongodb.
     ![image](https://github.com/user-attachments/assets/75839ca4-63bd-4625-a9a4-08454b169bcf)
