class Alumnos {
    constructor(nombre, apellido, edad, materia, calificacion){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.materia = [materia]; 
        this.calificacion = [calificacion]; 
    }

    inscribirMateria(materia) {
        this.materia.push(materia);
        this.calificacion.push(null);
    }
    
    asignarCalificacion(materia, calificacion) {
        const index = this.materia.indexOf(materia);
        if (index !== -1) {
            this.calificacion[index] = calificacion;
        }
    }
}

// Definimos el objeto alumno
const alumno = {
    alumno1: new Alumnos('Ximena', 'Oropeza','20', 'InglesII', '75'),
    alumno2: new Alumnos('Pedro', 'Sanchez','22', 'Programacion', '80'),
    alumno3: new Alumnos('Beatriz', 'Madero','24', 'Ingenieria', '85'),
    alumno4: new Alumnos('Adriana', 'Ponton','21', 'Matematicas', '75'),
    alumno5: new Alumnos('Luis', 'Martinez','28', 'Derecho', '90'),
    alumno6: new Alumnos('Humberto', 'Mendoza','25', 'Historia', '85'),
    alumno7: new Alumnos('Angel', 'Mondragon','24', 'Programacion', '75'),
    alumno8: new Alumnos('Monica', 'Cortes','19', 'Ingenieria', '90'),
    alumno9: new Alumnos('Fernando', 'Perez','18', 'Historia', '80'),
    alumno10: new Alumnos('Alondra', 'Mendoza','26', 'InglesII', '75')
};

// Función para mostrar los alumnos en la tabla
function getAlumnos(alumnos) {
    console.log("Mostrando alumnos..."); // Depuración
    const table = document.getElementById('alumnosTable'); // Asegúrate de que este ID coincida con el HTML
    table.innerHTML = ''; // Limpiar la tabla antes de llenarla

    // Recorremos los alumnos
    for (const key in alumnos) {
        if (alumnos.hasOwnProperty(key)) {
            const alumno = alumnos[key];
            console.log(`Agregando a ${alumno.nombre} ${alumno.apellido}`); // Depuración
            
            // Creamos la fila
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${alumno.nombre}</td>
                <td>${alumno.apellido}</td>
                <td>${alumno.edad}</td>
                <td>${alumno.materia.join(', ')}</td>
                <td>${alumno.calificacion.join(', ')}</td> 
            `;
            
            // Agregamos la fila a la tabla
            table.appendChild(fila);
        }
    }
}

// Llamada inicial para mostrar todos los alumnos
getAlumnos(alumno);

// Agregamos un listener al formulario
document.getElementById('formAlta').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitamos que se recargue la página

    const nombre = document.getElementById('Nombre').value;
    const apellido = document.getElementById('Apellido').value;
    const edad = document.getElementById('Edad').value;

    // Aquí puedes agregar el nuevo alumno al objeto "alumno"
    console.log(`Nuevo alumno: ${nombre} ${apellido} (${edad})`); // Depuración

    // Luego, recargamos la tabla
    getAlumnos(alumno);
});



