document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    //obtengo valores del formulario
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const edad = document.getElementById("edad").value;
    const direccion = document.getElementById("direccion").value;
    const provincia = document.getElementById("Provincia").value;
    const postal = document.getElementById("postal").value;

    // crear una  fila en la tabla
    const tabla = document.querySelector("#tabla tbody");
    //crea filas con los encabezados en vertical
    const filas = [
      ["Nombre", nombre],
      ["Apellido", apellido],
      ["Email", email],
      ["Telefono", telefono],
      ["Edad", edad],
      ["Direccion", direccion],
      ["Provincia", provincia],
      ["Codigo postal", postal],
      [" ", ""],

    ];

    filas.forEach((fila) => {
      const nuevaFila = document.createElement("tr");
      nuevaFila.innerHTML = `
            <td>${fila[0]}</td>
            <td>${fila[1]}</td>
        `;
      tabla.appendChild(nuevaFila);
    });

    //limpiar formulario
    document.getElementById("formulario").reset();
  });
