function validarAcceso() {
    const cargo = document.getElementById("Cargo").value;
    const clave = document.getElementById("Clave").value;
    const errorMessage = document.getElementById("error-message");
    const tableBody = document.getElementById("EmpleadoTable").getElementsByTagName('tbody')[0];

    errorMessage.textContent = "";
    tableBody.innerHTML = "";

    // Validación
    if (cargo === "" || clave === "") {
        errorMessage.textContent = "Error en cargo y/o clave";
        return;
    }

    // Validación 
    if ((cargo === "docente" && clave === "123") || (cargo === "alumno" && clave === "234")) {
        alert(`Acceso concedido: ${cargo}`);


        const newRow = tableBody.insertRow();
        newRow.innerHTML = `
            <td>${cargo}</td>
            <td>${clave}</td>
        `;
    } else {
        errorMessage.textContent = "Error en cargo y/o clave";
    }
}
