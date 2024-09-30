class Alumnos {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.materias = [];
        this.calificaciones = [];
    }

// Inscribir materia y asignar calificacion
    inscribirMateria(materia, calificacion) {
        this.materias.push(materia);
        this.calificaciones.push(calificacion);
    }

// Obtener el promedio de calificaciones
    obtenerPromedio() {
        if (this.calificaciones.length === 0) return 0;
        const total = this.calificaciones.reduce((acc, curr) => acc + curr, 0);
        return (total / this.calificaciones.length).toFixed(2);
    }
}

// Clase para gestionar grupo de alumnos
class Grupo {
    constructor() {
        this.alumnos = []; // Almacena los alumnos 
    }

// Agregar un alumno al grupo
    agregarAlumno(alumno) {
        this.alumnos.push(alumno);
    }

// Buscar alumnos por nombre o apellido 
    buscarPorNombreOApellido(termino) {
        return this.alumnos.filter(alumno => 
            alumno.nombre.toLowerCase().includes(termino.toLowerCase()) || 
            alumno.apellido.toLowerCase().includes(termino.toLowerCase())
        );
    }

// Ordenar a los alumnos por su promedio
    ordenarAlumnosPorCalificacion(ascendente = true) {
        return this.alumnos.slice().sort((a, b) => {
            const promedioA = parseFloat(a.obtenerPromedio());
            const promedioB = parseFloat(b.obtenerPromedio());
            return ascendente ? promedioA - promedioB : promedioB - promedioA;
        });
    }
}

//Instancia de grupo para gestionar a los alumnos
const grupo = new Grupo();

//Funcion para mostrar alumnos en la tabla de HTML
function mostrarAlumnos(alumnos) {
    const tableBody = document.getElementById('alumnosTable');
    tableBody.innerHTML = ''; // Limpiar tabla

    alumnos.forEach(alumno => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${alumno.nombre}</td>
            <td>${alumno.apellido}</td>
            <td>${alumno.edad}</td>
            <td>${alumno.materias.join(', ')}</td>
            <td>${alumno.calificaciones.join(', ')}</td>
            <td>${alumno.obtenerPromedio()}</td>
        `;
        tableBody.appendChild(fila);
    });
}

//Evento para dar de alta un nuevo alumno 
document.getElementById('formAlta').addEventListener('submit', function(event) {
    event.preventDefault();
 
    const nombre = document.getElementById('Nombre').value;
    const apellido = document.getElementById('Apellido').value;
    const edad = document.getElementById('Edad').value;
    const materia = document.getElementById('Materia').value;
    const calificacion = parseFloat(document.getElementById('Calificacion').value);

    if (nombre && apellido && edad && materia && !isNaN(calificacion)) {
 // Crear nuevo alumno  
    const nuevoAlumno = new Alumnos(nombre, apellido, edad);
    nuevoAlumno.inscribirMateria(materia, calificacion);

// Agregar alumno al grupo     
    grupo.agregarAlumno(nuevoAlumno);

// Mostrar los alumnos actualizados    
    mostrarAlumnos(grupo.alumnos);

 // Mostrar mensaje de éxito
 alert(`Alumno ${nombre} ${apellido} ha sido agregado al grupo.`);
} else {
    alert("Por favor, completa todos los campos.");

}  

    // Limpiar el formulario 
    document.getElementById('formAlta').reset();
});

// Evento para buscar alumnos por nombre o apellido 
document.getElementById('btnBuscar').addEventListener('click', function() {
    const termino = document.getElementById('busqueda').value;
    const resultados = grupo.buscarPorNombreOApellido(termino);
    mostrarAlumnos(resultados);
});

// Evento para ordenar alumnos por calificacion ascendente 
document.getElementById('btnOrdenarAsc').addEventListener('click', function() {
    const alumnosOrdenados = grupo.ordenarAlumnosPorCalificacion(true);
    mostrarAlumnos(alumnosOrdenados);
});

// Evento para ordenar alumnos por calificacion ascendente 
document.getElementById('btnOrdenarDesc').addEventListener('click', function() {
    const alumnosOrdenados = grupo.ordenarAlumnosPorCalificacion(false);
    mostrarAlumnos(alumnosOrdenados);
});

