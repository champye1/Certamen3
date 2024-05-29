let juegos = [];

function registrarJuego() {
    const nombreJuego = document.getElementById("nombreJuego").value;
    const valorJuego = parseFloat(document.getElementById("valorJuego").value);
    const cantidadJuego = parseInt(document.getElementById("cantidadJuego").value);
    const errorMessage = document.getElementById("error-message");
    const tableBody = document.getElementById("juegosTable").getElementsByTagName('tbody')[0];

    // Validación básica
    if (!nombreJuego || isNaN(valorJuego) || isNaN(cantidadJuego)) {
        errorMessage.textContent = "Por favor, complete todos los campos correctamente.";
        return;
    }

    // Limpia mensajes de error
    errorMessage.textContent = "";

    const juego = {
        nombre: nombreJuego,
        valor: valorJuego,
        cantidad: cantidadJuego,
        costoTotal: valorJuego * cantidadJuego
    };

    juegos.push(juego);
    actualizarTabla();
}

function actualizarTabla() {
    const tableBody = document.getElementById("juegosTable").getElementsByTagName('tbody')[0];
    tableBody.innerHTML = "";

    juegos.forEach(juego => {
        const newRow = tableBody.insertRow();
        newRow.innerHTML = `
            <td>${juego.nombre}</td>
            <td>${juego.valor.toFixed(2)}</td>
            <td>${juego.cantidad}</td>
            <td>${juego.costoTotal.toFixed(2)}</td>
        `;
    });
}

function calcularCostoTotal() {
    const totalCosto = juegos.reduce((total, juego) => total + juego.costoTotal, 0);
    document.getElementById("totalCosto").textContent = totalCosto.toFixed(2);
}

function calcularTotalRecaudado() {
    const totalRecaudado = juegos.reduce((total, juego) => total + (juego.valor * juego.cantidad), 0);
    document.getElementById("totalRecaudado").textContent = totalRecaudado.toFixed(2);
}
