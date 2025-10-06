document.getElementById('formulario').addEventListener('submit', function(event){
    event.preventDefault();

    //obtengo valores del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const edad = document.getElementById('edad').value;
    const direccion = document.getElementById('direccion').value;
    const provincia = document.getElementById('Provincia').value;
    const postal =document.getElementById('postal').value;

    // crear una  fila en la tabla
    const tabla = document.querySelector('#tabla tbody');
    const nuevaFila = document.createElement('tr');

    nuevaFila.innerHTML = `
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${email}</td>
        <td>${telefono}</td>
        <td>${edad}</td>
        <td>${direccion}</td>
        <td>${provincia}</td>
        <td>${postal}</td>
    `;
    tabla.appendChild(nuevaFila);
    //limpiar formulario
    document.getElementById('formulario').reset();

});
