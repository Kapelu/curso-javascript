/*
IMPORTANTE: no modificar el código (variables instructor y alumno, y función getNombre)
Usando el método bind() guardar, en las dos variables declaradas a continuación, dos funciones que actúen como getNombre pero retornen el nombre del instructor y del alumno, respectivamente.
*/

var instructor = {
    nombre: 'Franco',
    edad: 25,
};

var alumno = {
    nombre: 'Juan',
    curso: 'FullStack',
};

function getNombre() {
    return this.nombre;
}

let getNombreInstructor = getNombre.bind(instructor);
let getNombreAlumno = getNombre.bind(alumno);

console.log(getNombreInstructor());
console.log(getNombreAlumno());
