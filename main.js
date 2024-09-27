class Alumnos {
    constructor(nombre, apellido, edad, materia, calificacion){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad
    this.materia = materia
    this.calificacion = calificacion
      
    }

    inscribirMateria(materia) {
        this.materias.push(materia);
        this.calificacion.push(null);

    }
    
    asignarCalificacion(materia,calificacion){
        const index = this.materias.indexOf(materia);
        if (index !== -1){
            this.calificaciones[index] = calificacion;
        }
    
    }

}

const alumno = {
    alumno1: new Alumnos('Ximena', 'Oropeza','20', 'Ingles2', '75'),
    alumno2: new Alumnos('Pedro', 'Sanchez','22', 'Programacion', '80'),
    alumno3: new Alumnos('Beatriz', 'Madero','24', 'Ingenieria', '85'),
    alumno4: new Alumnos('Adriana', 'Ponton','21', 'Matematicas', '75'),
    alumno5: new Alumnos('Luis', 'Martinez','28', 'Derecho', '90'),
    alumno6: new Alumnos('Humberto', 'Mendoza','25', 'Historia', '85'),
    alumno7: new Alumnos('Angel', 'Mondragon','24', 'Programacion', '75'),
    alumno8: new Alumnos('Monica', 'Cortes','19', 'Ingenieria', '90'),
    alumno9: new Alumnos('Fernando', 'Perez','18', 'Historia', '80'),
    alumno10: new Alumnos('Alondra', 'Mendoza','26', 'Ingles2', '75')
};

function getAlumnos(alumno) {
const table = document.getElementById('AlumnosTable'); table.innerHTML =''
for (const key in alumno) {
    if (alumno.hasOwnProperty(key)) {
     const alumnos = alumno[key];
    
     const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${alumnos.nombre}</td>
                <td>${alumnos.apellido}</td>
                <td>${alumnos.edad}</td>
                <td>${alumnos.materia}</td>
                <td>${alumnos.calificacion}</td> 
            `;
             
            table.appendChild(fila);
            console.log(alumno.asignarCalificacion()); 
        }
    }
}

document.getElementById('search').addEventListener('input', function getName() {
    const filtro = this.value.toLowerCase();
    const alumnosFiltrados = {};
    for (const alumno of Object.values(alumno)) {
        if (estudiante.nombre.toLowerCase().includes(filtro)) {
            alumnosFiltrados[alumno.id] = alumno;
        }
    }
    getAlumnos(alumnosFiltrados);
});

getAlumnos(alumno);

   



