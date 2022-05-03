# Code Challenge

## Dependencias utilizadas
  - express: Para crear de manera rápida y sencilla la API.
  - jest: Para pruebas unitarias.
    - `npm test` comando para correr todos los test
  - eslint: Para dar un formato correcto a los archivos.
    - `npm eslint` comando para que el linter se ejecute y te diga todas las inconsistencias de escritura
    - `npm eslint-fix` comando para arreglar todas las inconsistencias

## Componentes
1. StudentService: 
    - getAllStudents : método para obtener todos los estudiantes.
    - getStudentsByHaveCertification: método para obtener todos los estudiantes que tienen certificado.
    - getStudentsBy500Credits: métodos para obtener todos los estudiantes que tienen más de 500 créditos. 
2. StudentsController: 
    - getAllStudents : método que llama al método getAllStudents de service para pasarle la db y obtenga todos los estudiantes.
    - getAllEmail : método que llama al método getStudentsByHaveCertification de service para pasarle la db y obtener todos los estudiantes que tienen certificado.
    - getStudentsBy500Credits : método que llama al metodo getStudentsBy500Credits de service y pasarle la db para obtener todos los estudiantes que tienen más de 500 créditos.
3. Reader: 
    - readJsonFile: método que recibe como para metro la ubicación del db para obtener todos los datos de los estudiantes.
4. Server: Archivo principal donde se encuentra los endpoints.

## API
Utilizando el comando `npm start` se inicia el servidor, el cual tiene varios endpoints: 

| Endpoints  | URL  | Respuesta  |
|---|---|---|
| `/v1/students`  | http:localhost:5000/v1/students  | Nos devuelve todos los estudiantes que se encuentren en la base de datos  |
| `/v1/students/emails`  | http:localhost:5000/v1/students/emails  | Nos devuelve todos los emails y los nombres de aquellos que tiene certificado  |
|  `/v1/students/credits` | http:localhost:5000/v1/students/credits  | Nos devuelve todos los estudiantes que tengan más de 500 créditos  |

