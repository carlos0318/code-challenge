# Code Challenge

## Dependencias utilizadas
  - express: Para crear de manera rapida y sencilla la api.
  - jest: Para pruebas unitarias.
  - eslint: Para dar un formato correcto a los archivos.

## Componentes
1. StudentService: 
2. StudentsController: 
3. Reader: 
4. Server: Archivo principal donde se encuentra los endpoints

## API
Utilizando el comando `npm start` se inicia el servidor, el cual tiene varios endpoints: 

| Endpoints  | URL  | Respuesta  |
|---|---|---|
| `/v1/students`  | http:localhost:5000/v1/students  | Nos devuelve todos los estudiantes que se encuentren en la base de datos  |
| `/v1/students/emails`  | http:localhost:5000/v1/students/emails  | Nos devulve todos los emails y los nombres de aquellos que tiene certificado  |
|  `/v1/students/credits` | http:localhost:5000/v1/students/credits  | Nos devuelve todos los esudiantes que tengan mas de 500 creditos  |
