
let boton = document.getElementById("boton");
boton.addEventListener("click",mostrar);

function mostrar(){
    let inputNombre = document.getElementById("InputNombre");
    nombre = inputNombre.value;

    let inputApellido = document.getElementById("InputApellido");
    apellido = inputApellido.value;

    let inputEdad = document.getElementById("InputEdad");
    edad = inputEdad.value;

    alert("Nombre: " + nombre + "  Apellido: " +  apellido + "  Edad: " + edad);
}