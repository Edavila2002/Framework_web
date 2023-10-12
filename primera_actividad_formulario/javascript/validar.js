document.addEventListener("DOMContentLoaded", function() {

    var formulario = document.querySelector("form");

    formulario.addEventListener("submit", function(event) {
        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value
        const comentario = document.getElementById("comentario").value


        if (nombre.trim() === "" || correo.trim() === "" || comentario.trim() === "") {
            alert("Por favor, completa todos los campos.");
            event.preventDefault();
        }
    });
});